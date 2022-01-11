import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar__logo" href={"/"}>
        TvFlix
      </a>
      <ul className="navbar__links">
        <a className="navbar__links__items" href={"register"}>
          <li>Cadastrar</li>
        </a>
        <a className="navbar__links__items" href={"!#"}>
          <li>Favoritos</li>
        </a>
        <a className="navbar__links__items" href="!#">
          <li>Perfil</li>
        </a>
        <a className="navbar__links__items" href={"login"}>
          <li>Login</li>
        </a>
      </ul>
    </div>
  );
}
