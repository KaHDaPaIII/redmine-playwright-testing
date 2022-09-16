# redmine-playwright-testing
## About the project
Implementation of five test cases using Playwright with Allure report.  
Site used for testing: https://www.redmine.org/  
Test cases are described [here](https://docs.google.com/document/d/18RTLNG7tj2D3f8oqsuuNJIpYKbtlKQTwCMy24GINeQA/edit?usp=sharing).

## Getting started
### Prerequisites
- Node.js  
- Java 8 or above, Allure Reports require Java 8 or higher  
- Git  

### Installation  

1. Clone the repo using:  
```sh
git clone https://github.com/KaHDaPaIII/redmine-playwright-testing
```
2. Navigate to folder:
```sh
cd redmine-playwright-testing
```
3. Install npm packages using:
```sh
npm install
```

## Usage  
1. Runnig tests:  
```sh
npx playwright test
```
2. Generate Allure Report:  
```sh
npx allure generate
```
3. Open Allure Report:  
```sh
npx allure open
```