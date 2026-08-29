import Image from "next/image"
import dropDown from "@/public/down-arrow.png"

export default function FilesList() {
    return(
        <main className="bg-[#2A2D3E] overflow-y-auto pl-8 pr-4">

            <div className="flex flex-row gap-54 items-center">
                <p>Recent files</p>
                <button className="p-3">See more</button>
            </div>

            <p>File Name</p>
            <Image src={dropDown} alt="Drop down icon"
                className="w-2 h-2"/>

            <p>Date</p>
            <Image src={dropDown} alt="Drop down icon"
                className="w-2 h-2"/>

            <p>size</p>
            <Image src={dropDown} alt="Drop down icon"
                className="w-2 h-2"/>

        </main>
    )
}