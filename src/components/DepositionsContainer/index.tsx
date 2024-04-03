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
import { Swiper as SwiperType } from 'swiper'

const slideItems = [
  {
    title:
      '“Fui muito bem atendido e escutado, meu site saiu como eu queria, detalhe por detalhe em um prazo muito curto. Flexibilidade gráfica e agilidade resumem esse trabalho realizado.”',
    logoUrl: '/img/depositions/keylogo.png',
    name: 'Kennedy Oliveira',
    job: 'CEO - O Grupo Key',
    redirectUrl: 'https://ogrupokey.com',
    pictureUrl: '/img/depositions/keypicture.png',
  },
  {
    title: `“Atendimento rápido e preciso, executou tudo que eu precisei da forma que foi requisitado. Não é atoa que em breve farei outro projeto com o Guilherme.”`,
    logoUrl: '/img/depositions/zgravitylogo.png',
    name: 'Igor Zinsly - ZGravity',
    job: 'CEO e Founder',
    redirectUrl: 'https://www.zgravity.shop/',
    pictureUrl: '/img/depositions/zgravitypicture.png',
  },
  {
    title: `“Trabalhar com o Guilherme tem sido uma experiência verdadeiramente gratificante. Além de ser um desenvolvedor excepcional, demonstra ser uma pessoa incrivelmente comprometida. Sua capacidade de se adaptar às necessidades de cada projeto e sua abordagem ágil foram fundamentais para alcançarmos novos patamares. Estou ansioso para continuar nossa colaboração em futuros projetos, confiante em sua habilidade de impulsionar nossos empreendimentos adiante.”`,
    logoUrl: '/img/depositions/icon_beep.svg',
    name: 'Gabriel Suarez - Beep Digital',
    job: 'CEO e Founder',
    redirectUrl: 'https://www.beepdigital.com.br',
    pictureUrl: '/img/depositions/suarez.png',
  },
  {
    title:
      '“Trabalhar com o Guilherme foi uma experiência incrível. Em dois projetos distintos, ele se mostrou não apenas um desenvolvedor front-end habilidoso, mas também uma pessoa extremamente solícita. Sempre disposto a ajudar e fazer seu melhor. Tenho um grande apreço por sua dedicação e profissionalismo. A flexibilidade e agilidade com que ele conduziu as demandas foram impressionantes, garantindo que tudo saísse exatamente como planejado. Sem dúvida, uma pessoa que pretendo continuar trabalhando em novos projetos.”',
    logoUrl: '/img/depositions/logo-ticto.svg',
    name: 'Gustavo Garcia Rezende',
    job: 'Gerente de projetos - Ticto',
    redirectUrl: 'https://www.ticto.com.br',
    pictureUrl: '/img/depositions/gustavo.png',
  },
] satisfies SlideCardProps[]

export function DepositionsContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section className="deposition relative h-auto w-full bg-stars bg-cover bg-center pt-20 md:pt-40">
      <div className="container mx-auto mb-10 flex flex-col items-center gap-4 text-center">
        <span className="text-2xl text-gray-200">
          Ainda não está convencido?
        </span>
        <h2 className="text-center text-4xl font-bold md:text-5xl">
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
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
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
                title={item.title}
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
    </section>
  )
}
