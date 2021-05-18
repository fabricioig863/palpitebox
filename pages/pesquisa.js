import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import useDarkMode from '../hooks/useDarkMode';
const Pesquisa = () => {

  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Sugestao: '',
    Nota: 0
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (error) {
      console.log(error)
    }

  }

  const onChange = async event => {
    const value = event.target.value;
    const key = event.target.name;
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  useDarkMode();
  return (
    <div className='pt-6'>
      <PageTitle title="Pesquisa" />
      <h1 className='text-center font-bold my-4 text-2xl dark:text-white'>Críticas e Sugestões</h1>
      <p className='text-center mb-6 dark:text-white'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      { !sucess && <div className='w-1/5 mx-auto'>
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Nome" onChange={onChange} name='Nome' value={form.Nome} />
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="E-mail" onChange={onChange} name='Email' value={form.Email} />
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Whatsapp" onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <input type="text" className='p-4 w-80 block shadow bg-blue-100 my-2 rounded ' placeholder="Critica ou Sugestao aqui" onChange={onChange} name='Sugestao' value={form.Sugestao} />
        <label className='font-bold dark:text-white'>Nota:</label>
        <div className="flex py-7">
          {notas.map(nota => {
            return (
              <label className='block w-1/6 text-center font-bold dark:text-white'>
                {nota}<br />
                <input type='radio' name='Nota' value={form.Nota} onChange={onChange} />
              </label>
            )
          })}
        </div>
        <button className="bg-blue-500 px-12 mb-8 w-80 py-4 font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition delay-150 duration-300 ease-in-out" onClick={save}>Salvar</button>
      </div>}
      { sucess && <div className='w-1/5 mx-auto'>
        <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 dark:text-white">Obrigado por contribuir com sua critica ou sugestão</p>
        {
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            Seu cupom: <br />
            <span className="font-bold text-2xl">{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className="text-center border p-4 mb-4">
            <span className="font-bold">{retorno.Promo}</span>
            <br />
            <div className="text-center mt-4">
              <p className="text-red-600 font-bold text-2xl dark:text-red-600">Atenção</p>
              <p className="font-bold italic dark:text-white">Tire um print ou foto desta tela e apresente ao garçon.</p>
            </div>
          </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa;