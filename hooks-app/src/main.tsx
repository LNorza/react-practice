import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ScrambleWords } from './useReducer/ScrambleWords';
// import HooksApp from './HooksApp';
// import { TrafficLight } from './useState/TrafficLight';
// import { TasksApp } from './useReducer/TaskApp';
// import { TrafficLightWithHook } from './useEffect/TrafficLightWithHook';
// import { PokemonPage } from './examples/pokemonPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <TasksApp /> */}
    <ScrambleWords />
  </StrictMode>,
);
