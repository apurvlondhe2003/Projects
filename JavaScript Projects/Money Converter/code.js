// const countryList = {
//   FROM: "FROM",
//   TO: "TO",
//   AED: "AE",
//   AFN: "AF",
//   XCD: "AG",
//   ALL: "AL",
//   AMD: "AM",
//   ANG: "AN",
//   AOA: "AO",
//   AQD: "AQ",
//   ARS: "AR",
//   AUD: "AU",
//   AZN: "AZ",
//   BAM: "BA",
//   BBD: "BB",
//   BDT: "BD",
//   XOF: "BE",
//   BGN: "BG",
//   BHD: "BH",
//   BIF: "BI",
//   BMD: "BM",
//   BND: "BN",
//   BOB: "BO",
//   BRL: "BR",
//   BSD: "BS",
//   NOK: "BV",
//   BWP: "BW",
//   BYR: "BY",
//   BZD: "BZ",
//   CAD: "CA",
//   CDF: "CD",
//   XAF: "CF",
//   CHF: "CH",
//   CLP: "CL",
//   CNY: "CN",
//   COP: "CO",
//   CRC: "CR",
//   CUP: "CU",
//   CVE: "CV",
//   CYP: "CY",
//   CZK: "CZ",
//   DJF: "DJ",
//   DKK: "DK",
//   DOP: "DO",
//   DZD: "DZ",
//   ECS: "EC",
//   EEK: "EE",
//   EGP: "EG",
//   ETB: "ET",
//   EUR: "FR",
//   FJD: "FJ",
//   FKP: "FK",
//   GBP: "GB",
//   GEL: "GE",
//   GGP: "GG",
//   GHS: "GH",
//   GIP: "GI",
//   GMD: "GM",
//   GNF: "GN",
//   GTQ: "GT",
//   GYD: "GY",
//   HKD: "HK",
//   HNL: "HN",
//   HRK: "HR",
//   HTG: "HT",
//   HUF: "HU",
//   IDR: "ID",
//   ILS: "IL",
//   INR: "IN",
//   IQD: "IQ",
//   IRR: "IR",
//   ISK: "IS",
//   JMD: "JM",
//   JOD: "JO",
//   JPY: "JP",
//   KES: "KE",
//   KGS: "KG",
//   KHR: "KH",
//   KMF: "KM",
//   KPW: "KP",
//   KRW: "KR",
//   KWD: "KW",
//   KYD: "KY",
//   KZT: "KZ",
//   LAK: "LA",
//   LBP: "LB",
//   LKR: "LK",
//   LRD: "LR",
//   LSL: "LS",
//   LTL: "LT",
//   LVL: "LV",
//   LYD: "LY",
//   MAD: "MA",
//   MDL: "MD",
//   MGA: "MG",
//   MKD: "MK",
//   MMK: "MM",
//   MNT: "MN",
//   MOP: "MO",
//   MRO: "MR",
//   MTL: "MT",
//   MUR: "MU",
//   MVR: "MV",
//   MWK: "MW",
//   MXN: "MX",
//   MYR: "MY",
//   MZN: "MZ",
//   NAD: "NA",
//   XPF: "NC",
//   NGN: "NG",
//   NIO: "NI",
//   NPR: "NP",
//   NZD: "NZ",
//   OMR: "OM",
//   PAB: "PA",
//   PEN: "PE",
//   PGK: "PG",
//   PHP: "PH",
//   PKR: "PK",
//   PLN: "PL",
//   PYG: "PY",
//   QAR: "QA",
//   RON: "RO",
//   RSD: "RS",
//   RUB: "RU",
//   RWF: "RW",
//   SAR: "SA",
//   SBD: "SB",
//   SCR: "SC",
//   SDG: "SD",
//   SEK: "SE",
//   SGD: "SG",
//   SKK: "SK",
//   SLL: "SL",
//   SOS: "SO",
//   SRD: "SR",
//   STD: "ST",
//   SVC: "SV",
//   SYP: "SY",
//   SZL: "SZ",
//   THB: "TH",
//   TJS: "TJ",
//   TMT: "TM",
//   TND: "TN",
//   TOP: "TO",
//   TRY: "TR",
//   TTD: "TT",
//   TWD: "TW",
//   TZS: "TZ",
//   UAH: "UA",
//   UGX: "UG",
//   USD: "US",
//   UYU: "UY",
//   UZS: "UZ",
//   VEF: "VE",
//   VND: "VN",
//   VUV: "VU",
//   YER: "YE",
//   ZAR: "ZA",
//   ZMK: "ZM",
//   ZWD: "ZW",
// };

