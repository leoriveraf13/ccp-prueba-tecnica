// src/utils/authService.js
import axios from 'axios';
import { getEmailValidationError } from './validateEmail';

// Función privada para construir el payload
const createPayload = (email, password) => ({
    query: `
        mutation {
            generateCustomerToken(email: "${email}", password: "${password}") {
                token
            }
        }
    `
});

// Función privada para construir los headers
const getHeaders = () => ({
    'Store': 'cuidadoconelperro_mx_store_view',
    'Content-Type': 'application/json'
});

//Manejo y centralización de mensajes de error
const getErrorMessage = (errorType) => {
    const errorMessages = {
        'INVALID_EMAIL': 'Correo electrónico no válido',
        'EMPTY_PASSWORD': 'La contraseña no puede estar vacía',
        'AUTH_ERROR': 'Error en la autenticación',
        'CREDENTIALS_INCORRECT': 'Credenciales incorrectas',
        'SUBMISSION_ERROR': 'Error al iniciar sesión',
        'NETWORK_ERROR': 'Error de red, por favor intente nuevamente más tarde',
        'TIMEOUT_ERROR': 'La solicitud ha tardado demasiado tiempo en responder',
        'SERVER_ERROR': 'Error en el servidor, por favor intente nuevamente más tarde'
    };
    return errorMessages[errorType] || 'Error desconocido';
};

export const handleLogin = async (e, email, password, setError, setIsSubmitting, router) => {
    e.preventDefault();
    
    const emailError = getEmailValidationError(email);
    if (emailError) {
        setError(emailError);
        setIsSubmitting(false);
        return;
    }
    if (!password) {
        setError(getErrorMessage('EMPTY_PASSWORD'));
        setIsSubmitting(false);
        return;
    }
    setError('');
    setIsSubmitting(true);

    try {
        const response = await axios.post('/api/graphql', createPayload(email, password), {getHeaders});

        const { data, errors } = response.data;

        if (errors) {
            console.error(errors);
            setError( errors[0].message || getErrorMessage('AUTH_ERROR'));
            setIsSubmitting(false);
            return;
        }

        if (data?.generateCustomerToken?.token) {
            localStorage.setItem('token', data.generateCustomerToken.token);
            router.push('/dashboard');
        } else {
            setError(getErrorMessage('CREDENTIALS_INCORRECT'));
            setIsSubmitting(false);
        }
    } catch (err) {
        if (err.response) {
            // Errores recibidos en la respuesta del servidor
            if (err.response.status === 401) {
                setError(getErrorMessage('AUTH_ERROR'));
            } else if (err.response.status >= 500) {
                setError(getErrorMessage('SERVER_ERROR'));
            } else {
                setError(getErrorMessage('AUTH_ERROR'));
            }
        } else if (err.request) {
            // Errores sin respuesta del servidor
            if (err.code === 'ECONNABORTED') {
                setError(getErrorMessage('TIMEOUT_ERROR'));
            } else {
                setError(getErrorMessage('NETWORK_ERROR'));
            }
        } else {
            // Errores durante la configuración de la solicitud
            setError(getErrorMessage('SUBMISSION_ERROR'));
        }
        setIsSubmitting(false);
    }
};

export const handleLogout = (router) => {
    localStorage.removeItem('token');
    router.push('/login');
};