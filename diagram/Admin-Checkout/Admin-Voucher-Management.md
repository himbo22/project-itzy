# add voucher
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "VoucherController" as Controller
participant "VoucherService" as Service
database "Database" as Repository

== Create Voucher ==
Admin -> UI : Enter new voucher info
UI -> Controller : Send add voucher request (data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields (e.g. code, discount, dates)
Service -> Repository : Check if voucher code already exists
Repository -> Service : Return check result

alt "Valid and not duplicated"
    Service -> Repository : Save new voucher to DB\n(table: Voucher)
    Repository -> Service : Confirm saved
    Service -> Controller : Return success
else "Invalid data or duplicate code"
    Service -> Controller : Return error message
end

Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```

# update voucher
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "VoucherController" as Controller
participant "VoucherService" as Service
database "Database" as Repository

== Start updating voucher ==
Admin -> UI : Enter updated voucher info
UI -> Controller : Send update voucher request (data)
Controller -> Service : Send data to Service for processing
Service -> Service : Validate update data
alt "Valid"
Service -> Repository : Check if voucher exists
Repository -> Service : Return voucher found
alt "Voucher exists"
Service -> Repository : Update voucher in database\n(table: Voucher)
Repository -> Controller : Confirm update success
else "Voucher not found"
Repository -> Controller : Update failed (not found)
end

else "Invalid data"
Repository -> Controller : Update failed (invalid)
end
Controller -> UI : Return update result
UI -> Admin : Display result
@enduml
```

# delete voucher
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "VoucherController" as Controller
participant "VoucherService" as Service
database "Database" as Repository

== Start deleting voucher ==
Admin -> UI : Choose voucher to delete
UI -> Controller : Send delete request (voucher ID)
Controller -> Service : Request delete processing
Service -> Repository : Check if voucher exists
Repository -> Service : Voucher found?

alt "Voucher exists"
    Service -> Repository : Delete voucher from database
    Repository -> Service : Confirm deletion
    Service -> Controller : Return success
else "Voucher not found"
    Service -> Controller : Return error: not found
end
Controller -> UI : Return result message
UI -> Admin : Display result
@enduml
```