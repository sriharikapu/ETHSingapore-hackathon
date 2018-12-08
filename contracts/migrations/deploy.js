// const fs = require('fs');
// const path = require('path');
// // const filePath = path.join(__dirname, '../../nodde/config/config.verifier.json');
// const BankexPlasmaJSON = path.join(__dirname, '../build/contracts/BankexPlasma.json');
// const Tx = require('ethereumjs-tx');
// const Web3 = require('web3');
// const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//
// const clean_input = function (str) {
//     if ((typeof str === 'number') || (str.isBigNumber === true)) str = `${ str.toString(16) }`
//     if ((!str) || (typeof str !== 'string') || (str === '0x')) str = '00'
//     if (str.indexOf('0x') === 0) str = str.substr(2)
//     if (str.length % 2 === 1) str = `0${str}`
//     return `0x${str}`
// };
//
// (async function deploy() {
//     const BankexPlasma = JSON.parse(fs.readFileSync(BankexPlasmaJSON, 'utf8'));
//     const bytecode = BankexPlasma.bytecode;
//     // const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//     const deployerAddress = "0xfFb85D98FC040123756ABCA2a7489A2E2716189b";
//     const privateKey = Buffer.from("0x968dae529ccf901c4fcd2bb57a4e73bd8dc6e5e662d6e6943e90fe42860fe0cc");
//     const txParams = {
//         gasPrice: clean_input(1),
//         gas: clean_input(6050992),
//         from: clean_input(deployerAddress),
//         nonce: clean_input(await web3.eth.getTransactionCount(deployerAddress)),
//         value: clean_input(0),
//         data: clean_input(bytecode)
//     };
//     const tx = new Tx(txParams);
//     tx.sign(privateKey);
//     const serializedTx = tx.serialize();
//     const txHash = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
//     console.log("BankexPlasma address: " + txHash.contractAddress);
//     data.plasma_contract_address = txHash.contractAddress;
//     // fs.writeFileSync(filePath, JSON.stringify(data));
// })();