# Master Backend

This repository serves as the master backend, allowing you to host and manage multiple Node.js and Express apps under the same repository and server. Each app can be individually developed and maintained in separate repositories while being included and deployed together under the master backend.

## Setup Instructions

To set up the master backend and include multiple apps, follow these steps:

1. Clone the master backend repository to your local machine:

```
git clone <master-backend-repo-url>
cd master-backend
```


2. Add the server1 and server2 repositories as submodules. Replace `<server1-repo-url>` and `<server2-repo-url>` with the actual URLs of the server1 and server2 repositories:

```
git submodule add <server1-repo-url> apps/server1
git submodule add <server2-repo-url> apps/server2
```


3. Install the dependencies for the master backend by running the following command in the root directory:

```
npm install
```


4. Install the dependencies for each app (server1 and server2) by navigating to the respective `apps/server1` and `apps/server2` directories and running the same command:

```
cd apps/server1
npm install

cd ../server2
npm install
```


5. Configure the environment variables for each app. In the `apps/server1` and `apps/server2` directories, create a `.env` file and define the desired environment variables. For example:

```
PORT=6060
```


6. In the root directory, start the master backend by running the following command:

```
npm start
```

The master backend will be accessible at `http://localhost:6060`.

7. To access the APIs of server1, use the URL `http://localhost:6060/server1`. For server2, use `http://localhost:6060/server2`. The individual apps will run under their respective routes.

## Development Workflow

To develop and update the server1 and server2 apps, follow these steps:

1. Clone or pull the server1 and server2 repositories separately into a local "Projects" folder or any desired location.

2. Make the necessary changes to the server1 and server2 apps in the "Projects" folder.

3. Push the changes to the respective server1 and server2 repositories on GitHub.

4. Switch back to the master backend repository in the "Deployment" folder.

5. Navigate to the `apps/server1` or `apps/server2` directory and run `git pull` to update the submodules.

6. Commit the submodule updates in the master backend repository.

7. Push the changes in the master backend repository.

The master backend will now include the latest changes from server1 and server2, and you can deploy the updated backend using CI/CD.

## Additional Notes

- Remember to update the environment variables (`PORT`, `SERVER1_PORT`, `SERVER2_PORT`) in the `.env` files for each app as per your requirements.

- Ensure that you have the necessary permissions and access to the server1 and server2 repositories on GitHub to clone, pull, and push changes.

- When cloning the master backend repository or pulling the latest changes, the server1 and server2 repositories will also be cloned or updated as part of the submodules.

- You can add more apps by following the same pattern, adding them as submodules and configuring their respective routes in the master backend.

- The master backend repository can be hosted and deployed using various platforms or your own server. Make sure to set up the appropriate deployment and CI/CD processes according to your hosting environment.

- For more information and advanced usage of Git submodules, refer to the official Git documentation: [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).