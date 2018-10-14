# CITY-FM-LONDON CHALLENGE: 

Write Automated tests for https://www.capitalfm.com/digital/

**Scenario 1**: Validate if Calvin Harris is 'playing' on 'Capital FM London'.

**Scenario 2**: Validate if Calvin Harris was 'played' on 'Capital FM London'.

# The test suite

I have built the test using [Cypress](https://www.cypress.io/). The suite contains 4 tests.

<img src="screenshot.png">

## To run the cypress test

Go to main directory, run `npm install` then `npm start`.

To run them on a headless browser: `npm run headless`

## Some notes

- Since the implementation of the menu is different between mobile screens and larger screens, the tests were broken into suites to accommodate differences
    - On desktop, clicking on the location in header menu will give option to choose London station
    - On mobile, the top-level links only toggle the submenu (the submenu items then give the option for the user to select the London station)