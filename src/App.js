import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Mr." surname="Perfect">
        <p>This is Mr Perfects's props</p>
      </Greet>
      <Greet name="Mrs."surname="Perfect">
        <button>Action</button>
      </Greet>
      <Greet name="Everyone"/>
      <Welcome name="Mr." surname="Perfect"/>
      <Welcome name="Mrs."surname="Perfect"/>
      <Welcome name="all"/> */}


    </div>
  );
}

export default App;
