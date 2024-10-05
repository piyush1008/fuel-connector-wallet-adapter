import { useConnectUI, useIsConnected } from '@fuels/react';


import './App.css';
import  Connected  from './Connected';
import RequestAirDrop from './components/requestAirdrop';

function App() {
  const { connect, theme, isConnecting } = useConnectUI();

  const { isConnected } = useIsConnected();

  if (!isConnected) {
    return (
      <div className="App" data-theme={theme}>
        <div className="Actions">
          <button
            type="button"
            onClick={() => {
              connect();
            }}
          >
            {isConnecting ? 'Connecting' : 'Connect'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App" data-theme={theme}>
      {/* <Connected /> */}
      <RequestAirDrop />
    </div>
  );
}

export default App;