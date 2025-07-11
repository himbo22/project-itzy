# follow
```uml
@startuml
actor User
participant "User Interface" as UI
participant "ArtistController" as Controller
participant "ArtistService" as Service
database "Database" as Database

== Follow Artist ==
User -> UI : Click "Follow" on artist profile
UI -> Controller : Send follow request (artistId)
Controller -> Service : followArtist(userId, artistId)

Service -> Database : Check if artist exists \n(table: Artists)
Database -> Service : Return artist

alt "Artist not found"
    Service -> Controller : Return error
    Controller -> UI : Show error message
    UI -> User : Display artist not found
else
    Service -> Database : Check if already followed \n(table: Follow)
    Database -> Service : Return result

    alt "Already followed"
        Service -> Controller : Return message "Already following"
        Controller -> UI : Show status
        UI -> User : Show already followed
    else
        Service -> Database : Insert follow record \n(table: Follow)
        Database -> Service : Confirm insert

        Service -> Controller : Return success
        Controller -> UI : Show follow success
        UI -> User : Display "Now following"
    end
end
@enduml
```

# unfollow
```uml
@startuml
actor User
participant "User Interface" as UI
participant "ArtistController" as Controller
participant "ArtistService" as Service
database "Database" as Database

== Unfollow Artist ==
User -> UI : Click "Unfollow"
UI -> Controller : Send unfollow request (artistId)
Controller -> Service : unfollowArtist(userId, artistId)

Service -> Database : Check if follow record exists \n(table: Follow)
Database -> Service : Return result

alt "Not following"
    Service -> Controller : Return message "Not following"
    Controller -> UI : Show status
    UI -> User : Display info
else
    Service -> Database : Delete follow record \n(table: Follow)
    Database -> Service : Confirm deletion

    Service -> Controller : Return success
    Controller -> UI : Show success
    UI -> User : Display "Unfollowed"
end
@enduml
```

# comment
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CommunityController" as Controller
participant "CommunityService" as Service
database "Database" as Database

== Add Comment ==
User -> UI : Write and submit comment on artist
UI -> Controller : Send add comment request (artistId, content)
Controller -> Service : addComment(userId, artistId, content)

Service -> Service : Validate content

alt "Invalid (empty or too long)"
    Service -> Controller : Return error
    Controller -> UI : Show validation error
    UI -> User : Display message
else
    Service -> Database : Check if artist exists \n(table: Artists)
    Database -> Service : Return artist

    alt "Artist not found"
        Service -> Controller : Return error
        Controller -> UI : Show error
        UI -> User : Show not found
    else
        Service -> Database : Insert comment \n(table: Community)
        Database -> Service : Confirm insert

        Service -> Controller : Return success
        Controller -> UI : Show success
        UI -> User : Show comment posted
    end
end
@enduml
```

# delete comment
```uml
@startuml
actor User
participant "User Interface" as UI
participant "CommunityController" as Controller
participant "CommunityService" as Service
database "Database" as Database

== Delete Comment ==
User -> UI : Click "Delete" on a comment
UI -> Controller : Send delete request (commentId)
Controller -> Service : deleteComment(userId, commentId)

Service -> Database : Get comment by ID \n(table: Community)
Database -> Service : Return comment

alt "Comment not found or not owned"
    Service -> Controller : Return error
    Controller -> UI : Show error
    UI -> User : Display message
else
    Service -> Database : Delete comment \n(table: Community)
    Database -> Service : Confirm deletion

    Service -> Controller : Return success
    Controller -> UI : Show deleted
    UI -> User : Remove comment from view
end
@enduml
```