(this["webpackJsonphoney-rae-repairs"]=this["webpackJsonphoney-rae-repairs"]||[]).push([[0],{17:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(18),i=c.n(r),o=(c(24),c(3)),a=c(2),l=c(0),j=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){console.log("Initial useEffect"),fetch("http://localhost:8088/customers").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(n.useEffect)((function(){console.log("Customers state changed",c),1===c.length?j("You have 1 customer"):j("You have ".concat(c.length," customers"))}),[c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:o}),c.slice(0,5).map((function(e){return Object(l.jsx)("p",{children:e.name},"customer--".concat(e.id))}))]})},u=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(o.g)().employeeId;return Object(n.useEffect)((function(){fetch("http://localhost:8088/employees/".concat(r)).then((function(e){return e.json()})).then(s)}),[r]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"employee",children:[Object(l.jsx)("h3",{className:"employee__name",children:c.name}),Object(l.jsxs)("div",{className:"employee__specialty",children:["Specialty is ",c.specialty]})]})})},h=c(9),d=function(){var e=Object(n.useState)({name:"",specialty:""}),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(o.f)();return Object(l.jsxs)("form",{children:[Object(l.jsx)("h2",{children:"New Employee"}),Object(l.jsx)("fieldset",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{onChange:function(e){var t=Object(h.a)({},c);t.name=e.target.value,s(t)},required:!0,autoFocus:!0,type:"text",className:"form-control",placeholder:"Full name"})]})}),Object(l.jsx)("fieldset",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"specialty",children:"Specialty:"}),Object(l.jsx)("input",{onChange:function(e){var t=Object(h.a)({},c);t.specialty=e.target.value,s(t)},required:!0,autoFocus:!0,type:"text",className:"form-control",placeholder:"Technical specialty"})]})}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c.name,specialty:c.specialty})};return fetch("http://localhost:8088/employees",t).then((function(){r.push("/employees")}))},className:"btn btn-primary",children:"Hire Employee"})]})},b=c(4),m=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),j=i[0],u=i[1],h=Object(o.f)();return Object(n.useEffect)((function(){fetch("http://localhost:8088/employees").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(n.useEffect)((function(){var e=c.map((function(e){return e.specialty}));u(e.join(", "))}),[c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return h.push("/employees/create")},children:"Hire Employee"})}),Object(l.jsxs)("div",{children:["Specialties: ",j]}),c.map((function(e){return Object(l.jsx)(b.b,{to:"employees/".concat(e.id),children:Object(l.jsx)("p",{children:e.name})},"employee--".concat(e.id))}))]})},O=function(){var e,t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),j=Object(a.a)(i,2),u=j[0],h=j[1],d=Object(o.g)().ticketId,b=function(){return fetch("http://localhost:8088/serviceTickets/".concat(d,"?_expand=customer&_expand=employee")).then((function(e){return e.json()})).then(r)};Object(n.useEffect)((function(){b()}),[d]),Object(n.useEffect)((function(){fetch("http://localhost:8088/employees").then((function(e){return e.json()})).then(h)}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"ticket",children:[Object(l.jsx)("h3",{className:"ticket__description",children:s.description}),Object(l.jsxs)("div",{className:"ticket__customer",children:["Submitted by ",null===(e=s.customer)||void 0===e?void 0:e.name]}),Object(l.jsxs)("div",{className:"ticket__employee",children:["Assigned to",Object(l.jsx)("select",{value:s.employeeId,onChange:function(e){var t={customerId:s.customerId,employeeId:parseInt(e.target.value),description:s.description,emergency:s.emergency,dateCompleted:(new Date).toLocaleDateString("en-US")};fetch("http://localhost:8088/serviceTickets/".concat(d),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){b()}))},children:u.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},"employee--".concat(e.id))}))})]})]})})},p=function(){var e=Object(n.useState)({description:"",emergency:!1}),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(o.f)();return Object(l.jsxs)("form",{className:"ticketForm",children:[Object(l.jsx)("h2",{className:"ticketForm__title",children:"New Service Ticket"}),Object(l.jsx)("fieldset",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(l.jsx)("input",{onChange:function(e){var t=Object(h.a)({},c);t.description=e.target.value,s(t)},required:!0,autoFocus:!0,type:"text",id:"description",className:"form-control",placeholder:"Brief description of problem"})]})}),Object(l.jsx)("fieldset",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Emergency:"}),Object(l.jsx)("input",{onChange:function(e){var t=Object(h.a)({},c);t.emergency=e.target.checked,s(t)},type:"checkbox"})]})}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault();var t={description:c.description,emergency:c.emergency,customerId:parseInt(localStorage.getItem("honey_customer")),employeeId:1,dateCompleted:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch("http://localhost:8088/serviceTickets",n).then((function(){r.push("/tickets")}))},className:"btn btn-primary",children:"Submit Ticket"})]})},f=(c(31),function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),j=i[0],u=i[1],h=Object(o.f)();return Object(n.useEffect)((function(){fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(n.useEffect)((function(){var e=c.filter((function(e){return""===e.dateCompleted})).length;u("There are ".concat(e," open tickets"))}),[c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return h.push("/tickets/create")},children:"Create Ticket"})}),j,c.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"ticket ".concat(e.emergency?"emergency":""),children:[e.emergency?"\ud83d\ude91":""," ",Object(l.jsx)(b.b,{to:"/tickets/".concat(e.id),children:e.description})," submitted by ",e.customer.name," and worked on by ",e.employee.name]})},"ticket--".concat(e.id))}))]})}),x=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/customers",children:Object(l.jsx)(j,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/tickets",children:Object(l.jsx)(f,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/tickets/:ticketId(\\d+)",children:Object(l.jsx)(O,{})}),Object(l.jsx)(o.b,{path:"/tickets/create",children:Object(l.jsx)(p,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/employees",children:Object(l.jsx)(m,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/employees/:employeeId(\\d+)",children:Object(l.jsx)(u,{})}),Object(l.jsx)(o.b,{path:"/employees/create",children:Object(l.jsx)(d,{})})]})},y=(c(32),function(){return Object(l.jsxs)("ul",{className:"navbar",children:[Object(l.jsx)("li",{className:"navbar__item active",children:Object(l.jsx)(b.b,{className:"navbar__link",to:"/employees",children:"Employees"})}),Object(l.jsx)("li",{className:"navbar__item",children:Object(l.jsx)(b.b,{className:"navbar__link",to:"/customers",children:"Customers"})}),Object(l.jsx)("li",{className:"navbar__item",children:Object(l.jsx)(b.b,{className:"navbar__link",to:"/tickets",children:"Service Tickets"})}),Object(l.jsx)("li",{className:"navbar__item",children:Object(l.jsx)(b.b,{className:"navbar__link",to:"#",onClick:function(){localStorage.removeItem("honey_customer")},children:"Logout"})})]})}),g=(c(17),function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useRef)(),i=Object(o.f)();return Object(l.jsxs)("main",{className:"container--login",children:[Object(l.jsxs)("dialog",{className:"dialog dialog--auth",ref:r,children:[Object(l.jsx)("div",{children:"User does not exist"}),Object(l.jsx)("button",{className:"button--close",onClick:function(e){return r.current.close()},children:"Close"})]}),Object(l.jsx)("section",{children:Object(l.jsxs)("form",{className:"form--login",onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8088/customers?email=".concat(c)).then((function(e){return e.json()})).then((function(e){return!!e.length&&e[0]})).then((function(e){e?(localStorage.setItem("honey_customer",e.id),i.push("/")):r.current.showModal()}))},children:[Object(l.jsx)("h1",{children:"Honey Rae's Repairs"}),Object(l.jsx)("h2",{children:"Please sign in"}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{htmlFor:"inputEmail",children:" Email address "}),Object(l.jsx)("input",{type:"email",onChange:function(e){return s(e.target.value)},className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0})]}),Object(l.jsx)("fieldset",{children:Object(l.jsx)("button",{type:"submit",children:"Sign in"})})]})}),Object(l.jsx)("section",{className:"link--register",children:Object(l.jsx)(b.b,{to:"/register",children:"Not a member yet?"})})]})}),v=function(e){var t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useRef)(),j=Object(o.f)(),u=function(e){var t=Object(h.a)({},s);t[e.target.id]=e.target.value,r(t)};return Object(l.jsxs)("main",{style:{textAlign:"center"},children:[Object(l.jsxs)("dialog",{className:"dialog dialog--password",ref:i,children:[Object(l.jsx)("div",{children:"Account with that email address already exists"}),Object(l.jsx)("button",{className:"button--close",onClick:function(e){return i.current.close()},children:"Close"})]}),Object(l.jsxs)("form",{className:"form--login",onSubmit:function(e){e.preventDefault(),fetch("http://localhost:8088/customers?email=".concat(s.email)).then((function(e){return e.json()})).then((function(e){return!!e.length})).then((function(e){e?i.current.showModal():fetch("http://localhost:8088/customers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("id")&&(localStorage.setItem("honey_customer",e.id),j.push("/"))}))}))},children:[Object(l.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please Register for Honey Rae's Repairs"}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{htmlFor:"name",children:" Full Name "}),Object(l.jsx)("input",{onChange:u,type:"text",id:"name",className:"form-control",placeholder:"Enter your name",required:!0,autoFocus:!0})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{htmlFor:"address",children:" Address "}),Object(l.jsx)("input",{onChange:u,type:"text",id:"address",className:"form-control",placeholder:"Street address",required:!0})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{htmlFor:"email",children:" Email address "}),Object(l.jsx)("input",{onChange:u,type:"email",id:"email",className:"form-control",placeholder:"Email address",required:!0})]}),Object(l.jsx)("fieldset",{children:Object(l.jsx)("button",{type:"submit",children:" Register "})})]})]})},N=(c(33),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{render:function(){return localStorage.getItem("honey_customer")?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(x,{})]}):Object(l.jsx)(o.a,{to:"/login"})}}),Object(l.jsx)(o.b,{path:"/login",children:Object(l.jsx)(g,{})}),Object(l.jsx)(o.b,{path:"/register",children:Object(l.jsx)(v,{})})]})}),k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b.a,{children:Object(l.jsx)(N,{})})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.2507442e.chunk.js.map