import React from 'react';

const Pesquisa = () => {
  const save = async () => {
    const form = {
      Nome: 'aaaa',
      Email: 'bbbb',
      Whatsapp: 'cccc'
    }
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
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
        <button className="bg-blue-500 px-12 my-2 w-80 py-4 font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition delay-150 duration-300 ease-in-out" onClick={save}>Salvar</button>
      </div>
    </div>
  )
}

export default Pesquisa;