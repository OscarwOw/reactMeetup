import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://react-meetup-oscar-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'Post',
            body: JSON.stringify(meetupData),
            headers: {
                'Contect-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/')
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;