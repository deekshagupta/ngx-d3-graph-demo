
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

 `<app-d3-graphs [graphId]=id2 [jsonInput]="jsonInput"></app-d3-graphs>
` 
 where-
* graphId- unique string
* jsonInput- provides json input to ngxd3graphs component 
 e.g.,
 
 ` id: string= 'graph1';` 
 
json input should be given in the following format-

`jsonInput = {"config":{"cmd":"none","typeProperties":{"axisColor":"black","axisTextColor":"black","xAxisTicks":3,"yAxisTicks":[5,3],"xAxisText":"Timeline","yAxisText":["Speed","Time"],"decimalDigits":2,"xUnit":"hr","yUnit":["km/hr","Hr"],"axisCss":{"shape-rendering":"crispEdges","stroke-width":"1.7px"},"timeFormat":"HH:mm"},"advanced":{"tooltips":true,"legends":true,"zoom":true,"zoomMinScaleExtent":1,"zoomMaxScaleExtent":4}},"data":[{"dataConfig":{"name":"Free","legends":"L1BY0","type":"dot","yIndicator":"y1","color":"orange","isYNegativeAllowed":false,"css":{"opacity":"0.85","r":"5"}},"values":[{"xAxis":1521074700000,"yAxis":60.1267},{"xAxis":1521075600000,"yAxis":105.4523},{"xAxis":1521076500000,"yAxis":99},{"xAxis":1521077400000,"yAxis":120},{"xAxis":1521078300000,"yAxis":40},{"xAxis":1521079200000,"yAxis":86}]},{"dataConfig":{"name":"Free","legends":"L2BY1","type":"bar","yIndicator":"y1","isYNegativeAllowed":false,"color":"blue","css":{"fill-opacity":"0.65"}},"values":[{"xAxis":1521074700000,"yAxis":10},{"xAxis":1521075600000,"yAxis":8},{"xAxis":1521076500000,"yAxis":3},{"xAxis":1521077400000,"yAxis":4},{"xAxis":1521078300000,"yAxis":5},{"xAxis":1521079200000,"yAxis":6}]},{"dataConfig":{"name":"Free","legends":"L3LY0","type":"line","yIndicator":"y0","color":"red","isYNegativeAllowed":false,"css":{}},"values":[{"xAxis":1521074700000,"yAxis":80.1267},{"xAxis":1521075600000,"yAxis":35.4523},{"xAxis":1521076500000,"yAxis":31},{"xAxis":1521077400000,"yAxis":20},{"xAxis":1521078300000,"yAxis":120},{"xAxis":1521079200000,"yAxis":186}]},{"dataConfig":{"name":"Free","legends":"L4LY1","type":"bar","yIndicator":"y1","color":"rgb(32, 158, 145)","isYNegativeAllowed":false,"css":{"fill-opacity":"0.65"}},"values":[{"xAxis":1521074700000,"yAxis":30.5},{"xAxis":1521075600000,"yAxis":92},{"xAxis":1521076500000,"yAxis":53},{"xAxis":1521077400000,"yAxis":74},{"xAxis":1521078300000,"yAxis":25.56},{"xAxis":1521079200000,"yAxis":26}]}]}`
 
 where "type" defines the type of the graph you want to draw for instance bar,dot or line graphs.
 
## Contributing
#### Coming Soon
## License
NgxD3Graphs is available under the [MIT license](https://opensource.org/licenses/MIT).
