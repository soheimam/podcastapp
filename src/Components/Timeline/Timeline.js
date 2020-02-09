import React, {Component} from 'react';
import interact from 'interactjs'
import './Timeline.css';


class Timeline extends Component {

    componentDidMount(){
        interact('.Timeline').dropzone({
            accept: '.Timeblock',
          ondrop: function (event) {
            alert(event.relatedTarget.id
                  + ' was dropped into '
                  + event.target.id)
          }
        })
        .on('dropactivate', function (event) {
          event.target.classList.add('drop-activated')
        })
    }

render (){
    return (
        <div className='Timeline'></div>
    )
    
}



}

export default Timeline