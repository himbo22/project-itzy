# submit review
```uml
@startuml
actor User
participant "User Interface" as UI
participant "ReviewController" as Controller
participant "ReviewService" as Service
database "Database" as Database

== Submit Product Review ==
User -> UI : Enter review content, images, rating
UI -> Controller : Send review data
Controller -> Service : Validate input

Service -> Database : Check if user purchased the product \n(table: Orders)
Database -> Service : Return purchase info

alt "User hasn't purchased"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display "You must purchase before reviewing"
else "Valid"
    Service -> Database : Insert new review (table: Reviews)
    Database -> Service : Confirm insert

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> User : Show 'Review submitted'
end
@enduml
```

# ask product
```uml
@startuml
actor User
participant "User Interface" as UI
participant "QuestionController" as Controller
participant "QuestionService" as Service
database "Database" as Database

== View Product Detail ==
User -> UI : Click on product
UI -> Controller : Request product info (productId)
Controller -> Service : Get product detail
Service -> Database : Load product info (table: Products)
Database -> Service : Return product info

alt "Product is deleted or inactive"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display "Product not available"
    
else "Product is valid"
    Service -> Controller : Return product info
    Controller -> UI : Display product detail
end

== Ask Product Question ==
User -> UI : Enter question content
UI -> Controller : Send question (productId + content)
Controller -> Service : Validate content

alt "Content invalid (empty/forbidden words)"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display "Invalid question"

else "Content is valid"
    Service -> Database : Insert new question \n(table: ProductQuestions)
    Database -> Service : Confirm insert

    Service -> Controller : Return success
    Controller -> UI : Show confirmation
    UI -> User : Show "Question submitted"
end
@enduml
```