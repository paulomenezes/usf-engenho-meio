import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  return (
    <div>
      <Helmet>
        <title>Talyta Oliveira</title>
      </Helmet>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-gradient bg-gradient-to-r from-pink-400 to-purple-400">
              Talyta Oliveira
            </span>
          </h2>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="mt-5 md:mt-0 md:col-span-2 mb-4">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <article className="prose">
                <i className="text-gray-400">24 de março de 2021 - 14:01</i>
                <h1>
                  Oii meninas!!{" "}
                  <span role="img" aria-label="coração">
                    💖
                  </span>
                </h1>
                <img
                  src={"../../eu.jpg"}
                  className="shadow-2xl w-64 border-4 border-pink-500 border-opacity-25"
                  alt="eu"
                />
                <p>
                  Eita!! Quanto tempo que eu queria um lugar para escrever
                  assim!! Vou me apresentar aqui para vocês e vou tentar
                  escrever sempre um pouco aqui.
                </p>
                <p>
                  Meu nome é Talyta Oliveira de Almeida, tenho 22 anos apesar
                  dos recalcados dizerem que eu tenho 24. Meu aniversário é
                  hoje(!!) e estou comemorando com uma festa linda com a minha
                  família porque como sabemos, não da para convidar mais gente
                  atualmente.
                </p>
                <p>
                  Eu estudo na UFPE e faço o curso de Fisioterapia, atualmente
                  estou pagando algumas cadeiras online e estou tentando
                  terminar o curso ano que vem (Fé em Deus que o diploma vem{" "}
                  <span role="img" aria-label="fé">
                    🙏
                  </span>
                  ).
                </p>
                <p>
                  Por enquanto é isso, em breve vou compartilhando mais
                  informações com vocês!! Beijoooos{" "}
                  <span role="img" aria-label="beijos">
                    😘
                  </span>
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2 mb-6">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <article className="prose">
                <i className="text-gray-400">24 de março de 2021 - 14:05</i>
                <h1>#invadindooooo</h1>
                <img
                  src={"../../nos.jpg"}
                  className="shadow-2xl w-64 border-4 border-pink-500 border-opacity-25"
                  alt="nós"
                />
                <p>
                  Sei que esse é o lugar dela onde ela encontrou para conversar
                  com todas vocês mas nesse dia especial eu precisei invadir
                  aqui, né não?
                </p>
                <p>
                  Bem, meu nome é Henrique e eu sou o noivo de Tatazinha linda.
                </p>
                <p>
                  Eu queria desejar mais uma vez aqui o meu{" "}
                  <strong>FELIZ ANIVERSÁRIO MEU AMOR </strong>
                  <span role="img" aria-label="parabéns">
                    🥳🎊🎉
                  </span>
                </p>
                <p>
                  Você é uma pessoa muito especial para mim e eu te desejo tudo
                  de bom nesse mundo, mundo tão pertubado recentemente mas ao
                  mesmo tempo tão maravilhoso. Temos que agradecer muito por
                  estarmos bem e todos da nossa família também.
                </p>
                <p>
                  Meu amooor, eu te admiro muito pela pessoa que você é, você é
                  muito forte e as vezes carrega uma barra que eu não
                  consegueria, e você carrega isso tudo com um sorriso no rosto.
                  Imagino que isso não é fácil e muitas vezes da vontade de
                  jogar tudo pro alto e se jogar na vida.
                </p>
                <p>
                  Eu te admiro muito por você sonhar e não deixar que nada lhe
                  impeça de realizar eles, mesmo aqueles sonhos que parecem
                  estarem adormecidos, eles não estão. Nós vamos conseguir
                  realizar eles juntos, no momento certo.
                </p>
                <p>
                  Afinal de contas, olha o quanto nós já andamos juntos, quantos
                  sonhos já realizamos? Olha nosso barquinho onde ele já está,
                  olhando para trás não conseguimos mais ver o nosso <i>pier</i>
                  , só vemos esse oceano gigantesco que já navegamos e o qua
                  ainda vamos navegar. E eu agradeço muito por você está comigo
                  realizando tanta coisa, porque eu tenho certeza que sozinho
                  não consegueria metade deles. Você é a{" "}
                  <i>aurora da minha vida.</i>
                </p>
                <p>
                  Parabéns meu amor, que o seu dia seja maravilhoso e que você
                  se sinta tão especial como você realmente é. Eu te amo demais
                  meu amor e obrigado por tudo{" "}
                  <span role="img" aria-label="corações">
                    ❤️❤️
                  </span>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
