import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {'Access-Control-Allow-Origin': '*'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, httpOptions)
      .pipe(
        tap(
          _ => console.log('Get User list'),
        _ => console.log('Get User list failed!')
        )
      );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`, httpOptions)
      .pipe(
        tap(
          _ => console.log(`Get User ${id}`),
          _ => console.log(`Get User ${id} failed!`)
        )
      );
  }
  deleteUser(user: User): Observable<any> {
    return this.http.delete(`${this.url}/${user.id}`, httpOptions)
      .pipe(
        tap(
          _ => console.log(`Delete user ${user.id}`),
          _ => console.log(`Delete user ${user.id} failed!`)
        )
      );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions)
      .pipe(
        tap((newUser: User) => console.log(`create new user ${newUser.name}`),
          _ => console.log('create new user failed!')
        )
      );
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.url + `/${user.id}`, user, httpOptions)
      .pipe(
        tap(_ => console.log(`updated user id=${user.id}`),
          _ => console.log('update user failed!')
        )
      );
  }
  loginRequest(user: User): Observable<any> {
    const loginUrl = `http://localhost:8080/j_spring_security_login?username=${user.name}&password=${user.password}`
    + `_csrf=$2a$04$Q2Cq0k57zf2Vs/n3JXwzmerql9RzElr.J7aQd3/Sq0fw/BdDFPAj.`;
    return this.http.post(loginUrl, user, httpOptions)
      .pipe(
        tap(
          _ => console.log(`login user`),
          _ => console.log('login user failed!')
        )
      );
  }
  constructor(private http: HttpClient) { }
}
