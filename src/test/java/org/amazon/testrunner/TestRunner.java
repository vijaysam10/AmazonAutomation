package org.amazon.testrunner;

import java.io.File;

import org.amazon.baseclass.BaseClass;
import org.amazon.helper.FileReadManager;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\org\\amazon\\feature", glue = "org.amazon.stepdefinition", tags = "@TC", plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:src\\test\\resource\\Library\\cucumber-reports\\report.html",
		"pretty", "html:src\\test\\reource\\library", "json:src\\test\\reource\\Library\\cucumber.json",
		"junit:src\\test\\reource\\Library\\cucumber.xml" },

		strict = true, monochrome = true, dryRun = false)
public class TestRunner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Throwable {
		String browserName = FileReadManager.getInstance().getConfigReader().getBrowserName();
		driver = BaseClass.browerLaunch(browserName);
	}

	@AfterClass
	public static void tearDown() {
		Reporter.loadXMLConfig(
				new File(System.getProperty("user.dir") + "\\src\\test\\resource\\Resources\\extent-config.xml"));
		driver.quit();
	}
}