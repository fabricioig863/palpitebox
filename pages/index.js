import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title="Seja Bem vindo" />
      <p className='mt-12 text-center font-bold'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
          Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href="/pesquisa">
          <a className='bg-blue-500 px-12 py-4 font-bold text-white rounded-lg shadow-lg hover:bg-blue-600 transition delay-150 duration-300 ease-in-out'>
            Dar opinião ou sugestão.
          </a>
        </Link>
      </div>
      {!data && <p className="text-center font-bold mb-6">Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12 text-center font-bold'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index;