export const DEMO_ACTIVITY_LABELS: Record<string, { en: string; ar: string }> = {
  digital: { en: "Digital Professional", ar: "مهني رقمي" },
  academic: { en: "Academic & Research", ar: "أكاديمي وبحث علمي" },
  field: { en: "Field Active", ar: "نشاط ميداني" },
  outdoor: { en: "Outdoor Sports", ar: "رياضات خارجية" },
  driving: { en: "Night Driving", ar: "قيادة ليلية" },
  gaming: { en: "Gaming", ar: "ألعاب تفاعلية" },
};

function createDemoPortrait(showGlasses: boolean, activityId = "digital", frameShape = "", variant = 0): string {
  const sceneColors: Record<string, Array<[string, string]>> = {
    digital: [["#e8eef5", "#c5d6e7"], ["#e1ebf3", "#a9c5d7"], ["#f1ece2", "#c8d2dc"]],
    academic: [["#e9dfd0", "#c9ae8a"], ["#f0e5d5", "#b99b78"], ["#ddd2c2", "#a98b71"]],
    field: [["#d9e8e1", "#abcbb9"], ["#d1e4dc", "#91b6a4"], ["#e8ead7", "#b5b58a"]],
    outdoor: [["#d8edf4", "#91c5d4"], ["#d5e8f4", "#82b5cb"], ["#f0ead4", "#d0b779"]],
    driving: [["#293650", "#60748e"], ["#30314b", "#766d86"], ["#23374a", "#577882"]],
    gaming: [["#29263f", "#544a79"], ["#282843", "#494f86"], ["#34253e", "#784b72"]],
  };
  const palettes = sceneColors[activityId] || sceneColors.digital;
  const [background, horizon] = palettes[variant % palettes.length];
  const glassesColor = ["#17365c", "#745332", "#30343c"][variant % 3];
  const lowerShape = frameShape.toLowerCase();
  const lensShapes = lowerShape.includes("round")
    ? `<ellipse cx="235" cy="374" rx="58" ry="43"/><ellipse cx="405" cy="374" rx="58" ry="43"/>`
    : lowerShape.includes("aviator")
      ? `<path d="M177 340 Q235 316 293 340 L282 395 Q235 448 188 395Z"/><path d="M347 340 Q405 316 463 340 L452 395 Q405 448 358 395Z"/>`
      : `<rect x="177" y="337" width="116" height="78" rx="18"/><rect x="347" y="337" width="116" height="78" rx="18"/>`;
  const glasses = showGlasses
    ? `<g fill="none" stroke="${glassesColor}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
        ${lensShapes}
        <path d="M293 365 Q320 351 347 365 M177 366 L143 350 M463 366 L497 350"/>
      </g>`
    : "";
  const scene = activityId === "academic"
    ? `<path d="M40 118H155V620H40ZM485 118H600V620H485Z" fill="#806b56" opacity=".8"/><path d="M40 230H155M40 345H155M40 460H155M485 230H600M485 345H600M485 460H600" stroke="#e8d6bd" stroke-width="13"/><path d="M66 150v72m30-72v72m31-72v72m-61 43v72m30-72v72m31-72v72m-61 43v72m30-72v72m31-72v72m-61 43v72m30-72v72m31-72v72" stroke="#a75b43" stroke-width="9"/>`
    : activityId === "field"
      ? `<path d="M0 575 118 456 205 526 290 430 405 546 516 448 640 563V800H0Z" fill="${horizon}" opacity=".72"/><path d="M0 635H640M62 540v190m517-190v190" stroke="#f8f6ee" stroke-width="9" opacity=".65"/>`
      : activityId === "outdoor"
        ? `<circle cx="${variant === 1 ? 520 : 120}" cy="155" r="52" fill="#f3c76e"/><path d="M0 560 155 350 264 510 405 300 640 580V800H0Z" fill="${horizon}"/><path d="M0 625 175 455 306 600 455 410 640 628V800H0Z" fill="#729b88" opacity=".7"/>`
        : activityId === "driving"
          ? `<circle cx="505" cy="148" r="38" fill="#f0d7a4" opacity=".9"/><path d="M0 590 212 515 428 515 640 590V800H0Z" fill="#354358"/><path d="M320 590 287 800M320 590 353 800" stroke="#f5d477" stroke-width="8" stroke-dasharray="30 25"/>`
          : activityId === "gaming"
            ? `<rect x="52" y="130" width="116" height="118" rx="14" fill="#7862b8" opacity=".75"/><rect x="472" y="170" width="116" height="118" rx="14" fill="#34a9a0" opacity=".68"/><path d="M50 635H590M74 635V690M566 635V690" stroke="#a78bfa" stroke-width="14" opacity=".75"/><circle cx="116" cy="180" r="11" fill="#fff"/><circle cx="530" cy="220" r="11" fill="#fff"/>`
            : `<rect x="52" y="145" width="110" height="210" rx="10" fill="#ffffff" opacity=".58"/><path d="M52 255H162M105 145V355" stroke="#9bb6cb" stroke-width="8"/><path d="M0 630H640M110 600H530" stroke="${horizon}" stroke-width="18" opacity=".8"/><rect x="450" y="220" width="112" height="115" rx="8" fill="#6289a6"/><rect x="462" y="232" width="88" height="86" fill="#dbeaf3"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="800" viewBox="0 0 640 800">
    <defs>
      <linearGradient id="bg" x2="0" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="${horizon}"/></linearGradient>
      <linearGradient id="shirt" x2="0" y2="1"><stop stop-color="#24496c"/><stop offset="1" stop-color="#102c49"/></linearGradient>
    </defs>
    <rect width="640" height="800" fill="url(#bg)"/>
    ${scene}
    <circle cx="320" cy="320" r="248" fill="#ffffff" opacity=".42"/>
    <path d="M95 800 Q119 630 250 608 L390 608 Q522 630 545 800Z" fill="url(#shirt)"/>
    <path d="M256 562 L256 639 Q320 685 384 639 L384 562Z" fill="#b97854"/>
    <path d="M180 321 Q168 102 320 91 Q481 104 460 328 L444 439 Q416 564 320 583 Q223 562 195 439Z" fill="#c88964"/>
    <path d="M175 342 Q137 146 253 87 Q395 24 478 163 Q505 212 470 343 L442 281 Q422 216 361 195 Q285 223 200 207Z" fill="#25252b"/>
    <path d="M210 326 Q239 300 277 317 M363 317 Q402 300 430 326" fill="none" stroke="#593b32" stroke-width="13" stroke-linecap="round"/>
    <ellipse cx="249" cy="372" rx="10" ry="13" fill="#24232a"/>
    <ellipse cx="391" cy="372" rx="10" ry="13" fill="#24232a"/>
    <path d="M320 371 Q306 433 319 442 Q331 448 344 439" fill="none" stroke="#9e634a" stroke-width="9" stroke-linecap="round"/>
    <path d="M273 493 Q320 518 367 493" fill="none" stroke="#7d443b" stroke-width="9" stroke-linecap="round"/>
    ${glasses}
    <text x="320" y="755" text-anchor="middle" fill="${activityId === "driving" || activityId === "gaming" ? "#ffffff" : "#24496c"}" font-family="Arial,sans-serif" font-size="17" letter-spacing="3">SAMPLE TRY-ON DEMO</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const DEMO_FACE_IMAGE = createDemoPortrait(false);
export function createDemoTryOnImage(activityId: string, frameShape: string, variant: number): string {
  return createDemoPortrait(true, activityId, frameShape, variant);
}
