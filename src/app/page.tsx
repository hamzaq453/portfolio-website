import Image from 'next/image'
import Herosec from "@/app/components/Herosec"
import Navbar from '@/app/components/Navbar'
import AboutSection from '@/app/components/AboutSection'
import ProjectsSection from '@/app/components/ProjectsSection'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
  
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container  mt-24 lg:mt-8 mx-auto px-12 py-4">
        <Herosec />
        <AboutSection/>
        <ProjectsSection/>
        <Contact/>
        </div>
        <Footer/>
      </main>
  )
}
