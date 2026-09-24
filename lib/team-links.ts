const linkedinBySlug: Record<string, string> = {
  'samir-gupta': 'https://www.linkedin.com/in/samirgupta1/',
  'amar-daing': 'https://www.linkedin.com/in/amar-daing/',
  'parool-duggal': 'https://www.linkedin.com/in/parool-duggal-1b651713/',
  'alok-kumar': 'https://www.linkedin.com/in/alok02/',
  'rajesh-ramanathan': 'https://www.linkedin.com/in/rajeshramanathan/',
  'priyabrata-padhi': 'https://www.linkedin.com/in/priyabratapadhi/',
  'dr-rachit-negi': 'https://www.linkedin.com/in/rachitnegi/',
  'saniya-fathima': 'https://www.linkedin.com/in/saniya-f-369a98213/',
  'aman-sharma': 'https://www.linkedin.com/in/aman-sharma-77243b2a0/',
  'manik-sood': 'https://www.linkedin.com/in/manik-sood-64402313/',
  'alok-lall': 'https://in.linkedin.com/in/alok-lall',
  'aditi-agrawal': 'https://www.linkedin.com/in/aditiagrawal2609',
  'puneet-kolthe': 'https://www.linkedin.com/in/puneet-kolthe-6b28297',
  'pushkar-apte': 'https://www.linkedin.com/in/aptepushkar/',
};

export function getTeamLinkedIn(slug: string): string {
  return linkedinBySlug[slug] ?? 'https://www.linkedin.com/';
}
