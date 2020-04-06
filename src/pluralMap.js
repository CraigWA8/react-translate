const CHINESE = "chinese";
const FRENCH = "french";
const CZECH = "czech";
const POLISH = "polish";
const ICELANDIC = "icelandic";


const GERMAN = "german";
const RUSSIAN = "russian";

const ARABIC = "arabic";
const AZERBAIJANI = "azerbaijani";
const FARSI = "farsi";
const BENGALI = "bengali";
const GUJARATI = "gujarati";
const HINDI = "hindi";
const KANNADA = "kannada";
const TELUGU = "telugu";

const pluralMap = {
  fa: FARSI,
  ar: ARABIC,
  az: AZERBAIJANI,
  bn: BENGALI,
  gu: GUJARATI,
  hi: HINDI,
  kn: KANNADA,
  te: TELUGU,
  
  id: CHINESE,
  ja: CHINESE,
  ko: CHINESE,
  ms: CHINESE,
  th: CHINESE,
  tr: CHINESE,
  zh: CHINESE,

  da: GERMAN,
  de: GERMAN,
  en: ENGLISH,
  es: GERMAN,
  fi: GERMAN,
  el: GERMAN,
  he: GERMAN,
  hu: GERMAN,
  it: GERMAN,
  nl: GERMAN,
  no: GERMAN,
  pt: GERMAN,
  sv: GERMAN,

  fr: FRENCH,
  tl: FRENCH,

  hr: RUSSIAN,
  ru: RUSSIAN,

  cs: CZECH,
  sk: CZECH,

  pl: POLISH,

  is: ICELANDIC,

  et: GERMAN
};

export default pluralMap;
