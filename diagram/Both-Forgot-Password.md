# forgot password
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "AuthController" as Controller
participant "AuthService" as Service
participant "Cache (OTP Store)" as Cache
participant "EmailService" as Email
database "Database" as Database

== Step 1: Request OTP ==
User -> UI : Click "Forgot Password"
UI -> Controller : Submit email
Controller -> Service : requestPasswordReset(email)

Service -> Database : Find user by email \n(table: Users)
Database -> Service : Return user (or null)

alt "User not found"
    Service -> Controller : Return error
    Controller -> UI : Show user not found
    UI -> User : Display error
else
    Service -> Service : Generate OTP
    Service -> Cache : Save OTP with email as key \n(Expiry: 5 mins)
    Service -> Email : Send OTP to user's email

    Service -> Controller : Return success
    Controller -> UI : Prompt for OTP and new password
end

== Step 2: Submit OTP & New Password ==
User -> UI : Enter OTP + new password
UI -> Controller : Submit OTP & new password
Controller -> Service : verifyOtpAndResetPassword(email, otp, newPassword)

Service -> Cache : Get OTP by email
Cache -> Service : Return OTP or null

alt "OTP invalid or expired"
    Service -> Controller : Return OTP error
    Controller -> UI : Show OTP error
    UI -> User : Display error
else
    Service -> Database : Hash and update password \n(table: Users)
    Database -> Service : Confirm update
    Service -> Cache : Invalidate OTP entry

    Service -> Controller : Return success
    Controller -> UI : Show reset success
    UI -> User : Display confirmation
end
@enduml
```