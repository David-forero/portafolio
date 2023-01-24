import { Keyboard, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Projects from "./Projects";

export const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio">
      <h2 className="text-black text-5xl font-semibold text-center mt-14">
        Proyectos
      </h2>
      <div className="w-full flex justify-center">
        <hr className="w-44 h-1 mt-3 bg-blue-500 text-center" />
      </div>
      <div className="w-full h-screen ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="w-full p-20 mt-28 bg-transparent"
        >
          {projects?.map((project) => (
            <SwiperSlide className="swiper-slide bg-transparent" key={project._id}>
              <Projects project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
