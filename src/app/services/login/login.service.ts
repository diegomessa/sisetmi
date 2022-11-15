import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from '../../models/login/userDTO';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<UserDTO>;
  public currentUser: Observable<UserDTO>;


  constructor() {
    this.currentUserSubject = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem('currentUser')));

    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): UserDTO {
    return this.currentUserSubject.value;
  }

  // login(user: UserDTO): Observable<UserDTO> {
  //   return this.userService.getUser(user)
  //     .pipe(map((data: any) => {
  //       if (data && data.objectResponse) {
  //         data.objectResponse.fullName = data.objectResponse.name + ' ' + data.objectResponse.lastName;
  //         data.objectResponse.password = user.password;
  //         localStorage.setItem('currentUser', JSON.stringify(data.objectResponse));
  //         this.currentUserSubject.next(data.objectResponse);
  //         return data.objectResponse;
  //       }
  //     }));
  // }

  // logOut() {
  //   this.currentUser.subscribe((res:any) =>{
  //     const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  //     this.userService.closeSesion(currentUser.refresh_token).subscribe( (res:any) => {
  //       if( res.statusCode == 200 || res.statusCode == 204){
  //         localStorage.removeItem('currentUser');
  //         localStorage.removeItem('infoUser');
  //         this.router.navigate(['/Login']);
  //         this.currentUserSubject.next(null);
  //       }else{
  //         console.error('Ha ocurrido un error al intentar cerrar la sesion: '+ res.message)
  //       }
  //     })
  //   } )
  // }
}
