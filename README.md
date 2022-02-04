# api-logger
A simple javascript decorator for logging api request, response and error state

# Motivation

My main motivation in creating this repo/package/whatever is to try to reduce the amount of logs my friend keeps
adding in his codebase. There is a lot of duplication and I recently came accross this wonderful video tutorial
on function decorators by Dave Gray ( Youtube channel -> https://www.youtube.com/channel/UCY38RvRIxYODO4penyxUwTg)
which motivated me to solve this maintenance burden being created in my friend's React application.

# Example:

For this example, let's say our application has 2 API endpoints:
1. GET: /api/v1/registeredusers.
2. POST: /api/v1/registerNewUser

And the functions which we normally use for calling these endpoints are:
1. fetchRegisteredUsers()
2. registerNewUser(user)

Then by using this decorator, we will get the following logs::

When calling fetchRegisteredUsers:

```
[fetchRegisteredUsers][API_REQUEST]
[fetchRegisteredUsers][API_RESPONSE] - <registeredUsersList>
```

When calling registerNewUser:

```
[fetchRegisteredUsers][API_REQUEST] params - <theParamPassedToFunction>
[fetchRegisteredUsers][API_RESPONSE] - <someResponse>
```

# Note

Later on, I might add an ability to structure logs as you wish if I get time.
This code is open source so anyone can use or add to this.
