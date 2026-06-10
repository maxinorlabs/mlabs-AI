import React from 'react';

/* ─── Real paths from Simple Icons (viewBox 0 0 24 24) ───────────── */

const PAYTM    = "M15.85 8.167a.204.204 0 0 0-.04.004c-.68.19-.543 1.148-1.781 1.23h-.12a.23.23 0 0 0-.052.005h-.001a.24.24 0 0 0-.184.235v1.09c0 .134.106.241.237.241h.645v4.623c0 .132.104.238.233.238h1.058a.236.236 0 0 0 .233-.238v-4.623h.6c.13 0 .236-.107.236-.241v-1.09a.239.239 0 0 0-.236-.24h-.612V8.386a.218.218 0 0 0-.216-.22zm4.225 1.17c-.398 0-.762.15-1.042.395v-.124a.238.238 0 0 0-.234-.224h-1.07a.24.24 0 0 0-.236.242v5.92a.24.24 0 0 0 .236.242h1.07c.12 0 .217-.091.233-.209v-4.25a.393.393 0 0 1 .371-.408h.196a.41.41 0 0 1 .226.09.405.405 0 0 1 .145.319v4.074l.004.155a.24.24 0 0 0 .237.241h1.07a.239.239 0 0 0 .235-.23l-.001-4.246c0-.14.062-.266.174-.34a.419.419 0 0 1 .196-.068h.198c.23.02.37.2.37.408.005 1.396.004 2.8.004 4.224a.24.24 0 0 0 .237.241h1.07c.13 0 .236-.108.236-.241v-4.543c0-.31-.034-.442-.08-.577a1.601 1.601 0 0 0-1.51-1.09h-.015a1.58 1.58 0 0 0-1.152.5c-.291-.308-.7-.5-1.153-.5zM.232 9.4A.234.234 0 0 0 0 9.636v5.924c0 .132.096.238.216.241h1.09c.13 0 .237-.107.237-.24l.004-1.658H2.57c.857 0 1.453-.605 1.453-1.481v-1.538c0-.877-.596-1.484-1.453-1.484H.232zm9.032 0a.239.239 0 0 0-.237.241v2.47c0 .94.657 1.608 1.579 1.608h.675s.016 0 .037.004a.253.253 0 0 1 .222.253c0 .13-.096.235-.219.251l-.018.004-.303.006H9.739a.239.239 0 0 0-.236.24v1.09a.24.24 0 0 0 .236.242h1.75c.92 0 1.577-.669 1.577-1.608v-4.56a.239.239 0 0 0-.236-.24h-1.07a.239.239 0 0 0-.236.24c-.005.787 0 1.525 0 2.255a.253.253 0 0 1-.25.25h-.449a.253.253 0 0 1-.25-.255c.005-.754-.005-1.5-.005-2.25a.239.239 0 0 0-.236-.24zm-4.004.006a.232.232 0 0 0-.238.226v1.023c0 .132.113.24.252.24h1.413c.112.017.2.1.213.23v.14c-.013.124-.1.214-.207.224h-.7c-.93 0-1.594.63-1.594 1.515v1.269c0 .88.57 1.506 1.495 1.506h1.94c.348 0 .63-.27.63-.6v-4.136c0-1.004-.508-1.637-1.72-1.637zm-3.713 1.572h.678c.139 0 .25.115.25.256v.836a.253.253 0 0 1-.25.256h-.1c-.192.002-.386 0-.578 0zm4.67 1.977h.445c.139 0 .252.108.252.24v.932a.23.23 0 0 1-.014.076.25.25 0 0 1-.238.164h-.445a.247.247 0 0 1-.252-.24v-.933c0-.132.113-.239.252-.239Z";

const ORACLE   = "M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z";

const ACCENTURE = "m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z";

const GOOGLE   = "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z";

