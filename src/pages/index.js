import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

import conteudo from "./conteudo.json";

function Index() {
  return (
    <div>
      <Helmet>
        <title>USF - Engenho do Meio</title>
      </Helmet>

      <div className="relative">
        <div className="absolute">
          <img src="../../h1.png" style={{ width: 200 }} />
        </div>
        <div className="absolute left-0 place-content-center right-0 xs:hidden lg:grid">
          <img src="../../h2.png" style={{ width: 310 }} />
        </div>
        <div className="absolute right-0">
          <img src="../../h3.png" style={{ width: 340 }} />
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between z-10 relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
              USF - Engenho do Meio
            </span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="mt-5 md:mt-0 md:col-span-2 mb-4">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="mapouter">
                <div class="gmap_canvas flex flex-row">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=USF-%20Egenho%20do%20Meio%20-%20Unidade%20de%20sa%C3%BAde&t=&z=19&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <img
                    src="../../usf.png"
                    className="w-64 border-4 border-pink-500 border-opacity-25"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {conteudo.map((conteudo, index) => (
          <div className="mt-5 md:mt-0 md:col-span-2 mb-4" key={index}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <article className="prose">
                  <i className="text-gray-400">{conteudo.data}</i>
                  {/* <h1>Relatos de campo.</h1> */}
                  <div className="grid grid-cols-2">
                    {conteudo.foto.map((foto) => (
                      <img
                        key={foto}
                        src={foto}
                        className="shadow-2xl w-64 border-4 border-pink-500 border-opacity-25"
                        alt=""
                      />
                    ))}
                  </div>
                  {conteudo.texto.map((texto, j) => (
                    <p key={`texto-${j}`}>{texto}</p>
                  ))}
                </article>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
