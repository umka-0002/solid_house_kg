import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.wrapper}>
      <header className={`container ${css.header}`}>
        <h1>Solid house</h1>

        <nav className={css.nav}>
          <a href="#">Все объявления</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>

      </header>
    </div>
  );
}

// import logo from "../assets/images/logo.svg";

// const Header = () => {
//   return (
//     <div className="container-md d-flex mt-3">
//       <div className="col d-flex align-self-center">
//         <img className="align-item-start" src={logo} alt="#" width={"150px"} />
//       </div>

//       <div className="col d-flex justify-content-between align-self-center">
//         <a className="col-md-3" href="">
//           Меню
//         </a>
//         <a className="col-md-3" href="">
//           Добавить
//         </a>
//         <button>Вход</button>
//       </div>
//     </div>
//   );
// };

// export default Header;
