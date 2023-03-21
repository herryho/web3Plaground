const Web3 = require("web3");
require("dotenv").config();

const main = async () => {
  const wssEndpoint = process.env.WSS_ENDPOINT;
  const txHash = process.env.TRANSACTION_HASH;
  const privateKey = process.env.PRIVATE_KEY;

  var web3 = new Web3(wssEndpoint);

  const transactionDetail = await web3.eth.getTransaction(txHash);
  console.log(`transactionDetail: ${JSON.stringify(transactionDetail)}`);

  const gas = 300000;
  const gasPrice = transactionDetail.gasPrice * 10; // 10 times higher gasPrice than the transaction you want to cancel
  const sendingWei = 0;
  const tx = {
    from: transactionDetail.from,
    to: transactionDetail.from, // send to myself to cancel.
    gas: "0x" + gas.toString(16), //,
    gasPrice: "0x" + gasPrice.toString(16), //
    value: "0x" + sendingWei.toString(16), //
    nonce: "0x" + cancelNonce.toString(16),
    data: "",
  };

  console.log(tx);
  eth.accounts.signTransaction(tx, privateKey).then(console.log);
};

main();
