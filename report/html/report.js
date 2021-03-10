$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/Login_Website.feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Should be successful with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on skip sign in",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the First Name as \"Rajesh\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Last Name as \"Kumar\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Address as \"\u003cAdress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Email as \"rajeshragupathy15@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Phonenumber as \"9597763030\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the Gender as \"Male\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Select the Hobbies as \"Cricket\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Adress"
      ]
    },
    {
      "cells": [
        "Coimbatore"
      ]
    },
    {
      "cells": [
        "Chennai"
      ]
    },
    {
      "cells": [
        "Bangalore"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Should be successful with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.launchapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on skip sign in",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Click_Skipsignin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#btn2\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJESH\u0027, ip: \u0027192.168.43.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\91959\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53463}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f54f10941fc81755de5cbb947cff761e\n*** Element info: {Using\u003did, value\u003dbtn2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat POM.SkipSignin.click_Skipsignin(SkipSignin.java:19)\r\n\tat stepdefinitions.Stepdefinitions.Click_Skipsignin(Stepdefinitions.java:27)\r\n\tat ✽.user click on skip sign in(src/main/java/Feature/Login_Website.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the First Name as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Last Name as \"Kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Address as \"Coimbatore\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Email as \"rajeshragupathy15@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Phonenumber as \"9597763030\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Phonenumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Select the Hobbies as \"Cricket\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Hobbies(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Should be successful with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.launchapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on skip sign in",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Click_Skipsignin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#btn2\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJESH\u0027, ip: \u0027192.168.43.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\91959\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53550}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 17e13d7c430f93e757b9f681de49f7b1\n*** Element info: {Using\u003did, value\u003dbtn2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat POM.SkipSignin.click_Skipsignin(SkipSignin.java:19)\r\n\tat stepdefinitions.Stepdefinitions.Click_Skipsignin(Stepdefinitions.java:27)\r\n\tat ✽.user click on skip sign in(src/main/java/Feature/Login_Website.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the First Name as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Last Name as \"Kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Address as \"Chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Email as \"rajeshragupathy15@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Phonenumber as \"9597763030\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Phonenumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Select the Hobbies as \"Cricket\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Hobbies(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login Should be successful with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.launchapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on skip sign in",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinitions.Click_Skipsignin()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#btn2\"}\n  (Session info: chrome\u003d88.0.4324.190)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJESH\u0027, ip: \u0027192.168.43.137\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\91959\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53605}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3f393df233759b5ee8c95c993b39b90e\n*** Element info: {Using\u003did, value\u003dbtn2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat POM.SkipSignin.click_Skipsignin(SkipSignin.java:19)\r\n\tat stepdefinitions.Stepdefinitions.Click_Skipsignin(Stepdefinitions.java:27)\r\n\tat ✽.user click on skip sign in(src/main/java/Feature/Login_Website.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the First Name as \"Rajesh\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Last Name as \"Kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Address as \"Bangalore\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Email as \"rajeshragupathy15@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the Phonenumber as \"9597763030\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Phonenumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the Gender as \"Male\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Select the Hobbies as \"Cricket\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinitions.Hobbies(String)"
});
formatter.result({
  "status": "skipped"
});
});