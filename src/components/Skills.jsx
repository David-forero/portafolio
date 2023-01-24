import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import cv_David_Forero from "../docs/David-Forero-cv.pdf";

const Skills = ({ skills, pageInfo, socials }) => {
  return (
    <div className="xl:h-screen w-full" id="about">
      <h2 className="text-black text-5xl font-semibold text-center mt-14">
        Todo sobre mi
      </h2>
      <div className="w-full flex justify-center">
        <hr className="w-44 h-1 mt-3 bg-blue-500 text-center" />
      </div>

      <div className="d-flex justify-center items-center mt-24">
        <div className="w-4/5 max-md:w-full px-6 py-16 flex justify-center items-center space-x-16 max-md:space-x-0 mx-auto mt-14 max-md:flex-col ">
          {/* About Me */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duraction: 2 }}
            whileInView={{ opacity: 1 }}
            suppressHydrationWarning
            className="w-2/4 max-md:w-full p-10 bg-white shadow-md rounded-sm"
          >
            <div className="flex text-center w-full justify-center">
              <img
                className="rounded-full text-center mb-2 shadow w-36 h-36"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="perfil"
              />
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-3xl text-sky-700 ">
                David Forero
              </h2>
              <h4 className="text-lg font-sans"> {pageInfo?.role}</h4>
            </div>
            <div className="flex text-center w-full justify-center">
              {/* Social icons */}
              {socials.map((social) => (
                <SocialIcon
                  style={{ width: 40 }}
                  fgColor="black"
                  bgColor="transparent"
                  url={social.url}
                />
              ))}

            
            </div>
            <p className="text-gray-500 font-light text-1xl mt-5">
              {pageInfo?.backgroundInformation}
            </p>
            <div className="w-full flex justify-center">
              <a
                href={cv_David_Forero}
                download=""
                className="bg-sky-700 text-white p-4 mt-5 rounded-full hover:bg-sky-900 shadow-xl hover:shadow-lg active:scale-90 transition duration-150"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>

          {/* SKILLS */}
          <section className="w-2/4 max-md:w-full max-md:mt-12 max-md:ml-0 flex flex-col justify-between">
            <h1 className="mb-12 text-5xl text-gray-500">Habilidades</h1>

            <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-4">
              {skills?.map((skill, i) => (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{ duraction: 2 }}
                  whileInView={{ opacity: 1 }}
                  suppressHydrationWarning
                  key={i}
                  className="mb-3 rounded-md shadow-md p-3 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
                >
                  <div className="flex flex-row ">
                    <img
                      src={urlFor(skill?.image).url()}
                      alt=""
                      className="w-7 h-7 mr-3 mb-3"
                    />
                    <h3>
                      {skill.title} -{" "}
                      <span className="text-sky-700 font-bold">
                        %{skill.progress}
                      </span>
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 shadow-lg">
                    <div
                      className="bg-sky-700 h-2.5 rounded-full"
                      style={{ width: skill.progress + "%" }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
