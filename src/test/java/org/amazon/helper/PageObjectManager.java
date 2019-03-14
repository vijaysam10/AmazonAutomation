package org.amazon.helper;

import org.amazon.pom.CartPage;
import org.amazon.pom.HomePage;
import org.amazon.pom.LoginPage;
import org.amazon.pom.PLP_Page;
import org.amazon.pom.ProductDetailPage;
import org.openqa.selenium.WebDriver;

public class PageObjectManager {

	public WebDriver driver;

	private HomePage hp;
	private LoginPage lp;
	private PLP_Page plp;
	private ProductDetailPage pd;
	private CartPage cp;

	public PageObjectManager(WebDriver ldriver) {
		this.driver = ldriver;
	}

	public HomePage getHomePage() {
		if (hp == null) {
			hp = new HomePage(driver);
		}
		return hp;
	}

	public CartPage getCartPage() {
		if (cp == null) {
			cp = new CartPage(driver);
		}
		return cp;
	}

	public LoginPage getLoginPage() {
		if (lp == null) {
			lp = new LoginPage(driver);
		}
		return lp;
	}

	public PLP_Page getPLP_Page() {
		if (plp == null) {
			plp = new PLP_Page(driver);
		}
		return plp;

	}

	public ProductDetailPage getPD_Page() {
		if (pd == null) {
			pd = new ProductDetailPage(driver);
		}
		return pd;
	}
}
