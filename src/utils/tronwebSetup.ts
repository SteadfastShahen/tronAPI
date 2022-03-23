const TronWeb = require('tronweb')
const HttpProvider = TronWeb.providers.HttpProvider
const fullNode = new HttpProvider('https://api.shasta.trongrid.io')
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io')
const eventServer = 'https://api.shasta.trongrid.io'

const tronWeb = new TronWeb(
	fullNode,
	solidityNode,
	eventServer
)

export {
    tronWeb
}