const OYO      = "M19.843 16.185C22.135 16.185 24 14.307 24 12c0-2.309-1.865-4.185-4.157-4.185-2.293 0-4.158 1.876-4.158 4.185 0 2.307 1.865 4.185 4.158 4.185zm0-5.677c.817 0 1.482.67 1.482 1.492s-.666 1.49-1.483 1.49A1.488 1.488 0 0 1 18.36 12c0-.824.665-1.493 1.482-1.493zM4.157 16.185c2.293 0 4.158-1.878 4.158-4.185 0-2.309-1.865-4.185-4.158-4.185C1.866 7.815 0 9.691 0 12c0 2.307 1.866 4.185 4.157 4.185zm0-5.677c.818 0 1.483.67 1.483 1.492s-.665 1.49-1.483 1.49A1.488 1.488 0 0 1 2.677 12c0-.824.664-1.493 1.48-1.493zm7.84-.094L10.722 7.87H7.733l2.791 5.564v2.62h2.948v-2.62l2.791-5.564h-2.99l-1.275 2.544Z";

const TATA     = "M9.774 11.568c.193-1.322.168-2.013-1.768-1.906-2.223.124-4.476.265-7.849 1.027A5.63 5.63 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254 1.06 1.144 2.556 2.095 4.326 2.752a15.48 15.48 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026-1.937-.107-1.962.584-1.768 1.906l.046.298c.65 3.848 1.458 7.16 1.598 7.72C20.595 18.508 24 15.516 24 12c0-.443-.054-.88-.157-1.311m-.491-1.324a7.163 7.163 0 0 0-1.14-1.618c-1.06-1.144-2.555-2.095-4.325-2.752-1.784-.662-3.82-1.011-5.887-1.011-2.068 0-4.103.35-5.887 1.01-1.77.658-3.266 1.61-4.326 2.753A7.17 7.17 0 0 0 .648 9.366c2.304-.557 6.245-1.293 9.904-1.37.353-.008.596.105.756.307.196.248.18 1.128.175 1.522l-.104 10.18a18.507 18.507 0 0 0 1.244 0l-.104-10.18c-.005-.394-.02-1.274.175-1.522.16-.202.403-.315.756-.308 3.658.078 7.597.813 9.902 1.37z";

/* ─── Standard Chartered mark paths (viewBox 0 0 68 115) ────────── */
// Three-path SC mark from the official 2021 logo
const SC_P1 = "M53.68 107.884 7.804 78.019s-5.753-3.308-7.07-9.47c-1.85-8.652 4.248-16.07 4.248-16.07l59.539 38.775c4.593 2.993 5.846 9.117 2.894 13.736-3.033 4.745-9.265 5.792-13.737 2.894Z";
const SC_P2 = "M10.227 46.079S3.2 41.836 3.2 32.022c0-9.78 7.024-13.971 7.024-13.971l25.08-16.414a9.927 9.927 0 0 1 10.82 16.645L24.986 32.046l36.015 23.456s6.483 3.714 7.76 9.984c1.783 8.747-4.238 15.954-4.238 15.954L10.227 46.079Zm-.133 63.388c2.354 0 4.03-.747 5.665-1.807l12.243-7.975-12.243-7.973c-1.65-1.063-3.382-1.807-5.665-1.807a9.782 9.782 0 1 0 0 19.562Z";
const SC_P3 = "M57.433 22.266c-2.355 0-4.031.747-5.666 1.806l-12.244 7.974 12.244 7.974c1.65 1.064 3.383 1.808 5.666 1.808a9.781 9.781 0 1 0 0-19.562";

/* ─── Logo components ────────────────────────────────────────────── */

const LogoPaytm = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={PAYTM} fill="#002D72"/>
  </svg>
);

const LogoSolv = () => (
  <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d="M10 14 A8 8 0 1 1 10.01 14" fill="none"/>
    <circle cx="10" cy="14" r="9" stroke="#0066CC" strokeWidth="2.5" fill="none"/>
    <path d="M6.5 10.5 Q10 6 13.5 10.5 Q10 8 6.5 10.5Z" fill="#0066CC"/>
    <text x="24" y="19" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="15" fontWeight="700" fill="#0066CC">Solv</text>
  </svg>
);

