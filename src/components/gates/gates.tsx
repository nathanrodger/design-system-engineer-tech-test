import { useState } from 'react';
import { red, green, } from '@mui/material/colors';
import Pill from '../pill/pill';
import {
  FormControl,
  MenuItem,
  Button,
  Select,
  SelectChangeEvent,
  Box
} from '@mui/material';

import style from './gates.module.scss';

const Gates = () => {
  const [latchTime, setLatchTime] = useState('');
  const [areGatesOpen, setAreGatesOpen] = useState(false);

  function handleLatchChange(event: SelectChangeEvent<string>) {
    setLatchTime(event.target.value);
  }

  return (
    <div className={style['gates']}>
      <div className={style.header}>
        <h2>Gates</h2>
        <Pill text={areGatesOpen ? 'Open' : 'Closed'}
          bgColor={areGatesOpen ? green['A700'] : red['A700']} color='#ffffff' />
      </div>
      <Box sx={{
        display: 'flex', gap: '24px', maxWidth: { xs: '100%', sm: 'auto' },
        flexDirection: { xs: 'column', sm: 'row' }
      }}>
        <Button variant="contained" size="medium" color="primary"
          onClick={() => setAreGatesOpen(!areGatesOpen)} sx={{ flex: { xs: 1, sm: 'unset' } }}>
          Open Gates
        </Button>
        <FormControl sx={{ lex: { xs: 1, sm: 'unset' } }}>
          <Select id="latchTime" value={latchTime} variant='filled' displayEmpty
            MenuProps={{ disableScrollLock: true }} onChange={handleLatchChange}>
            <MenuItem value="">Select Time</MenuItem>
            <MenuItem value="10">10 mins</MenuItem>
            <MenuItem value="20">20 mins</MenuItem>
            <MenuItem value="60">1 hour</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Gates;
