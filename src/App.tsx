import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material/';
import { useDummyData } from './hooks/useDummyData';

import Player from './components/player/player';
import Gates from './components/gates/gates';
import IAlert from './components/i-alert/i-alert';
import Lights from './components/lights/lights';

import './styles/main.scss';
import theme from './styles/theme/immersion-labs-theme';

export function App() {
  const { alert } = useDummyData();
  const [areGatesOpen, setAreGatesOpen] = useState(false);
  const [latchTime, setLatchTime] = useState("");

  function handleLatchChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLatchTime(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1>Immersive smart office</h1>
        {
          alert &&
            <IAlert severity={alert.variant} title={alert.title}>
              <p>{alert.description}</p>
            </IAlert>
        }
        <Player />
        <Gates isOpen={ areGatesOpen } handleGates={ setAreGatesOpen }
          latchTime={ latchTime } />
        <Lights />
    </main>
    </ThemeProvider>
  );
}