const LogoBzinga = () => (
  <svg viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="2" width="20" height="24" rx="4" fill="#FF5500"/>
    <path d="M13 4 L7 15 L12 15 L7 26 L15 13 L10 13Z" fill="white"/>
    <text x="26" y="20" fontFamily="'Arial Black', Arial, sans-serif" fontSize="15" fontWeight="900" fill="#FF5500">Bzinga</text>
  </svg>
);

const LogoGoogleTata = () => (
  <svg viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={GOOGLE} fill="#4285F4"/>
    <text x="27" y="17" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400" fill="#5F6368">×</text>
    <path d={TATA} transform="translate(34,0)" fill="#0A2240"/>
  </svg>
);

const LogoOYO = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={OYO} fill="#EF4444"/>
  </svg>
);

const LogoBlinkit = () => (
  <svg viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="2" width="22" height="24" rx="5" fill="#F7D000"/>
    <path d="M15 4 L9 14 L14 14 L8 26 L17 12 L12 12Z" fill="#1C1C1C"/>
    <text x="28" y="20" fontFamily="'Arial Black', Arial, sans-serif" fontSize="14" fontWeight="900" fill="#1C1C1C">blinkit</text>
  </svg>
);

const LogoAuthBridge = () => (
  <svg viewBox="0 0 116 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d="M10 3 L18 6.5 L18 16 Q18 22 10 26 Q2 22 2 16 L2 6.5Z" fill="#1A73E8" fillOpacity="0.12" stroke="#1A73E8" strokeWidth="1.5"/>
    <path d="M7 15.5 L10 18.5 L14 12.5" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="24" y="19" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#1A73E8">AuthBridge</text>
  </svg>
);

const LogoEcomXpress = () => (
  <svg viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="2" y="6" width="16" height="16" rx="2" fill="#FF6600"/>
    <rect x="2" y="6" width="16" height="7" rx="2" fill="#CC4400"/>
    <path d="M5 14 L15 14M10 6 L10 22" stroke="white" strokeWidth="1.5"/>
    <text x="24" y="19" fontFamily="'Arial Black', Arial, sans-serif" fontSize="13" fontWeight="900" fill="#FF6600">EcomXpress</text>
  </svg>
);

const LogoBijnis = () => (
  <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="4" width="20" height="20" rx="4" fill="#1B2FA0"/>
    <text x="10" y="19" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="13" fontWeight="900" fill="white">B</text>
    <text x="26" y="19" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#1B2FA0">Bijnis</text>
  </svg>
);

const LogoOracle = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={ORACLE} fill="#F80000"/>
  </svg>
);

const LogoFidelity = () => (
  <svg viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="4" width="18" height="20" rx="3" fill="#538234" fillOpacity="0.1" stroke="#538234" strokeWidth="1.5"/>
    <text x="9" y="18" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="12" fontWeight="900" fill="#538234">F</text>
    <text x="24" y="19" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#538234">Fidelity</text>
  </svg>
);

const LogoStandardChartered = () => (
  <svg viewBox="0 0 68 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={SC_P1} fill="#0073CF"/>
    <path d={SC_P2} fill="#0073CF"/>
    <path d={SC_P3} fill="#0073CF"/>
  </svg>
);

const LogoZee = () => (
  <svg viewBox="0 0 76 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect width="76" height="28" rx="5" fill="#E31E24"/>
    <text x="38" y="20" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="16" fontWeight="900" fill="white" letterSpacing="2">ZEE</text>
  </svg>
);

const LogoAccenture = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d={ACCENTURE} fill="#A100FF"/>
  </svg>
);

