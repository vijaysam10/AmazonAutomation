$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginScenario.feature");
formatter.feature({
  "line": 2,
  "name": "Login funtionality for the Amazon application",
  "description": "Contains 4 test scenarios with validations",
  "id": "login-funtionality-for-the-amazon-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TC"
    }
  ]
});
formatter.before({
  "duration": 1286223,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user login for valid crendetials",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;verify-user-login-for-valid-crendetials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@AmazonLogin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should launch the browser and navigate to Amazon application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User wait for \u00275\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verify amazon logo present on the header screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User mouse hover to Hello SignIN element",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Enter the email id or mobile number in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on continue button on login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verify the entered mobile number is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enter the password in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on login button in the login page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verify the username present in the homepage header",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_should_launch_the_browser_and_navigate_to_Amazon_application()"
});
formatter.result({
  "duration": 104941078641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "duration": 5001654667,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_amazon_logo_present_on_the_header_screen()"
});
formatter.result({
  "duration": 53621357,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_mouse_hover_to_Hello_SignIN_element()"
});
formatter.result({
  "duration": 80064036,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_signin_button()"
});
formatter.result({
  "duration": 62287581017,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.elementClick(BaseClass.java:175)\r\n\tat org.amazon.stepdefinition.StepDefinition.user_click_on_signin_button(StepDefinition.java:53)\r\n\tat ✽.And User click on signin button(LoginScenario.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_the_email_id_or_mobile_number_in_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_continue_button_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_entered_mobile_number_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enter_the_password_in_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button_in_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_username_present_in_the_homepage_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 972339099,
  "status": "passed"
});
formatter.before({
  "duration": 69778,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User add the product using Menu navigation and verify the same in cart",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-menu-navigation-and-verify-the-same-in-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User mouse hover to shop by category menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User select the menu \u0027Mobile\u0027 and the sub menu \u0027Tablets\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify the selected sub menu \u0027Tablets\u0027 displayed in the header",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click check box Amazon prime and Cash on delivery in the filter",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select the first product and store the product name as \u0027First Product\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User switch to next tab and add the selected product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User wait for \u00273\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User verify the same product name \u0027First Product\u0027 present in the product detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User verify the message \u0027Added to Cart\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_mouse_hover_to_shop_by_category_menu()"
});
formatter.result({
  "duration": 49511133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile",
      "offset": 22
    },
    {
      "val": "Tablets",
      "offset": 48
    }
  ],
  "location": "StepDefinition.user_select_the_menu_and_the_sub_menu(String,String)"
});
formatter.result({
  "duration": 10027959123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tablets",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_verify_the_selected_sub_menu_displayed_in_the_header(String)"
});
formatter.result({
  "duration": 62202849423,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.getElementText(BaseClass.java:188)\r\n\tat org.amazon.stepdefinition.StepDefinition.user_verify_the_selected_sub_menu_displayed_in_the_header(StepDefinition.java:131)\r\n\tat ✽.Then User verify the selected sub menu \u0027Tablets\u0027 displayed in the header(LoginScenario.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_check_box_Amazon_prime_in_the_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First Product",
      "offset": 61
    }
  ],
  "location": "StepDefinition.user_select_the_first_product_and_store_the_product_name_as_Apple_Brand_Product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_switch_to_next_tab_and_add_the_selected_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "First Product",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_verify_the_same_product_name_Apple_Brand_Product_present_in_the_product_detail_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_Add_to_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_verify_the_message_Added_to_Cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 882168392,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "User add the product using search",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "User click on Amazon logo",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enter the product name \u0027\u003cProduct Name\u003e\u0027 in the search feild",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click check box Amazon prime and Cash on delivery in the filter",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User select the first product and store the product name as \u0027\u003cProduct Name\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User switch to next tab and add the selected product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User verify the same product name \u0027\u003cProduct Name\u003e\u0027 present in the product detail page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User verify the message \u0027Added to Cart\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-search;",
  "rows": [
    {
      "cells": [
        "Product Name"
      ],
      "line": 50,
      "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-search;;1"
    },
    {
      "cells": [
        "Redmi Note 6"
      ],
      "line": 51,
      "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29334,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User add the product using search",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-add-the-product-using-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TC"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User click on Amazon logo",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enter the product name \u0027Redmi Note 6\u0027 in the search feild",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click check box Amazon prime and Cash on delivery in the filter",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User select the first product and store the product name as \u0027Redmi Note 6\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User switch to next tab and add the selected product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User verify the same product name \u0027Redmi Note 6\u0027 present in the product detail page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User verify the message \u0027Added to Cart\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_Amazon_logo()"
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  formatter.result({
  "duration": 50354275713,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.elementClick(BaseClass.java:175)\r\n\tat org.amazon.stepdefinition.StepDefinition.user_click_on_Amazon_logo(StepDefinition.java:199)\r\n\tat ✽.When User click on Amazon logo(LoginScenario.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Redmi Note 6",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enter_the_product_name_in_the_search_feild(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_check_box_Amazon_prime_in_the_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Redmi Note 6",
      "offset": 61
    }
  ],
  "location": "StepDefinition.user_select_the_first_product_and_store_the_product_name_as_Apple_Brand_Product(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_switch_to_next_tab_and_add_the_selected_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Redmi Note 6",
      "offset": 35
    }
  ],
  "location": "StepDefinition.user_verify_the_same_product_name_Apple_Brand_Product_present_in_the_product_detail_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_Add_to_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 25
    }
  ],
  "location": "StepDefinition.user_verify_the_message_Added_to_Cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2445334,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.takeScreenShot(BaseClass.java:350)\r\n\tat org.amazon.stepdefinition.Hooks.afterHook(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 71111,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "User verify the comparison of two products and add the lowest product to cart",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-verify-the-comparison-of-two-products-and-add-the-lowest-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "User click on Cart button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User remove the product which is greater in value",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click on product to buy",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click amazon go to homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_on_Cart_button()"
});
formatter.result({
  "duration": 50320403254,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.elementClick(BaseClass.java:175)\r\n\tat org.amazon.stepdefinition.StepDefinition.user_click_on_Cart_button(StepDefinition.java:214)\r\n\tat ✽.When User click on Cart button(LoginScenario.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_remove_the_product_which_is_greater_in_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_product_to_buy()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_amazon_go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1797779,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.takeScreenShot(BaseClass.java:350)\r\n\tat org.amazon.stepdefinition.Hooks.afterHook(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "User logout the application",
  "description": "",
  "id": "login-funtionality-for-the-amazon-application;user-logout-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "User mousehover to Account menu in the header",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User wait for \u00272\u0027 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User click sign out button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User verify \u0027Register\u0027 present in the header",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_mousehover_to_Account_menu_in_the_header()"
});
formatter.result({
  "duration": 50302137023,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.movetoElement(BaseClass.java:245)\r\n\tat org.amazon.stepdefinition.StepDefinition.user_mousehover_to_Account_menu_in_the_header(StepDefinition.java:238)\r\n\tat ✽.When User mousehover to Account menu in the header(LoginScenario.feature:63)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.user_wait_for_seconds(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_sign_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_verify_login_text_present_in_the_header(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1634668,
  "error_message": "java.lang.RuntimeException\r\n\tat org.amazon.baseclass.BaseClass.takeScreenShot(BaseClass.java:350)\r\n\tat org.amazon.stepdefinition.Hooks.afterHook(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});