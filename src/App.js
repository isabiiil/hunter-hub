import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import Item from './components/Item';

function App() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const arr = ["hello", "cristi", "and", "isabel", ];
  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
      <Item text="blah" />
      <Item text="yeet" />
      {arr.map(word => {return (<Item text={word} />)})}
      <p>hello</p>
    </div>
  );
}

export default App;
