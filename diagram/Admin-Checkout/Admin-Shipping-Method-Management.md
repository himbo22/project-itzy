# add
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ShippingMethodController" as Controller
participant "ShippingMethodService" as Service
database "Database" as Database

== Add Shipping Method ==
Admin -> UI : Enter name, price, description
UI -> Controller : Submit add request
Controller -> Service : Validate data

Service -> Database : Check if name already exists \n(table: ShippingMethods)
Database -> Service : Return check result

alt "Duplicate name"
    Service -> Controller : Return error
    Controller -> UI : Show duplicate name error
    UI -> Admin : Display error
else "Valid"
    Service -> Database : Insert new shipping method\n(table: ShippingMethods)
    Database -> Service : Confirm insert

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> Admin : Display confirmation
end
@enduml
```

# update
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ShippingMethodController" as Controller
participant "ShippingMethodService" as Service
database "Database" as Database

== Update Shipping Method ==
Admin -> UI : Open form, edit name, price, etc.
UI -> Controller : Submit update (id + new data)
Controller -> Service : Validate new data

Service -> Database : Load shipping method by id \n(table: ShippingMethods)
Database -> Service : Return method

alt "Not found"
    Service -> Controller : Return error
    Controller -> UI : Show not found
    UI -> Admin : Display error

else "Found"
    Service -> Database : Update shipping method \n(table: ShippingMethods)
    Database -> Service : Confirm update

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> Admin : Display confirmation
end
@enduml
```

# delete
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ShippingMethodController" as Controller
participant "ShippingMethodService" as Service
database "Database" as Database

== Delete Shipping Method ==
Admin -> UI : Click delete on a shipping method
UI -> Controller : Send delete request (id)
Controller -> Service : Validate id

Service -> Database : Find shipping method by id\n(table: ShippingMethods)
Database -> Service : Return method

alt "Not found"
    Service -> Controller : Return error
    Controller -> UI : Show not found
    UI -> Admin : Display error

else "Found"
    Service -> Database : Delete method (soft delete) \n(table: ShippingMethods) 
    Database -> Service : Confirm deletion

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> Admin : Display confirmation
end
@enduml
```