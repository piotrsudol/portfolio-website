(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(10),r=n.n(i),a=(n(17),n(18),n(19),"https://www.linkedin.com/in/piotrsudol95/"),o={experienceRef:null},l=(n(20),n(0));function j(){return Object(l.jsxs)("div",{className:"Navbar container-base",children:[Object(l.jsx)("div",{className:"logo",children:"Portfolio"}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)("button",{className:"button-fixedsize button--selected",onClick:function(){return o.experienceRef.current.scrollIntoView({behavior:"smooth"})},children:"Experience"}),Object(l.jsx)("button",{className:"button-fixedsize button--bordered",onClick:function(){return window.open(a)},children:"Hire me"})]})]})}n(22);function d(){return Object(l.jsxs)("div",{className:"Intro container-base",children:[Object(l.jsxs)("div",{className:"intro--leftside",children:[Object(l.jsx)("div",{className:"intro--welcome text--normal",children:"Hi I'm"}),Object(l.jsx)("div",{className:"intro--name bold",children:"Piotr Sudo\u0142"}),Object(l.jsx)("div",{className:"intro--description text--normal",children:"Full Stack Developer .Net/React"}),Object(l.jsxs)("button",{className:"linked-in",onClick:function(){return window.open(a)},children:[Object(l.jsx)("img",{className:"linked-in-icon",src:"./Icons/linkedin.png"})," "]})]}),Object(l.jsx)("div",{className:"intro--rightside",children:Object(l.jsx)("img",{className:"intro--picture",src:"./me2.png"})})]})}var m=n(11);n(9);function u(e){return e=e.experience,Object(l.jsxs)("div",{className:"experience--container experience-job-title-component",children:[Object(l.jsx)("img",{className:"img--center experience--logo",src:"./Icons/"+e.logo,alt:e.title}),Object(l.jsx)("div",{className:"experience--role text--center",children:e.position}),Object(l.jsx)("div",{className:"experience--time",children:e.workFrom+" - "+e.workTo})]})}function b(e){var t=e.width,n=e.height,c=e.iconName,s=e.className;return Object(l.jsx)("img",{className:s,src:"./Icons/"+c,style:{width:t,height:n}})}var p=n(2),h=n(3),v={csharp:"csharp.png",unity:"unity.webp",android:"android.webp",dotnet:"dotnet.png",javascript:"javascript.png",sass:"sass.png",aws:"aws.png",firebase:"firebase.png",react:"react.png",azure:"azure.png",hlsl:"hlsl.png",jenkins:"jenkins.png",mssql:"mssql.png"},x=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,null,[{key:"GetIcon",value:function(e){var t=v[e.toLowerCase()];return null!=t?t:e+".png"}}]),e}();function g(e){var t=e.project,n=t.techStack,c=e.isCurrent;return Object(l.jsxs)("div",{className:"job-project-card "+(c?"card-active":"card-inactive"),children:[Object(l.jsxs)("div",{className:"project-logo-container",children:[Object(l.jsx)("img",{className:"project-logo",src:"./Icons/"+t.logo,alt:t.name}),Object(l.jsx)("div",{className:"project-title text--center",children:t.type})]}),Object(l.jsx)("div",{className:"project-tech-stack",children:f(n)})]})}function f(e){return e.map((function(e,t){return Object(l.jsx)("div",{className:"tech-stack-icon-container",children:Object(l.jsx)(b,{className:"tech-stack-icon",width:"100%",height:"100%",iconName:x.GetIcon(e)})})}))}var O=[{title:"Unit4",logo:"unit4.png",workFrom:"12/2019",workTo:"now",position:"Junior Software Developer"},{title:"Picadilla",logo:"picadilla.jpg",workFrom:"11/2017",workTo:"12/2019",position:"Unity Developer"}],N={nrc:{title:"New Rock City",type:"City Builder on Facebook",logo:"nrc_logo.png",description:"2D City Builder",techStack:["unity","webgl","csharp","jenkins","facebook","aws"]},nrc2:{title:"New Rock City 2",type:"City Builder on Smartphones",logo:"nrc2.png",description:"2D City Builder",techStack:["unity","android","csharp","firebase","hlsl","jenkins"]},gts:{title:"Guess The Shape",type:"Mobile Game: Trivia",logo:"gts.png",description:"2D City Builder",techStack:["unity","csharp","android","aws","jenkins","googleplay"]},erp:{title:"U4ERP/Business World",type:"ERP made in .NET",logo:"unit4.png",techStack:["csharp","dotnet","javascript","azure","sql","jmeter"]},agresso:{title:"Unit4 Agresso",type:"ERP made in .NET",logo:"agresso.png",techStack:["csharp","dotnet","javascript","tfs","oracle","mssql"]}},k={picadilla:["Creating clean and testable codebase in C#","Developing tools for other departments","Code reviewing","Prototyping new projects and features","Creating shaders","Optimizing gameplay"],unitFour:["Using .Net features to develop Web App","Writing server side features in C#","Creating and Adjusting frontend in Javascript","Improving Automatic and Unit tests coverage of backend and frontend","Improving Performances of features and new solutions","Writing performance tests in JMeter","Working with Azure, MS SQL, Oracle"]},w=n(7),y=n(6),C=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.job;return Object(l.jsx)("div",{className:"job-skill-container",children:e.map((function(e,t){return Object(l.jsxs)("div",{className:"job-skill-text-container",children:[Object(l.jsx)("div",{className:"job-skill-text-point",children:"# "}),Object(l.jsx)("div",{className:"job-skill-text",children:e})]})}))})}}]),n}(c.Component),S=n(12);function I(e){var t=e.projectsAmount,n=e.current;return Object(l.jsx)("div",{className:"projects-navigation",children:Object(S.a)(Array(t)).map((function(e,t){return Object(l.jsx)("div",{className:"navigation-dot "+(n==t?"selected-dot":"normal-dot")})}))})}var A=[{job:O[0],leftContainer:"white-container",rightContainer:"black-container",skills:k.unitFour,projects:[N.erp,N.agresso]},{job:O[1],leftContainer:"black-container",rightContainer:"white-container",skills:k.picadilla,projects:[N.nrc2,N.nrc,N.gts]}];function R(e){var t=e.job,n=Object(c.useState)(0),s=Object(m.a)(n,2),i=s[0],r=s[1];function a(){var e,n,c=(e=i,n=t.projects.length,e+1===n?0:e+1);console.log(c+" "+t.projects.length),r(c)}return Object(c.useEffect)((function(){var e=setInterval((function(){a()}),4e3);return function(){clearInterval(e)}}),[i]),Object(l.jsxs)("div",{className:"job inline-container",children:[Object(l.jsxs)("div",{className:"half-container job-description "+t.leftContainer,children:[Object(l.jsx)(u,{experience:t.job}),Object(l.jsx)(C,{job:t.skills})]}),Object(l.jsxs)("div",{className:"half-container "+t.rightContainer,children:[Object(l.jsx)("div",{className:"job-projects-container",onClick:function(){return a()},children:t.projects.map((function(e,t){return Object(l.jsx)(g,{project:e,isCurrent:i===t})}))}),Object(l.jsx)(I,{projectsAmount:t.projects.length,current:i})]})]})}function E(){return o.experienceRef=Object(c.useRef)(null),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"container-base",children:[Object(l.jsx)("div",{ref:o.experienceRef,className:"text--category",children:"Experience"}),Object(l.jsx)(R,{job:A[0]}),Object(l.jsx)(R,{job:A[1]})]}),Object(l.jsx)("script",{src:"",children:"new Carousel();"})]})}n(23);var P={main:[{name:"Unity",years:">2",level:5},{name:"csharp",years:"almost 4",level:5},{name:"javascript",years:"1.5",level:4},{name:"SQL",years:"1.5",level:5},{name:"dotnet",years:"1,5",level:4},{name:"React",years:"0,5",level:3}],other:["hlsl","Azure","Firebase","AWS","MSSql","Oracle","Jenkins","Android","googlePlay","cplusplus","jira","tfs","ruby","facebook","webgl","jmeter"]};function T(){return Object(l.jsxs)("div",{className:"container-base skills-component",children:[Object(l.jsx)("div",{className:"text--center text--category",children:"Technologies"}),Object(l.jsx)("div",{className:"main-skill-container",children:P.main.map((function(e,t){return Object(l.jsx)(F,{className:"skill",skill:e})}))}),Object(l.jsx)("div",{className:"text--center"}),P.other.map((function(e,t){return Object(l.jsx)(z,{className:"skill-minor",name:e})}))]})}function F(e){for(var t=e.skill,n=e.className,c=t.name,s=t.years,i=t.level,r=[],a=0;a<6;a++)r.push(Object(l.jsx)("div",{className:i<=a?" level-on":"level-off"}));return Object(l.jsxs)("div",{className:n,children:[Object(l.jsx)("img",{className:"main-skill-icon",src:"./Icons/"+x.GetIcon(c),alt:""}),Object(l.jsxs)("div",{className:"main-skill-level",children:[Object(l.jsxs)("div",{className:"main-skill-exp",children:["experience: ",s," years"]}),Object(l.jsx)("div",{className:"level-meter",children:r})]})]})}function z(e){var t=e.name,n=e.className;return Object(l.jsx)("div",{className:n,children:Object(l.jsx)("div",{className:"minor-skill-container",children:Object(l.jsx)("img",{src:"./Icons/"+x.GetIcon(t),alt:t.toLowerCase(),className:"minor-skill"})})})}n(24);function D(){return Object(l.jsxs)("div",{className:"container-base",children:[Object(l.jsxs)("div",{className:"footer-test",children:["Website projected and made by Piotr Sudol, used Technologies:",Object(l.jsx)(b,{className:"footer-icon",iconName:"react.png",width:"2rem",height:"2rem"}),"and",Object(l.jsx)(b,{className:"footer-icon",iconName:"sass.png",width:"2rem",height:"2rem"})]}),Object(l.jsx)("div",{className:"text--center",children:"API used from: freecodecamp.org and codewars.com"})]})}n(25);var B=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={freeCodeCampScore:0},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.freecodecamp.org/api/users/get-public-profile?username=sdx95",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({freeCodeCampScore:t.entities.user.sdx95.points})}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container-base overtime",children:[Object(l.jsx)("div",{className:"text--category",children:"Free time"}),Object(l.jsxs)("div",{className:"overtime-website-container",children:[Object(l.jsx)("img",{className:"website-icon",src:"Icons/codewars.png",alt:""}),Object(l.jsx)("img",{src:"https://www.codewars.com/users/Sudix95/badges/large",alt:""})]}),Object(l.jsxs)("div",{className:"overtime-website-container",children:[Object(l.jsx)("img",{className:"website-icon",src:"Icons/freecodecamp.png",alt:""}),Object(l.jsxs)("div",{className:"website-score",children:["SCORE: ",this.state.freeCodeCampScore]})]})]})}}]),n}(c.Component);var G=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{}),Object(l.jsx)(T,{}),Object(l.jsx)(E,{}),Object(l.jsx)(B,{}),Object(l.jsx)(D,{})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0928a79e.chunk.js.map