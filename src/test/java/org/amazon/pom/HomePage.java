package org.amazon.pom;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	public WebDriver driver;

	@FindBy(xpath = "//div[@id='nav-logo']/a[@aria-label='Amazon']")
	private WebElement homePageLogo;

	@FindBy(xpath = "//span[text()='Shop by']")
	private WebElement shopByCategroy;

	@FindBy(id = "twotabsearchtextbox")
	private WebElement searchFeild;

	public WebElement getSearchFeild() {
		return searchFeild;
	}

	@FindBy(xpath = "//input[@value='Go']")
	private WebElement submitButton;

	public WebElement getSubmitButton() {
		return submitButton;
	}

	@FindBy(xpath = "//span[text()='Sign Out']")
	private WebElement signOut;
	

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getSignOut() {
		return signOut;
	}

	public void setSubmitButton(WebElement submitButton) {
		this.submitButton = submitButton;
	}

	public void setSearchFeild(WebElement searchFeild) {
		this.searchFeild = searchFeild;
	}

	public WebElement getShopByCategroy() {
		return shopByCategroy;
	}

	public WebElement getSignOut_HomePage() {
		return signOut_HomePage;
	}

	@FindBy(xpath="//span[text()='Hello, vijayakumar']")
	private WebElement helloHeader;
	
	public WebElement getHelloHeader() {
		return helloHeader;
	}

	@FindBy(xpath = "//span[text()='Hello, Sign in']")
	private WebElement helloSignInText;

	@FindBys({ @FindBy(xpath = "//span[text()='Hello, Sign in']"),
			@FindBy(xpath = "(//span[@class='nav-line-1'])[2]") })
	private List<WebElement> helloSignInbys;

	@FindAll({ @FindBy(xpath = "//span[text()='Hello, Sign in']"),
			@FindBy(xpath = "(//span[@class='nav-line-1'])[3]") })
	private List<WebElement> helloSignInAll;

	@FindBy(xpath = "//div[@id='nav-flyout-ya-signin']/a/span[text()='Sign in']")
	private WebElement signIn;

	@FindBy(xpath = "//div[@id='nav-tools']/a//span[contains(text(),'Hello,')]")
	private WebElement userName_Header;

	@FindBy(xpath = "//span[text()='Sign Out']")
	private WebElement signOut_HomePage;
	
	@FindBy(xpath="//h1[@class='a-spacing-small']")
	private WebElement loginHeader;

	public WebElement getLoginHeader() {
		return loginHeader;
	}

	public HomePage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);

	}

	public WebElement getHomePageLogo() {
		return homePageLogo;
	}

	public WebElement getHelloSignInText() {
		return helloSignInText;
	}

	public List<WebElement> getHelloSignInbys() {
		return helloSignInbys;
	}

	public List<WebElement> getHelloSignInAll() {
		return helloSignInAll;
	}

	public WebElement getSignIn() {
		return signIn;
	}

	public WebElement getUserName_Header() {
		return userName_Header;
	}

}
