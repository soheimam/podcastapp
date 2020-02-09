import React, { Component } from 'react';
import interact from 'interactjs';
import './Timeblock.css';

export class Timeblock extends Component {

    componentDidMount() {
        const position = { x: 0, y: 0 }

        interact('.Timeblock').draggable({

          listeners: {
            start (event) {
              console.log(event.type, event.target)
            },
            move (event) {
              position.x += event.dx
              position.y += event.dy
        
              event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
            },
          }
        })  

        
        
        
    }
    
    render() {
        
        return (
            <div className='Timeblock'>
                
            </div>
        )
    }
}

export default Timeblock
