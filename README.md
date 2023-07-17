# Master Backend

Single repo to run multiple nodejs apps.

## Getting Started

1. Clone this repo

    ```
    git clone https://github.com/akashvaghela09/master-backend.git
    ```

2. Install dependencies

    ```
    npm install
    ```

3. Rename `.env.example` to `.env` and set the environment variables

## How to add a new nodeJS app

1. Navigate to `apps` folder and clone the your apps repository

    ```
    cd apps && git clone <app-repo>
    ```

2. Update the `app.listen()` in your app as mentioned below. this will export the app as a module.

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

3. Import app in `index.js` and you are good to go.

```javascript
// Server 1
const server1 = require("./apps/server1/index.js");
app.use("/server1", server1);
```

**_Note:_** _You can add as many apps as you want by following the above steps._


