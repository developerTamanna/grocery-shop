"use client";

import Link from "next/link";
import { useTheme } from "@/app/providers";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-100 dark:bg-darkbg text-gray-700 dark:text-gray-200 py-10 transition-colors">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            KachaBazer
          </h3>
          <p className="text-sm">
            We deliver fresh groceries to your doorstep. High quality, fresh and
            reliable service every time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primary transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Grocery Street, City, Country</li>
            <li>📞 +01234560352</li>
            <li>✉️ support@groceryshop.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Grocery Shop. All rights reserved.
      </div>
    </footer>
  );
}