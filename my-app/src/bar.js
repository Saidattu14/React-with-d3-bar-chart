import React from 'react';
import {useState,useEffect} from 'react'
import * as d3 from "d3";
import './App.css'

const url = 'https://charttestdata.kmaltsev.repl.co';


const sample  =  [
  [
      "🍲 Hungry",
      "Delores Stiedemann",
      1612508936
  ],
  [
      "🙌 Need a break",
      "Donny Schinner",
      1612508937
  ],
  [
      "🥶 Cold",
      "Taylor Bartoletti",
      1612508938
  ],
  [
      "🥵 Warm",
      "Nola Lockman",
      1612508939
  ],
  [
      "🍲 Hungry",
      "Norris Rempel",
      1612508940
  ],
  [
      "🙌 Need a break",
      "Sherwood Jacobson",
      1612508941
  ],
  [
      "🥶 Cold",
      "Nedra Pfeffer",
      1612508942
  ],
  [
      "🥵 Warm",
      "Braden Dach",
      1612508943
  ],
  [
      "🍲 Hungry",
      "Kaia Reichel",
      1612508944
  ],
  [
      "🙌 Need a break",
      "Jamie Walsh",
      1612508945
  ],
  [
      "🥶 Cold",
      "Roderick Tillman",
      1612508946
  ],
  [
      "🥵 Warm",
      "Jennie Littel",
      1612508947
  ],
  [
      "🍲 Hungry",
      "Tressie Wisoky",
      1612508948
  ],
  [
      "🙌 Need a break",
      "Marcelo Donnelly",
      1612508949
  ],
  [
      "🥶 Cold",
      "Dillon Erdman",
      1612508950
  ],
  [
      "🥵 Warm",
      "Delores Stiedemann",
      1612508951
  ],
  [
      "🍲 Hungry",
      "Donny Schinner",
      1612508952
  ],
  [
      "🙌 Need a break",
      "Taylor Bartoletti",
      1612508953
  ],
  [
      "🥶 Cold",
      "Nola Lockman",
      1612508954
  ],
  [
      "🥵 Warm",
      "Norris Rempel",
      1612508955
  ],
  [
      "🍲 Hungry",
      "Sherwood Jacobson",
      1612508956
  ],
  [
      "🙌 Need a break",
      "Nedra Pfeffer",
      1612508957
  ],
  [
      "🥶 Cold",
      "Braden Dach",
      1612508958
  ],
  [
      "🥵 Warm",
      "Kaia Reichel",
      1612508959
  ],
  [
      "🍲 Hungry",
      "Jamie Walsh",
      1612508960
  ],
  [
      "🙌 Need a break",
      "Roderick Tillman",
      1612508961
  ],
  [
      "🥶 Cold",
      "Jennie Littel",
      1612508962
  ],
  [
      "🥵 Warm",
      "Tressie Wisoky",
      1612508963
  ],
  [
      "🍲 Hungry",
      "Marcelo Donnelly",
      1612508964
  ],
  [
      "🙌 Need a break",
      "Dillon Erdman",
      1612508965
  ],
  [
      "🥶 Cold",
      "Delores Stiedemann",
      1612508966
  ],
  [
      "🥵 Warm",
      "Donny Schinner",
      1612508967
  ],
  [
      "🍲 Hungry",
      "Taylor Bartoletti",
      1612508968
  ],
  [
      "🙌 Need a break",
      "Nola Lockman",
      1612508969
  ],
  [
      "🥶 Cold",
      "Norris Rempel",
      1612508970
  ],
  [
      "🥵 Warm",
      "Sherwood Jacobson",
      1612508971
  ],
  [
      "🍲 Hungry",
      "Nedra Pfeffer",
      1612508972
  ],
  [
      "🙌 Need a break",
      "Braden Dach",
      1612508973
  ],
  [
      "🥶 Cold",
      "Kaia Reichel",
      1612508974
  ],
  [
      "🥵 Warm",
      "Jamie Walsh",
      1612508975
  ],
  [
      "🍲 Hungry",
      "Roderick Tillman",
      1612508976
  ],
  [
      "🙌 Need a break",
      "Jennie Littel",
      1612508977
  ],
  [
      "🥶 Cold",
      "Tressie Wisoky",
      1612508978
  ],
  [
      "🥵 Warm",
      "Marcelo Donnelly",
      1612508979
  ],
  [
      "🍲 Hungry",
      "Dillon Erdman",
      1612508980
  ],
  [
      "🙌 Need a break",
      "Delores Stiedemann",
      1612508981
  ],
  [
      "🥶 Cold",
      "Donny Schinner",
      1612508982
  ],
  [
      "🥵 Warm",
      "Taylor Bartoletti",
      1612508983
  ],
  [
      "🍲 Hungry",
      "Nola Lockman",
      1612508984
  ],
  [
      "🙌 Need a break",
      "Norris Rempel",
      1612508985
  ],
  [
      "🥶 Cold",
      "Sherwood Jacobson",
      1612508986
  ],
  [
      "🥵 Warm",
      "Nedra Pfeffer",
      1612508987
  ],
  [
      "🍲 Hungry",
      "Braden Dach",
      1612508988
  ],
  [
      "🙌 Need a break",
      "Kaia Reichel",
      1612508989
  ],
  [
      "🥶 Cold",
      "Jamie Walsh",
      1612508990
  ],
  [
      "🥵 Warm",
      "Roderick Tillman",
      1612508991
  ],
  [
      "🍲 Hungry",
      "Jennie Littel",
      1612508992
  ],
  [
    "🥶 Cold",
      "Tressie Wisoky",
      1612508993
  ],
  [
      "🥶 Cold",
      "Marcelo Donnelly",
      1612508994
  ],
  [
    "🥶 Cold",
      "Dillon Erdman",
      1612508995
  ],
  [
      "🍲 Hungry",
      "Delores Stiedemann",
      1612508996
  ]
];
 

