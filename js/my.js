/*头部点击下列表*/
$(".header .icon-arrow-down").siblings().click(function(){
    $(this).siblings('ul').toggle();
    $(this).siblings('i').toggleClass('rotate');
});
/*左侧点击效果*/
$(".left .left-body1 .list ul li").click(function(){
	$(this).css("background","#0099CC").siblings('li').css("background","");
});
$(".left .left-body2 ul li").click(function(){
	$(this).css("background","#fff").siblings('li').css("background","");
});
$(".left .left-body1 .list .list-body").click(function(){
	$(this).children(0).toggleClass('rotate');
})
/*点击列表隐藏*/
$(".list .list-body").click(function(){
	$(this).next().toggle();
	});
$(".list .icon-unfold").click(function(){
	$(this).toggleClass('rotate');
	$(".list a").toggle();
	$(".list a").next().toggle();
	$(".left .left-body1 .list").toggleClass('hidde');
});
$(".icon-collapse-left").click(function(){
	$(this).prev().toggle();
	$(this).toggleClass('rotate2');
});
/*调用光标函数*/
$('[data-toggle="tooltip"]').tooltip();
/*外部引用图1*/
$('#center1').highcharts({
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Snow depth (m)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Winter 2007-2008',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(1970,  9, 27), 0   ],
            [Date.UTC(1970, 10, 10), 0.6 ],
            [Date.UTC(1970, 10, 18), 0.7 ],
            [Date.UTC(1970, 11,  2), 0.8 ],
            [Date.UTC(1970, 11,  9), 0.6 ],
            [Date.UTC(1970, 11, 16), 0.6 ],
            [Date.UTC(1970, 11, 28), 0.67],
            [Date.UTC(1971,  0,  1), 0.81],
            [Date.UTC(1971,  0,  8), 0.78],
            [Date.UTC(1971,  0, 12), 0.98],
            [Date.UTC(1971,  0, 27), 1.84],
            [Date.UTC(1971,  1, 10), 1.80],
            [Date.UTC(1971,  1, 18), 1.80],
            [Date.UTC(1971,  1, 24), 1.92],
            [Date.UTC(1971,  2,  4), 2.49],
            [Date.UTC(1971,  2, 11), 2.79],
            [Date.UTC(1971,  2, 15), 2.73],
            [Date.UTC(1971,  2, 25), 2.61],
            [Date.UTC(1971,  3,  2), 2.76],
            [Date.UTC(1971,  3,  6), 2.82],
            [Date.UTC(1971,  3, 13), 2.8 ],
            [Date.UTC(1971,  4,  3), 2.1 ],
            [Date.UTC(1971,  4, 26), 1.1 ],
            [Date.UTC(1971,  5,  9), 0.25],
            [Date.UTC(1971,  5, 12), 0   ]
        ]
    }, {
        name: 'Winter 2008-2009',
        data: [
            [Date.UTC(1970,  9, 18), 0   ],
            [Date.UTC(1970,  9, 26), 0.2 ],
            [Date.UTC(1970, 11,  1), 0.47],
            [Date.UTC(1970, 11, 11), 0.55],
            [Date.UTC(1970, 11, 25), 1.38],
            [Date.UTC(1971,  0,  8), 1.38],
            [Date.UTC(1971,  0, 15), 1.38],
            [Date.UTC(1971,  1,  1), 1.38],
            [Date.UTC(1971,  1,  8), 1.48],
            [Date.UTC(1971,  1, 21), 1.5 ],
            [Date.UTC(1971,  2, 12), 1.89],
            [Date.UTC(1971,  2, 25), 2.0 ],
            [Date.UTC(1971,  3,  4), 1.94],
            [Date.UTC(1971,  3,  9), 1.91],
            [Date.UTC(1971,  3, 13), 1.75],
            [Date.UTC(1971,  3, 19), 1.6 ],
            [Date.UTC(1971,  4, 25), 0.6 ],
            [Date.UTC(1971,  4, 31), 0.35],
            [Date.UTC(1971,  5,  7), 0   ]
        ]
    }, {
        name: 'Winter 2009-2010',
        data: [
            [Date.UTC(1970,  9,  9), 0   ],
            [Date.UTC(1970,  9, 14), 0.15],
            [Date.UTC(1970, 10, 28), 0.35],
            [Date.UTC(1970, 11, 12), 0.46],
            [Date.UTC(1971,  0,  1), 0.59],
            [Date.UTC(1971,  0, 24), 0.58],
            [Date.UTC(1971,  1,  1), 0.62],
            [Date.UTC(1971,  1,  7), 0.65],
            [Date.UTC(1971,  1, 23), 0.77],
            [Date.UTC(1971,  2,  8), 0.77],
            [Date.UTC(1971,  2, 14), 0.79],
            [Date.UTC(1971,  2, 24), 0.86],
            [Date.UTC(1971,  3,  4), 0.8 ],
            [Date.UTC(1971,  3, 18), 0.94],
            [Date.UTC(1971,  3, 24), 0.9 ],
            [Date.UTC(1971,  4, 16), 0.39],
            [Date.UTC(1971,  4, 21), 0   ]
        ]
    }]
});
/*外部引用图2*/
$('#center2').highcharts({
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Contents of Highsoft\'s weekly fruit delivery'
    },
    subtitle: {
        text: '3D donut in Highcharts'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [
            ['Bananas', 8],
            ['Kiwi', 3],
            ['Mixed nuts', 1],
            ['Oranges', 6],
            ['Apples', 8],
            ['Pears', 4],
            ['Clementines', 4],
            ['Reddish (bag)', 1],
            ['Grapes (bunch)', 1]
        ]
    }]
});

