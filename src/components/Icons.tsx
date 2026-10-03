import React from 'react';

/**
 * Minimalist Tooth Logo Icon matching Dr. Paim's brand identity
 * Smooth continuous contour in vibrant blue #0066FF
 */
export function DrPaimToothLogo({ className = "w-7 h-7 text-[#0066FF]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9.5 4.5C6.5 4.5 4.5 7 4.5 10.5C4.5 14 5.5 16.5 6.8 19.5C8 22.5 8.5 27 11 27C13.2 27 13.5 23.5 14.8 20.2C15.3 18.8 16.7 18.8 17.2 20.2C18.5 23.5 18.8 27 21 27C23.5 27 24 22.5 25.2 19.5C26.5 16.5 27.5 14 27.5 10.5C27.5 7 25.5 4.5 22.5 4.5C19.8 4.5 17.8 6.5 16 6.5C14.2 6.5 12.2 4.5 9.5 4.5Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Minimal Tooth Outline for feature highlights (Tecnologia de ponta)
 */
export function ToothMinimalIcon({ className = "w-5 h-5 text-[#334155]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7.5 3.5C5.2 3.5 3.8 5.4 3.8 8C3.8 10.8 4.6 12.8 5.6 15C6.5 17.2 6.9 20.5 8.8 20.5C10.5 20.5 10.8 17.8 11.8 15.2C12.2 14.2 13.2 14.2 13.6 15.2C14.6 17.8 14.9 20.5 16.6 20.5C18.5 20.5 18.9 17.2 19.8 15C20.8 12.8 21.6 10.8 21.6 8C21.6 5.4 20.2 3.5 17.9 3.5C15.8 3.5 14.2 5 12.7 5C11.2 5 9.6 3.5 7.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Three radiating spark lines accent
 */
export function RadianceSparkle({ className = "w-5 h-5 text-[#0066FF]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 17L1.5 19.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8.5 12.5L6.5 16.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 8L13 13"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Circular Check icon for the checklist
 */
export function BlueCircleCheckIcon({ className = "w-4 h-4 text-[#0066FF]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="#0066FF" />
      <path
        d="M6 10.2L8.7 12.8L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Instagram Official Logo Icon
 */
export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/**
 * Facebook Official Logo Icon
 */
export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/**
 * TikTok Official Logo Icon
 */
export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 9.79 5.34 6.3 6.3 0 0 0 2.89-5.34V8.46a8.27 8.27 0 0 0 4.67 1.45V6.46a4.83 4.83 0 0 1-.9-.23z" />
    </svg>
  );
}

/**
 * WhatsApp Official Logo Icon
 */
export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.176.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.497-1.784-1.673-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.233-.245-.586-.494-.506-.677-.516-.176-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.229 3.113c.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.579-.086 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.524 2 2.05 6.474 2.05 11.99c0 1.83.497 3.545 1.365 5.023L2 22l5.12-1.343c1.42.775 3.036 1.221 4.755 1.221 5.516 0 9.99-4.474 9.99-9.99C21.865 6.474 17.556 2 12.04 2zm0 18.257c-1.579 0-3.048-.445-4.301-1.218l-.308-.188-3.048.8 1.01-2.973-.207-.33c-.846-1.348-1.293-2.91-1.293-4.516 0-4.57 3.718-8.288 8.288-8.288 4.57 0 8.288 3.718 8.288 8.288 0 4.57-3.718 8.288-8.288 8.288z" />
    </svg>
  );
}


