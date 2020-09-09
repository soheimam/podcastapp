import React from 'react'
import {useState} from 'react'
import './Form.css';
import Timeline from '../Timeline/Timeline'

export default function Form() {

    const [time, setTime] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitted(true)
    }

    return (
        <React.Fragment>
            {
                submitted
                ? <Timeline text={time} />
                :  <form onSubmit={handleSubmit}>
                    <h1>My podcast is</h1>
                    <input type="number" id="timeLine" name="timeLine" min="10" max="60" onSelect={e => setTime(e.target.value)}></input>
                    <input type="submit" value="Submit"/>
                </form> 
            }

        </React.Fragment>
    )
}



{/* <input type="submit" value="Submit"/> */}
// const [time, setTime] = useState()

// const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(evt)
// }
{/* <input type="number" id="tentacles" name="tentacles"
min="10" max="60" ></input> */}