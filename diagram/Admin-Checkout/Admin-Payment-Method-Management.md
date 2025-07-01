# add payment method
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "PaymentMethodController" as Controller
participant "PaymentMethodService" as Service
database "Database" as Database

== Add Payment Method ==
Admin -> UI : Enter name, gateway key, description
UI -> Controller : Submit add request
Controller -> Service : Validate input

Service -> Database : Check duplicate name \n(table: PaymentMethods)
Database -> Service : Return check result

alt "Duplicate name"
    Service -> Controller : Return error
    Controller -> UI : Show duplicate name error
    UI -> Admin : Display error
else "Valid"
    Service -> Database : Insert new payment method \n(table: PaymentMethods)
    Database -> Service : Confirm insert

    Service -> Controller : Return success
    Controller -> UI : Show confirmation
    UI -> Admin : Display success
end
@enduml
```

# update payment method
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "PaymentMethodController" as Controller
participant "PaymentMethodService" as Service
database "Database" as Database

== Update Payment Method ==
Admin -> UI : Edit payment method info
UI -> Controller : Submit update request (id + new data)
Controller -> Service : Validate input

Service -> Database : Find payment method by id \n(table: PaymentMethods)
Database -> Service : Return payment method

alt "Not found"
    Service -> Controller : Return error
    Controller -> UI : Show not found error
    UI -> Admin : Display error

else "Found"
    Service -> Database : Update payment method \n(table: PaymentMethods)
    Database -> Service : Confirm update

    Service -> Controller : Return success
    Controller -> UI : Show confirmation
    UI -> Admin : Display success
end
@enduml

```

# delete payment method
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "PaymentMethodController" as Controller
participant "PaymentMethodService" as Service
database "Database" as Database

== Delete Payment Method ==
Admin -> UI : Click delete on payment method
UI -> Controller : Send delete request (id)
Controller -> Service : Validate id

Service -> Database : Find payment method by id \n(table: PaymentMethods)
Database -> Service : Return result

alt "Not found"
    Service -> Controller : Return error
    Controller -> UI : Show not found
    UI -> Admin : Display error

else "Found"
    Service -> Database : Soft delete payment method \n(table: PaymentMethods)
    Database -> Service : Confirm deletion

    Service -> Controller : Return success
    Controller -> UI : Show confirmation
    UI -> Admin : Display success
end
@enduml
```