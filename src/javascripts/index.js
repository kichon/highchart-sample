var Highcharts = require('highcharts')
require('highcharts/modules/exporting')(Highcharts)

// Highcharts.chart('container')

document.addEventListener('DOMContentLoaded', function () {
  // var myChart = Highcharts.chart('container2', {
  //   chart: {
  //     type: 'bar',
  //   },
  //   title: {
  //     text: 'Fruit'
  //   },
  //   xAxis: {
  //     categories: ['Apples', 'Bananas', 'Oranges']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Fruit eaten'
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'Jane',
  //       data: [1, 0, 4],
  //     },
  //     {
  //       name: 'John',
  //       data: [5, 7, 3],
  //     }
  //   ]
  // })

  // // 積み立てパーセントグラフ
  // Highcharts.chart('container', {
  //   chart: {
  //     type: 'column'
  //   },
  //   tilte: {
  //     text: 'Stacked column chart',
  //   },
  //   xAxis: {
  //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: 'Total fruit consumption'
  //     }
  //   },
  //   tooltip: {
  //     pointFormat: '<span style="color: {series.color}">{series.name}</span>: <b>{point.y}</b>（{point.percentage:.0f}%）</br>',
  //     shared: true
  //   },
  //   plotOptions: {
  //     column: {
  //       stacking: 'percent'
  //     },
  //   },
  //   series: [
  //     {
  //       name: 'John',
  //       data: [5, 3, 4, 7, 2]
  //     },
  //     {
  //       name: 'Jane',
  //       data: [2, 2, 3, 2, 1]
  //     },
  //     {
  //       name: 'Joe',
  //       data: [3, 4, 4, 2, 5]
  //     }
  //   ]
  // })

  // 財務諸表
  Highcharts.chart('container', {

    // chart: {
    //   type: 'column'
    // },

    title: {
      text: '株式会社キャリアインデックス'
    },

    subtitle: {
      text: '2018.3Q',
    },

    xAxis: {
      categories: ['貸借対照表', '損益計算書']
    },

    yAxis: [
      {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Yen'
        },
        stackLabels: {
          enabled: true,
          // style: {
          //   fontWeight: 'bold',
          //   color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
          // }
        }
      },
      {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Yen'
        }
      }
    ],

    // yAxis: {
    //   allowDecimals: false,
    //   min: 0,
    //   title: {
    //     text: 'Number of fruits'
    //   }
    // },

    // tooltip: {
    //   formatter: function () {
    //     return '<b>' + this.x + '</b><br/>' +
    //       this.series.name + ': ' + this.y + '<br/>' +
    //       'Total: ' + this.point.stackTotal;
    //   }
    // },

    plotOptions: {
      column: {
        // stacking: 'normal',
        //grouping: true,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        connectNulls: true,
        pointPadding: 0,
        borderWidth: 0,
        shadow: false,
      }
    },

    series: [
      {
        type: 'column',
        stacking: true,
        name: '流動資産',
        data: [2824508, null],
        stack: 'credit',
      },
      {
        type: 'column',
        stacking: true,
        name: '固定資産',
        data: [183930, null],
        stack: 'credit',
      },
      {
        type: 'column',
        stacking: true,
        name: '流動負債',
        data: [347660, null],
        stack: 'debit',
      },
      {
        type: 'column',
        stacking: true,
        name: '固定負債',
        data: [5181, null],
        stack: 'debit',
      },
      {
        type: 'column',
        stacking: true,
        name: '純資産',
        data: [2655597, null],
        stack: 'debit',
      },
      // {
      //   type: 'column',
      //   name: '売上原価',
      //   data: [null, 75467],
      //   stack: 'credit'
      // },
      // {
      //   type: 'column',
      //   name: '販管費',
      //   data: [null, 1026537],
      //   grouping: true
      // },
      {
        type: 'column',
        name: '売上高',
        data: [null, 1759950],
        grouping: false,
      },
      {
        type: 'column',
        name: '営業利益',
        data: [null, 657946],
        grouping: false,
      },
      {
        type: 'column',
        name: '経常利益',
        data: [null, 657858],
        grouping: false,
      },
      {
        type: 'line',
        name: '総資本回転率',
        data: [3008438, 1759950],
      },
      {
        type: 'line',
        name: '自己資本利益率',
        data: [2655597, 657858]
      }
    ]
  });
})