import { DetailComponent } from './../detail/detail.component';
import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-all-player',
  templateUrl: './show-all-player.component.html',
  styleUrl: './show-all-player.component.css'
})
export class ShowAllPlayerComponent {
  
  text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis deserunt ipsam doloremque dolorum! Molestias animi blanditiis harum saepe voluptate, deserunt eos dolorem!'; 
  
  playerList: Array<any> = [
    { id: 101, desc: this.text, picUrl: '../../assets/image/Screenshot1.png'},
    { id: 102, desc: this.text, picUrl: '../../assets/image/Screenshot2.png' },
    { id: 103, desc: this.text, picUrl: '../../assets/image/Screenshot3.png' },
    { id: 104, desc: this.text, picUrl: '../../assets/image/Screenshot4.png' },
    { id: 105, desc: this.text, picUrl: '../../assets/image/Screenshot5.png' }
  ];


}

