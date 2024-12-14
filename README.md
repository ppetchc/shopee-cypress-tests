# Shopee Cypress Tests

This repository contains automated test scripts for Shopee, using **Cypress** as the testing framework. The tests cover homepage verification, search functionality, and language selection scenarios.

## Prerequisites

Before you can run the tests, make sure you have the following installed:

- **Node.js**: Cypress requires Node.js to run. You can download it from the [official Node.js website](https://nodejs.org/).
- **Git**: If you don't already have Git installed, you can download it from [here](https://git-scm.com/).

## Getting Started

1. **Clone the repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/ppetchc/shopee-cypress-tests.git
   cd shopee-cypress-tests
   ```

2. **Install dependencies**

   After cloning the repository, install the necessary dependencies by running:

   ```bash
   npm install
   ```

   This will install Cypress and other dependencies specified in `package.json`.

## Running the Tests

1. **Open Cypress UI**:

   To run the tests in the Cypress Test Runner, open the Cypress UI by executing the following command:

   ```bash
   npx cypress open
   ```

   This will launch the Cypress Test Runner, where you can select and run the individual test scenarios.

2. **Run Tests in Headless Mode**:
   If you want to run the tests in headless mode (without the graphical interface), use the following command:

   ```bash
   npx cypress run
   ```

   This will run all the tests in the command line interface and display the results.

## Known Issues

### Shopee Website Login Redirect

Some test cases may fail due to the Shopee website's behavior when no account data is available. In certain cases, if the user is not logged in, Shopee might automatically redirect to the login page instead of the main page. This can cause tests that expect to land on the homepage to fail.

#### How to handle the redirect:
- **Login Manually**: You can manually log in to your Shopee account before running the tests. This will prevent the redirect to the login page and allow the tests to execute as expected.
  
- **Automate Login (Optional)**: To avoid manual login, you can modify the tests to automate the login process (e.g., by saving a valid session token and using it in subsequent tests).

- **Handle Redirect in Tests**: If the redirect is happening during your test, you can add a check for the login page and automatically log in or skip the test.

### Potential Test Failures

Due to the login redirect issue, the following tests may fail unless you are logged in or have implemented an automated login:
- **Homepage Test**: If the user is redirected to the login page, the homepage verification will fail.
- **Search Functionality Test**: This test will fail because the search functionality is on the main page. If the user is redirected to the login page, the test will not be able to access the search bar on the main page, causing the test to fail.
