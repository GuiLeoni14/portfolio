'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/Button'
import { Github, Linkedin, Mails, Phone } from 'lucide-react'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Landing Pages',
    href: '/servicos/criacao-de-landing-page',
    description:
      'Transforme sua presença online com nossa serviço de Landing Page.',
  },
  {
    title: 'E-commerce',
    href: '/servicos/criacao-de-ecommerce',
    description: 'Desenvolvemos e-commerce sob medida para o seu negócio.',
  },
  {
    title: 'Site institucional',
    href: '/servicos/criacao-de-site-institucional',
    description:
      'Construímos sua presença online com serviços de criação de site institucional',
  },
  {
    title: 'Consultoria digital',
    href: '/servicos/consultoria-digital',
    description:
      'Guiamos sua jornada digital com nossa consultoria especializada',
  },
]

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[80px] w-full items-center justify-center bg-gray-700 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="min-w-[200px]">
          <span className="bg-gradient-title bg-clip-text text-4xl font-bold text-transparent">
            GL
          </span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="block text-base">Home</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="block text-base">Serviços</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="block text-base">Projetos</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="block text-base">Contato</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="#" target="_blank" title="Whatsapp">
                    <div className="flex items-center gap-2">
                      <Phone />
                      +35 999979041
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Email">
                    <div className="flex items-center gap-2">
                      <Mails />
                      guileonidev@gmail.com
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Linkedin">
                    <div className="flex items-center gap-2">
                      <Linkedin />
                      Guilherme Leoni
                    </div>
                  </ListItem>
                  <ListItem href="#" title="Github">
                    <div className="flex items-center gap-2">
                      <Github />
                      GuiLeoni14
                    </div>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="block text-base">Sobre</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Solicitar orçamento</Button>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
