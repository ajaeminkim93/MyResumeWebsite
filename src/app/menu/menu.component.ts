import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
   }

  ngOnInit() {
  }

  routeToResume() {
    this.router.navigate(['resume']);
  }

  routeToAboutme() {
    this.router.navigate(['aboutme']);
  }
}
