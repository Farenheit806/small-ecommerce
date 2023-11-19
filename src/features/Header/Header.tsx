import logo from "/src/assets/images/vite.svg"

import "./Header.scss"
import { Button } from "../../components/Button/Button"

export const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
        <h1>Интернет магазин</h1>
      </div>
      <ul className="header__nav">
        <li>Главная</li>
        <li>Каталог</li>
        <li>О нас</li>
      </ul>
      <div className="header__btns">
        <Button title={"Войти"} />
        <Button title={"Зарегистрироваться"} isFilled={true} />
      </div>
    </nav>
  )
}
