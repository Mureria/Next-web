import "@styles/globals.css";
import Feed from "@components/Feed";
import Card from "@components/Card";
import Image from "next/image";
import Faq from "@components/Faq";

export default function Home() {
  return (
    <section>
      <div className='flex flex-col gap-4 md:flex-row justify-between items-center mx-8 md:mx-32 py-14 my-6'>
        
        <div className="max-w-[400px]">
          <h1 className="text-[50px]">MOBILE APP FOR <span className="text-orange-500 ">DESIGNERS</span></h1>
          <p className="text-[20px] leading-8 tracking-wide">Leno is one of the easiest and feature packed marketing
          automation app in the market.Download it today.</p>
          <div className="mt-12 flex gap-6">
            <button className="outline outline-1 outline-orange-500 rounded-full py-4 px-16">Start</button>
            <button className=" bg-orange-500 rounded-full py-4 px-16">Check</button>
          </div>
        </div>

        <div className=""> 
         <div className="object-cover"> <Image src='/assets/images/val.jpg' height={400} width={700} /></div>
        </div>
      </div>
      <Feed/>
      <Card/>
      <Faq/>
    </section>
    
  )
}
