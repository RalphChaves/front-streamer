import { useState, useEffect } from "react";

import Frame from "../../components/Frame/Frame";
import Card from "../../components/Card/Card";

import axios from "axios";
import "./Home.scss";
export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getFilmes = async () => {
    await axios.get("/movie/findMany").then((response) => {
      if (montado) {
        setFilmes(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getFilmes();
  }, [montado]);

  return (
    <div>
      <Frame
        image="https://mobizoo.com.br/wp-content/uploads/2020/03/assistir-filmes-online-gratis.jpg"
        title="Varios Filmes Online"
        subtitle="Os melhores filmes voce encontra aqui"
      />
      {filmes.map((item) => (
        <Card id={item.id} image={item.cover} name={item.title} key={item.id} />
      ))}
    </div>
  );
}
