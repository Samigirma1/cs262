# Homework 3 
## Part 1 - React Native and Firebase
This app connects to a firebase database to add words submitted by the user to the database. It then displays the list of words in the database in a List Screen.

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**. 

## Answer to questions
### a. the service RESTful? If not, why not? If so, what key features make it RESTful.
  - The API we used was RESTful. It has a set commands (which is a variant of "GET" with the flag). Also the interactions with resources are stateless.
  - For this week, the service we used was Firebase. It provides RESTful API commands GET, PUT (write), POST (push), PATCH (update), and DELETE. So, it's a RESTful service.
### b. What endpoints implement actions that are idempotent? nullipotent?
  - From previous API assignment, the http commands were nullipotent because they didn't change anything on the server. However, they were idempotent on the users end because they returned the same result no matter how many times they were used.
  - For this week, we use a get and put commands to the firebase database. Since the get command does change anything on the server, its nullipotent on the servers end. But, since the command, when called, returns the same result (seting the state of list component) once it had already been called, it is idempotent on the client. we also use a PUSH command. Since, the push command keeps on adding items even if the parameters are the same, the command is nether idempotent or nullipotent on the databases end. Since the push command does not change anything in the client, it is nullipotent on the client's end. 
