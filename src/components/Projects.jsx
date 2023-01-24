import { motion } from "framer-motion";
import { urlFor } from "../sanity";

const Projects = ({ project }) => {
  return (
    <div className="w-2/3 py-16 bg-transparent">
      <div className="flex justify-center">
        <motion.img
          src={urlFor(project.image).url()}
          alt={project.title}
          initial={{
            y: -300,
            opacity: 0,
          }}
          className="w-2/4"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duraction: 1.2 }}
          viewport={{ once: true }}
        />
      </div>
      <h3 className="text-center mb-5 font-bold text-3xl">{project.title}</h3>

      <div className="flex justify-around mb-3 flex-wrap">
        <div className="flex my-2 flex-wrap justify-center items-center list-skill-project">
          {project?.technologies?.map((technology, i) => (
            <img
              key={i}
              className="rounded-full mr-2"
              width={40}
              src={urlFor(technology.image).url()}
              alt={technology.name}
            />
          ))}
        </div>
        <div className="flex justify-around flex-wrap lg:space-x-3">
          {project?.linkToBuild && (
            <a
              className="text-white bg-sky-700 py-3 px-4 flex justify-center items-center rounded-full shadow-md hover:bg-sky-900 shadow-xl hover:shadow-lg active:scale-90 transition duration-150"
              rel="noopener noreferrer"
              target="_blank"
              href={project?.linkToBuild}
            >
              <i className="fa fa-globe mr-3"></i> Demo
            </a>
          )}

          {project?.repository && (
            <a
              className="text-white bg-gray-900 py-3 px-4 flex justify-center items-center rounded-full shadow-md hover:bg-gray-600 shadow-xl hover:shadow-lg active:scale-90 transition duration-150"
              rel="noopener noreferrer"
              href={project.repository}
              target="_blank"
            >
              <i className="fab fa-github mr-3"></i> Github
            </a>
          )}
        </div>
      </div>

      <div className="text-gray-500 mt-11"> {project.summary}</div>
    </div>
  );
};

export default Projects;
