(this.webpackJsonpschoolnew=this.webpackJsonpschoolnew||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),i=a(15),s=a.n(i),m=a(24),o=(a(33),a(38),a(27),a(18)),h=a(19),u=a(17),d=a(21),E=a(20),v=(a(102),a(1)),g=a(112),b=(a(113),a(114),a(115)),f=(a(116),a(117),a(118),a(119)),p=a(120),k=[{id:1,img:"",maxImg:150,date:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a 04.09.2021",theme:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0438 \u0437\u043d\u0430\u043a\u0438 \u043f\u0440\u0435\u043f\u0438\u043d\u0430\u043d\u0438\u044f \u043f\u0440\u0438 \u043d\u0451\u043c",work:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435: 36\xa7, \u0423\u0447\u0438\u0442\u044c 198-199, \u0443\u043f\u0440. 425 (\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c), \u0443\u043f\u0440. 426"}],w=(l.a.Component,a(121)),C=a(122),P="fullscreen1",x="fullscreen2",y="fullscreen3",S="fullscreen",V="fullscreen4",O="fullscreen5",j=(l.a.Component,a(123),a(124)),L=a(125),q=a(126),z=(a(127),a(128),a(129)),I=a(130),_=(l.a.Component,l.a.Component,a(131)),A=(a(132),[{id:1,img:"",maxImg:150,date:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a 04.09.2021",theme:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0438 \u0437\u043d\u0430\u043a\u0438 \u043f\u0440\u0435\u043f\u0438\u043d\u0430\u043d\u0438\u044f \u043f\u0440\u0438 \u043d\u0451\u043c",work:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435: 36\xa7, \u0423\u0447\u0438\u0442\u044c 198-199, \u0443\u043f\u0440. 425 (\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c), \u0443\u043f\u0440. 426"}]),B=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={activeView:"work",activePanel:"page1",viewBanner:!1,search:"",errorUserGetInfo:null,user:null,sheme:"bright_light"},n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;s.a.send("VKWebAppGetUserInfo").then((function(t){e.setState({user:t})})).catch((function(t){e.setState({errorUserGetInfo:t})}))}},{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"thematics",get:function(){var e=this.state.search.toLowerCase();return A.filter((function(t){return t.date.toLowerCase().indexOf(e)>-1}))}},{key:"render",value:function(){var e=this;return l.a.createElement(v.g,{isWebView:!0,sheme:this.state.sheme},l.a.createElement(v.a,null,l.a.createElement(v.b,null,l.a.createElement(v.J,{header:l.a.createElement(v.v,{separator:!1})},l.a.createElement(v.I,null,l.a.createElement(v.B,{activeView:this.state.activeView},l.a.createElement(v.O,{id:"home",activePanel:this.state.activePanel},l.a.createElement(v.u,{id:"page1"},l.a.createElement(v.v,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),this.state.user?l.a.createElement(v.z,{icon:l.a.createElement(g.a,{width:"56",height:"56"}),header:"\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0435\u0442"},"\u0417\u0430\u0445\u043e\u0434\u0438 \u043f\u043e\u0437\u0436\u0435 :)"):l.a.createElement(v.z,{icon:l.a.createElement(g.a,{width:"56",height:"56"}),header:"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d",action:l.a.createElement(v.q,{onClick:function(){return e.setState({activePanel:"aib"})}},"\u041f\u043e\u0447\u0435\u043c\u0443 \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d?")},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0434\u043b\u044f \u0412\u0430\u0441 \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430.")),l.a.createElement(v.u,{id:"aib"},l.a.createElement(v.v,{left:l.a.createElement(v.w,{onClick:function(){return e.setState({activePanel:"page1"})}})},"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d?"),l.a.createElement(v.m,{header:l.a.createElement(v.n,null,"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e?")},l.a.createElement(v.M,{style:{"margin-left":"15px"}},"\u0415\u0441\u0442\u044c 2 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043c\u043e\u0433\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438: ",l.a.createElement("ul",null,l.a.createElement("li",null,"1 \u043f\u0440\u0438\u0447\u0438\u043d\u0430. \u041f\u0440\u0438\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0412\u0430\u0448\u0435\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443."),l.a.createElement("li",null,"2 \u043f\u0440\u0438\u0447\u0438\u043d\u0430. \u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0431\u0435\u043b\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435."))," ")),l.a.createElement(v.m,{header:l.a.createElement(v.n,null,"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f?")},l.a.createElement(v.M,{style:{"margin-left":"15px"}},"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u0438\u043d\u0443\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0412\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0432 \u0431\u0435\u043b\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a.",l.a.createElement("br",null),"\u041d\u043e \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 ",l.a.createElement(v.q,{href:"https://vk.com/club203904756",blank:"_target"},"\u043d\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443"),", \u043f\u043e\u0441\u043b\u0435 \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 ",l.a.createElement(v.q,{href:"https://vk.com/im?sel=-203904756",blank:"_target"},"\u0441\u044e\u0434\u0430")," \u0441 \u043f\u0440\u043e\u0441\u044c\u0431\u043e\u0439 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0412\u0430\u0441 \u0432 \u0431\u0435\u043b\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a.")))),l.a.createElement(v.O,{id:"work",activePanel:this.state.activePanel},l.a.createElement(v.u,{id:"page1"},l.a.createElement(v.v,null,"\u0414\u043e\u043c\u0430\u0448\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement(v.j,{vertical:"top"},l.a.createElement(v.D,{placeholder:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a 01.09.2021",value:this.state.search,onChange:this.onChange,after:null}))),l.a.createElement(v.u,{id:"page2-article-1"},l.a.createElement(v.v,{left:l.a.createElement(v.w,{onClick:function(){return e.setState({activePanel:"page1"})}})},"\u0421\u0442\u0430\u0442\u044c\u044f 1"),l.a.createElement(v.m,null,"\u0421\u0442\u0430\u0442\u044c\u044f..."))),l.a.createElement(v.O,{id:"more",activePanel:this.state.activePanel},l.a.createElement(v.u,{id:"page1"},l.a.createElement(v.v,null,"\u0415\u0449\u0451"),this.state.user?l.a.createElement(v.m,{style:{padding:"10px"}},l.a.createElement(v.d,{header:"FAQ - \u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b",subheader:"",asideMode:"expand",before:l.a.createElement(_.a,{width:24,height:24,fill:"#3883A8"}),onClick:function(){return e.setState({activePanel:"faq"})}}),l.a.createElement(v.d,{header:"\u0413\u0440\u0443\u043f\u043f\u0430 \u0412\u041a",subheader:"",asideMode:"expand",before:l.a.createElement(b.a,{width:24,height:24,fill:"#3883A8"}),href:"",blank:"_target"})):l.a.createElement(v.z,{icon:l.a.createElement(g.a,{width:"56",height:"56"}),header:"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d",action:l.a.createElement(v.q,{onClick:function(){return e.setState({activePanel:"aib"})}},"\u041f\u043e\u0447\u0435\u043c\u0443 \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d?")},"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0434\u043b\u044f \u0412\u0430\u0441 \u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430."),l.a.createElement(v.k,null,"\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: 2.0")),l.a.createElement(v.u,{id:"aib"},l.a.createElement(v.v,{left:l.a.createElement(v.w,{onClick:function(){return e.setState({activePanel:"page1"})}})},"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d?"),l.a.createElement(v.m,{header:l.a.createElement(v.n,null,"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e?")},l.a.createElement(v.M,{style:{"margin-left":"15px"}},"\u0415\u0441\u0442\u044c 2 \u043f\u0440\u0438\u0447\u0438\u043d\u044b \u043f\u043e\u0447\u0435\u043c\u0443 \u0442\u0430\u043a \u043c\u043e\u0433\u043b\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438: ",l.a.createElement("ul",null,l.a.createElement("li",null,"1 \u043f\u0440\u0438\u0447\u0438\u043d\u0430. \u041f\u0440\u0438\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043c\u043e\u0433\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0412\u0430\u0448\u0435\u043c\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443."),l.a.createElement("li",null,"2 \u043f\u0440\u0438\u0447\u0438\u043d\u0430. \u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0431\u0435\u043b\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435."))," ")),l.a.createElement(v.m,{header:l.a.createElement(v.n,null,"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f?")},l.a.createElement(v.M,{style:{"margin-left":"15px"}},"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u043a\u0438\u043d\u0443\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0412\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0432 \u0431\u0435\u043b\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a.",l.a.createElement("br",null),"\u041d\u043e \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 ",l.a.createElement(v.q,{href:"https://vk.com/club203904756",blank:"_target"},"\u043d\u0430\u0448\u0443 \u0433\u0440\u0443\u043f\u043f\u0443"),", \u043f\u043e\u0441\u043b\u0435 \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 ",l.a.createElement(v.q,{href:"https://vk.com/im?sel=-203904756",blank:"_target"},"\u0441\u044e\u0434\u0430")," \u0441 \u043f\u0440\u043e\u0441\u044c\u0431\u043e\u0439 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0412\u0430\u0441 \u0432 \u0431\u0435\u043b\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a."))),l.a.createElement(v.u,{id:"faq"},l.a.createElement(v.v,{left:l.a.createElement(v.w,{onClick:function(){return e.setState({activePanel:"page1"})}})},"FAQ")))),l.a.createElement(v.K,null,l.a.createElement(v.L,{selected:"home"===this.state.activeView,onClick:function(){return e.setState({activeView:"home",activePanel:"page1"})},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(j.a,null)),l.a.createElement(v.L,{selected:"work"===this.state.activeView,onClick:function(){return e.setState({activeView:"work",activePanel:"page1"})},text:"\u0414\u0417"},l.a.createElement(L.a,null)),l.a.createElement(v.L,{selected:"more"===this.state.activeView||"schedule"===this.state.activePanel||"schedule-lesson"===this.state.activePanel||"schedule-times"===this.state.activePanel||"faq"===this.state.activePanel||"composition"===this.state.activePanel,onClick:function(){return e.setState({activeView:"more",activePanel:"page1"})},text:"\u0415\u0449\u0451"},l.a.createElement(q.a,null))))))))}}]),a}(l.a.Component),K=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=n.state.history;1===e.length?s.a.send("VKWebAppClose",{status:"success"}):e.length>1&&(e.pop(),n.setState({activePanel:e[e.length-1]}))},n.state={activePanel:"home",history:["home"],search:""},n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"thematics",get:function(){var e=this.state.search.toLowerCase();return A.filter((function(t){return t.date.toLowerCase().indexOf(e)>-1}))}},{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),this.setState({activePanel:e,history:[].concat(Object(m.a)(this.state.history),[e])})}},{key:"render",value:function(){var e=this;return l.a.createElement(v.g,{isWebView:!0},l.a.createElement(v.a,null,l.a.createElement(v.b,null,l.a.createElement(v.B,{activeView:"app"},l.a.createElement(v.O,{id:"app",activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack},l.a.createElement(v.u,{id:"home"},l.a.createElement(v.v,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(v.m,null,l.a.createElement(v.f,{size:"l"},l.a.createElement(v.h,{image:"https:povologde.ru/wp-content/uploads/2021/04/d180d0bed181d182d180d183d0b4-d0bdd0b0d0bfd0bed0bcd0bdd0b8d0bb-d0b2d0bed0bbd0bed0b3d0b6d0b0d0bdd0b0d0bc-d0be-d0b4d0bbd0b8d0bdd0bdd18b_6082a4b12993d.jpeg",subtitle:"\u0428\u043a\u043e\u043b\u0430 26.04.2021",header:"\u041c\u0430\u0439\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0438",text:l.a.createElement(l.a.Fragment,null,"\u0421 01.05.2021 \u043f\u043e 10.05.2021 - \u043e\u0442\u0434\u044b\u0445\u0430\u0435\u043c, 11.05.2021 - \u0432 \u0448\u043a\u043e\u043b\u0443. ",l.a.createElement("b",null," ",l.a.createElement(v.q,{target:"_blank",href:"http:publication.pravo.gov.ru/Document/View/0001202104230014"},"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0443\u043a\u0430\u0437")," ")),disabled:!0,caption:"",maxHeight:210}),l.a.createElement(v.h,{image:"https:sun9-32.userapi.com/impg/FMt2xoKZpgKs-GdsQ3TG_aigzSRJmLWNXOyhFg/DLn5tC5N1Ic.jpg?size=640x480&quality=96&sign=0047fe8339f4692106c328ad7a7e06f2&type=album",subtitle:"\u0428\u043a\u043e\u043b\u0430 23.04.2021",header:"\u0421\u0443\u0431\u0431\u043e\u0442\u043d\u0438\u043a",text:"23.04.2021 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0441\u044f \u0441\u0443\u0431\u0431\u043e\u0442\u043d\u0438\u043a \u043f\u043e\u0441\u043b\u0435 3 \u0443\u0440\u043e\u043a\u0430 ( \u0443 \u0432\u0441\u0435\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 )",disabled:!0,caption:"",maxHeight:210})),l.a.createElement(v.H,{size:60})),l.a.createElement(v.K,null,l.a.createElement(v.L,{selected:"home"===this.state.activePanel,onClick:function(){return e.setState({activePanel:"home"})},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(j.a,null)),l.a.createElement(v.L,{selected:"work"===this.state.activePanel,onClick:function(){return e.setState({activePanel:"work"})},text:"\u0414\u0417"},l.a.createElement(L.a,null)),l.a.createElement(v.L,{selected:"more"===this.state.activePanel,onClick:function(){return e.setState({activePanel:"more"})},text:"\u0415\u0449\u0451"},l.a.createElement(q.a,null)))),l.a.createElement(v.u,{id:"work"},l.a.createElement(v.v,{left:l.a.createElement(v.w,{onClick:this.goBack})},"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),l.a.createElement(l.a.Fragment,null,l.a.createElement(v.m,null,l.a.createElement(v.m,null,l.a.createElement(v.j,{vertical:"top"},l.a.createElement(v.D,{placeholder:"\u0410\u043b\u0433\u0435\u0431\u0440\u0430 21.04.2021",value:this.state.search,onChange:this.onChange,after:null})),l.a.createElement(v.H,{size:40}),this.thematics.length>0&&this.thematics.map((function(e){return l.a.createElement(v.h,{style:{"margin-bottom":"11px","margin-left":"16px","margin-right":"16px"},subtitle:e.date,header:e.theme,caption:e.work,image:e.img,maxHeight:e.maxImg,key:e.id})})),0===this.thematics.length&&l.a.createElement(v.z,{icon:l.a.createElement(p.a,{fill:"#3883A8",width:56,height:56}),header:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0412\u044b \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435"),this.thematics.length>0&&l.a.createElement(v.H,{size:40})),l.a.createElement(v.K,null,l.a.createElement(v.L,{selected:"home"===this.state.activeView,onClick:function(){return e.setState({activeView:"home"})},text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(j.a,null)),l.a.createElement(v.L,{selected:"work"===this.state.activeView,onClick:function(){return e.setState({activeView:"work"})},text:"\u0414\u0417"},l.a.createElement(L.a,null)),l.a.createElement(v.L,{selected:"more"===this.state.activeView,onClick:function(){return e.setState({activeView:"more"})},text:"\u0415\u0449\u0451"},l.a.createElement(q.a,null)))))))))))}}]),a}(l.a.Component),M=(l.a.Component,B);s.a.send("VKWebAppInit"),r.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.b693f5b7.chunk.js.map