/**
 * Official Contact & Social Media Information for Dr. Délcio Paim
 */

export const CONTACT_INFO = {
  phone: '953 176 295',
  phoneDisplay: '+244 953 176 295',
  whatsappNumber: '244953176295',
  address: 'Luanda, Angola',
  schedule: 'Segunda a Sábado &bull; Atendimento com Hora Marcada',
  social: {
    instagram: {
      name: 'Instagram',
      handle: '@dr.delciopaim',
      url: 'https://www.instagram.com/dr.delciopaim/',
    },
    facebook: {
      name: 'Facebook',
      handle: 'Dr. Delcio Paim',
      url: 'https://www.facebook.com/DrDelciopaim',
    },
    tiktok: {
      name: 'TikTok',
      handle: 'Dr. Paim | Odontologista',
      url: 'https://www.tiktok.com/@delciopaim',
    },
  },
};

/**
 * Returns a direct WhatsApp chat link with an optional pre-filled message
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Olá, Dr. Paim! Gostaria de agendar uma consulta odontológica.';
  const text = message && message.trim() ? message.trim() : defaultMsg;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Opens WhatsApp directly in a new window/tab safely
 */
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
