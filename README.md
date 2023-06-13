# Test for Gila Software

<!-- TOC -->
* [Test for Gila Software](#test-for-gila-software)
  * [Notification Test](#notification-test)
  * [Solution Steps for Test](#solution-steps-for-test)
    * [🌟 Step 1: Environment Variable Management 🌟](#-step-1-environment-variable-management-)
    * [🌟 Step 2: Choosing an ORM 🌟](#-step-2-choosing-an-orm-)
    * [🌟 Step 3: Creating the Categories Module 🌟](#-step-3-creating-the-categories-module-)
    * [🌟 Step 4: Generating Test Data with Seeder 🌟](#-step-4-generating-test-data-with-seeder-)
    * [🌟 Step 5: Users Module with Faker 🌟](#-step-5-users-module-with-faker-)
    * [🌟 Step 6: Notifications Module Setup 🌟](#-step-6-notifications-module-setup-)
    * [🌟 Step 7: User-Category Relationship 🌟](#-step-7-user-category-relationship-)
    * [🌟 Step 8: User-Notification Relationship 🌟](#-step-8-user-notification-relationship-)
    * [🌟 Step 9: Implementing Notification Sending System 🌟](#-step-9-implementing-notification-sending-system-)
    * [🌟 Step 10: Notification Services with Decorator Pattern 🌟](#-step-10-notification-services-with-decorator-pattern-)
* [Time Spend](#time-spend)
* [Installation](#installation)
  * [Endpoints](#endpoints)
* [Conclusions](#conclusions)
<!-- TOC -->

## Notification Test

We have to create a notification system that has the ability to receive a message and depending on
the category and subscribers, notify these users in the channels they are registered.

It will be **3** message categories:

* Sports
* Finance
* Movies

And there will be **3 types of notifications**, each type should have its own class to manage the logic of
sending the message independently.

* SMS
* E-Mail
* Push Notification

No notification will actually be sent or the need to communicate with any external APIs, only will
register the sent notification in an archive of Logs or in a database.

In the log, it will need to save all the information necessary to identify that the notification has been
sent correctly to the respective subscriber,such as the type of message, type of notification, user data,
time, etc.

No user administration is required, you can use a Mock of users in the source code, and they must
have the following information:

* ID
* Name
* Email
* Phone number
* Subscribed [ ] here you need to list all the categories where the user is subscribed
* Channels [ ] a list of the notification's channels (SMS | E-Mail | Push Notification)

As user interface you need to display 2 main elements.

1. **Submission form.** A simple form to send the message, which will have 2 fields:
   * **Category.** List of available categories.
   * **Message.** Text area, only validate that the message is not empty.
2. **Log history.** A list of all records in the log, sorted from newest to oldest.

We will evaluate:
* Architecture of the application and software design patterns.
* OOP and Scalability (ready to add more types of notifications). 
* Manage requests to the Server by RESTful  APIs. 
* Unit testing 
* For manual tests, register at least 3 users with different configurations.

## Solution Steps for Test

First of all, when considering the solution, different language options were explored. However, in order to align with the company's preferred language, it was decided to use Node.js in the backend with the Nest framework. This choice allows for learning and familiarizing oneself with the framework while working on the test.

### 🌟 Step 1: Environment Variable Management 🌟
First, I added the management of environment variables to store the application configuration in a **.env** file. 📝 I created a configuration folder to house the necessary information, which Nest retrieves using **configModule** and **configService.** 🔧

### 🌟 Step 2: Choosing an ORM 🌟
Next, I explored various ORMs for efficient database management, and I decided to go with TypeORM. 💻 While the project is designed to be compatible with any ORM, TypeORM fit the requirements perfectly.

### 🌟 Step 3: Creating the Categories Module 🌟
In this step, I developed the categories module, which serves as a storage unit for the application's different categories. 🗂️

### 🌟 Step 4: Generating Test Data with Seeder 🌟
To facilitate testing, I created a seeder module that allows the addition of sample data to the database. This way, I can verify the functionality. 🌱

### 🌟 Step 5: Users Module with Faker 🌟
To meet the demand for a significant amount of dummy data, I created the users module. Using the fantastic library called faker, I implemented a factory pattern to generate a large number of diverse users. 🙋‍♀️🙋‍♂️ This added a touch of realism and diversity to the application.

### 🌟 Step 6: Notifications Module Setup 🌟
I established the notifications module, which serves as a container to store different types of notifications in the database. 💬 Additional notification types were included to enhance the functionality. Now, these notifications can be linked to users using a many-to-many relationship. 🔔👥

### 🌟 Step 7: User-Category Relationship 🌟
Building on the previous step, I created a user-category relationship. By leveraging the factory method, I retrieved the list of categories from the database and assigned a random selection of categories to each user. This established a many-to-many relationship between users and categories. 🧑‍💼📚

### 🌟 Step 8: User-Notification Relationship 🌟
Similarly to step 7, I established a relationship between users and different types of notifications. Each user was assigned various notifications, creating another many-to-many relationship. 🧑‍🔔📩

### 🌟 Step 9: Implementing Notification Sending System 🌟
To meet the requirement of returning notifications in descending order, I implemented the notification sending system. To store relevant information about each notification, I created a log module that records the details in the database. 📮 This ensured a comprehensive record of all notifications sent by the system.

### 🌟 Step 10: Notification Services with Decorator Pattern 🌟
Lastly, I developed services responsible for sending notifications. Using the decorator pattern, a new service was created to handle the notification delivery process. The information regarding notifications was then passed to the log table for efficient tracking and monitoring. 📨✨

# Time Spend

Approximately 9 hours of development time have been invested so far ⏱️. There are still some pending tasks, such as unit tests, acceptance tests, and the graphical user interface. However, due to time constraints ⌛, I won't be able to complete them at this moment. It's possible that I might be able to finish them today, Tuesday, June 13, 2023, but there's no certainty. 🤞

![Time Expend Image](/images/img.png)

# Installation

To install the project, you can follow the usual Node.js project setup process. In my case, I use the following command:

```
yarn install
```
After installing the dependencies, you need to update the values in the **.env** file with the appropriate configurations for your environment and the test.

Next, you can run the seed command to populate the necessary tables in the database and add some predefined categories, notifications, and a list of dummy users:

```
yarn seed
```

This command will create the required tables in the database and populate them with the predefined data.

If you are using a database like MySQL or any other, it is recommended to modify the provider in the **'database-providers.module.ts'** file. On line 17, change **"mariadb"** to your desired provider, such as **"mysql"**. This ensures the correct database provider is used for the project.

Once you have completed the database migration and seeding, you can run the following command to start the project:
```
yarn start
```

## Endpoints

For this project, three endpoints were created that need to be consumed by the frontend. Although the frontend is not built yet, I can provide you with the CURL commands to execute each endpoint.

1. Endpoint to retrieve all categories:

    ```
    curl --request GET \
      --url http://localhost:8000/categories
    ```

2. Endpoint to send message using the category and the message:

   ```
       curl --request POST \
         --url http://localhost:8000/message \
         --header 'Content-Type: application/x-www-form-urlencoded' \
         --data 'message=Message sended for the front' \
         --data category=Business
   ```
3. Endpoint to retrieve all logs in order to the newest to oldest.

   ```
       curl --request GET \
       --url http://localhost:8000/logs
   ```

# Conclusions


🚀 It has been an exciting challenge that allowed me to dive into NestJS and TypeScript, rekindling my passion for these technologies. 🌟 Implementing design patterns and utilizing TypeORM as the ORM added structure and efficiency to the project. 💡 Developing the notification system, which writes to the database, was an incredibly satisfying experience. 🔧 The system's architecture prioritized scalability and reusability, positioning it as a robust microservice solution. 🌈 I genuinely enjoyed this challenge, and it reminded me why I love tackling complex projects. 😄 Moving forward, my goal is to complete the frontend development and thorough unit testing, aiming for a test coverage of at least 50%. 🎯 Thank you for the opportunity to be part of this journey.