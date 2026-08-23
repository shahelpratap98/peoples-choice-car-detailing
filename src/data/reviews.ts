/**
 * Real recommendations from the MR SONS Cleaning Service Facebook page.
 * Quoted verbatim. Do not edit the wording — only add new ones.
 * Source: https://www.facebook.com/MRsonscardetailing
 */

export type Review = {
  name: string
  date: string
  quote: string
  vehicle?: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Sonia Orlando Saluni',
    date: '24 May 2025',
    vehicle: 'Mazda CX-9 · 8 seater',
    quote:
      'janish was easy to organise a time. car looks great and excellent service. 2 hours and car is sparkling inside my CX9 8 seater.',
  },
  {
    name: 'Francisco Bustamante',
    date: '20 May 2025',
    vehicle: 'Outlander · 7 seater',
    quote:
      "Janish was very good at comms, very responsive and did a great job fully cleaning my car (7 seater Outlander car). He spend 3hrs and the result was great. I'd totally recommend him and the company. Very reliable!!",
  },
  {
    name: 'Colin Edmonds',
    date: '5 May 2025',
    quote:
      'Janish did a great job worked 3 hours well worth the money I highly recommend Janish very friendly and helpful in everything he did while cleaning my car',
  },
  {
    name: 'Dave Bennett',
    date: '8 May 2025',
    quote: 'happy with the full car clean by Janush, all done in 3 1/2 hours',
  },
  {
    name: 'Alyssa Glendinning',
    date: '28 April 2025',
    quote:
      'Janish did a fantastic Job... car is amazing. highly recommend 3 hrs, hard graft. Worth every penny. Very nice man travelled a long way...',
  },
  {
    name: 'Claudette Hauiti',
    date: '29 March 2025',
    vehicle: 'Dog hair & odour removal',
    quote:
      "Janish did a fabulous job so thorough. He worked on my car for three and a half hours. The car was overwhelmed with dog hair and dog smell extraordinary job and removing both hair and she'll. Totally recommend excellent price.",
  },
]
