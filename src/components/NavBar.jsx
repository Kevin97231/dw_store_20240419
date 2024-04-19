import { Link } from "react-router-dom";

export const NavBar = () => {
  // @ du logo de la navBar
  const logo = "/src/assets/img/logo.png";

  return (
    <>
      <header className="px-5 shadow-lg navbar bg-neutral text-neutral-content">
        <nav className="w-full">
          <Link to={"/"}>
          <img src={logo} className="w-auto h-10"/>
          </Link>
          <div className="m-auto w-fit">
            <ul className="flex items-center gap-10">
              <li>
                Ma navbar 
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
