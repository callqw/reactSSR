'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';

export default function Template({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("didmount");

    }, [])
    return (
        <div className="border-2 border-dash border-black">
            template <br />
            <h2>{count}</h2>
            <Button onClick={()=>setCount(count+1)}>change</Button>
            {children}
        </div>
    )
}
