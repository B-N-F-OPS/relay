'use client'

import Image from "next/image";
import logo from '@/public/logo.png'
import dashboardIcon from '@/public/dashboard.png'
import settingsIcon from '@/public/settings.png'
import logoutIcon from '@/public/logout.png'
import StoragePage from "./Storage/page";
import EmailPage from "./Email/page"
import emailIcon from '@/public/email.png'
import { useState } from "react";

export default function DashboardPage() {

    const [displayStorage, setDisplayStorage] = useState(true);
    const [displayEmails, setDisplayEmails] = useState(false);

    function handleEmailClick() {
        setDisplayStorage(false)
        setDisplayEmails(true)
    }

    function handleStorageClick() {
        setDisplayStorage(true)
        setDisplayEmails(false)
    }

    return (
        <main  className="w-[83vw] h-[96vh] bg-[#212332] m-auto flex flex-row font-sans scrollbar-none">

            <nav className="text-white text-2xl bg-[#2A2D3E] w-[17%] overflow-y-auto scrollbar-none">

                <header className="flex items-center p-10">
                    <Image className="w-11 h-11"
                        src={logo}
                        alt="A folder"/>
                    <h1>Relay</h1>
                </header>

                <section className="shared-section" onClick={handleStorageClick}>  
                    <Image className="icons"
                        src={dashboardIcon}
                        alt="A dashboard icon"/>
                    <h2>Storages</h2>
                </section>

                <section className="shared-section" onClick={handleEmailClick}>  
                    <Image className="icons"
                        src={emailIcon}
                        alt="An Email icon"/>
                    <h2>Email</h2>
                </section>

                <div className="place-content-end mt-130">
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
                </div>

            </nav>

            <div className="w-full h-fit overflow-y-auto">
                {/* rendered modules appear here */}
                {displayStorage && <StoragePage />}
                {displayEmails && <EmailPage />}
            </div>

        </main>
    )
}