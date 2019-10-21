## BANK TECH TEST

A simple tech test showing my progress in object oriented programming and test driven development. I've written the application in pure javascript - no frameworks, or node packages were used and I've used Jasmine as my testing framework.

In order to run the application clone the repo to your local repository and do the following-

#### HOW TO USE IN THE BROWSER

Run bankTest.html in your favourite browser and in the console do the following to access your account-

- **accountName = new Account()** (To set up an account)
- **accountName.credit(amount)** (To credit your account)
- **accountName.debit(amount)** (To debit from your account)
- **accountName.print()** (To see all your transactions)

#### HOW TO TEST

- Run specrunner.html in your favourite browser
- View the results of the test

**Please note I've added both a console.log and return in the print method so that you see your final statement in the browser and it successfully passes the test requirements**
