
# CHBB-REST-NODEJS-SDK

To simplify API integration, CHBB provides NODEJS rest sdk that developer can use to hasten the integration development.

This SDK is for POC purposes only. The main goal of this is to see if a SDK can be implemented using NodeJS for CHBB Rest API's.
    
## Installation
Your system should have NodeJs installed. You can install using the link below.
``` text
    https://nodejs.org/en/download/
```

Create your NodeJS project , Create a folder and open it using Visual Studio Code, Open Terminal and run the command
```bash
  npm init
```

Create index.js file inside the project folder
``` text
    add new file and name it as 'index.js'
````

Install chbb-rest-nodejs-sdk using npm

```bash
  npm install chbb-rest-nodejs-sdk
```

Install Mock Server in your project for testing the API

```bash
    npm i @mocks-server/main --save-dev
```

Inside the terminal, Run this command to generate the required files and folders, after running close the terminal first.

```bash
    npm run mocks
```

Open mock.config.js and changed mock.config.js options based field to mock: "chbb"

```bash
    module.exports = {
    // options
    options: {
        // mock to use on start
        mock: "chbb",
    .....
```

Inside mocks folder replace mocks.json's data using info below:

```bash
[
  {
    "id": "chbb",
    "routesVariants": [
      "add-headers:enabled",
      "register-a-sale:success",
      "retrieve-voucher-detail:success",
      "retrieve-product-list:success"
    ]
  }
]
```

Rename users.js to chbb.js , replace chbb.js content to info below:

```bash
const DISCOVERY = {
  Id: "100000000003",
  ResponseDate: "2017-08-13T22:30:26.2220511+08:00",
  ErrorCode: "00",
  ErrorDescription: null,
  Data: [
    {
      PackageId: "80000",
      ProductId: "80001",
      ProductName: "Classic",
      ProductGroup: ["Individual"],
      ProductPremium: {
        Incl: "20",
        Excl: "18.60",
        Tax: "1.40",
      },
      ProductDescription: "Cyber Smart",
      ProductCurrency: {
        Code: "SGD",
        Symbol: "$",
        Cents: "false",
      },
      ProductPayment: {
        Frequency: "Monthly",
        Methods: ["Card"],
      },
    },
  ],
};

const VAS = {
  Id: "100000000003",
  ResponseDate: "2017-08-13T22:30:26.2220511+08:00",
  ErrorCode: "00",
  ErrorDescription: null,
  Data: {
    VoucherNumber: "213123",
    VoucherStatus: "Active",
    VoucherExpiry: "0001-01-01T00:00:00",
    VoucherDescription: "Test",
    VoucherValue: {
      VoucherValueType: "Amount",
      VoucherValue: 12.0,
      VoucherPercentage: null,
      VoucherMetaData: {
        Products: [
          {
            ProductId: "10001",
            ProductRatingFactor: "234",
          },
        ],
      },
    },
  },
};

// register a sale fix data
const SALE = {
  Id: "100000000003",
  ResponseDate: "2017-08-13T22:30:26.2220511+08:00",
  ErrorCode: "00",
  ErrorDescription: null,
  Data: {
    Agreements: [
      {
        TrackingId: "f3da20dc-80b3-4c0b-9cdb-9a0599aab9bb",
        PolicyId: "1232131",
        PolicyNumber: "DGTAUYU8RFQFO2N",
        PolicyCertificateUri:
          "https://apacsteadbsdevstrg.blob.core.windows.net/policyartifacts/10003/policies/201809/DGTAUYU8R FQFO2N_.pdf?sv=2016-05-31&sr=b&sig=Hh4jico%2FOCeI0OsgBpRWxkdcAVPfyyTy6ptwBLqECUQ%3D&se=2017-08-18T09%3A31%3 A45Z&sp=r",
        ProductIds: ["10000"],
      },
    ],
    SaleId: "200000000003",
    SaleDate: "2017-08-13T22:30:26.2220511+08:00",
    Channel: "Internet",
    ProductIds: ["10000"],
    AdditionalData: {},
  },
};

module.exports = [
  {
    id: "register-a-sale",
    url: "/sale/v1/policy",
    method: "POST",
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: SALE, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "retrieve-voucher-detail",
    url: "/vas/v1/internet/lpp/voucher/213123",
    method: "GET",
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: VAS, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "retrieve-product-list",
    url: "/discovery/v1/internet/80001/list",
    method: "GET",
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: DISCOVERY, // body to send
        },
      },
      {
        id: "error", // id of the variant
        response: {
          status: 400, // status to send
          body: {
            // body to send
            message: "Error",
          },
        },
      },
    ],
  },
];
```


## Usage/Examples
Sample Implementation of using the chbb-rest-nodejs-sdk version #1
 * !Note: Request Object is empty as this is for demo only for sdk impl without live server
 * It mocks the api response based from the documentation given

Import chbb-rest-nodejs-sdk at your main file (e.g. index.js)
```javascript
// Require chbb-rest-sdk
var chbb = require("chbb-rest-nodejs-sdk");
```

Create Config Options
```javascript
// Require chbb-rest-sdk
chbb.configure({
  mode: "dev", // dev only
  signing_key: "9Jei52+EWBDchGThTEsjTxqQtM8UKmxM6XAjdA==",
  subscription_key: "1ab2bsd-23023db-3233db-23sd2-23ff",
});
```

Generate Token
```javascript
chbb.generateToken({}, (error, tokenString) => {
  if (error) {
    throw error;
  } else {
    console.log("\n***************************");
    console.log("Generated Token\n");
    console.log(tokenString);
    console.log("\n***************************\n");
  }
});
```

Discovery - Retrieve Product List
```javascript
chbb.discovery.retrieveProductList({}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Retrieve Product List Response");
    console.log(receivedData);
    console.log("***************************\n");
  }
});
```

Sale - Register Sale
```javascript
chbb.sale.registerSale({}, {}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Registered Sale Response");
    console.log(receivedData);
    console.log("***************************\n");
  }
});
```

VAS - Retrieve Voucher Detail
```javascript
chbb.vas.retrieveVoucherDetail({}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Retrieve Voucher Detail Response");
    console.log(receivedData);
    console.log("***************************\n");
  }
});
```

Run your Mock server first, don't close this terminal
```bash
npm run mocks
```

Open a new terminal and Run your NodeJS project
```bash
npm index.js
```

## Generate / Publish SDK to https://www.npmjs.com/ 
```text
(Note: We can sign-up on their membership program so that we can publish the SDK as private)
```

Clone first this SDK project repository and use this to publish
```text
    https://github.com/gjxmstr/chbb-rest-nodejs-sdk.git
```

Login your NPM account (I'm using my account as of the moment)
```bash
  npm login
```

Update version inside package.json
```text
    example
    "version": "1.0.5", to "version": "1.0.6",
```
Publish the package
```bash
    npm publish
```
  
