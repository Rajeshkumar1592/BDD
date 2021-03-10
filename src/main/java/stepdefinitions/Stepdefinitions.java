package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import POM.Registerpage;
import POM.SkipSignin;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Stepdefinitions {
	WebDriver driver;
	
	@Given("^I launch the application$")
	public void launchapplication() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\91959\\Desktop\\Chromedriver\\Chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/Index.html");
		driver.manage().window().maximize();	
	}	
	  @Given("^user click on skip sign in$")
	  public void Click_Skipsignin(){
		  
		  driver.findElement(By.id("btn2")).click();
		  SkipSignin ObjSkipsignin = new SkipSignin(driver);
		  ObjSkipsignin.click_Skipsignin();
		  
	  }
	  @And("^I enter the First Name as \"(.*)\"$")
		public void Firstname(String Fname) {
			driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(Fname);	
			Registerpage Objregister = new Registerpage(driver);
			Objregister.user_details(Fname);
		}
	  @And("^I enter the Last Name as \"(.*)\"$")
		public void Lastname(String Lname) {
		  driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(Lname);
	  }  
		@And("^I enter the Address as \"(.*)\"$")
			public void Address(String Address) {
		  driver.findElement(By.xpath("//textarea[@ng-model='Adress']")).sendKeys("Adress");	  		  
	  }
	@And("^I enter the Email as \"(.*)\"$")
	public void Email(String Email) {
	driver.findElement(By.xpath("//input[@type='email']")).sendKeys("rajeshragupathy15@gmail.com");	  		  
}
	@And("^I enter the Phonenumber as \"(.*)\"$")
	public void Phonenumber (String Phonenumber) {
	driver.findElement(By.xpath("//input[@ng-model ='Phone']")).sendKeys("9597763030");  		  
}
	@And("^I click the Gender as \"(.*)\"$")
	public void Gender (String Gender) {
	driver.findElement(By.xpath("//input[@value='Male']")).click();  		  
}
	@And("^I Select the Hobbies as \"(.*)\"$")
	public void Hobbies (String Hobbies) {
	driver.findElement(By.xpath("//input[@value='Cricket']")).click();	  		  
	  
}
}
