/**
 * Utilitaire pour accéder aux variables d'environnement
 * Centralise l'accès et fournit des valeurs par défaut sécurisées
 */

// EmailJS
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Vérifier si les configurations sont disponibles
export const isEmailJSConfigured = (): boolean => {
  return !!(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey);
};

// Ajouter d'autres configurations au besoin
// export const API_CONFIG = {
//   key: import.meta.env.VITE_API_KEY || '',
//   url: import.meta.env.VITE_API_URL || '',
// };

// Fonction utilitaire pour vérifier si l'environnement est en production
export const isProd = (): boolean => {
  return import.meta.env.PROD;
};

// Fonction utilitaire pour vérifier si l'environnement est en développement
export const isDev = (): boolean => {
  return import.meta.env.DEV;
};
