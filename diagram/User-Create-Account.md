# create account
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "UserController" as Controller
participant "UserService" as Service
database "Database" as Database

== Create Account ==
User -> UI : Click "Sign Up"
UI -> Controller : Send sign-up request (email, password)
Controller -> Service : createUser(email, password)

== Step 1: Validate input ==
Service -> Service : Check required fields

alt "Invalid input"
    Service -> Controller : Return error
    Controller -> UI : Show error message
    UI -> User : Display validation error
else
    == Step 2: Check for existing user ==
    Service -> Database : Query user by email \n(table: Users)
    Database -> Service : Return user info

    alt "User already exists"
        Service -> Controller : Return error
        Controller -> UI : Show user exists
        UI -> User : Display error
    else
        == Step 3: Generate & send OTP ==
        Service -> Service : Generate OTP
        Service -> Database : Save OTP with email \n(table: OTPs)
        Service -> ExternalService : Send OTP to user (email/SMS)

        Service -> Controller : Ask UI to prompt for OTP
        Controller -> UI : Show OTP input
        UI -> User : Enter OTP

        == Step 4: Validate OTP ==
        UI -> Controller : Submit OTP
        Controller -> Service : validateOtp(email, otp)
        Service -> Database : Query OTP by email \n(table: OTPs)
        Database -> Service : Return stored OTP

        alt "OTP invalid or expired"
            Service -> Controller : Return OTP error
            Controller -> UI : Show OTP error
            UI -> User : Display error
        else
            == Step 5: Create user ==
            Service -> Database : Insert (email, password) \n(table: Users)
            Database -> Service : Confirm created

            Service -> Controller : Return success
            Controller -> UI : Show success message
            UI -> User : Display welcome message
        end
    end
end
@enduml
```