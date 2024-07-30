require("dotenv").config();
const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

const generateToken = async (req, res) => {
  try {
    const response = await gateway.clientToken.generate({});
    res.send(response.clientToken);
    console.log(response.clientToken);
  } catch (err) {
    console.error(err);
    res.status(500).send(err, ": error in the generateToken Server");
  }
};

const processPayment = async (req, res) => {

const request=await req.body
console.log(request);

  try {
    const nonceFromTheClient = await request.payment_method_nonce;
    // Use payment method nonce here

    await gateway.transaction
      .sale({
        amount: request.amount,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true,
        },
      })
      .then((result) => {
        console.log(result);
        res.send(result);
      });
  } catch (error) {
    res.status(500).send(error, ": error in the ProcessPayment Server");
  }
};
module.exports = { generateToken, processPayment };
