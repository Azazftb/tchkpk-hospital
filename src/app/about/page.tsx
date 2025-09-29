import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  HeartIcon,
  EyeIcon,
  BoltIcon,
  UserGroupIcon,
  MapPinIcon,
  LanguageIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  SparklesIcon
} from "@heroicons/react/24/outline"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
              About TCHKPK Hospital
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
              Committed to providing accessible, quality healthcare to families in Timergara and surrounding areas of KPK, Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Are
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                TCHKPK Hospital is a modern healthcare facility established to serve the medical needs of families in Timergara, KPK, Pakistan. We understand that quality healthcare should be accessible to everyone in our community.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our hospital combines modern medical technology with compassionate care, delivered by qualified healthcare professionals who understand the local culture and speak the languages of our community. We believe that effective healthcare starts with clear communication and cultural understanding.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                From routine check-ups to emergency care, from women&apos;s health to pediatric services, we are here to ensure that families in Timergara have access to the healthcare they deserve, right in their own community.
              </p>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/Assets/Doctor.jpg"
                  alt="TCHKPK Hospital - Professional medical care"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/40 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <EyeIcon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading healthcare provider in Timergara and surrounding areas, recognized for our commitment to accessible, quality medical care that serves every member of our community with dignity and respect.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/40 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BoltIcon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive, affordable healthcare services to families in our community, combining modern medical technology with compassionate care, cultural sensitivity, and local language support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why We Exist
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe every family deserves access to quality healthcare without having to travel far from home. Healthcare should be accessible, affordable, and culturally appropriate.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <MapPinIcon className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Local Accessibility</h3>
              <p className="text-muted-foreground">
                Healthcare should be available in your own community, not hours away in distant cities.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <CurrencyDollarIcon className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Financial Accessibility</h3>
              <p className="text-muted-foreground">
                Quality medical care should be affordable for working families and those with limited resources.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <LanguageIcon className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Cultural Accessibility</h3>
              <p className="text-muted-foreground">
                Healthcare providers should understand and respect local culture and communicate in familiar languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our doors are open to everyone in our community. We are committed to serving all families with the same level of care and respect.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserGroupIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  Families & Individuals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Parents seeking healthcare for their children</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Women needing specialized healthcare services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Elderly patients requiring ongoing care</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Working professionals needing convenient care</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Students and young adults</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Regardless of economic background</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Respecting all cultural and religious beliefs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Providing care in local languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Maintaining patient privacy and dignity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">Emergency care for all, always</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <HeartIcon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Compassion</h3>
              <p className="text-sm text-muted-foreground">
                We treat every patient with kindness, empathy, and understanding.
              </p>
            </div>

            <div className="text-center">
              <AcademicCapIcon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We strive for the highest standards in medical care and service quality.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheckIcon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                We maintain honesty, transparency, and ethical practices in all we do.
              </p>
            </div>

            <div className="text-center">
              <UserGroupIcon className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                We are committed to serving and strengthening our local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Healthcare Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Qualified medical professionals dedicated to your health and well-being.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <UserGroupIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Qualified Doctors</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Board-certified physicians with expertise in family medicine, emergency care, and specialized treatments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <HeartIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Caring Nurses</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Compassionate nursing staff trained in modern healthcare practices and patient care excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <AcademicCapIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Support Staff</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dedicated support team including lab technicians, administrative staff, and healthcare assistants.
                  </p>
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
              Experience Quality Healthcare Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join the families who trust TCHKPK Hospital for their healthcare needs. We&apos;re here to serve you with compassion and excellence.
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