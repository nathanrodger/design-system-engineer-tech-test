import { useDummyData } from '../../hooks/useDummyData';
import Light from '../../components/light/light';

const Lights = () => {
  const { rooms, toggleLight } = useDummyData();

  function doAction(action: string) {
    console.log(action);
  }

  return (
    <div>
      <h2>Lights</h2>
      <ul style={{ display: 'flex', whiteSpace: 'nowrap', overflowX: 'scroll', gap: '20px' }}>
        {rooms.map((room: any) => (
          <li key={room.name}>
            <h3 style={{ marginBottom: '16px' }}>{room.name}</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {
                room.lights.map((light: any) => (
                  <Light key={light.id} name={light.name} reachable={light.state.reachable}
                    brightness={light.state.brightness} state={light.state.on} handleClick={doAction} />
                ))
              }
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Lights;
