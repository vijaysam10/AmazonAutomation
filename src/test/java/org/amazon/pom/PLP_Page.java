package org.amazon.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PLP_Page {

	public WebDriver driver;

	public PLP_Page(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//div[@class='bxw-pageheader__title__text']/h1")
	private WebElement plp_header;
	
	@FindBy(xpath="(//input[@type='checkbox'])[1]")
	private WebElement amazonPrimeCheckBox;
	
	@FindBy(xpath="//ul[@id='s-results-list-atf']/li[1]//h2")
	private WebElement firstProduct;
	
	@FindBy(xpath="(//input[@type='checkbox'])[2]")
	private WebElement cashOnDeliveryCheckBox;

	@FindBy(xpath="//span[@id='productTitle']")
	private WebElement productTitle;
	
	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getProductTitle() {
		return productTitle;
	}

	public WebElement getPlp_header() {
		return plp_header;
	}

	public WebElement getAmazonPrimeCheckBox() {
		return amazonPrimeCheckBox;
	}

	public WebElement getFirstProduct() {
		return firstProduct;
	}

	public WebElement getCashOnDeliveryCheckBox() {
		return cashOnDeliveryCheckBox;
	}
	
}
