import {MongoClient, ObjectId} from 'mongodb'


function MeetupDetails ({meetupData}) {
    return <>
    {/* <image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DandelionFlower.jpg/330px-DandelionFlower.jpg' alt=''/> */}
    <h1>{meetupData.title}</h1>
    <address>Street</address>
    <p>Descr</p>
    </>
}

/**Dynamic page && getSteticProps  -> getStaticPats is required*/

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://user1:12345@cluster0.3y9jmye.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupColections = db.collection('meetups')
    const meetups = await meetupColections.find({}, {_id: 1}).toArray()
    client.close()

    return {
        fallback: false, // ha nem talált routre megy, akkor 404 vagy generálja le gyorsan
        paths: meetups.map(meetup =>({params: {
            meetupId: meetup._id.toString()
        }}))
    }
}

export async function getStaticProps(context){
    // ide jöhet a BE kód
    // ez nem megy le a klienshez
    // Ét tényleg a BE-n fut, ahol x időként (revalidate) lefut, és generálja a leküldendő html-t

const meetupId = context.params.meetupId;
const client = await MongoClient.connect('mongodb+srv://user1:12345@cluster0.3y9jmye.mongodb.net/meetups?retryWrites=true&w=majority')
const db = client.db()
const meetupColections = db.collection('meetups')
const selectedMeetup = await meetupColections.findOne({_id: ObjectId(meetupId)}) // string is not good, so we convert it into a mongodb id
client.close()
    return {
        props: {
            meetupData: {...selectedMeetup.data, id: selectedMeetup._id.toString(), _id:''}
        },
        revalidate: 1 //mindig generálja az oldalt - incremental static generation
    }
}

export default MeetupDetails