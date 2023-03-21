const Web3 = require("web3");
require("dotenv").config();

const main = async () => {
  const httpEndpoint = process.env.HTTP_ENDPOINT;
  const privateKey = process.env.PRIVATE_KEY;

  const web3 = new Web3(httpEndpoint);
  const tx = {
    from: "0x2ce9F4a336EDd46cD*********",
    to: "0x2ce9F4a336EDd46cD*********", // send to myself to cancel.
    gas: "300000",
    gasPrice: "35000000000",
    value: "0",
    nonce: "13",
    data: "",
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  console.log(`signedTx: ${JSON.stringify(signedTx)}`);

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`receipt: ${JSON.stringify(receipt)}`);
};

main();
