import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-4">
        <div className="container mx-auto text-center font-bold text-white">
          Projeto desenvolvido por:
          <a className='px-2 hover:underline' href="https://portfolio-eight-inky.vercel.app/">Fabricio Ignacio</a> /
          <a className='px-2 hover:underline' href="https://www.linkedin.com/in/fabricio-ignacio/">Linkedin</a> /
          <a className='px-2 hover:underline' href="https://github.com/fabricioig863">Github</a>
          <div className="mt-4">
            <img className="inline p-4" src="/footer-semana-fullstack.png" alt="Imagem footer semana fullstack" />
            <img className="inline p-4" src="/logo_devpleno.png" alt="Imagem logo devpleno" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;