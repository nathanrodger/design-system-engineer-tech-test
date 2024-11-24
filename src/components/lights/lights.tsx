import { useDummyData } from '../../hooks/useDummyData';
import LightControl from '../light-control/light-control';
import Scrollable from '../scrollable/scrollable';

import style from './lights.module.scss';

const Lights = () => {
  const {rooms, toggleLight} = useDummyData();

  function doAction(action: string) {
    console.log(action);
  }

  return (
    <div>
      <h2>Lights</h2>
      <Scrollable>
        <ul className={style['light-list']}>
          {rooms.map((room: any) => (
            <li key={room.name}>
              <h3>{room.name}</h3>
              <ul className={style['room-list']}>
                {
                  room.lights.map((light: any) => (
                    <LightControl key={light.id} name={light.name} reachable={light.state.reachable}
                      brightness={light.state.brightness} state={light.state.on} handleClick={doAction} />
                  ))
                }
              </ul>
            </li>
          ))}
        </ul>
      </Scrollable>
    </div>
  )
}

export default Lights;
