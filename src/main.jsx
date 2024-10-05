import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FuelProvider } from '@fuels/react'
import { defaultConnectors } from '@fuels/connectors'
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
} from '@fuels/connectors';

const queryClient=new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FuelProvider
        theme="dark"
        fuelConfig={{
          connectors: [
            new FuelWalletConnector(),
            // new FuelWalletDevelopmentConnector(),
            // new FueletWalletConnector(),
          ],
        }}
      >
        <App />
      </FuelProvider>

    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    
  </StrictMode>,
)
