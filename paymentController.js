// require("dotenv").config();

// const braintree = require("braintree");

// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: process.env.MERCHANT_ID,
//   publicKey: process.env.PUBLIC_KEY,
//   privateKey: process.env.PRIVATE_KEY,
// });

// export const generateToken = (req, res) => {
//   gateway.clientToken.generate({}).then((response) => {
//     res.send(response.clientToken);
//   }).catch((err) => {console.log(err);})
// };
