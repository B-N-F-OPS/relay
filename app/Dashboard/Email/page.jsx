import gmailFiles from '@/app/api/gmail/route'
import { useEffect, useState } from 'react'

export default function EmailPage() {

    const [labeList, setlabelList] = useState(null)

    useEffect( ()=> {

        async function gmail() {
            const gmailLabels = await gmailFiles();

            const mappedLabels = gmailLabels?.map((items,index)=> {
                <div key={index} className='bg-amber-200'>
                    <p>{items.id}</p>
                </div>
            })

            setlabelList(mappedLabels);
        }

        gmail();
    }, [] )
    

    return (
        <main className='bg-amber-200'>
            <h1>email page</h1>
            {labeList}
        </main>
    )
}