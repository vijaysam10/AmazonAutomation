@TC
Feature: Login funtionality for the Amazon application
Contains 4 test scenarios with validations

@AmazonLogin
Scenario: Verify user login for valid crendetials
Given User should launch the browser and navigate to Amazon application
And User wait for '5' seconds
Then User verify amazon logo present on the header screen
When User mouse hover to Hello SignIN element
And User click on signin button
And User Enter the email id or mobile number in the login page
And User click on continue button on login page
Then User verify the entered mobile number is displayed
When User enter the password in the login page
And User click on login button in the login page
And User wait for '3' seconds
Then User verify the username present in the homepage header
And User wait for '3' seconds

Scenario: User add the product using Menu navigation and verify the same in cart
When User mouse hover to shop by category menu
And User select the menu 'Mobile' and the sub menu 'Tablets'
Then User verify the selected sub menu 'Tablets' displayed in the header
And User wait for '3' seconds
When User click check box Amazon prime and Cash on delivery in the filter
And User wait for '3' seconds
And User select the first product and store the product name as 'First Product'
And User switch to next tab and add the selected product to cart
And User wait for '3' seconds
Then User verify the same product name 'First Product' present in the product detail page
And User click on Add to Cart
Then User verify the message 'Added to Cart'


Scenario Outline: User add the product using search 
When User click on Amazon logo
When User enter the product name '<Product Name>' in the search feild
And User wait for '2' seconds
And User click on search button
And User wait for '2' seconds
When User click check box Amazon prime and Cash on delivery in the filter
And User select the first product and store the product name as '<Product Name>'
And User switch to next tab and add the selected product to cart
Then User verify the same product name '<Product Name>' present in the product detail page
And User click on Add to Cart
Then User verify the message 'Added to Cart'

Examples:
|Product Name|
|Redmi Note 6 |


Scenario: User verify the comparison of two products and add the lowest product to cart
When User click on Cart button
And User remove the product which is greater in value
And User wait for '2' seconds
And User click on product to buy
And User wait for '2' seconds
And User click amazon go to homepage

Scenario: User logout the application
When User mousehover to Account menu in the header
And User wait for '2' seconds
And User click sign out button
Then User verify 'Register' present in the header


