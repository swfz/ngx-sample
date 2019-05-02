import {
  HttpErrorResponse,
  HttpEvent,
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

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(event => this.sendMessage(event), error => this.sendMessage(error))
    );
  }

  private sendMessage(event: HttpEvent<unknown> | HttpErrorResponse): void {
    console.log(event);
    const isHttpResponse = (e: unknown): e is HttpResponse<unknown> =>
      e instanceof HttpResponse;
    const isHttpErrorResponse = (e: unknown): e is HttpErrorResponse =>
      e instanceof HttpErrorResponse;
    if (isHttpResponse(event) || isHttpErrorResponse(event)) {
      this.logger.add({
        level: 'warn',
        message: event.url,
        data: event
      });
    }
  }
}
