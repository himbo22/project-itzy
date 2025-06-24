# Answer Customer Question
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "QuestionController" as Controller
participant "QuestionService" as Service
database "Database" as Repository

== Answer Customer Question ==
Admin -> UI : View unanswered question
Admin -> UI : Enter answer content
UI -> Controller : Send answer request (question ID + answer)
Controller -> Service : Validate input
Service -> Repository : Check if question exists
Repository --> Service : Return question data

alt "Question exists"
    Service -> Repository : Update answer + set status = answered \n (table: Question)
    Repository --> Service : Confirm updated
    Service --> Controller : Return success
else "Question not found"
    Service --> Controller : Return error
end

Controller -> UI : Return result
UI -> Admin : Display message
@enduml
```

# Moderate Review & Question
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ModerationController" as Controller
participant "ModerationService" as Service
database "Database" as Repository

== Moderate Review or Question ==
Admin -> UI : View list of pending reviews/questions
Admin -> UI : Select item + action (approve / reject / hide)
UI -> Controller : Send moderation request (item type, ID, action)
Controller -> Service : Validate moderation request

Service -> Repository : Check if item exists
Repository --> Service : Return item

alt "Item exists"
    Service -> Repository : Apply moderation action\n(update status) \n(table: Question or Review)
    Repository --> Service : Confirm updated
    Service --> Controller : Return success
else "Item not found"
    Service --> Controller : Return error
end

Controller -> UI : Return result
UI -> Admin : Display message
@enduml
```