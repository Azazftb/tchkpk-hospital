import Link from "next/link"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Hospital Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-primary mb-4">TCHKPK Hospital</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Caring for Your Family&apos;s Health, Right Here in Timergara
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4" />
                <span>Timergara, KPK, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="h-4 w-4" />
                <span>+92 348 9117057</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <EnvelopeIcon className="h-4 w-4" />
                <span>info@tchkpk.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ClockIcon className="h-4 w-4" />
                <span>24/7 Emergency</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 TCHKPK Hospital. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Providing quality healthcare for families in Timergara
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}