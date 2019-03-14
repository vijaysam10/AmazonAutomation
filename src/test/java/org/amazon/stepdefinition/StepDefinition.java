package org.amazon.stepdefinition;

import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.amazon.baseclass.BaseClass;
import org.amazon.helper.FileReadManager;
import org.amazon.helper.PageObjectManager;
import org.amazon.pom.HomePage;
import org.amazon.pom.LoginPage;
import org.amazon.testrunner.TestRunner;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {

	public static WebDriver driver = TestRunner.driver;

	public static PageObjectManager pm = new PageObjectManager(driver);
	public HashMap<String, String> mp = new HashMap<String, String>();

	@Given("^User should launch the browser and navigate to Amazon application$")
	public void user_should_launch_the_browser_and_navigate_to_Amazon_application() throws Throwable {
		getUrl("https://www.amazon.in");
	}

	@Then("^User verify amazon logo present on the header screen$")

	public void user_verify_amazon_logo_present_on_the_header_screen() throws Throwable {
		elementDisplayed(pm.getHomePage().getHomePageLogo());
	}

	@When("^User mouse hover to Hello SignIN element$")
	public void user_mouse_hover_to_Hello_SignIN_element() throws Throwable {
		movetoElement(pm.getHomePage().getHelloSignInText());
	}

	@When("^User close the browser$")
	public void user_close_the_browser() {
		driver.close();
	}

	@When("^User click on signin button$")
	public void user_click_on_signin_button() throws Throwable {
		elementClick(pm.getHomePage().getSignIn());

	}

	@When("^User Enter the email id or mobile number in the login page$")
	public void user_Enter_the_email_id_or_mobile_number_in_the_login_page() throws Throwable {
		String userName = FileReadManager.getInstance().getConfigReader().getUserName();
		inputValuestoElement(pm.getLoginPage().getEmailId_LoginPage(), userName);
	}

	@When("^User click on continue button on login page$")
	public void user_click_on_continue_button_on_login_page() throws Throwable {
		elementClick(pm.getLoginPage().getContinue_LoginPage());

	}

	@Then("^User verify the entered mobile number is displayed$")
	public void user_verify_the_entered_mobile_number_is_displayed() throws Throwable {
		String mb = getElementText(pm.getLoginPage().getMobilenumber_LoginPage());
		String userName = FileReadManager.getInstance().getConfigReader().getUserName();

		Assert.assertEquals(userName, mb);
	}

	@When("^User enter the password in the login page$")
	public void user_enter_the_password_in_the_login_page() throws Throwable {
		String passWord = FileReadManager.getInstance().getConfigReader().getPassWord();
		inputValuestoElement(pm.getLoginPage().getPassword_LoginPage(), passWord);
	}

	@When("^User click on login button in the login page$")
	public void user_click_on_login_button_in_the_login_page() throws Throwable {
		elementClick(pm.getLoginPage().getLoginBtn_LoginPage());
	}

	@When("^User wait for '(.*)' seconds$")
	public void user_wait_for_seconds(int arg1) throws Throwable {
		Thread.sleep((arg1 * 1000));

	}

	@Then("^User verify the username present in the homepage header$")
	public void user_verify_the_username_present_in_the_homepage_header() throws Throwable {

		String userName = getElementText(pm.getLoginPage().getHelloUserName());
		String[] split = userName.split(" ");
		String firstName = FileReadManager.getInstance().getConfigReader().getFirstName();
		Assert.assertEquals(firstName, split[1]);

	}

	@When("^User mouse hover to shop by category menu$")
	public void user_mouse_hover_to_shop_by_category_menu() throws Throwable {
		movetoElement(pm.getHomePage().getShopByCategroy());

	}

	@When("^User select the menu '(.*)' and the sub menu '(.*)'$")
	public void user_select_the_menu_and_the_sub_menu(String menuName, String subMenu) throws Throwable {

		List<WebElement> menus = driver.findElements(By.xpath("//div[@id='nav-flyout-shopAll']/div[2]/span/span"));
		for (WebElement x : menus) {
			String menu = x.getText();
			if (menu.contains(menuName)) {
				movetoElement(x);
				Thread.sleep(5000);
				WebElement subMenuClick = driver.findElement(By.xpath("//span[text()='" + subMenu + "']"));
				movetoElement(subMenuClick);
				elementClick(subMenuClick);
				break;
			}

		}

	}

	@Then("^User verify the selected sub menu '(.*)' displayed in the header$")
	public void user_verify_the_selected_sub_menu_displayed_in_the_header(String title) throws Throwable {
		String txt = getElementText(pm.getPLP_Page().getPlp_header());
		Assert.assertEquals(title, txt);

	}

	@Then("^User scroll down to the element shop by brands$")
	public void user_scroll_down_to_the_element_shop_by_brands() throws Throwable {

	}

	@Then("^User click on apple brands$")
	public void user_click_on_apple_brands() throws Throwable {

	}

	@Then("^User verify the selected apple brands displayed in the search header$")
	public void user_verify_the_selected_apple_brands_displayed_in_the_search_header() throws Throwable {

	}

	@When("^User click check box Amazon prime and Cash on delivery in the filter$")
	public void user_click_check_box_Amazon_prime_in_the_filter() throws Throwable {
		elementClick(pm.getPLP_Page().getAmazonPrimeCheckBox());
		Thread.sleep(5000);
		elementClick(pm.getPLP_Page().getCashOnDeliveryCheckBox());
	}

	@When("^User select the first product and store the product name as '(.*)'$")
	public void user_select_the_first_product_and_store_the_product_name_as_Apple_Brand_Product(String name)
			throws Throwable {
		String txt = getElementText(pm.getPLP_Page().getFirstProduct());
		mp.put(name, txt);
		elementClick(pm.getPLP_Page().getFirstProduct());
	}

	@When("^User switch to next tab and add the selected product to cart$")
	public void user_switch_to_next_tab_and_add_the_selected_product_to_cart() throws Throwable {
		switchtoSecondWindow();
	}

	@Then("^User verify the same product name '(.*)' present in the product detail page$")
	public void user_verify_the_same_product_name_Apple_Brand_Product_present_in_the_product_detail_page(String name)
			throws Throwable {
		String txt = getElementText(pm.getPLP_Page().getProductTitle());
		String ac = txt.trim();
		String ex = mp.get(name);
		//setValuetoExcel("ProductName", "Sheet1", 1, 1, ex);
		System.out.println(ex);
		Assert.assertEquals(ex, ac);
	}

	@Then("^User select the quantity '(\\d+)' in the drop down$")
	public void user_select_the_quantity_in_the_drop_down(int arg1) throws Throwable {
		selectValuesfromDD(pm.getPD_Page().getQuantity_DD(), "value", String.valueOf(arg1));
	}

	@Then("^User click on Add to Cart$")
	public void user_click_on_Add_to_Cart() throws Throwable {
		elementClick(pm.getPD_Page().getAddtocart());
	}

	@Then("^User verify the message '(.*)'$")
	public void user_verify_the_message_Added_to_Cart(String exp) throws Throwable {
		String text = getElementText(pm.getCartPage().getAddtoCart());
		Assert.assertEquals(exp, text);
	}

	@When("^User click on Amazon logo$")
	public void user_click_on_Amazon_logo() throws Throwable {
		elementClick(pm.getHomePage().getHomePageLogo());
	}

	@When("^User enter the product name '(.*)' in the search feild$")
	public void user_enter_the_product_name_in_the_search_feild(String name) throws Throwable {
		inputValuestoElement(pm.getHomePage().getSearchFeild(), name);
	}

	@When("^User click on search button$")
	public void user_click_on_search_button() throws Throwable {
		elementClick(pm.getHomePage().getSubmitButton());
	}

	@When("^User click on Cart button$")
	public void user_click_on_Cart_button() throws Throwable {
		elementClick(pm.getCartPage().getCartButton());
	}

	@When("^User remove the product which is greater in value$")
	public void user_remove_the_product_which_is_greater_in_value() throws Throwable {
		List<WebElement> price = driver
				.findElements(By.xpath("//div[@class='sc-list-item-content']/div/div[2]/p/span"));

		List<WebElement> delete = driver.findElements(By.xpath("//input[@value='Delete']"));

		String i1 = price.get(0).getText().substring(1).replace(",", "").trim();
		System.out.println(i1);
		String i2 = price.get(1).getText().substring(1).replace(",", "").trim();
		System.out.println(i2);
		if (Double.parseDouble(i1) < Double.parseDouble(i2)) {
			delete.get(1).click();
		} else {
			delete.get(0).click();
		}

	}

	@When("^User mousehover to Account menu in the header$")
	public void user_mousehover_to_Account_menu_in_the_header() throws Throwable {
		movetoElement(pm.getHomePage().getHelloHeader());
	}

	@When("^User click sign out button$")
	public void user_click_sign_out_button() throws Throwable {
		elementClick(pm.getHomePage().getSignOut_HomePage());
	}

	@Then("^User verify '(.*)' present in the header$")
	public void user_verify_login_text_present_in_the_header(String logText) throws Throwable {
		 	String login = getElementText(pm.getHomePage().getLoginHeader());
		 	Assert.assertEquals(logText, login);
	}

	@When("^User click amazon go to homepage$")
	public void user_click_amazon_go_to_homepage() {
		//elementClick(pm.getCartPage().getAmazonHomePage());
		driver.navigate().to("https://www.amazon.in");
	}

	@When("^User click on product to buy$")
	public void user_click_on_product_to_buy() throws Throwable {
		elementClick(pm.getCartPage().getProceedtoBuy());
	}

	@Then("^User verify the message Review your order present in the page$")
	public void user_verify_the_message_Review_your_order_present_in_the_page() throws Throwable {
		String txt = getElementText(pm.getCartPage().getReviewyourOrder());
		Assert.assertEquals("Review your order", txt);
	}

}
