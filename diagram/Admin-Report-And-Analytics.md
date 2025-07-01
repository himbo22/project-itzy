# sales reports – Doanh thu theo ngày/tuần/tháng/năm
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ReportController" as Controller
participant "ReportService" as Service
database "Database" as OrdersTable

== Sales Reports ==
Admin -> UI : Select time range (day/week/month/year)
UI -> Controller : Request sales report
Controller -> Service : Process report request

Service -> OrdersTable : Query completed orders by date range \n(table: Orders)
OrdersTable -> Service : Return order list

Service -> Service : Calculate total revenue
Service -> Controller : Return result

Controller -> UI : Return data
UI -> Admin : Display revenue report
@enduml
```

# order reports – Đã đặt / huỷ / hoàn trả
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ReportController" as Controller
participant "ReportService" as Service
database "Database" as OrdersTable
== Order Reports ==
Admin -> UI : Select time range
UI -> Controller : Request order report
Controller -> Service : Process request

Service -> OrdersTable : Query orders by status (placed/cancelled/refunded) \n(table: Orders)
OrdersTable -> Service : Return data

Service -> Service : Count orders by status
Service -> Controller : Return summary
Controller -> UI : Return data
UI -> Admin : Display order report
@enduml
```

# product reports - Top-Selling Products
```uml
@startuml
actor Admin
participant "Admin Interface" as UI
participant "ReportController" as Controller
participant "ReportService" as Service
database "Database" as db

== Top-Selling Products ==
Admin -> UI : Select time range
UI -> Controller : Request top-selling products
Controller -> Service : Handle request

Service -> db : Filter completed orders by date \n(table: Orders, Products)
db -> Service : Return data

Service -> Service : Sort and return top N products
Service -> Controller : Return result
Controller -> UI : Display data
UI -> Admin : View top-selling products
@enduml
```
