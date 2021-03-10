package POM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SkipSignin {
	WebDriver driver;
	@FindBy (id="btn2")
	public WebElement btnSkipSign;
	
	public SkipSignin(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	public void click_Skipsignin() {
		btnSkipSign.click();
	}

}
