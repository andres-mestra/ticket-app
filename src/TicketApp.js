import * as React from 'react'
import { SocketProvider } from './context/SocketContext';
import { UiProvider } from './context/UiContext';
import { TicketRouter } from './router/TicketRouter';

function TicketApp() {
  return (

    <SocketProvider>
      <UiProvider>
        <TicketRouter />
      </UiProvider>
    </SocketProvider>
  );
}

export default TicketApp;
