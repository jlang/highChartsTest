
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
        backgroundColor: "#3b3849",
        plotBorderColor: "#000",
        borderColor: "#000",
        plotBackgroundColor: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Tickets by Category',
        style: {
            color: "#eee"
        }
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
                    color: '#eee'
                }
            }
        },
        series: {
            point: {
                events: {
                    click: showTickets
                }
            }
        },
        line: {
            color: "#000"
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
        type: 'column',
        backgroundColor: "#3b3849",
        plotBorderColor: "#000",
        borderColor: "#000"
    },
    title: {
        text: 'Ticket Tracker',
        style: {
            color: "#fff"
        }
    },
    xAxis: {
        "type": "datetime",
        dateTimeLabelFormats: {
           day: '%d %b %Y'    //ex- 01 Jan 2016
        }, 
        title: {
          text: "Time",
          style: {
            color: "grey"
            }
        },
        labels: {
            style: {
                color: "#eee"
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Tickets',
            style: {
                color: "grey"
            }
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: '#fff'
            }
        },
        labels: {
            style: {
                color: "#eee"
            }
        },
        gridLineColor: "#000",
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: "#000",
        borderColor: '#CCC',
        borderWidth: 0,
        shadow: false,
        itemStyle: {
                color: "#eee"
        }
    },
    tooltip: {
        pointFormat: '<b>{series.name}<b>: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: 'white'
            },
            borderColor: null
        }
    },
    series: [{
        name: 'Critical',
        data: [5, 3, 4, 7, 2],
        pointStart: Date.UTC(2017, 0, 1),
        pointInterval: 24 * 3600 * 1000, // one day
        color: "#c6584b",
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
        color: "#b45bff",
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
        color: "#3de6df",
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
        color: "#3f9fff",
        point: {
          events: {
            click: selectColumn
          }
        }
    }]

});
options.xAxis.labels.style.color = "#000";
options.labels.style.color = "#fff";
});

