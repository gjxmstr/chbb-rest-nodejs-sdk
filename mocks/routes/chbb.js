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
