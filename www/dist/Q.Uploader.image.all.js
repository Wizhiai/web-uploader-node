//devin87@qq.com
//build:2015/10/26 14:31:29
!function(t,e){"use strict";function n(t,n){return t!==e?t:n}function r(t){return"[object Function]"===k.call(t)}function i(t){return"number"==typeof t&&t>0&&t===Math.floor(t)}function a(t,e){return r(t)?t.apply(e,_.call(arguments,2)):void 0}function o(t,n,r){if(!t||!n)return t;for(var i in n)i!=e&&M.call(n,i)&&(r||t[i]===e)&&(t[i]=n[i]);return t}function s(t,e){if(e!==!1&&!/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+t)()}catch(n){}}function l(t,n){1>=n&&(n*=100),t.style.opacity!=e?t.style.opacity=n/100:t.style.filter!=e&&(t.style.filter="alpha(opacity="+parseInt(n)+")")}function u(t,e){var n=0,r=0,i=t.offsetWidth,a=t.offsetHeight;do n+=t.offsetLeft,r+=t.offsetTop,t=t.offsetParent;while(t&&t!=e);return{left:n,top:r,width:i,height:a}}function c(t,e,n,r){for(var i=t[n||e],a=[];i;){if(1==i.nodeType){if(!r)return i;a.push(i)}i=i[e]}return r?a:null}function d(t){return t.previousElementSibling||c(t,"previousSibling",null,!1)}function f(t){return t.nextElementSibling||c(t,"nextSibling",null,!1)}function p(t){return t.firstElementChild||c(t,"nextSibling","firstChild",!1)}function h(t){return t.lastElementChild||c(t,"previousSibling","lastChild",!1)}function v(t){return t.children||c(t,"nextSibling","firstChild",!0)}function m(t,e,n){var r=document.createElement(t);return e&&(r.className=e),n&&(r.innerHTML=n),r}function g(t,e){var n=m("div","",t);return e?n.childNodes:p(n)}function w(e){var n=e||t.event;return n.target||(n.target=n.srcElement),n}function b(t,e,n,r){var i=function(a){n.call(t,w(a)),r&&N(t,e,i)};return I(t,e,i),r?void 0:{stop:function(){N(t,e,i)}}}function x(t,e){if(r(t[e]))t[e]();else if(t.fireEvent)t.fireEvent("on"+e);else if(t.dispatchEvent){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}}function E(t,e,n){var r=w(t);e!==!1&&(r.preventDefault?r.preventDefault():r.returnValue=!1),n!==!1&&(r.stopPropagation?r.stopPropagation():r.cancelBubble=!0)}function y(t){return R.test(t)}function L(t){if(!y(t))return!0;var n=RegExp.lastMatch.length,r=t.indexOf("/",n),i=t.slice(0,-1!=r?r:e);return i.toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()}function T(t,e,n){t=+t,e=e||1024;for(var r=0,a="number"==typeof e,o=1,s=i(n)?n:a?100:e.length;t>=o&&s>r;)o*=a?e:e[r],r++;return r&&o>t&&(o/=a?e:e.last(),r--),{value:r?t/o:t,level:r}}function S(t,r){if(r=r===!0?{all:!0}:r||{},isNaN(t)||t==e||0>t){var i=r.error||"--";return r.all?{text:i}:i}var a=T(t,r.steps,r.limit),o=a.value,s=o.toFixed(n(r.digit,2));return r.trim!==!1&&-1!=s.lastIndexOf(".")&&(s=s.replace(/\.?0+$/,"")),a.text=s+(r.join||"")+(r.units||C)[a.level+(r.start||0)],r.all?a:a.text}var k=Object.prototype.toString,M=Object.prototype.hasOwnProperty,_=Array.prototype.slice;o(Object,{forEach:function(t,e,n){for(var r in t)M.call(t,r)&&e.call(n,r,t[r],t)}}),o(Date,{now:function(){return+new Date}});var O;(t.ActiveXObject||t.msIndexedDB)&&(O=document.documentMode||(t.XMLHttpRequest?7:6)),t.JSON||(t.JSON={}),JSON.parse||(JSON.parse=s);var I,N;document.addEventListener?(I=function(t,e,n){t.addEventListener(e,n,!1)},N=function(t,e,n){t.removeEventListener(e,n,!1)}):document.attachEvent&&(I=function(t,e,n){t.attachEvent("on"+e,n)},N=function(t,e,n){t.detachEvent("on"+e,n)});var R=/^https?:\/\//i,C=["B","KB","MB","GB","TB","PB","EB"],P={def:n,isFunc:r,isUInt:i,fire:a,extend:o,ie:O,setOpacity:l,getOffset:u,walk:c,getPrev:d,getNext:f,getFirst:p,getLast:h,getChilds:v,createEle:m,parseHTML:g,isHttpURL:y,isSameHost:L,parseLevel:T,formatSize:S};O&&(P["ie"+(6>O?6:O)]=!0),P.event={fix:w,stop:E,trigger:x,add:b},t.Q=P}(window),function(t,e){"use strict";function n(t){switch(t){case O:return"准备中";case I:return"上传中";case N:return"已完成";case R:return"已跳过";case C:return"已取消";case P:return"已失败"}return t}function r(){var e=t.XMLHttpRequest;e&&(new e).upload&&t.FormData&&(L=!0);var n=document.createElement("input");n.type="file",T=!!n.files,S=L}function i(t,e){var n=t.lastIndexOf(e);return-1!=n?t.slice(n):""}function a(t){if(t){for(var e=t.split(","),n={},r=0,i=e.length;i>r;r++)n[e[r]]=!0;return n}}function o(t,e){t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}function s(t,e,n){if(e&&!(0>=e)){var r,i=Date.now();if(n>=e)return r=i-t.timeStart,r&&(t.avgSpeed=Math.min(Math.round(1e3*e/r),e)),void(t.timeEnd=i);r=i-t.time,200>r||(t.speed=Math.min(Math.round(1e3*(n-t.loaded)/r),t.total),t.time=i)}}function l(t){var e=this;e.guid=t.guid||"uploader"+ ++k,e.url=t.url,e.dataType=t.dataType||"json",e.data=t.data,e.target=t.target,e.html5=L&&!!u(t.html5,!0),e.multiple=T&&e.html5&&!!u(t.multiple,!0),e.clickTrigger=S&&!!u(t.clickTrigger,!0),e.workerThread=e.html5?t.workerThread||1:1,e.workerIdle=e.workerThread,e.auto=t.auto!==!1,e.upName=t.upName||"upfile",e.allows=a(t.allows),e.disallows=a(t.disallows),e.container=t.container||document.body,t.getPos&&(e.getPos=t.getPos);var n=t.UI||{};n.init&&(e.init=n.init),n.draw&&(e.draw=n.draw),n.update&&(e.update=n.update),n.over&&(e.over=n.over),e.fns=t.on||{},e.ops=t,e.list=[],e.map={},e.index=0,e.started=!1,e._init()}var u=Q.def,c=Q.fire,d=Q.extend,f=Q.getFirst,p=Q.getLast,h=JSON.parse,v=Q.createEle,m=Q.parseHTML,g=Q.setOpacity,w=Q.getOffset,b=Q.event,x=b.add,E=b.trigger,y=b.stop,L=!1,T=!1,S=!1,k=0,M=0,_=0,O=0,I=1,N=2,R=-1,C=-2,P=-3;l.prototype={constructor:l,_init:function(){var t=this;if(!t._inited){t._inited=!0;var n=t.guid,r=t.target,i=t.container,a=v("div","upload-input "+n);if(i.appendChild(a),t.boxInput=a,!t.html5){var s="upload_iframe_"+n,l='<iframe class="u-iframe" name="'+s+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+s+'"></form>',u=v("div","upload-html4 "+n,l);i.appendChild(u);var c=f(u),d=p(u);t.iframe=c,t.form=d,o(c,function(){if(0==t.workerIdle){var n;try{n=c.contentWindow.document.body.innerHTML}catch(r){}t.complete(e,N,n)}})}return t.clickTrigger?x(r,"click",function(e){t.fire("select",e)!==!1&&(t.resetInput(),E(t.inputFile,"click"))}):(x(a,"click",function(e){t.fire("select",e)===!1&&y(e)}),g(a,0),t.resetInput()),t.fire("init"),t.run("init")}},resetInput:function(){var t=this,e=t.boxInput,n=t.target,r=n.offsetWidth,i=n.offsetHeight;e.innerHTML='<input type="file" name="'+t.upName+'" style="'+(t.clickTrigger?"visibility: hidden;":"width:"+r+"px;height:"+i+"px;font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">",e.style.width=r+"px",e.style.height=i+"px";var a=f(e);return x(a,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=a,t.updatePos(),t},updatePos:function(t){if(!this.clickTrigger){var e=this.getPos||w,n=this.boxInput,r=this.target,i=0==r.offsetWidth?{left:-1e4,top:-1e4}:e(r);n.style.left=i.left+"px",n.style.top=i.top+"px",t&&(n.style.zIndex=++_)}},fire:function(t,e,n){if(!n)return c(this.fns[t],this,e);var r=this.fns[t+"Async"];return r?c(r,this,e,n):void n(c(this.fns[t],this,e))},run:function(t,e){var n=this[t];return n&&c(n,this,e),this},addTask:function(t,e,n){if(t||e){var r,a;e?(r=e.name||e.fileName,a=e.size||e.fileSize):(r=i(t.value,"\\").slice(1)||t.value,a=-1);var o=this,s=i(r,".").toLowerCase(),l=o.disallows&&o.disallows[s]||o.allows&&!o.allows[s],u={id:++M,name:r,ext:s,size:a,input:t,file:e,arg:n,state:l?R:O};return l&&(u.disabled=!0),o.fire("add",u,function(t){t===!1||u.disabled||(u.index=o.list.length,o.list.push(u),o.map[u.id]=u,o.run("draw",u),o.auto&&o.start())}),u}},add:function(t){var n=this;if("INPUT"==t.tagName){var r=t.files;if(r)for(var i=0,a=r.length;a>i;i++)n.addTask(t,r[i]);else n.addTask(t)}else n.addTask(e,t)},addList:function(t){for(var e=0,n=t.length;n>e;e++)this.add(t[e])},get:function(t){return t!=e?this.map[t]:void 0},cancel:function(t){var e=this,n=e.get(t);if(n){var r=n.state;if(r!=O&&r!=I)return e;if(r==I){var i=n.xhr;if(i)return i.abort(),e;e.iframe.contentWindow.location="about:blank"}return e.complete(n,C)}},remove:function(t){var e=this.get(t);e&&(e.state==I&&this.cancel(t),e.deleted=!0,this.fire("remove",e))},start:function(){var t=this,e=t.workerIdle,n=t.list,r=t.index,i=n.length;if(t.started||(t.started=!0),0>=i||r>=i||0>=e)return t;var a=n[r];return t.index++,t.upload(a)},upload:function(t){var e=this;return!t||t.state!=O||t.skip?e.start():(t.url=e.url,e.workerIdle--,e.fire("upload",t,function(n){return n===!1?e.complete(t,R):void(e.html5&&t.file?e._upload_html5(t):t.input?e._upload_html4(t):e.complete(t,R))}),e)},_process_params:function(t,e){this.data&&Object.forEach(this.data,e),t.data&&Object.forEach(t.data,e)},_upload_html5:function(t){var e=this,n=new XMLHttpRequest;t.xhr=n,n.upload.addEventListener("progress",function(n){e.progress(t,n.total,n.loaded)},!1),n.addEventListener("load",function(n){e.complete(t,N,n.target.responseText)},!1),n.addEventListener("error",function(){e.complete(t,P)},!1),n.addEventListener("abort",function(){e.complete(t,C)},!1);var r=new FormData;e._process_params(t,function(t,e){r.append(t,e)}),r.append("fileName",t.name),r.append(e.upName,t.blob||t.file,t.name),n.open("POST",t.url),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.fire("send",t,function(i){return i===!1?e.complete(t,R):(n.send(r),void e._afterSend(t))})},_upload_html4:function(t){var e=this,n=e.form,r=t.input;return r._uploaded?e.complete(t,N):(r._uploaded=!0,r.name=e.upName,n.innerHTML="",n.appendChild(r),n.action=t.url,e._process_params(t,function(t,e){n.appendChild(m('<input type="hidden" name="'+t+'" value="'+e+'">'))}),void e.fire("send",t,function(r){return r===!1?e.complete(t,R):(n.submit(),void e._afterSend(t))}))},_afterSend:function(t){t.time=t.timeStart=Date.now(),t.state=I,this._lastTask=t,this.progress(t)},progress:function(t,e,n){e||(e=t.size),(!n||0>n)&&(n=0);var r=t.state||O;n>e&&(n=e),n>0&&r==O&&(t.state=r=I);var i=r==N;i&&(e=n=t.size),s(t,e,n),t.total=e,t.loaded=n,this.fire("progress",t),this.run("update",t)},_process_response:function(t,e){t.response=e,e&&"json"==this.dataType&&(t.json=h(e))},complete:function(t,n,r){var i=this;return t||1!=i.workerThread||(t=i._lastTask),t&&(n!=e&&(t.state=n),t.state==I&&(t.state=N,i.progress(t,t.size,t.size)),r!==e&&i._process_response(t,r)),n==C&&i.fire("cancel",t),i.fire("complete",t),i.run("over",t).run("update",t),i.workerIdle++,i.started&&i.start(),i}},l.extend=function(t,e){d(l.prototype,t,e)},r(),d(l,{support:{html5:L,multiple:T},READY:O,PROCESSING:I,COMPLETE:N,SKIP:R,CANCEL:C,ERROR:P,getStatusText:n}),Q.Uploader=l}(window),function(t,e){"use strict";function n(t,e){t.className+=" "+e}function r(t,e){t&&(t.innerHTML=e||"")}function i(e,n){var r=t.URL||t.webkitURL;if(r)return n(r.createObjectURL(e));if(t.FileReader){var i=new FileReader;on(i,"load",function(t){n(t.target.result)}),i.readAsDataURL(e)}else e.readAsDataURL&&n(e.readAsDataURL())}function a(t,n,r){var a=n.input,o=n.file||(a.files?a.files[0]:e);if(o)i(o,function(e){e&&(t.innerHTML='<img src="'+e+'" />'),r&&r(e)});else if(a){var s=a.value;if((!s||/^\w:\\fakepath/.test(s))&&(a.select(),parent.document.body.focus(),document.selection&&(s=document.selection.createRange().text)),s){t.innerHTML='<img src="'+s+'" />';try{p>6&&(t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+s+"')")}catch(l){}}r&&r(s)}}function o(t){var e=t.slice(1);return"image/"+("jpg"==e?"jpeg":e)}function s(t,e){for(var n=t.split(","),r=atob(n[1]),i=[],a=0,o=r.length;o>a;a++)i[a]=r.charCodeAt(a);if(v)return new v([new Uint8Array(i)],{type:e});var s=new BolbBuilder;return s.append(i),s.getBlob(e)}function l(t,e,n,r){var i=new Image;i.src=t,i.onload=function(){var t=i.width,a=i.height,o=n.maxWidth,s=n.maxHeight,l=o&&t>o,u=s&&a>s,c=l||u;if(!c)return r&&r(!1);l&&(t=o,a=Math.floor(i.height*t/i.width)),u&&(a=s,t=Math.floor(i.width*a/i.height));var d=document.createElement("canvas"),f=d.getContext("2d");d.width=t,d.height=a,f.drawImage(i,0,0,t,a),r&&r(d.toDataURL(e),e)}}var u=Q.getFirst,c=Q.getNext,d=Q.createEle,f=Q.setOpacity,p=Q.ie,h=Q.Uploader,v=t.Blob||t.WebkitBlob||t.MozBlob,m=t.WebKitBlobBuilder||t.MozBlobBuilder,g=function(){if(!t.FileReader||!t.atob||!v&&!m)return!1;var e=document.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")}(),w=".jpg,.png,.gif,.bmp,.webp,.tif,.tiff",b=".jpg";h.support.imageScale=g,h.extend({init:function(){var t=this.ops,e=t.boxView;t.allows||(t.allows=w),e&&n(e,this.html5?"html5":"html4")},supportScale:function(t){if(!g)return!1;".jpeg"==t&&(t=".jpg");var e=(this.ops.scale||{}).types||b,n=-1!=w.indexOf(t);return n?"*"==e||-1!=e.indexOf(t):!1},draw:function(t){var e=this,n=e.ops,r=n.view;if(r){var i=t.name,p='<div class="u-img"></div><div class="u-progress-bar"><div class="u-progress"></div></div><div class="u-detail"></div><div class="u-name" title="'+i+'">'+i+"</div>",h=t.id,v=d("div","u-item",p);v.taskId=h;var m=u(v),g=c(m),w=u(g),b=c(g),x=t.scale||n.scale,E=x&&e.supportScale(t.ext);E&&(t.skip=!0),a(m,t,function(n){e.fire("preview",n),n&&E&&l(n,o(t.ext),x,function(n,r){if(n){var i=s(n,r);t.blob=i,t.skip=!1,e.list.push(t),e.auto&&e.start()}})}),f(g,.3),f(w,.5),t.box=v,t.boxProgress=w,t.boxDetail=b,r.appendChild(v),e.update(t)}},update:function(t){if(t&&t.box){var n=this,i=t.total||t.size,a=t.loaded,o=t.state,s=t.boxProgress,l=t.boxDetail,u=h.getStatusText(o);if(n.html5&&a!=e&&a>=0){var c;if(o==h.PROCESSING){var d=Math.min(100*a/i,100);c=d.toFixed(1),"100.0"==c&&(c="99.9")}else o==h.COMPLETE&&(c="100");c&&(c+="%",u+=" "+c,s.style.width=c)}r(l,u)}},over:function(t){t&&t.box&&n(t.box,"u-over")}})}(window);