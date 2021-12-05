//Had to change the input source of the data from local to hosted to correct X-Origin request error.
d3.csv('https://raw.githubusercontent.com/BDavidoff/CUNY_DATA_608/master/module6/d3_lab/ue_industry.csv', data => {
    // Define your scales and generator here.
	var xScale = d3.scaleLinear().domain(d3.extent(data, d => +d.index)).range([20, 1180]);
	var yScale = d3.scaleLinear().domain(d3.extent(data, d => +d.Agriculture)).range([580, 20]);

	var lineAnswer = d3.line()
		.x(d => xScale(d.index))
		.y(d => yScale(d.Agriculture));	
    
	d3.select('#answer1')
        // append more elements here
		.append('path')
		.attr('d', lineAnswer(data))
		.attr('stroke', '#2e2928');
});
