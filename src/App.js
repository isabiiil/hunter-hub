import './assets/style.scss';
import React, { useState } from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import Item from './components/Item';

function App() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const arr = [46];
  
    // ATM you need to manually add new items and update the total values per item 
    const [dressupState, setDressupState] = useState({
      hat: {current: 0, total: 6},
      eyes: {current: 0, total: 8},
      mouth: {current: 0, total: 21},
      clothes: {current: 0, total: 8},
      wings: {current: 0, total: 2}
    });
  
    function next(item){
      let next_num = dressupState[item].current + 1
      // if next_num exceeds total, restart (set current to 0)
      let new_current = next_num < dressupState[item].total ? next_num : 0
      updateDressUp(item, new_current)
    }
  
    function updateDressUp(item,new_current){
      setDressupState({
        ...dressupState,
        [item]: {
          current: dressupState[item].current = new_current, 
          total: dressupState[item].total
        }
      })
    }
  
    function randomize(){
      // for each dressup item, generate a random integer and assign it to current 
      Object.keys(dressupState).map((item) => 
        updateDressUp(item, Math.floor(Math.random() * Math.floor(dressupState[item].total)))
      )
    }

    return (
      <div className="App">
        {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button> Connected: {address}
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>)
      }
        <div id="container">
          <div id="background">
              <div id="body"></div>
              { Object.keys(dressupState).map((item) => 
                  <div id={item} className={item+(dressupState[item].current+1)} key={item}></div>
                )
              } 
          </div>
        </div>
        <div id="inventory">
          INVENTORY
          <element class="item"></element>
          <element class="item-icon"></element>
            
          <body>
            <div class="container">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
              <div class="item">4</div>
              <div class="item">5</div>
              <div class="item">6</div>
              <div class="item">7</div>
              <div class="item">8</div>
              <div class="item">9</div>
              <div class="item">10</div>
              <div class="item">11</div>
              <div class="item">12</div>
              <div class="item">13</div>
              <div class="item">14</div>
            </div>
          </body>
        </div>
  
        { Object.keys(dressupState).map((item) => 
            <input type="button" value={"next "+item} key={item} id={"next"+item} onClick={() => next(item)}/>
          )
        }
  
        <input type="button" value="RANDOMIZE" id="randomize" onClick={() => randomize()}/>
  
      </div>
  );
}
export default App;