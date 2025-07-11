# logout
```uml
@startuml
actor "Admin/User"
participant "Browser (FE)" as FE
participant "Next.js API (BE)" as BE

== Logout ==

"Admin/User" -> FE : Click Logout
FE -> BE : POST /api/logout
BE -> FE : Set-Cookie: accessToken=deleted
@enduml
```