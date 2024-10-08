/*1.正则表达式的认识*/
/*2.表达式的认识*/
/*3.元字符的认识*/
/*4.量词的认识*/
/*5.常见方法的使用*/

/*正则表达式：就是一套规则：我们可以设定对应的规则
* 然后根据规则来查找某些符合规则的字符，查找到我们可以获取或者替换*/
(function () {
    /*1.创建规则*/
    /*直接量*/
    var reg1 = /abC/i;
    var str1 = 'abcd';
    console.log(reg1.test(str1)); // true
    /*test方法表示我们是否可以通过对应的参数匹配到对应的规则
    * 如果可以匹配我们返回true,如果不可以匹配我们返回false*/
})();

(function () {
    /*通过创建对象来定义正则表达式*/
    var reg1 = /abC/i;
//    var reg2 = new RegExp('abc');
//    var str2 = 'abcd';
//    var reg3 = new RegExp(reg1);
    var reg3 = RegExp(reg1);
    var str3 = 'abcd';
    console.log(reg3.test(str3)); // true
})();

(function () {
    /*1.1修饰符
    * i:表示忽略大小写
    * g:表示全局匹配
    * m；表示多行匹配*/
    var reg4 = /abc/g;
    var str4 = 'abcabcfabc';
    /*match：方法表示字符串的方法，用来设置匹配规则
    * 如果匹配到我们就把对应的匹配到的内容放置在一数组中*/
    console.log(str4.match(reg4)); // ["abc", "abc", "abc"]
})();

(function () {
    /*m:
    * 我们需要了解一下转义
    * 转义字符表示\*/
    var str5 = 'abd\'';
    console.log(str5);
    /*转义字符和某些字符配合会形成一些具有特殊意义的符号
    * \n:表示换行
    * \t:表示制表位
    * \r：表示文本结束
    * */
    var str6 = 'abc\tcdf';
})();

(function () {
    /*^:如果在普通的规则中表示以什么开头
    * 就是表示以a开头*/
    var reg7 = /^a/gm;
    var str7 = 'abc\na';
    console.log(str7.match(reg7)); // ["a", "a"]
})();

(function () {
    /*2.表达式的认识
    * 包含[]和()
    * []:表示表示一个字符或者值
    * 这个括号中我们可以设置对应的字符或者值得内容或者范围*/
    var reg8 = /[abc][abcd]/g;
    var str8 = 'abcdef';
    console.log(str8.match(reg8)); // ["ab", "cd"]
})();

(function () {
    /*设置不能匹配
    * ^:如果这个符号在[]表达式中表示否定
    * */
    var reg9 = /[^a]/g;
    var str9 = 'abc';
    console.log(str9.match(reg9)); // ["b", "c"]
    /*[0-9]
    * [0123456789]
    * [A-Z]
    * [a-z]
    * [A-z]:表示所有的字母包含大小写只是26英文字母
    * */
})();

(function () {
    var reg10 = /[ab][bc][cd]/g;
    var str10 = 'abcbcd';
    console.log(str10.match(reg10)); // ["abc", "bcd"]
    /*()表示可以设置多位显示
    * |表示或*/
    var reg11 = /(abc|bcd)/g;
    console.log(str10.match(reg11)); // ["abc", "bcd"]
})();

(function () {
    /*3.元字符：本质就是表达式,匹配的也是一位*/
    /*.表示所有字符但是除了\n \r,只是表示一个*/
    var reg12 = /./g;
    var str12 = '1234badsa*';
    console.log(str12.match(reg12)); // ["1", "2", "3", "4", "b", "a", "d", "s", "a", "*"]
    /*\r\n表示回车
    * \w：[A-z0-9]
    * \W:[^\w]*/
    var reg13 = /\w/g;
    var str13 = 'abcd134';
    console.log(str13.match(reg13)); // ["a", "b", "c", "d", "1", "3", "4"]
})();

(function () {
    /*3.1注意我们的[]表达式中可以放置元字符*/
    var reg14 = /[\w]/g;
    var str14 = 'abc1234';
    console.log(str14.match(reg14)); // ["a", "b", "c", "1", "2", "3", "4"]
})();

(function () {
    /*3.2设置匹配单词边界*/
    var reg15 = /\bce\B/g;
    var str15 = 'abc ced cef ce';
    console.log(str15.match(reg15)); // ["ce", "ce"]
})();