/*外部引用图3*/
$('#center3').highcharts({
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        },
        marginTop: 80,
        marginRight: 40
    },
    title: {
        text: 'Total fruit consumption, grouped by gender'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits'
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jane',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Janet',
        data: [3, 0, 4, 4, 3],
        stack: 'female'
    }]
});

/*外部引用图4*/
$('#center4').highcharts({
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
});

/*外部引用图5*/
 Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
    return {
        radialGradient: {
            cx: 0.4,
            cy: 0.3,
            r: 0.5
        },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
        ]
    };
});
// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'center5',
        margin: 100,
        type: 'scatter',
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 30,
            depth: 250,
            viewDistance: 5,
            frame: {
                bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                side: { size: 1, color: 'rgba(0,0,0,0.06)' }
            }
        }
    },
    title: {
        text: 'Draggable box'
    },
    subtitle: {
        text: 'Click and drag the plot area to rotate in space'
    },
    plotOptions: {
        scatter: {
            width: 10,
            height: 10,
            depth: 10
        }
    },
    yAxis: {
        min: 0,
        max: 10,
        title: null
    },
    xAxis: {
        min: 0,
        max: 10,
        gridLineWidth: 1
    },
    zAxis: {
        min: 0,
        max: 10
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Reading',
        colorByPoint: true,
        data: [[1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6], [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3], [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7], [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9], [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5], [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1], [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3], [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8], [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3], [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0], [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8], [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5], [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9], [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2], [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6], [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5], [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
    }]
});
// Add mouse events for rotation
$(chart.center5).bind('mousedown.hc touchstart.hc', function (e) {
    e = chart.pointer.normalize(e);
    var posX = e.pageX,
        posY = e.pageY,
        alpha = chart.options.chart.options3d.alpha,
        beta = chart.options.chart.options3d.beta,
        newAlpha,
        newBeta,
        sensitivity = 5; // lower is more sensitive
    $(document).bind({
        'mousemove.hc touchdrag.hc': function (e) {
            // Run beta
            newBeta = beta + (posX - e.pageX) / sensitivity;
            newBeta = Math.min(100, Math.max(-100, newBeta));
            chart.options.chart.options3d.beta = newBeta;
            // Run alpha
            newAlpha = alpha + (e.pageY - posY) / sensitivity;
            newAlpha = Math.min(100, Math.max(-100, newAlpha));
            chart.options.chart.options3d.alpha = newAlpha;
            chart.redraw(false);
        },
        'mouseup touchend': function () {
            $(document).unbind('.hc');
        }
    });
});