import { useState } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Player from './components/player/player';
import Gates from './components/gates/gates';

import {
  FaCircleInfo,
  FaTriangleExclamation,
  FaCircleExclamation
 } from "react-icons/fa6";

import { useDummyData } from "./hooks/useDummyData";

import "./styles/main.scss";

export function App() {
  const { rooms, alert, toggleLight } = useDummyData();
  const [areGatesOpen, setAreGatesOpen] = useState(false);
  const [latchTime, setLatchTime] = useState("");

  function handleLatchChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLatchTime(event.target.value);
  }

  return (
    <main>
      <h1>Immersive smart office</h1>
      {
        alert &&
          <Alert color={ alert.variant } icon={
              alert.variant === "info" ? <FaCircleInfo /> :
              alert.variant === "warning" ? <FaTriangleExclamation /> :
              <FaCircleExclamation />
            }>
              <h2>{alert.title}</h2>
              <p>{alert.description}</p>
          </Alert>
      }
      <Player />

      <hr />

      <Gates isOpen={ areGatesOpen } handleGates={ setAreGatesOpen } />

      <div>
        <h2>Gates</h2>
        {areGatesOpen ? (
          <span>Gates are open</span>
        ) : (
          <span>Gates are closed</span>
        )}
        <button onClick={() => setAreGatesOpen(!areGatesOpen)}>
          Open Gates
        </button>
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

      <hr />

      <div>
        <h2>Lights</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room.name}>
              <h3>{room.name}</h3>
              <ul>
                {room.lights.map((light) => (
                  <li key={light.id}>
                    <h4>{light.name}</h4>
                    <p>Reachable?: {light.state.reachable ? "Yes" : "No"}</p>
                    <p>Brightness: {light.state.brightness}%</p>
                    <button
                      disabled={!light.state.reachable}
                      onClick={() => doAction("toggleLight")}
                    >
                      {light.state.on ? "On" : "Off"}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
