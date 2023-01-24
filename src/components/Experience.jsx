import bg1 from '../assets/bg1.svg'
import bg2 from '../assets/bg2.svg'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import CardExperience from './CardExperience';

const Experience = ({experiences}) => {
  return (
   <>
    <div className="h-screen w-full xl:mt-72 max-md:mt-24" id='service' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <h2 className="text-black text-5xl font-semibold text-center mt-14">
        Experiencia
      </h2>
      <div className="w-full flex justify-center">
        <hr className="w-44 h-1 mt-3 bg-blue-500 text-center" />
      </div>

      <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper px-5 mt-12"
            style={{ width: '100%' }}
          >
            {
              experiences?.map(experience => (
                <SwiperSlide key={experiences?._id} className='card-experience'>
                  <CardExperience experience={experience} />
                </SwiperSlide>
              ))
            }
          </Swiper>
    </div>
    <div className='w-full' style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: 'no-repeat', backgroundPositionY: -200, backgroundSize: 'cover', height: 600}}>

    </div>
   </>
  );
};

export default Experience;
