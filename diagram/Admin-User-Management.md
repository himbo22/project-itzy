# suspend user
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "UserController" as Controller
participant "UserService" as Service
database "Database" as Repository

== Suspend User ==
Admin -> UI : Select user + click "Suspend"
UI -> Controller : Send suspend request (user ID)
Controller -> Service : Validate request

Service -> Repository : Check if user exists
Repository --> Service : Return user

alt "User exists"
    Service -> Repository : Update user status = suspended \n(table: User)
    Repository --> Service : Confirm update
    Service --> Controller : Return success
else "User not found"
    Service --> Controller : Return error
end

Controller -> UI : Return result
UI -> Admin : Display message
@enduml
```

# unsuspend user
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "UserController" as Controller
participant "UserService" as Service
database "Database" as Repository

== Unsuspend User ==
Admin -> UI : Select suspended user + click "Unsuspend"
UI -> Controller : Send unsuspend request (user ID)
Controller -> Service : Validate request

Service -> Repository : Check if user exists
Repository --> Service : Return user

alt "User exists"
    Service -> Repository : Update user status = active
    Repository --> Service : Confirm update
    Service --> Controller : Return success
else "User not found"
    Service --> Controller : Return error
end

Controller -> UI : Return result
UI -> Admin : Display message
@enduml
```