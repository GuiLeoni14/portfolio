import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'
import { AccordionItem } from './AccordionItem'
import { ListStart } from 'lucide-react'
export function AccordionAbout() {
  const [activeValueAccordion, setActiveValueAccordion] = useState('two')

  const handleChangeAccordionAbout = (value: string) => {
    setActiveValueAccordion(value)
  }

  const activeAccordionAboutImageSrc: Record<string, string> = {
    one: '/img/author_about.jpg',
    two: '/img/author_formatura.jfif',
  }

  return (
    <div className="bg-point mt-8 rounded-lg bg-purple-50 bg-cover bg-center bg-no-repeat p-10 shadow-lg dark:bg-gray-700">
      <div className="flex items-center justify-between">
        <span className="bg-gradient-orange block max-w-[60%] bg-clip-text text-2xl font-bold text-transparent">
          <span className="font-belle text-yellow-200">&lt;h2&gt;</span>Never
          stop learning
          <span className="font-belle text-yellow-200">&lt;h2&gt;</span>
        </span>
        <ListStart size={60} color="yellow" />
      </div>
      <div className="mt-8 flex items-start justify-between gap-10">
        <div className="flex h-[600px] w-full max-w-[30%] items-center justify-center overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={activeAccordionAboutImageSrc[activeValueAccordion ?? 'one']}
            width={300}
            height={600}
            alt="Eu"
          />
        </div>
        <div className="w-full max-w-[70%]">
          <Accordion.Root
            type="single"
            onValueChange={handleChangeAccordionAbout}
            defaultValue="two"
          >
            <AccordionItem title="Quem eu sou?" value="one">
              <span className="block text-xl font-medium text-gray-300">
                👋 Olá, me chamo Guilherme dos Reis Leoni
              </span>
              <p className="mt-2">
                Sou apaixonado por programação e tecnologia. Adoro praticar
                esportes, estar com as pessoas que gosto e claro, programar!.
                Programar tem sido meu hobby durante esses últimos anos, sempre
                aprendendo e evoluindo a cada dia, e acima de tudo me
                divertindo. Estou em busca de novos desafios todos os dias, seja
                criando aplicações ou aprendendo novas linguagens e frameworks.
              </p>
            </AccordionItem>
            <AccordionItem title="Minha formação" value="two">
              <span className="block text-xl font-medium text-gray-300">
                👋 Olá, me chamo Guilherme dos Reis Leoni
              </span>
              <p className="mt-2">
                Sou apaixonado por programação e tecnologia. Adoro praticar
                esportes, estar com as pessoas que gosto e claro, programar!.
                Programar tem sido meu hobby durante esses últimos anos, sempre
                aprendendo e evoluindo a cada dia, e acima de tudo me
                divertindo. Estou em busca de novos desafios todos os dias, seja
                criando aplicações ou aprendendo novas linguagens e frameworks.
              </p>
              <span className="mt-4 block text-xl font-bold">Cursos:</span>
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src="/img/icons/if_machado.jfif"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <strong className="text-lg font-bold">
                      Técnico em informática
                    </strong>
                    <span>Ifsuldeminas Campus Machado - Curso técnico</span>
                    <span className="font-bold text-yellow-200">
                      2019 - 2021
                    </span>
                    <span className="bg-gradient-orange bg-clip-text font-bold text-transparent">
                      banco de dados, mysql, java, html, css, javascript...
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="/img/icons/codeboost.png" width={80} height={80} />
                  <div className="flex flex-col">
                    <strong className="text-lg font-bold">
                      Front-end Developer
                    </strong>
                    <span>Codeboost</span>
                    <span className="font-bold text-yellow-200">
                      2019 - 2021
                    </span>
                    <span className="bg-gradient-orange bg-clip-text font-bold text-transparent">
                      react, nextjs, html, css, scss, javascript, wordpress,
                      gulp...
                    </span>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </Accordion.Root>
        </div>
      </div>
    </div>
  )
}
