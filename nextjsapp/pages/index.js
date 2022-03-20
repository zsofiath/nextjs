import MeetupList from '../components/meetups/MeetupList'
const dummy = [
    {id: '1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DandelionFlower.jpg/330px-DandelionFlower.jpg',
        title: 'Jaskier',
        address: 'Sintra'}
]
function HomePage (props) {
    return <MeetupList meetups={props.meetups}></MeetupList>
}
/**
 * Csak a pages folderben használható
 * Ez kell legyen a neve
 * Megvárja a datát
 */
/*export async function getStaticProps(){
    // ide jöhet a BE kód
    // ez nem megy le a klienshez
    // Ét tényleg a BE-n fut, ahol x időként (revalidate) lefut, és generálja a leküldendő html-t
    const p =  await new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 500);
    })
let i = 2
        setTimeout(() => {
        dummy.push({id: ''+i,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DandelionFlower.jpg/330px-DandelionFlower.jpg',
        title: 'Jaskier',
        address: 'Sintra'})
        i++;
    }, 10000);

    return {
        props: {
            meetups: dummy
        },
        revalidate: 10 //mindig generálja az oldalt - incremental static generation
    }
}*/

/**
 * On server after deployment
 * for every incoming request it will run
 */
export async function getServerSideProps(context){
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
}
export default HomePage