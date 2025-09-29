import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  LanguageIcon,
  BeakerIcon,
  UsersIcon,
  UserIcon,
  SparklesIcon,
  CameraIcon,
  PlusIcon
} from "@heroicons/react/24/outline"

const services = [
  {
    name: "Outpatient Care",
    description: "Comprehensive general medical consultations and routine check-ups",
    icon: UserIcon,
  },
  {
    name: "Emergency Services",
    description: "24/7 emergency medical care for urgent health needs",
    icon: HeartIcon,
  },
  {
    name: "Women's Health",
    description: "Specialized healthcare services for women of all ages",
    icon: UsersIcon,
  },
  {
    name: "Child Vaccinations",
    description: "Complete immunization programs for children",
    icon: PlusIcon,
  },
  {
    name: "Diabetes & BP Care",
    description: "Management and monitoring of diabetes and blood pressure",
    icon: BeakerIcon,
  },
  {
    name: "Laboratory Services",
    description: "Full range of diagnostic tests and lab work",
    icon: SparklesIcon,
  },
  {
    name: "X-Ray & Ultrasound",
    description: "Advanced imaging services for accurate diagnosis",
    icon: CameraIcon,
  },
  {
    name: "Chronic Care",
    description: "Long-term care management for chronic conditions",
    icon: ClockIcon,
  },
]

const testimonials = [
  {
    content: "TCHKPK Hospital provided excellent care for my family. The doctors are very understanding and speak our local language.",
    author: "Fatima K.",
    location: "Timergara"
  },
  {
    content: "The emergency service saved my father's life. Professional staff and modern equipment right here in our community.",
    author: "Ahmad M.",
    location: "Timergara"
  },
  {
    content: "Affordable healthcare with quality treatment. The female doctors make our women feel comfortable and safe.",
    author: "Sadia R.",
    location: "Timergara"
  }
]

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We are open 24/7 for emergency services. Regular consultations are available Monday to Friday 8:00 AM - 8:00 PM, and weekends 9:00 AM - 6:00 PM."
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with most local insurance providers. Please contact us to verify your specific insurance coverage."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book appointments online through our website, call us at +92 348 9117057, or message us on WhatsApp."
  },
  {
    question: "Do you have female doctors available?",
    answer: "Yes, we have qualified female doctors on our staff to ensure comfortable care for all our patients, especially women and children."
  },
  {
    question: "What emergency services do you provide?",
    answer: "We provide 24/7 emergency care including trauma care, cardiac emergencies, respiratory issues, and other urgent medical conditions."
  },
  {
    question: "Do you speak local languages?",
    answer: "Yes, our staff is fluent in Urdu, Pashto, and other local languages to ensure clear communication with all patients."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
              Caring for Your Family&apos;s Health
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
              Right Here in Timergara
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground animate-fade-in-up animation-delay-200">
              Quality healthcare services with local language support, affordable treatments, and 24/7 emergency care for families in our community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/appointments">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Vision & Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              To provide accessible, quality healthcare to families in Timergara and surrounding areas, ensuring no one has to travel far for essential medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Families Trust Us */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Families Trust TCHKPK
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We understand the unique healthcare needs of our community
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <LanguageIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground">Local Language Care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fluent in Urdu, Pashto, and local dialects for clear communication
              </p>
            </div>
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <CurrencyDollarIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground">Affordable Care</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quality healthcare at prices families in our community can afford
              </p>
            </div>
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <UserGroupIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground">Female Doctors</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Qualified female physicians for comfortable care of women and children
              </p>
            </div>
            <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <ShieldCheckIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-foreground">24/7 Emergency</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Round-the-clock emergency services when you need them most
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Healthcare Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive medical care for your entire family
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <CardContent className="pt-6">
                  <blockquote className="text-sm leading-7 text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Common questions about our healthcare services
            </p>
          </div>
          <div className="mt-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="hover:bg-muted/30 transition-colors duration-200">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Take Care of Your Health?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Book an appointment today and experience quality healthcare in your community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/appointments">Book Appointment</Link>
              </Button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
