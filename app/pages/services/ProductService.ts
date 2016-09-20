import {Http, RequestOptions, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';

export class ProductService {
    static get parameters() {
        return [[Http]];
    }

    constructor(private http:Http) {

    }

    list() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'apiKey': 'Im0yHnq877SiicbPtl0RROaNCj9skcBvaSKfew/C7h0=',
            'appId': 'ZTZiODU0ZjEtMmMzYi00NDgzLWI1MDAtZGZlZmJiNzk0NTFj',
            'sessionId': 'YjA4N2MyMDAyNDkyZDM3MDFmNzUzMGEwMjVkNTYzMjA5NDQ2NTY5OA=='
        });
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.get('http://api.shoppymesh.com/posts/public?c=&s=recent&offset=0&limit=10', options)
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
