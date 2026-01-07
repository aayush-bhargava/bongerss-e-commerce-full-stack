import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center text-gray-900">
              <Image src="/logo.png" width={40} height={40} alt="logo" className="rounded-full bg-black p-2 shadow-sm" />
              <span className="ml-3 text-xl">Bongers.com</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              WEAR THE NATURE'S TOUCH!
            </p>
          </div>

          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Shop
            </h2>
            <ul className="list-none space-y-2">
              <li>First Link</li>
              <li>Second Link</li>
              <li>Third Link</li>
              <li>Fourth Link</li>
            </ul>
          </div>

          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Customer Services
            </h2>
            <ul className="list-none space-y-2">
              <li>First Link</li>
              <li>Second Link</li>
              <li>Third Link</li>
              <li>Fourth Link</li>
            </ul>
          </div>

          <div>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Policy
            </h2>
            <ul className="list-none space-y-2">
              <li>First Link</li>
              <li>Second Link</li>
              <li>Third Link</li>
              <li>Fourth Link</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center">
          <p className="text-sm text-gray-500">
            © 2026 Aayush Bhargava —
            <a
              href="https://twitter.com/"
              className="ml-1 text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Axy-Trial
            </a>
          </p>

          <div className="flex space-x-4 sm:ml-auto mt-3 sm:mt-0 text-gray-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
