import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as d3 from 'd3';
import 'd3-selection-multi';
import { GraphModule } from './graph.module';
import { NgxD3GraphsService } from '../public-api';
import { DisplayMessageModule } from './display-message.module';

@Component({
  selector: 'ndg-ngx-d3-graphs',
  template: `
  <svg id="{{graphType}}" width="100%" height="100%"></svg>

    <p>
      ngx-d3-graphs works!
    </p>
  `,
  styles: []
})
export class NgxD3GraphsComponent implements OnInit {
  @Input() graphType: string;
  private subscription: Subscription;
  public data: any;
  public graphSelector: string;
  public removeSvg: string;
  public getGarph: GraphModule = new GraphModule();
  public getMessage: DisplayMessageModule = new DisplayMessageModule();

  constructor(private d3GraphService: NgxD3GraphsService) {
    console.log('Inside D3 Graph Component');
  }

  ngOnInit() {
    this.removeSvg = '#' + this.graphType + ' > *';
    this.graphSelector = '#' + this.graphType;
    this.subscription = this.d3GraphService.getD3Graph(this.graphType).subscribe((result) => {
        this.data = result;
        if (this.data != null) {
          this.data = result;
          setTimeout(() => {
            d3.selectAll('#d3-graphs > *').remove();
            this.getGarph.createGraph(this.data, this.graphSelector);
            this.getMessage.displayMessage('Graphs', this.graphSelector);


          }, 1);
        } else {
          this.data.length = 1;
          d3.selectAll('#d3-graphs > *').remove();
          setTimeout(() => {
            this.getMessage.displayMessage('Graphs', this.graphSelector);
          }, 10);
        }
      },
      (error) => {
        d3.selectAll('this.graphSelector > *').remove();
        console.log(error);
      });
  }
}