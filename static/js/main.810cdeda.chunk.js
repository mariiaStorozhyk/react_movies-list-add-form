(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),c=(i(14),i(8)),n=i(2),l=i(1),r=(i(15),i(9)),o=(i(16),i(17),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(r.a)({},e),e.imdbId)}))})},j=function(e){var t=e.onAdd,i=Object(l.useState)(""),a=Object(n.a)(i,2),s=a[0],c=a[1],r=Object(l.useState)(!1),m=Object(n.a)(r,2),d=m[0],j=m[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),u=h[0],p=h[1],g=Object(l.useState)(""),O=Object(n.a)(g,2),v=O[0],M=O[1],f=Object(l.useState)(!1),x=Object(n.a)(f,2),w=x[0],N=x[1],y=Object(l.useState)(""),B=Object(n.a)(y,2),T=B[0],I=B[1],U=Object(l.useState)(!1),S=Object(n.a)(U,2),_=S[0],k=S[1],D=Object(l.useState)(""),z=Object(n.a)(D,2),A=z[0],V=z[1],Y=Object(l.useState)(!1),C=Object(n.a)(Y,2),F=C[0],X=C[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!s),N(!v),k(!T),X(!A),s&&v&&T&&A&&(t({title:s,description:u,imgUrl:v,imdbUrl:T,imdbId:A}),c(""),p(""),M(""),I(""),V(""))},children:[Object(o.jsx)("input",{type:"text",placeholder:"Title",className:d?"error":"",value:s,onChange:function(e){c(e.target.value),j(!1)}}),Object(o.jsx)("input",{type:"text",placeholder:"Description",value:u,onChange:function(e){p(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:w?"error":"",placeholder:"Image URL",value:v,onChange:function(e){M(e.target.value),N(!1)}}),Object(o.jsx)("input",{type:"text",className:_?"error":"",placeholder:"IMDB URL",value:T,onChange:function(e){I(e.target.value),k(!1)}}),Object(o.jsx)("input",{type:"text",className:F?"error":"",placeholder:"IMDB Id",value:A,onChange:function(e){V(e.target.value),X(!1)}}),Object(o.jsx)("button",{type:"submit",children:"Add"})]})},b=i(7),h=function(){var e=Object(l.useState)(b),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(j,{onAdd:function(e){a([].concat(Object(c.a)(i),[e]))}})})]})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.810cdeda.chunk.js.map