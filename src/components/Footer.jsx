import bg1 from "../assets/bg1.svg";

const Footer = () => {
  return (
    <div
      className="w-full h-80 p-10 flex justify-center items-center bg-footer"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
      
      }}
    >
      <div>
        <h1 className="text-white text-center text-lg max-md:text-md mt-24">
          Copyright © 2023 Todos los derechos reservados
        </h1>
        <h4 className="text-white text-center text-md max-md:text-sm mt-5 font-light">
          Este portafolio fué desarrollado con React + Vite y Tailwindcss
        </h4>
      </div>
    </div>
  );
};

export default Footer;
