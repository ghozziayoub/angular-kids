import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-gestion-club',
  templateUrl: './gestion-club.component.html',
  styleUrls: ['./gestion-club.component.css']
})
export class GestionClubComponent implements OnInit {

  clubs = [];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubService.getAllClubs().subscribe(
      res => {
        console.log(res);
        this.clubs = res.clubs;
      },
      err => {
        console.log(err);
      }
    )
  }

}
