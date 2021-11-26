(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),l=c(16),r=c.n(l),o=(c(22),c(3)),a=(c.p,c(23),c(17)),i=c.n(a),j=(c(24),c(0)),d=function(){return Object(j.jsx)("div",{className:"vh-100 bg-dark",children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(i.a,{type:"bars",color:"#03fc4e",height:100,width:100})})})},u=c(7),b=c.n(u),m=(c(44),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],l=t[1],r=Object(n.useState)(),a=Object(o.a)(r,2),i=a[0],d=a[1],u=Object(n.useState)(),m=Object(o.a)(u,2),h=m[0],O=m[1],f=Object(n.useState)(),p=Object(o.a)(f,2),x=p[0],v=p[1],g=Object(n.useState)(""),E=Object(o.a)(g,2),y=E[0],S=E[1],C=Object(n.useState)(""),P=Object(o.a)(C,2),w=P[0],B=P[1];Object(n.useEffect)((function(){b.a.get("/get_location_names").then((function(e){l(e.data.locations),console.log(c)}))}),[]);return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("div",{class:"overlay",children:Object(j.jsx)("h1",{children:"House Price Prediction"})})}),Object(j.jsx)("div",{class:"container pt-2",children:Object(j.jsx)("form",{method:"post",onSubmit:function(e){if(e.preventDefault(),x>h+2||0==h||0==x||0==i||"--Select Location--"===y)return document.getElementById("err").style.display="flex",void alert("Please Enter Correct Details!!!");b.a.post("/predict_home_price",{location:y,bhk:h,bath:x,total_sqft:i}).then((function(e){if(console.log(e.data.estimated_price),parseFloat(e.data.estimated_price)<0)return document.getElementById("err").style.display="flex",void alert("Please Enter Correct Details!!!");B(e.data.estimated_price+" LAC")}))},children:Object(j.jsxs)("div",{class:"content text-center",children:[Object(j.jsxs)("div",{class:"form-group row m-2",children:[Object(j.jsx)("label",{for:"inputEmail3",class:"tm col-sm-2 col-form-label",children:"Total sqft "}),Object(j.jsx)("div",{class:"col-sm-10",children:Object(j.jsx)("input",{value:i,onChange:function(e){return d(e.target.value)},type:"number",class:"form-control",id:"inputEmail3",placeholder:"Enter the area"})})]}),Object(j.jsxs)("div",{class:"form-group row m-2",children:[Object(j.jsx)("label",{for:"inputEmail3",class:"tm col-sm-2 col-form-label",children:"Bedroom "}),Object(j.jsx)("div",{class:"col-sm-10",children:Object(j.jsx)("input",{value:h,onChange:function(e){return O(e.target.value)},type:"number",class:"form-control",id:"inputEmail3",placeholder:"Number of Bedrooms"})})]}),Object(j.jsxs)("div",{class:"form-group row m-2",children:[Object(j.jsx)("label",{for:"inputEmail3",class:"tm col-sm-2 col-form-label",children:"Bathroom"}),Object(j.jsx)("div",{class:"col-sm-10",children:Object(j.jsx)("input",{value:x,onChange:function(e){return v(e.target.value)},type:"number",class:"form-control",id:"inputEmail3",placeholder:"Number of Bathrooms"})})]}),Object(j.jsxs)("div",{class:"form-group row m-2",children:[Object(j.jsx)("label",{for:"inputEmail3",class:"tm col-sm-2 col-form-label",children:"Location"}),Object(j.jsx)("div",{class:"col-sm-10",children:Object(j.jsxs)("select",{value:y,onChange:function(e){S(e.target.value)},class:"w-100 h-100 rounded",id:"exampleFormControlSelect1",children:[Object(j.jsx)("option",{selected:"selected",value:"--Select Location--",children:"--Select Location--"}),c.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e})}))]})})]}),Object(j.jsxs)("h7",{id:"err",children:[Object(j.jsx)("strong",{style:{color:"red"},children:"**"}),"Please enter correct details and make sure to select the location"]}),Object(j.jsx)("button",{id:"submitbtn",type:"submit",class:"button-72 m-2 mx-auto",role:"button",children:"Predict"})]})})}),Object(j.jsxs)("div",{class:"est s1 pt-2",children:[Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("strong",{children:" Estimated Price : "})," "]})," ",Object(j.jsxs)("strong",{children:[w,"  "]})]})]})});var h=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),5e3)})),Object(j.jsx)("div",{className:"App",children:c?Object(j.jsx)(d,{}):Object(j.jsx)(m,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),l(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.3f321908.chunk.js.map