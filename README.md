# thinxTest 

[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

This is a set of tests written using [Cypress.io](https://cypress.io) to test out basic functionality of the [Thinx website](shethinx.com).

## Steps to see the tests in real time

### 1. Fork repo and clone onto your local machine
### 2. Go to thinxTest folder in your local repo and install dependencies
```
cd thinxTest
npm install
```
    
###  3. Once the download is complete,  you can see the tests in action
```
npm run cy:open
 ```
This will open up the Cypress Test Runner. Clicking on "Run All Tests" will open a new browser and run all the tests in this repo. 
### 4. Cypress offers you a chance to run "headless" tests
If you're running the cypress test runner (step 3) you will need to close it by entering `ctrl + c` in your command line first. And then: 
```
npm run cy:run
```

## Disclaimer

This was a personal project and is not maintained in conjunction with the developers at Thinx. If tests are failing, consider updating   `cypress/helpers/thinxProducts.js` with current details before looking through the tests. 