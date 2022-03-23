import { Router } from 'express'
import { tronWeb } from '../utils'
const router = Router()

router.get('/:address', async ( req: any, res: any ) => {
    try {
        const { address } = req.params
        const userBalance = await tronWeb.trx.getBalance( address )
        res.send({ userBalance })
    } catch ( err ) {
        res.status( 400 ).send({ err })
    }
})

router.post('/create', async ( req: any, res: any ) => {
    try {
        const account = await tronWeb.createAccount()
        res.send({ account })
    } catch ( err ) {
        res.status( 400 ).send({ err })
    }
})

export {
    router
}