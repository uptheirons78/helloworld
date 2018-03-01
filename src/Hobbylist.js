import React, {Component} from 'react';

class HobbyList extends Component{
  render() {
    const style = {fontSize: '1.5em'};
    const hobbies = ['Sleeping', 'Eating', 'Cuddling', 'Bark at the Moon'];
      return (
          <ul>
            {hobbies.map((hobby, i) => {
              //this is the way to render an array of JSX (always add a KEY)
              return <li key={i} style={style}>{hobby}</li>})}
          </ul>
      );
  }
}

export default HobbyList;