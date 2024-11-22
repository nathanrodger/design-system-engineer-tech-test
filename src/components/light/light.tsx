import { yellow } from '@mui/material/colors';
import style from './light.module.scss';

import {
  FaLightbulb,
	FaRegLightbulb,
	FaCircleExclamation
} from 'react-icons/fa6';

interface lightProps {
  name: string,
  reachable: boolean,
  brightness: number,
  state: boolean,
  handleClick: (actionName: string) => void
}

const Light = ({name, reachable, brightness, state, handleClick}: lightProps) => {
  return (
    <li>
      <button className={ style['light'] } disabled={!reachable} onClick={() => handleClick("toggleLight")}>
        <h4>{name}</h4>
        {
          reachable && state ? <FaLightbulb color={ yellow['500'] } fontSize="40" opacity={ `${brightness}%` } /> :
          reachable && !state ? <FaRegLightbulb fontSize="40" /> :
          <FaCircleExclamation fontSize="40" />
        }
        {/* <p>Brightness: {brightness}%</p> */}
      </button>
    </li>
  )
}

export default Light;