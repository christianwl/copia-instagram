import Perfils from "./Perfils";

import user2 from "@/assets/img/perfis/user-2.png";
import capiPurple from "@/assets/img/perfis/capi-purple.png";
import ingridIhaaa from "@/assets/img/perfis/ingrid-ihaaa.png";
import junjunLy from "@/assets/img/perfis/junjun-ly.png";
import kaaaaatchau from "@/assets/img/perfis/kaaaaatchau.png";
import naoEGustavo from "@/assets/img/perfis/nao-e-gustavo.png";

import "./conteudoLateralDireita.css";

const listaPerfils = [
  {
    imagem: capiPurple,
    nome: "capipurple",
  },
  {
    imagem: ingridIhaaa,
    nome: "ingrid_ihaaa",
  },
  {
    imagem: junjunLy,
    nome: "junjun_ly",
  },
  {
    imagem: kaaaaatchau,
    nome: "kaaaaatchau",
  },
  {
    imagem: naoEGustavo,
    nome: "nao_e_gustavo",
  },
];

export default function ConteudoLateralDireita() {
  return (
    <div className="conteudoLateralDireita">
      <Perfils
        img={user2}
        nome="bearlykkk"
        subDescricao="Bear Rui"
        btn="Mudar"
      />
      <div className="container_sugestoes">
        <p className="sugestoes">Sugestões para você</p>
        <p className="btn_branco">Ver tudo</p>
      </div>
      {listaPerfils.map((objeto, index) => (
        <Perfils
          key={index}
          img={objeto.imagem}
          nome={objeto.nome}
          subDescricao="Sugestões para você"
          btn="Seguir"
        />
      ))}
      <footer className="footer">
        <a>
          <span>Sobre</span> .
        </a>
        <a>
          <span>Ajuda</span> .
        </a>
        <a>
          <span>Imprensa</span> .
        </a>
        <a>
          <span>API</span> .
        </a>
        <a>
          <span>Carreiras</span> .
        </a>
        <a>
          <span>Privacidade</span> .
        </a>
        <a>
          <span>Termos</span> .
        </a>
        <a>
          <span>Localizações</span> .
        </a>
        <a>
          <span>Idioma</span> .
        </a>
        <a>
          <span>Bearly Verified</span>
        </a>
        <div>© 2024 BEARTAGRAM FROM BEARLY</div>
      </footer>
    </div>
  );
}
