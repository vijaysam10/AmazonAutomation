package org.amazon.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver driver;
	
	

	@FindBy(id = "ap_email")
	private WebElement emailId_LoginPage;

	@FindBy(id = "continue")
	private WebElement continue_LoginPage;

	@FindBy(xpath = "//div[@class='a-row a-spacing-base']/span")
	private WebElement mobilenumber_LoginPage;

	@FindBy(id = "ap_password")
	private WebElement password_LoginPage;

	@FindBy(id = "signInSubmit")
	private WebElement loginBtn_LoginPage;

	@FindBy(xpath = "//span[contains(text(),'Hello, ')]")
	private WebElement helloUserName;

	public WebElement getEmailId_LoginPage() {
		return emailId_LoginPage;
	}

	public WebElement getContinue_LoginPage() {
		return continue_LoginPage;
	}

	public WebElement getMobilenumber_LoginPage() {
		return mobilenumber_LoginPage;
	}

	public WebElement getPassword_LoginPage() {
		return password_LoginPage;
	}

	public WebElement getLoginBtn_LoginPage() {
		return loginBtn_LoginPage;
	}

	public WebElement getHelloUserName() {
		return helloUserName;
	}

	public LoginPage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

}
