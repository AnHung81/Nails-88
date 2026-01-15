import { BusinessInfo, FAQItem, ServiceCategory } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Nails 88",
  address: "Laurinkatu 48",
  postalCode: "08100",
  city: "Lohja",
  phone: "040 181 8888",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.633454378128!2d24.06847831608636!3d60.24942998199201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df1d69614c775%3A0x6e3c66286395568!2sNails%2088!5e0!3m2!1sen!2sfi!4v1684321234567!5m2!1sen!2sfi",
  bookingUrl: "tel:0401818888" // Direct call to action for this example
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "ripsienpidennykset",
    title: "Ripsienpidennykset",
    description: "Lohjan laadukkaimmat ripsienpidennykset. Tarjoamme sekä klassisia että volyymiripsiä, jotka korostavat silmiesi luonnollista kauneutta.",
    items: [
      { name: "Ripsienpidennykset (Klassinen) - Uudet", price: "65 €" },
      { name: "Ripsienpidennykset (Klassinen) - Huolto", price: "55 €" },
      { name: "Ripsienpidennykset (Volyymi) - Uudet", price: "75 €" },
      { name: "Ripsienpidennykset (Volyymi) - Huolto", price: "65 €" },
      { name: "Ripsienpidennykset (Megavolyymi) - Uudet", price: "85 €" },
      { name: "Ripsienpidennykset (Megavolyymi) - Huolto", price: "75 €" },
      { name: "Ripsienpoisto", price: "20 €" },
    ]
  },
  {
    id: "rakennekynnet",
    title: "Rakennekynnet (Akryyli & Geeli)",
    description: "Kestävät ja kauniit rakennekynnet Lohjalla. Valitse akryyli- tai geelikynnet ammattilaisen tekemänä.",
    items: [
      { name: "Uudet kynnet (Akryyli/Geeli) - Luonnollinen", price: "65 €" },
      { name: "Uudet kynnet (Akryyli/Geeli) - Yksi väri / Hile", price: "70 €" },
      { name: "Uudet kynnet (Akryyli/Geeli) - Ranskalainen / Babyboomer", price: "75 €" },
      { name: "Uudet kynnet (Akryyli/Geeli) - Erikoispitkät", price: "+ 10 €" },
      { name: "Huolto (Akryyli/Geeli) - Luonnollinen", price: "55 €" },
      { name: "Huolto (Akryyli/Geeli) - Yksi väri / Hile", price: "60 €" },
      { name: "Huolto (Akryyli/Geeli) - Ranskalainen / Babyboomer", price: "65 €" },
      { name: "Kynsien poisto", price: "30 €" },
      { name: "Yhden kynnen korjaus", price: "5-10 €" },
    ]
  },
  {
    id: "geelilakkaus",
    title: "Geelilakkaus",
    description: "Geelilakkaus sormien tai varpaiden kynsiin antaa pitkäkestoisen ja kiiltävän lopputuloksen.",
    items: [
      { name: "Geelilakkaus (Kädet) - Yksi väri", price: "40 €" },
      { name: "Geelilakkaus (Kädet) - Ranskalainen", price: "45 €" },
      { name: "Geelilakkaus (Kädet) - Huolto", price: "45 €" },
      { name: "Geelilakkaus (Varpaat)", price: "45 €" },
      { name: "Geelilakkaus (Varpaat) - Huolto", price: "50 €" },
    ]
  },
  {
    id: "jalkahoidot",
    title: "Jalkahoidot & Manikyyrit",
    description: "Hemmotteleva jalkahoito ja manikyyri Lohjan keskustassa. Rentoudu SPA-hoidoissamme.",
    items: [
      { name: "Manikyyri (Perus)", price: "25 €" },
      { name: "SPA Jalkahoito (sis. kylpy, rasvaus, hieronta)", price: "55 €" },
      { name: "SPA Jalkahoito + Geelilakkaus", price: "75 €" },
    ]
  },
  {
    id: "lisapalvelut",
    title: "Lisäpalvelut & Koristelut",
    description: "Yksilölliset koristelut ja lisäpalvelut kynsiisi.",
    items: [
      { name: "Koristelut (per kynsi)", price: "alk. 2 €" },
      { name: "Timantit (S)", price: "0,50 € / kpl" },
      { name: "Timantit (M)", price: "1 € / kpl" },
      { name: "Kynsien lyhennys", price: "10 €" },
      { name: "Lakan poisto", price: "10 €" },
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Mitä palveluita Nails 88 Lohja tarjoaa?",
    answer: "Nails 88 on täyden palvelun kauneushoitola Lohjalla. Erikoisosaamiseemme kuuluvat rakennekynnet (akryyli ja geeli), ripsienpidennykset (klassinen ja volyymi), geelilakkaukset sekä hemmottelevat jalkahoidot ja manikyyrit."
  },
  {
    question: "Paljonko ripsienpidennykset maksavat Lohjalla?",
    answer: "Meillä klassiset ripsienpidennykset (uudet) maksavat 65€ ja volyymiripset 75€. Huollot ovat edullisempia. Katso tarkka hinnastomme sivun yläosasta."
  },
  {
    question: "Onko teillä takuu rakennekynsille?",
    answer: "Kyllä, myönnämme työllemme laatutakuun. Jos kynsi lohkeaa tai irtoaa viikon sisällä normaalissa käytössä, korjaamme sen veloituksetta. Asiakastyytyväisyys on meille ensisijaisen tärkeää."
  },
  {
    question: "Missä Nails 88 sijaitsee?",
    answer: "Sijaitsemme aivan Lohjan keskustassa osoitteessa Laurinkatu 48, 08100 Lohja. Liikkeeseemme on helppo tulla ja lähistöllä on runsaasti pysäköintitilaa."
  },
  {
    question: "Miten voin varata ajan?",
    answer: "Voit varata ajan helpoiten soittamalla numeroon 040 181 8888. Tervetuloa kaunistautumaan!"
  }
];