"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[867],{778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(6540);var s=a(4164),r=a(1213),n=a(7559),l=a(6461),i=a(8774),o=a(4096),c=a(8027),d=a(7713),u=a(1463),g=a(3892),m=a(6913),h=a(4848);function x(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:a}),(0,h.jsx)(u.A,{tag:"blog_authors_posts"})]})}function p(){const{authorsListPath:e}=(0,o.x)();return(0,h.jsx)(i.A,{href:e,children:(0,h.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:r}=e;return(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(m.A,{as:"h1",author:t}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(p,{})]}),0===a.length?(0,h.jsx)("p",{children:(0,h.jsx)(l.Y4,{})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("hr",{}),(0,h.jsx)(g.A,{items:a}),(0,h.jsx)(d.A,{metadata:r})]})]})}function A(e){return(0,h.jsxs)(r.e3,{className:(0,s.A)(n.G.wrapper.blogPages,n.G.page.blogAuthorsPostsPage),children:[(0,h.jsx)(x,{...e}),(0,h.jsx)(j,{...e})]})}},7713:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(1312),r=a(9022),n=a(4848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,n.jsx)(r.A,{permalink:a,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,n.jsx)(r.A,{permalink:l,title:(0,n.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2907:(e,t,a)=>{a.d(t,{A:()=>U});a(6540);var s=a(4164),r=a(4096),n=a(4848);function l(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var i=a(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,r.e7)(),{permalink:c,title:d}=a,u=l?"h1":"h2";return(0,n.jsx)(u,{className:(0,s.A)(o.title,t),children:l?d:(0,n.jsx)(i.A,{to:c,children:d})})}var d=a(1312),u=a(5846),g=a(6266);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function x(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function p(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:l,readingTime:i}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)(h,{readingTime:i})]})]});var c}var A=a(6913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,n.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?b.imageOnlyAuthorCol:b.authorCol),children:(0,n.jsx)(A.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(f,{})]})}var N=a(440),y=a(7910);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,r.e7)();return(0,n.jsx)("div",{id:l?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,n.jsx)(y.A,{children:t})})}var _=a(7559),T=a(4336),k=a(4434);function P(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(P,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=a.length>0;if(!(g||u||i))return null;if(t){const e=!!(i||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(k.A,{tags:a})})}),e&&(0,n.jsx)(T.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,n.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,n.jsx)(k.A,{tags:a})}),u&&(0,n.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,n.jsx)(C,{blogPostTitle:l,to:e.permalink})})]})}function U(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(R,{})]})}},3892:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4096),r=a(2907),n=a(4848);function l(e){let{items:t,component:a=r.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.in,{content:t,children:(0,n.jsx)(a,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),r=a(8774),n=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,n.jsxs)(r.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,n.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var s=a(4164),r=a(8774);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(4848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(n.tag,i?n.tagWithCount:n.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},4434:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var s=a(4164),r=a(1312),n=a(6133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(4848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(n.A,{...e})},e.permalink)))})]})}},6461:(e,t,a)=>{a.d(t,{Y4:()=>u,ZD:()=>i,np:()=>d,uz:()=>c,wI:()=>o});a(6540);var s=a(1312),r=a(5846),n=a(4848);function l(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=l();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,n.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,n.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},9458:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);const n=e=>{let{className:t,style:a,children:n,textAlign:l,variant:i,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:u=!1,truncate:g=!1,weight:m}=e;const h=l?`text--${l}`:"",x=i?`text--${i}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=u?"text--break":"",f=g?"text--truncate":"",v=m?`text--${m}`:"";return(0,r.jsx)("div",{className:(0,s.A)("card__body",t,h,A,x,p,j,b,f,v),style:a,children:n})}},6517:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);const n=e=>{let{className:t,style:a,children:n,textAlign:l,variant:i,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:u=!1,truncate:g=!1,weight:m}=e;const h=l?`text--${l}`:"",x=i?`text--${i}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=u?"text--break":"",f=g?"text--truncate":"",v=m?`text--${m}`:"";return(0,r.jsx)("div",{className:(0,s.A)("card__footer",t,h,A,x,p,j,b,f,v),style:a,children:n})}},4823:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);const n=e=>{let{className:t,style:a,children:n,textAlign:l,variant:i,italic:o=!1,noDecoration:c=!1,transform:d,breakWord:u=!1,truncate:g=!1,weight:m}=e;const h=l?`text--${l}`:"",x=i?`text--${i}`:"",p=o?"text--italic":"",j=c?"text-no-decoration":"",A=d?`text--${d}`:"",b=u?"text--break":"",f=g?"text--truncate":"",v=m?`text--${m}`:"";return(0,r.jsx)("div",{className:(0,s.A)("card__header",t,h,A,x,p,j,b,f,v),style:a,children:n})}},1827:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),r=a(6025),n=a(4848);const l=e=>{let{className:t,style:a,cardImageUrl:l,alt:i,title:o}=e;const c=(0,r.Ay)(l);return(0,n.jsx)("img",{className:(0,s.A)("card__image",t),style:a,src:c,alt:i,title:o})}},3863:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);const n=e=>{let{className:t,style:a,children:n,shadow:l}=e;const i=l?`item shadow--${l}`:"";return(0,r.jsx)("div",{className:(0,s.A)("card",t,i),style:a,children:n})}},6239:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);function n(e){let{children:t,className:a,style:n}=e;return(0,r.jsx)("div",{className:(0,s.A)("col",a),style:n,children:t})}},8240:(e,t,a)=>{a.d(t,{A:()=>n});a(6540);var s=a(4164),r=a(4848);function n(e){let{children:t,className:a,style:n}=e;return(0,r.jsx)("div",{className:"container center",children:(0,r.jsx)("div",{className:(0,s.A)("row",a),style:n,children:t})})}},8506:(e,t,a)=>{a.d(t,{A:()=>u});a(6540);var s=a(7172),r=a(8240),n=a(6239),l=a(3863),i=a(9458),o=a(6517),c=a(4823),d=a(1827);const u={...s.A,Columns:r.A,Column:n.A,Card:l.A,CardHeader:c.A,CardBody:i.A,CardFooter:o.A,CardImage:d.A}}}]);