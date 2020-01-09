/**
 * Created by Administrator on 2017/7/9.
 */

 var cheerio = require('cheerio');
 //放置html片段,可以通过load方法把对应的所有的东西转化成一个jquery对象

 var $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')
console.log($.html());

