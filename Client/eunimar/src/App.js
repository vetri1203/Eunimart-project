import React from "react";

function App() {
  return (
    <div className="App">
       <form className='form' >
      <div className="LoginContainer">


        <input type="text" placeholder='   Email Address *' required className='Input-box1'></input><br/>
        <input type="text" placeholder='   password *' required className='Input-box2'></input>
        <div><span>{Error}</span></div>
        <button className='Sign-in-btn'>SIGN IN</button>
    </div>
    </form>
    </div>
    
  );
}

export default App;
