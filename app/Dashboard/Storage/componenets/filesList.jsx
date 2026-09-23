'use client'

import Image from "next/image"
import dropDown from "@/public/down-arrow.png"
import { Suspense, use, useEffect, useState } from "react"
import googleDriveFiles from  '@/app/api/google_drive/route'

export default function FilesList() {

    const [gDriveUIFiles, SetGdriveUIfiles] = useState([])

    useEffect(()=> {
        async function displayGdriveFiles() {
            const files = await googleDriveFiles();

            const mappedGDriveFiles = files?.map(items => {
                return (
                    <section key={items.id}>
                        <p className="opacity-70 p-3 m-1 bg-[#212332]">{items.name.toLowerCase()}</p>
                    </section>
                )
            })

            SetGdriveUIfiles(mappedGDriveFiles)
        }

        displayGdriveFiles();
    }, [])



    return(
        <main className="bg-[#2A2D3E] pl-8 pr-4 rounded-xl">

            <div className="flex flex-row gap-54 items-center">
                <p className="mt-7 mb-5 text-xl">Recent files</p>
                <button className="p-3 mb-6 outline-1 outline-white/10 mt-6 rounded-xl">See more</button>
            </div>

            <nav className="flex flex-row gap-31 border-b border-gray-700 border-opacity-1 mb-4">

                <div className="sharedNavs">
                    <p>File Name</p>
                    <Image src={dropDown} alt="Dropdown icon"
                        className="w-2 h-2"/>
                </div>

                <div className="sharedNavs">
                    <p>Date</p>
                    <Image src={dropDown} alt="Drop down icon"
                        className="w-2 h-2"/>
                </div>

                <div className="sharedNavs">
                    <p>size</p>
                    <Image src={dropDown} alt="Drop down icon"
                        className="w-2 h-2"/>
                </div>
            </nav>

            <div className="overflow-y-auto scrollbar-none h-75">
                <Suspense fallback='Loading Drive Files...'>
                    {gDriveUIFiles}
                </Suspense>
            </div>

        </main>
    )
}