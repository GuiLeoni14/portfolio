'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function TechnologySlide() {
  return (
    <Swiper
      className="technology-slide pointer-events-none w-full"
      spaceBetween={40}
      grabCursor={true}
      a11y={{ enabled: false }}
      freeMode={true}
      speed={11000}
      loop={true}
      slidesPerView={16}
      modules={[Autoplay]}
      autoplay={{
        delay: 0.5,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          spaceBetween: 30,
        },
        480: {
          spaceBetween: 30,
        },
        767: {
          spaceBetween: 40,
        },
        992: {
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            alt="TypeScript"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
            alt="Python"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
            alt="Git"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            alt="HTML5"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            alt="CSS3"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            alt="React"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
            alt="NextJs"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            alt="TailwindCSS"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
            alt="Material UI"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
            alt="Redux"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
            alt="Vite"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"
            alt="Vue"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
            alt="Sass"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            alt="NodeJS"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            alt="Express"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
            alt="NestJS"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg"
            alt="GraphQL"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            alt="PostgreSQL"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
            alt="MySQL"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
            alt="Firebase"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
            alt="Supabase"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
            alt="Django"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg"
            alt="Docker"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[36px] w-[36px]">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
            alt="Figma"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
