package org.amazon.stepdefinition;

import java.io.File;
import java.io.IOException;

import org.amazon.baseclass.BaseClass;

import com.cucumber.listener.Reporter;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void beforeHook(cucumber.api.Scenario scenario) {
		Reporter.assignAuthor("VijayKumar");
	}

	@After
	public void afterHook(cucumber.api.Scenario scenario) throws IOException {
		String status = scenario.getStatus();
		System.out.println(status);
		if (scenario.isFailed()) {
			File takeScreenShot = BaseClass.takeScreenShot(scenario.getName().toString());
			Reporter.addScreenCaptureFromPath(takeScreenShot.getAbsolutePath());
		}
	}
}
