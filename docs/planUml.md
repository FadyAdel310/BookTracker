# 1️⃣ Use Case Diagram

Shows interactions between users and the system.

```plantuml
@startuml
actor User
actor Admin

rectangle BookTrack {
  User --> (Register/Login)
  User --> (Browse/Search Books)
  User --> (Purchase Book)
  User --> (Track Reading Progress)
  User --> (Manage Profile)

  Admin --> (Manage Books)
  Admin --> (Manage Users)
  Admin --> (View Transactions)
}
@enduml
```

---

# 2️⃣ Class Diagram

Represents main entities and their relationships.

```plantuml
@startuml
class User {
  - userId: int
  - name: string
  - email: string
  - password: string
  + register()
  + login()
}

class Book {
  - bookId: int
  - title: string
  - author: string
  - price: float
  - category: string
}

class Order {
  - orderId: int
  - userId: int
  - totalAmount: float
  - status: string
  + createOrder()
}

class ReadingStatus {
  - statusId: int
  - userId: int
  - bookId: int
  - status: enum {ToRead, Reading, Finished}
}

class Admin {
  - adminId: int
  - email: string
  - password: string
  + addBook()
  + removeBook()
  + manageUser()
}

User "1" -- "many" Order
User "1" -- "many" ReadingStatus
Order "1" -- "many" Book
Book "1" -- "many" ReadingStatus
Admin -- Book
@enduml
```

---

# 3️⃣ Activity Diagram (Book Purchase Flow)

```plantuml
@startuml
start
:User browses books;
:Selects a book;
if (Authenticated?) then (Yes)
  :Add book to cart;
  :Checkout;
  :Enter payment details;
  :Payment processed;
  :Order confirmed;
else (No)
  :Redirect to login/register;
endif
stop
@enduml
```

---

# 4️⃣ Sequence Diagram (Track Book Status)

```plantuml
@startuml
User -> WebApp: Login
User -> WebApp: Select book
User -> WebApp: Update status (To Read / Reading / Finished)
WebApp -> Backend: Update reading status
Backend -> Database: Save status
Database --> Backend: Confirmation
Backend --> WebApp: Status updated
WebApp --> User: Display updated status
@enduml
```

---
