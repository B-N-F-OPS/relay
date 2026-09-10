import Image from "next/image";
import searchIcon from '@/public/search.png'
import profile from '@/public/profile.png'
import Cards from './componenets/cards'
import FilesList from "./componenets/filesList"
import Analytics from "./componenets/analytics"
import { Suspense } from 'react'

export default function StoragePage() {
    return(
        <>
            <section className="flex items-center">

                <h1 className="mt-9 ml-8 text-2xl mb-8">Dashboard</h1>

                <search className="flex gap-20 items-center bg-[#2A2D3E] rounded-xl pr-2 ml-auto my-8">
                    <input className="outline-none p-3 text-sm"
                        name="fileSearch"
                        placeholder="search"/>
                        <Image src={searchIcon} alt="search icon" 
                            className="bg-[#2697FF] p-3 w-9 h-9 rounded-sm cursor-pointer"/>
                </search>
                
                <section className="flex items-center gap-2 flex-row bg-[#2A2D3E] px-3 py-2 rounded-xl text-sm m-8 cursor-pointer">
                    <Image src={profile} alt="profile" className="w-7 h-9 rounded-l bg-[#393d53] p-1"/>
                    <p className="opacity-80">Angelina Joli</p>
                    <p className="opacity-70 ml-2 text-xs">˅</p>
                </section>

            </section>
            
            <section className="flex w-[67%] justify-between text-center">
                <p className="ml-8">My Files</p>
                <button className="bg-[#2697FF] text-xs p-3 rounded-xl font-light hover:font-medium mb-7">+ &nbsp;&nbsp; Add New</button>
            </section>

            <div className="flex flex-wrap w-[69%] gap-7 px-7 pb-8">
                <Cards />
            </div>

            <div className="flex flex-row gap-11 pl-6 w-[69%] h-full pb-6">
                <Suspense fallback={<p>Loading files...</p>}>
                    <FilesList />
                    {/* <Analytics /> */}
                </Suspense>
            </div>

        </>
    )
}