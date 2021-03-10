package POM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Registerpage   {

	WebDriver Driver;
	@FindBy(xpath ="//input[@placeholder='First Name']")
	public WebElement enterfirstname;
	@FindBy(xpath = "//input[@placeholder='Last Name']")
	public WebElement enterlastname;
	@FindBy(xpath = "//textarea[@ng-model='Adress']")
	public WebElement enterAddress;
	@FindBy(xpath = ("//input[@type='email']"))
	public WebElement enteremail;
	@FindBy(xpath = ("//input[@ng-model ='Phone']"))
	public WebElement enterPhone;
	

		
		public Registerpage(WebDriver driver) {
			this.Driver=driver;
		PageFactory.initElements(driver, this);
			
	}
//	
//	public void enter the firstname(String Fname, String Lname,String Address, String email, String phone) {
//
//	
//    enterfirstname.sendKeys(Fname);
//    enterlastname.sendKeys(Lname);
//    enterAddress.sendKeys(Address);
//    enteremail.sendKeys(email);
//	enterPhone.sendKeys(phone);
	

	public void user_details(String fname) {
		 enterfirstname.sendKeys(fname);
		
		
	}
}

