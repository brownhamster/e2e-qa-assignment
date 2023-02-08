# Assignment 1

For all the test cases and scenarios - 

1. The URL is 'Brenntag.com'
2. The user has already entered the URL.


### Test Scenario 1 - 
Cookie Settings


##### Test Case 1 - TC001

Description: To verify user is able to accept all the Cookies.

Pre-condition: User opens Brenntag.com for the first time

Steps:

1. Open Brenntag.com
2. Check the cookie disclaimer message
3. Click on the 'I agree' button

Expected Result: The cookie disclaimer should be dismissed and the user should be able to proceed to the next step.


##### Test Case 2 - TC002

Description: To verify user is able to deny all the Cookies.

Pre-condition: User opens Brenntag.com for the first time

Steps:

1. Open Brenntag.com
2. Check the cookie disclaimer message
3. Click on the 'I do not Agree' button

Expected Result: The cookie disclaimer should be dismissed and the user should be able to proceed to the next step.


##### Test Case 3 - TC003

Description: To verify user is able to check cookie settings to be shared.

Pre-condition: User opens Brenntag.com for the first time

Steps:

1. Open Brenntag.com
2. Check the cookie disclaimer message
3. Click on the 'Cookie Settings' button

Expected Result: User should be able to see a dialog box with an 'Allow' button to accept all cookies and toggle buttons to select 'Performance Cookies', 'Functional Cookies' and 'Tragetting Cookies'. The 'Strictly Necessary Cookies' should have 'Always Active' link. 


##### Test Case 4 - TC004

Description: To verify user is able to check 'More information regarding the cookies and the see what ccokies are always active.

Pre-condition: User opens Brenntag.com for the first time

Steps:

1. Open Brenntag.com
2. Check the cookie disclaimer message
3. Click on the 'Cookie Settings' button
4. Click on 'More information' 
5. Go back to the Brenntag.com 
6. Click on 'Always Active' next to 'Strictly Necessary Cookies'
7. Click on 'Cookies Details'
8. Click on 'View Cookies' on all the options.

Expected Result: (a) When Clicked on 'More information' - User should be redirected to 'https://cookiepedia.co.uk/giving-consent-to-cookies' to find information and explanation regarding Cookie Consent.

(b) When clicked on 'Always Active' - User should be able to expand the 'Strictly Necesssary Cookies' section.

(c) When clicked on 'Cookies Details' - User should be navigated to the cookie categories that are alwqays active.

(d) When clicked on 'View Cookies' - User should be able to view the name of the cookies in each category.


##### Test Case 5 - TC005

Description: To verify user should be able to select the cookies and accept as required

Pre-condition: User opens Brenntag.com for the first time

Steps:

1. Open Brenntag.com
2. Check the cookie disclaimer message
3. Click on 'Cookie Settings'
4. Click on toggle button for 'Performance Cookies'
5. Click on 'Confirm Cookies'
6. Click on 'Cookie Settings' on left bottom corner
7. Repeat steps 4-6 for all cookie types.
8. Repeat steps 4-6 for multiple cookies at the same time

Expected Result: User should be able to select their preferred cookies.


### Test Scenario 2 - 
Positive Functional Test Cases 


##### Test Case 6 - TC006

Description: To verify user is able to view all countries Brenntag is available in and available languages in the dropdown labels saying 'Select Your Country' and 'Select Your Language'.

Pre-condition: User has agreed to the cookie disclaimer

Steps:

1. Click on the 'Select Your Country' dropdown
2. Click on 'Select Your Language' dropdown

Expected Result: User should be able to view all the countries Brenntag is available in and all the languages it Brenntag website is avaialble in.


##### Test Case 7 - TC007

Description: To verify user can select Country and Language to enter the Brenntag website

Pre-condition: User has agreed to the cookie disclaimer

Steps:

1. Select a country from the list of available countries (e.g. The Netherlands)
2. Select a language from the list of available languages (e.g. English)
3. Click on the 'Go to Brenntag.com' button

Expected Result: The user should be redirected to the Brenntag.com corresponding to the selected country and language


##### Test Case 8 - TC008

Description: To verify user can select Country and Language to enter the Brenntag website

Pre-condition: User has agreed to the cookie disclaimer

Steps:

1. Click on 'or visit our corporate website' link from the homepage

Expected Result: The user should be redirected to the https://corporate.brenntag.com/en/ which is the corporate website for Brenntag.


### Test Scenario 4 - 
Negative Functional Test Cases 


##### Test Case 9 - TC009

Description: To verify the website throws error when an invalid language is entered after entering the correct country.

Pre-condition: User has agreed to the cookie disclaimer

Steps:

1. Select a country
2. Change the selected language to 'Select Your Language'
3. Click on 'Go to Brenntag.com'

Expected Result: User is navigated to 'https://www.brenntag.com/-1/' with page not found error.


##### Test Case 10 - TC010

Description: To verify user is not navigated anywhere when country and language are not selected

Pre-condition: User has agreed to the cookie disclaimer

Steps:

1. Click on 'Go to Brenntag.com'

Expected Result: User should not be redirected. The page should not react.



### Test Scenario 4 - 
Non-Functional Test Cases 


##### Test Case 11 - TC011

Description: To verify the website loads within 2 seconds

Pre-condition: User opens Brenntag.com

Steps:

1. Open Brenntag.com
2. Measure the time taken for the page to load completely

Expected Result: The page should load within an acceptable time limit


##### Test Case 12 - TC012

Description: To verify the website renders correctly at different screen sizes.

Pre-condition: User opens Brenntag.com

Steps:

1. Open Brenntag.com
2. Resize the browser window to different sizes

Expected Result: The page should be responsive and display correctly on different screen sizes and resolutions


##### Test Case 13 - TC013

Description: To verify the website is compatible with all browsers 

Pre-condition: User opens Brenntag.com

Steps:

1. Open Brenntag.com
2. Test the website on different browsers (e.g. Chrome, Firefox, Safari, Internet Explorer)

Expected Result: The website should display correctly and function correctly on different browsers

