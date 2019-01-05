import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'GOT';
  count = 0;
  showDetail: boolean = false;
  jsonData: any;
  detailJsonData: any;
  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void {
    this.http.get('https://anapioﬁceandﬁre.com/api/books').subscribe(data => {
      console.log(data);
      this.jsonData = data;
    });
  }

loadDetail(detailUrl: string): void {
  console.log("detail");
  this.http.get(detailUrl).subscribe(data => {
      console.log(data);
      this.showDetail = true;
      this.detailJsonData = data;
    });
}

}



