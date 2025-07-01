# add item into cart
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CartController" as Controller
participant "CartService" as Service
database "Database" as Database

== Add to Cart ==
User -> UI : Click "Add to Cart" (select product + quantity)
UI -> Controller : Send add-to-cart request
Controller -> Service : Validate product and quantity

Service -> Database : Load product info (status, stock, deleted) \n(table: Products)
Database -> Service : Return product info

alt "Product is unavailable (inactive, out of stock, or deleted)"
    Service -> Controller : Return error "Product unavailable"
    Controller -> UI : Show error
    UI -> User : Display error message

else "Product is available"
    Service -> Database : Check if product already in cart \n(table: Carts)
    Database -> Service : Return cart item (if exists)

    alt "Product already in cart"
        Service -> Database : Update quantity\n(table: Carts)
    else "New product"
        Service -> Database : Insert new cart item\n(table: Carts)
    end

    Service -> Controller : Return success
    Controller -> UI : Show confirmation
    UI -> User : Show success message
end
@enduml
```

# update cart item quantity
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CartController" as Controller
participant "CartService" as Service
database "Database" as Database

== Update Cart Quantity ==
User -> UI : Change quantity (e.g., from 1 to 3)
UI -> Controller : Send update request (productId, new quantity)
Controller -> Service : Validate input format (e.g., number)

Service -> Database : Load product info (status, stock, deleted) \n(table: Products)
Database -> Service : Return product info

alt "Product unavailable (inactive, deleted, or out of stock)"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display error message

else "Product valid"
    Service -> Database : Find cart item by user + product \n(table: Carts)
    Database -> Service : Return cart item
    Service -> Service : Enter quantity of products in cart

    alt "Cart item not found"
        Service -> Controller : Return error
        Controller -> UI : Show error
        UI -> User : Display 'Cart item not found'
    
    else "Cart item exists"
        alt "Quantity is invalid (zero or exceeds stock)"
            Service -> Controller : Return validation error
            Controller -> UI : Show error
            UI -> User : Display validation error

        else "Quantity is valid"
            Service -> Database : Update cart item with new quantity \n(table: Carts)
            Database -> Service : Confirm update

            Service -> Controller : Return success
            Controller -> UI : Show success
            UI -> User : Refresh cart view
        end
    end
end
@enduml
```

# delete one cart item
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CartController" as Controller
participant "CartService" as Service
database "Database" as Database

== Delete One Cart Item ==
User -> UI : Click "Remove" on a cart item
UI -> Controller : Send delete request (productId)
Controller -> Service : Validate productId

Service -> Database : Find cart item by user + product \n(table: Carts)
Database -> Service : Return cart item

alt "Cart item not found"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Show not found message

else "Cart item exists"
    Service -> Database : Delete cart item \n(table: Carts)
    Database -> Service : Confirm deletion

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> User : Refresh cart view
end
@enduml
```

# delete all items from cart (clear cart)
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CartController" as Controller
participant "CartService" as Service
database "Database" as Database

== Clear Entire Cart ==
User -> UI : Click "Clear Cart"
UI -> Controller : Send clear-cart request
Controller -> Service : Validate user session

Service -> Database : Delete all cart items by user \n(table: Carts)
Database -> Service : Confirm deletion

Service -> Controller : Return success
Controller -> UI : Show success
UI -> User : Show empty cart
@enduml
```
