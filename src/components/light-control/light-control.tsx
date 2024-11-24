import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import {
  FaLightbulb,
	FaRegLightbulb,
	FaCircleExclamation
} from 'react-icons/fa6';

import style from './light-control.module.scss';

interface lightControlProps {
  name: string,
  reachable: boolean,
  brightness: number,
  state: boolean,
  handleClick: (actionName: string) => void
}

const LightControl = ({name, reachable, brightness, state, handleClick}: lightControlProps) => {
  return (
    <li>
      <Button className={ style['light'] } variant="outlined" disabled={!reachable}
        onClick={() => handleClick("toggleLight")}>
        <h4>{name}</h4>
        {
          reachable && state ? <FaLightbulb color={ yellow['500'] } fontSize="40" opacity={ `${brightness}%` } /> :
          reachable && !state ? <FaRegLightbulb fontSize="40" /> :
          <FaCircleExclamation fontSize="40" />
        }
      </Button>
    </li>
  )
}

export default LightControl;