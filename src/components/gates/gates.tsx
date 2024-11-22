import { useState } from 'react';
import Button from '@mui/material/Button';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ISelect from '../i-select/i-select';
import Pill from '../pill/pill';
import style from './gates.module.scss';

interface gatesProps {
    isOpen: boolean
    latchTime: string,
    handleGates: (toggleState: boolean) => void
}

const Gates = ({isOpen, handleGates}: gatesProps) => {
  const [latchTime, setLatchTime] = useState("");

  function handleLatchChange(event: SelectChangeEvent<string>) {
    setLatchTime(event.target.value);
  }

    return (
        <div className={ style['gates'] }>
          <div className={ style.header }>
              <h2>Gates</h2>
              <Pill text={ isOpen ? 'Open' : 'Closed' } />
          </div>
          <Button variant="contained" size="medium" color="primary" onClick={() => handleGates(!isOpen)}>
            Open Gates
          </Button>
          {/* <ISelect id="latchTime" value={latchTime} action={ handleLatchChange } variant='filled'
          options={[{ value: '10', text: '10 mins' },{ value: '20', text: '20 mins' },{ value: '60', text: '1 hour' }]} /> */}
          <Select id="latchTime" value={latchTime} variant='filled'
            MenuProps={{ disableScrollLock: true }} onChange={ handleLatchChange } className={ style['test'] }>
            <MenuItem value="">Select Time</MenuItem>
            <MenuItem value="10">10 mins</MenuItem>
            <MenuItem value="20">20 mins</MenuItem>
            <MenuItem value="60">1 hour</MenuItem>
          </Select>
          <div>
            <label htmlFor="latchTime">Latch open for:</label>
            <select id="latchTime" value={latchTime} onChange={handleLatchChange}>
              <option value="">Select time</option>
              <option value="10">10 mins</option>
              <option value="20">20 mins</option>
              <option value="60">1 hour</option>
            </select>
          </div>
        </div>
    )
}

export default Gates;
