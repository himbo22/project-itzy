# add coupon
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "CouponController" as Controller
participant "CouponService" as Service
database "Database" as Repository

== Create Coupon ==
Admin -> UI : Enter new coupon info
UI -> Controller : Send add coupon request (data)
Controller -> Service : Validate and process data

Service -> Service : Check required fields (e.g. code, discount, dates)
Service -> Repository : Check if coupon code already exists
Repository -> Service : Return check result

alt "Valid and not duplicated"
    Service -> Repository : Save new coupon to DB\n(table: Coupon)
    Repository -> Service : Confirm saved
    Service -> Controller : Return success
else "Invalid data or duplicate code"
    Service -> Controller : Return error message
end

Controller -> UI : Show result
UI -> Admin : Display message
@enduml
```

# update coupon
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "CouponController" as Controller
participant "CouponService" as Service
database "Database" as Repository

== Start updating coupon ==
Admin -> UI : Enter updated coupon info
UI -> Controller : Send update coupon request (data)
Controller -> Service : Send data to Service for processing
Service -> Service : Validate update data
alt "Valid"
Service -> Repository : Check if coupon exists
Repository -> Service : Return coupon found
alt "Coupon exists"
Service -> Repository : Update coupon in database\n(table: Coupon)
Repository -> Controller : Confirm update success
else "Coupon not found"
Repository -> Controller : Update failed (not found)
end

else "Invalid data"
Repository -> Controller : Update failed (invalid)
end
Controller -> UI : Return update result
UI -> Admin : Display result
@enduml
```

# delete coupon
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "CouponController" as Controller
participant "CouponService" as Service
database "Database" as Repository

== Start deleting coupon ==
Admin -> UI : Choose coupon to delete
UI -> Controller : Send delete request (coupon ID)
Controller -> Service : Request delete processing
Service -> Repository : Check if coupon exists
Repository -> Service : Coupon found?

alt "Coupon exists"
    Service -> Repository : Delete coupon from database
    Repository -> Service : Confirm deletion
    Service -> Controller : Return success
else "Coupon not found"
    Service -> Controller : Return error: not found
end
Controller -> UI : Return result message
UI -> Admin : Display result
@enduml
```