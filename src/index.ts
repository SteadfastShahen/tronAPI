import express from 'express'
import { router as addressRouter } from './routes/address.route'
import { router as transferRouter } from './routes/transfer.route'
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', ( req, res ) => { res.send( 'home page' ) })
app.use('/address', addressRouter)
app.use('/transfer', transferRouter)

app.listen( PORT, () => {console.log(`Server up and running on port ${PORT}`)} )