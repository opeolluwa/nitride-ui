import{_ as f,r as d,o as n,c as l,e as o,f as c,g as S,p as w,k as C,d as B,I as L,a5 as M,y as h,a1 as q,t as $,j as E,v as b,a as z,B as j,S as H,C as P,D as y,z as R,K as k,F as A,E as K}from"./index.a4ded047.js";import{A as O}from"./AppEmptyState.6578e18a.js";import{u as I}from"./tasks.30f19b58.js";import{_ as G}from"./AppNetworkError.vue_vue_type_style_index_0_scoped_cec126d1_lang.db4e1938.js";const J="/assets/network-error.3fc7fca8.svg",Q=e=>(w("data-v-cec126d1"),e=e(),C(),e),U={class:"network__error"},W=Q(()=>o("img",{src:J,alt:"empty state"},null,-1)),X=["innerHTML"];function Y(e,t,s,_,a,T){const i=d("Icon"),r=d("BaseButton");return n(),l("div",U,[W,o("div",null,[o("p",{innerHTML:e.message},null,8,X)]),c(r,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:S(()=>[c(i,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const Z=f(G,[["render",Y],["__scopeId","data-v-cec126d1"]]);let u=!0;const x=B({name:"AppTodoItem",components:{Icon:L,AppListItem:M},data:()=>({}),props:{todo:{type:Object,required:!0,default:()=>({title:"Todo title",description:"Todo description"})}},computed:{isSelected(){return u},priority(){const e=this.todo.priority.toLowerCase().trim();return e==="urgent"?"todo__item--urgent":e==="delicate"?"todo__item--delicate":e==="not-urgent"?"todo__item--not__urgent":e==="important"?"todo__item--important":"todo__item--normal"}},mounted(){const e=document.getElementsByClassName("todo__item"),t=1300;for(const s of e)s.addEventListener("mousedown",function(_){setTimeout(a,t);function a(){u=!1,console.log("long press ",u),s.classList.add("is__selected")}}),s.addEventListener("mouseup",function(_){setTimeout(a,t);function a(){console.log("long press"),s.classList.add("is__selected")}})}});const ee={class:"todo__item"},oe={class:"todo__item__header__actions__delete"},te={class:"todo__item__header trim__text"},se={class:"todo__item__header__title"},ne={class:"todo__item__content"},de={class:"trim__text"};function ae(e,t,s,_,a,T){const i=d("Icon"),r=d("AppListItem");return n(),h(r,{class:q(e.priority)},{default:S(()=>[o("div",ee,[o("div",oe,[c(i,{icon:"mdi:close-circle-outline",onClick:t[0]||(t[0]=p=>e.$emit("delete-todo"))})]),o("div",null,[o("div",te,[o("div",se,[o("h3",null,$(e.todo.title),1)])]),o("div",ne,[o("p",de,$(e.todo.description),1)])]),E(o("div",{class:"todo__item__header__actions",onClick:t[1]||(t[1]=p=>e.$emit("show-options"))},[c(i,{icon:"mdi:dots-vertical",class:"d-none"})],512),[[b,e.isSelected]])])]),_:1},8,["class"])}const ie=f(x,[["render",ae],["__scopeId","data-v-b56cd120"]]),re=B({name:"TodoView",components:{BaseButton:z,Icon:L,BaseTextInput:j,AppEmptyState:O,AppTodoItem:ie,AppNetworkError:Z,Spinner:H},data:()=>({showTodoModal:!1,todo:{title:"",description:"",date:"",priority:""}}),mounted(){console.log("mounted")},created(){this.makeTodoRequest(),console.log("created hook")},methods:{...P(I,{makeTodoRequest:"fetchAllTodo",createTodo:"createTodo",deleteTodo:"deleteTodo"}),async makeCreateTodo(){this.createTodo({...this.todo}),this.showTodoModal=!1},editTodo(e){this.$router.push({name:"edit-todo",params:{noteId:String(e)}})}},computed:{...y(I,["todoArray","isLoading","isFetchingTodoArray","errorFetchingTodo"]),...y(R,{bearerToken:"authorizationToken"}),disabledState(){return this.isLoading===!0}}});const ce=e=>(w("data-v-6e5a26aa"),e=e(),C(),e),_e={class:"fetching__todo"},le=ce(()=>o("p",null,"fetching tasks",-1)),pe={key:1};function me(e,t,s,_,a,T){var g,v;const i=d("Spinner"),r=d("AppEmptyState"),p=d("AppTodoItem");return n(),l(A,null,[E(o("div",_e,[c(i),le],512),[[b,e.isFetchingTodoArray]]),((g=e.todoArray)==null?void 0:g.length)==0?(n(),h(r,{key:0})):k("",!0),Number((v=e.todoArray)==null?void 0:v.length)>0&&!e.isFetchingTodoArray?(n(),l("div",pe,[(n(!0),l(A,null,K(e.todoArray,({title:F,description:N,id:m,priority:V})=>(n(),h(p,{todo:{title:F,description:N,id:m,priority:V},onDeleteTodo:D=>e.deleteTodo(m),onClick:D=>e.editTodo(m)},null,8,["todo","onDeleteTodo","onClick"]))),256))])):k("",!0)],64)}const ge=f(re,[["render",me],["__scopeId","data-v-6e5a26aa"]]);export{ge as default};
