// // import React from 'react';
// // import SocketComponent from './SocketComponent';

// // function App() {
// //   return (
// //     <h1>hello world</h1>
// //     // <div>
// //     //   <h1>My App</h1>
// //     //   {/* <SocketComponent /> */}
// //     // </div>
// //   );
// // }

// // export default App;

// import React from "react"
// import { BrowserRouter as Router, Routes, Route }
//     from 'react-router-dom';

// // functions and classes from other files
// import Player from './player'

// function App() {
//   //  state = {
//   //   name: ""
//   // };

//   // componentDidMount() {
//   //   fetch("http://localhost:3000")
//   //     .then(res => res.json())
//   //     .then(data => this.setState({ name: data.name }))
//   // };

//   // render() {
//   //   return (
//   //     <h1>Hello {this.state.name}!</h1>
//   //   )
//   // };
//   // const cards = ["red", "orange", "light green"]

//   return (
//     // <div>
//     //   {cards.map(card => (
//     //     <>
//     //       <h1>{card}</h1>
          
//     //     </>
//     //   ))}
//     // </div>
//     // <Router>
//     //   <Routes>
//     //     <Route path='/blogs' element={<Blogs />} />
//     //   </Routes>
//     // </Router>
//     <>
//       <h1>testing</h1>
//       <Player />
//     </>
    
//   );
// }

// export default App

import React from 'react';

const HomeScreen = () => {
  return (
    <div>
      <button id="joinButton">Join</button>
      <button id="createButton">Create</button>
    </div>
  );
};

const CreateGame = () => {
  return <div id="newGameCode">DNE</div>;
};

const JoinGame = () => {
  return (
    <div>
      <div>
        <label htmlFor="inputPlayerName">Your Name:</label>
        <input type="text" id="inputPlayerName" />
      </div>

      <div>
        <label htmlFor="inputGameId">Game ID:</label>
        <input type="text" id="inputGameId" />
      </div>

      <div>
        <button id="joinGame">Join Game</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HomeScreen />
      <CreateGame />
      <JoinGame />
    </div>
  );
};

export default App;
