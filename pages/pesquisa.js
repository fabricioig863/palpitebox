import React from 'react';

const Pesquisa = () => {
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' />
        <label className='font-bold'>Seu Email:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' />
        <label className='font-bold'>Whatsapp:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' />
        <label className='font-bold'>Sua Crítica ou sugestão:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' />
      </div>
    </div>
  )
}

export default Pesquisa;