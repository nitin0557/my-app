(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(13),a(1));a(15);var s=function(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg)};function m(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link","aria-current":"page",href:"#"},"Home"))),r.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},value:l,id:"myBox ",rows:"8"})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=l.toUpperCase();c(t),e.showAlert("uppercase","success")}},"Convert to Upper Case "),r.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var t=l.toLowerCase();c(t),e.showAlert("lowercase","success")}},"Convert to Lower Case "),r.a.createElement("button",{className:"btn btn-primary mx-0",onClick:function(){c(""),e.showAlert("Reset","success")}},"Clear "),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(l.replace(/(^\w|\s\w)/g,function(e){return e.toUpperCase()})),e.showAlert("Capitalized","success")}},"Auto Capitalize "),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){navigator.clipboard.writeText(l),e.showAlert("Copied to Clipboard","success")}},"Copy Text "),r.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=l.split(/[ ]+/);c(t.join(" ")),e.showAlert("Removed Extra Spaces","success")}},"Remove Extra Spaces ")),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Text Summary"),r.a.createElement("p",null,l.split(" ").filter(function(e){return 0!==e.length}).length," words and ",l.length," characters"),r.a.createElement("p",null,.008*l.split(" ").length," minutes to read "),r.a.createElement("h1",null,"PREVIEW"),r.a.createElement("p",null,l.length>0?l:"Enter something in the the text box ")))}m.defaultProps={title:"Set title here",aboutText:"About"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"My App",mode:a,toggleMode:function(){"light"===a?(l("dark"),document.body.style.backgroundColor="grey",p("Dark mode enabled","success")):(l("light"),document.body.style.backgroundColor="white",p("light mode enabled","success"))}}),r.a.createElement(s,{alert:d}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(i,{showAlert:p,heading:"Enter your text here",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.28803461.chunk.js.map