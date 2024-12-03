'use client'
import Link from 'next/link'
import { Button } from "antd"
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { link } from 'fs';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    console.log(pathname, 'pa');
    const linkData = [
        { name: "dashboard", path: "/dashboard" },
        { name: "child", path: "/dashboard/child" }
    ]
    const [count, setCount] = useState(0);
    const handChange = () => {
        setCount(count + 1)
    }
    return (

        <div className="border-2 border-dash border-black p-4 w-1/2 mx-auto">
            {linkData.map((item, index) => {
                return (
                    <> <Link href={item.path} className={`link ${pathname === item.path ? 'text-purple-500' : ''}`}>{item.name}</Link>
                        <br /></>

                )

            })}

            <h2>这是layout dashboard</h2>
            {count}
            <Button onClick={handChange}>change</Button>
            {children}
        </div>
    );
}
