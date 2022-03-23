import { Router } from 'express'
import { tronWeb } from '../utils'
const router = Router()

router.post('/', async ( req: any, res: any ) => {
    try {
        const { to, amount, from, privateKey } = req.body
        
        const transaction = await tronWeb.transactionBuilder.sendTrx( to, amount, from )
        const signedtxn = await tronWeb.trx.sign( transaction, privateKey )
        const receipt = await tronWeb.trx.sendRawTransaction( signedtxn )

        res.send({ receipt })
    } catch ( err ) {
        res.status( 400 ).send({ err })
    }
})

export {
    router
}