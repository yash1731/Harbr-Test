#################  Step-1 #######################
### Test Environment - Customer App #

The Customer App application is a web application written using ReactJS on the frontend and Node.js in the backend.

https://github.com/harbrdata/Harbr-QA-Challenge

## PRE-REQUISITES ##

The only pre-requisite to run this app is to have npm and Node.js installed in your machine. For instructions on how to install, go to https://nodejs.org/en/

## How to run it ##

After clonning the repo...

### 1) Starting the backend ###

Open a terminal, go to the root of this repo and:

```
cd backend
npm install
npm start
```
The server npm be listening on port 3001. If you need to change this, got to /backend/server.js and change the port variable value in the first line.

```
const port = 3001;cd 
```
### 2) Starting the frontend ###

Open a new terminal, go to the root of this repo and:

**Important:** if you changed the backend port number, you will have to change it also on /frontend/src/App.js, on line 3, before starting the frontend.
```
cd frontend
npm install
npm start
```

Go to to a web browser and open http://localhost:3000/

################## Step 2- Running #################

****Make sure you have jdk installed and environment variable is been set up, please use jdk 1.8 and above. If having problem with 15th version, please switch to jdk1.8.192 Open terminal and write java -version to make sure you have java installed.
****Make sure you have environment variable is been set up for Maven. Open terminal and write mvn -version to make sure you have maven is set up.


################  Running API Test #################

**Please comment Before class in hooks with order=2 described below (please follow path /src/test/java/com/harbr/hooks/ScenarioHooks.java)

@Before(order = 2)
public void deleteAllCookies(Scenario scenario) {
manage().window().maximize();
manage().deleteAllCookies();
String baseUrl = EnvConfig.getValue("base.url");
navigate().to(baseUrl);

    }

**Please remove @front instead add tag @api in Test Runner(follow the path /src/test/java/com/harbr/TestRunner.java) to run API test
- To run feature given for API test - To run API_CustomerApp.feature feature. Please right click on TestRunner and choose run button


############### Running UI Test ################

**Please add tag @front in Test Runner(follow the path /src/test/java/com/harbr/TestRunner.java) to run UI test
- To run feature given for UI test in Chrome browser(by default) - To run Frontend_CustomerApp.feature feature. Please right click on TestRunner and choose run button
- To run feature given for UI test in FireFox browser - To run Frontend_CustomerApp.feature feature, in environment file src/main/java/resources/environment.properties, change browser = “firefox” and  Please right click on TestRunner and choose run button
- To run feature given for UI test in IE browser - To run Frontend_CustomerApp.feature feature, in environment file src/main/java/resources/environment.properties, change browser = “ie” and  Please right click on TestRunner and choose run button

################ Running API and UI together ##############

 - Please add tag @all in Test Runner(follow the path /src/test/java/com/harbr/TestRunner.java) to run API/UI both test

################ Allure Reporting ##################

- To review Cucumber/Allure Reports - *Go to /target/test-report/report-html/index.html and choose browser to open for ex:Chrome *Allure-report - for this you need to set env variables for Allure report and run command allure-serve from target folder using cmd or terminal
