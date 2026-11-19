import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { RootNoiseFilter } from './Primitives'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-raven text-white">
      <ScrollToTop />
      <RootNoiseFilter />

      {/* Fixed ambient backdrop: a powder-blue wash top right and a low poppy
          glow bottom left, echoing the lighting in the hero photograph. Static
          gradients only — nothing here animates or loads over the network. */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(min(900px, 120vw) circle at 85% -10%, rgba(182,223,245,0.10), transparent 60%), radial-gradient(min(700px, 90vw) circle at 0% 100%, rgba(224,9,31,0.08), transparent 60%)',
          }}
        />
      </div>

      {/* Container guide lines */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
      >
        Skip to content
      </a>

      <div className="relative z-10">
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
