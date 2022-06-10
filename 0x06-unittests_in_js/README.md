# JavaScript - Unittests in JS

## Description of the files inside this folder:

0. Create a new file named 0-calcul.js.
- Create a function named calculateNumber. It should accepts two arguments (number) a and b
The function should round a and b and return the sum of it

Test cases
- Create a file 0-calcul.test.js that contains test cases of this function. Assume a and b are always number. Tests should be around the “rounded” part

1. Create a new file named 1-calcul.js.
- Upgrade the function you created in the previous task (0-calcul.js)
- Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string)
- When type is SUM, round the two numbers, and add a from b
- When type is SUBTRACT, round the two numbers, and subtract b from a
- When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error

Test cases
- Create a file 1-calcul.test.js that contains test cases of this function. Assume a and b are always number. Usage of describe will help you to organize your test cases

2. Install Chai with npm.
- Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior)
- Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js
- Rewrite the test suite, using expect from Chai

3. Install Sinon with npm.
- Create a new file named utils.js
- Create a new module named Utils
- Create a property named calculateNumber and paste your previous code in the function
- Export the Utils module

Create a new file named 3-payment.js
- Create a new function named sendPaymentRequestToApi. The function takes two argument totalAmount, and totalShipping
- The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b and display in the console the message The total is: "result of the sum"
Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:
- By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function)

4. Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior)
Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js
- Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
- Stub the function Utils.calculateNumber to always return the same number 10
- Verify that the stub is being called with type = SUM, a = 100, and b = 20
- Add a spy to verify that console.log is logging the correct message The total is: 10

5. Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior)
Create a new file 5-payment.test.js:
- Inside the same describe, create 2 tests:
	- The first test will call sendPaymentRequestToAPI with 100, and 20:
		- Verify that the console is logging the string The total is: 120
		- Verify that the console is only called once
	- The second test will call sendPaymentRequestToAPI with 10, and 10:
		- Verify that the console is logging the string The total is: 20
		- Verify that the console is only called once

6. Create a new file 6-payment_token.js.
- Create a new function named getPaymentTokenFromAPI
- The function will take an argument called success (boolean)
- When success is true, it should return a resolved promise with the object {data: 'Successful response from the API' }
- Otherwise, the function is doing nothing.
Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI
- How to test the result of getPaymentTokenFromAPI(true)?
- You should be extremely careful when working with async testing. Without calling done properly, your test could be always passing even if what you are actually testing is never executed

7. Using the file 7-skip.test.js:
- Make the test suite pass without fixing or removing the failing test
- it description must stay the same

8. Create a new file api.js:
- By using express, create an instance of express called app
- Listen to port 7865 and log API available on localhost port 7865 to the browser console when the express server is started
- For the route GET /, return the message Welcome to the payment system

Create a new file api.test.js:
- Create one suite for the index page:
- Correct status code?
- Correct result?
- Other?

9. In a folder 9-api, reusing the previous project in 8-api (package.json, api.js and api.test.js)

Modify the file api.js.
- Add a new endpoint: GET /cart/:id
- :id must be only a number (validation must be in the route definition)
- When access, the endpoint should return Payment methods for cart :id

Modify the file api.test.js:
- Add a new test suite for the cart page:
	- Correct status code when :id is a number?
	- Correct status code when :id is NOT a number (=> 404)?
	- etc.

10. In a folder 10-api, reusing the previous project in 9-api (package.json, api.js and api.test.js)

Modify the file api.js:

- Add an endpoint GET /available_payments that returns an object with the following structure:
```
{
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
}
```

- Add an endpoint POST /login that returns the message Welcome :username where :username is the value of the body variable userName


## Configuration files:

- utils.js
- package.json

## Languages and Tools:

- OS: Ubuntu 20.04 LTS
- Language: Javascript (ES6), Node v14.
- Style guidelines: [Javascript Standard](https://standardjs.com/rules.html) || [ESLint](https://eslint.org/)

<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>


## Author

- Juan Camilo González <a href="https://twitter.com/juankter" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="juankter" height="30" width="40" /></a>
<a href="https://bit.ly/2MBNR0t" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://bit.ly/2mbnr0t" height="30" width="40" /></a>
