//first thing first: import React and css
import React, {Component} from 'react';
import './Pet.css';
import HobbyList from './Hobbylist';
//second, create the react component
class Pet extends Component {
  render() {
    return (<div className="card">
              <h2 className="name">Moxie</h2>
              <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="the cat"/>
              <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
              <HobbyList />
            </div>);
  }
}
//third, export it
export default Pet;