const LogoWipro = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <path d="M15.5415 12.0352c0-.8754-.69-1.5851-1.541-1.5851-.8513 0-1.5415.7097-1.5415 1.585 0 .8757.6902 1.5854 1.5416 1.5854.851 0 1.541-.7097 1.541-1.5853zm-1.541.837c-.4373 0-.7927-.3755-.7927-.837 0-.4611.3554-.8366.7928-.8366.437 0 .7923.3755.7923.8366 0 .4615-.3554.837-.7923.837zm-9.5842-2.2084l-.9272 2.8733c-.0148.046-.0665.0835-.1152.0835h-.084c-.0484 0-.1064-.0352-.1287-.078l-.95-1.8242-.9496 1.8243c-.0225.0427-.0803.0779-.1289.0779h-.0842c-.0483 0-.1002-.0374-.115-.0835L.006 10.6638c-.0222-.0693.019-.126.0915-.126h.5677c.0483 0 .1002.0379.115.084l.4688 1.452.8047-1.5458c.0223-.0428.0804-.0779.1289-.0779H2.24c.0485 0 .1063.0351.1289.0779l.805 1.5458.4685-1.452c.0148-.0461.0667-.084.1152-.084h.5672c.0727 0 .1138.0567.0915.126zm1.368 2.7367a.1323.1323 0 01-.1321.1322h-.5726a.1321.1321 0 01-.132-.1322v-2.7304c0-.0729.059-.1322.132-.1322h.5726a.1323.1323 0 01.1322.1322v2.7304zm.7409-2.7305v4.3155c0 .0733.059.1322.1321.1322h.5725a.1318.1318 0 00.132-.1322v-1.497c.2426.085.5106.132.7927.132.8024 0 1.4531-.7097 1.4531-1.5853 0-.8754-.6507-1.5851-1.4531-1.5851-.394 0-.751.171-1.0127.4487l-.0002-.0004-.1018-.2777c-.0167-.0453-.07-.0829-.1183-.0829h-.2642a.1321.1321 0 00-.1321.1322zm.8365.9c.1376-.2239.3713-.3714.6373-.3714.4235 0 .7667.3746.7667.8366 0 .4622-.3432.837-.7667.837-.2396 0-.4599-.063-.6373-.1694V11.57zm3.5755 1.9627h-.5723a.1321.1321 0 01-.1321-.1321V10.67c0-.0729.059-.1322.1321-.1322h.2642c.0483 0 .1016.0376.1183.0829l.1018.2777s.3195-.4483.87-.4483c.5507 0 .6172.1897.5712.2947-.0463.1047-.1714.3878-.197.4454-.0254.058-.0903.099-.1772.0657-.087-.0335-.5128-.1723-.8469.2329v1.9118a.1323.1323 0 01-.1321.1321z" fill="#4B1A7C"/>
  </svg>
);

const LogoMastek = () => (
  <svg viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="4" width="20" height="20" rx="4" fill="#003087"/>
    <text x="10" y="19" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="13" fontWeight="900" fill="white">M</text>
    <text x="26" y="19" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#003087">Mastek</text>
  </svg>
);

const LogoITC = () => (
  <svg viewBox="0 0 68 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="3" width="64" height="22" rx="4" fill="#1B3A5C" fillOpacity="0.08" stroke="#1B3A5C" strokeWidth="1.5"/>
    <text x="32" y="20" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="15" fontWeight="900" fill="#1B3A5C" letterSpacing="3">ITC</text>
  </svg>
);

const LogoBritannia = () => (
  <svg viewBox="0 0 112 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    {/* Simplified crown arc — Britannia's iconic crown motif */}
    <path d="M5 20 Q8 10 11 6 Q14 10 17 20" stroke="#C0181D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="5"  cy="20" r="2" fill="#C0181D"/>
    <circle cx="11" cy="6"  r="2" fill="#C0181D"/>
    <circle cx="17" cy="20" r="2" fill="#C0181D"/>
    <line x1="3" y1="21" x2="19" y2="21" stroke="#C0181D" strokeWidth="2"/>
    <text x="25" y="20" fontFamily="Georgia, 'Times New Roman', serif" fontSize="14" fontWeight="700" fill="#C0181D">Britannia</text>
  </svg>
);

