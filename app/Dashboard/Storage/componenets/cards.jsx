import Image from "next/image";
import googleDriveIcon from '@/public/google_drive.png'
import documentsIcon from '@/public/documents.png'
import dropboxIcon from '@/public/dropbox.png'
import onedriveIcon from '@/public/onedrive.png'
import { listFiles } from '@/app/api/googleDrive/route'

export default function Cards() {

    const cardsTemplateArr = [
         {
            "id": "documents",
            "iconBackground": "bg-[#2697FF]/10",
            "srcIcon": documentsIcon,
            "altProperty": "Documents icon",
            "storageName": 'Documents',
            "progressId": "documents",
            "progressvalue": 20,
            "webkit_value_bg": "[&::-webkit-progress-value]:bg-[#2697FF]",
            "webkit_bar_bg": "[&::-webkit-progress-bar]:bg-[#2697FF]/10",
            "no_of_files": 1328,
            "remainingStorage": 1.3
        },
        {
            "id": "google_Drive",
            "iconBackground": "bg-[#FFA113]/10",
            "srcIcon": googleDriveIcon,
            "altProperty": "Google drive icon",
            "storageName": 'Google Drive',
            "progressId": "googleDrive",
            "progressvalue": 30,
            "webkit_value_bg": "[&::-webkit-progress-value]:bg-[#FFA113]",
            "webkit_bar_bg": "[&::-webkit-progress-bar]:bg-[#FFA113]/10",
            "no_of_files": 2329,
            "remainingStorage": 2.9
        },
        {
            "id": "onedrive",
            "iconBackground": "bg-[#2697FF]/10",
            "srcIcon": onedriveIcon,
            "altProperty": "Onedrive icon",
            "storageName": 'Onedrive',
            "progressId": "onedrive",
            "progressvalue": 70,
            "webkit_value_bg": "[&::-webkit-progress-value]:bg-[#2697FF]",
            "webkit_bar_bg": "[&::-webkit-progress-bar]:bg-[#2697FF]/10",
            "no_of_files": 1916,
            "remainingStorage": 1.7
        },
        {
            "id": "dropbox",
            "iconBackground": "bg-[#2697FF]/10",
            "srcIcon": dropboxIcon,
            "altProperty": "Dropbox icon",
            "storageName": 'Dropbox',
            "progressId": "dropbox",
            "progressvalue": "50",
            "webkit_value_bg": "[&::-webkit-progress-value]:bg-[#2697FF]",
            "webkit_bar_bg": "[&::-webkit-progress-bar]:bg-[#2697FF]/10",
            "no_of_files": 328,
            "remainingStorage": 1.1
        }
    ]

    function handleClick (e) {
        const target = e.currentTarget.id

        if(target === 'google_Drive') {
            
        }
    }

    return(

        cardsTemplateArr.map((item, index)=> {
            return(
                <div id={item.id} onClick={handleClick} key={index}
                className="text-sm text-[#B5C9DB] cursor-pointer text-center bg-[#2A2D3E] w-fit h-fit p-4 rounded-xl">
                    <Image className={`w-10 h-10 p-2 ${item.iconBackground} rounded-xl mb-6`}
                        src={item.srcIcon}
                        alt={`${item.altProperty}`} />
                    <p className="text-xl mb-6">{item.storageName}</p>
                    <progress id={item.progressId} value={item.progressvalue} max="100"
                    className={`${item.webkit_value_bg} ${item.webkit_bar_bg} w-full mb-3 h-1`}>{item.progressvalue}</progress>

                    <div className="flex gap-17">
                        <p>{item.no_of_files} files</p>
                        <p>{item.remainingStorage} GB</p>
                    </div>
                </div>
            )
        })
        
    )
}