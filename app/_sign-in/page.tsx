"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function SignIn() {
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
           <Image
  src="/hb-logo.png.png"
  alt="HB Furniture Logo"
  width={180}
  height={180}
  className="object-contain"
/>
          </div>
          
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
            Since 1964 — Building<br />Workspaces That Perform
          </h2>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[400px]">
          
          <div className="mb-10">
            <h1 className="text-[28px] font-bold text-gray-900 mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-gray-500 text-[13px]">Sign in to manage your workspace solutions</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="you@company.com" 
                className="w-full px-4 py-3.5 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px]"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-bold text-[#EB5324] hover:text-[#d4481f] transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <input 
                type="password" 
                id="password"
                placeholder="••••••••" 
                className="w-full px-4 py-3.5 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#EB5324]/20 focus:border-[#EB5324] transition-all text-[13px] font-mono placeholder:font-sans"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 border-gray-300 rounded-sm text-[#EB5324] focus:ring-[#EB5324]"
              />
              <label htmlFor="remember" className="ml-2 text-[12px] text-gray-600">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#EB5324] hover:bg-[#d4481f] text-white py-3.5 rounded-sm font-bold text-[13px] transition-colors shadow-sm"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[11px]">
                <span className="bg-white px-4 text-gray-400">Or continue with</span>
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
<button
  type="button"
  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3.5 rounded-sm font-bold text-[12px] transition-all duration-300 flex items-center justify-center gap-3 mt-3"
>
  <span className="text-blue-600 text-lg">f</span>
  Continue with Facebook
</button>

<button
  type="button"
  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3.5 rounded-sm font-bold text-[12px] transition-all duration-300 flex items-center justify-center gap-3 mt-3"
>
  <span className="text-black text-lg">𝕏</span>
  Continue with X (Twitter)
</button>
<button
  type="button"
  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3.5 rounded-sm font-bold text-[12px] transition-all duration-300 flex items-center justify-center gap-3 mt-3"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.365 1.43c0 1.14-.42 2.19-1.12 2.96-.76.84-2 1.48-3.06 1.39-.13-1.09.39-2.26 1.09-3.03.77-.84 2.08-1.44 3.09-1.32zM20.54 17.09c-.58 1.3-.86 1.88-1.61 3.03-1.05 1.61-2.53 3.62-4.37 3.64-1.63.02-2.05-1.06-4.26-1.05-2.21.01-2.67 1.07-4.3 1.05-1.84-.02-3.24-1.83-4.29-3.44C-1.24 15.7-.5 8.86 3.1 6.7c1.78-1.07 4.58-.86 6.11.52 1.46-1.38 4.68-1.5 6.5-.46.74.43 2.66 1.73 2.54 4.6-3.02 1.83-2.53 6.16.29 7.73z"/>
  </svg>
  Continue with Apple
</button>
            {/* Optional Sign Up Link */}
            <div className="pt-4 text-center">
              <p className="text-[12px] text-gray-500">
                Don't have an account? <Link href="/sign-up" className="text-[#EB5324] font-bold hover:underline">Sign Up</Link>
              </p>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
