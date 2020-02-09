import React, { Component } from 'react'
import './Blockcreator.css';

export  class Blockcreator extends Component {
    render() {
        return (
            <div className='Blockform'>
                <p>Podcast Name:</p>
                <input type="text" name="podcastName"></input>
                <p>Length:</p>
               
                <label>60 Minutes</label>
                <input type="radio" name="gender" value="60 Minutes" />
                <label>30 Minutes</label>
                <input type="radio" name="gender" value="30 Mins"/>
                <label>15 Minutes</label>
                <input type="radio" name="gender" value="15 Mins"/>
        
            </div>
        )
    }
}
export default Blockcreator
