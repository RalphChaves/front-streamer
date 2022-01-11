import axios from "axios";
import { useState, useEffect } from "react/cjs/react.development";
import "./Filme.scss";
import Frame from "../../components/Frame/Frame";
import Card from "../../components/Card/Card";

export default function Filme(id) {
  const [filme, setFilme] = useState({});
  const [montado, setMontado] = useState(false);

  const getFilme = async () => {
    await axios.get("/movie/findUnique/id").then((response) => {
      if (montado) {
        setFilme(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getFilme(id);
  }, []);

  return (
    <div>
      <Frame
        image="https://mobizoo.com.br/wp-content/uploads/2020/03/assistir-filmes-online-gratis.jpg"
        title="Varios Filmes Online"
        subtitle="Os melhores filmes voce encontra aqui"
      />
      {filme.map((item) => (
        <Card resume={item.resume} genero={item.genres} elenco={item.cast} />
      ))}
    </div>
  );
}
