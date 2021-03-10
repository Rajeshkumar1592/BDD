Feature: Login Action
@SIT @TEST
Scenario Outline: Login Should be successful with Valid Credentials

Given I launch the application

Given user click on skip sign in

And I enter the First Name as "Rajesh"

And I enter the Last Name as "Kumar"

And I enter the Address as "<Adress>"

And I enter the Email as "rajeshragupathy15@gmail.com"

And I enter the Phonenumber as "9597763030"

And I click the Gender as "Male"

And I Select the Hobbies as "Cricket"

Examples:

|Adress|
|Coimbatore|
|Chennai|
|Bangalore|
