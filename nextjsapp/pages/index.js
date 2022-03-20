import MeetupList from '../components/meetups/MeetupList'

function HomePage () {
    return <MeetupList meetups={[
        {id: '1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DandelionFlower.jpg/330px-DandelionFlower.jpg',
            title: 'Jaskier',
            address: 'Sintra'}
    ]}></MeetupList>
}

export default HomePage