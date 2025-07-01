# logout
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "AuthController" as Controller
participant "AuthService" as Service

== Logout ==
User -> UI : Click "Logout"
UI -> Controller : Send logout request (with token)
Controller -> Service : logout(token)

== Step 1: Stateless Logout ==
Service -> Service : [Optional] Add token to blacklist (if used)

Service -> Controller : Return success
Controller -> UI : Remove token from client storage
UI -> User : Redirect to login screen
@enduml
```