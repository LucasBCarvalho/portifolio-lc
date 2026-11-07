import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WEB3FORMS_ACCESS_KEY } from '../data/contact.config';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  readonly configured = WEB3FORMS_ACCESS_KEY.length > 0;

  /** Envia a mensagem para o e-mail cadastrado no Web3Forms. Emite erro se o envio falhar. */
  send(msg: ContactMessage): Observable<void> {
    return this.http
      .post<Web3FormsResponse>('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Contato pelo portfólio — ${msg.name}`,
        from_name: 'Portfólio Lucas Carvalho',
        name: msg.name,
        email: msg.email,
        replyto: msg.email,
        message: msg.message,
      })
      .pipe(
        map((res) => {
          if (!res.success) throw new Error(res.message);
        }),
      );
  }
}
