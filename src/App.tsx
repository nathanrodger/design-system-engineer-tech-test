import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material/';
import { useDummyData } from './hooks/useDummyData';
import { Alert, AlertTitle } from '@mui/material';

import Container from '@mui/material/Container'
import Player from './components/player/player';
import Gates from './components/gates/gates';
import Lights from './components/lights/lights';

import './styles/main.scss';
import theme from './styles/theme/immersion-labs/immersion-labs-theme';

import {
	FaCircleInfo,
	FaTriangleExclamation,
	FaCircleExclamation
} from 'react-icons/fa6';

export function App() {
  const { alert } = useDummyData();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <h1>Immersive smart office</h1>
          {
            alert &&
              <Alert severity={alert.variant} iconMapping={{
                success: <FaCircleInfo />,
                warning: <FaTriangleExclamation />,
                error: <FaCircleExclamation />
              }} variant="filled" sx={{ marginBottom: '3.2rem' }}>
                <AlertTitle sx={{ fontSize: '1.8rem' }}>{alert.title}</AlertTitle>
                <p>{alert.description}</p>
              </Alert>
          }
          <Player />
          <Gates />
          <Lights />
        </Container>
    </main>
    </ThemeProvider>
  );
}
