// src/app/login/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleLogin } from '../../utils/authService';
import Navigation from '../components/Navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const onSubmit = (e) => {
        handleLogin(e, email, password, setError, setIsSubmitting, router);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Sidebar */}
            <Navigation />
            
            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full max-w-screen-lg flex flex-col md:flex-row">
                    {/* Login Section */}
                    <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-black">
                        <h1 className="text-2xl font-medium mb-6 text-black">Entra en tu cuenta</h1>
                        {error && <div className="text-red-600 mb-4">{error}</div>}
                        <form onSubmit={onSubmit}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!isFormValid || isSubmitting}
                                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                                !isFormValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Iniciando...' : 'Iniciar sesión'}
                            </button>
                        </form>
                        <div className="mt-4 text-sm text-blue-500">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                    </div>
                    
                    {/* Register Section */}
                    <div className="flex-1 p-8 my-auto md:my-1">
                        <h1 className="text-xl font-semibold mb-4 text-black">
                            ¿No tienes cuenta?
                            <br />
                            Regístrate y haz tus compras más rápido
                        </h1>
                        <button 
                            type="button"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Crear cuenta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
