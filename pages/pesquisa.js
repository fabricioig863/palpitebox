import React, { useState } from 'react';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Sugestao: ''
  })

  const save = async () => {
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

  const onChange = event => {
    const value = event.target.value;
    const key = event.target.name;
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Nome" onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Seu Email:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Email" onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Whatsapp" onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Sua Crítica ou sugestão:</label>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Sugestao" onChange={onChange} name='Sugestao' value={form.Sugestao} />
        <button className="bg-blue-500 px-12 my-2 w-80 py-4 font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition delay-150 duration-300 ease-in-out" onClick={save}>Salvar</button>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Pesquisa;