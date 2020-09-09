import React from 'react'

export default function Timeline(props) {

    console.log(props.text)
    let maxNum = parseInt(props.text)
    let counter = [];

    for (let index = 0; index < maxNum; index++) {
        counter.push(index + 1)    
    }

    console.log(counter)
    //we need to get an array of numbers where props number is max
    // and 0 is min always
    // each number is represented as a li 

    let durationFragment = counter.map((item) => {
        return (
          <li key={item}>
            {item}
          </li>
        );
      });

    return (
        <React.Fragment>
           <div>
               <ul>Timeline</ul>
              { durationFragment }
           </div>
        </React.Fragment>
    )
}
