import { Component } from '@angular/core';
import { SpringhttpService } from './service/springhttp.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testproject';

  getData: any;
  postData: any;
  env = environment.environmentName;

  constructor(public spring: SpringhttpService) {
  }

  ngOnInit(): void {
    this.spring.getConfig().subscribe((data) => 
    {
      this.getData = data;
      console.log(data);
    });

    this.spring.postConfig().subscribe((data) => {
      this.postData = data;
      console.log(this.postData);
    });
  }
}
