import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"

const serviceCards = [
  {
    title: "Ayurveda",
    description: "Discover the ancient wisdom of holistic healing through authentic Ayurvedic treatments.",
    image: "/Services-images/Ayurveda.png",
    href: "/services/ayurveda",
  },
  {
    title: "Panchakarma",
    description: "Experience deep cleansing and rejuvenation with traditional five-fold purification therapy.",
    image: "/Services-images/Panchakarma.png",
    href: "/services/panchakarma",
  },
  {
    title: "Yoga and Meditation",
    description: "Transform your mind and body through ancient practices of yoga and meditation.",
    image: "/Services-images/Yoga and Meditation.png",
    href: "/services/yoga-meditation",
  },
  {
    title: "Ayurvedic Massage",
    description: "Relax and heal with therapeutic Ayurvedic massage techniques.",
    image: "/Services-images/Ayurvedic Massage.jpg",
    href: "/services/ayurvedic-massage",
  },
  {
    title: "Ayurvedic Diet",
    description: "Learn about personalized nutrition based on your unique constitution.",
    image: "/Services-images/Ayurvedic Diet.jpeg",
    href: "/services/ayurvedic-diet",
  },
  {
    title: "Physiotherapy",
    description: "Recover and strengthen with modern physiotherapy treatments.",
    image: "/Services-images/Physiotherapy.png",
    href: "/services/physiotherapy",
  },
  {
    title: "Kalari & Marma",
    description: "Experience the healing power of Kerala's martial arts and vital point therapy.",
    image: "/Services-images/Kalari & Marma.png",
    href: "/services/kalari-marma",
  },
]

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 font-poppins text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
          <Card key={service.title} className="flex flex-col overflow-hidden hover:shadow-card transition-all duration-300">
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-poppins text-xl text-primary">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link to={service.href} className="w-full">
                <Button
                  variant="secondary"
                  className="w-full font-poppins hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </Layout>
  )
}