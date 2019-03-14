package org.amazon.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
	public WebDriver driver;

	public CartPage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(xpath="//a[text()='Amazon.in homepage']")
	private WebElement amazonHomePage;
	
	public WebElement getAmazonHomePage() {
		return amazonHomePage;
	}

	@FindBy(xpath="//h1[@class='a-size-medium a-text-bold']")
	private WebElement addtoCart;
	
	@FindBy(id="hlb-view-cart-announce")
	private WebElement cartButton;

	public WebElement getCartButton() {
		return cartButton;
	}

	@FindBy(name="proceedToCheckout")
	private WebElement proceedtoBuy;
	
	
	public WebElement getProceedtoBuy() {
		return proceedtoBuy;
	}

	public WebDriver getDriver() {
		return driver;
	}

	public WebElement getAddtoCart() {
		return addtoCart;
	}
	
	@FindBy(xpath="(//div[@class='spc-left']/div)[1]")
	private WebElement reviewyourOrder;

	public WebElement getReviewyourOrder() {
		return reviewyourOrder;
	}
}
