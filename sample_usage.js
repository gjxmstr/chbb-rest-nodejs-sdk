/* Sample Implementation of using the chbb-rest-nodejs-sdk version #1
 * !Note: Request Object is empty as this is for demo only for sdk impl without live server
 * It mocks the api response based from the documentation given
 */

// Require chbb-rest-sdk
var chbb = require("./lib/chbb-rest-nodejs-sdk");

// Create Config Options
chbb().configure({
  mode: "dev", // dev only
  signing_key: "9Jei52+EWBDchGThTEsjTxqQtM8UKmxM6XAjdA==",
  subscription_key: "1ab2bsd-23023db-3233db-23sd2-23ff",
});

// Generate Options
chbb().generateToken({}, (error, tokenString) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Generated Token");
    console.log(tokenString);
    console.log("***************************");
  }
});

// Discovery { Retrieve Product List }
chbb().discovery.retrieveProductList({}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Retrieve Product List Response");
    console.log(receivedData);
    console.log("***************************");
  }
});

// Sale { Register Sale }
chbb().sale.registerSale({}, {}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Registered Sale Response");
    console.log(receivedData);
    console.log("***************************");
  }
});

// VAS { Retrieve Voucher Detail}
chbb().vas.retrieveVoucherDetail({}, (error, receivedData) => {
  if (error) {
    throw error;
  } else {
    console.log("***************************");
    console.log("Retrieve Voucher Detail Response");
    console.log(receivedData);
    console.log("***************************");
  }
});
