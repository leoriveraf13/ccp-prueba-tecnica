// src/components/Navigation.js
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { handleLogout } from '../../utils/authService';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const onLogout = () => {
        if (isAuthenticated) {
            handleLogout(router);
        }
    };

    return (
        <div className="px-4 py-3 border-black">
            <div className="flex justify-between items-center border-b border-black pb-2 mb-4">
                <button
                    className="py-2 px-4 bg-black text-white"
                    onClick={onLogout}
                >
                    {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
                </button>
                <div className="hidden md:flex space-x-4">
                    <Link href="/favorites" className="text-xl font-semibold text-black">FAVORITOS</Link>
                    <Link href="/cart" className="text-xl font-semibold text-black">{`CARRITO (0)`}</Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="py-2 px-4 bg-black text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Menú
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-2">
                    <Link href="/favorites" className="text-xl font-semibold text-black">FAVORITOS</Link>
                    <Link href="/cart" className="text-xl font-semibold text-black">{`CARRITO (0)`}</Link>
                </div>
            )}
        </div>
    );
}