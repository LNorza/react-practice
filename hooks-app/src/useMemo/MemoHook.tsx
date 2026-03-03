import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTytle';
import { MySubTitle } from './ui/MySubtitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  const handleCallMyAPI = useCallback(() => {
    console.log('Llamando a mi API', subTitle);
  }, [subTitle]);

  return (
    <section className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} callMyAPI={handleCallMyAPI} />

      <button
        onClick={() => setTitle('Hello')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar Titulo
      </button>

      <button
        onClick={() => setSubTitle('World')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar Subtititulo
      </button>
    </section>
  );
};
