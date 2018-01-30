# A simple real-estate managing app
## Running the app
In terminal execute :

```ganache-cli &```

or if you are using docker run

```./node_modules/.bin/ganache-cli &```

This will start ganache-cli instance with 10 dummy accounts, listening on port 8545. Then run

```node realEstateInit.js```

This will deploy the contract, and will print an address on console. Change the deployed address with this address in realEstate.js file .

Kickstart a file hosting server in the same directory as that of project using

```python2 -m SimpleHTTPServer```

Open the `localhost:8000` in your browser and then open the `realEstate.html` file to run the app.


ganache-cli provides 10 different accounts. Use any one of them by providing account no.( 0 - 9 ). A/C 0 is admin . First of all connect to any of the 10 available accounts. Then do users registration. Now you can add and transfer properties.

Note: Admin can only add new property . 
