(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,a,t){},34:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),s=t.n(r),i=t(23),c=t.n(i),o=(t(33),t(15)),l=t(13),d=t(24),j=t(25),h=(t(34),t(35),t(16)),x=t(27),b=t(6),p=t(10),u=t(7),O=t(19),y=t(11),f=t(26),m=t.n(f),g=function(){function e(a){Object(d.a)(this,e),void 0===a.force?(this.id=a.id,this.module=0,this.angle=0,this.posX=0,this.posY=0,this.fx=0,this.fy=0,this.moment=0,this.info={x0:{x:0,y:0},y0:{x:0,y:0}},this.distance=0):(this.id=a.force.id,this.module=a.force.module,this.angle=a.force.angle,this.posX=a.force.posX,this.posY=a.force.posY,this.fx=a.force.fx,this.fy=a.force.fy,this.moment=a.force.moment,this.info={x0:{x:a.force.info.x0.x,y:a.force.info.x0.y},y0:{x:a.force.info.y0.x,y:a.force.info.y0.y}},this.distance=a.force.d)}return Object(j.a)(e,[{key:"Calcul",value:function(){this.angle%90===0&&this.angle%180!==0?this.fx=0:this.fx=this.module*Math.cos(this.angle*(Math.PI/180)),this.angle%180===0?this.fy=0:this.fy=this.module*Math.sin(this.angle*(Math.PI/180)),this.moment=0,this.fx>0&&this.posY<0||this.fx<0&&this.posY>0?this.moment+=Math.abs(this.fx*this.posY):this.moment-=Math.abs(this.fx*this.posY),this.fy>0&&this.posX>0||this.fy<0&&this.posX<0?this.moment+=Math.abs(this.fy*this.posX):this.moment-=Math.abs(this.fy*this.posX)}}]),e}();function v(e){function a(a){switch(a.target.name){case"module":e.force.module=a.target.value;break;case"angle":e.force.angle=a.target.value;break;case"posX":e.force.posX=a.target.value;break;case"posY":e.force.posY=a.target.value;break;case"id":e.force.id=a.target.value;break;default:return}e.force.Calcul(),e.update()}function t(a){switch(a.target.name){case"delete":e.remove(e.force);break;case"clone":e.clone(e.force);break;default:return}}return Object(n.jsxs)(h.a,{border:"primary",style:{maxWidth:"18rem",minWidth:"18rem"},children:[Object(n.jsx)(h.a.Header,{children:Object(n.jsx)(b.a,{className:"col-12 mx-auto",children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"Nom"}),Object(n.jsx)(p.a,{type:"text",name:"id","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.force.id,onChange:a,readOnly:e.readOnly})]})})}),Object(n.jsx)(h.a.Body,{children:Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(u.a.Group,{children:[Object(n.jsx)(u.a.Label,{children:"Module"}),Object(n.jsx)(p.a,{type:"text",name:"module","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.readOnly?parseFloat(e.force.module).toPrecision(4):e.force.module,onChange:a,readOnly:e.readOnly})]}),Object(n.jsxs)(u.a.Group,{children:[Object(n.jsx)(u.a.Label,{children:"Angle"}),Object(n.jsx)(p.a,{type:"text",name:"angle","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.readOnly?parseFloat(e.force.angle).toPrecision(4):e.force.angle,onChange:a,readOnly:e.readOnly})]}),Object(n.jsxs)(u.a.Group,{style:{display:e.readOnly?"":"none"},children:[Object(n.jsx)(u.a.Label,{children:"Distance"}),Object(n.jsx)(p.a,{type:"text",name:"distance","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.readOnly?Math.abs(parseFloat(e.force.distance).toPrecision(4)):e.force.distance,readOnly:e.readOnly,onChange:a})]}),Object(n.jsxs)(u.a.Group,{style:{display:e.readOnly?"none":""},children:[Object(n.jsx)(u.a.Label,{children:"Position"}),Object(n.jsxs)(u.a.Row,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"X"}),Object(n.jsx)(p.a,{type:"text",name:"posX","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.readOnly?parseFloat(e.force.posX).toPrecision(4):e.force.posX,onChange:a,readOnly:e.readOnly})]})})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"Y"}),Object(n.jsx)(p.a,{type:"text",name:"posY","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.readOnly?parseFloat(e.force.posY).toPrecision(4):e.force.posY,onChange:a,readOnly:e.readOnly})]})})})]})]}),Object(n.jsxs)(u.a.Group,{style:{display:e.readOnly?"":"none"},children:[Object(n.jsx)(u.a.Label,{children:"Position pour X=0"}),Object(n.jsxs)(u.a.Row,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"X"}),Object(n.jsx)(p.a,{type:"text",name:"x0x","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:parseFloat(e.force.info.x0.x).toPrecision(4),readOnly:e.readOnly,onChange:a})]})})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"Y"}),Object(n.jsx)(p.a,{type:"text",name:"x0y","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:parseFloat(e.force.info.x0.y).toPrecision(4),readOnly:e.readOnly,onChange:a})]})})})]})]}),Object(n.jsxs)(u.a.Group,{style:{display:e.readOnly?"":"none"},children:[Object(n.jsx)(u.a.Label,{children:"Position pour Y=0"}),Object(n.jsxs)(u.a.Row,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"X"}),Object(n.jsx)(p.a,{type:"text",name:"y0x","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:parseFloat(e.force.info.y0.x).toPrecision(4),readOnly:e.readOnly,onChange:a})]})})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"Y"}),Object(n.jsx)(p.a,{type:"text",name:"y0y","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:parseFloat(e.force.info.y0.y).toPrecision(4),readOnly:e.readOnly,onChange:a})]})})})]})]}),Object(n.jsx)(O.a,{style:{display:e.readOnly?"none":""},className:"mr-3",name:"clone",variant:"info",onClick:t,readOnly:e.readOnly,children:"Dupliquer"}),Object(n.jsx)(O.a,{style:{display:e.readOnly?"none":""},name:"delete",variant:"danger",onClick:t,children:"Effacer"})]})}),Object(n.jsxs)(h.a.Footer,{children:[Object(n.jsxs)(u.a.Group,{children:[Object(n.jsx)(u.a.Label,{children:"Force (Composantes)"}),Object(n.jsxs)(u.a.Row,{children:[Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"X"}),Object(n.jsx)(p.a,{type:"text",name:"fx","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.force.fx.toPrecision(4),readOnly:!0,onChange:a})]})})}),Object(n.jsx)(y.a,{children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(b.a.Prepend,{children:[Object(n.jsx)(b.a.Text,{children:"Y"}),Object(n.jsx)(p.a,{type:"text",name:"fy","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.force.fy.toPrecision(4),readOnly:!0,onChange:a})]})})})]})]}),Object(n.jsxs)(u.a.Group,{children:[Object(n.jsx)(u.a.Label,{children:"Moment de force"}),Object(n.jsx)(p.a,{type:"text",name:"moment","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:e.force.moment.toPrecision(4),readOnly:!0,onChange:a})]})]})]})}var F=function(){var e=Object(r.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1],i=Object(r.useState)(0),c=Object(l.a)(i,2),d=c[0],j=c[1],h=Object(r.useState)(0),b=Object(l.a)(h,2),y=b[0],f=b[1],F=Object(r.useState)(0),P=Object(l.a)(F,2),L=P[0],C=P[1],G=Object(r.useState)(new g({id:"Force R\xe9sultante"})),M=Object(l.a)(G,2),X=M[0],Y=M[1],k=function(){s(Object(o.a)(t));var e=0;t.forEach((function(a){Math.abs(parseFloat(a.posX))>e&&(e=Math.abs(parseFloat(a.posX))),Math.abs(parseFloat(a.posY))>e&&(e=Math.abs(parseFloat(a.posY)))})),e=Math.abs(e),j(0===e?N.x+N.x/3:2*e+e/2);var a=parseFloat(L),n=new g({id:"Force R\xe9sultante"});t.forEach((function(e){a+=e.moment,n.fx+=e.fx,n.fy+=e.fy})),n.angle=(180*Math.atan2(n.fy,n.fx)/Math.PI).toPrecision(4),n.module=Math.sqrt((n.fx*n.fx+n.fy*n.fy).toPrecision(4)),n.info={x0:{x:0,y:a/-n.fx},y0:{x:a/n.fy,y:0}},n.distance=a/parseFloat(n.module),n.moment=a,Y(n),f(a.toPrecision(4))},w=function(e){s(Object(o.a)(t).filter((function(a){return a!==e})))},z=function(e){s([].concat(Object(o.a)(t),[new g({force:e})]))};Object(r.useEffect)((function(){return k()}),[L]);var N={x:750,y:750};return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Calculateur de moment de force en 2D"}),Object(n.jsxs)("h2",{children:["Le moment de force de ce syst\xe8me est de"," ",parseFloat(y).toPrecision(4)," N\u2022unit\xe9"]}),Object(n.jsxs)("h2",{children:["R = ",X.fx.toPrecision(4),"i + ",X.fy.toPrecision(4),"j"]}),Object(n.jsx)("div",{className:"container my-3",children:Object(n.jsxs)("div",{className:"row mx-auto",children:[Object(n.jsx)(v,{className:"col-2",force:X,update:k,remove:w,clone:z,readOnly:!0},"Force R"),Object(n.jsx)(m.a,{className:"ml-auto",style:{minWidth:N.x,maxWidth:N.x},setup:function(e,a){e.createCanvas(N.x,N.y).parent(a)},draw:function(e){function a(e){return e*parseFloat(N.x)/parseFloat(d)}e.strokeWeight(2),e.background(255),e.line(0,0,N.x,0),e.line(0,0,0,N.y),e.line(0,N.y,N.x,N.y),e.line(N.x,0,N.x,N.y),e.strokeWeight(1),e.line(N.x/2,0,N.x/2,N.y),e.line(0,N.y/2,N.x,N.y/2),e.strokeWeight(15),e.point(N.x/2,N.y/2),t.forEach((function(t){0===parseFloat(t.module)||isNaN(parseFloat(t.module))||function(t,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,c=e.createVector(n.x,n.y).normalize().mult(50);e.push(),e.stroke(i),e.fill(i),e.strokeWeight(3*s),e.fill(0),e.translate(a(parseFloat(t.x)),a(parseFloat(t.y))),e.line(0,0,c.x,c.y),e.rotate(c.heading());var o=5*s;e.translate(c.mag()-o,0),e.triangle(0,o/2,0,-o/2,o,0),e.pop(),e.textSize(26),e.text("".concat(r),a(t.x)-c.x/1.25,a(t.y)-c.y/1.25)}(e.createVector(parseFloat(t.posX)+d/2,-parseFloat(t.posY)+d/2),e.createVector(parseFloat(t.fx),-parseFloat(t.fy)),t.id,1.5)}))}})]})}),Object(n.jsx)("div",{className:"container my-3",children:Object(n.jsxs)("div",{className:"row mx-auto",children:[Object(n.jsx)(u.a,{style:{maxWidth:"18rem",minWidth:"18rem"},children:Object(n.jsxs)(u.a.Group,{children:[Object(n.jsx)(u.a.Label,{children:"Moment initial"}),Object(n.jsx)(p.a,{type:"text",name:"module","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",value:L,onChange:function(e){C(e.target.value)}})]})}),Object(n.jsx)(O.a,{className:"ml-auto",style:{minWidth:N.x,maxWidth:N.x},onClick:function(){s([].concat(Object(o.a)(t),[new g({id:t.length})]))},children:"Ajouter Force"})]})}),Object(n.jsx)(x.a,{className:"row flex-nowrap col-10 mx-auto",style:{margin:"1.5rem",overflow:"auto"},children:t.map((function(e,a){return Object(n.jsx)(v,{style:{margin:"5rem"},force:t[a],update:k,remove:w,clone:z},a)}))})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),s(e),i(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.f0c4bbd0.chunk.js.map