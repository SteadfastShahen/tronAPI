import { Router } from 'express'
const sdk = require('api')('@tron/v4.4.2#fs30lsl0ufmaoh');

const router = Router()

router.get('/:address', ( req, res ) => {
    res.send('Get Balance Route')
})

router.post('/create', async ( req: any, res: any ) => {
    try {
        const data = await sdk.generateaddress()
        const validation = await sdk.validateaddress({ address: data.address })

        console.log(data.address)
        console.log(validation)
        const account = await sdk['account-createaccount']({
            owner_address: '41d1e7a6bc354106cb410e65ff8b181c600ff14292',
            account_address: data.hexAddress
        })
        res.send( account )
    } catch ( err ) {
        res.status(400).send( err )
    }
})

export {
    router
}