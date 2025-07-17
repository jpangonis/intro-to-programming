import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApiLinkCreateItem } from './links-store';
import { environment } from '../../environments/environment';

export type LinkApiItem = {
  id: string;
  href: string;
  description: string;
};

export class LinksApiService {
  #http = inject(HttpClient);
  getLinks() {
    return this.#http.get<LinkApiItem[]>(`${environment.apiUrl}/links`);
  }

  addLink(link: ApiLinkCreateItem) {
    return this.#http.post<LinkApiItem>(`${environment.apiUrl}/links`, link);
  }
}
