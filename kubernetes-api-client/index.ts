import { KubeConfig } from '@kubernetes/client-node'
import { CellsApi } from './CellsApi';
import express from 'express'
import cors  from 'cors'

const app = express()
app.use(cors()) // enable cors
app.disable('etag'); // disable caching 

const kc = new KubeConfig();
kc.loadFromDefault(); // load configuration from ~/.kube/config
const cellsApi = new CellsApi(kc)


app.get('/cells', async (req,res)=> {
    const cells = await cellsApi.getCells()
    console.log("Getting cells", cells.items.length)
    res.json(cells.items)
})

app.listen(4000, () => {
    console.log('The application is listening on port 4000!');
})
