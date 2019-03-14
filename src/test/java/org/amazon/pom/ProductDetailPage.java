package org.amazon.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductDetailPage {

	public WebDriver driver;

	public ProductDetailPage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(name = "quantity")
	private WebElement quantity_DD;

	public WebElement getQuantity_DD() {
		return quantity_DD;
	}

	@FindBy(id = "add-to-cart-button")
	private WebElement addtocart;

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getAddtocart() {
		return addtocart;
	}

}
