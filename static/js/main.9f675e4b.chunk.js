(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/default.bf4bf18c.png"},,function(e,t,a){e.exports=a.p+"static/media/bg.e9d90b10.jpg"},function(e,t,a){e.exports=a.p+"static/media/default.bf4bf18c.png"},function(e,t,a){e.exports=a.p+"static/media/cat1.59c59bf1.png"},function(e,t,a){e.exports=a.p+"static/media/cat2.e2a80f61.png"},function(e,t,a){e.exports=a.p+"static/media/cat3.7636f720.png"},function(e,t,a){e.exports=a.p+"static/media/cat4.8a14f460.png"},function(e,t,a){e.exports=a.p+"static/media/cat5.8d493eee.png"},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),i=(a(21),a(1)),o=a(2),l=a(3),m=a(4),u=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleClick=function(t){t.preventDefault(),e.props.game(1)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"login text-center"},r.a.createElement("h1",null,"Three games to rule them all",r.a.createElement("br",null),r.a.createElement("small",null,"(.. or atleast some presents)")),r.a.createElement("button",{onClick:this.handleClick,className:"btn go-button"},"Let the journey begin")))}},{key:"componentDidMount",value:function(){setTimeout((function(){document.querySelector(".login").classList.add("loaded")}),2e3)}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.newGame(!1)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"end-game"},r.a.createElement("div",{className:"message"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},"Go Again")))}}]),a}(r.a.Component),h=a(6),p=a(8),f=a.n(p),v=a(9),g=a.n(v),b=a(10),E=a.n(b),w=a(11),k=a.n(w),y=a(12),j=a.n(y),N=a(13),O=a.n(N),q=a(7),L=a.n(q),S=[{name:"Luffy",pic:f.a,flipped:!1},{name:"Sanji",pic:g.a,flipped:!1},{name:"Usopp",pic:E.a,flipped:!1},{name:"Zorro",pic:k.a,flipped:!1},{name:"Nami",pic:j.a,flipped:!1},{name:"Brooks",pic:O.a,flipped:!1},{name:"Luffy",pic:f.a,flipped:!1},{name:"Sanji",pic:g.a,flipped:!1},{name:"Usopp",pic:E.a,flipped:!1},{name:"Zorro",pic:k.a,flipped:!1},{name:"Nami",pic:j.a,flipped:!1},{name:"Brooks",pic:O.a,flipped:!1}],A=(L.a,function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar mb-2"},r.a.createElement("div",{className:"game-title"},this.props.title),r.a.createElement("div",{className:"right-score"},this.props.currentScore,"/",this.props.maxScore))}},{key:"componentDidUpdate",value:function(){console.log("asdf")}}]),a}(r.a.Component)),C=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).characters=[],n.handleClick=function(e){var t=e.currentTarget;if("found"!==t.getAttribute("check")&&"true"!==t.getAttribute("check")){if(t!==n.characters[0]?(n.switch(t),n.characters.push(t)):(n.switch(t),n.characters=[]),2===n.characters.length)if(n.checkName(n.characters[0],n.characters[1]))n.setState({score:n.state.score+1}),n.characters.shift(),n.characters.shift();else{var a=Object(h.a)(n);setTimeout((function(){a.switch(a.characters[0]),a.switch(a.characters[1]),a.characters.shift(),a.characters.shift()}),800)}if(document.getElementsByClassName("image-blank").length<1){n.props.game(n.props.game);for(var r=document.getElementsByClassName("image"),s=0;s<r.length;s++)r[s].classList.add("image-blank"),r[s].setAttribute("check","false"),n.characters=[]}}},n.checkName=function(e,t){return e.getAttribute("name")===t.getAttribute("name")&&(e.setAttribute("check","found"),t.setAttribute("check","found"),!0)},n.switch=function(e){"true"===e.getAttribute("check")?(e.setAttribute("check","false"),e.classList.add("image-blank")):(e.setAttribute("check","true"),e.classList.remove("image-blank"))},n.state={score:0,loaded:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return"object"===typeof this.state.images?r.a.createElement("div",{className:"images"},r.a.createElement(A,{title:"Play some memory!",currentScore:this.state.score,maxScore:S.length/2}),r.a.createElement("div",{className:"image-wrapper"},this.state.images.map((function(t){return r.a.createElement("div",{className:"image image-blank",name:t.name,check:"false",onClick:e.handleClick},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("img",{alt:"",src:t.pic})),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("img",{alt:"",src:L.a}))))})))):r.a.createElement("div",null)}},{key:"componentDidMount",value:function(){var e=S.sort((function(){return Math.random()-.5}));this.setState({images:e,loaded:!0})}}]),a}(r.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"memory"},r.a.createElement(C,{game:this.props.game}))}}]),a}(r.a.Component),T=[{question:"L\xf6sung ist asdf",correct_answer:"asdf",answers:["Test","Test2","Test3","asdf"]},{question:"L\xf6sung ist asdf",correct_answer:"asdf",answers:["Test","Test2","Test3","asdf"]},{question:"L\xf6sung ist asdf",correct_answer:"asdf",answers:["Test","Test2","Test3","asdf"]},{question:"L\xf6sung ist asdf",correct_answer:"asdf",answers:["Test","Test2","Test3","asdf"]},{question:"L\xf6sung ist asdf",correct_answer:"asdf",answers:["Test","Test2","Test3","asdf"]}],M=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=Object(h.a)(n),a=e.currentTarget;a.getAttribute("question")===n.state.question.correct_answer?(a.classList.add("right-answer"),n.score=n.score+1):a.classList.add("false-answer"),console.log(n.score),n.score<3?setTimeout((function(){t.setState({newQuestion:!0})}),1500):n.props.game(n.props.game)},n.state={question:"",data:[],newQuestion:!1},n.score=0,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=["a","b","c","d"],a=0;return"object"===typeof this.state.question?r.a.createElement("div",{className:"questions container-fluid"},r.a.createElement("div",{className:""},r.a.createElement(A,{title:"Answer some questions",currentScore:this.score,maxScore:"3"})),r.a.createElement("div",{className:"question text-center"},this.state.question.question),r.a.createElement("div",{className:"row"},this.state.question.answers.sort((function(){return Math.random()-.5})).map((function(n){return r.a.createElement("div",{className:"select-answer col-6 mb-4",onClick:e.handleClick,question:n},r.a.createElement("div",{className:"answer-content"},t[a++],".) ",n))})))):r.a.createElement("div",null)}},{key:"componentDidUpdate",value:function(){if(this.state.newQuestion){document.querySelectorAll(".false-answer").forEach((function(e){e.classList.remove("false-answer")})),document.querySelectorAll(".right-answer").forEach((function(e){e.classList.remove("right-answer")}));var e=Math.floor(Math.random()*this.state.data.length),t=this.state.data[e];this.state.data.splice(e,1),this.setState({question:t,data:this.state.data,newQuestion:!1})}}},{key:"componentDidMount",value:function(){var e=Math.floor(Math.random()*T.length),t=T[e];T.splice(e,1),this.setState({question:t,data:T})}}]),a}(r.a.Component),B=a(5),G=a.n(B),I=[{word:"cat",images:[G.a,G.a,G.a,G.a]},{word:"cat",images:[G.a,G.a,G.a,G.a]}],D=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).createPlaceholder=function(){for(var e=[],t=0;t<n.props.answer.length;t++)e.push(r.a.createElement("div",{className:"selected-solution mt-5"},r.a.createElement("span",null,n.props.selected[t])));return e},n.state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col mt-2"},r.a.createElement("div",{className:"solution-wrapper"},this.createPlaceholder())))}}]),a}(r.a.Component),Q=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=Object(h.a)(n),a=e.currentTarget;if("true"!==a.getAttribute("clicked")){a.classList.add("clicked"),a.setAttribute("clicked",!0),document.getElementById("retry").classList.add("active");var r=a.getAttribute("letter"),s=[],c=!1,i=!1;if(n.state.selected.map((function(e){e?s.push(e):c?(s.push(""),i=!0):(s.push(r),c=!0)})),n.setState({selected:s}),!i)s.join("")===n.state.question.word?(n.score=n.score+1,document.getElementById("correct").classList.add("active"),n.score<n.maxscore?setTimeout((function(){t.setState({newQuestion:!0})}),1500):n.props.game(n.props.game)):document.getElementById("error").classList.add("active")}},n.handleRetry=function(e){document.querySelectorAll(".clicked").forEach((function(e){e.classList.remove("clicked"),e.setAttribute("clicked",!1)})),document.getElementById("correct").classList.remove("active"),document.getElementById("error").classList.remove("active"),document.getElementById("retry").classList.remove("active");for(var t=[],a=0;a<n.state.question.word.length;a++)t.push("");n.setState({selected:t})},n.state={question:"",data:[],newQuestion:!1},n.score=0,n.maxscore=2,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return"object"===typeof this.state.question?r.a.createElement("div",{className:"common container-fluid"},r.a.createElement("div",{className:""},r.a.createElement(A,{title:"Find the meaning",currentScore:this.score,maxScore:this.maxscore})),r.a.createElement("div",{className:"question text-center"},this.state.question.images.sort((function(){return Math.random()-.5})).map((function(e){return r.a.createElement("img",{alt:"",src:e})}))),r.a.createElement(D,{answer:this.state.question.word,selected:this.state.selected}),r.a.createElement("div",{className:"end-wrapper text-center"},r.a.createElement("span",{className:"correct",id:"correct"},r.a.createElement("small",null,"Correct!")),r.a.createElement("span",{className:"error",id:"error"},r.a.createElement("small",null,"Incorrect, try again!"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"letter-box"},this.state.question.letters.map((function(t){return r.a.createElement("div",{className:"letter",onClick:e.handleClick,letter:t},t)})))),r.a.createElement("span",{className:"retry",id:"retry",onClick:this.handleRetry},"retry"))):r.a.createElement("div",null)}},{key:"componentDidUpdate",value:function(){if(this.state.newQuestion){document.querySelectorAll(".clicked").forEach((function(e){e.classList.remove("clicked"),e.setAttribute("clicked",!1)})),document.getElementById("retry").classList.remove("active"),document.getElementById("correct").classList.remove("active"),document.getElementById("error").classList.remove("active");for(var e=Math.floor(Math.random()*this.state.data.length),t=this.state.data[e],a="",n=12-t.word.length,r="abcdefghijklmnopqrstuvwxyz".length,s=0;s<n;s++)a+="abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*r));this.state.data.splice(e,1),t.letters=a+t.word,t.letters=t.letters.split("").sort((function(){return Math.random()-.5}));for(var c=[],i=0;i<t.word.length;i++)c.push("");this.setState({question:t,data:this.state.data,newQuestion:!1,selected:c})}}},{key:"componentDidMount",value:function(){for(var e=Math.floor(Math.random()*I.length),t=I[e],a="",n=12-t.word.length,r="abcdefghijklmnopqrstuvwxyz".length,s=0;s<n;s++)a+="abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*r));I.splice(e,1),t.letters=a+t.word,t.letters=t.letters.split("").sort((function(){return Math.random()-.5}));for(var c=[],i=0;i<t.word.length;i++)c.push("");this.setState({question:t,data:I,selected:c})}}]),a}(r.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showLogin:!0,showGame:0,name:"",score:0},e.updateGame=function(t){e.setState({showGame:e.state.showGame+1})},e.handleLogin=function(t,a){e.setState({name:t,showLogin:a})},e.handleEndGame=function(t){t?e.setState({showEndGame:t,score:e.state.score+1}):e.setState({showEndGame:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showGame;e.name,e.score;return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"bg"}),r.a.createElement("div",{className:"main"},0===t?r.a.createElement(u,{game:this.updateGame}):null,1===t?r.a.createElement(x,{game:this.updateGame}):null,3===t?r.a.createElement(M,{game:this.updateGame}):null,2===t?r.a.createElement(Q,{game:this.updateGame}):null,4===t?r.a.createElement(d,{newgame:this.handleEndGame}):null))}}]),a}(r.a.Component);a(22),a(23),a(24);var U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.9f675e4b.chunk.js.map