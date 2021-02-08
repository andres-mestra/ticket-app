import * as React from 'react'
import { UiProvider } from './context/UiContext';
import { TicketRouter } from './router/TicketRouter';

function TicketApp() {
  return (
    <UiProvider>
      <TicketRouter />
    </UiProvider>
  );
}

export default TicketApp;
