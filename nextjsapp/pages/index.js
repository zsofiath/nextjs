import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head'
/**
 * It is soo smart that it does not includes the imports into the client boundle if it is used only at the backend
 */
import {MongoClient} from 'mongodb'

function HomePage (props) {
    return <>
    <Head>
        <title>React meetups</title>
    </Head>
    <MeetupList meetups={props.meetups}></MeetupList></>
}
/**
 * SSG - STATIC SITE GENERATION
 * Csak a pages folderben használható
 * Ez kell legyen a neve
 * Megvárja a datát
 */
export async function getStaticProps(){
    // ide jöhet a BE kód
    // ez nem megy le a klienshez
    // Ét tényleg a BE-n fut, ahol x időként (revalidate) lefut, és generálja a leküldendő html-t


    const client = await MongoClient.connect('mongodb+srv://user1:12345@cluster0.3y9jmye.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupColections = db.collection('meetups')
    const meetups = await meetupColections.find().toArray()
    client.close()

    // mindig obj-t kell visszaadjon
    return {
        props: {
            meetups: meetups.map(meetup =>({
                title: meetup.data.title,
                image: meetup.data.image,
                id: meetup._id.toString(),
                address: meetup.data.address,
                description: meetup.data.description
            }))
        },
        revalidate: 1 //mindig generálja az oldalt - incremental static generation
    }
}

/**
 * On server after deployment
 * for every incoming request it will run
 */
/*export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;

    const p =  await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 5000);
    })

    return {
        props:{
            meetups: dummy
        },

    }
}*/
export default HomePage