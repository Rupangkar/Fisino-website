const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require('cors')
const app = express()
const port = 3000

//middleweer
app.use(cors())

//N5t5lMktxduzAuny  fisino-website

const uri = "mongodb+srv://fisino-website:N5t5lMktxduzAuny@cluster0.cctjuyi.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
      
    const database = client.db('Fisino-23-3');
    const servicesCollection = database.collection('Services');

    //data get kora start

    app.get('/services', async (req, res) =>{
        const query = {};
        const services = await servicesCollection.find(query).toArray();
        res.send(services)
    })

console.log('mongodb conected');
   
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello Fisino!')
})

app.listen(port, () => {
    console.log(`Fisino app listening on port ${port}`);
})

