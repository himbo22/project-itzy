# update avatar
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "UserController" as Controller
participant "UserService" as Service
participant "FileStorage (public/)" as Storage
database "Database" as Database

== Upload Avatar ==
User -> UI : Select image file
UI -> Controller : POST /upload-avatar (multipart file)
Controller -> Service : updateAvatar(userId, imageFile)

== Step 1: Validate file ==
Service -> Service : Check file size, extension

alt "Invalid file (too large or wrong format)"
    Service -> Controller : Return error
    Controller -> UI : Show error message
    UI -> User : Display validation error
else
    == Step 2: Save file ==
    Service -> Storage : Save to /public/uploads/avatars
    Storage -> Service : Return public URL

    == Step 3: Save URL to DB ==
    Service -> Database : Insert (userId, imageUrl) \n(table: Images)
    Database -> Service : Confirm saved

    Service -> Controller : Return success (imageUrl)
    Controller -> UI : Show avatar
    UI -> User : Display new avatar
end
@enduml
```

# update personal info
```uml
@startuml
actor User
participant "Next.js UI" as UI
participant "UserController" as Controller
participant "UserService" as Service
database "Database" as Database

== Update Personal Info ==
User -> UI : Edit personal info
UI -> Controller : Submit update request (userId, newInfo)
Controller -> Service : updateUserInfo(userId, newInfo)

== Step 1: Validate input ==
Service -> Service : Check required fields

alt "Invalid input"
    Service -> Controller : Return error
    Controller -> UI : Show error message
    UI -> User : Display validation error
else
    == Step 2: Update in DB ==
    Service -> Database : Update user info \n(table: Users)
    Database -> Service : Confirm update

    Service -> Controller : Return success
    Controller -> UI : Show success message
    UI -> User : Display updated info
end
@enduml