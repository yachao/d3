'use strict';
var $ = require('./Zepto');
var d3 = require('d3');

// var data=[10, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8];

// function render(data){
// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 		.enter()
// 		.append('div')
// 			.attr('class', 'h-bar')
// 				.append('span');

// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 		.style('width', function(d){
// 			return (d*3)+'px';
// 		})
// 		.select('span')
// 			.text(function(d){
// 				return d;
// 			});

// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 		.exit()
// 			.remove();
// }

// setInterval(function(){
// 	data.shift();
// 	data.push(Math.round(Math.random()*100));

// 	render(data);
// }, 1500);

// var a = render(data);


// var data = [
// 	{width: 10, color: 23},
// 	{width: 15, color: 33},
// 	{width: 30, color: 40},
// 	{width: 50, color: 60},
// 	{width: 80, color: 22},
// 	{width: 65, color: 10},
// 	{width: 55, color: 5},
// 	{width: 30, color: 30},
// 	{width: 20, color: 60},
// 	{width: 10, color: 90},
// 	{width: 8, color: 10}
// ];

// var colorScale = d3.scale.linear()
// .domain([0, 100]).range(['#add8e6', 'blue']);

// function render(data){
// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 		.enter().append('div')
// 			.attr('class', 'h-bar')
// 		.append('span');

// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 		.exit().remove();

// 	d3.select('body').selectAll('div.h-bar')
// 		.data(data)
// 			.attr('class', 'h-bar')
// 			.style('width', function(d){
// 				return (d.width * 5) + 'px';
// 			})
// 			.style('background-color', function(d){
// 				return colorScale(d.color);
// 			})
// 			.select('span')
// 				.text(function(d){
// 					return d.width;
// 				});
// }

// function randomValue(){
// 	return Math.round(Math.random() * 100);
// }

// setInterval(function(){
// 	data.shift();
// 	data.push({width: randomValue(), color: randomValue()});
// 	render(data);
// }, 1500);

// render(data);




// var data = [];

// var next = function(x){
// 	return 15 + x * x;
// };
// var newData = function(){
// 	data.push(next);
// 	return data;
// };
// function render(){
// 	var selection = d3.select('body')
// 		.selectAll('div')
// 		.data(newData);

// 	selection.enter().append('div').append('span');
// 	selection.exit().remove();
// 	selection.attr('class', 'v-bar')
// 		.style('height', function(d, i){
// 			return d(i) + 'px';
// 		})
// 	.select('span')
// 		.text(function(d, i){
// 			return d(i);
// 		});
// }

// setInterval(function(){
// 	render();
// }, 1500);
// render();

// var records = [
//     {quantity: 2, total: 190, tip: 100, type: "tab"},
//     {quantity: 2, total: 190, tip: 100, type: "tab"},
//     {quantity: 1, total: 300, tip: 200, type: "visa"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 1, total: 100, tip: 0, type: "cash"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 2, total: 90, tip: 0, type: "tab"},
//     {quantity: 2, total: 200, tip: 0, type: "cash"},
//     {quantity: 1, total: 200, tip: 100, type: "visa"}
// ];

// var nest = d3.nest()
// 	.key(function(d){
// 		return d.type;
// 	})
// 	.key(function(d){
// 		return d.tip;
// 	})
// 	.entries(records);

// d3.select('#nest').html(printNest(nest, ''));

// function printNest(nest, out, i){
// 	if(i === undefined) i = 0;

// 	var tab = '';
// 	for(var j = 0; j < i; ++j)
// 		tab += ' ';

// 	nest.forEach(function(e){
// 		console.log(e)
// 		if(e.key)
// 			out += tab + e.key + '<br />';
// 		else
// 			out += tab + printObject(e) + '<br />';

// 		if(e.values)
// 			out = printNest(e.values, out, ++i);
// 		else
// 			return out;
// 	});
// 	return out;
// }

// function printObject(obj){
// 	var s = '{';
// 	for(var f in obj){
// 		s += f + ': ' + obj[f] + ', ';
// 	}
// 	s += '}';
// 	return s;
// }

