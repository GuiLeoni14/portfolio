'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { useState } from 'react'
import { SlideCardProps, SlideCard } from './SlideCard'
import { SlideThumb } from './ThumbSlide'
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'

const slideItems = [
  {
    bannerUrl: 'https://www.designi.com.br/images/preview/11248054.jpg',
    title:
      '“De todos os parceiros com quem já trabalhamos, a Insany faz, de longe, o trabalho mais design-oriented e de alto nível crítico...”',
    deposition:
      'Tábuas artesanais para churrasco personalizáveis: Transforme seu churrasco em uma experiência única com nossa qualidade e personalização exclusiva.',
    logoUrl: 'https://insany.design/wp-content/uploads/2021/08/logo-loja.svg',
    name: 'Gus_ Ruchaud',
    job: 'Head de Branding e Product Marketing',
    redirectUrl: 'teste',
    pictureUrl: 'https://insany.design/wp-content/uploads/2021/08/gus.jpg',
  },
  {
    bannerUrl: 'https://www.designi.com.br/images/preview/11248054.jpg',
    title:
      '“De todos os parceiros com quem já trabalhamos, a Insany faz, de longe, o trabalho mais design-oriented e de alto nível crítico...”',
    deposition:
      'Tábuas artesanais para churrasco personalizáveis: Transforme seu churrasco em uma experiência única com nossa qualidade e personalização exclusiva.',
    logoUrl: 'https://insany.design/wp-content/uploads/2021/08/logo-loja.svg',
    name: 'Gus_ Ruchaud',
    job: 'Head de Branding e Product Marketing',
    redirectUrl: 'teste',
    pictureUrl: 'https://insany.design/wp-content/uploads/2021/08/gus.jpg',
  },
  {
    bannerUrl: 'https://www.designi.com.br/images/preview/11248054.jpg',
    title:
      '“De todos os parceiros com quem já trabalhamos, a Insany faz, de longe, o trabalho mais design-oriented e de alto nível crítico...”',
    deposition:
      'Tábuas artesanais para churrasco personalizáveis: Transforme seu churrasco em uma experiência única com nossa qualidade e personalização exclusiva.',
    logoUrl: 'https://insany.design/wp-content/uploads/2021/08/logo-loja.svg',
    name: 'Gus_ Ruchaud',
    job: 'Head de Branding e Product Marketing',
    redirectUrl: 'teste',
    pictureUrl: 'https://insany.design/wp-content/uploads/2021/08/gus.jpg',
  },
  {
    bannerUrl: 'https://www.designi.com.br/images/preview/11248054.jpg',
    title:
      '“De todos os parceiros com quem já trabalhamos, a Insany faz, de longe, o trabalho mais design-oriented e de alto nível crítico...”',
    deposition:
      'Tábuas artesanais para churrasco personalizáveis: Transforme seu churrasco em uma experiência única com nossa qualidade e personalização exclusiva.',
    logoUrl: 'https://insany.design/wp-content/uploads/2021/08/logo-loja.svg',
    name: 'Gus_ Ruchaud',
    job: 'Head de Branding e Product Marketing',
    redirectUrl: 'teste',
    pictureUrl: 'https://insany.design/wp-content/uploads/2021/08/gus.jpg',
  },
] satisfies SlideCardProps[]

export function DepositionsContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="bg-stars deposition relative h-auto w-full bg-cover bg-center">
      <div className="container mx-auto mb-10 flex flex-col items-center gap-4 text-center">
        <span className="text-2xl text-gray-200">
          Ainda não está convencido?
        </span>
        <h2 className="text-center text-5xl font-bold">
          Veja oque falam sobre{' '}
          <strong className="bg-gradient-title bg-clip-text text-transparent">
            mim
          </strong>
        </h2>
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[EffectFade, Thumbs, Autoplay, Pagination]}
        className="h-full"
      >
        {slideItems.map((item, index) => {
          return (
            <SwiperSlide
              className="h-full w-full"
              key={`${item.title}${index}`}
            >
              <SlideCard
                bannerUrl={item.bannerUrl}
                title={item.title}
                deposition={item.deposition}
                redirectUrl={item.redirectUrl}
                logoUrl={item.logoUrl}
                pictureUrl={item.pictureUrl}
                name={item.name}
                job={item.job}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="absolute bottom-0 left-1/2 z-20 hidden w-full max-w-[500px] -translate-x-1/2 md:bottom-auto md:left-[8%] md:top-[241px] md:h-[420px] md:w-auto md:max-w-full md:translate-x-0 lg:block">
        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Thumbs, Autoplay]}
          breakpoints={{
            '0': {
              direction: 'horizontal',
              spaceBetween: 20,
              slidesPerView: 2,
            },
            '768': {
              direction: 'vertical',
              spaceBetween: 10,
              slidesPerView: 4,
            },
          }}
          className="swiper_hero_thumb h-[60px] w-full md:h-full"
        >
          {slideItems.map((item, index) => {
            return (
              <SwiperSlide key={`${item.title}${index}`}>
                <SlideThumb thumbUrl={item.pictureUrl} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
