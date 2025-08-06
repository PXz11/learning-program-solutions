import React from 'react';
import IndianPlayers from './IndianPlayers';
import ListofPlayers from './ListofPlayers';


function App()
{
  const flag = true;

  return(
    <div>
      <h1>Cricket App</h1>
      {flag ? <ListofPlayers/> : <IndianPlayers/>}
    </div>
  );
}


export default App;