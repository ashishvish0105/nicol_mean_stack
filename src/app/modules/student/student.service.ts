import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IgetAllUser } from 'src/app/models/student/user.model';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<IgetAllUser> {
    return this.http.get<IgetAllUser>(`${environment.userApiURL}/user/get`);
  }
}
