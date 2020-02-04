// ==UserScript==
// @name         damai_ticket
// @namespace    https://github.com/LelouchZhang
// @version      0.1
// @description  try to take over the world!
// @author       ZacharyZhang
// @match        https://buy.damai.cn/orderConfirm*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.1.min.js
// ==/UserScript==

var question_divs=$(".div_question"); //通过class定位
var question_1_div=$("#div1"); //通过id定位
var question_1_lis=$("#div1 ul li"); //通过相对路径
var label=$("#div1 ul li label");
var lbael_text=label.text();

// jQuery
// 设置属性 
ele.attr("属性","值");
//获取属性 
ele.attr("属性");

$("#q1_1").click();
$("[rel=q2_2]").click();
$("[name=q7_0][value=2]").click();
$("#q8 li[title=2]").click();
$("#divquestion9 ul.shop-item.text_place.item_select.operation add").click();
// 第九题，Python增加一个
$("#div9 .shop-item:first-of-type .operation.add").click();

// 选择第二个选项
document.querySelector("#q3").selectedIndex = 2;

// 触发一下“change”事件
document.querySelector("#q3").dispatchEvent(new Event('change'));
// 提交问卷
$(".submitbutton").click();