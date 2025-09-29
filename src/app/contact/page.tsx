"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon
} from "@heroicons/react/24/outline"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mdkwegnz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.")
        form.reset()
      } else {
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
              Contact TCHKPK Hospital
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
              Get in touch with us for appointments, inquiries, or emergency care. We&apos;re here to help you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <MapPinIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Timergara, KPK<br />
                  Pakistan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <PhoneIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+923489117057" className="text-primary hover:underline transition-colors duration-200">
                  +92 348 9117057
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  24/7 for emergencies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <EnvelopeIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@tchkpk.com" className="text-primary hover:underline transition-colors duration-200">
                  info@tchkpk.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <ClockIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: 8AM-8PM<br />
                  Sat-Sun: 9AM-6PM<br />
                  <span className="text-red-600 font-semibold">Emergency: 24/7</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="mt-1"
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="mt-1"
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button type="submit" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Quick Actions */}
            <div className="space-y-8">
              {/* Google Map */}
              <Card className="hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <CardTitle>Find Us on the Map</CardTitle>
                  <CardDescription>
                    TCHKPK Hospital location in Timergara, KPK
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13244.925806398654!2d71.8302!3d34.8204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e20f3b3b7f3f3f%3A0x1234567890abcdef!2sTimergara%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Get immediate assistance or book an appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/appointments">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Book Appointment Online
                    </Link>
                  </Button>

                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="https://wa.me/923489117057" target="_blank" rel="noopener noreferrer">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="tel:+923489117057">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24 bg-red-50 dark:bg-red-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-50/50 dark:from-red-950/30 dark:to-red-900/30"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-red-800 dark:text-red-200 animate-pulse">
              Emergency Contact
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              For medical emergencies, don&apos;t wait. Call us immediately or come directly to our emergency department.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <PhoneIcon className="h-5 w-5 mr-2 animate-pulse" />
                Emergency: +92 348 9117057
              </Button>
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <MapPinIcon className="h-5 w-5 mr-2" />
                Come to Hospital
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}