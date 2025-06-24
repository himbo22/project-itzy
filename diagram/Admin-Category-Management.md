# add
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "CategoryController" as Controller
participant "CategoryService" as Service
database "Database" as Repository

== Create Category ==
Admin -> UI : Enter new category info
UI -> Controller : Send create request (category data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields (e.g. name not empty)
Service -> Repository : Check if category name already exists
Repository -> Service : Return check result

alt "Valid and not duplicated"
    Service -> Repository : Save new category to DB (table: Category)
    Repository -> Service : Confirm saved
    Service -> Controller : Return success
else "Invalid or duplicate name"
    Service -> Controller : Return error message
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
participant "CategoryController" as Controller
participant "CategoryService" as Service
database "Database" as Repository

== Update Category ==
Admin -> UI : Edit category info
UI -> Controller : Send update request (category ID + new data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields (e.g. name not empty)
Service -> Repository : Check if category exists by ID
Repository -> Service : Return category (if exists)

alt "Category exists"

        Service -> Repository : Update category in DB (table: Category)
        Repository -> Service : Confirm updated
        Service -> Controller : Return success


else "Category not found"
    Service -> Controller : Return error: category not found
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
participant "CategoryController" as Controller
participant "CategoryService" as Service
database "Database" as Repository

== Delete Category ==
Admin -> UI : Select category to delete
UI -> Controller : Send delete request (category ID)
Controller -> Service : Validate ID
Service -> Repository : Check if category exists
Repository -> Service : Exists?

alt "Exists"
    Service -> Repository : Delete category (table: Category)
    Repository -> Service : Confirm deleted
    Service -> Controller : Return success
else "Not Found"
    Service -> Controller : Return error
end
Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```