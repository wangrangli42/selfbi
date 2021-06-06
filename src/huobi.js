// var echarts = require('echarts');

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入饼图
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

var altcoin = echarts.init(document.getElementById('altcoin'));
altcoin.setOptions({
        title :{
                text: 'Altcoin slef analys'
        },
        tooltip: {},
        xAxis:['fil','ada','eos','xrp','dot','uni','aave','ltc','link','eth','one','xlm','doge','chz','1inch','cro','hbar','xmr','iota'],
        yAxis:{},
        series:[{
                type: 'line',
                data:[186295,154301,107051,125728,89723,57803,31835,52928,40188,131961,13679,19046,18561,23317,375,380,2216,5543,8845]
        }]
})
