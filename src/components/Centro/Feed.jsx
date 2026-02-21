import Post from "./Post/Post";

import user2 from "@/assets/img/perfis/user-2.png";
import bearEmoji from "@/assets/img/perfis/bear-emoji.png";
import polar from "@/assets/img/perfis/polar.png";
import post1 from "@/assets/img/postagens/post-1.jpg";
import post3 from "@/assets/img/postagens/post-3.jpg";
import post4 from "@/assets/img/postagens/post-4.jpg";

import "./Feed.css";

const listaPosts = [
  {
    foto: user2,
    fundo: true,
    nome: "bearlykkk",
    postagem: post1,
    descricao: "Só passendo com os melhores nesse dia 🐻",
  },
  {
    foto: bearEmoji,
    nome: "leeee_ti",
    postagem: post3,
    descricao: "Treinando para o campeonato mundial de ping pong sem ping",
    comentarios: [
      ["kkkaike", "Eu to torcendo pelo @rogerio"],
      ["yone_S2", "Fala dele 😽"],
    ],
  },
  {
    foto: polar,
    nome: "kdoo_dino",
    postagem: post4,
    descricao: "Familia❤️‍🩹",
    comentarios: [
      ["ursocomcurso", "Lindooooooooos aaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
    ],
  },
];

export default function Feed() {
  return (
    <div className="Feed">
      {listaPosts.map((objeto, index) => (
        <Post
          key={index}
          logado="bearlykkk"
          perfil={objeto.foto}
          fundoColorido={objeto.fundo}
          nome={objeto.nome}
          imgSrc={objeto.postagem}
          body={objeto.descricao}
          comentarios={objeto.comentarios}
        />
      ))}
    </div>
  );
}