const countryList = {
  AED: { countryCode: "AE", countryName: "United Arab Emirates" },
  AFN: { countryCode: "AF", countryName: "Afghanistan" },
  XCD: { countryCode: "AG", countryName: "Antigua and Barbuda" },
  ALL: { countryCode: "AL", countryName: "Albania" },
  AMD: { countryCode: "AM", countryName: "Armenia" },
  ANG: { countryCode: "AN", countryName: "Netherlands Antilles" },
  AOA: { countryCode: "AO", countryName: "Angola" },
  AQD: { countryCode: "AQ", countryName: "Antarctica" },
  ARS: { countryCode: "AR", countryName: "Argentina" },
  AUD: { countryCode: "AU", countryName: "Australia" },
  AZN: { countryCode: "AZ", countryName: "Azerbaijan" },
  BAM: { countryCode: "BA", countryName: "Bosnia and Herzegovina" },
  BBD: { countryCode: "BB", countryName: "Barbados" },
  BDT: { countryCode: "BD", countryName: "Bangladesh" },
  XOF: { countryCode: "BE", countryName: "Belgium" }, // note: multiple  
  BGN: { countryCode: "BG", countryName: "Bulgaria" },
  BHD: { countryCode: "BH", countryName: "Bahrain" },
  BIF: { countryCode: "BI", countryName: "Burundi" },
  BMD: { countryCode: "BM", countryName: "Bermuda" },
  BND: { countryCode: "BN", countryName: "Brunei" },
  BOB: { countryCode: "BO", countryName: "Bolivia" },
  BRL: { countryCode: "BR", countryName: "Brazil" },
  BSD: { countryCode: "BS", countryName: "Bahamas" },
  CAD: { countryCode: "CA", countryName: "Canada" },
  CDF: { countryCode: "CD", countryName: "Congo (DRC)" },
  XAF: { countryCode: "CF", countryName: "Central African Republic" },
  CHF: { countryCode: "CH", countryName: "Switzerland" },
  CLP: { countryCode: "CL", countryName: "Chile" },
  CNY: { countryCode: "CN", countryName: "China" },
  COP: { countryCode: "CO", countryName: "Colombia" },
  CRC: { countryCode: "CR", countryName: "Costa Rica" },
  CUP: { countryCode: "CU", countryName: "Cuba" },
  CVE: { countryCode: "CV", countryName: "Cape Verde" },
  CYP: { countryCode: "CY", countryName: "Cyprus" },
  CZK: { countryCode: "CZ", countryName: "Czechia" },
  DJF: { countryCode: "DJ", countryName: "Djibouti" },
  DKK: { countryCode: "DK", countryName: "Denmark" },
  DOP: { countryCode: "DO", countryName: "Dominican Republic" },
  DZD: { countryCode: "DZ", countryName: "Algeria" },
  ECS: { countryCode: "EC", countryName: "Ecuador" },
  EEK: { countryCode: "EE", countryName: "Estonia" },
  EGP: { countryCode: "EG", countryName: "Egypt" },
  ETB: { countryCode: "ET", countryName: "Ethiopia" },
  EUR: { countryCode: "FR", countryName: "Eurozone (France base)" },
  FJD: { countryCode: "FJ", countryName: "Fiji" },
  FKP: { countryCode: "FK", countryName: "Falkland Islands" },
  GBP: { countryCode: "GB", countryName: "United Kingdom" },
  GEL: { countryCode: "GE", countryName: "Georgia" },
  GGP: { countryCode: "GG", countryName: "Guernsey" },
  GHS: { countryCode: "GH", countryName: "Ghana" },
  GIP: { countryCode: "GI", countryName: "Gibraltar" },
  GMD: { countryCode: "GM", countryName: "Gambia" },
  GNF: { countryCode: "GN", countryName: "Guinea" },
  GTQ: { countryCode: "GT", countryName: "Guatemala" },
  GYD: { countryCode: "GY", countryName: "Guyana" },
  HKD: { countryCode: "HK", countryName: "Hong Kong" },
  HNL: { countryCode: "HN", countryName: "Honduras" },
  HRK: { countryCode: "HR", countryName: "Croatia" },
  HTG: { countryCode: "HT", countryName: "Haiti" },
  HUF: { countryCode: "HU", countryName: "Hungary" },
  IDR: { countryCode: "ID", countryName: "Indonesia" },
  ILS: { countryCode: "IL", countryName: "Israel" },
  INR: { countryCode: "IN", countryName: "India" },
  IQD: { countryCode: "IQ", countryName: "Iraq" },
  IRR: { countryCode: "IR", countryName: "Iran" },
  ISK: { countryCode: "IS", countryName: "Iceland" },
  JMD: { countryCode: "JM", countryName: "Jamaica" },
  JOD: { countryCode: "JO", countryName: "Jordan" },
  JPY: { countryCode: "JP", countryName: "Japan" },
  KES: { countryCode: "KE", countryName: "Kenya" },
  KGS: { countryCode: "KG", countryName: "Kyrgyzstan" },
  KHR: { countryCode: "KH", countryName: "Cambodia" },
  KMF: { countryCode: "KM", countryName: "Comoros" },
  KPW: { countryCode: "KP", countryName: "North Korea" },
  KRW: { countryCode: "KR", countryName: "South Korea" },
  KWD: { countryCode: "KW", countryName: "Kuwait" },
  KYD: { countryCode: "KY", countryName: "Cayman Islands" },
  KZT: { countryCode: "KZ", countryName: "Kazakhstan" },
  LAK: { countryCode: "LA", countryName: "Laos" },
  LBP: { countryCode: "LB", countryName: "Lebanon" },
  LKR: { countryCode: "LK", countryName: "Sri Lanka" },
  LRD: { countryCode: "LR", countryName: "Liberia" },
  LSL: { countryCode: "LS", countryName: "Lesotho" },
  LTL: { countryCode: "LT", countryName: "Lithuania" },
  LVL: { countryCode: "LV", countryName: "Latvia" },
  LYD: { countryCode: "LY", countryName: "Libya" },
  MAD: { countryCode: "MA", countryName: "Morocco" },
  MDL: { countryCode: "MD", countryName: "Moldova" },
  MGA: { countryCode: "MG", countryName: "Madagascar" },
  MKD: { countryCode: "MK", countryName: "North Macedonia" },
  MMK: { countryCode: "MM", countryName: "Myanmar" },
  MNT: { countryCode: "MN", countryName: "Mongolia" },
  MOP: { countryCode: "MO", countryName: "Macau" },
  MUR: { countryCode: "MU", countryName: "Mauritius" },
  MVR: { countryCode: "MV", countryName: "Maldives" },
  MWK: { countryCode: "MW", countryName: "Malawi" },
  MXN: { countryCode: "MX", countryName: "Mexico" },
  MYR: { countryCode: "MY", countryName: "Malaysia" },
  MZN: { countryCode: "MZ", countryName: "Mozambique" },
  NAD: { countryCode: "NA", countryName: "Namibia" },
  NGN: { countryCode: "NG", countryName: "Nigeria" },
  NPR: { countryCode: "NP", countryName: "Nepal" },
  NZD: { countryCode: "NZ", countryName: "New Zealand" },
  OMR: { countryCode: "OM", countryName: "Oman" },
  PAB: { countryCode: "PA", countryName: "Panama" },
  PEN: { countryCode: "PE", countryName: "Peru" },
  PGK: { countryCode: "PG", countryName: "Papua New Guinea" },
  PHP: { countryCode: "PH", countryName: "Philippines" },
  PKR: { countryCode: "PK", countryName: "Pakistan" },
  PLN: { countryCode: "PL", countryName: "Poland" },
  PYG: { countryCode: "PY", countryName: "Paraguay" },
  QAR: { countryCode: "QA", countryName: "Qatar" },
  RON: { countryCode: "RO", countryName: "Romania" },
  RSD: { countryCode: "RS", countryName: "Serbia" },
  RUB: { countryCode: "RU", countryName: "Russia" },
  RWF: { countryCode: "RW", countryName: "Rwanda" },
  SAR: { countryCode: "SA", countryName: "Saudi Arabia" },
  SBD: { countryCode: "SB", countryName: "Solomon Islands" },
  SCR: { countryCode: "SC", countryName: "Seychelles" },
  SDG: { countryCode: "SD", countryName: "Sudan" },
  SEK: { countryCode: "SE", countryName: "Sweden" },
  SGD: { countryCode: "SG", countryName: "Singapore" },
  SLL: { countryCode: "SL", countryName: "Sierra Leone" },
  SOS: { countryCode: "SO", countryName: "Somalia" },
  SRD: { countryCode: "SR", countryName: "Suriname" },
  SVC: { countryCode: "SV", countryName: "El Salvador" },
  SYP: { countryCode: "SY", countryName: "Syria" },
  SZL: { countryCode: "SZ", countryName: "Eswatini" },
  THB: { countryCode: "TH", countryName: "Thailand" },
  TJS: { countryCode: "TJ", countryName: "Tajikistan" },
  TMT: { countryCode: "TM", countryName: "Turkmenistan" },
  TND: { countryCode: "TN", countryName: "Tunisia" },
  TOP: { countryCode: "TO", countryName: "Tonga" },
  TRY: { countryCode: "TR", countryName: "Turkey" },
  TTD: { countryCode: "TT", countryName: "Trinidad and Tobago" },
  TWD: { countryCode: "TW", countryName: "Taiwan" },
  TZS: { countryCode: "TZ", countryName: "Tanzania" },
  UAH: { countryCode: "UA", countryName: "Ukraine" },
  UGX: { countryCode: "UG", countryName: "Uganda" },
  USD: { countryCode: "US", countryName: "United States of America" },
  UYU: { countryCode: "UY", countryName: "Uruguay" },
  UZS: { countryCode: "UZ", countryName: "Uzbekistan" },
  VEF: { countryCode: "VE", countryName: "Venezuela" },
  VND: { countryCode: "VN", countryName: "Vietnam" },
  VUV: { countryCode: "VU", countryName: "Vanuatu" },
  YER: { countryCode: "YE", countryName: "Yemen" },
  ZAR: { countryCode: "ZA", countryName: "South Africa" },
  ZMK: { countryCode: "ZM", countryName: "Zambia" },
  ZWD: { countryCode: "ZW", countryName: "Zimbabwe" }
};