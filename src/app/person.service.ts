import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis deserunt ipsam doloremque dolorum! Molestias animi blanditiis harum saepe voluptate, deserunt eos dolorem!'; 
    
  detailList: Array<any> = [
    { id: 101,
      name: 'Virgil van Dijk',
      number: '4',
      position: 'centre-back',
      birth: '8 July 1991',
      place: 'Breda, Netherlands',
      picUrl: '../../assets/image/Screenshot1.png',
      desc: this.text }, 
    { id: 102,
      name: 'Dominik Szoboszlai',
      number: '8',
      position: 'Midfielder',
      birth: '25 October 2000',
      place: 'Székesfehérvár, Hungary',
      picUrl: '../../assets/image/Screenshot2.png',
      desc: this.text },
    { id: 103,
      name: 'Caoimhín Odhrán Kelleher',
      number: '62',
      position: 'Goalkeeper',
      birth: '23 November 1998',
      place: 'Cork, Ireland',
      picUrl: '../../assets/image/Screenshot3.png',
      desc: this.text },
    { id: 104,
      name: 'Jayden Alexander Danns',
      number: '76',
      position: 'Forward',
      birth: '16 January 2006',
      place: 'Liverpool, England',
      picUrl: '../../assets/image/Screenshot4.png',
      desc: this.text },
    { id: 105,
      name: 'Darwin Gabriel Núñez Ribeiro',
      number: '9',
      position: 'Forward',
      birth: '24 June 1999',
      place: 'Artigas, Uruguay',
      picUrl: '../../assets/image/Screenshot5.png',
      desc: this.text },
  ]; 
}
