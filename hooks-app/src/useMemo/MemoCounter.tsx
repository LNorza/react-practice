import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationNumber: number) => {
  console.time('heavy_stuff_started');

  for (let i = 0; i < iterationNumber; i++) {
    console.log('---loading---');
  }

  console.timeEnd('heavy_stuff_started');

  return `${iterationNumber} iterations done`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <section className="bg-gradient flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Memo - useMemo - {myHeavyValue}</h1>

      <hr />

      <h4 className="text-2xl">Contador: {counter}</h4>

      <p>Hola mundo</p>

      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        +1
      </button>
    </section>
  );
};
