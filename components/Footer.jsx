import Link from "next/link"
import { Facebook, Linkedin, MapPin, Phone, Mail, Youtube } from 'lucide-react'
import Image from "next/image"
import { logo } from "@/public/assets"

export default function Footer() {
  return (
    <footer className="bg-[#1A2D39] text-[#9FAEBE] pt-20 pb-5 padding-x max-sm:pt-10">
      <div className="container mx-auto px-4 max-sm:px-[0rem]">
        <div className="grid grid-cols-4  gap-8 max-sm:grid-cols-1 sm:max-lg:grid-cols-2">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} width={200} height={200} alt="logo" />
        </Link>
            </div>
            <p className="text-sm text-slate-400">
            Bizlounge is a trusted provider of comprehensive business solutions in the UAE, offering expert services in company formation, visa processing, PRO services, and more.            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="about" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="free-zone" className="text-sm hover:text-white">
                  Free Zone
                </Link>
              </li>
              <li>
                <Link href="/mainland" className="text-sm hover:text-white">
                  Mainland
                </Link>
              </li>
              <li>
                <Link href="/offshore" className="text-sm hover:text-white">
                  Offshore
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Company set up
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Pro services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Visa & licensing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Trade mark registration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Translation services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white">
                  Documents Attestation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span className="text-sm">
                2701,The Exchange Tower, Business Bay, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-sm"> +971 544702611</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm">info@bizloungeglobal.com </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-3 border-t border-white text-center text-sm">
          <p>Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

