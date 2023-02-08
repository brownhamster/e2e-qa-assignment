# Assignment 1


##### Test Case 1 - TC001

Description: To verify that the page loads successfully and all elements are displayed correctly.

Expected Result: The page should load without errors and display the login form, the logo, and the link to sign and for forgot password.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Wait for the page to fully load
3. Verify that the login form, logo, and link to create a new account are all present and displayed correctly.


##### Test Case 2 - TC002

Description: To verify that the user can login.

Pre-Condition - 1. User should have valid login credentials

Expected Result: The user should be able to enter their username and password, submit the form, and be able to log in

Steps:

1. Open the login page at https://apac.brenntag.com
2. Enter a valid username and password
3. Submit the form
4. Verify that the user is logged in successfully 


##### Test Case 3 - TC003

Description: To verify that the user is able navigate to sign up page.

Expected Result: The user should be able to click the link and be taken to a new account creation page.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Click the link 'sign up request'
3. Verify that the user is taken to the account creation page.


##### Test Case 4 - TC004

Description: To verify that the forgotten password functionality works as expected.

Expected Result: The user should be able to enter their email address and receive an email with instructions on how to reset their password.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Click the link 'Forgot Password'
3. Enter a valid email address
4. Submit the form
5. Verify that system says a email is sent to reset password
6. Verify that an email is received with instructions on how to reset the password.


##### Test Case 5 - TC005

Description: To verify that the page implements security measures such as encryption and secure connections.

Expected Result: The page should use HTTPS and display a lock icon in the address bar to indicate a secure connection, and sensitive information such as passwords should be encrypted.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Check the address bar for the lock icon
3. Verify that the URL begins with HTTPS
4. Monitor network traffic during the login process to verify that sensitive information such as passwords are encrypted.


##### Test Case 6 - TC006

Description: To verify that an error is displayed when accessing an incorrect URL.

Expected Result: An error message should be displayed indicating that the page cannot be found or that the URL is incorrect.

Steps:

1. Open a web browser and navigate to https://apac.breentag.com
2. Verify that an error message is displayed indicating that the page cannot be found or that the URL is incorrect.


##### Test Case 7 - TC007

Description: To verify user cannot login with Invalid Login Credentials

Expected Result: The user should not be able to log in with invalid credentials, and an error message should be displayed indicating that the login failed.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Enter an incorrect username and password
3. Submit the form
4. Verify that an error message appears indicating that the login failed.


##### Test Case 8 - TC008

Description: To verify that the page displays an error when accessed over an insecure connection.

Expected Result: The page should only be accessible over a secure HTTPS connection and should display an error if accessed over an insecure connection.

Steps:

1. Open a web browser and navigate to the login page at http://apac.brenntag.com (notice the lack of "s" in "https")
2. Verify that an error message is displayed indicating that the connection is insecure and that the page cannot be accessed.


##### Test Case 9 - TC009

Description: To verify that the page displays an appropriate error message when encountering a technical issue.

Expected Result: If there is a technical issue with the page, such as a server error, an error message should be displayed indicating that there was a problem.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Simulate a technical issue with the page, such as by intentionally causing a server error
3. Verify that an error message is displayed indicating that there was a problem with the page.

##### Test Case 10 - TC010

Description: To verify that the login page is displayed in Thai, Korean, Vietnamese and Traditional Chinese(Hong Kong) language.

Expected Result: The welcome greeting and sign up request should be translated to selected language.

Steps:

1. Open the login page at https://apac.brenntag.com
2. Select the Thai language option
3. Verify that the login page is displayed in Thai, including all text and error messages.
4. Verify steps 2 and 3 for all languages supported.
