import {MongoClient} from 'mongodb'



// post: api/new-meetup

 async function handler (res, req) {
    if(req.method == 'POST') {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://user1:12345@cluster0.3y9jmye.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()
        const meetupColections = db.collection('meetups')
        const result = await meetupColections.insertOne({data})
        console.log(result);

        client.close()
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler