import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [];

  constructor(private httpClient: HttpClient) {
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'ON';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'OFF';
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'ON';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'OFF';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient.put('https://http-client-demo-72f8e.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Success');
        },
        (error) => {
          console.log('Error:' + error);
        }
      );
  }

  getAppareilFromServer() {
    this.httpClient.get<any[]>('https://http-client-demo-72f8e.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Error: ' + error);
        }
      );
  }
}
