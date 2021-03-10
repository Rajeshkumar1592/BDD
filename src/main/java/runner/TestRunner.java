package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
format = {"pretty","html:report/html","json:report/json/cucumber.json"},
tags={"@SIT"},
features = "src/main/java/Feature",
glue={"stepdefinitions"}
 )
public class TestRunner extends AbstractTestNGCucumberTests{	
}