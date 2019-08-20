import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dataPath: string = './assets/bar.json';
  public id: string= 'bar';
  title = 'ngx-d3-graph-demo';
}
