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
import { BudgetRequest } from '@/components/BudgetRequest'

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
                <Link
                  href="/projetos"
                  className="block py-2 text-xl font-semibold"
                >
                  Projetos
                </Link>
                <Link href="/" className="block py-2 text-xl font-semibold">
                  Sobre
                </Link>
                <BudgetRequest />
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
                    <Link
                      key={component.title}
                      href={component.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {component.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {component.description}
                      </p>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projetos" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="block text-base">Projetos</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="block text-base">Contato</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {contacts.map((contact) => (
                    <ListItem
                      key={contact.title}
                      title={contact.title}
                      href={contact.href}
                      target="_blank"
                    >
                      <div className="flex items-center gap-2">
                        {contact.icon}
                        {contact.text}
                      </div>
                    </ListItem>
                  ))}
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
        <BudgetRequest />
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
