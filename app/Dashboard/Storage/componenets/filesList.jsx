'use client'

import Image from "next/image"
import dropDown from "@/public/down-arrow.png"
import { useEffect, useState } from "react"
import { listDriveFiles } from "@/app/api/googleDrive/route"

export default function FilesList() {

    const [gDriveData, setGDriveData] = useState()

    useEffect(()=>{
        async function files() {
            const filesfromDrive = await listDriveFiles();
            console.log(filesfromDrive)
            const mapped = filesfromDrive.map((items)=> {
                return (
                    <main key={items.id}>
                        <p>{items.name}</p>
                        <p>{items.mimeType}</p>
                    </main>
                )
            })
            setGDriveData(mapped)
        }
        files();
    }, [])

    return(
        <main className="bg-[#2A2D3E] overflow-y-auto pl-8 pr-4 rounded-xl">

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

            <div>
                {gDriveData}
            </div>

        </main>
    )
}