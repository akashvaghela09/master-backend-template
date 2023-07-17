# Master Backend

Single Backend to run and deploy multiple nodejs apps.

## Getting Started

1. Clone this repo

    ```
    git clone https://github.com/akashvaghela09/master-backend.git
    ```

2. Navigate to the project folder and Install dependencies
    ```
    cd master-backend && npm install
    ```

3. Add the server1 and server2 repositories as submodules. Replace `<server1-repo-url>` and `<server2-repo-url>` with the actual URLs of the server1 and server2 repositories:

    ```
    git submodule add <server1-repo-url> apps/server1
    ```
    ```
    git submodule add <server2-repo-url> apps/server2
    ```

4. Install the dependencies for each app (server1 and server2) by running the following commands from the root of the project:

    ```
    npm run install-all
    ```

5. Navigate to `apps` folder and update the `app.listen()` in both server folders as mentioned below. this will export the app as a module.

   - From this

   ```javascript
   app.listen(PORT, () => {
     console.log(`Server running at http://localhost:${PORT}`);
   });
   ```

   - To this

   ```javascript
   // Check if the module is being run directly
   if (require.main === module) {
     app.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}`);
     });
   } else {
     // Export the app instance for importing
     module.exports = app;
   }
   ```

6. Import both apps in `index.js` and you are good to go.

    ```javascript
    // Server 1
    const server1 = require('./apps/server1/index.js');
    app.use('/server1', server1);

    // Server 2
    const server2 = require('./apps/server2/index.js');
    app.use('/server2', server2);
    ```

## Running the app

1. Run the following command from the root of the project:

    ```
    npm start
    ```
    The master backend will be accessible at http://localhost:6060

2. To access the APIs of server1, use the URL http://localhost:6060/server1. <br />For server2, use http://localhost:6060/server2. The individual apps will run under their respective routes.

## Development Workflow

To develop and update the server1 and server2 apps, follow these steps:

1. Clone or pull the server1 and server2 repositories separately into a local "Projects" folder or any desired location. ignore if already cloned.

2. Make the necessary changes to the server1 and server2 apps, and commit the changes.

3. Push the changes to the respective server1 and server2 repositories on GitHub.

4. Navigate to the master backend repository and pull the latest changes from the server1 and server2 repositories by running the following command:

    ```
    npm run pull-all
    ```

5. Commit the submodule updates in the master backend repository.

6. Push the changes in the master backend repository.

The master backend will now include the latest changes from server1 and server2, and you can deploy the updated backend.

## Additional Notes

- Remember to update the environment variables (`PORT`, `SERVER1_PORT`, `SERVER2_PORT`) in the `.env` files for each app as per your requirements.

- Make sure that the ports specified in the environment variables are being used by the respective apps.

- Ensure that you have the necessary permissions and access to the server1 and server2 repositories on GitHub to clone, pull, and push changes.

- When cloning the master backend repository or pulling the latest changes, the server1 and server2 repositories will also be cloned or updated as part of the submodules.

- You can add more apps by following the same pattern, adding them as submodules and configuring their respective routes in the master backend.

- For more information and advanced usage of Git submodules, refer to the official Git documentation: [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).


