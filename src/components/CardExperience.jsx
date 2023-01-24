import React from 'react'
import { motion } from "framer-motion";
import { urlFor } from '../sanity';

const CardExperience = ({ experience }) => {
    return (
        <div className='bg-white shadow-md p-5 w-50 rounded-md'>
            <div className="flex justify-center mb-12">
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    alt={experience?.company}
                    src={urlFor(experience?.companyImage).url()} 
                    width={120} className='rounded-circle img-fluid' />
            </div>

            <h3 className='mt-8 text-2xl'>{experience?.jobTitle}</h3>
            <h5 className='text-red-500 mb-4'>{experience?.company}</h5>
            <p className="uppercase py-1 text-sky-700">{new Date(experience.dataStarted).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})} - {experience.isCurrentlyWorkingHere ? "Actualidad" : new Date(experience.dataEnded).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</p>

            <div className="flex space-x-2 my-2 mb-7">
                {
                    experience?.technologies?.map((technology, i) => (
                        <img key={i} className="rounded-full" width={40} src={urlFor(technology.image).url()} alt="" />
                    ))
                }
            </div>

            <ul className='mt-10 px-10'>
                {
                    experience.points?.map((point, i) => (
                        <li className='mb-3 text-gray-600 list-disc' key={i}>{point}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CardExperience