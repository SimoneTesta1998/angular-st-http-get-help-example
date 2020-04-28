import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private http: HttpClient) {
    http.get<any>('https://jsonplaceholder.typicode.com/users/1')
    .pipe(
      map(res => res.id * 5)
    )
    .subscribe(console.log)
  }
}
