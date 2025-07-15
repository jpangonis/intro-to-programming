import { http, delay, HttpResponse } from 'msw';

export const LinksHandlers = [
  http.get('http://api.realsever-but-not-really.com/links', async () => {
    await delay(2000); // 100ms - 200ms
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
    ]);
  }),
];
