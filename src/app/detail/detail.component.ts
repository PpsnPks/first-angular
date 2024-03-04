import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  player:any;
  playerId:any;
  constructor(private activatedRoute: ActivatedRoute, private service: PersonService){}
  
  ngOnInit(): void {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    this.player = this.service.detailList.find(x=> x.id == this.playerId)
    console.log(this.playerId);
    
  }
}
