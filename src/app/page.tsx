import Image from 'next/image'
import Herosec from "@/app/components/Herosec"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto py-4 px-12">
          <div className='container mx-auto py-4 px-12'>
       <Herosec/>
       </div>


    </main>
  )
}
