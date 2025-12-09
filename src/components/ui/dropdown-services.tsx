"use client"

import * as React from "react"
import { useNavigate } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu"

const services = [
  {
    title: "Ayurveda",
    description: "Traditional holistic healing system of India",
    href: "/services/ayurveda",
  },
  {
    title: "Panchakarma",
    description: "Five-fold purification therapy",
    href: "/services/panchakarma",
  },
  {
    title: "Yoga and Meditation",
    description: "Ancient practices for mind-body wellness",
    href: "/services/yoga-meditation",
  },
  {
    title: "Ayurvedic Massage",
    description: "Therapeutic healing touch treatments",
    href: "/services/ayurvedic-massage",
  },
  {
    title: "Ayurvedic Diet",
    description: "Personalized nutritional guidance",
    href: "/services/ayurvedic-diet",
  },
  {
    title: "Physiotherapy",
    description: "Physical rehabilitation and therapy",
    href: "/services/physiotherapy",
  },
  {
    title: "Kalari & Marma",
    description: "Ancient martial arts and vital point therapy",
    href: "/services/kalari-marma",
  },
]

export function ServicesDropdown() {
  const navigate = useNavigate()

  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-poppins font-medium transition-colors text-foreground hover:text-primary">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {services.map((service) => (
              <li key={service.title}>
                <NavigationMenuLink asChild>
                  <a
                    href={service.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(service.href)
                    }}
                  >
                    <div className="text-sm font-medium leading-none">
                      {service.title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}