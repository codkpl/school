(this.webpackJsonpschoolnew=this.webpackJsonpschoolnew||[]).push([[0],{101:function(e){e.exports=JSON.parse('[{"id":"1","name":"prt_E","type":"E","more":[{"commands":["kick","ban","mute"]}]},{"id":"2","name":"prt_D","type":"D","more":[{"commands":["mute","kick"]}]},{"id":"3","name":"prt_C","type":"C","more":[{"commands":["mute"]}]},{"id":"4","name":"prt_B","type":"B","more":[{"commands":[]}]},{"id":"5","name":"prt_A","type":"A","more":[{"commands":[]}]}]')},103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=a(18),o=a.n(i),m=a(22),s=a(23),u=a(16),d=a(25),E=a(24),p=a(1),h=a(124),v=a(125),f=a(126),g=a(127),b=(a(102),a(105)),w=a(104),y=a(106),k=a(107),P=a(108),_=a(109),x=a(110),C=a(111),S=a(112),V=a(113),L=a(114),j=a(115),A=a(116),G=a(117),O=a(118),B=a(119),I=a(120),M=a(121),D=a(122),K=a(123),U=a(101),q=[352699598,579284321,668362734,574015868,363163789,485843139,576930838];l.a.Component,l.a.Component;var J=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={activeView:"loadlayout",activePanel:"page1",search:null,user:null,id:null,load:!0,errorUserGetInfo:null},n.closePanelGet=n.closePanelGet.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;o.a.send("VKWebAppSetViewSettings",{action_bar_style:"light",action_bar_color:"#00152e"}),o.a.send("VKWebAppSetViewSettings",{action_bar_style:"dark",action_bar_color:"#00152e"}),o.a.send("VKWebAppGetUserInfo").then((function(t){e.setState({user:t,id:t.id,activeView:"home",activePanel:"page1",load:!1})})).catch((function(t){e.setState({errorUserGetInfo:t,user:"error",load:!1})})),"immunities"==function(e){var t=e?e.split("?")[1]:window.location.search.slice(1);console.log(t);var a={};if(t)for(var n=(t=t.split("#")[0]).split("&"),l=0;l<n.length;l++){var r=n[l].split("="),c=void 0,i=r[0].replace(/\[\d*\]/,(function(e){return c=e.slice(1,-1),""})),o="undefined"===typeof r[1]||r[1];i=i.toLowerCase(),o=o.toLowerCase(),a[i]?("string"===typeof a[i]&&(a[i]=[a[i]]),"undefined"===typeof c?a[i].push(o):a[i][c]=o):a[i]=o}return a}().pageinfo&&(console.log("URL is true. Getting immunities..."),this.setState({activeView:"immunities",activePanel:"page1"}))}},{key:"closePanelGet",value:function(){null==this.state.user?this.setState({activeView:"loadlayout",activePanel:"page1"}):this.setState({activeView:"home",activePanel:"page1"})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.f,null,l.a.createElement(p.a,null,l.a.createElement(p.b,null,l.a.createElement(p.I,{header:l.a.createElement(p.w,{separator:!1})},l.a.createElement(p.H,null,l.a.createElement(p.C,{activeView:this.state.activeView},l.a.createElement(p.O,{id:"home",activePanel:this.state.activePanel},l.a.createElement(p.v,{id:"page1"},l.a.createElement(p.w,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(p.q,null,l.a.createElement(p.D,{after:null})))),l.a.createElement(p.O,{id:"immunities",activePanel:this.state.activePanel},l.a.createElement(p.v,{id:"page1"},l.a.createElement(p.w,{separator:!1,left:l.a.createElement(p.x,{onClick:this.closePanelGet})},"\u0418\u043c\u043c\u0443\u043d\u0438\u0442\u0435\u0442\u044b"),l.a.createElement(p.q,null,l.a.createElement(p.j,null,l.a.createElement(p.L,{style:{marginBottom:24,color:"var(--text_secondary)"}},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0412\u0430\u0441 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438\u0437 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0438\u0436\u0435."),l.a.createElement(p.d,{before:l.a.createElement(h.a,{width:32,height:32}),header:"1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c",subheader:l.a.createElement(p.L,null,"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,"E")," \u0432 \u0447\u0430\u0442\u0430\u0445!"),asideMode:"expand",onClick:function(){return e.setState({activePanel:"prt_E"})}}),l.a.createElement(p.d,{before:l.a.createElement(v.a,{width:32,height:32}),header:"2 \u0443\u0440\u043e\u0432\u0435\u043d\u044c",subheader:l.a.createElement(p.L,null,"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,"D")," \u0432 \u0447\u0430\u0442\u0430\u0445!"),asideMode:"expand",onClick:function(){return e.setState({activePanel:"prt_D"})}}),l.a.createElement(p.d,{before:l.a.createElement(f.a,{fill:"#9285ff",width:32,height:32}),header:"3 \u0443\u0440\u043e\u0432\u0435\u043d\u044c",subheader:l.a.createElement(p.L,null,"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,"C")," \u0432 \u0447\u0430\u0442\u0430\u0445!"),asideMode:"expand",onClick:function(){return e.setState({activePanel:"prt_C"})}}),l.a.createElement(p.d,{before:l.a.createElement(f.a,{fill:"#ba92e9",width:32,height:32}),header:"4 \u0443\u0440\u043e\u0432\u0435\u043d\u044c",subheader:l.a.createElement(p.L,null,"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,"B")," \u0432 \u0447\u0430\u0442\u0430\u0445!"),asideMode:"expand",onClick:function(){return e.setState({activePanel:"prt_B"})}}),l.a.createElement(p.d,{before:l.a.createElement(f.a,{fill:"#a1a5a7f7",width:32,height:32}),header:"5 \u0443\u0440\u043e\u0432\u0435\u043d\u044c",subheader:l.a.createElement(p.L,null,"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,"A")," \u0432 \u0447\u0430\u0442\u0430\u0445!"),asideMode:"expand",onClick:function(){return e.setState({activePanel:"prt_A"})}})))),U.length>0&&U.map((function(t){return l.a.createElement(p.v,{id:t.name},l.a.createElement(p.w,{left:l.a.createElement(p.x,{onClick:function(){return e.setState({activePanel:"page1"})}})},"\u0418\u043c\u043c\u0443\u043d\u0438\u0442\u0435\u0442\u044b"),l.a.createElement(p.q,null,l.a.createElement(p.j,null,l.a.createElement(p.L,{style:{marginBottom:24,color:"var(--text_secondary)"}},"\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 ",t.id," \u0443\u0440\u043e\u0432\u043d\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043a\u043e\u043c\u0430\u043d\u0434 \u0442\u0438\u043f\u0430 ",l.a.createElement("b",null,t.type),"."))))}))),l.a.createElement(p.O,{id:"more",activePanel:this.state.activePanel},l.a.createElement(p.v,{id:"page1"},l.a.createElement(p.w,null,"\u0415\u0449\u0451"))),l.a.createElement(p.O,{id:"loadlayout",activePanel:this.state.activePanel},l.a.createElement(p.v,{id:"page1"},l.a.createElement(p.w,null,"Chat Manager"),l.a.createElement(p.A,null,l.a.createElement(p.q,{mode:"card",style:{"text-align":"center"}},this.state.errorUserGetInfo?l.a.createElement(l.a.Fragment,null,l.a.createElement(p.j,null,"\u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"),l.a.createElement(p.e,{style:{"margin-top":"7px"},href:"https://vk.com/im?sel=-207901232&report=vkma&error="+this.state.errorUserGetInfo,target:"_blank",mode:"secondary",size:"l",after:l.a.createElement(g.a,{width:20,height:20})}," \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u043f\u043e\u0440\u0442 ")):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.j,null,l.a.createElement(p.y,null),l.a.createElement(p.L,{style:{"margin-top":"10px","padding-left":"15px","padding-right":"15px"}},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")),l.a.createElement(p.j,null,l.a.createElement(p.L,{style:{marginBottom:24,color:"var(--text_secondary)"}},"\u041d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f?",l.a.createElement("br",null),l.a.createElement(p.e,{style:{"margin-top":"7px"},href:"https://vk.com/im?sel=-207901232&report=vkma",target:"_blank",mode:"secondary",size:"l",after:l.a.createElement(g.a,{width:20,height:20})}," \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u043f\u043e\u0440\u0442 "))))))),l.a.createElement(p.v,{id:"page2"},l.a.createElement(p.w,null,"\u041e\u0448\u0438\u0431\u043a\u0430"),l.a.createElement(p.A,null,l.a.createElement(p.q,{mode:"card",style:{"vertical-align":"center","text-align":"center",float:"center"}},l.a.createElement(p.j,null,l.a.createElement(p.L,null,"\u041e\u0448\u0438\u0431\u043a\u0430"),l.a.createElement(p.e,{mode:"secondary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))))))),this.state.load?"":l.a.createElement(p.k,{vertical:"bottom"},l.a.createElement(p.J,{style:{position:"static",margin:"10px 0 0"}},l.a.createElement(p.K,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",selected:"home"==this.state.activeView&"immunities"!=this.state.activePanel,onClick:function(){return e.setState({activeView:"home",activePanel:"page1"})}},l.a.createElement(P.a,null)),l.a.createElement(p.K,{text:"\u0415\u0449\u0451",selected:"more"==this.state.activeView,onClick:function(){return e.setState({activeView:"more",activePanel:"page1"})}},l.a.createElement(_.a,null)))))))))}}]),a}(l.a.Component);o.a.send("VKWebAppInit"),c.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.646ea6de.chunk.js.map