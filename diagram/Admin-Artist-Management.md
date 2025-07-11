# add
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ArtistController" as Controller
participant "ArtistService" as Service
database "Database" as Database

== Add Artist ==
Admin -> UI : Enter artist information (name, image, company, members)
UI -> Controller : Send add artist request
Controller -> Service : createArtist(data)

== Step 1: Validate input ==
Service -> Service : Check for required fields

alt "Missing fields"
    Service -> Controller : Return error "Missing required fields"
    Controller -> UI : Show error message
    UI -> Admin : Display validation error
else

    == Step 2: Check for duplicate name ==
    Service -> Database : Find artist by name \n(table: Artists)
    Database -> Service : Return artist (if exists)

    alt "Duplicate name"
        Service -> Controller : Return error "Artist name already exists"
        Controller -> UI : Show error message
        UI -> Admin : Display duplicate name warning

    else "Valid input"
        == Step 3: Save artist ==
        Service -> Database : Insert new artist \n(table: Artists)
        Database -> Service : Confirm success

        Service -> Controller : Return success message
        Controller -> UI : Show success message
        UI -> Admin : Display "Artist added successfully"
    end
end
@enduml
```

# update
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ArtistController" as Controller
participant "ArtistService" as Service
database "Database" as Database

== Update Artist ==
Admin -> UI : Select artist to update and enter new info
UI -> Controller : Send update request (artistId, updated data)
Controller -> Service : updateArtist(artistId, data)

== Step 1: Check if artist exists ==
Service -> Database : Find artist by ID \n(table: Artists)
Database -> Service : Return artist data

alt "Artist not found"
    Service -> Controller : Return error "Artist not found"
    Controller -> UI : Show error message
    UI -> Admin : Display error
else

    == Step 2: Validate updated data ==
    Service -> Service : Check input fields

    alt "Missing fields"
        Service -> Controller : Return error "Missing required fields"
        Controller -> UI : Show error message
        UI -> Admin : Display validation error
    else

        == Step 3: Check for name duplication (if name changed) ==
        Service -> Database : Find artist by new name \n(table: Artists)
        Database -> Service : Return result

        alt "Duplicate name found"
            Service -> Controller : Return error "Duplicate artist name"
            Controller -> UI : Show error
            UI -> Admin : Show duplicate name warning
        else

            == Step 4: Update artist ==
            Service -> Database : Update artist record \n(table: Artists)
            Database -> Service : Confirm update

            Service -> Controller : Return success
            Controller -> UI : Show update success
            UI -> Admin : Display "Artist updated successfully"
        end
    end
end
@enduml
```

# delete
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ArtistController" as Controller
participant "ArtistService" as Service
database "Database" as Database

== Delete Artist ==
Admin -> UI : Click "Delete" on selected artist
UI -> Controller : Send delete request (artistId)
Controller -> Service : deleteArtist(artistId)

== Step 1: Check if artist exists ==
Service -> Database : Find artist by ID \n(table: Artists)
Database -> Service : Return artist data

alt "Artist not found"
    Service -> Controller : Return error "Artist not found"
    Controller -> UI : Show error message
    UI -> Admin : Display error
else

    == Step 2: Soft delete artist ==
    Service -> Database : Set artist status to "deleted" \n(table: Artists)
    Database -> Service : Confirm update

    Service -> Controller : Return success message
    Controller -> UI : Show success message
    UI -> Admin : Display "Artist deleted successfully"
end
@enduml
```
