(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a(192)},180:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);a(144),a(169);var n=a(0),o=a.n(n),r=a(51),c=a.n(r),i=a(26),l=a(91),s=a(20),u=a(9),p=a(6),d=a(42),m=a(29),h=a.n(m),b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},v=function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},f=function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}},O=function(e,t){return t.access_token=_e.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,h.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then(function(e){return e.response}).catch(function(e){return e})},y=function(){var e=_e.getState().vkui.componentScroll;Object.keys(e).forEach(function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)})},E=function(e){var t=_e.getState().router.activePanel,a=_e.getState().router.panelsHistory;return"undefined"!==typeof a[e]&&(t=a[e][a[e].length-1]),t},j={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},g={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},k={forms:[]},w=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&h.a.send("VKWebAppEnableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],b=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var v=m.shift();b=(m=[v])[m.length-1]}else if(i.length>1){var f=i.shift();s=(i=[f])[i.length-1],b=(m=e.panelsHistory[s])[m.length-1]}return t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:b,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var O=e.activeView,y=e.activePanel,E=e.activeStory,g=e.popouts;if(g[O])return g[O]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:g})});var k=e.modalHistory[O];if(void 0!==k&&0!==k.length){var w=k[k.length-2]||null;return null===w?k=[]:-1!==k.indexOf(w)?k=k.splice(0,k.indexOf(w)+1):k.push(w),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},O,w)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},O,k))})}var S=e.panelsHistory[O]||[],P=e.viewsHistory[e.activeStory]||[],T=e.storiesHistory;if(S.length>1)S.pop(),y=S[S.length-1];else if(P.length>1){P.pop(),O=P[P.length-1];var _=e.panelsHistory[O];y=_[_.length-1]}else if(T.length>1){T.pop(),E=T[T.length-1],O=e.viewsHistory[E][e.viewsHistory[E].length-1];var C=e.panelsHistory[O];y=C.length>1?C[C.length-1]:C[0]}else h.a.send("VKWebAppClose",{status:"success"}).then(function(e){return e}).catch(function(e){return e});return 1===S.length&&h.a.send("VKWebAppDisableSwipeBack",{}).then(function(e){return e}).catch(function(e){return e}),Object(p.a)({},e,{activeView:O,activePanel:y,activeStory:E,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,P)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,S))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var A=t.payload.id||null,H=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===A?H=[]:-1!==H.indexOf(A)?H=H.splice(0,H.indexOf(A)+1):H.push(A),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,A)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,H))});case"CLOSE_MODAL":var B=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,V=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===B?V=[]:-1!==V.indexOf(B)?V=V.splice(0,V.indexOf(B)+1):V.push(B),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,B)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,V))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),S=a(93),P=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},T=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},_=function(){return{type:"GO_BACK"}},C=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},A=function(){return{type:"CLOSE_POPOUT"}},H=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},B=function(){return{type:"CLOSE_MODAL"}},V=(a(179),a(180),a(17)),M=a(18),D=a(21),I=a(19),x=a(22),L=a(2),G=a(196),z=a(197),N=a(198),F=a(199),W=(a(32),a(193)),K=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).state={popout:null},a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"onClick",value:function(){var e=this;this.setState({popout:o.a.createElement(L.D,null)}),setTimeout(function(){e.setState({popout:null})},2e3)}},{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(L.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:{href:"https://vk.com/cm_daddy"}}],onClose:function(){return e.props.closePopout()}},o.a.createElement("p",null,"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435?")))}},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return o.a.createElement(L.v,{id:t},o.a.createElement(L.w,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement(L.l,null,o.a.createElement(L.A,{icon:o.a.createElement(W.a,{width:56,height:56}),header:"\u0422\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"},"\u0414\u0430\u043d\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043f\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c")))}}]),t}(o.a.Component),R={setPage:T,goBack:_,openPopout:C,closePopout:A,openModal:H},J=Object(s.b)(null,R)(K),U=a(66),Y=a.n(U),q=a(104),Q=function(e){function t(){return Object(V.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(L.d,{description:r,before:o.a.createElement(L.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),X=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map(function(e){return o.a.createElement(Q,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})})),t},Z=function(e){function t(){var e,a;Object(V.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(D.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){h.a.send("VKWebAppGetAuthToken",{app_id:7820245,scope:e.join(",")}).then(function(e){t(b(e.access_token))}).catch(function(){t(b(null))})}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(q.a)(Y.a.mark(function e(){var t,a,n;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,O("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,a=t.items.filter(function(e){return 1===e.is_admin}),n=t.items.filter(function(e){return 0===e.is_admin}),localStorage.setItem("userGroupsAdmined",JSON.stringify(a)),localStorage.setItem("userGroupsOther",JSON.stringify(n)),this.setState({groups:{admined:a,other:n},loading:!1});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=X(this.state.groups.admined),c=X(this.state.groups.other);return o.a.createElement(L.v,{id:a},o.a.createElement(L.w,{left:o.a.createElement(L.x,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(L.z,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(L.l,null,o.a.createElement(L.g,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(L.g,null,o.a.createElement(L.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(L.l,{header:o.a.createElement(L.m,{mode:"secondary"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435")},o.a.createElement(L.q,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(L.l,{header:o.a.createElement(L.m,{mode:"secondary"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435")},o.a.createElement(L.q,null,c)))}}]),t}(o.a.Component);var $=Object(s.b)(function(e){return{accessToken:e.vkui.accessToken}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:_,openPopout:C,closePopout:A,openModal:H},e))})(Z),ee=a(44),te=a(194),ae=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).state={text:"",snackbar:null},a.openBaseWithAction=a.openBaseWithAction.bind(Object(ee.a)(Object(ee.a)(a))),a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"openBaseWithAction",value:function(){var e=this;this.state.snackbar||this.setState({snackbar:o.a.createElement(L.F,{onClose:function(){return e.setState({snackbar:null})},before:o.a.createElement(L.b,{size:22,style:{background:"white"}},o.a.createElement(te.a,{fill:"#FF0000",width:24,height:24}))},"\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430")})}},{key:"componentDidMount",value:function(){y()}},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage;return o.a.createElement(L.v,{id:t},o.a.createElement(L.w,null,"\u041f\u043e\u043a\u0443\u043f\u043a\u0430 \u0440\u0430\u0431\u043e\u0432"),o.a.createElement(L.l,null,o.a.createElement(L.g,null,"\u041a\u0430\u043a \u043f\u0443\u0441\u0442\u043e...")))}}]),t}(o.a.Component),ne={setPage:T,setActiveTab:v,setScrollPositionByID:f,openPopout:C,closePopout:A,openModal:H},oe=(Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},ne)(ae),a(195)),re=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).state={activePanel:"base"},a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){y()}},{key:"render",value:function(){var e=this,t=this.props;t.id,t.setPage;return o.a.createElement(L.I,{transitionMotionEnabled:"false",activePanel:this.state.activePanel},o.a.createElement(L.v,{id:"base"},o.a.createElement(L.w,null,"\u0415\u0449\u0451"),o.a.createElement(L.l,null,o.a.createElement(L.g,null,o.a.createElement(L.E,{onClick:function(){return e.setState({activePanel:"sostave"})},expandable:!0,before:o.a.createElement(oe.a,null)},"\u0421\u043e\u0441\u0442\u0430\u0432")))),o.a.createElement(L.v,{id:"sostave"},o.a.createElement(L.w,{left:o.a.createElement(L.x,null),onClick:function(){return e.setState({activePanel:"base"})}},"\u0421\u043e\u0441\u0442\u0430\u0432"),o.a.createElement(L.l,null,o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:"",image:"../../../../images/01.jpg"},"\u041a\u0440\u0438\u0441\u0442\u0438\u043d\u0430 \u0410\u0440\u0442\u0438\u043c\u0435\u043d\u043a\u043e"),o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:""},"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430 \u0410\u0440\u0445\u0438\u043f\u043e\u0432\u0430"),o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:""},"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u0411\u0443\u0440\u0430\u043a\u043e\u0432\u0430"),o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:""},"\u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u0413\u043e\u043d\u0447\u0430\u0440\u043e\u0432"),o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:""},"\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u041a\u043e\u043b\u043c\u0430\u043a\u043e\u0432\u0430"),o.a.createElement(L.B,{before:o.a.createElement(L.b,{size:48}),caption:"\u0423\u0447\u0435\u043d\u0438\u043a",after:""},"\u041a\u0438\u0440\u0438\u043b\u043b \u0428\u0430\u043b\u043a\u0438\u043d\u0441\u043a\u0438\u0439"),o.a.createElement(L.i,null,"\u0412\u0441\u0435\u0433\u043e 6 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f"))))}}]),t}(o.a.Component),ce={setPage:T,setActiveTab:v,setScrollPositionByID:f,openPopout:C,closePopout:A,openModal:H},ie=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},ce)(re),le=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).state={activePanel:"base"},a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){y()}},{key:"render",value:function(){var e=this.props;e.id,e.setPage;return o.a.createElement(L.I,{transitionMotionEnabled:"false",activePanel:this.state.activePanel},o.a.createElement(L.v,{id:"base"},o.a.createElement(L.w,null,"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),o.a.createElement(L.l,null,o.a.createElement(L.A,{icon:o.a.createElement(W.a,{width:56,height:56}),header:"\u0422\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b"},"\u0414\u0430\u043d\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043f\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c"))))}}]),t}(o.a.Component),se={setPage:T,setActiveTab:v,setScrollPositionByID:f,openPopout:C,closePopout:A,openModal:H},ue=Object(s.b)(function(e){return{activeTab:e.vkui.activeTab}},se)(le),pe=function(e){function t(e){var a;Object(V.a)(this,t),a=Object(D.a)(this,Object(I.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(L.v,{id:t},o.a.createElement(L.w,{left:o.a.createElement(L.x,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(L.l,null,o.a.createElement(L.j,null,o.a.createElement(L.k,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(L.p,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(L.p,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(L.k,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(L.e,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(L.e,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(L.g,{className:"buttons-group"},o.a.createElement(L.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(L.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),de={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:_},me=Object(s.b)(function(e){return{inputData:e.formData.forms}},de)(pe),he=a(39),be=a.n(he),ve=a(40),fe=a.n(ve),Oe=a(41),ye=a.n(Oe),Ee=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Realm of War",avatar:"https://sun9-72.userapi.com/c853520/v853520591/1f167d/avj_z9yFtQA.jpg?ava=1",desc:"\u041d\u0435\u043d\u0430\u0432\u0438\u0436\u0443 \u0441\u043f\u043e\u0439\u043b\u0435\u0440\u044b."}],je=function(e){function t(){return Object(V.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal,r=e.platform;return o.a.createElement(L.s,{id:t,header:o.a.createElement(L.t,{left:r!==L.n&&o.a.createElement(L.y,{onClick:a},o.a.createElement(fe.a,null)),right:r===L.n&&o.a.createElement(L.y,{onClick:a},o.a.createElement(be.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(L.q,null,Ee.map(function(e,t){return o.a.createElement(L.d,{key:t,description:e.desc,before:o.a.createElement(L.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(ye.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),ge={openModal:H},ke=Object(L.J)(Object(s.b)(null,ge)(je)),we=function(e){function t(){return Object(V.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.platform;return o.a.createElement(L.s,{id:t,header:o.a.createElement(L.t,{left:n!==L.n&&o.a.createElement(L.y,{onClick:a},o.a.createElement(fe.a,null)),right:n===L.n&&o.a.createElement(L.y,{onClick:a},o.a.createElement(be.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(L.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(L.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(L.q,null,o.a.createElement(L.d,null,o.a.createElement(L.o,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(L.d,null,o.a.createElement(L.o,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(L.d,null,o.a.createElement(L.o,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),Se=Object(L.J)(Object(s.b)()(we)),Pe=function(e){function t(e){var a;return Object(V.a)(this,t),(a=Object(D.a)(this,Object(I.a)(t).call(this,e))).lastAndroidBackAction=0,a.showsneg=0,a}return Object(x.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){return h.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),h.a.send("VKWebAppInit",{}).then(function(e){return e}).catch(function(e){return e})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activeModals,s=e.panelsHistory,u=e.colorScheme,p=void 0===s[c]?[c]:s[c],d=void 0===r[c]?null:r[c],m=void 0===l[c]?null:l[c],h=o.a.createElement(L.u,{activeModal:m},o.a.createElement(ke,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(Se,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}),o.a.createElement(L.r,{id:"news",onClose:function(){return n()},icon:o.a.createElement(G.a,null),header:"\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430!",actions:o.a.createElement(L.c,{size:"l",mode:"primary",onClick:function(){return n()}},"\u042f \u043f\u043e\u043d\u044f\u043b")}));return o.a.createElement(L.f,{transitionMotionEnabled:"false",isWebView:!0,scheme:u},o.a.createElement(L.h,{activeStory:i,tabbar:o.a.createElement(L.G,null,o.a.createElement(L.H,{onClick:function(){return a("home","base")},selected:"home"===i,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},o.a.createElement(z.a,null)),o.a.createElement(L.H,{onClick:function(){return a("work","base")},selected:"work"===i,text:"\u0414\u0417"},o.a.createElement(N.a,null)),o.a.createElement(L.H,{onClick:function(){return a("more","base")},selected:"more"===i,text:"\u0415\u0449\u0451"},o.a.createElement(F.a,null)))},o.a.createElement(L.C,{id:"home",activeView:c,popout:d},o.a.createElement(L.I,{id:"home",modal:h,activePanel:E("home"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(J,{id:"base",withoutEpic:!1}),o.a.createElement($,{id:"groups"}))),o.a.createElement(L.C,{id:"work",activeView:c,popout:d,withoutEpic:!1},o.a.createElement(L.I,{id:"work",modal:h,activePanel:E("work"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(ue,{id:"base"}))),o.a.createElement(L.C,{id:"more",activeView:c,popout:d,withoutEpic:!1},o.a.createElement(L.I,{id:"more",modal:h,activePanel:E("more"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(ie,{id:"base"})),o.a.createElement(L.I,{id:"modal",modal:h,activePanel:E("modal"),history:p,onSwipeBack:function(){return t()}},o.a.createElement(me,{id:"filters"})))))}}]),t}(o.a.Component);var Te=Object(s.b)(function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:P,goBack:_,closeModal:B},e))})(Pe);a.d(t,"store",function(){return _e});var _e=Object(i.createStore)(w,Object(S.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));_e.dispatch(P("home","base")),c.a.render(o.a.createElement(s.a,{transitionMotionEnabled:"false",store:_e},o.a.createElement(Te,null)),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.7bf66333.chunk.js.map