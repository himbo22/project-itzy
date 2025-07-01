# place order
```uml
@startuml
actor User
participant "User Interface" as UI
participant "OrderController" as Controller
participant "OrderService" as Service
database "Database" as Database

== Place Order ==

User -> UI : Select products and go to checkout

== Select Shipping Method ==
User -> UI : Choose shipping method
UI -> Controller : Send shipping method
Controller -> Service : Validate shipping method
Service -> Database : Check available shipping options \n(table: ShippingMethods)
Database -> Service : Return shipping option
Service -> Controller : Return validation result
Controller -> UI : Show confirmation



== Confirm Order ==
User -> UI : Click "Place Order"
UI -> Controller : Submit order data
Controller -> Service : validateOrder(orderData)

ref over Service, Database : validateOrder()
note right of Service
Check product stock (table: Products)
→ If insufficient → return error immediately

Check shipping method (table: ShippingMethods)
→ If invalid → return error

Check voucher (table: Vouchers)
→ If invalid/expired → return error

Check payment method (table: PaymentMethods)
→ If invalid → return error
end note
Service -> Controller : Validation passed or error

alt "Validation failed"
    Controller -> UI : Show error
    UI -> User : Display error
else "Validation passed"
    Service -> Database : Create order \n(table: Orders)
    Service -> Database : Create order items \n(table: OrderItems)
    Service -> Database : Reduce stock \n(table: Products)
    Database -> Service : Confirm success

    Service -> Controller : Return order info
    Controller -> UI : Show order confirmation
    UI -> User : Display success
end
@enduml
```

# cancel order
```uml
@startuml
actor User
participant "User Interface" as UI
participant "OrderController" as Controller
participant "OrderService" as Service
database "Database" as Database

== Cancel Order ==
User -> UI : Click "Cancel Order" (select order)
UI -> Controller : Send cancel request (orderId, userId)
Controller -> Service : cancelOrder(orderId, userId)

== Step 1: Load Order ==
Service -> Database : Find order by ID \n(table: Orders)
Database -> Service : Return order info

alt "Order not found or user unauthorized"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display error message
else
    alt "Order already shipped or cannot cancel"
        Service -> Controller : Return cannot cancel error
        Controller -> UI : Show error
        UI -> User : Display failure
    else
        == Step 2: Mark as cancelled ==
        Service -> Database : Update order status to CANCELLED \n(table: Orders)
        Database -> Service : Confirm update

        == Step 3: Restore inventory (optional) ==
        Service -> Database : Restore inventory for items \n(table: Products)
        Database -> Service : Confirm restore

        Service -> Controller : Return success
        Controller -> UI : Show cancel success
        UI -> User : Display "Order cancelled"
    end
end
@enduml
```

# view order history
```uml
@startuml
actor User
participant "User Interface" as UI
participant "OrderController" as Controller
participant "OrderService" as Service
database "Database" as Database

== View Order History ==
User -> UI : Navigate to "My Orders"
UI -> Controller : Request order history (userId)
Controller -> Service : getOrderHistory(userId)

Service -> Database : Query orders by userId \n(table: Orders)
Database -> Service : Return list of orders

Service -> Controller : Return order list
Controller -> UI : Send order list to view
UI -> User : Display order history
@enduml
```

# return order
```uml
@startuml
actor User
participant "User Interface" as UI
participant "OrderController" as Controller
participant "OrderService" as Service
database "Database" as Database

== Return Order ==
User -> UI : Click "Return Order" \n(select order/item)
UI -> Controller : Submit return request \n(orderId, reason)
Controller -> Service : returnOrder\n(orderId, userId, reason)

== Step 1: Load Order ==
Service -> Database : Find order by ID \n(table: Orders)
Database -> Service : Return order info

alt "Order not found, not delivered or not owned by user"
    Service -> Controller : Return error
    Controller -> UI : Show not found \nnot owned by user\nnot delivered
    UI -> User : Display error message

else
  
        == Step 2: Mark return status ==
        Service -> Database : Update order item status \nto RETURN_REQUESTED \n(table: Orders)
        Database -> Service : Confirm update

        Service -> Controller : Return success
        Controller -> UI : Show return requested
        UI -> User : Display confirmation
    end
@enduml
```