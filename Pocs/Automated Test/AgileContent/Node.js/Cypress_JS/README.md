# Cypress project
Cypress is a tool that uses Node.js for e2e automated testing for modern web.

## To install project and dependencies
- Clone the project
- Open PowerShell
- Go to the folder you cloned 
- Write the command ```npm install```

## To run
- Go to the folder you cloned and install dependencies
- Run one of the following commands:

    -    ### <b>To run with Cypress GUI</b>
        npm run test

    -    ### <b>To run in terminal</b>
        npx cypress run --browser {{BROWSER}}
    <b>OBS</b>: The {{BROWSER}} value can contain the browsers <b>chrome, chromium, canary</b> and <b>electron</b>. If the variable is empty, the default browser will be used or, if the default is not in the list, the first one in the list will be used.

    -    ### <b>To run in headless mode</b>
        npx cypress run headless

---

### <b>Playlists</b>
You can use the Cypress test playlist by running it from the IDE.

If you want to run a specific folder of tests through terminal, include the following line in "cypress.json":  ```"integrationFolder": "\{{FOLDERPATH}}"```.