// var data = [ // <-A
//     {expense: 10, category: "Retail"},
//     {expense: 15, category: "Gas"},
//     {expense: 30, category: "Retail"},
//     {expense: 50, category: "Dining"},
//     {expense: 80, category: "Gas"},
//     {expense: 65, category: "Retail"},
//     {expense: 55, category: "Gas"},
//     {expense: 30, category: "Dining"},
//     {expense: 20, category: "Retail"},
//     {expense: 10, category: "Dining"},
//     {expense: 8, category: "Gas"}
// ];
// function render(data, comparator) {
//     d3.select("body").selectAll("div.h-bar") // <-B
//             .data(data)
// 		.enter()
//         .append("div")
//             .attr("class", "h-bar")
// 		.append("span");

//     d3.select("body").selectAll("div.h-bar") // <-C
//             .data(data)
//         .exit().remove();

//     d3.select("body").selectAll("div.h-bar") // <-D
//             .data(data)
//         .attr("class", "h-bar")
//         .style("width", function (d) {
//             return (d.expense * 5) + "px";}
//         )
//         .select("span")
//             .text(function (d) {
//                 return d.category;
//             });

//     if(comparator){
//         d3.select('body')
//             .selectAll('div.h-bar')
//             .sort(comparator);
//     }
// }

// var compareByExpense = function(a, b){
//     return a.expense < b.expense ?  -1 : 1;
// };

// var compareByCategory = function(a, b){
//     return a.category < b.category ? -1 : 1;
// };

// render(data);

// function sortttt(comparator){
//     render(data, comparator);
// }

// $('#width').on('click', function(){
//     sortttt(compareByExpense)
// });
// $('#category').on('click', function(){
//     sortttt(compareByCategory)
// });
// $('#Clear').on('click', function(){
//     sortttt()
// });

// var start = new Date(2013, 0, 1), // <-A 
//     end = new Date(2013, 11, 31),
//     range = [0, 1200],
//     time = d3.time.scale().domain([start, end]) // <-B
//         .rangeRound(range), // <-C
//     max = 12,
//     data = [];
    
// for (var i = 0; i < max; ++i){ // <-D
//     var date = new Date(start.getTime());
//     date.setMonth(start.getMonth() + i);
//     data.push(date);
// }
// function render(data, scale, selector) { // <-E
//     d3.select(selector).selectAll("div.fixed-cell")
//                 .data(data)
//             .enter()
//                 .append("div").classed("fixed-cell", true);
//     d3.select(selector).selectAll("div.fixed-cell")
//                 .data(data)
//             .exit().remove();
//     d3.select(selector).selectAll("div.fixed-cell")
//                 .data(data)
//             .style("margin-left", function(d){ // <-F
//                 return scale(d) + "px";
//             })
//             .html(function (d) { // <-G
//                 var format = d3.time.format("%x"); // <-H
//                 return format(d) + "<br>" + scale(d) + "px";
//             });
// }
// render(data, time, "#time");

var max = 10, data = [];
for (var i = 0; i < max; ++i) data.push(i);

var alphabet = d3.scale.ordinal()
    .domain(data)
    .range(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
    
function render(data, scale, selector) {
    d3.select(selector).selectAll("div.cell")
                .data(data)
            .enter().append("div").classed("cell", true);
    d3.select(selector).selectAll("div.cell")
                .data(data)
            .exit().remove();
    d3.select(selector).selectAll("div.cell")
                .data(data)
            .style("display", "inline-block")
            .style("background-color", function(d){
                return scale(d).indexOf("#")>=0?scale(d):"white";
            })
            .text(function (d) {
                return scale(d);
            });
}
render(data, alphabet, "#alphabet");
render(data, d3.scale.category10(), "#category10");
render(data, d3.scale.category20(), "#category20");
render(data, d3.scale.category20b(), "#category20b");
render(data, d3.scale.category20c(), "#category20c");

