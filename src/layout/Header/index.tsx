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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/Button'
import { Github, Linkedin, Mails, Menu, Phone, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

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
    href: '#',
    description:
      'Construímos sua presença online com serviços de criação de site institucional',
  },
  {
    title: 'Consultoria digital',
    href: '#',
    description:
      'Guiamos sua jornada digital com nossa consultoria especializada',
  },
]

const contacts = [
  {
    icon: <Phone />,
    text: '+35 999979041',
    href: 'https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0',
    title: 'WhatsApp',
  },
  {
    icon: <Mails />,
    text: 'guileonidev@gmail.com',
    href: '#',
    title: 'Email',
  },
  {
    icon: <Linkedin />,
    text: 'Guilherme Leoni',
    href: 'https://www.linkedin.com/in/guileoni14',
    title: 'Linkedin',
  },
  {
    icon: <Github />,
    text: 'GuiLeoni14',
    href: 'https://github.com/GuiLeoni14',
    title: 'Github',
  },
]

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const body = document.querySelector('body')
    if (!body) return
    menuOpen ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto')
  }, [menuOpen])

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[80px] w-full items-center justify-center bg-gray-700 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="min-w-[200px]">
          <span className="bg-gradient-title bg-clip-text text-4xl font-bold text-transparent">
            GL
          </span>
        </div>
        <div className="lg:hidden">
          <Collapsible open={menuOpen} className="relative z-10">
            <CollapsibleTrigger onClick={() => setMenuOpen((state) => !state)}>
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </CollapsibleTrigger>
            <CollapsibleContent className="fixed right-0 top-[80px] w-full bg-gray-700 p-4">
              <ScrollArea className="flex h-[60vh] flex-col">
                <Link href="/" className="block py-2 text-xl font-semibold">
                  Home
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem value="service">
                    <AccordionTrigger className="text-xl">
                      Serviços
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <Link href={component.href} key={component.title}>
                            <div className="flex flex-col">
                              <strong className="text-lg">
                                {component.title}
                              </strong>
                              <span>{component.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="contact">
                    <AccordionTrigger className="text-xl">
                      Contato
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {contacts.map((contact) => (
                          <Link
                            href={contact.href}
                            key={contact.text}
                            className="flex flex-col gap-2"
                          >
                            <strong className="text-lg">{contact.title}</strong>
                            <div className="flex gap-2">
                              {contact.icon}
                              <span>{contact.text}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="/" className="block py-2 text-xl font-semibold">
                  Sobre
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <Button>Solicitar orçamento</Button>
                </a>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 h-full w-full bg-black/60"
            />
          )}
        </div>
        <NavigationMenu className="hidden lg:block">
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
        <a
          href="https://api.whatsapp.com/send/?phone=5535999979041&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
        >
          <Button>Solicitar orçamento</Button>
        </a>
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
