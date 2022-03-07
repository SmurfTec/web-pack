import React from 'react';
import './style.css';
import image from './assets/logo.png';

const App = () => {
  const a = ['dasd', 'dasd', 'dasda'];
  console.log(a);

  return (
    <>
      <h1>App</h1>
      <img
        src={image}
        alt='img'
        style={{ height: '100px', width: '100px' }}
      />
    </>
  );
};

export default App;
