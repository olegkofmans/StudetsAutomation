# StudetsAutomation
 cd /your/project/path
npm install cypress --save-dev
Make sure that you have already run *** npm init *** 

The long way with the full path:
./node_modules/.bin/cypress open

or 

npx cypress open

or 

While there’s nothing wrong with writing out the full path to the Cypress executable each time, it’s much easier and clearer to add Cypress commands to the scripts field in your package.json file.

{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
Now you can invoke the command from your project root like so:

npm run cypress:open


***************
when cypress open click on "automationStudentsWeb.js" file to run the tests 
