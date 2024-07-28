// src/app/dashboard/layout.js
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
        router.push('/login');
        }
    }, [router]);

    return (
        <div>
        {children}
        </div>
    );
}
