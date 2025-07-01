# login
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "AuthController" as Controller
participant "AuthService" as Service
database "Database" as Database

== Login ==
User -> UI : Enter email & password
UI -> Controller : Send login request
Controller -> Service : login(email, password)

== Step 1: Validate input ==
Service -> Service : Check empty email or password

alt "Invalid input"
    Service -> Controller : Return validation error
    Controller -> UI : Show error message
    UI -> User : Display error
else
    == Step 2: Find user ==
    Service -> Database : Query user by email \n(table: Users)
    Database -> Service : Return user data

    alt "User not found"
        Service -> Controller : Return login failed
        Controller -> UI : Show error
        UI -> User : Display login error
    else
        == Step 3: Verify password ==
        Service -> Service : Compare hashed passwords

        alt "Password incorrect"
            Service -> Controller : Return login failed
            Controller -> UI : Show error
            UI -> User : Display login error
        else
            == Step 4: Generate token/session ==
            Service -> Service : Generate JWT / session

            Service -> Controller : Return login success + token
            Controller -> UI : Store token / redirect user
            UI -> User : Redirect to dashboard
        end
    end
end
@enduml
```