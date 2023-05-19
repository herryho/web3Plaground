const Web3 = require("web3");
require("dotenv").config();

const main = async () => {
  const wssEndpoint = process.env.WSS_ENDPOINT;
  const privateKey = process.env.PRIVATE_KEY;
  const account = process.env.ACCOUNT;
  const nonce = process.env.NONCE;

  const web3 = new Web3(wssEndpoint);
  const tx = {
    from: account,
    to: account, // send to myself to cancel.
    gas: "300000",
    gasPrice: "35000000000",
    value: "0",
    nonce: nonce,
    data: "",
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  console.log(`signedTx: ${JSON.stringify(signedTx)}`);

  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(`receipt: ${JSON.stringify(receipt)}`);
};

main();