const BarChart = () => {
   
  const [data,setData] = useState([]);
  const [val,setVal] = useState(false);
  const getData = () => {
      
      if(val === false) {
       
    const timer = setTimeout( async() => {

      ;
      const data = sample;
      setVal(true);
      setData(sample);
     
      let mySet = new Set()
      for(var x in data)
      {
         mySet.add(data[x][0])
      }
      console.log(mySet)
      var dict = [];
      for (var it = mySet.values(), val= null; val=it.next().value;) 
      {
          x = 0;
          let count = 0;
         for(var y in data)
         {
           if(data[y][0] === val)
           {
               count = count + 1;
           }
         }
         dict.push({
          key:   val,
          value: count
      });
      }
      console.log(dict)
      

      const svg = d3.select('svg');
      const svgContainer = d3.select('#container');
      
      const margin = 80;
      const width = 800 - 2 * margin;
      const height = 300 - 2 * margin;
    
      const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);
    
      const xScale = d3.scaleBand()
        .range([0, width])
        .domain(dict.map((s) => s.key))
        .padding(0.4)
      
      const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([10, 20]);
    
      // vertical grid lines
      // const makeXLines = () => d3.axisBottom()
      //   .scale(xScale)
      const makeYLines = () => d3.axisLeft()
                      .scale(yScale);
    
      chart.append('g')
      .attr("transform", "translate(0," + 140 + ")")
        .call(d3.axisBottom(xScale));
    
      chart.append('g')
          
        .call(d3.axisLeft(yScale));
    
    
      chart.append('g')
      .attr('class', 'grid')
      .call(makeYLines()
      .tickSize(-width, 0, 0)
      .tickFormat('')
        )
    const Svg = chart.selectAll()
                      .data(dict.map((s) => s.key))
                      .enter()
                      .append('g')
                     
    
    
    const Bar = Svg.selectAll("g")
    .data(dict)
    .enter().append("rect")
    .attr("x", function(d) { return xScale(d.key); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.value);})
    
    
     


    }, 20000);
   
  




  }

    }


const Chart = (dict) => {
  

  const svg = d3.select('svg');
  const svgContainer = d3.select('#container');
  
  const margin = 80;
  const width = 800 - 2 * margin;
  const height = 300 - 2 * margin;

  const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

  const xScale = d3.scaleBand()
    .range([0, width])
    .domain(dict.map((s) => s.key))
    .padding(0.4)
  
  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([10, 20]);

  // vertical grid lines
  // const makeXLines = () => d3.axisBottom()
  //   .scale(xScale)
  const makeYLines = () => d3.axisLeft()
                  .scale(yScale);

  chart.append('g')
  .attr("transform", "translate(0," + 140 + ")")
    .call(d3.axisBottom(xScale));

  chart.append('g')
      
    .call(d3.axisLeft(yScale));


  chart.append('g')
  .attr('class', 'grid')
  .call(makeYLines()
  .tickSize(-width, 0, 0)
  .tickFormat('')
    )
const Svg = chart.selectAll()
                  .data(dict.map((s) => s.key))
                  .enter()
                  .append('g')
                 


const Bar = Svg.selectAll("g")
.data(dict)
.enter().append("rect")
.attr("x", function(d) { return xScale(d.key); })
.attr("y", function(d) { return yScale(d.value); })
.attr("width", xScale.bandwidth())
.attr("height", function(d) { return height - yScale(d.value);})



}


    
  const dt = async() => {
    console.log('helllo')
  }

    useEffect(() => {
     
     
      setVal(false);
      
      getData();
     
      
  
    
    },);
    

  const V = () => {
    return(
      <div>hhs</div>
    )
  }
    
    return(
        <div className = "bar"> Welcome to d3 chart
        {val   || <div> <body>
            <svg width="700" height="240">
                <g id="wrapper" transform="translate(40, 20)">
                </g>
            </svg>
        </body></div>
       
        }
        
        </div>
        
       
    )
}
  export default BarChart;

