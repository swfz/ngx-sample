import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LogService } from '../services/log.service';

@Injectable()
export class CapturingInterceptor implements HttpInterceptor {
  constructor(private logger: LogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next
      .handle(req)
      .pipe(
        tap(event => this.sendMessage(event), error => this.sendMessage(error))
      );
  }

  private sendMessage(response: any): void {
    console.log('captured');
    console.log(response);
    this.logger.add({
      level: 'warn',
      message: response.url,
      data: response
    });
  }
}
