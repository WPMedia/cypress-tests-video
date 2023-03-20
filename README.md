# arc-video-vcx-cypress

### Dependencies
1. **node** is required to run npm tests.
2. Cypress version 12 and above

### Setup Steps    
1. Clone this repository from Github
2. Run npm install inside that folder
3. Create a new file ``cypress.env.json`` in root folder and add following JSON 

``{
    "baseUrl": **environmentURL**,
    "username": **username**,
    "password": **password**
}``

3. Now set **username** and **password** to your user credentials.
4. Open cypress dashboard using ```npm run cy:open```
5. For slack integration, reach out to any of the admin users in #cypress-cop slack channel with the name of channel that needs to be updated with notifications.
6. For CI/CD setup, refer following document - https://arcpublishing.atlassian.net/wiki/spaces/CPCA/pages/edit-v2/3138650280
7. 

### Reference Documents
https://docs.cypress.io/guides/overview/why-cypress