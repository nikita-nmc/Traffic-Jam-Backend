import React, { useState } from 'react';
import '../styling/index.css';
import Button from '../components/Button';
import exampleCall from '../api/exampleCall';
import { Link } from 'react-router-dom';

function showAlert() {
  alert('You just clicked the button!');
}

// const Home = () => {
//   const [roomName = "testroom", setRoomName ] = React.useState("");
// }

// const handleRoomNameChange = (event) => {
//     setRoomName(event.target.value);
//   };

async function callServer() {
  const response = await exampleCall();
  if (response.success) {
    alert(`Server says: ${JSON.stringify(response.data)}`);
  } else {
    alert(`Server had an error: ${JSON.stringify(response.error)}`);
  }
}

const IndexPage = () => {

const [roomName, setRoomName] = useState("");

const changeroomName = (e) => {
  setRoomName(e.target.value);
}

  return (
    <div id={'index-container'}>
      <div className={'spacer'} />
      <div className={'content'}>
        <h1>Traffic Jam</h1>
        <input
          type="text"
          id="lobby"
          name="lobby"
          onChange={changeroomName}
        />
        <Link to={`/` + roomName} >
          <button className="styledBtn">Join</button>
        </Link>
      </div>
      <div className={'spacer'} />
    </div>
  );
}
 

export default IndexPage;
