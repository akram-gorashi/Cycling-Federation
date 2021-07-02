import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rider } from 'src/app/models/Riders';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-riders-list',
  templateUrl: './riders-list.component.html',
  styleUrls: ['./riders-list.component.scss']
})
export class RidersListComponent implements OnInit {
  riders: Rider[] = [];
  curPage : number = 1;
  pageSize : number = 10;
  constructor(private ridersSerivce: RidersService, private router: Router) { }

  ngOnInit(): void {
   this.getRidersList();
  }
  
  
  getRidersList() {
     this.ridersSerivce.getRidersLis().subscribe((riders:any) => {
        this.riders = riders.data;

        console.log(riders)
     })
  }

  navigateToRegNewRider() {
     this.router.navigateByUrl('register-new-riders');
  }

  removeRider(riderToRemove: Rider) {
     this.riders = this.riders.filter(rider => rider !=riderToRemove);
  }

  numberOfPages(){
   return Math.ceil(this.riders.length / this.pageSize);
 };
}
