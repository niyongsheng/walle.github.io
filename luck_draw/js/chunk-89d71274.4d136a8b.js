(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89d71274"],{"53ca":function(t,a,n){"use strict";n.d(a,"a",(function(){return e}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}},"81d5":function(t,a,n){"use strict";var e=n("7b0b"),o=n("23cb"),l=n("50c4");t.exports=function(t){var a=e(this),n=l(a.length),c=arguments.length,i=o(c>1?arguments[1]:void 0,n),r=c>2?arguments[2]:void 0,s=void 0===r?n:o(r,n);while(s>i)a[i++]=t;return a}},c22d:function(t,a,n){"use strict";n.r(a);var e,o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("a-empty",{directives:[{name:"show",rawName:"v-show",value:t.showEmpty,expression:"showEmpty"}],attrs:{description:t.$t("base.developing")}}),n("canvas",{staticClass:"cav_ball",attrs:{id:"canvas_ball"}})],1)},l=[],c=(n("cb29"),n("4160"),n("a434"),n("b0c0"),n("159b"),n("53ca")),i=n("ade3"),r=(n("e1f5"),n("5efb")),s=(n("c0ed"),n("9fd0")),f=(n("dcac"),n("fc25")),h={name:"test",components:(e={},Object(i["a"])(e,f["a"].name,f["a"]),Object(i["a"])(e,s["a"].name,s["a"]),Object(i["a"])(e,r["a"].name,r["a"]),e),data:function(){return{showEmpty:!0,RADIUS:7,WIN_WIDTH:0,WIN_HEIGHT:0,balls:[],colors:["#EDB335","#FF4D4F","#1890FF","#52C41A"],timer:null}},methods:{updateBalls:function(){var t=this;this.balls.forEach((function(a,n){Object(c["a"])(n);var e=[t.RADIUS,t.WIN_WIDTH,t.WIN_HEIGHT],o=e[0],l=e[1],i=e[2];a.x+=a.vx,a.y+=a.vy,a.vy+=a.g,a.y>=i-o&&(a.y=i-o,a.vy=.75*-a.vy);var r=0,s=100;t.balls.forEach((function(a,n){Object(c["a"])(n),a.x+o>0&&a.x-o<l&&(t.balls[r++]=a)}));while(t.balls.length>r)t.balls.pop();if(t.balls.length-s)for(var f=t.balls.length-s,h=0;h<f;h++){var u=t.balls.length-20,b=1,d=Math.floor(Math.random()*(u-b+1)+b);t.balls.splice(d,1)}}))},initBall:function(){var t=this,a=document.getElementById("canvas_ball"),n=a.getContext("2d");this.WIN_WIDTH=a.clientWidth,this.WIN_HEIGHT=a.clientHeight;var e=this.WIN_WIDTH>1e3?1e3:this.WIN_WIDTH;this.RADIUS=Math.round(4*e/5/98)-1,this.timer=setInterval((function(){n.clearRect(0,0,n.canvas.width,n.canvas.height);var a=100,e=100,o=[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]];o.forEach((function(n,o){n.forEach((function(n,l){if(1==n){var c={x:a+2*l*(t.RADIUS+1)+(t.RADIUS+1),y:e+2*o*(t.RADIUS+1)+(t.RADIUS+1),g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(1e3*Math.random())),vy:-10,color:t.colors[Math.floor(Math.random()*t.colors.length)]};t.balls.push(c)}}))})),t.updateBalls(n),t.balls.forEach((function(a,e){Object(c["a"])(e),n.fillStyle=a.color,n.beginPath(),n.arc(a.x,a.y,t.RADIUS,0,2*Math.PI,!0),n.closePath(),n.fill()}))}),50)}},mounted:function(){this.initBall()},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},u=h,b=(n("d8d4"),n("2877")),d=Object(b["a"])(u,o,l,!1,null,"66513797",null);a["default"]=d.exports},cb29:function(t,a,n){var e=n("23e7"),o=n("81d5"),l=n("44d2");e({target:"Array",proto:!0},{fill:o}),l("fill")},d8d4:function(t,a,n){"use strict";n("fbaf")},fbaf:function(t,a,n){}}]);
//# sourceMappingURL=chunk-89d71274.4d136a8b.js.map