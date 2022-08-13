import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'

function newMeetupPage (){
    const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const data = await response.json()
        console.log(data);
        router.replace('/')
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
}

export default newMeetupPage