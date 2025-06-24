# add
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ProductController" as Controller
participant "ProductService" as Service
database "Database" as Repository

== Create Product ==
Admin -> UI : Enter new product info
UI -> Controller : Send create request (product data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields (name, price,...)
Service -> Repository : Check if product name already exists
Repository --> Service : Return check result

alt "Valid and name not duplicated"
    Service -> Repository : Save new product to DB (table: Product)
    Repository --> Service : Confirm saved
    Service --> Controller : Return success
else "Invalid data or duplicate name"
    Service --> Controller : Return error message
end

Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```

# update
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ProductController" as Controller
participant "ProductService" as Service
database "Database" as Repository

== Update Product ==
Admin -> UI : Edit product info
UI -> Controller : Send update request (product ID + new data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields
Service -> Repository : Check if product exists by ID
Repository --> Service : Return product (if exists)

alt "Product exists"
    Service -> Repository : Check if new name exists in another product
    Repository --> Service : Return name check result

    alt "Name is unique"
        Service -> Repository : Update product in DB (table: Product)
        Repository --> Service : Confirm updated
        Service --> Controller : Return success
    else "Duplicate name"
        Service --> Controller : Return error: duplicate name
    end

else "Product not found"
    Service --> Controller : Return error: not found
end

Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```

# delete
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ProductController" as Controller
participant "ProductService" as Service
database "Database" as Repository

== Delete Product ==
Admin -> UI : Select product to delete
UI -> Controller : Send delete request (product ID)
Controller -> Service : Validate ID
Service -> Repository : Check if product exists
Repository --> Service : Exists?

alt "Exists"
    Service -> Repository : Delete product from DB (table: Product)
    Repository --> Service : Confirm deleted
    Service --> Controller : Return success
else "Not found"
    Service --> Controller : Return error
end

Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```