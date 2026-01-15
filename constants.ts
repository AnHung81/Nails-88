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
    id: "rakennekynnet",
    title: "Rakennekynnet",
    description: "Geeli tai Akryyli. Hinnat sisältävät lakkauksen.",
    items: [
      { name: "Uudet kynnet (Luonnollinen / Yksi väri)", price: "80 €" },
      { name: "Uudet kynnet (Ranskalainen / Babyboomer)", price: "85 €" },
      { name: "Uudet kynnet (Erikoispitkät)", price: "alk. 90 €" },
      { name: "Huolto (Luonnollinen / Yksi väri)", price: "65 €" },
      { name: "Huolto (Ranskalainen / Babyboomer)", price: "70 €" },
      { name: "Huolto (Erikoispitkät)", price: "alk. 75 €" },
      { name: "Kynsien poisto", price: "35 €" },
    ]
  },
  {
    id: "ripsienpidennykset",
    title: "Ripsienpidennykset",
    description: "Korosta katsettasi laadukkailla ripsienpidennyksillä.",
    items: [
      { name: "Klassiset ripset - Uudet", price: "69 €" },
      { name: "Klassiset ripset - Huolto", price: "59 €" },
      { name: "Volyymiripset - Uudet", price: "89 €" },
      { name: "Volyymiripset - Huolto", price: "69 €" },
      { name: "Megavolyymit - Uudet", price: "99 €" },
      { name: "Megavolyymit - Huolto", price: "79 €" },
      { name: "Ripsien poisto", price: "25 €" },
    ]
  },
  {
    id: "geelilakkaus",
    title: "Geelilakkaus",
    description: "Kestävä lakkaus omalle kynnelle.",
    items: [
      { name: "Geelilakkaus (Kädet) - Yksi väri", price: "45 €" },
      { name: "Geelilakkaus (Kädet) - Ranskalainen", price: "50 €" },
      { name: "Geelilakkaus (Kädet) - Huolto", price: "50 €" },
      { name: "Geelilakkaus (Varpaat)", price: "55 €" },
      { name: "Geelilakkaus (Varpaat) - Huolto", price: "60 €" },
    ]
  },
  {
    id: "jalkahoidot",
    title: "Jalkahoidot & Manikyyrit",
    description: "Hemmottelua käsille ja jaloille.",
    items: [
      { name: "Perusmanikyyri (siistiminen + lakkaus)", price: "35 €" },
      { name: "SPA Jalkahoito (kylpy, kovettumat, hieronta)", price: "59 €" },
      { name: "SPA Jalkahoito + Geelilakkaus", price: "79 €" },
    ]
  },
  {
    id: "lisapalvelut",
    title: "Lisäpalvelut",
    description: "Pienet lisät ja korjaukset.",
    items: [
      { name: "Yhden kynnen korjaus", price: "10 €" },
      { name: "Koristelut (2 kynttä)", price: "5 €" },
      { name: "Timantit / Erikoiskoristelut", price: "alk. 5 €" },
      { name: "Geelilakan poisto", price: "20 €" },
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
    answer: "Meillä klassiset ripsienpidennykset (uudet) maksavat 69€ ja volyymiripset 89€. Huollot ovat edullisempia. Katso tarkka hinnastomme sivun yläosasta."
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