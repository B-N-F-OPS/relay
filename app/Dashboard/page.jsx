'use client'

import Image from "next/image";
import logo from '@/public/logo.png'
import dashboardIcon from '@/public/dashboard.png'
import settingsIcon from '@/public/settings.png'
import logoutIcon from '@/public/logout.png'
import StoragePage from "./Storage/page";

export default function DashboardPage() {


    return (
        <main  className="w-[80vw] h-[90vh] bg-[#212332] m-auto flex flex-row font-sans overflow-y-auto scrollbar-none">

            <nav className="text-white text-2xl bg-[#2A2D3E] w-[17%] overflow-y-auto scrollbar-none">

                <header className="flex items-center p-10">
                    <Image className="w-11 h-11"
                        src={logo}
                        alt="A folder"/>
                    <h1>Relay</h1>
                </header>

                <section className="shared-section">  
                    <Image className="icons"
                        src={dashboardIcon}
                        alt="A dashboard icon"/>
                    <h2>Dashboard</h2>
                </section>

                <section className="shared-section">  
                    <Image className="icons"
                        src={settingsIcon}
                        alt="A settings icon"/>
                    <h2>Settings</h2>
                </section>
                
                <section className="shared-section">  
                    <Image className="icons"
                        src={logoutIcon}
                        alt="A logout icon"/>
                    <h2>Logout</h2>
                </section>
            </nav>

            <div className="w-full h-fit">
                {/* rendered modules appear here */}
                <StoragePage />
            </div>

        </main>
    )
}