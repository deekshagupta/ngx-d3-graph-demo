
# NgxD3Graphs 
Interactive and highly customizable D3 charts for designers & developers.</br>
This is a project for creating D3 graphs using  [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3 and [D3.js](https://d3js.org/) Library.
* Sample application is hosted at - [NgxD3Graphs](https://suspicious-knuth-a7d7e0.netlify.com)
## Install
npm i ngx-d3-graphs
## Why ngx-d3-graphs
Unlike other D3 angular chart wrapper libraries, NgxD3Graphs is designed to be very interactive, responsive and dynamic data visualization library 
with the following features-
####Supported Graphs-
* <p>Line graph</p></br>
* <p>Bar graph</p></br>
* <p>Scatter plot graph</p></br>
* <p> Combination of line, bar and scatter plot graph. </p></br>
####Features
* <p>Multiple instances of D3 Graph is supported. </p></br>
* <p>X-axis is a timeline and Y-axis is number by default. </p></br>
* <p>Graph type, color, font size, legend and axis text is configurable.</p></br>
* <p>Left and right y-axis </p></br>
* <p>Tooltip  </p></br>     
* <p>Zoom </p></br>
* <p>Combination of line/bar/scatter plot graph can be drawn with different y-axis </p></br>
* <p>Graphs are responsive and suitable for web and mobile applications </p></br>

##Future Enhancements-

* <p>Support for including more graphs like stacked area, donut, pie charts. </p></br>
* <p>Support for Simpl framework </p></br>
* <p>Performance improvement for high volume of input data </p></br>
* <p>Multiple Y-Axis </p></br>

## Documentation
Ngxd3Graphs can be used by importing 
* ` import {NgxD3GraphsModule} from "ngx-d3-graphs" in the 'app.module.ts'`

 `"NgxD3GraphsModule" module should be imported.  `
*Add the following selector in your app component html.

 ` &lt;app-d3-graphs [graphId]=/id/ [dataPath]=/dataPath/&gt;&lt;/app-d3-graphs&gt; `
 
 where-
* graphId- unique string
* dataPath- provide the path of the graph json placed in the asset folder of your angular application.
 e.g.,
 `dataPath: string = './assets/bar.json';`
 ` id: string= 'graph1';` 
 
 * Find the sample json at- [multiGraphs.json](https://github.com/deekshagupta/ngx-d3-graph-demo/blob/master/src/assets/multi.json)

## Contributing
#### Coming Soon
## License
NgxD3Graphs is available under the [MIT license](https://opensource.org/licenses/MIT).
