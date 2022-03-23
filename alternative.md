const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = 'https://api.shasta.trongrid.io';

const privateKey = ''; //PK of sending account


const sunAmount 		= 1000000; // 1 TRX
const sendToAddress	    = '';      //receiving address of the receiving account

const tronWeb = new TronWeb(
	fullNode,
	solidityNode,
	eventServer,
	// privateKey
);
tronWeb.setPrivateKey(privateKey);

tronWeb.trx.sendTransaction(sendToAddress, sunAmount, privateKey, function(err, retObj){
	if (err){
		console.log('ERROR: '+err);
	}else if (retObj){
		console.log('SUCCEED:\t')+retObj.transaction.txID);
		// console.log(retObj);
	}
});