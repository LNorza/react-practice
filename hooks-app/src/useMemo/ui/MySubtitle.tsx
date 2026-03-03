import React from 'react';

interface Props {
  subtitle: string;
  callMyAPI: () => void;
}
export const MySubTitle = React.memo(({ subtitle, callMyAPI }: Props) => {
  console.log('subtitle re-render');

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>
      <button
        onClick={() => callMyAPI()}
        className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Llamar función
      </button>
    </>
  );
});
