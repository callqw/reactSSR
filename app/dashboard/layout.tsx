'use client'
import Link from 'next/link'
import {Button} from "antd"
import { useState } from 'react';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count,setCount] = useState(0);
    const handChange =()=>{
        setCount(count+1)
    }
    return (
     
            <div className="border-2 border-dash border-black p-4 w-1/2 mx-auto">
                 <Link href="/dashboard">dashboard</Link> <br />
                 <Link href="/dashboard/child">child</Link>
                <h2>这是layout dashboard</h2>
                {count}
                <Button onClick={handChange}>change</Button>
                {children}
            </div>
    );
}
