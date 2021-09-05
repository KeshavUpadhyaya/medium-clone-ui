import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  data?: String;

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {

    this.helloService.getTestData().subscribe((data) => {
      this.data = data.data;
    })

  }

}
