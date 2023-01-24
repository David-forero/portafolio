import { useState } from "react";
import { Link } from 'react-scroll';


const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 backdrop-blur-lg bg-opacity-20 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
          smooth={true} to="home"
            className="text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white items-center flex cursor-pointer"
          >
            <i className='bx bxs-moon text-white text-lg mr-4' ></i>
            David Forero
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
         <i className='bx bx-menu text-white text-3xl'></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                smooth={true} to="home"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
              >
              <i className='bx bxs-home text-white text-lg'></i>
                <span className="ml-2">Inicio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true} to="about"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
              >
              <i className='bx bx-code-alt text-white text-lg'></i>
                <span className="ml-2">Habilidades</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true} to="service"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
              >
               <i className='bx bxs-briefcase text-white text-lg'></i>
                <span className="ml-2">Experiencia</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth={true} to="portfolio"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
              >
               <i className='bx bxs-rocket text-white text-lg'></i>
                <span className="ml-2">Proyectos</span>
              </Link>
            </li>

            {/* <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <LifebuoyIcon color="white" fontSize={10} />
                <span className="ml-2">Contacto</span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
