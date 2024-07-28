// src/utils/validateEmail.js
const validDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'icloud.com'
  ];

const validateEmail = (email) => {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  
const validateEmailWithDomain = (email) => {
    if (!validateEmail(email)) return false;
    const domain = email.split('@')[1];
    return validDomains.includes(domain);
};
  
const validateEmailLength = (email) => {
    const maxLength = 254;
    return email.length <= maxLength;
};

export const getEmailValidationError = (email) => {
    if (!validateEmail(email)) return 'Formato de correo electrónico no válido';
    if (!validateEmailLength(email)) return 'El correo electrónico es demasiado largo';
    if (!validateEmailWithDomain(email)) return 'Dominio de correo electrónico no permitido';
    return '';
};