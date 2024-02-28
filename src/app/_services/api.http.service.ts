import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { URI_ENDPOINT } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ApiHttpService {
    constructor(private http: HttpClient) {

    }

    public post<T>(uri: string, data: any, options?: any) {
        return this.http.post<T>(URI_ENDPOINT(uri), data, options)
            .pipe(
                catchError(error => {
                    let errorMsg: {};
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = this.getNormalErrorMessage(error.error);
                    } else {
                        errorMsg = this.getServerErrorMessage(error);
                    }
                    return throwError(() => errorMsg);
                })
            );
    }

    private getServerErrorMessage(error: HttpErrorResponse): any {
        console.log(error);
        console.log(error.error)
        var errorMessage = {
            statusCode: `${error.status}`,
            statusDescription: '',
            message: `${error.error}`
        }
        switch (error.status) {
            case 400: errorMessage.statusDescription = 'Bad Request'; break;
            case 401: errorMessage.statusDescription = 'Unauthorized'; break;
            case 403: errorMessage.statusDescription = 'Access Denied'; break;
            case 404: errorMessage.statusDescription = 'Not Found'; break;
            case 500: errorMessage.statusDescription = 'Internal Server Error'; break;
            default: errorMessage.statusDescription = 'Unknown Server Error'; break;
        }
        return errorMessage;
    }

    private getNormalErrorMessage(error: ErrorEvent): any {
        var errorMessage = {
            statusCode: `${error.error}`,
            statusDescription: 'Common Error',
            message: `${error.message}`
        }
        return errorMessage;
    }
}