(function () {
    /*3.3unicode编码规则*/
    var reg16 = /\u6211\u4eec\u559c\u6b22\u5b66\u4e60/;
    var str16 = '我们喜欢学习';
    console.log(str16.match(reg16)); // ["我们喜欢学习"]
})();

(function () {
    /*4.量词
    * 用来设置符合条件的字符或者值的个数
    * +表示一个或者多个
    * 规则是贪婪匹配
    * *表示0个或者多个
    * ？表示匹配0个或者1个
    * 但是注意？还有其他含义*/
    var reg17 = /a{3,}/g;
    var str17 = 'aaaaaaaaaaaaa';
    console.log(str17.match(/a+/g)); // ["aaaaaaaaaaaaa"]
    console.log(str17.match(/a*/g)); // ["aaaaaaaaaaaaa", ""]
    console.log(str17.match(/a?/g)); // ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", ""]
    console.log(str17.match(/a{5}/g)); // ["aaaaa", "aaaaa"]
    console.log(str17.match(/a{3,5}/g)); // ["aaaaa", "aaaaa", "aaa"]
    console.log(str17.match(reg17)); // ["aaaaaaaaaaaaa"]
})();

(function () {
    /*需求：设定一个固定死的字符
    * 如果我们以某个字符或者值开头而且设定结尾
    * 必须是一个对应的值*/
    var reg18 = /^abc$/;
    var str18 = 'abc';
    console.log(str18.match(reg18)); // ["abc"]
})();

(function () {
    /*5.正则的常用的方法*/
    var reg19 = /ab/g;
    var str19 = 'abababab';
    console.log(reg19.exec(str19)); // ["ab", index: 0, input: "abababab", groups: undefined]
    console.log(reg19.exec(str19)); // ["ab", index: 2, input: "abababab", groups: undefined]
    console.log(reg19.exec(str19)); // ["ab", index: 4, input: "abababab", groups: undefined]
    console.log(reg19.exec(str19)); // ["ab", index: 6, input: "abababab", groups: undefined]
    console.log(reg19.exec(str19)); // null
    console.log(reg19.exec(str19)); // ["ab", index: 0, input: "abababab", groups: undefined]
    /*exec：方法用来匹配对应的值
    * 是通过设定游标来匹配的值，而且游标可以通过lastindex属性修改
    * 而且可以轮回
    * 如果表达式中有子表达式
    * 我们可以通过\1来反向获取到第一个子表达式匹配到的内容
    * \2获取到第二个子表达式的内容*/
    var reg20 = /(\w)(\w)\1\2/g;
    var str20 = 'abab';
    console.log(str20.match(reg20));
})();

(function () {
    var reg21 = /-/;
    var str21 = 'abc-1234';
    console.log(str21.split(reg21)); // ["abc", "1234"]
})();

(function () {
    /*字符串的方法
        replace：
        * */
    var str22 = 'aa';
    /*如果只是字符串替换我们只是替换第一个符合需求的值*/
   console.log(str22.replace('a', 'b')); // ba
    var reg22 = /a/g;
    /*我们设置正则表达式的时候，匹配到多少次就会有多少次替换
    * 而且只替换对应的位置*/
    console.log(str22.replace(reg22, 'b')); // bb
    str22.reaplce(reg22,function ($,$1,$2) {
       /*这个函数表示当匹配到对应的内容的时候
       * 就去调用，匹配多少次就会调用多少次
       * 第一个参数表示整体的匹配规则一般使用$表示
       * $1:表示第二个参数：就是我们子表达式中匹配到的内容类似\1
       * $2:表示第三个参数\2*/
    });
    /*有一个单词 the-last-name
    * 我们需要把这个单词设置为小驼峰命名*/
    var reg23 = /-(\w)/g;
    var str23 ='the-last-name';
    console.log(str23.replace(reg23, function ($, $1) {
        console.log($);
        console.log($1);
        return $1.toUpperCase()

    }));
})();

(function () {
    /*设定一个需求：a后面必须是一个b*/
    var reg24 = /a(?=b)/;
    /*凡是正则表达式中的特殊符号我们必须转义*/
    var reg25 = /\( \)/;
})();