// src/app/page.js
"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Bienvenido a la Prueba Técnica</h1>
      <p>Redirigiendo...</p>
    </div>
  );
}
