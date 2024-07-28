// src/app/dashboard/page.js
"use client";

import { useRouter } from 'next/navigation';
import { handleLogout } from '../../utils/authService';
import Navigation from '../components/Navigation';

export default function Dashboard() {
    const router = useRouter();

    const onLogout = () => {
        handleLogout(router);
    };
    
    return (
        <div className="min-h-screen bg-white">
            {/* Sidebar */}
            <Navigation />

            {/* Contenido del Dashboard */}
            <div className="p-8">
                <p className="text-black">Bienvenido al Dashboard</p>
            </div>
        </div>
    );
}
