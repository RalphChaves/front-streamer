import { useState } from "react";
import axios from "axios";

import "./Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      birthdate: birthdate,
      password: password,
      passwordConfirmation: passwordConfirmation,
      imageUrl: imageUrl,
    };

    axios.post("user/create", user).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h2>Criar um Usuario</h2>
      <form className="Register" onSubmit={handleSubmit}>
        <label>Image de Perfil</label>
        <input
          type="text"
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <br />
        <label>Nome</label>
        <input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label>Data de Nascimento</label>
        <input
          type="date"
          required
          onChange={(event) => setBirthdate(event.target.value)}
        />
        <br />
        <label>Senha</label>
        <input
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <label>Confirmação da Senha</label>
        <input
          type="password"
          required
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <br />
        <input className='button' type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
