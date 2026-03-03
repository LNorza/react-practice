import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MemoCounter } from './useMemo/MemoCounter';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    <MemoCounter />
  </StrictMode>,
);
