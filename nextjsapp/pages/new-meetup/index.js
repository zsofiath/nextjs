import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function newMeetupPage (){
    return <NewMeetupForm onAddMeetup={data => {
        console.log(data);
    }}></NewMeetupForm>
}

export default newMeetupPage