
function addTicket(id){
    var x = document.createElement("LI");
    var t = document.createTextNode("Ticket");
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
}

function showTickets(){
    document.getElementById("myList").innerHTML = "";
    addTicket(0);
    addTicket(1);
    addTicket(2);
}

function selectColumn(){

  $("#other").dialog({
                        width: 800,
                        height: 500
            });

  Highcharts.chart({
    chart: {
        renderTo: "chart",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Tickets by Category'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        },
        series: {
            point: {
                events: {
                    click: showTickets
                }
            }
        }
    },
    series: [{
        name: 'Departments',
        colorByPoint: true,
        data: [{
            name: 'Anim Tools',
            y: 56.33
        }, {
            name: 'Layout',
            y: 24.03
        }, {
            name: 'FX',
            y: 10.38
        }, {
            name: 'Lighting',
            y: 4.77
        }, {
            name: 'Texturing',
            y: 0.91
        }, {
            name: 'Shading',
            y: 0.2
        }]
    }]
});
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');

    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(function () { 

$( "#listDialog" ).hide();


options = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Ticket Tracker'
    },
    xAxis: {
        "type": "datetime",
        dateTimeLabelFormats: {
           day: '%d %b %Y'    //ex- 01 Jan 2016
        }, 
        title: {
          text: "Time"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Tickets'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>Content</b><br/>',
        pointFormat: '<b>{series.name}<b>: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Critical',
        data: [5, 3, 4, 7, 2],
        pointStart: Date.UTC(2017, 0, 1),
        pointInterval: 24 * 3600 * 1000, // one day
        color: "#e64927",
        point: {
          events: {
            click: selectColumn
          }
        }

    }, {
        name: 'High',
        data: [2, 2, 3, 2, 1],
        pointStart: Date.UTC(2017, 0, 1),
        pointInterval: 24 * 3600 * 1000,
        color: "#f9ab16",
        point: {
          events: {
            click: selectColumn
          }
        }
    }, {
        name: 'Medium',
        data: [3, 4, 4, 2, 5],
        pointStart: Date.UTC(2017, 0, 1),
        pointInterval: 24 * 3600 * 1000, 
        color: "#009d7e",
        point: {
          events: {
            click: selectColumn
          }
        }
    }, {
        name: 'Low',
        data: [3, 4, 4, 2, 5],
        pointStart: Date.UTC(2017, 0, 1),
        pointInterval: 24 * 3600 * 1000,
        color: "#3e2e85",
        point: {
          events: {
            click: selectColumn
          }
        }
    }]

});

});