const LogoUnitechBreweries = () => (
  <svg viewBox="0 0 96 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="4" width="20" height="20" rx="4" fill="#1B5E20"/>
    <text x="10" y="19" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="12" fontWeight="900" fill="white">UB</text>
    <text x="26" y="19" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#1B5E20">Unitech Brew.</text>
  </svg>
);

const LogoWorldBank = () => (
  <svg viewBox="0 0 116 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <circle cx="12" cy="14" r="10" stroke="#009FDA" strokeWidth="2" fill="none"/>
    <ellipse cx="12" cy="14" rx="5" ry="10" stroke="#009FDA" strokeWidth="1.2" fill="none"/>
    <line x1="2" y1="14" x2="22" y2="14" stroke="#009FDA" strokeWidth="1.2"/>
    <line x1="4" y1="8"  x2="20" y2="8"  stroke="#009FDA" strokeWidth="1"/>
    <line x1="4" y1="20" x2="20" y2="20" stroke="#009FDA" strokeWidth="1"/>
    <text x="28" y="19" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#009FDA">World Bank</text>
  </svg>
);

const LogoPATH = () => (
  <svg viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="6"  y="2"  width="7" height="18" rx="3" fill="#00A651"/>
    <rect x="1"  y="7"  width="17" height="7" rx="3" fill="#00A651"/>
    <text x="24" y="20" fontFamily="'Arial Black', Arial, sans-serif" fontSize="17" fontWeight="900" fill="#00A651" letterSpacing="1.5">PATH</text>
  </svg>
);

const LogoOperationSmile = () => (
  <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <circle cx="12" cy="13" r="10" fill="#E31E24" fillOpacity="0.1" stroke="#E31E24" strokeWidth="1.5"/>
    <circle cx="8.5"  cy="11" r="1.5" fill="#E31E24"/>
    <circle cx="15.5" cy="11" r="1.5" fill="#E31E24"/>
    <path d="M7.5 15.5 Q12 20.5 16.5 15.5" stroke="#E31E24" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <text x="28" y="19" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#E31E24">Operation Smile</text>
  </svg>
);

const LogoMaxinor = () => (
  <svg viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
    <rect x="0" y="3" width="22" height="22" rx="6" fill="#F36F21"/>
    <text x="11" y="19" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontSize="13" fontWeight="900" fill="white">M</text>
    <text x="28" y="19" fontFamily="'Arial Black', Arial, sans-serif" fontSize="13" fontWeight="900" fill="#F36F21">MAXINOR</text>
  </svg>
);

/* ─── Logo registry ──────────────────────────────────────────────── */

const LOGOS: Record<string, React.FC> = {
  Paytm:                      LogoPaytm,
  Solv:                       LogoSolv,
  Bzinga:                     LogoBzinga,
  'Google x Tata':            LogoGoogleTata,
  OYO:                        LogoOYO,
  'Grofers (Blinkit)':        LogoBlinkit,
  AuthBridge:                 LogoAuthBridge,
  EcomXpress:                 LogoEcomXpress,
  Bijnis:                     LogoBijnis,
  Oracle:                     LogoOracle,
  'Fidelity Investments':     LogoFidelity,
  'Standard Chartered Bank':  LogoStandardChartered,
  'Zee Entertainment':        LogoZee,
  Accenture:                  LogoAccenture,
  Wipro:                      LogoWipro,
  Mastek:                     LogoMastek,
  ITC:                        LogoITC,
  'Britannia Industries':     LogoBritannia,
  'United Breweries':        LogoUnitechBreweries,
  'World Bank':               LogoWorldBank,
  PATH:                       LogoPATH,
  'Operation Smile':          LogoOperationSmile,
  Maxinor:                    LogoMaxinor,
};

/* ─── Exports ────────────────────────────────────────────────────── */

export function hasCompanyLogo(company: string): boolean {
  return company in LOGOS;
}

export function CompanyLogo({ company }: { company: string }) {
  const Logo = LOGOS[company];
  if (!Logo) return null;
  return (
    <div className="mb-3 flex h-7 items-center">
      <Logo />
    </div>
  );
}
