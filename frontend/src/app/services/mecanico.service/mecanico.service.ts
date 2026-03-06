import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class MecanicoService {
  constructor(private http: HttpClient){}
  
  // fucion of get users 
  getusersMecanico(){

  return this.http.get<{ mecanicos: any[] }>('userMecanico.json')
    .pipe(map(res => res.mecanicos));
  }
    //  return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
