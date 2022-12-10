import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FireBaseDataService implements OnInit {

  private customeheader = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }
  getuser() {
    return this.http.get<any>(`${environment.fireBaseURL}/userinfo.json`)
  }

  createuser(data: any) {
    return this.http.post<any>(`${environment.fireBaseURL}/userinfo.json/`, data, { headers: this.customeheader })
  }

  deleteUser(id: number) {
    debugger
    return this.http.delete<any>(`${environment.fireBaseURL}/userinfo/${id}.json`)
  }
}
