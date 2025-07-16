import { http, delay, HttpResponse } from 'msw';

export const LinksHandlers = [
  http.get('http://api.realsever-but-not-really.com/links', async () => {
    await delay(); // 100ms - 200ms
    //return HttpResponse.json([]);
    return HttpResponse.json([
      {
        id: '1',
        href: 'https://github.com',
        description: 'Social Coding',
      },
      {
        id: '2',
        href: 'https://www.hypertheory.com',
        description: 'Great training',
      },
      {
        id: '3',
        href: 'https://www.angular.io',
        description: 'Angular Framework',
      },
      {
        id: '4',
        href: 'https://www.reactjs.org',
        description: 'React Framework',
      },
      {
        id: '5',
        href: 'https://www.vuejs.org',
        description: 'Vue Framework',
      },
      {
        id: '6',
        href: 'https://www.svelte.dev',
        description: 'Svelte Framework',
      },
      {
        id: '7',
        href: 'https://www.nextjs.org',
        description: 'Next.js Framework',
      },
      {
        id: '8',
        href: 'https://www.nuxtjs.org',
        description: 'Nuxt.js Framework',
      },
    ]);
  }),
];
