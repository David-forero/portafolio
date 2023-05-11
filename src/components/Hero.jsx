import forest from "../assets/forest.png";
import { Link } from 'react-scroll';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = ({ loading }) => {
  const [text, count] = useTypewriter({
    words: ["Hola!", "Bienvenido a mi portafolio", "Espero que te guste!"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="scene" id="home">
      <div className="moon"></div>
      <div className="flex items-center justify-center h-full w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-thin text-5xl">
              Mi portafolio está cargando, espere un momento...
            </h1>
            <div class="spinner-5 mt-5"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7x1 lg:text-6xl font-thin text-white">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#0099ff" />
            </h1>
            
            <Link className="animate-bounce relative z-50"  smooth={true} to="about">
             <i class='bx bxs-chevron-down-circle mt-20 text-3xl no-bg text-white animate-ping cursor-pointer  w-6 h-6 ' ></i>
            </Link>
          </div>
        )}
      </div>
      <img src={forest} alt="forest" className="forest" />
    </div>
  );
};

export default Hero;
