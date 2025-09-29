import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  HeartIcon,
  UserIcon,
  UsersIcon,
  PlusIcon,
  BeakerIcon,
  SparklesIcon,
  CameraIcon,
  ClockIcon,
  PhoneIcon,
  CalendarIcon
} from "@heroicons/react/24/outline"

const services = [
  {
    name: "Outpatient Care",
    description: "Comprehensive general medical consultations and routine check-ups for all family members. Our experienced doctors provide thorough examinations, diagnosis, and treatment plans.",
    icon: UserIcon,
    details: [
      "General health consultations",
      "Routine medical examinations",
      "Preventive care advice",
      "Health screenings",
      "Follow-up consultations"
    ]
  },
  {
    name: "Emergency Services",
    description: "24/7 emergency medical care for urgent health needs. Our emergency department is equipped to handle critical conditions with immediate response.",
    icon: HeartIcon,
    details: [
      "24/7 emergency care",
      "Trauma and accident care",
      "Cardiac emergencies",
      "Respiratory emergencies",
      "Immediate medical response"
    ]
  },
  {
    name: "Women's Health",
    description: "Specialized healthcare services for women of all ages, delivered by qualified female doctors in a comfortable and culturally sensitive environment.",
    icon: UsersIcon,
    details: [
      "Gynecological consultations",
      "Prenatal and postnatal care",
      "Family planning services",
      "Women's wellness exams",
      "Reproductive health care"
    ]
  },
  {
    name: "Child Vaccinations",
    description: "Complete immunization programs for children following national and international vaccination schedules to protect against preventable diseases.",
    icon: PlusIcon,
    details: [
      "Routine childhood immunizations",
      "Vaccination schedule tracking",
      "Travel vaccinations",
      "Catch-up immunizations",
      "Vaccination records management"
    ]
  },
  {
    name: "Diabetes & Blood Pressure Care",
    description: "Comprehensive management and monitoring of diabetes and hypertension with regular check-ups, medication management, and lifestyle counseling.",
    icon: BeakerIcon,
    details: [
      "Diabetes monitoring and management",
      "Blood pressure monitoring",
      "Medication adjustment",
      "Dietary counseling",
      "Lifestyle modification guidance"
    ]
  },
  {
    name: "Laboratory Services",
    description: "Full range of diagnostic tests and laboratory work with modern equipment and accurate results to support proper diagnosis and treatment.",
    icon: SparklesIcon,
    details: [
      "Blood tests and analysis",
      "Urine analysis",
      "Stool examination",
      "Blood sugar monitoring",
      "Complete blood count (CBC)"
    ]
  },
  {
    name: "X-Ray & Ultrasound",
    description: "Advanced imaging services including X-rays and ultrasound examinations for accurate diagnosis of various medical conditions.",
    icon: CameraIcon,
    details: [
      "Digital X-ray imaging",
      "Ultrasound examinations",
      "Bone fracture diagnosis",
      "Chest X-rays",
      "Abdominal imaging"
    ]
  },
  {
    name: "Chronic Care Management",
    description: "Long-term care management for patients with chronic conditions, focusing on maintaining quality of life and preventing complications.",
    icon: ClockIcon,
    details: [
      "Chronic disease monitoring",
      "Regular follow-up appointments",
      "Medication management",
      "Complication prevention",
      "Patient education and support"
    ]
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
              Our Healthcare Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
              Comprehensive medical care for your entire family in Timergara. Quality healthcare services delivered with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">What we offer:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24 bg-red-50 dark:bg-red-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-50/50 dark:from-red-950/30 dark:to-red-900/30"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <HeartIcon className="h-16 w-16 text-red-600 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              24/7 Emergency Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              For medical emergencies, call us immediately. Our emergency team is always ready to provide immediate care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <PhoneIcon className="h-5 w-5 mr-2 animate-pulse" />
                Emergency: +92 348 9117057
              </Button>
              <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <a href="https://wa.me/923489117057" target="_blank" rel="noopener noreferrer">
                  WhatsApp Emergency
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hours and Appointment */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Emergency Services</span>
                  <span className="text-red-600 font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Regular consultations during operating hours. Emergency services available 24/7.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  Book an Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Schedule your appointment for non-emergency medical care. We offer convenient booking options to fit your schedule.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/appointments">Book Online Appointment</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="tel:+923489117057">Call: +92 348 9117057</a>
                  </Button>
                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="https://wa.me/923489117057" target="_blank" rel="noopener noreferrer">
                      WhatsApp Booking
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Quality Healthcare for Your Family
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Experience compassionate care with modern medical facilities right here in Timergara.
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