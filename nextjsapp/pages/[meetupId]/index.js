
function MeetupDetails () {
    return <>
    {/* <image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DandelionFlower.jpg/330px-DandelionFlower.jpg' alt=''/> */}
    <h1>Meet</h1>
    <address>Street</address>
    <p>Descr</p>
    </>
}

/**Dynamic page && getSteticProps  -> getStaticPats is required*/

export async function getStaticPaths() {
    return {
        fallback: false, // ha nem talált routre megy, akkor 404 vagy generálja le gyorsan
        paths: [
            {params: {
                meetupId: 'm1'
            }},
            {params: {
                meetupId: 'm2'
            }}
        ]
    }
}

export async function getStaticProps(context){
    // ide jöhet a BE kód
    // ez nem megy le a klienshez
    // Ét tényleg a BE-n fut, ahol x időként (revalidate) lefut, és generálja a leküldendő html-t

const meetupId = context.params.meetupId;
console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: '',
                id:meetupId,
                title:'first',
                address:'iopjoijoi',
                description:'uiiu'
            }
        },
        revalidate: 10 //mindig generálja az oldalt - incremental static generation
    }
}

export default MeetupDetails