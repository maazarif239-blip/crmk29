"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  return (
    <div className="min-h-screen flex selection:bg-[#E5E0D8] font-sans">
      
      {/* Left Column - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Premium Office Workspace" 
            fill 
            className="object-cover opacity-70"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Branding Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-12 text-center">
          
          <div className="bg-white w-48 h-48 flex flex-col items-center justify-center mb-10 shadow-2xl rounded-sm">
            {/* Custom Logo SVG mimicking the screenshot */}
            <svg width="80" height="60" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <rect x="10" y="10" width="12" height="50" fill="#EB5324"/>
              <rect x="22" y="32" width="20" height="12" fill="#EB5324"/>
              <rect x="42" y="10" width="12" height="50" fill="#EB5324"/>
              <path d="M54 32H70C76.6274 32 82 37.3726 82 44C82 50.6274 76.6274 56 70 56H42V32H54Z" fill="#EB5324"/>
              <text x="60" y="75" fill="#EB5324" fontSize="14" fontWeight="bold">1964</text>
            </svg>
            <span className="text-gray-600 font-medium tracking-widest text-[12px]">Furniture</span>
          </div>
          
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
            Since 1964 — Building<br />Workspaces That Perform
          </h2>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12 overflow-y-auto">
        <div className="w-full max-w-[440px]">
          
          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-gray-900 mb-2 tracking-tight">Create Account</h1>
            <p className="text-gray-500 text-[13px]">Join HB Furniture — Pakistan's trusted workspace brand</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                Full Name
              </label>
              <input 
                type="text" 
                id="name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px]"
                required
              />
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                Company Name <span className="text-gray-400 font-normal normal-case">(optional)</span>
              </label>
              <input 
                type="text" 
                id="company"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px]"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px]"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px]"
                required
              />
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px] font-mono"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="confirmPassword" className="block text-[11px] font-bold text-gray-900 tracking-wider">
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px] font-mono"
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-0.5 w-4 h-4 border-gray-300 rounded-sm text-[#EB5324] focus:ring-[#EB5324]"
                required
              />
              <label htmlFor="terms" className="ml-2 text-[11px] text-gray-500 leading-relaxed">
                I agree to the <Link href="/terms" className="text-gray-900 hover:text-[#EB5324] transition-colors underline underline-offset-2">Terms of Service</Link> and <Link href="/privacy-policy" className="text-gray-900 hover:text-[#EB5324] transition-colors underline underline-offset-2">Privacy Policy</Link>.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-[#EB5324] hover:bg-[#d4481f] text-white py-3.5 rounded-sm font-bold text-[13px] transition-colors shadow-sm"
              >
                Create Account
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[11px]">
                <span className="bg-white px-4 text-gray-400">Or</span>
              </div>
            </div>

            {/* Google Login */}
            <button 
              type="button" 
              className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3.5 rounded-sm font-bold text-[12px] transition-colors flex items-center justify-center gap-3 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            {/* Login Link */}
            <div className="pt-4 text-center">
              <p className="text-[12px] text-gray-500">
                Already have an account? <Link href="/sign-in" className="text-[#EB5324] font-bold hover:underline">Sign In</Link>
              </p>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
