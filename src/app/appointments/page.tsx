"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline"

const services = [
  "General Consultation",
  "Women's Health",
  "Child Vaccination",
  "Diabetes & BP Checkup",
  "Laboratory Tests",
  "X-Ray & Ultrasound",
  "Emergency Care",
  "Chronic Care Follow-up",
  "Health Screening",
  "Other (specify in notes)"
]

const timeSlots = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
]

export default function AppointmentsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add selected values to form data
    formData.append('service', selectedService)
    formData.append('preferred_date', selectedDate)
    formData.append('preferred_time', selectedTime)

    try {
      const response = await fetch("https://formspree.io/f/manpeowb", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        alert("Your appointment request has been submitted! We'll contact you within 24 hours to confirm your appointment.")
        form.reset()
        setSelectedService("")
        setSelectedDate("")
        setSelectedTime("")
      } else {
        alert("There was an error submitting your appointment. Please try again or call us directly.")
      }
    } catch (error) {
      alert("There was an error submitting your appointment. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
              Book Your Appointment
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animation-delay-200">
              Schedule your visit to TCHKPK Hospital. Choose a convenient time for quality healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Appointment Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below to request an appointment. We&apos;ll contact you to confirm the details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="patient_name">Patient Name *</Label>
                          <Input
                            id="patient_name"
                            name="patient_name"
                            type="text"
                            required
                            className="mt-1"
                            placeholder="Full name of patient"
                          />
                        </div>
                        <div>
                          <Label htmlFor="age">Age *</Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            required
                            min="0"
                            max="120"
                            className="mt-1"
                            placeholder="Patient age"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="gender">Gender *</Label>
                          <select
                            id="gender"
                            name="gender"
                            required
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
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
                        <Label htmlFor="email">Email Address (optional)</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-4 border-t pt-6">
                      <h3 className="text-lg font-semibold text-foreground">Appointment Details</h3>

                      <div>
                        <Label htmlFor="service">Service Required *</Label>
                        <select
                          id="service"
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="preferred_date">Preferred Date *</Label>
                          <Input
                            id="preferred_date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            type="date"
                            required
                            min={today}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferred_time">Preferred Time *</Label>
                          <select
                            id="preferred_time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="symptoms">Symptoms or Reason for Visit</Label>
                        <Textarea
                          id="symptoms"
                          name="symptoms"
                          className="mt-1"
                          rows={4}
                          placeholder="Please describe your symptoms or reason for the appointment..."
                        />
                      </div>

                      <div>
                        <Label htmlFor="additional_notes">Additional Notes</Label>
                        <Textarea
                          id="additional_notes"
                          name="additional_notes"
                          className="mt-1"
                          rows={3}
                          placeholder="Any additional information, allergies, or special requests..."
                        />
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <Button type="submit" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Request Appointment"}
                      </Button>
                      <p className="mt-2 text-sm text-muted-foreground text-center">
                        We&apos;ll contact you within 24 hours to confirm your appointment
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="tel:+923489117057">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call: +92 348 9117057
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <a href="https://wa.me/923489117057" target="_blank" rel="noopener noreferrer">
                      <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                      WhatsApp Booking
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Operating Hours */}
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Saturday - Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm border-t pt-2">
                    <span className="font-semibold">Emergency</span>
                    <span className="text-red-600 font-semibold">24/7</span>
                  </div>
                </CardContent>
              </Card>

              {/* What to Bring */}
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    What to Bring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      Valid ID card or passport
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      Insurance card (if applicable)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      Previous medical records
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      Current medications list
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                      Payment method
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                    <ExclamationTriangleIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    Emergency Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    For medical emergencies, please call immediately or come directly to our emergency department. Don&apos;t wait for an appointment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Booking Methods */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Other Ways to Book
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the method that&apos;s most convenient for you
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <CardHeader>
                <PhoneIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  Speak directly with our staff to book your appointment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <a href="tel:+923489117057">Call +92 348 9117057</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <CardHeader>
                <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  Send us a message on WhatsApp for quick booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <a href="https://wa.me/923489117057" target="_blank" rel="noopener noreferrer">
                    WhatsApp +92 348 9117057
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
              <CardHeader>
                <UserIcon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle>Walk-In</CardTitle>
                <CardDescription>
                  Visit us during operating hours for same-day appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}