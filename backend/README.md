# Choose A Pokemon
This backend folder contains simple API service. Where, the GET request on `/api/pokemon` on `8006` port returns the pokemon names in JSON format like this.
  ```json
    {
      "pokemon": [
          "bulbasaur",
          "charmander",
          "squirtle"
      ]
    }
  ```

---

> Prerequisites

Make sure you have these installed in your system
- [NodeJS](https://nodjs.org/download)
- Npm

# How to setup and run

  1. Download or clone the project into your local system
  2. Open `backend/` and run this command to install the dependencies
  ```shell
  $npm install
  ```
  3. Run app.js using node to create a local server.
  ```shell
  // backend
  $node app.js
  ```
  This will create a server on port `8006`
  
  4. Make API calls and enjoy.
  ```
    //URL : localhost:8006/api/pokemon
  ```
---

> Error Handling
- It handles the invalid API calls by sending 404 status response to the client.
- An error object is returned to the client for an invalid API call.

---

# Authors
[harsha20599](https://github.com/harsha20599)
