# Guidr - Back-End

---

## **API Documentation**

**BASE URL** https://guidr-project.herokuapp.com

-   Attach endpoints to the Base URL to hit them with HTTP Requests.

### **Table of Contents**

#### NON-PROTECTED ENDPOINTS

| Links                                   | Endpoints       |
| --------------------------------------- | --------------- |
| [POST Registration](#post-registration) | `/users/signUp` |
| [POST Login](#post-login)               | `/users/login`  |

#### PROTECTED ENDPOINTS

> **All EndPoints listed below require a `token`! Send an `authorizatoin header` with the token provided upon login.**

| Links                                                | Endpoints            |
| ---------------------------------------------------- | -------------------- |
| [GET Trips by user ID](#get-trips-by-userid)         | `/user/:id/trips`    |
| [POST Add new trip](#add-new-trip)                   | `/user/:id/trips`    |
| [GET Get profile by user ID](#get-profile-by-userid) | `/users/:id/profile` |
| [PUT Update user profile info](#update-profile)      | `/users/:id/profile` |
| [GET Get all public trips](#get-public-trips)        | `/trips`             |
| [PUT Update a trip by trip ID](#update-trip)         | `/trips/:id`         |
| [DELETE Delete a trip by trip ID](#delete-trip)      | `/trips/:id`         |

---

### [POST] Registration

#### URL: https://guidr-project.herokuapp.com/users/signUp

**Payload:** _an object with the following credentials:_

> **Required:** `username`, `email`, `password`, `full_name`

```json
{
    "username": "newUsername",
    "password": "newPassword",
    "email": "johndoe@gmail.com",
    "full_name": "John"
}
```

**Return:** Returns message that new user was create (may or may not be used by front end)

---

### [POST] Login

#### URL: https://guidr-project.herokuapp.com/users/login

**Payload:** _an object with the following credentials:_

> **Required:** `username`, `password`

```json
{
    "username": "newUsername",
    "password": "newPassword"
}
```

**Return:**

```json
{
    "id": 5,
    "token": "9834yt834yg89024hy3t89347yt297wey78t643879fhuowe"
}
```

---

### [GET] Get Trips by user ID

#### URL: https://guidr-project.herokuapp.com/user/:id/trips

**Return:**

```json
{
    "id": 8,
    "title": "Yosemite",
    "description": "When hiking through the park",
    "private": true,
    "type": "Hiking",
    "start_date": "2019-07-15",
    "end_date": "2019-07-17",
    "duration_hours": 5,
    "duration_days": 2
}
```

---

### [POST] Add a new trip

#### URL: https://guidr-project.herokuapp.com/user/:id/trips

> **Required:** `title`, `description`, `private`, `type`, `start_date`, `end_date`, `duration_hours`, `duration_days`

```json
{
    "title": "Yosemite",
    "description": "When hiking through the park",
    "private": true,
    "type": "Hiking",
    "start_date": "2019-07-15",
    "end_date": "2019-07-17",
    "duration_hours": 5,
    "duration_days": 2
}
```

**Return:**

```json
{
    "id": 8,
    "title": "Yosemite",
    "description": "When hiking through the park",
    "private": true,
    "type": "Hiking",
    "start_date": "2019-07-15",
    "end_date": "2019-07-17",
    "duration_hours": 5,
    "duration_days": 2,
    "user_id": 4
}
```

---

### [GET] Get profile by user ID

#### URL: https://guidr-project.herokuapp.com/user/:id/profile

**Return:**

```json
{
    "full_name": "Sean McDonnell",
    "email": "fakeemail@gmail.com",
    "username": "username",
    "title": "Outdoorsman",
    "description": "A person who does stuff outdoors",
    "age": 31,
    "experience_duration": "5 years"
}
```

---

### [PUT] Update user profile info

#### URL: https://guidr-project.herokuapp.com/users/:id/profile

**Payload:** _an object with the following credentials:_

> **Required:** `full_name`, `email`, `title`, `description`, `age`, `experience_duration`

```json
{
    "full_name": "Sean McDonnell",
    "email": "fakeemail@gmail.com",
    "title": "Outdoorsman",
    "description": "A person who does stuff outdoors",
    "age": 31,
    "experience_duration": "5 years"
}
```

**Return:**

```json
{
    "full_name": "Sean McDonnell",
    "email": "fakeemail@gmail.com",
    "title": "Outdoorsman",
    "description": "A person who does stuff outdoors",
    "age": 31,
    "experience_duration": "5 years"
}
```

---

### [GET] Get all public trips

#### URL: https://guidr-project.herokuapp.com/trips

**Return:**

```json
{
    "id": 2,
    "title": "Lake Michigan",
    "description": "Kayaking at the lake",
    "private": false,
    "type": "Kayaking",
    "start_date": "2019-07-20",
    "end_date": "2019-07-20",
    "duration_hours": 12,
    "duration_days": 0,
    "user_id": 1
}
```

---

### [PUT] Update a trip by trip ID

#### URL: https://guidr-project.herokuapp.com/trips/:id

**Payload:** _an object with the following credentials:_

> **Required:** `title`, `description`, `private`, `type`, `start_date`, `end_date`, `duration_hours`, `duration_days`

```json
{
    "title": "Something",
    "description": "Kayaking at the lake",
    "private": false,
    "type": "Kayaking",
    "start_date": "2019-07-20",
    "end_date": "2019-07-20",
    "duration_hours": 12,
    "duration_days": 0
}
```

**Return:**

```json
{
    "id": 2,
    "title": "Something",
    "description": "Kayaking at the lake",
    "private": false,
    "type": "Kayaking",
    "start_date": "2019-07-20",
    "end_date": "2019-07-20",
    "duration_hours": 12,
    "duration_days": 0,
    "user_id": 1
}
```

---

### [DELETE] Delete a trip by trip ID

#### URL: https://guidr-project.herokuapp.com/trips/:id

**Return:** Returns confirmation message that trip was deleted

[Back to Top](#table-of-contents)
