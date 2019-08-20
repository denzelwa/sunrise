/*!
 * jQuery JavaScript Library v1.12.4-aem
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(bc,aD){var aW=[];
var m=bc.document;
var X=aW.slice;
var aH=aW.concat;
var w=aW.push;
var b2=aW.indexOf;
var ak={};
var x=ak.toString;
var R=ak.hasOwnProperty;
var F={};
var ap="1.12.4-aem",bP=function(cd,ce){return new bP.fn.init(cd,ce)
},G=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bZ=/^-ms-/,a3=/-([\da-z])/gi,W=function(cd,ce){return ce.toUpperCase()
};
bP.fn=bP.prototype={jquery:ap,constructor:bP,selector:"",length:0,toArray:function(){return X.call(this)
},get:function(cd){return cd!=null?(cd<0?this[cd+this.length]:this[cd]):X.call(this)
},pushStack:function(cd){var ce=bP.merge(this.constructor(),cd);
ce.prevObject=this;
ce.context=this.context;
return ce
},each:function(cd){return bP.each(this,cd)
},map:function(cd){return this.pushStack(bP.map(this,function(cf,ce){return cd.call(cf,ce,cf)
}))
},slice:function(){return this.pushStack(X.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(cf){var cd=this.length,ce=+cf+(cf<0?cd:0);
return this.pushStack(ce>=0&&ce<cd?[this[ce]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:w,sort:aW.sort,splice:aW.splice};
bP.extend=bP.fn.extend=function(){var cd,cj,ce,cf,cm,ck,ci=arguments[0]||{},ch=1,cg=arguments.length,cl=false;
if(typeof ci==="boolean"){cl=ci;
ci=arguments[ch]||{};
ch++
}if(typeof ci!=="object"&&!bP.isFunction(ci)){ci={}
}if(ch===cg){ci=this;
ch--
}for(;
ch<cg;
ch++){if((cm=arguments[ch])!=null){for(cf in cm){cd=ci[cf];
ce=cm[cf];
if(ci===ce){continue
}if(cl&&ce&&(bP.isPlainObject(ce)||(cj=bP.isArray(ce)))){if(cj){cj=false;
ck=cd&&bP.isArray(cd)?cd:[]
}else{ck=cd&&bP.isPlainObject(cd)?cd:{}
}ci[cf]=bP.extend(cl,ck,ce)
}else{if(ce!==undefined){ci[cf]=ce
}}}}}return ci
};
bP.extend({expando:"jQuery"+(ap+Math.random()).replace(/\D/g,""),isReady:true,error:function(cd){throw new Error(cd)
},noop:function(){},isFunction:function(cd){return bP.type(cd)==="function"
},isArray:Array.isArray||function(cd){return bP.type(cd)==="array"
},isWindow:function(cd){return cd!=null&&cd==cd.window
},isNumeric:function(ce){var cd=ce&&ce.toString();
return !bP.isArray(ce)&&(cd-parseFloat(cd)+1)>=0
},isEmptyObject:function(ce){var cd;
for(cd in ce){return false
}return true
},isPlainObject:function(cf){var cd;
if(!cf||bP.type(cf)!=="object"||cf.nodeType||bP.isWindow(cf)){return false
}try{if(cf.constructor&&!R.call(cf,"constructor")&&!R.call(cf.constructor.prototype,"isPrototypeOf")){return false
}}catch(ce){return false
}if(!F.ownFirst){for(cd in cf){return R.call(cf,cd)
}}for(cd in cf){}return cd===undefined||R.call(cf,cd)
},type:function(cd){if(cd==null){return cd+""
}return typeof cd==="object"||typeof cd==="function"?ak[x.call(cd)]||"object":typeof cd
},globalEval:function(cd){if(cd&&bP.trim(cd)){(bc.execScript||function(ce){bc["eval"].call(bc,ce)
})(cd)
}},camelCase:function(cd){return cd.replace(bZ,"ms-").replace(a3,W)
},nodeName:function(ce,cd){return ce.nodeName&&ce.nodeName.toLowerCase()===cd.toLowerCase()
},each:function(cf,cg){var ce,cd=0;
if(aB(cf)){ce=cf.length;
for(;
cd<ce;
cd++){if(cg.call(cf[cd],cd,cf[cd])===false){break
}}}else{for(cd in cf){if(cg.call(cf[cd],cd,cf[cd])===false){break
}}}return cf
},trim:function(cd){return cd==null?"":(cd+"").replace(G,"")
},makeArray:function(cd,cf){var ce=cf||[];
if(cd!=null){if(aB(Object(cd))){bP.merge(ce,typeof cd==="string"?[cd]:cd)
}else{w.call(ce,cd)
}}return ce
},inArray:function(cg,ce,cf){var cd;
if(ce){if(b2){return b2.call(ce,cg,cf)
}cd=ce.length;
cf=cf?cf<0?Math.max(0,cd+cf):cf:0;
for(;
cf<cd;
cf++){if(cf in ce&&ce[cf]===cg){return cf
}}}return -1
},merge:function(ch,cf){var cd=+cf.length,ce=0,cg=ch.length;
while(ce<cd){ch[cg++]=cf[ce++]
}if(cd!==cd){while(cf[ce]!==undefined){ch[cg++]=cf[ce++]
}}ch.length=cg;
return ch
},grep:function(cd,ck,ch){var cj,cg=[],ce=0,cf=cd.length,ci=!ch;
for(;
ce<cf;
ce++){cj=!ck(cd[ce],ce);
if(cj!==ci){cg.push(cd[ce])
}}return cg
},map:function(ce,cj,cd){var ch,ci,cg=0,cf=[];
if(aB(ce)){ch=ce.length;
for(;
cg<ch;
cg++){ci=cj(ce[cg],cg,cd);
if(ci!=null){cf.push(ci)
}}}else{for(cg in ce){ci=cj(ce[cg],cg,cd);
if(ci!=null){cf.push(ci)
}}}return aH.apply([],cf)
},guid:1,proxy:function(ch,cg){var cd,cf,ce;
if(typeof cg==="string"){ce=ch[cg];
cg=ch;
ch=ce
}if(!bP.isFunction(ch)){return undefined
}cd=X.call(arguments,2);
cf=function(){return ch.apply(cg||this,cd.concat(X.call(arguments)))
};
cf.guid=ch.guid=ch.guid||bP.guid++;
return cf
},now:function(){return +(new Date())
},support:F});
if(typeof Symbol==="function"){bP.fn[Symbol.iterator]=aW[Symbol.iterator]
}bP.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(ce,cd){ak["[object "+cd+"]"]=cd.toLowerCase()
});
function aB(cf){var ce=!!cf&&"length" in cf&&cf.length,cd=bP.type(cf);
if(cd==="function"||bP.isWindow(cf)){return false
}return cd==="array"||ce===0||typeof ce==="number"&&ce>0&&(ce-1) in cf
}var l=
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function(dk){var cE,dn,ct,cN,cQ,cn,c2,dm,dt,cO,c3,c5,cI,cu,de,c9,dl,ck,cL,dg="sizzle"+1*new Date(),cP=dk.document,dp=0,da=0,cf=cG(),df=cG(),cM=cG(),cK=function(dv,du){if(dv===du){c3=true
}return 0
},cW=1<<31,cU=({}).hasOwnProperty,di=[],dj=di.pop,cS=di.push,cd=di.push,cs=di.slice,cj=function(dx,dw){var dv=0,du=dx.length;
for(;
dv<du;
dv++){if(dx[dv]===dw){return dv
}}return -1
},ce="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",cv="[\\x20\\t\\r\\n\\f]",cR="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",dc="\\["+cv+"*("+cR+")(?:"+cv+"*([*^$|!~]?=)"+cv+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+cR+"))|)"+cv+"*\\]",cq=":("+cR+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dc+")*)|.*)\\)|)",cA=new RegExp(cv+"+","g"),cx=new RegExp("^"+cv+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cv+"+$","g"),cB=new RegExp("^"+cv+"*,"+cv+"*"),cH=new RegExp("^"+cv+"*([>+~]|"+cv+")"+cv+"*"),cz=new RegExp("="+cv+"*([^\\]'\"]*?)"+cv+"*\\]","g"),cY=new RegExp(cq),c0=new RegExp("^"+cR+"$"),c8={ID:new RegExp("^#("+cR+")"),CLASS:new RegExp("^\\.("+cR+")"),TAG:new RegExp("^("+cR+"|[*])"),ATTR:new RegExp("^"+dc),PSEUDO:new RegExp("^"+cq),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cv+"*(even|odd|(([+-]|)(\\d*)n|)"+cv+"*(?:([+-]|)"+cv+"*(\\d+)|))"+cv+"*\\)|)","i"),bool:new RegExp("^(?:"+ce+")$","i"),needsContext:new RegExp("^"+cv+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cv+"*((?:-\\d)?\\d*)"+cv+"*\\)|)(?=[^-]|$)","i")},ci=/^(?:input|select|textarea|button)$/i,cr=/^h\d$/i,cV=/^[^{]+\{\s*\[native \w/,cX=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,c7=/[+~]/,cT=/'|\\/g,cy=new RegExp("\\\\([\\da-f]{1,6}"+cv+"?|("+cv+")|.)","ig"),db=function(du,dx,dv){var dw="0x"+dx-65536;
return dw!==dw||dv?dx:dw<0?String.fromCharCode(dw+65536):String.fromCharCode(dw>>10|55296,dw&1023|56320)
},ds=function(){c5()
};
try{cd.apply((di=cs.call(cP.childNodes)),cP.childNodes);
di[cP.childNodes.length].nodeType
}catch(cJ){cd={apply:di.length?function(dv,du){cS.apply(dv,cs.call(du))
}:function(dx,dw){var du=dx.length,dv=0;
while((dx[du++]=dw[dv++])){}dx.length=du-1
}}
}function cC(dB,dv,dE,dH){var dz,dF,dy,du,dI,dG,dx,dC,dw=dv&&dv.ownerDocument,dD=dv?dv.nodeType:9;
dE=dE||[];
if(typeof dB!=="string"||!dB||dD!==1&&dD!==9&&dD!==11){return dE
}if(!dH){if((dv?dv.ownerDocument||dv:cP)!==cI){c5(dv)
}dv=dv||cI;
if(de){if(dD!==11&&(dG=cX.exec(dB))){if((dz=dG[1])){if(dD===9){if((dy=dv.getElementById(dz))){if(dy.id===dz){dE.push(dy);
return dE
}}else{return dE
}}else{if(dw&&(dy=dw.getElementById(dz))&&cL(dv,dy)&&dy.id===dz){dE.push(dy);
return dE
}}}else{if(dG[2]){cd.apply(dE,dv.getElementsByTagName(dB));
return dE
}else{if((dz=dG[3])&&dn.getElementsByClassName&&dv.getElementsByClassName){cd.apply(dE,dv.getElementsByClassName(dz));
return dE
}}}}if(dn.qsa&&!cM[dB+" "]&&(!c9||!c9.test(dB))){if(dD!==1){dw=dv;
dC=dB
}else{if(dv.nodeName.toLowerCase()!=="object"){if((du=dv.getAttribute("id"))){du=du.replace(cT,"\\$&")
}else{dv.setAttribute("id",(du=dg))
}dx=cn(dB);
dF=dx.length;
dI=c0.test(du)?"#"+du:"[id='"+du+"']";
while(dF--){dx[dF]=dI+" "+co(dx[dF])
}dC=dx.join(",");
dw=c7.test(dB)&&cZ(dv.parentNode)||dv
}}if(dC){try{cd.apply(dE,dw.querySelectorAll(dC));
return dE
}catch(dA){}finally{if(du===dg){dv.removeAttribute("id")
}}}}}}return dm(dB.replace(cx,"$1"),dv,dE,dH)
}function cG(){var dv=[];
function du(dw,dx){if(dv.push(dw+" ")>ct.cacheLength){delete du[dv.shift()]
}return(du[dw+" "]=dx)
}return du
}function cp(du){du[dg]=true;
return du
}function cl(du){var dw=cI.createElement("div");
try{return !!du(dw)
}catch(dv){return false
}finally{if(dw.parentNode){dw.parentNode.removeChild(dw)
}dw=null
}}function dq(dv,dx){var du=dv.split("|"),dw=du.length;
while(dw--){ct.attrHandle[du[dw]]=dx
}}function cg(dv,du){var dx=du&&dv,dw=dx&&dv.nodeType===1&&du.nodeType===1&&(~du.sourceIndex||cW)-(~dv.sourceIndex||cW);
if(dw){return dw
}if(dx){while((dx=dx.nextSibling)){if(dx===du){return -1
}}}return dv?1:-1
}function cD(du){return function(dw){var dv=dw.nodeName.toLowerCase();
return dv==="input"&&dw.type===du
}
}function ch(du){return function(dw){var dv=dw.nodeName.toLowerCase();
return(dv==="input"||dv==="button")&&dw.type===du
}
}function dd(du){return cp(function(dv){dv=+dv;
return cp(function(dw,dA){var dy,dx=du([],dw.length,dv),dz=dx.length;
while(dz--){if(dw[(dy=dx[dz])]){dw[dy]=!(dA[dy]=dw[dy])
}}})
})
}function cZ(du){return du&&typeof du.getElementsByTagName!=="undefined"&&du
}dn=cC.support={};
cQ=cC.isXML=function(du){var dv=du&&(du.ownerDocument||du).documentElement;
return dv?dv.nodeName!=="HTML":false
};
c5=cC.setDocument=function(dw){var du,dv,dx=dw?dw.ownerDocument||dw:cP;
if(dx===cI||dx.nodeType!==9||!dx.documentElement){return cI
}cI=dx;
cu=cI.documentElement;
de=!cQ(cI);
if((dv=cI.defaultView)&&dv.top!==dv){if(dv.addEventListener){dv.addEventListener("unload",ds,false)
}else{if(dv.attachEvent){dv.attachEvent("onunload",ds)
}}}dn.attributes=cl(function(dy){dy.className="i";
return !dy.getAttribute("className")
});
dn.getElementsByTagName=cl(function(dy){dy.appendChild(cI.createComment(""));
return !dy.getElementsByTagName("*").length
});
dn.getElementsByClassName=cV.test(cI.getElementsByClassName);
dn.getById=cl(function(dy){cu.appendChild(dy).id=dg;
return !cI.getElementsByName||!cI.getElementsByName(dg).length
});
if(dn.getById){ct.find.ID=function(dA,dz){if(typeof dz.getElementById!=="undefined"&&de){var dy=dz.getElementById(dA);
return dy?[dy]:[]
}};
ct.filter.ID=function(dz){var dy=dz.replace(cy,db);
return function(dA){return dA.getAttribute("id")===dy
}
}
}else{delete ct.find.ID;
ct.filter.ID=function(dz){var dy=dz.replace(cy,db);
return function(dB){var dA=typeof dB.getAttributeNode!=="undefined"&&dB.getAttributeNode("id");
return dA&&dA.value===dy
}
}
}ct.find.TAG=dn.getElementsByTagName?function(dy,dz){if(typeof dz.getElementsByTagName!=="undefined"){return dz.getElementsByTagName(dy)
}else{if(dn.qsa){return dz.querySelectorAll(dy)
}}}:function(dy,dC){var dD,dB=[],dA=0,dz=dC.getElementsByTagName(dy);
if(dy==="*"){while((dD=dz[dA++])){if(dD.nodeType===1){dB.push(dD)
}}return dB
}return dz
};
ct.find.CLASS=dn.getElementsByClassName&&function(dz,dy){if(typeof dy.getElementsByClassName!=="undefined"&&de){return dy.getElementsByClassName(dz)
}};
dl=[];
c9=[];
if((dn.qsa=cV.test(cI.querySelectorAll))){cl(function(dy){cu.appendChild(dy).innerHTML="<a id='"+dg+"'></a><select id='"+dg+"-\r\\' msallowcapture=''><option selected=''></option></select>";
if(dy.querySelectorAll("[msallowcapture^='']").length){c9.push("[*^$]="+cv+"*(?:''|\"\")")
}if(!dy.querySelectorAll("[selected]").length){c9.push("\\["+cv+"*(?:value|"+ce+")")
}if(!dy.querySelectorAll("[id~="+dg+"-]").length){c9.push("~=")
}if(!dy.querySelectorAll(":checked").length){c9.push(":checked")
}if(!dy.querySelectorAll("a#"+dg+"+*").length){c9.push(".#.+[+~]")
}});
cl(function(dz){var dy=cI.createElement("input");
dy.setAttribute("type","hidden");
dz.appendChild(dy).setAttribute("name","D");
if(dz.querySelectorAll("[name=d]").length){c9.push("name"+cv+"*[*^$|!~]?=")
}if(!dz.querySelectorAll(":enabled").length){c9.push(":enabled",":disabled")
}dz.querySelectorAll("*,:x");
c9.push(",.*:")
})
}if((dn.matchesSelector=cV.test((ck=cu.matches||cu.webkitMatchesSelector||cu.mozMatchesSelector||cu.oMatchesSelector||cu.msMatchesSelector)))){cl(function(dy){dn.disconnectedMatch=ck.call(dy,"div");
ck.call(dy,"[s!='']:x");
dl.push("!=",cq)
})
}c9=c9.length&&new RegExp(c9.join("|"));
dl=dl.length&&new RegExp(dl.join("|"));
du=cV.test(cu.compareDocumentPosition);
cL=du||cV.test(cu.contains)?function(dz,dy){var dB=dz.nodeType===9?dz.documentElement:dz,dA=dy&&dy.parentNode;
return dz===dA||!!(dA&&dA.nodeType===1&&(dB.contains?dB.contains(dA):dz.compareDocumentPosition&&dz.compareDocumentPosition(dA)&16))
}:function(dz,dy){if(dy){while((dy=dy.parentNode)){if(dy===dz){return true
}}}return false
};
cK=du?function(dz,dy){if(dz===dy){c3=true;
return 0
}var dA=!dz.compareDocumentPosition-!dy.compareDocumentPosition;
if(dA){return dA
}dA=(dz.ownerDocument||dz)===(dy.ownerDocument||dy)?dz.compareDocumentPosition(dy):1;
if(dA&1||(!dn.sortDetached&&dy.compareDocumentPosition(dz)===dA)){if(dz===cI||dz.ownerDocument===cP&&cL(cP,dz)){return -1
}if(dy===cI||dy.ownerDocument===cP&&cL(cP,dy)){return 1
}return cO?(cj(cO,dz)-cj(cO,dy)):0
}return dA&4?-1:1
}:function(dz,dy){if(dz===dy){c3=true;
return 0
}var dF,dC=0,dE=dz.parentNode,dB=dy.parentNode,dA=[dz],dD=[dy];
if(!dE||!dB){return dz===cI?-1:dy===cI?1:dE?-1:dB?1:cO?(cj(cO,dz)-cj(cO,dy)):0
}else{if(dE===dB){return cg(dz,dy)
}}dF=dz;
while((dF=dF.parentNode)){dA.unshift(dF)
}dF=dy;
while((dF=dF.parentNode)){dD.unshift(dF)
}while(dA[dC]===dD[dC]){dC++
}return dC?cg(dA[dC],dD[dC]):dA[dC]===cP?-1:dD[dC]===cP?1:0
};
return cI
};
cC.matches=function(dv,du){return cC(dv,null,null,du)
};
cC.matchesSelector=function(dv,dx){if((dv.ownerDocument||dv)!==cI){c5(dv)
}dx=dx.replace(cz,"='$1']");
if(dn.matchesSelector&&de&&!cM[dx+" "]&&(!dl||!dl.test(dx))&&(!c9||!c9.test(dx))){try{var du=ck.call(dv,dx);
if(du||dn.disconnectedMatch||dv.document&&dv.document.nodeType!==11){return du
}}catch(dw){}}return cC(dx,cI,null,[dv]).length>0
};
cC.contains=function(du,dv){if((du.ownerDocument||du)!==cI){c5(du)
}return cL(du,dv)
};
cC.attr=function(dw,du){if((dw.ownerDocument||dw)!==cI){c5(dw)
}var dv=ct.attrHandle[du.toLowerCase()],dx=dv&&cU.call(ct.attrHandle,du.toLowerCase())?dv(dw,du,!de):undefined;
return dx!==undefined?dx:dn.attributes||!de?dw.getAttribute(du):(dx=dw.getAttributeNode(du))&&dx.specified?dx.value:null
};
cC.error=function(du){throw new Error("Syntax error, unrecognized expression: "+du)
};
cC.uniqueSort=function(dw){var dx,dy=[],du=0,dv=0;
c3=!dn.detectDuplicates;
cO=!dn.sortStable&&dw.slice(0);
dw.sort(cK);
if(c3){while((dx=dw[dv++])){if(dx===dw[dv]){du=dy.push(dv)
}}while(du--){dw.splice(dy[du],1)
}}cO=null;
return dw
};
cN=cC.getText=function(dy){var dx,dv="",dw=0,du=dy.nodeType;
if(!du){while((dx=dy[dw++])){dv+=cN(dx)
}}else{if(du===1||du===9||du===11){if(typeof dy.textContent==="string"){return dy.textContent
}else{for(dy=dy.firstChild;
dy;
dy=dy.nextSibling){dv+=cN(dy)
}}}else{if(du===3||du===4){return dy.nodeValue
}}}return dv
};
ct=cC.selectors={cacheLength:50,createPseudo:cp,match:c8,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(du){du[1]=du[1].replace(cy,db);
du[3]=(du[3]||du[4]||du[5]||"").replace(cy,db);
if(du[2]==="~="){du[3]=" "+du[3]+" "
}return du.slice(0,4)
},CHILD:function(du){du[1]=du[1].toLowerCase();
if(du[1].slice(0,3)==="nth"){if(!du[3]){cC.error(du[0])
}du[4]=+(du[4]?du[5]+(du[6]||1):2*(du[3]==="even"||du[3]==="odd"));
du[5]=+((du[7]+du[8])||du[3]==="odd")
}else{if(du[3]){cC.error(du[0])
}}return du
},PSEUDO:function(dv){var du,dw=!dv[6]&&dv[2];
if(c8.CHILD.test(dv[0])){return null
}if(dv[3]){dv[2]=dv[4]||dv[5]||""
}else{if(dw&&cY.test(dw)&&(du=cn(dw,true))&&(du=dw.indexOf(")",dw.length-du)-dw.length)){dv[0]=dv[0].slice(0,du);
dv[2]=dw.slice(0,du)
}}return dv.slice(0,3)
}},filter:{TAG:function(dv){var du=dv.replace(cy,db).toLowerCase();
return dv==="*"?function(){return true
}:function(dw){return dw.nodeName&&dw.nodeName.toLowerCase()===du
}
},CLASS:function(du){var dv=cf[du+" "];
return dv||(dv=new RegExp("(^|"+cv+")"+du+"("+cv+"|$)"))&&cf(du,function(dw){return dv.test(typeof dw.className==="string"&&dw.className||typeof dw.getAttribute!=="undefined"&&dw.getAttribute("class")||"")
})
},ATTR:function(dw,dv,du){return function(dy){var dx=cC.attr(dy,dw);
if(dx==null){return dv==="!="
}if(!dv){return true
}dx+="";
return dv==="="?dx===du:dv==="!="?dx!==du:dv==="^="?du&&dx.indexOf(du)===0:dv==="*="?du&&dx.indexOf(du)>-1:dv==="$="?du&&dx.slice(-du.length)===du:dv==="~="?(" "+dx.replace(cA," ")+" ").indexOf(du)>-1:dv==="|="?dx===du||dx.slice(0,du.length+1)===du+"-":false
}
},CHILD:function(dv,dy,dx,dz,dw){var dB=dv.slice(0,3)!=="nth",du=dv.slice(-4)!=="last",dA=dy==="of-type";
return dz===1&&dw===0?function(dC){return !!dC.parentNode
}:function(dJ,dH,dM){var dC,dF,dP,dK,dL,dG,dI=dB!==du?"nextSibling":"previousSibling",dO=dJ.parentNode,dE=dA&&dJ.nodeName.toLowerCase(),dD=!dM&&!dA,dN=false;
if(dO){if(dB){while(dI){dK=dJ;
while((dK=dK[dI])){if(dA?dK.nodeName.toLowerCase()===dE:dK.nodeType===1){return false
}}dG=dI=dv==="only"&&!dG&&"nextSibling"
}return true
}dG=[du?dO.firstChild:dO.lastChild];
if(du&&dD){dK=dO;
dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dC=dF[dv]||[];
dL=dC[0]===dp&&dC[1];
dN=dL&&dC[2];
dK=dL&&dO.childNodes[dL];
while((dK=++dL&&dK&&dK[dI]||(dN=dL=0)||dG.pop())){if(dK.nodeType===1&&++dN&&dK===dJ){dF[dv]=[dp,dL,dN];
break
}}}else{if(dD){dK=dJ;
dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dC=dF[dv]||[];
dL=dC[0]===dp&&dC[1];
dN=dL
}if(dN===false){while((dK=++dL&&dK&&dK[dI]||(dN=dL=0)||dG.pop())){if((dA?dK.nodeName.toLowerCase()===dE:dK.nodeType===1)&&++dN){if(dD){dP=dK[dg]||(dK[dg]={});
dF=dP[dK.uniqueID]||(dP[dK.uniqueID]={});
dF[dv]=[dp,dN]
}if(dK===dJ){break
}}}}}dN-=dw;
return dN===dz||(dN%dz===0&&dN/dz>=0)
}}
},PSEUDO:function(dx,dw){var du,dv=ct.pseudos[dx]||ct.setFilters[dx.toLowerCase()]||cC.error("unsupported pseudo: "+dx);
if(dv[dg]){return dv(dw)
}if(dv.length>1){du=[dx,dx,"",dw];
return ct.setFilters.hasOwnProperty(dx.toLowerCase())?cp(function(dA,dC){var dz,dy=dv(dA,dw),dB=dy.length;
while(dB--){dz=cj(dA,dy[dB]);
dA[dz]=!(dC[dz]=dy[dB])
}}):function(dy){return dv(dy,0,du)
}
}return dv
}},pseudos:{not:cp(function(du){var dv=[],dw=[],dx=c2(du.replace(cx,"$1"));
return dx[dg]?cp(function(dz,dE,dC,dA){var dD,dy=dx(dz,null,dA,[]),dB=dz.length;
while(dB--){if((dD=dy[dB])){dz[dB]=!(dE[dB]=dD)
}}}):function(dA,dz,dy){dv[0]=dA;
dx(dv,null,dy,dw);
dv[0]=null;
return !dw.pop()
}
}),has:cp(function(du){return function(dv){return cC(du,dv).length>0
}
}),contains:cp(function(du){du=du.replace(cy,db);
return function(dv){return(dv.textContent||dv.innerText||cN(dv)).indexOf(du)>-1
}
}),lang:cp(function(du){if(!c0.test(du||"")){cC.error("unsupported lang: "+du)
}du=du.replace(cy,db).toLowerCase();
return function(dw){var dv;
do{if((dv=de?dw.lang:dw.getAttribute("xml:lang")||dw.getAttribute("lang"))){dv=dv.toLowerCase();
return dv===du||dv.indexOf(du+"-")===0
}}while((dw=dw.parentNode)&&dw.nodeType===1);
return false
}
}),target:function(du){var dv=dk.location&&dk.location.hash;
return dv&&dv.slice(1)===du.id
},root:function(du){return du===cu
},focus:function(du){return du===cI.activeElement&&(!cI.hasFocus||cI.hasFocus())&&!!(du.type||du.href||~du.tabIndex)
},enabled:function(du){return du.disabled===false
},disabled:function(du){return du.disabled===true
},checked:function(du){var dv=du.nodeName.toLowerCase();
return(dv==="input"&&!!du.checked)||(dv==="option"&&!!du.selected)
},selected:function(du){if(du.parentNode){du.parentNode.selectedIndex
}return du.selected===true
},empty:function(du){for(du=du.firstChild;
du;
du=du.nextSibling){if(du.nodeType<6){return false
}}return true
},parent:function(du){return !ct.pseudos.empty(du)
},header:function(du){return cr.test(du.nodeName)
},input:function(du){return ci.test(du.nodeName)
},button:function(dv){var du=dv.nodeName.toLowerCase();
return du==="input"&&dv.type==="button"||du==="button"
},text:function(dv){var du;
return dv.nodeName.toLowerCase()==="input"&&dv.type==="text"&&((du=dv.getAttribute("type"))==null||du.toLowerCase()==="text")
},first:dd(function(){return[0]
}),last:dd(function(du,dv){return[dv-1]
}),eq:dd(function(du,dw,dv){return[dv<0?dv+dw:dv]
}),even:dd(function(du,dw){var dv=0;
for(;
dv<dw;
dv+=2){du.push(dv)
}return du
}),odd:dd(function(du,dw){var dv=1;
for(;
dv<dw;
dv+=2){du.push(dv)
}return du
}),lt:dd(function(du,dx,dw){var dv=dw<0?dw+dx:dw;
for(;
--dv>=0;
){du.push(dv)
}return du
}),gt:dd(function(du,dx,dw){var dv=dw<0?dw+dx:dw;
for(;
++dv<dx;
){du.push(dv)
}return du
})}};
ct.pseudos.nth=ct.pseudos.eq;
for(cE in {radio:true,checkbox:true,file:true,password:true,image:true}){ct.pseudos[cE]=cD(cE)
}for(cE in {submit:true,reset:true}){ct.pseudos[cE]=ch(cE)
}function c1(){}c1.prototype=ct.filters=ct.pseudos;
ct.setFilters=new c1();
cn=cC.tokenize=function(dy,dD){var dv,dz,dB,dC,dA,dw,du,dx=df[dy+" "];
if(dx){return dD?0:dx.slice(0)
}dA=dy;
dw=[];
du=ct.preFilter;
while(dA){if(!dv||(dz=cB.exec(dA))){if(dz){dA=dA.slice(dz[0].length)||dA
}dw.push((dB=[]))
}dv=false;
if((dz=cH.exec(dA))){dv=dz.shift();
dB.push({value:dv,type:dz[0].replace(cx," ")});
dA=dA.slice(dv.length)
}for(dC in ct.filter){if((dz=c8[dC].exec(dA))&&(!du[dC]||(dz=du[dC](dz)))){dv=dz.shift();
dB.push({value:dv,type:dC,matches:dz});
dA=dA.slice(dv.length)
}}if(!dv){break
}}return dD?dA.length:dA?cC.error(dy):df(dy,dw).slice(0)
};
function co(dx){var dw=0,dv=dx.length,du="";
for(;
dw<dv;
dw++){du+=dx[dw].value
}return du
}function cw(dy,dw,dx){var du=dw.dir,dz=dx&&du==="parentNode",dv=da++;
return dw.first?function(dC,dB,dA){while((dC=dC[du])){if(dC.nodeType===1||dz){return dy(dC,dB,dA)
}}}:function(dF,dD,dC){var dG,dA,dE,dB=[dp,dv];
if(dC){while((dF=dF[du])){if(dF.nodeType===1||dz){if(dy(dF,dD,dC)){return true
}}}}else{while((dF=dF[du])){if(dF.nodeType===1||dz){dE=dF[dg]||(dF[dg]={});
dA=dE[dF.uniqueID]||(dE[dF.uniqueID]={});
if((dG=dA[du])&&dG[0]===dp&&dG[1]===dv){return(dB[2]=dG[2])
}else{dA[du]=dB;
if((dB[2]=dy(dF,dD,dC))){return true
}}}}}}
}function dr(du){return du.length>1?function(dy,dx,dv){var dw=du.length;
while(dw--){if(!du[dw](dy,dx,dv)){return false
}}return true
}:du[0]
}function cF(dv,dy,dx){var dw=0,du=dy.length;
for(;
dw<du;
dw++){cC(dv,dy[dw],dx)
}return dx
}function c6(du,dv,dw,dx,dA){var dy,dD=[],dz=0,dB=du.length,dC=dv!=null;
for(;
dz<dB;
dz++){if((dy=du[dz])){if(!dw||dw(dy,dx,dA)){dD.push(dy);
if(dC){dv.push(dz)
}}}}return dD
}function cm(dw,dv,dy,dx,dz,du){if(dx&&!dx[dg]){dx=cm(dx)
}if(dz&&!dz[dg]){dz=cm(dz,du)
}return cp(function(dK,dH,dC,dJ){var dM,dI,dE,dD=[],dL=[],dB=dH.length,dA=dK||cF(dv||"*",dC.nodeType?[dC]:dC,[]),dF=dw&&(dK||!dv)?c6(dA,dD,dw,dC,dJ):dA,dG=dy?dz||(dK?dw:dB||dx)?[]:dH:dF;
if(dy){dy(dF,dG,dC,dJ)
}if(dx){dM=c6(dG,dL);
dx(dM,[],dC,dJ);
dI=dM.length;
while(dI--){if((dE=dM[dI])){dG[dL[dI]]=!(dF[dL[dI]]=dE)
}}}if(dK){if(dz||dw){if(dz){dM=[];
dI=dG.length;
while(dI--){if((dE=dG[dI])){dM.push((dF[dI]=dE))
}}dz(null,(dG=[]),dM,dJ)
}dI=dG.length;
while(dI--){if((dE=dG[dI])&&(dM=dz?cj(dK,dE):dD[dI])>-1){dK[dM]=!(dH[dM]=dE)
}}}}else{dG=c6(dG===dH?dG.splice(dB,dG.length):dG);
if(dz){dz(null,dH,dG,dJ)
}else{cd.apply(dH,dG)
}}})
}function dh(dA){var dv,dy,dw,dz=dA.length,dD=ct.relative[dA[0].type],dE=dD||ct.relative[" "],dx=dD?1:0,dB=cw(function(dF){return dF===dv
},dE,true),dC=cw(function(dF){return cj(dv,dF)>-1
},dE,true),du=[function(dI,dH,dG){var dF=(!dD&&(dG||dH!==dt))||((dv=dH).nodeType?dB(dI,dH,dG):dC(dI,dH,dG));
dv=null;
return dF
}];
for(;
dx<dz;
dx++){if((dy=ct.relative[dA[dx].type])){du=[cw(dr(du),dy)]
}else{dy=ct.filter[dA[dx].type].apply(null,dA[dx].matches);
if(dy[dg]){dw=++dx;
for(;
dw<dz;
dw++){if(ct.relative[dA[dw].type]){break
}}return cm(dx>1&&dr(du),dx>1&&co(dA.slice(0,dx-1).concat({value:dA[dx-2].type===" "?"*":""})).replace(cx,"$1"),dy,dx<dw&&dh(dA.slice(dx,dw)),dw<dz&&dh((dA=dA.slice(dw))),dw<dz&&co(dA))
}du.push(dy)
}}return dr(du)
}function c4(dx,dw){var du=dw.length>0,dy=dx.length>0,dv=function(dI,dC,dH,dG,dL){var dD,dE,dJ,dN=0,dF="0",dz=dI&&[],dO=[],dM=dt,dB=dI||dy&&ct.find.TAG("*",dL),dA=(dp+=dM==null?1:Math.random()||0.1),dK=dB.length;
if(dL){dt=dC===cI||dC||dL
}for(;
dF!==dK&&(dD=dB[dF])!=null;
dF++){if(dy&&dD){dE=0;
if(!dC&&dD.ownerDocument!==cI){c5(dD);
dH=!de
}while((dJ=dx[dE++])){if(dJ(dD,dC||cI,dH)){dG.push(dD);
break
}}if(dL){dp=dA
}}if(du){if((dD=!dJ&&dD)){dN--
}if(dI){dz.push(dD)
}}}dN+=dF;
if(du&&dF!==dN){dE=0;
while((dJ=dw[dE++])){dJ(dz,dO,dC,dH)
}if(dI){if(dN>0){while(dF--){if(!(dz[dF]||dO[dF])){dO[dF]=dj.call(dG)
}}}dO=c6(dO)
}cd.apply(dG,dO);
if(dL&&!dI&&dO.length>0&&(dN+dw.length)>1){cC.uniqueSort(dG)
}}if(dL){dp=dA;
dt=dM
}return dz
};
return du?cp(dv):dv
}c2=cC.compile=function(du,dw){var dx,dv=[],dz=[],dy=cM[du+" "];
if(!dy){if(!dw){dw=cn(du)
}dx=dw.length;
while(dx--){dy=dh(dw[dx]);
if(dy[dg]){dv.push(dy)
}else{dz.push(dy)
}}dy=cM(du,c4(dz,dv));
dy.selector=du
}return dy
};
dm=cC.select=function(dw,du,dx,dA){var dy,dD,dv,dE,dB,dC=typeof dw==="function"&&dw,dz=!dA&&cn((dw=dC.selector||dw));
dx=dx||[];
if(dz.length===1){dD=dz[0]=dz[0].slice(0);
if(dD.length>2&&(dv=dD[0]).type==="ID"&&dn.getById&&du.nodeType===9&&de&&ct.relative[dD[1].type]){du=(ct.find.ID(dv.matches[0].replace(cy,db),du)||[])[0];
if(!du){return dx
}else{if(dC){du=du.parentNode
}}dw=dw.slice(dD.shift().value.length)
}dy=c8.needsContext.test(dw)?0:dD.length;
while(dy--){dv=dD[dy];
if(ct.relative[(dE=dv.type)]){break
}if((dB=ct.find[dE])){if((dA=dB(dv.matches[0].replace(cy,db),c7.test(dD[0].type)&&cZ(du.parentNode)||du))){dD.splice(dy,1);
dw=dA.length&&co(dD);
if(!dw){cd.apply(dx,dA);
return dx
}break
}}}}(dC||c2(dw,dz))(dA,du,!de,dx,!du||c7.test(dw)&&cZ(du.parentNode)||du);
return dx
};
dn.sortStable=dg.split("").sort(cK).join("")===dg;
dn.detectDuplicates=!!c3;
c5();
dn.sortDetached=cl(function(du){return du.compareDocumentPosition(cI.createElement("div"))&1
});
if(!cl(function(du){du.innerHTML="<a href='#'></a>";
return du.firstChild.getAttribute("href")==="#"
})){dq("type|href|height|width",function(dv,du,dw){if(!dw){return dv.getAttribute(du,du.toLowerCase()==="type"?1:2)
}})
}if(!dn.attributes||!cl(function(du){du.innerHTML="<input/>";
du.firstChild.setAttribute("value","");
return du.firstChild.getAttribute("value")===""
})){dq("value",function(dv,du,dw){if(!dw&&dv.nodeName.toLowerCase()==="input"){return dv.defaultValue
}})
}if(!cl(function(du){return du.getAttribute("disabled")==null
})){dq(ce,function(dv,du,dx){var dw;
if(!dx){return dv[du]===true?du.toLowerCase():(dw=dv.getAttributeNode(du))&&dw.specified?dw.value:null
}})
}return cC
})(bc);
bP.find=l;
bP.expr=l.selectors;
bP.expr[":"]=bP.expr.pseudos;
bP.uniqueSort=bP.unique=l.uniqueSort;
bP.text=l.getText;
bP.isXMLDoc=l.isXML;
bP.contains=l.contains;
var af=function(cg,ce,ch){var cd=[],cf=ch!==undefined;
while((cg=cg[ce])&&cg.nodeType!==9){if(cg.nodeType===1){if(cf&&bP(cg).is(ch)){break
}cd.push(cg)
}}return cd
};
var o=function(cf,ce){var cd=[];
for(;
cf;
cf=cf.nextSibling){if(cf.nodeType===1&&cf!==ce){cd.push(cf)
}}return cd
};
var z=bP.expr.match.needsContext;
var a=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
var aR=/^.[^:#\[\.,]*$/;
function aY(cf,cd,ce){if(bP.isFunction(cd)){return bP.grep(cf,function(ch,cg){return !!cd.call(ch,cg,ch)!==ce
})
}if(cd.nodeType){return bP.grep(cf,function(cg){return(cg===cd)!==ce
})
}if(typeof cd==="string"){if(aR.test(cd)){return bP.filter(cd,cf,ce)
}cd=bP.filter(cd,cf)
}return bP.grep(cf,function(cg){return(bP.inArray(cg,cd)>-1)!==ce
})
}bP.filter=function(cg,cd,cf){var ce=cd[0];
if(cf){cg=":not("+cg+")"
}return cd.length===1&&ce.nodeType===1?bP.find.matchesSelector(ce,cg)?[ce]:[]:bP.find.matches(cg,bP.grep(cd,function(ch){return ch.nodeType===1
}))
};
bP.fn.extend({find:function(ce){var ch,cg=[],cf=this,cd=cf.length;
if(typeof ce!=="string"){return this.pushStack(bP(ce).filter(function(){for(ch=0;
ch<cd;
ch++){if(bP.contains(cf[ch],this)){return true
}}}))
}for(ch=0;
ch<cd;
ch++){bP.find(ce,cf[ch],cg)
}cg=this.pushStack(cd>1?bP.unique(cg):cg);
cg.selector=this.selector?this.selector+" "+ce:ce;
return cg
},filter:function(cd){return this.pushStack(aY(this,cd||[],false))
},not:function(cd){return this.pushStack(aY(this,cd||[],true))
},is:function(cd){return !!aY(this,typeof cd==="string"&&z.test(cd)?bP(cd):cd||[],false).length
}});
var y,bA=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,b3=bP.fn.init=function(cd,cg,ce){var cf,ch;
if(!cd){return this
}ce=ce||y;
if(typeof cd==="string"){if(cd.charAt(0)==="<"&&cd.charAt(cd.length-1)===">"&&cd.length>=3){cf=[null,cd,null]
}else{cf=bA.exec(cd)
}if(cf&&(cf[1]||!cg)){if(cf[1]){cg=cg instanceof bP?cg[0]:cg;
bP.merge(this,bP.parseHTML(cf[1],cg&&cg.nodeType?cg.ownerDocument||cg:m,true));
if(a.test(cf[1])&&bP.isPlainObject(cg)){for(cf in cg){if(bP.isFunction(this[cf])){this[cf](cg[cf])
}else{this.attr(cf,cg[cf])
}}}return this
}else{ch=m.getElementById(cf[2]);
if(ch&&ch.parentNode){if(ch.id!==cf[2]){return y.find(cd)
}this.length=1;
this[0]=ch
}this.context=m;
this.selector=cd;
return this
}}else{if(!cg||cg.jquery){return(cg||ce).find(cd)
}else{return this.constructor(cg).find(cd)
}}}else{if(cd.nodeType){this.context=this[0]=cd;
this.length=1;
return this
}else{if(bP.isFunction(cd)){return typeof ce.ready!=="undefined"?ce.ready(cd):cd(bP)
}}}if(cd.selector!==undefined){this.selector=cd.selector;
this.context=cd.context
}return bP.makeArray(cd,this)
};
b3.prototype=bP.fn;
y=bP(m);
var bC=/^(?:parents|prev(?:Until|All))/,bG={children:true,contents:true,next:true,prev:true};
bP.fn.extend({has:function(cg){var cf,ce=bP(cg,this),cd=ce.length;
return this.filter(function(){for(cf=0;
cf<cd;
cf++){if(bP.contains(this,ce[cf])){return true
}}})
},closest:function(ch,cg){var ci,cf=0,ce=this.length,cd=[],cj=z.test(ch)||typeof ch!=="string"?bP(ch,cg||this.context):0;
for(;
cf<ce;
cf++){for(ci=this[cf];
ci&&ci!==cg;
ci=ci.parentNode){if(ci.nodeType<11&&(cj?cj.index(ci)>-1:ci.nodeType===1&&bP.find.matchesSelector(ci,ch))){cd.push(ci);
break
}}}return this.pushStack(cd.length>1?bP.uniqueSort(cd):cd)
},index:function(cd){if(!cd){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof cd==="string"){return bP.inArray(this[0],bP(cd))
}return bP.inArray(cd.jquery?cd[0]:cd,this)
},add:function(cd,ce){return this.pushStack(bP.uniqueSort(bP.merge(this.get(),bP(cd,ce))))
},addBack:function(cd){return this.add(cd==null?this.prevObject:this.prevObject.filter(cd))
}});
function a6(ce,cd){do{ce=ce[cd]
}while(ce&&ce.nodeType!==1);
return ce
}bP.each({parent:function(ce){var cd=ce.parentNode;
return cd&&cd.nodeType!==11?cd:null
},parents:function(cd){return af(cd,"parentNode")
},parentsUntil:function(ce,cd,cf){return af(ce,"parentNode",cf)
},next:function(cd){return a6(cd,"nextSibling")
},prev:function(cd){return a6(cd,"previousSibling")
},nextAll:function(cd){return af(cd,"nextSibling")
},prevAll:function(cd){return af(cd,"previousSibling")
},nextUntil:function(ce,cd,cf){return af(ce,"nextSibling",cf)
},prevUntil:function(ce,cd,cf){return af(ce,"previousSibling",cf)
},siblings:function(cd){return o((cd.parentNode||{}).firstChild,cd)
},children:function(cd){return o(cd.firstChild)
},contents:function(cd){return bP.nodeName(cd,"iframe")?cd.contentDocument||cd.contentWindow.document:bP.merge([],cd.childNodes)
}},function(cd,ce){bP.fn[cd]=function(ch,cf){var cg=bP.map(this,ce,ch);
if(cd.slice(-5)!=="Until"){cf=ch
}if(cf&&typeof cf==="string"){cg=bP.filter(cf,cg)
}if(this.length>1){if(!bG[cd]){cg=bP.uniqueSort(cg)
}if(bC.test(cd)){cg=cg.reverse()
}}return this.pushStack(cg)
}
});
var aM=(/\S+/g);
function am(ce){var cd={};
bP.each(ce.match(aM)||[],function(cg,cf){cd[cf]=true
});
return cd
}bP.Callbacks=function(cm){cm=typeof cm==="string"?am(cm):bP.extend({},cm);
var ch,cf,cd,cg,ck=[],ci=[],cj=-1,ce=function(){cg=cm.once;
cd=ch=true;
for(;
ci.length;
cj=-1){cf=ci.shift();
while(++cj<ck.length){if(ck[cj].apply(cf[0],cf[1])===false&&cm.stopOnFalse){cj=ck.length;
cf=false
}}}if(!cm.memory){cf=false
}ch=false;
if(cg){if(cf){ck=[]
}else{ck=""
}}},cl={add:function(){if(ck){if(cf&&!ch){cj=ck.length-1;
ci.push(cf)
}(function cn(co){bP.each(co,function(cq,cp){if(bP.isFunction(cp)){if(!cm.unique||!cl.has(cp)){ck.push(cp)
}}else{if(cp&&cp.length&&bP.type(cp)!=="string"){cn(cp)
}}})
})(arguments);
if(cf&&!ch){ce()
}}return this
},remove:function(){bP.each(arguments,function(cp,cn){var co;
while((co=bP.inArray(cn,ck,co))>-1){ck.splice(co,1);
if(co<=cj){cj--
}}});
return this
},has:function(cn){return cn?bP.inArray(cn,ck)>-1:ck.length>0
},empty:function(){if(ck){ck=[]
}return this
},disable:function(){cg=ci=[];
ck=cf="";
return this
},disabled:function(){return !ck
},lock:function(){cg=true;
if(!cf){cl.disable()
}return this
},locked:function(){return !!cg
},fireWith:function(co,cn){if(!cg){cn=cn||[];
cn=[co,cn.slice?cn.slice():cn];
ci.push(cn);
if(!ch){ce()
}}return this
},fire:function(){cl.fireWith(this,arguments);
return this
},fired:function(){return !!cd
}};
return cl
};
bP.extend({Deferred:function(cf){var ce=[["resolve","done",bP.Callbacks("once memory"),"resolved"],["reject","fail",bP.Callbacks("once memory"),"rejected"],["notify","progress",bP.Callbacks("memory")]],cg="pending",ch={state:function(){return cg
},always:function(){cd.done(arguments).fail(arguments);
return this
},then:function(){var ci=arguments;
return bP.Deferred(function(cj){bP.each(ce,function(cl,ck){var cm=bP.isFunction(ci[cl])&&ci[cl];
cd[ck[1]](function(){var cn=cm&&cm.apply(this,arguments);
if(cn&&bP.isFunction(cn.promise)){cn.promise().progress(cj.notify).done(cj.resolve).fail(cj.reject)
}else{cj[ck[0]+"With"](this===ch?cj.promise():this,cm?[cn]:arguments)
}})
});
ci=null
}).promise()
},promise:function(ci){return ci!=null?bP.extend(ci,ch):ch
}},cd={};
ch.pipe=ch.then;
bP.each(ce,function(cj,ci){var cl=ci[2],ck=ci[3];
ch[ci[1]]=cl.add;
if(ck){cl.add(function(){cg=ck
},ce[cj^1][2].disable,ce[2][2].lock)
}cd[ci[0]]=function(){cd[ci[0]+"With"](this===cd?ch:this,arguments);
return this
};
cd[ci[0]+"With"]=cl.fireWith
});
ch.promise(cd);
if(cf){cf.call(cd,cd)
}return cd
},when:function(ch){var cf=0,cj=X.call(arguments),cd=cj.length,ce=cd!==1||(ch&&bP.isFunction(ch.promise))?cd:0,cm=ce===1?ch:bP.Deferred(),cg=function(co,cp,cn){return function(cq){cp[co]=this;
cn[co]=arguments.length>1?X.call(arguments):cq;
if(cn===cl){cm.notifyWith(cp,cn)
}else{if(!(--ce)){cm.resolveWith(cp,cn)
}}}
},cl,ci,ck;
if(cd>1){cl=new Array(cd);
ci=new Array(cd);
ck=new Array(cd);
for(;
cf<cd;
cf++){if(cj[cf]&&bP.isFunction(cj[cf].promise)){cj[cf].promise().progress(cg(cf,ci,cl)).done(cg(cf,ck,cj)).fail(cm.reject)
}else{--ce
}}}if(!ce){cm.resolveWith(ck,cj)
}return cm.promise()
}});
var ar;
bP.fn.ready=function(cd){bP.ready.promise().done(cd);
return this
};
bP.extend({isReady:false,readyWait:1,holdReady:function(cd){if(cd){bP.readyWait++
}else{bP.ready(true)
}},ready:function(cd){if(cd===true?--bP.readyWait:bP.isReady){return
}bP.isReady=true;
if(cd!==true&&--bP.readyWait>0){return
}ar.resolveWith(m,[bP]);
if(bP.fn.triggerHandler){bP(m).triggerHandler("ready");
bP(m).off("ready")
}}});
function bt(){if(m.addEventListener){m.removeEventListener("DOMContentLoaded",b7);
bc.removeEventListener("load",b7)
}else{m.detachEvent("onreadystatechange",b7);
bc.detachEvent("onload",b7)
}}function b7(){if(m.addEventListener||bc.event.type==="load"||m.readyState==="complete"){bt();
bP.ready()
}}bP.ready.promise=function(cg){if(!ar){ar=bP.Deferred();
if(m.readyState==="complete"||(m.readyState!=="loading"&&!m.documentElement.doScroll)){bc.setTimeout(bP.ready)
}else{if(m.addEventListener){m.addEventListener("DOMContentLoaded",b7);
bc.addEventListener("load",b7)
}else{m.attachEvent("onreadystatechange",b7);
bc.attachEvent("onload",b7);
var cf=false;
try{cf=bc.frameElement==null&&m.documentElement
}catch(ce){}if(cf&&cf.doScroll){(function cd(){if(!bP.isReady){try{cf.doScroll("left")
}catch(ch){return bc.setTimeout(cd,50)
}bt();
bP.ready()
}})()
}}}}return ar.promise(cg)
};
bP.ready.promise();
var bo;
for(bo in bP(F)){break
}F.ownFirst=bo==="0";
F.inlineBlockNeedsLayout=false;
bP(function(){var cf,cg,cd,ce;
cd=m.getElementsByTagName("body")[0];
if(!cd||!cd.style){return
}cg=m.createElement("div");
ce=m.createElement("div");
ce.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
cd.appendChild(ce).appendChild(cg);
if(typeof cg.style.zoom!=="undefined"){cg.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
F.inlineBlockNeedsLayout=cf=cg.offsetWidth===3;
if(cf){cd.style.zoom=1
}}cd.removeChild(ce)
});
(function(){var ce=m.createElement("div");
F.deleteExpando=true;
try{delete ce.test
}catch(cd){F.deleteExpando=false
}ce=null
})();
var V=function(cf){var ce=bP.noData[(cf.nodeName+" ").toLowerCase()],cd=+cf.nodeType||1;
return cd!==1&&cd!==9?false:!ce||ce!==true&&cf.getAttribute("classid")===ce
};
var bF=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aX=/([A-Z])/g;
function bH(cf,ce,cg){if(cg===undefined&&cf.nodeType===1){var cd="data-"+ce.replace(aX,"-$1").toLowerCase();
cg=cf.getAttribute(cd);
if(typeof cg==="string"){try{cg=cg==="true"?true:cg==="false"?false:cg==="null"?null:+cg+""===cg?+cg:bF.test(cg)?bP.parseJSON(cg):cg
}catch(ch){}bP.data(cf,ce,cg)
}else{cg=undefined
}}return cg
}function Y(ce){var cd;
for(cd in ce){if(cd==="data"&&bP.isEmptyObject(ce[cd])){continue
}if(cd!=="toJSON"){return false
}}return true
}function bj(cg,ce,ci,ch){if(!V(cg)){return
}var ck,cj,cl=bP.expando,cm=cg.nodeType,cd=cm?bP.cache:cg,cf=cm?cg[cl]:cg[cl]&&cl;
if((!cf||!cd[cf]||(!ch&&!cd[cf].data))&&ci===undefined&&typeof ce==="string"){return
}if(!cf){if(cm){cf=cg[cl]=aW.pop()||bP.guid++
}else{cf=cl
}}if(!cd[cf]){cd[cf]=cm?{}:{toJSON:bP.noop}
}if(typeof ce==="object"||typeof ce==="function"){if(ch){cd[cf]=bP.extend(cd[cf],ce)
}else{cd[cf].data=bP.extend(cd[cf].data,ce)
}}cj=cd[cf];
if(!ch){if(!cj.data){cj.data={}
}cj=cj.data
}if(ci!==undefined){cj[bP.camelCase(ce)]=ci
}if(typeof ce==="string"){ck=cj[ce];
if(ck==null){ck=cj[bP.camelCase(ce)]
}}else{ck=cj
}return ck
}function aj(ch,cf,cd){if(!V(ch)){return
}var cj,cg,ci=ch.nodeType,ce=ci?bP.cache:ch,ck=ci?ch[bP.expando]:bP.expando;
if(!ce[ck]){return
}if(cf){cj=cd?ce[ck]:ce[ck].data;
if(cj){if(!bP.isArray(cf)){if(cf in cj){cf=[cf]
}else{cf=bP.camelCase(cf);
if(cf in cj){cf=[cf]
}else{cf=cf.split(" ")
}}}else{cf=cf.concat(bP.map(cf,bP.camelCase))
}cg=cf.length;
while(cg--){delete cj[cf[cg]]
}if(cd?!Y(cj):!bP.isEmptyObject(cj)){return
}}}if(!cd){delete ce[ck].data;
if(!Y(ce[ck])){return
}}if(ci){bP.cleanData([ch],true)
}else{if(F.deleteExpando||ce!=ce.window){delete ce[ck]
}else{ce[ck]=undefined
}}}bP.extend({cache:{},noData:{"applet ":true,"embed ":true,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(cd){cd=cd.nodeType?bP.cache[cd[bP.expando]]:cd[bP.expando];
return !!cd&&!Y(cd)
},data:function(ce,cd,cf){return bj(ce,cd,cf)
},removeData:function(ce,cd){return aj(ce,cd)
},_data:function(ce,cd,cf){return bj(ce,cd,cf,true)
},_removeData:function(ce,cd){return aj(ce,cd,true)
}});
bP.fn.extend({data:function(cg,cj){var cf,ce,ci,ch=this[0],cd=ch&&ch.attributes;
if(cg===undefined){if(this.length){ci=bP.data(ch);
if(ch.nodeType===1&&!bP._data(ch,"parsedAttrs")){cf=cd.length;
while(cf--){if(cd[cf]){ce=cd[cf].name;
if(ce.indexOf("data-")===0){ce=bP.camelCase(ce.slice(5));
bH(ch,ce,ci[ce])
}}}bP._data(ch,"parsedAttrs",true)
}}return ci
}if(typeof cg==="object"){return this.each(function(){bP.data(this,cg)
})
}return arguments.length>1?this.each(function(){bP.data(this,cg,cj)
}):ch?bH(ch,cg,bP.data(ch,cg)):undefined
},removeData:function(cd){return this.each(function(){bP.removeData(this,cd)
})
}});
bP.extend({queue:function(cf,ce,cg){var cd;
if(cf){ce=(ce||"fx")+"queue";
cd=bP._data(cf,ce);
if(cg){if(!cd||bP.isArray(cg)){cd=bP._data(cf,ce,bP.makeArray(cg))
}else{cd.push(cg)
}}return cd||[]
}},dequeue:function(ci,ch){ch=ch||"fx";
var ce=bP.queue(ci,ch),cj=ce.length,cg=ce.shift(),cd=bP._queueHooks(ci,ch),cf=function(){bP.dequeue(ci,ch)
};
if(cg==="inprogress"){cg=ce.shift();
cj--
}if(cg){if(ch==="fx"){ce.unshift("inprogress")
}delete cd.stop;
cg.call(ci,cf,cd)
}if(!cj&&cd){cd.empty.fire()
}},_queueHooks:function(cf,ce){var cd=ce+"queueHooks";
return bP._data(cf,cd)||bP._data(cf,cd,{empty:bP.Callbacks("once memory").add(function(){bP._removeData(cf,ce+"queue");
bP._removeData(cf,cd)
})})
}});
bP.fn.extend({queue:function(cd,ce){var cf=2;
if(typeof cd!=="string"){ce=cd;
cd="fx";
cf--
}if(arguments.length<cf){return bP.queue(this[0],cd)
}return ce===undefined?this:this.each(function(){var cg=bP.queue(this,cd,ce);
bP._queueHooks(this,cd);
if(cd==="fx"&&cg[0]!=="inprogress"){bP.dequeue(this,cd)
}})
},dequeue:function(cd){return this.each(function(){bP.dequeue(this,cd)
})
},clearQueue:function(cd){return this.queue(cd||"fx",[])
},promise:function(cf,cj){var ce,cg=1,ck=bP.Deferred(),ci=this,cd=this.length,ch=function(){if(!(--cg)){ck.resolveWith(ci,[ci])
}};
if(typeof cf!=="string"){cj=cf;
cf=undefined
}cf=cf||"fx";
while(cd--){ce=bP._data(ci[cd],cf+"queueHooks");
if(ce&&ce.empty){cg++;
ce.empty.add(ch)
}}ch();
return ck.promise(cj)
}});
(function(){var cd;
F.shrinkWrapBlocks=function(){if(cd!=null){return cd
}cd=false;
var cg,ce,cf;
ce=m.getElementsByTagName("body")[0];
if(!ce||!ce.style){return
}cg=m.createElement("div");
cf=m.createElement("div");
cf.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
ce.appendChild(cf).appendChild(cg);
if(typeof cg.style.zoom!=="undefined"){cg.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
cg.appendChild(m.createElement("div")).style.width="5px";
cd=cg.offsetWidth!==3
}ce.removeChild(cf);
return cd
}
})();
var aL=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var b6=new RegExp("^(?:([+-])=|)("+aL+")([a-z%]*)$","i");
var b0=["Top","Right","Bottom","Left"];
var aa=function(ce,cd){ce=cd||ce;
return bP.css(ce,"display")==="none"||!bP.contains(ce.ownerDocument,ce)
};
function A(ce,cd,ch,cm){var cn,cf=1,cj=20,cl=cm?function(){return cm.cur()
}:function(){return bP.css(ce,cd,"")
},ci=cl(),ck=ch&&ch[3]||(bP.cssNumber[cd]?"":"px"),cg=(bP.cssNumber[cd]||ck!=="px"&&+ci)&&b6.exec(bP.css(ce,cd));
if(cg&&cg[3]!==ck){ck=ck||cg[3];
ch=ch||[];
cg=+ci||1;
do{cf=cf||".5";
cg=cg/cf;
bP.style(ce,cd,cg+ck)
}while(cf!==(cf=cl()/ci)&&cf!==1&&--cj)
}if(ch){cg=+cg||+ci||0;
cn=ch[1]?cg+(ch[1]+1)*ch[2]:+ch[2];
if(cm){cm.unit=ck;
cm.start=cg;
cm.end=cn
}}return cn
}var aJ=function(cd,ci,ck,cj,cg,cm,cl){var cf=0,ce=cd.length,ch=ck==null;
if(bP.type(ck)==="object"){cg=true;
for(cf in ck){aJ(cd,ci,cf,ck[cf],true,cm,cl)
}}else{if(cj!==undefined){cg=true;
if(!bP.isFunction(cj)){cl=true
}if(ch){if(cl){ci.call(cd,cj);
ci=null
}else{ch=ci;
ci=function(co,cn,cp){return ch.call(bP(co),cp)
}
}}if(ci){for(;
cf<ce;
cf++){ci(cd[cf],ck,cl?cj:cj.call(cd[cf],cf,ci(cd[cf],ck)))
}}}}return cg?cd:ch?ci.call(cd):ce?ci(cd[0],ck):cm
};
var aS=(/^(?:checkbox|radio)$/i);
var n=(/<([\w:-]+)/);
var bI=(/^$|\/(?:java|ecma)script/i);
var cc=(/^\s+/);
var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function C(cd){var cf=d.split("|"),ce=cd.createDocumentFragment();
if(ce.createElement){while(cf.length){ce.createElement(cf.pop())
}}return ce
}(function(){var cf=m.createElement("div"),ce=m.createDocumentFragment(),cd=m.createElement("input");
cf.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
F.leadingWhitespace=cf.firstChild.nodeType===3;
F.tbody=!cf.getElementsByTagName("tbody").length;
F.htmlSerialize=!!cf.getElementsByTagName("link").length;
F.html5Clone=m.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
cd.type="checkbox";
cd.checked=true;
ce.appendChild(cd);
F.appendChecked=cd.checked;
cf.innerHTML="<textarea>x</textarea>";
F.noCloneChecked=!!cf.cloneNode(true).lastChild.defaultValue;
ce.appendChild(cf);
cd=m.createElement("input");
cd.setAttribute("type","radio");
cd.setAttribute("checked","checked");
cd.setAttribute("name","t");
cf.appendChild(cd);
F.checkClone=cf.cloneNode(true).cloneNode(true).lastChild.checked;
F.noCloneEvent=!!cf.addEventListener;
cf[bP.expando]=1;
F.attributes=!cf.getAttribute(bP.expando)
})();
var ad={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:F.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
ad.optgroup=ad.option;
ad.tbody=ad.tfoot=ad.colgroup=ad.caption=ad.thead;
ad.th=ad.td;
function k(cg,cd){var ce,ch,cf=0,ci=typeof cg.getElementsByTagName!=="undefined"?cg.getElementsByTagName(cd||"*"):typeof cg.querySelectorAll!=="undefined"?cg.querySelectorAll(cd||"*"):undefined;
if(!ci){for(ci=[],ce=cg.childNodes||cg;
(ch=ce[cf])!=null;
cf++){if(!cd||bP.nodeName(ch,cd)){ci.push(ch)
}else{bP.merge(ci,k(ch,cd))
}}}return cd===undefined||cd&&bP.nodeName(cg,cd)?bP.merge([cg],ci):ci
}function bB(cd,cf){var cg,ce=0;
for(;
(cg=cd[ce])!=null;
ce++){bP._data(cg,"globalEval",!cf||bP._data(cf[ce],"globalEval"))
}}var S=/<|&#?\w+;/,b8=/<tbody/i;
function b5(cd){if(aS.test(cd.type)){cd.defaultChecked=cd.checked
}}function B(ce,cg,cm,cr,cj){var cn,ci,cl,cq,cs,cp,cf,ck=ce.length,ch=C(cg),cd=[],co=0;
for(;
co<ck;
co++){ci=ce[co];
if(ci||ci===0){if(bP.type(ci)==="object"){bP.merge(cd,ci.nodeType?[ci]:ci)
}else{if(!S.test(ci)){cd.push(cg.createTextNode(ci))
}else{cq=cq||ch.appendChild(cg.createElement("div"));
cs=(n.exec(ci)||["",""])[1].toLowerCase();
cf=ad[cs]||ad._default;
cq.innerHTML=cf[1]+bP.htmlPrefilter(ci)+cf[2];
cn=cf[0];
while(cn--){cq=cq.lastChild
}if(!F.leadingWhitespace&&cc.test(ci)){cd.push(cg.createTextNode(cc.exec(ci)[0]))
}if(!F.tbody){ci=cs==="table"&&!b8.test(ci)?cq.firstChild:cf[1]==="<table>"&&!b8.test(ci)?cq:0;
cn=ci&&ci.childNodes.length;
while(cn--){if(bP.nodeName((cp=ci.childNodes[cn]),"tbody")&&!cp.childNodes.length){ci.removeChild(cp)
}}}bP.merge(cd,cq.childNodes);
cq.textContent="";
while(cq.firstChild){cq.removeChild(cq.firstChild)
}cq=ch.lastChild
}}}}if(cq){ch.removeChild(cq)
}if(!F.appendChecked){bP.grep(k(cd,"input"),b5)
}co=0;
while((ci=cd[co++])){if(cr&&bP.inArray(ci,cr)>-1){if(cj){cj.push(ci)
}continue
}cl=bP.contains(ci.ownerDocument,ci);
cq=k(ch.appendChild(ci),"script");
if(cl){bB(cq)
}if(cm){cn=0;
while((ci=cq[cn++])){if(bI.test(ci.type||"")){cm.push(ci)
}}}}cq=null;
return ch
}(function(){var ce,cd,cf=m.createElement("div");
for(ce in {submit:true,change:true,focusin:true}){cd="on"+ce;
if(!(F[ce]=cd in bc)){cf.setAttribute(cd,"t");
F[ce]=cf.attributes[cd].expando===false
}}cf=null
})();
var bN=/^(?:input|select|textarea)$/i,bd=/^key/,bS=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bJ=/^(?:focusinfocus|focusoutblur)$/,bE=/^([^.]*)(?:\.(.+)|)/;
function ac(){return true
}function ah(){return false
}function au(){try{return m.activeElement
}catch(cd){}}function bp(ci,cf,cd,cj,ch,ce){var ck,cg;
if(typeof cf==="object"){if(typeof cd!=="string"){cj=cj||cd;
cd=undefined
}for(cg in cf){bp(ci,cg,cd,cj,cf[cg],ce)
}return ci
}if(cj==null&&ch==null){ch=cd;
cj=cd=undefined
}else{if(ch==null){if(typeof cd==="string"){ch=cj;
cj=undefined
}else{ch=cj;
cj=cd;
cd=undefined
}}}if(ch===false){ch=ah
}else{if(!ch){return ci
}}if(ce===1){ck=ch;
ch=function(cl){bP().off(cl);
return ck.apply(this,arguments)
};
ch.guid=ck.guid||(ck.guid=bP.guid++)
}return ci.each(function(){bP.event.add(this,cf,ch,cj,cd)
})
}bP.event={global:{},add:function(ch,cm,cr,cj,ci){var ck,cs,ct,cf,co,cl,cq,cg,cp,cd,ce,cn=bP._data(ch);
if(!cn){return
}if(cr.handler){cf=cr;
cr=cf.handler;
ci=cf.selector
}if(!cr.guid){cr.guid=bP.guid++
}if(!(cs=cn.events)){cs=cn.events={}
}if(!(cl=cn.handle)){cl=cn.handle=function(cu){return typeof bP!=="undefined"&&(!cu||bP.event.triggered!==cu.type)?bP.event.dispatch.apply(cl.elem,arguments):undefined
};
cl.elem=ch
}cm=(cm||"").match(aM)||[""];
ct=cm.length;
while(ct--){ck=bE.exec(cm[ct])||[];
cp=ce=ck[1];
cd=(ck[2]||"").split(".").sort();
if(!cp){continue
}co=bP.event.special[cp]||{};
cp=(ci?co.delegateType:co.bindType)||cp;
co=bP.event.special[cp]||{};
cq=bP.extend({type:cp,origType:ce,data:cj,handler:cr,guid:cr.guid,selector:ci,needsContext:ci&&bP.expr.match.needsContext.test(ci),namespace:cd.join(".")},cf);
if(!(cg=cs[cp])){cg=cs[cp]=[];
cg.delegateCount=0;
if(!co.setup||co.setup.call(ch,cj,cd,cl)===false){if(ch.addEventListener){ch.addEventListener(cp,cl,false)
}else{if(ch.attachEvent){ch.attachEvent("on"+cp,cl)
}}}}if(co.add){co.add.call(ch,cq);
if(!cq.handler.guid){cq.handler.guid=cr.guid
}}if(ci){cg.splice(cg.delegateCount++,0,cq)
}else{cg.push(cq)
}bP.event.global[cp]=true
}ch=null
},remove:function(cg,cm,ct,ch,cl){var cj,cq,ck,ci,cs,cr,co,cf,cp,cd,ce,cn=bP.hasData(cg)&&bP._data(cg);
if(!cn||!(cr=cn.events)){return
}cm=(cm||"").match(aM)||[""];
cs=cm.length;
while(cs--){ck=bE.exec(cm[cs])||[];
cp=ce=ck[1];
cd=(ck[2]||"").split(".").sort();
if(!cp){for(cp in cr){bP.event.remove(cg,cp+cm[cs],ct,ch,true)
}continue
}co=bP.event.special[cp]||{};
cp=(ch?co.delegateType:co.bindType)||cp;
cf=cr[cp]||[];
ck=ck[2]&&new RegExp("(^|\\.)"+cd.join("\\.(?:.*\\.|)")+"(\\.|$)");
ci=cj=cf.length;
while(cj--){cq=cf[cj];
if((cl||ce===cq.origType)&&(!ct||ct.guid===cq.guid)&&(!ck||ck.test(cq.namespace))&&(!ch||ch===cq.selector||ch==="**"&&cq.selector)){cf.splice(cj,1);
if(cq.selector){cf.delegateCount--
}if(co.remove){co.remove.call(cg,cq)
}}}if(ci&&!cf.length){if(!co.teardown||co.teardown.call(cg,cd,cn.handle)===false){bP.removeEvent(cg,cp,cn.handle)
}delete cr[cp]
}}if(bP.isEmptyObject(cr)){delete cn.handle;
bP._removeData(cg,"events")
}},trigger:function(cd,ck,cg,cr){var cl,cf,cp,cq,cn,cj,ci,ch=[cg||m],co=R.call(cd,"type")?cd.type:cd,ce=R.call(cd,"namespace")?cd.namespace.split("."):[];
cp=cj=cg=cg||m;
if(cg.nodeType===3||cg.nodeType===8){return
}if(bJ.test(co+bP.event.triggered)){return
}if(co.indexOf(".")>-1){ce=co.split(".");
co=ce.shift();
ce.sort()
}cf=co.indexOf(":")<0&&"on"+co;
cd=cd[bP.expando]?cd:new bP.Event(co,typeof cd==="object"&&cd);
cd.isTrigger=cr?2:3;
cd.namespace=ce.join(".");
cd.rnamespace=cd.namespace?new RegExp("(^|\\.)"+ce.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
cd.result=undefined;
if(!cd.target){cd.target=cg
}ck=ck==null?[cd]:bP.makeArray(ck,[cd]);
cn=bP.event.special[co]||{};
if(!cr&&cn.trigger&&cn.trigger.apply(cg,ck)===false){return
}if(!cr&&!cn.noBubble&&!bP.isWindow(cg)){cq=cn.delegateType||co;
if(!bJ.test(cq+co)){cp=cp.parentNode
}for(;
cp;
cp=cp.parentNode){ch.push(cp);
cj=cp
}if(cj===(cg.ownerDocument||m)){ch.push(cj.defaultView||cj.parentWindow||bc)
}}ci=0;
while((cp=ch[ci++])&&!cd.isPropagationStopped()){cd.type=ci>1?cq:cn.bindType||co;
cl=(bP._data(cp,"events")||{})[cd.type]&&bP._data(cp,"handle");
if(cl){cl.apply(cp,ck)
}cl=cf&&cp[cf];
if(cl&&cl.apply&&V(cp)){cd.result=cl.apply(cp,ck);
if(cd.result===false){cd.preventDefault()
}}}cd.type=co;
if(!cr&&!cd.isDefaultPrevented()){if((!cn._default||cn._default.apply(ch.pop(),ck)===false)&&V(cg)){if(cf&&cg[co]&&!bP.isWindow(cg)){cj=cg[cf];
if(cj){cg[cf]=null
}bP.event.triggered=co;
try{cg[co]()
}catch(cm){}bP.event.triggered=undefined;
if(cj){cg[cf]=cj
}}}}return cd.result
},dispatch:function(cd){cd=bP.event.fix(cd);
var ch,cg,ci,ce,cm,cl=[],ck=X.call(arguments),cf=(bP._data(this,"events")||{})[cd.type]||[],cj=bP.event.special[cd.type]||{};
ck[0]=cd;
cd.delegateTarget=this;
if(cj.preDispatch&&cj.preDispatch.call(this,cd)===false){return
}cl=bP.event.handlers.call(this,cd,cf);
ch=0;
while((ce=cl[ch++])&&!cd.isPropagationStopped()){cd.currentTarget=ce.elem;
cg=0;
while((cm=ce.handlers[cg++])&&!cd.isImmediatePropagationStopped()){if(!cd.rnamespace||cd.rnamespace.test(cm.namespace)){cd.handleObj=cm;
cd.data=cm.data;
ci=((bP.event.special[cm.origType]||{}).handle||cm.handler).apply(ce.elem,ck);
if(ci!==undefined){if((cd.result=ci)===false){cd.preventDefault();
cd.stopPropagation()
}}}}}if(cj.postDispatch){cj.postDispatch.call(this,cd)
}return cd.result
},handlers:function(cd,cf){var ch,ci,ce,ck,cj=[],cg=cf.delegateCount,cl=cd.target;
if(cg&&cl.nodeType&&(cd.type!=="click"||isNaN(cd.button)||cd.button<1)){for(;
cl!=this;
cl=cl.parentNode||this){if(cl.nodeType===1&&(cl.disabled!==true||cd.type!=="click")){ci=[];
for(ch=0;
ch<cg;
ch++){ck=cf[ch];
ce=ck.selector+" ";
if(ci[ce]===undefined){ci[ce]=ck.needsContext?bP(ce,this).index(cl)>-1:bP.find(ce,this,null,[cl]).length
}if(ci[ce]){ci.push(ck)
}}if(ci.length){cj.push({elem:cl,handlers:ci})
}}}}if(cg<cf.length){cj.push({elem:this,handlers:cf.slice(cg)})
}return cj
},fix:function(cg){if(cg[bP.expando]){return cg
}var ce,cj,ci,cf=cg.type,cd=cg,ch=this.fixHooks[cf];
if(!ch){this.fixHooks[cf]=ch=bS.test(cf)?this.mouseHooks:bd.test(cf)?this.keyHooks:{}
}ci=ch.props?this.props.concat(ch.props):this.props;
cg=new bP.Event(cd);
ce=ci.length;
while(ce--){cj=ci[ce];
cg[cj]=cd[cj]
}if(!cg.target){cg.target=cd.srcElement||m
}if(cg.target.nodeType===3){cg.target=cg.target.parentNode
}cg.metaKey=!!cg.metaKey;
return ch.filter?ch.filter(cg,cd):cg
},props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(ce,cd){if(ce.which==null){ce.which=cd.charCode!=null?cd.charCode:cd.keyCode
}return ce
}},mouseHooks:{props:("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),filter:function(cg,cf){var cd,ch,ci,ce=cf.button,cj=cf.fromElement;
if(cg.pageX==null&&cf.clientX!=null){ch=cg.target.ownerDocument||m;
ci=ch.documentElement;
cd=ch.body;
cg.pageX=cf.clientX+(ci&&ci.scrollLeft||cd&&cd.scrollLeft||0)-(ci&&ci.clientLeft||cd&&cd.clientLeft||0);
cg.pageY=cf.clientY+(ci&&ci.scrollTop||cd&&cd.scrollTop||0)-(ci&&ci.clientTop||cd&&cd.clientTop||0)
}if(!cg.relatedTarget&&cj){cg.relatedTarget=cj===cg.target?cf.toElement:cj
}if(!cg.which&&ce!==undefined){cg.which=(ce&1?1:(ce&2?3:(ce&4?2:0)))
}return cg
}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==au()&&this.focus){try{this.focus();
return false
}catch(cd){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===au()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(bP.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false
}},_default:function(cd){return bP.nodeName(cd.target,"a")
}},beforeunload:{postDispatch:function(cd){if(cd.result!==undefined&&cd.originalEvent){cd.originalEvent.returnValue=cd.result
}}}},simulate:function(cd,cf,ce){var cg=bP.extend(new bP.Event(),ce,{type:cd,isSimulated:true});
bP.event.trigger(cg,null,cf);
if(cg.isDefaultPrevented()){ce.preventDefault()
}}};
bP.removeEvent=m.removeEventListener?function(ce,cd,cf){if(ce.removeEventListener){ce.removeEventListener(cd,cf)
}}:function(cf,ce,cg){var cd="on"+ce;
if(cf.detachEvent){if(typeof cf[cd]==="undefined"){cf[cd]=null
}cf.detachEvent(cd,cg)
}};
bP.Event=function(ce,cd){if(!(this instanceof bP.Event)){return new bP.Event(ce,cd)
}if(ce&&ce.type){this.originalEvent=ce;
this.type=ce.type;
this.isDefaultPrevented=ce.defaultPrevented||ce.defaultPrevented===undefined&&ce.returnValue===false?ac:ah
}else{this.type=ce
}if(cd){bP.extend(this,cd)
}this.timeStamp=ce&&ce.timeStamp||bP.now();
this[bP.expando]=true
};
bP.Event.prototype={constructor:bP.Event,isDefaultPrevented:ah,isPropagationStopped:ah,isImmediatePropagationStopped:ah,preventDefault:function(){var cd=this.originalEvent;
this.isDefaultPrevented=ac;
if(!cd){return
}if(cd.preventDefault){cd.preventDefault()
}else{cd.returnValue=false
}},stopPropagation:function(){var cd=this.originalEvent;
this.isPropagationStopped=ac;
if(!cd||this.isSimulated){return
}if(cd.stopPropagation){cd.stopPropagation()
}cd.cancelBubble=true
},stopImmediatePropagation:function(){var cd=this.originalEvent;
this.isImmediatePropagationStopped=ac;
if(cd&&cd.stopImmediatePropagation){cd.stopImmediatePropagation()
}this.stopPropagation()
}};
bP.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(ce,cd){bP.event.special[ce]={delegateType:cd,bindType:cd,handle:function(ch){var cf,cj=this,ci=ch.relatedTarget,cg=ch.handleObj;
if(!ci||(ci!==cj&&!bP.contains(cj,ci))){ch.type=cg.origType;
cf=cg.handler.apply(this,arguments);
ch.type=cd
}return cf
}}
});
if(!F.submit){bP.event.special.submit={setup:function(){if(bP.nodeName(this,"form")){return false
}bP.event.add(this,"click._submit keypress._submit",function(cf){var ce=cf.target,cd=bP.nodeName(ce,"input")||bP.nodeName(ce,"button")?bP.prop(ce,"form"):undefined;
if(cd&&!bP._data(cd,"submit")){bP.event.add(cd,"submit._submit",function(cg){cg._submitBubble=true
});
bP._data(cd,"submit",true)
}})
},postDispatch:function(cd){if(cd._submitBubble){delete cd._submitBubble;
if(this.parentNode&&!cd.isTrigger){bP.event.simulate("submit",this.parentNode,cd)
}}},teardown:function(){if(bP.nodeName(this,"form")){return false
}bP.event.remove(this,"._submit")
}}
}if(!F.change){bP.event.special.change={setup:function(){if(bN.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bP.event.add(this,"propertychange._change",function(cd){if(cd.originalEvent.propertyName==="checked"){this._justChanged=true
}});
bP.event.add(this,"click._change",function(cd){if(this._justChanged&&!cd.isTrigger){this._justChanged=false
}bP.event.simulate("change",this,cd)
})
}return false
}bP.event.add(this,"beforeactivate._change",function(ce){var cd=ce.target;
if(bN.test(cd.nodeName)&&!bP._data(cd,"change")){bP.event.add(cd,"change._change",function(cf){if(this.parentNode&&!cf.isSimulated&&!cf.isTrigger){bP.event.simulate("change",this.parentNode,cf)
}});
bP._data(cd,"change",true)
}})
},handle:function(ce){var cd=ce.target;
if(this!==cd||ce.isSimulated||ce.isTrigger||(cd.type!=="radio"&&cd.type!=="checkbox")){return ce.handleObj.handler.apply(this,arguments)
}},teardown:function(){bP.event.remove(this,"._change");
return !bN.test(this.nodeName)
}}
}if(!F.focusin){bP.each({focus:"focusin",blur:"focusout"},function(cf,cd){var ce=function(cg){bP.event.simulate(cd,cg.target,bP.event.fix(cg))
};
bP.event.special[cd]={setup:function(){var ch=this.ownerDocument||this,cg=bP._data(ch,cd);
if(!cg){ch.addEventListener(cf,ce,true)
}bP._data(ch,cd,(cg||0)+1)
},teardown:function(){var ch=this.ownerDocument||this,cg=bP._data(ch,cd)-1;
if(!cg){ch.removeEventListener(cf,ce,true);
bP._removeData(ch,cd)
}else{bP._data(ch,cd,cg)
}}}
})
}bP.fn.extend({on:function(ce,cd,cg,cf){return bp(this,ce,cd,cg,cf)
},one:function(ce,cd,cg,cf){return bp(this,ce,cd,cg,cf,1)
},off:function(cf,cd,ch){var ce,cg;
if(cf&&cf.preventDefault&&cf.handleObj){ce=cf.handleObj;
bP(cf.delegateTarget).off(ce.namespace?ce.origType+"."+ce.namespace:ce.origType,ce.selector,ce.handler);
return this
}if(typeof cf==="object"){for(cg in cf){this.off(cg,cd,cf[cg])
}return this
}if(cd===false||typeof cd==="function"){ch=cd;
cd=undefined
}if(ch===false){ch=ah
}return this.each(function(){bP.event.remove(this,cf,ch,cd)
})
},trigger:function(cd,ce){return this.each(function(){bP.event.trigger(cd,ce,this)
})
},triggerHandler:function(cd,cf){var ce=this[0];
if(ce){return bP.event.trigger(cd,cf,ce,true)
}}});
var aK=/ jQuery\d+="(?:null|\d+)"/g,T=new RegExp("<(?:"+d+")[\\s/>]","i"),aN=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,av=/<script|<style|<link/i,b4=/checked\s*(?:[^=]|=\s*.checked.)/i,az=/^true\/(.*)/,aU=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,a0=C(m),j=a0.appendChild(m.createElement("div"));
function ba(ce,cd){return bP.nodeName(ce,"table")&&bP.nodeName(cd.nodeType!==11?cd:cd.firstChild,"tr")?ce.getElementsByTagName("tbody")[0]||ce.appendChild(ce.ownerDocument.createElement("tbody")):ce
}function u(cd){cd.type=(bP.find.attr(cd,"type")!==null)+"/"+cd.type;
return cd
}function bm(ce){var cd=az.exec(ce.type);
if(cd){ce.type=cd[1]
}else{ce.removeAttribute("type")
}return ce
}function aA(ck,ce){if(ce.nodeType!==1||!bP.hasData(ck)){return
}var ch,cg,cd,cj=bP._data(ck),ci=bP._data(ce,cj),cf=cj.events;
if(cf){delete ci.handle;
ci.events={};
for(ch in cf){for(cg=0,cd=cf[ch].length;
cg<cd;
cg++){bP.event.add(ce,ch,cf[ch][cg])
}}}if(ci.data){ci.data=bP.extend({},ci.data)
}}function ab(cg,cd){var ch,cf,ce;
if(cd.nodeType!==1){return
}ch=cd.nodeName.toLowerCase();
if(!F.noCloneEvent&&cd[bP.expando]){ce=bP._data(cd);
for(cf in ce.events){bP.removeEvent(cd,cf,ce.handle)
}cd.removeAttribute(bP.expando)
}if(ch==="script"&&cd.text!==cg.text){u(cd).text=cg.text;
bm(cd)
}else{if(ch==="object"){if(cd.parentNode){cd.outerHTML=cg.outerHTML
}if(F.html5Clone&&(cg.innerHTML&&!bP.trim(cd.innerHTML))){cd.innerHTML=cg.innerHTML
}}else{if(ch==="input"&&aS.test(cg.type)){cd.defaultChecked=cd.checked=cg.checked;
if(cd.value!==cg.value){cd.value=cg.value
}}else{if(ch==="option"){cd.defaultSelected=cd.selected=cg.defaultSelected
}else{if(ch==="input"||ch==="textarea"){cd.defaultValue=cg.defaultValue
}}}}}}function J(cl,cn,cr,cg){cn=aH.apply([],cn);
var ck,cf,cd,ci,cp,cm,cj=0,ch=cl.length,cq=ch-1,co=cn[0],ce=bP.isFunction(co);
if(ce||(ch>1&&typeof co==="string"&&!F.checkClone&&b4.test(co))){return cl.each(function(ct){var cs=cl.eq(ct);
if(ce){cn[0]=co.call(this,ct,cs.html())
}J(cs,cn,cr,cg)
})
}if(ch){cm=B(cn,cl[0].ownerDocument,false,cl,cg);
ck=cm.firstChild;
if(cm.childNodes.length===1){cm=ck
}if(ck||cg){ci=bP.map(k(cm,"script"),u);
cd=ci.length;
for(;
cj<ch;
cj++){cf=cm;
if(cj!==cq){cf=bP.clone(cf,true,true);
if(cd){bP.merge(ci,k(cf,"script"))
}}cr.call(cl[cj],cf,cj)
}if(cd){cp=ci[ci.length-1].ownerDocument;
bP.map(ci,bm);
for(cj=0;
cj<cd;
cj++){cf=ci[cj];
if(bI.test(cf.type||"")&&!bP._data(cf,"globalEval")&&bP.contains(cp,cf)){if(cf.src){if(bP._evalUrl){bP._evalUrl(cf.src)
}}else{bP.globalEval((cf.text||cf.textContent||cf.innerHTML||"").replace(aU,""))
}}}}cm=ck=null
}}return cl
}function L(ch,cd,ci){var cg,ce=cd?bP.filter(cd,ch):ch,cf=0;
for(;
(cg=ce[cf])!=null;
cf++){if(!ci&&cg.nodeType===1){bP.cleanData(k(cg))
}if(cg.parentNode){if(ci&&bP.contains(cg.ownerDocument,cg)){bB(k(cg,"script"))
}cg.parentNode.removeChild(cg)
}}return ch
}bP.extend({htmlPrefilter:function(cd){return cd.replace(aN,"<$1></$2>")
},clone:function(ce,cg,cd){var ci,cf,cl,ch,cj,ck=bP.contains(ce.ownerDocument,ce);
if(F.html5Clone||bP.isXMLDoc(ce)||!T.test("<"+ce.nodeName+">")){cl=ce.cloneNode(true)
}else{j.innerHTML=ce.outerHTML;
j.removeChild(cl=j.firstChild)
}if((!F.noCloneEvent||!F.noCloneChecked)&&(ce.nodeType===1||ce.nodeType===11)&&!bP.isXMLDoc(ce)){ci=k(cl);
cj=k(ce);
for(ch=0;
(cf=cj[ch])!=null;
++ch){if(ci[ch]){ab(cf,ci[ch])
}}}if(cg){if(cd){cj=cj||k(ce);
ci=ci||k(cl);
for(ch=0;
(cf=cj[ch])!=null;
ch++){aA(cf,ci[ch])
}}else{aA(ce,cl)
}}ci=k(cl,"script");
if(ci.length>0){bB(ci,!ck&&k(ce,"script"))
}ci=cj=cf=null;
return cl
},cleanData:function(ce,cm){var cg,cl,cf,ci,cj=0,cn=bP.expando,cd=bP.cache,ch=F.attributes,ck=bP.event.special;
for(;
(cg=ce[cj])!=null;
cj++){if(cm||V(cg)){cf=cg[cn];
ci=cf&&cd[cf];
if(ci){if(ci.events){for(cl in ci.events){if(ck[cl]){bP.event.remove(cg,cl)
}else{bP.removeEvent(cg,cl,ci.handle)
}}}if(cd[cf]){delete cd[cf];
if(!ch&&typeof cg.removeAttribute!=="undefined"){cg.removeAttribute(cn)
}else{cg[cn]=undefined
}aW.push(cf)
}}}}}});
bP.fn.extend({domManip:J,detach:function(cd){return L(this,cd,true)
},remove:function(cd){return L(this,cd)
},text:function(cd){return aJ(this,function(ce){return ce===undefined?bP.text(this):this.empty().append((this[0]&&this[0].ownerDocument||m).createTextNode(ce))
},null,cd,arguments.length)
},append:function(){return J(this,arguments,function(cd){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var ce=ba(this,cd);
ce.appendChild(cd)
}})
},prepend:function(){return J(this,arguments,function(cd){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var ce=ba(this,cd);
ce.insertBefore(cd,ce.firstChild)
}})
},before:function(){return J(this,arguments,function(cd){if(this.parentNode){this.parentNode.insertBefore(cd,this)
}})
},after:function(){return J(this,arguments,function(cd){if(this.parentNode){this.parentNode.insertBefore(cd,this.nextSibling)
}})
},empty:function(){var ce,cd=0;
for(;
(ce=this[cd])!=null;
cd++){if(ce.nodeType===1){bP.cleanData(k(ce,false))
}while(ce.firstChild){ce.removeChild(ce.firstChild)
}if(ce.options&&bP.nodeName(ce,"select")){ce.options.length=0
}}return this
},clone:function(ce,cd){ce=ce==null?false:ce;
cd=cd==null?ce:cd;
return this.map(function(){return bP.clone(this,ce,cd)
})
},html:function(cd){return aJ(this,function(ch){var cg=this[0]||{},cf=0,ce=this.length;
if(ch===undefined){return cg.nodeType===1?cg.innerHTML.replace(aK,""):undefined
}if(typeof ch==="string"&&!av.test(ch)&&(F.htmlSerialize||!T.test(ch))&&(F.leadingWhitespace||!cc.test(ch))&&!ad[(n.exec(ch)||["",""])[1].toLowerCase()]){ch=bP.htmlPrefilter(ch);
try{for(;
cf<ce;
cf++){cg=this[cf]||{};
if(cg.nodeType===1){bP.cleanData(k(cg,false));
cg.innerHTML=ch
}}cg=0
}catch(ci){}}if(cg){this.empty().append(ch)
}},null,cd,arguments.length)
},replaceWith:function(){var cd=[];
return J(this,arguments,function(cf){var ce=this.parentNode;
if(bP.inArray(this,cd)<0){bP.cleanData(k(this));
if(ce){ce.replaceChild(cf,this)
}}},cd)
}});
bP.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(cd,ce){bP.fn[cd]=function(cf){var cg,ci=0,ch=[],ck=bP(cf),cj=ck.length-1;
for(;
ci<=cj;
ci++){cg=ci===cj?this:this.clone(true);
bP(ck[ci])[ce](cg);
w.apply(ch,cg.get())
}return this.pushStack(ch)
}
});
var aO,bs={HTML:"block",BODY:"block"};
function bb(cd,cg){var ce=bP(cg.createElement(cd)).appendTo(cg.body),cf=bP.css(ce[0],"display");
ce.detach();
return cf
}function a8(cf){var ce=m,cd=bs[cf];
if(!cd){cd=bb(cf,ce);
if(cd==="none"||!cd){aO=(aO||bP("<iframe frameborder='0' width='0' height='0'/>")).appendTo(ce.documentElement);
ce=(aO[0].contentWindow||aO[0].contentDocument).document;
ce.write();
ce.close();
cd=bb(cf,ce);
aO.detach()
}bs[cf]=cd
}return cd
}var a7=(/^margin/);
var ag=new RegExp("^("+aL+")(?!px)[a-z%]+$","i");
var K=function(ci,ch,cj,cg){var cf,ce,cd={};
for(ce in ch){cd[ce]=ci.style[ce];
ci.style[ce]=ch[ce]
}cf=cj.apply(ci,cg||[]);
for(ce in ch){ci.style[ce]=cd[ce]
}return cf
};
var b1=m.documentElement;
(function(){var ci,cf,cj,cl,ck,cg,ce=m.createElement("div"),cd=m.createElement("div");
if(!cd.style){return
}cd.style.cssText="float:left;opacity:.5";
F.opacity=cd.style.opacity==="0.5";
F.cssFloat=!!cd.style.cssFloat;
cd.style.backgroundClip="content-box";
cd.cloneNode(true).style.backgroundClip="";
F.clearCloneStyle=cd.style.backgroundClip==="content-box";
ce=m.createElement("div");
ce.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
cd.innerHTML="";
ce.appendChild(cd);
F.boxSizing=cd.style.boxSizing===""||cd.style.MozBoxSizing===""||cd.style.WebkitBoxSizing==="";
bP.extend(F,{reliableHiddenOffsets:function(){if(ci==null){ch()
}return cl
},boxSizingReliable:function(){if(ci==null){ch()
}return cj
},pixelMarginRight:function(){if(ci==null){ch()
}return cf
},pixelPosition:function(){if(ci==null){ch()
}return ci
},reliableMarginRight:function(){if(ci==null){ch()
}return ck
},reliableMarginLeft:function(){if(ci==null){ch()
}return cg
}});
function ch(){var cn,cm,co=m.documentElement;
co.appendChild(ce);
cd.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
ci=cj=cg=false;
cf=ck=true;
if(bc.getComputedStyle){cm=bc.getComputedStyle(cd);
ci=(cm||{}).top!=="1%";
cg=(cm||{}).marginLeft==="2px";
cj=(cm||{width:"4px"}).width==="4px";
cd.style.marginRight="50%";
cf=(cm||{marginRight:"4px"}).marginRight==="4px";
cn=cd.appendChild(m.createElement("div"));
cn.style.cssText=cd.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
cn.style.marginRight=cn.style.width="0";
cd.style.width="1px";
ck=!parseFloat((bc.getComputedStyle(cn)||{}).marginRight);
cd.removeChild(cn)
}cd.style.display="none";
cl=cd.getClientRects().length===0;
if(cl){cd.style.display="";
cd.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cd.childNodes[0].style.borderCollapse="separate";
cn=cd.getElementsByTagName("td");
cn[0].style.cssText="margin:0;border:0;padding:0;display:none";
cl=cn[0].offsetHeight===0;
if(cl){cn[0].style.display="";
cn[1].style.display="none";
cl=cn[0].offsetHeight===0
}}co.removeChild(ce)
}})();
var bx,I,bv=/^(top|right|bottom|left)$/;
if(bc.getComputedStyle){bx=function(ce){var cd=ce.ownerDocument.defaultView;
if(!cd||!cd.opener){cd=bc
}return cd.getComputedStyle(ce)
};
I=function(ck,ce,cj){var ch,cg,ci,cd,cf=ck.style;
cj=cj||bx(ck);
cd=cj?cj.getPropertyValue(ce)||cj[ce]:undefined;
if((cd===""||cd===undefined)&&!bP.contains(ck.ownerDocument,ck)){cd=bP.style(ck,ce)
}if(cj){if(!F.pixelMarginRight()&&ag.test(cd)&&a7.test(ce)){ch=cf.width;
cg=cf.minWidth;
ci=cf.maxWidth;
cf.minWidth=cf.maxWidth=cf.width=cd;
cd=cj.width;
cf.width=ch;
cf.minWidth=cg;
cf.maxWidth=ci
}}return cd===undefined?cd:cd+""
}
}else{if(b1.currentStyle){bx=function(cd){return cd.currentStyle
};
I=function(cj,cg,ci){var ck,ce,cd,cf,ch=cj.style;
ci=ci||bx(cj);
cf=ci?ci[cg]:undefined;
if(cf==null&&ch&&ch[cg]){cf=ch[cg]
}if(ag.test(cf)&&!bv.test(cg)){ck=ch.left;
ce=cj.runtimeStyle;
cd=ce&&ce.left;
if(cd){ce.left=cj.currentStyle.left
}ch.left=cg==="fontSize"?"1em":cf;
cf=ch.pixelLeft+"px";
ch.left=ck;
if(cd){ce.left=cd
}}return cf===undefined?cf:cf+""||"auto"
}
}}function be(cd,ce){return{get:function(){if(cd()){delete this.get;
return
}return(this.get=ce).apply(this,arguments)
}}
}var bq=/alpha\([^)]*\)/i,a2=/opacity\s*=\s*([^)]*)/i,M=/^(none|table(?!-c[ea]).+)/,bi=new RegExp("^("+aL+")(.*)$","i"),bl={position:"absolute",visibility:"hidden",display:"block"},bK={letterSpacing:"0",fontWeight:"400"},aE=["Webkit","O","Moz","ms"],bY=m.createElement("div").style;
function c(cd){if(cd in bY){return cd
}var cf=cd.charAt(0).toUpperCase()+cd.slice(1),ce=aE.length;
while(ce--){cd=aE[ce]+cf;
if(cd in bY){return cd
}}}function r(cj,cd){var ck,ch,ci,ce=[],cf=0,cg=cj.length;
for(;
cf<cg;
cf++){ch=cj[cf];
if(!ch.style){continue
}ce[cf]=bP._data(ch,"olddisplay");
ck=ch.style.display;
if(cd){if(!ce[cf]&&ck==="none"){ch.style.display=""
}if(ch.style.display===""&&aa(ch)){ce[cf]=bP._data(ch,"olddisplay",a8(ch.nodeName))
}}else{ci=aa(ch);
if(ck&&ck!=="none"||!ci){bP._data(ch,"olddisplay",ci?ck:bP.css(ch,"display"))
}}}for(cf=0;
cf<cg;
cf++){ch=cj[cf];
if(!ch.style){continue
}if(!cd||ch.style.display==="none"||ch.style.display===""){ch.style.display=cd?ce[cf]||"":"none"
}}return cj
}function aT(cd,cf,cg){var ce=bi.exec(cf);
return ce?Math.max(0,ce[1]-(cg||0))+(ce[2]||"px"):cf
}function aF(ch,ce,cd,cj,cg){var cf=cd===(cj?"border":"content")?4:ce==="width"?1:0,ci=0;
for(;
cf<4;
cf+=2){if(cd==="margin"){ci+=bP.css(ch,cd+b0[cf],true,cg)
}if(cj){if(cd==="content"){ci-=bP.css(ch,"padding"+b0[cf],true,cg)
}if(cd!=="margin"){ci-=bP.css(ch,"border"+b0[cf]+"Width",true,cg)
}}else{ci+=bP.css(ch,"padding"+b0[cf],true,cg);
if(cd!=="padding"){ci+=bP.css(ch,"border"+b0[cf]+"Width",true,cg)
}}}return ci
}function v(ch,ce,cd){var cg=true,ci=ce==="width"?ch.offsetWidth:ch.offsetHeight,cf=bx(ch),cj=F.boxSizing&&bP.css(ch,"boxSizing",false,cf)==="border-box";
if(ci<=0||ci==null){ci=I(ch,ce,cf);
if(ci<0||ci==null){ci=ch.style[ce]
}if(ag.test(ci)){return ci
}cg=cj&&(F.boxSizingReliable()||ci===ch.style[ce]);
ci=parseFloat(ci)||0
}return(ci+aF(ch,ce,cd||(cj?"border":"content"),cg,cf))+"px"
}bP.extend({cssHooks:{opacity:{get:function(cf,ce){if(ce){var cd=I(cf,"opacity");
return cd===""?"1":cd
}}}},cssNumber:{animationIterationCount:true,columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":F.cssFloat?"cssFloat":"styleFloat"},style:function(cf,ce,cl,cg){if(!cf||cf.nodeType===3||cf.nodeType===8||!cf.style){return
}var cj,ck,cm,ch=bP.camelCase(ce),cd=cf.style;
ce=bP.cssProps[ch]||(bP.cssProps[ch]=c(ch)||ch);
cm=bP.cssHooks[ce]||bP.cssHooks[ch];
if(cl!==undefined){ck=typeof cl;
if(ck==="string"&&(cj=b6.exec(cl))&&cj[1]){cl=A(cf,ce,cj);
ck="number"
}if(cl==null||cl!==cl){return
}if(ck==="number"){cl+=cj&&cj[3]||(bP.cssNumber[ch]?"":"px")
}if(!F.clearCloneStyle&&cl===""&&ce.indexOf("background")===0){cd[ce]="inherit"
}if(!cm||!("set" in cm)||(cl=cm.set(cf,cl,cg))!==undefined){try{cd[ce]=cl
}catch(ci){}}}else{if(cm&&"get" in cm&&(cj=cm.get(cf,false,cg))!==undefined){return cj
}return cd[ce]
}},css:function(cj,ch,ce,ci){var cg,ck,cd,cf=bP.camelCase(ch);
ch=bP.cssProps[cf]||(bP.cssProps[cf]=c(cf)||cf);
cd=bP.cssHooks[ch]||bP.cssHooks[cf];
if(cd&&"get" in cd){ck=cd.get(cj,true,ce)
}if(ck===undefined){ck=I(cj,ch,ci)
}if(ck==="normal"&&ch in bK){ck=bK[ch]
}if(ce===""||ce){cg=parseFloat(ck);
return ce===true||isFinite(cg)?cg||0:ck
}return ck
}});
bP.each(["height","width"],function(ce,cd){bP.cssHooks[cd]={get:function(ch,cg,cf){if(cg){return M.test(bP.css(ch,"display"))&&ch.offsetWidth===0?K(ch,bl,function(){return v(ch,cd,cf)
}):v(ch,cd,cf)
}},set:function(ch,ci,cf){var cg=cf&&bx(ch);
return aT(ch,ci,cf?aF(ch,cd,cf,F.boxSizing&&bP.css(ch,"boxSizing",false,cg)==="border-box",cg):0)
}}
});
if(!F.opacity){bP.cssHooks.opacity={get:function(ce,cd){return a2.test((cd&&ce.currentStyle?ce.currentStyle.filter:ce.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":cd?"1":""
},set:function(ch,ci){var cg=ch.style,ce=ch.currentStyle,cd=bP.isNumeric(ci)?"alpha(opacity="+ci*100+")":"",cf=ce&&ce.filter||cg.filter||"";
cg.zoom=1;
if((ci>=1||ci==="")&&bP.trim(cf.replace(bq,""))===""&&cg.removeAttribute){cg.removeAttribute("filter");
if(ci===""||ce&&!ce.filter){return
}}cg.filter=bq.test(cf)?cf.replace(bq,cd):cf+" "+cd
}}
}bP.cssHooks.marginRight=be(F.reliableMarginRight,function(ce,cd){if(cd){return K(ce,{display:"inline-block"},I,[ce,"marginRight"])
}});
bP.cssHooks.marginLeft=be(F.reliableMarginLeft,function(ce,cd){if(cd){return(parseFloat(I(ce,"marginLeft"))||(bP.contains(ce.ownerDocument,ce)?ce.getBoundingClientRect().left-K(ce,{marginLeft:0},function(){return ce.getBoundingClientRect().left
}):0))+"px"
}});
bP.each({margin:"",padding:"",border:"Width"},function(cd,ce){bP.cssHooks[cd+ce]={expand:function(ch){var cg=0,cf={},ci=typeof ch==="string"?ch.split(" "):[ch];
for(;
cg<4;
cg++){cf[cd+b0[cg]+ce]=ci[cg]||ci[cg-2]||ci[0]
}return cf
}};
if(!a7.test(cd)){bP.cssHooks[cd+ce].set=aT
}});
bP.fn.extend({css:function(cd,ce){return aJ(this,function(cj,cg,ck){var ci,cf,cl={},ch=0;
if(bP.isArray(cg)){ci=bx(cj);
cf=cg.length;
for(;
ch<cf;
ch++){cl[cg[ch]]=bP.css(cj,cg[ch],false,ci)
}return cl
}return ck!==undefined?bP.style(cj,cg,ck):bP.css(cj,cg)
},cd,ce,arguments.length>1)
},show:function(){return r(this,true)
},hide:function(){return r(this)
},toggle:function(cd){if(typeof cd==="boolean"){return cd?this.show():this.hide()
}return this.each(function(){if(aa(this)){bP(this).show()
}else{bP(this).hide()
}})
}});
function P(cf,ce,ch,cd,cg){return new P.prototype.init(cf,ce,ch,cd,cg)
}bP.Tween=P;
P.prototype={constructor:P,init:function(cg,ce,ci,cd,ch,cf){this.elem=cg;
this.prop=ci;
this.easing=ch||bP.easing._default;
this.options=ce;
this.start=this.now=this.cur();
this.end=cd;
this.unit=cf||(bP.cssNumber[ci]?"":"px")
},cur:function(){var cd=P.propHooks[this.prop];
return cd&&cd.get?cd.get(this):P.propHooks._default.get(this)
},run:function(cf){var ce,cd=P.propHooks[this.prop];
if(this.options.duration){this.pos=ce=bP.easing[this.easing](cf,this.options.duration*cf,0,1,this.options.duration)
}else{this.pos=ce=cf
}this.now=(this.end-this.start)*ce+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(cd&&cd.set){cd.set(this)
}else{P.propHooks._default.set(this)
}return this
}};
P.prototype.init.prototype=P.prototype;
P.propHooks={_default:{get:function(ce){var cd;
if(ce.elem.nodeType!==1||ce.elem[ce.prop]!=null&&ce.elem.style[ce.prop]==null){return ce.elem[ce.prop]
}cd=bP.css(ce.elem,ce.prop,"");
return !cd||cd==="auto"?0:cd
},set:function(cd){if(bP.fx.step[cd.prop]){bP.fx.step[cd.prop](cd)
}else{if(cd.elem.nodeType===1&&(cd.elem.style[bP.cssProps[cd.prop]]!=null||bP.cssHooks[cd.prop])){bP.style(cd.elem,cd.prop,cd.now+cd.unit)
}else{cd.elem[cd.prop]=cd.now
}}}}};
P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(cd){if(cd.elem.nodeType&&cd.elem.parentNode){cd.elem[cd.prop]=cd.now
}}};
bP.easing={linear:function(cd){return cd
},swing:function(cd){return 0.5-Math.cos(cd*Math.PI)/2
},_default:"swing"};
bP.fx=P.prototype.init;
bP.fx.step={};
var U,al,bX=/^(?:toggle|show|hide)$/,bV=/queueHooks$/;
function bu(){bc.setTimeout(function(){U=undefined
});
return(U=bP.now())
}function bO(cf,ch){var cg,cd={height:cf},ce=0;
ch=ch?1:0;
for(;
ce<4;
ce+=2-ch){cg=b0[ce];
cd["margin"+cg]=cd["padding"+cg]=cf
}if(ch){cd.opacity=cd.width=cf
}return cd
}function bk(ch,cj,cg){var ce,ci=(e.tweeners[cj]||[]).concat(e.tweeners["*"]),cd=0,cf=ci.length;
for(;
cd<cf;
cd++){if((ce=ci[cd].call(cg,cj,ch))){return ce
}}}function g(cg,cl,cd){var cf,co,ci,cr,cs,cp,ck,cn,ch=this,cm={},ce=cg.style,cj=cg.nodeType&&aa(cg),cq=bP._data(cg,"fxshow");
if(!cd.queue){cs=bP._queueHooks(cg,"fx");
if(cs.unqueued==null){cs.unqueued=0;
cp=cs.empty.fire;
cs.empty.fire=function(){if(!cs.unqueued){cp()
}}
}cs.unqueued++;
ch.always(function(){ch.always(function(){cs.unqueued--;
if(!bP.queue(cg,"fx").length){cs.empty.fire()
}})
})
}if(cg.nodeType===1&&("height" in cl||"width" in cl)){cd.overflow=[ce.overflow,ce.overflowX,ce.overflowY];
ck=bP.css(cg,"display");
cn=ck==="none"?bP._data(cg,"olddisplay")||a8(cg.nodeName):ck;
if(cn==="inline"&&bP.css(cg,"float")==="none"){if(!F.inlineBlockNeedsLayout||a8(cg.nodeName)==="inline"){ce.display="inline-block"
}else{ce.zoom=1
}}}if(cd.overflow){ce.overflow="hidden";
if(!F.shrinkWrapBlocks()){ch.always(function(){ce.overflow=cd.overflow[0];
ce.overflowX=cd.overflow[1];
ce.overflowY=cd.overflow[2]
})
}}for(cf in cl){co=cl[cf];
if(bX.exec(co)){delete cl[cf];
ci=ci||co==="toggle";
if(co===(cj?"hide":"show")){if(co==="show"&&cq&&cq[cf]!==undefined){cj=true
}else{continue
}}cm[cf]=cq&&cq[cf]||bP.style(cg,cf)
}else{ck=undefined
}}if(!bP.isEmptyObject(cm)){if(cq){if("hidden" in cq){cj=cq.hidden
}}else{cq=bP._data(cg,"fxshow",{})
}if(ci){cq.hidden=!cj
}if(cj){bP(cg).show()
}else{ch.done(function(){bP(cg).hide()
})
}ch.done(function(){var ct;
bP._removeData(cg,"fxshow");
for(ct in cm){bP.style(cg,ct,cm[ct])
}});
for(cf in cm){cr=bk(cj?cq[cf]:0,cf,ch);
if(!(cf in cq)){cq[cf]=cr.start;
if(cj){cr.end=cr.start;
cr.start=cf==="width"||cf==="height"?1:0
}}}}else{if((ck==="none"?a8(cg.nodeName):ck)==="inline"){ce.display=ck
}}}function aw(cg,ci){var cf,ce,cj,ch,cd;
for(cf in cg){ce=bP.camelCase(cf);
cj=ci[ce];
ch=cg[cf];
if(bP.isArray(ch)){cj=ch[1];
ch=cg[cf]=ch[0]
}if(cf!==ce){cg[ce]=ch;
delete cg[cf]
}cd=bP.cssHooks[ce];
if(cd&&"expand" in cd){ch=cd.expand(ch);
delete cg[ce];
for(cf in ch){if(!(cf in cg)){cg[cf]=ch[cf];
ci[cf]=cj
}}}else{ci[ce]=cj
}}}function e(cf,cj,cm){var cn,cd,ci=0,ce=e.prefilters.length,cl=bP.Deferred().always(function(){delete ch.elem
}),ch=function(){if(cd){return false
}var ct=U||bu(),cq=Math.max(0,cg.startTime+cg.duration-ct),co=cq/cg.duration||0,cs=1-co,cp=0,cr=cg.tweens.length;
for(;
cp<cr;
cp++){cg.tweens[cp].run(cs)
}cl.notifyWith(cf,[cg,cs,cq]);
if(cs<1&&cr){return cq
}else{cl.resolveWith(cf,[cg]);
return false
}},cg=cl.promise({elem:cf,props:bP.extend({},cj),opts:bP.extend(true,{specialEasing:{},easing:bP.easing._default},cm),originalProperties:cj,originalOptions:cm,startTime:U||bu(),duration:cm.duration,tweens:[],createTween:function(cq,co){var cp=bP.Tween(cf,cg.opts,cq,co,cg.opts.specialEasing[cq]||cg.opts.easing);
cg.tweens.push(cp);
return cp
},stop:function(cp){var co=0,cq=cp?cg.tweens.length:0;
if(cd){return this
}cd=true;
for(;
co<cq;
co++){cg.tweens[co].run(1)
}if(cp){cl.notifyWith(cf,[cg,1,0]);
cl.resolveWith(cf,[cg,cp])
}else{cl.rejectWith(cf,[cg,cp])
}return this
}}),ck=cg.props;
aw(ck,cg.opts.specialEasing);
for(;
ci<ce;
ci++){cn=e.prefilters[ci].call(cg,cf,ck,cg.opts);
if(cn){if(bP.isFunction(cn.stop)){bP._queueHooks(cg.elem,cg.opts.queue).stop=bP.proxy(cn.stop,cn)
}return cn
}}bP.map(ck,bk,cg);
if(bP.isFunction(cg.opts.start)){cg.opts.start.call(cf,cg)
}bP.fx.timer(bP.extend(ch,{elem:cf,anim:cg,queue:cg.opts.queue}));
return cg.progress(cg.opts.progress).done(cg.opts.done,cg.opts.complete).fail(cg.opts.fail).always(cg.opts.always)
}bP.Animation=bP.extend(e,{tweeners:{"*":[function(cf,ce){var cd=this.createTween(cf,ce);
A(cd.elem,cf,b6.exec(ce),cd);
return cd
}]},tweener:function(ce,ch){if(bP.isFunction(ce)){ch=ce;
ce=["*"]
}else{ce=ce.match(aM)
}var cg,cd=0,cf=ce.length;
for(;
cd<cf;
cd++){cg=ce[cd];
e.tweeners[cg]=e.tweeners[cg]||[];
e.tweeners[cg].unshift(ch)
}},prefilters:[g],prefilter:function(ce,cd){if(cd){e.prefilters.unshift(ce)
}else{e.prefilters.push(ce)
}}});
bP.speed=function(cf,cg,ce){var cd=cf&&typeof cf==="object"?bP.extend({},cf):{complete:ce||!ce&&cg||bP.isFunction(cf)&&cf,duration:cf,easing:ce&&cg||cg&&!bP.isFunction(cg)&&cg};
cd.duration=bP.fx.off?0:typeof cd.duration==="number"?cd.duration:cd.duration in bP.fx.speeds?bP.fx.speeds[cd.duration]:bP.fx.speeds._default;
if(cd.queue==null||cd.queue===true){cd.queue="fx"
}cd.old=cd.complete;
cd.complete=function(){if(bP.isFunction(cd.old)){cd.old.call(this)
}if(cd.queue){bP.dequeue(this,cd.queue)
}};
return cd
};
bP.fn.extend({fadeTo:function(cd,cg,cf,ce){return this.filter(aa).css("opacity",0).show().end().animate({opacity:cg},cd,cf,ce)
},animate:function(cj,cg,ci,ch){var cf=bP.isEmptyObject(cj),cd=bP.speed(cg,ci,ch),ce=function(){var ck=e(this,bP.extend({},cj),cd);
if(cf||bP._data(this,"finish")){ck.stop(true)
}};
ce.finish=ce;
return cf||cd.queue===false?this.each(ce):this.queue(cd.queue,ce)
},stop:function(cf,ce,cd){var cg=function(ch){var ci=ch.stop;
delete ch.stop;
ci(cd)
};
if(typeof cf!=="string"){cd=ce;
ce=cf;
cf=undefined
}if(ce&&cf!==false){this.queue(cf||"fx",[])
}return this.each(function(){var ck=true,ch=cf!=null&&cf+"queueHooks",cj=bP.timers,ci=bP._data(this);
if(ch){if(ci[ch]&&ci[ch].stop){cg(ci[ch])
}}else{for(ch in ci){if(ci[ch]&&ci[ch].stop&&bV.test(ch)){cg(ci[ch])
}}}for(ch=cj.length;
ch--;
){if(cj[ch].elem===this&&(cf==null||cj[ch].queue===cf)){cj[ch].anim.stop(cd);
ck=false;
cj.splice(ch,1)
}}if(ck||!cd){bP.dequeue(this,cf)
}})
},finish:function(cd){if(cd!==false){cd=cd||"fx"
}return this.each(function(){var cg,cj=bP._data(this),cf=cj[cd+"queue"],ce=cj[cd+"queueHooks"],ci=bP.timers,ch=cf?cf.length:0;
cj.finish=true;
bP.queue(this,cd,[]);
if(ce&&ce.stop){ce.stop.call(this,true)
}for(cg=ci.length;
cg--;
){if(ci[cg].elem===this&&ci[cg].queue===cd){ci[cg].anim.stop(true);
ci.splice(cg,1)
}}for(cg=0;
cg<ch;
cg++){if(cf[cg]&&cf[cg].finish){cf[cg].finish.call(this)
}}delete cj.finish
})
}});
bP.each(["toggle","show","hide"],function(ce,cd){var cf=bP.fn[cd];
bP.fn[cd]=function(cg,ci,ch){return cg==null||typeof cg==="boolean"?cf.apply(this,arguments):this.animate(bO(cd,true),cg,ci,ch)
}
});
bP.each({slideDown:bO("show"),slideUp:bO("hide"),slideToggle:bO("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(cd,ce){bP.fn[cd]=function(cf,ch,cg){return this.animate(ce,cf,ch,cg)
}
});
bP.timers=[];
bP.fx.tick=function(){var cf,ce=bP.timers,cd=0;
U=bP.now();
for(;
cd<ce.length;
cd++){cf=ce[cd];
if(!cf()&&ce[cd]===cf){ce.splice(cd--,1)
}}if(!ce.length){bP.fx.stop()
}U=undefined
};
bP.fx.timer=function(cd){bP.timers.push(cd);
if(cd()){bP.fx.start()
}else{bP.timers.pop()
}};
bP.fx.interval=13;
bP.fx.start=function(){if(!al){al=bc.setInterval(bP.fx.tick,bP.fx.interval)
}};
bP.fx.stop=function(){bc.clearInterval(al);
al=null
};
bP.fx.speeds={slow:600,fast:200,_default:400};
bP.fn.delay=function(ce,cd){ce=bP.fx?bP.fx.speeds[ce]||ce:ce;
cd=cd||"fx";
return this.queue(cd,function(cg,cf){var ch=bc.setTimeout(cg,ce);
cf.stop=function(){bc.clearTimeout(ch)
}
})
};
(function(){var ce,cf=m.createElement("input"),ch=m.createElement("div"),cd=m.createElement("select"),cg=cd.appendChild(m.createElement("option"));
ch=m.createElement("div");
ch.setAttribute("className","t");
ch.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
ce=ch.getElementsByTagName("a")[0];
cf.setAttribute("type","checkbox");
ch.appendChild(cf);
ce=ch.getElementsByTagName("a")[0];
ce.style.cssText="top:1px";
F.getSetAttribute=ch.className!=="t";
F.style=/top/.test(ce.getAttribute("style"));
F.hrefNormalized=ce.getAttribute("href")==="/a";
F.checkOn=!!cf.value;
F.optSelected=cg.selected;
F.enctype=!!m.createElement("form").enctype;
cd.disabled=true;
F.optDisabled=!cg.disabled;
cf=m.createElement("input");
cf.setAttribute("value","");
F.input=cf.getAttribute("value")==="";
cf.value="t";
cf.setAttribute("type","radio");
F.radioValue=cf.value==="t"
})();
var at=/\r/g,a4=/[\x20\t\r\n\f]+/g;
bP.fn.extend({val:function(cg){var cd,ce,ch,cf=this[0];
if(!arguments.length){if(cf){cd=bP.valHooks[cf.type]||bP.valHooks[cf.nodeName.toLowerCase()];
if(cd&&"get" in cd&&(ce=cd.get(cf,"value"))!==undefined){return ce
}ce=cf.value;
return typeof ce==="string"?ce.replace(at,""):ce==null?"":ce
}return
}ch=bP.isFunction(cg);
return this.each(function(ci){var cj;
if(this.nodeType!==1){return
}if(ch){cj=cg.call(this,ci,bP(this).val())
}else{cj=cg
}if(cj==null){cj=""
}else{if(typeof cj==="number"){cj+=""
}else{if(bP.isArray(cj)){cj=bP.map(cj,function(ck){return ck==null?"":ck+""
})
}}}cd=bP.valHooks[this.type]||bP.valHooks[this.nodeName.toLowerCase()];
if(!cd||!("set" in cd)||cd.set(this,cj,"value")===undefined){this.value=cj
}})
}});
bP.extend({valHooks:{option:{get:function(cd){var ce=bP.find.attr(cd,"value");
return ce!=null?ce:bP.trim(bP.text(cd)).replace(a4," ")
}},select:{get:function(cd){var cj,cf,cl=cd.options,ch=cd.selectedIndex,cg=cd.type==="select-one"||ch<0,ck=cg?null:[],ci=cg?ch+1:cl.length,ce=ch<0?ci:cg?ch:0;
for(;
ce<ci;
ce++){cf=cl[ce];
if((cf.selected||ce===ch)&&(F.optDisabled?!cf.disabled:cf.getAttribute("disabled")===null)&&(!cf.parentNode.disabled||!bP.nodeName(cf.parentNode,"optgroup"))){cj=bP(cf).val();
if(cg){return cj
}ck.push(cj)
}}return ck
},set:function(ci,cj){var ck,ch,cf=ci.options,cd=bP.makeArray(cj),cg=cf.length;
while(cg--){ch=cf[cg];
if(bP.inArray(bP.valHooks.option.get(ch),cd)>-1){try{ch.selected=ck=true
}catch(ce){ch.scrollHeight
}}else{ch.selected=false
}}if(!ck){ci.selectedIndex=-1
}return cf
}}}});
bP.each(["radio","checkbox"],function(){bP.valHooks[this]={set:function(cd,ce){if(bP.isArray(ce)){return(cd.checked=bP.inArray(bP(cd).val(),ce)>-1)
}}};
if(!F.checkOn){bP.valHooks[this].get=function(cd){return cd.getAttribute("value")===null?"on":cd.value
}
}});
var bh,ca,bU=bP.expr.attrHandle,ay=/^(?:checked|selected)$/i,bT=F.getSetAttribute,bM=F.input;
bP.fn.extend({attr:function(cd,ce){return aJ(this,bP.attr,cd,ce,arguments.length>1)
},removeAttr:function(cd){return this.each(function(){bP.removeAttr(this,cd)
})
}});
bP.extend({attr:function(ch,cg,ci){var cf,cd,ce=ch.nodeType;
if(ce===3||ce===8||ce===2){return
}if(typeof ch.getAttribute==="undefined"){return bP.prop(ch,cg,ci)
}if(ce!==1||!bP.isXMLDoc(ch)){cg=cg.toLowerCase();
cd=bP.attrHooks[cg]||(bP.expr.match.bool.test(cg)?ca:bh)
}if(ci!==undefined){if(ci===null){bP.removeAttr(ch,cg);
return
}if(cd&&"set" in cd&&(cf=cd.set(ch,ci,cg))!==undefined){return cf
}ch.setAttribute(cg,ci+"");
return ci
}if(cd&&"get" in cd&&(cf=cd.get(ch,cg))!==null){return cf
}cf=bP.find.attr(ch,cg);
return cf==null?undefined:cf
},attrHooks:{type:{set:function(cd,ce){if(!F.radioValue&&ce==="radio"&&bP.nodeName(cd,"input")){var cf=cd.value;
cd.setAttribute("type",ce);
if(cf){cd.value=cf
}return ce
}}}},removeAttr:function(cf,ch){var cd,cg,ce=0,ci=ch&&ch.match(aM);
if(ci&&cf.nodeType===1){while((cd=ci[ce++])){cg=bP.propFix[cd]||cd;
if(bP.expr.match.bool.test(cd)){if(bM&&bT||!ay.test(cd)){cf[cg]=false
}else{cf[bP.camelCase("default-"+cd)]=cf[cg]=false
}}else{bP.attr(cf,cd,"")
}cf.removeAttribute(bT?cd:cg)
}}}});
ca={set:function(ce,cf,cd){if(cf===false){bP.removeAttr(ce,cd)
}else{if(bM&&bT||!ay.test(cd)){ce.setAttribute(!bT&&bP.propFix[cd]||cd,cd)
}else{ce[bP.camelCase("default-"+cd)]=ce[cd]=true
}}return cd
}};
bP.each(bP.expr.match.bool.source.match(/\w+/g),function(cf,ce){var cd=bU[ce]||bP.find.attr;
if(bM&&bT||!ay.test(ce)){bU[ce]=function(ci,ch,ck){var cg,cj;
if(!ck){cj=bU[ch];
bU[ch]=cg;
cg=cd(ci,ch,ck)!=null?ch.toLowerCase():null;
bU[ch]=cj
}return cg
}
}else{bU[ce]=function(ch,cg,ci){if(!ci){return ch[bP.camelCase("default-"+cg)]?cg.toLowerCase():null
}}
}});
if(!bM||!bT){bP.attrHooks.value={set:function(ce,cf,cd){if(bP.nodeName(ce,"input")){ce.defaultValue=cf
}else{return bh&&bh.set(ce,cf,cd)
}}}
}if(!bT){bh={set:function(cf,cg,ce){var cd=cf.getAttributeNode(ce);
if(!cd){cf.setAttributeNode((cd=cf.ownerDocument.createAttribute(ce)))
}cd.value=cg+="";
if(ce==="value"||cg===cf.getAttribute(ce)){return cg
}}};
bU.id=bU.name=bU.coords=function(cf,ce,cg){var cd;
if(!cg){return(cd=cf.getAttributeNode(ce))&&cd.value!==""?cd.value:null
}};
bP.valHooks.button={get:function(cf,ce){var cd=cf.getAttributeNode(ce);
if(cd&&cd.specified){return cd.value
}},set:bh.set};
bP.attrHooks.contenteditable={set:function(ce,cf,cd){bh.set(ce,cf===""?false:cf,cd)
}};
bP.each(["width","height"],function(ce,cd){bP.attrHooks[cd]={set:function(cf,cg){if(cg===""){cf.setAttribute(cd,"auto");
return cg
}}}
})
}if(!F.style){bP.attrHooks.style={get:function(cd){return cd.style.cssText||undefined
},set:function(cd,ce){return(cd.style.cssText=ce+"")
}}
}var aP=/^(?:input|select|textarea|button|object)$/i,H=/^(?:a|area)$/i;
bP.fn.extend({prop:function(cd,ce){return aJ(this,bP.prop,cd,ce,arguments.length>1)
},removeProp:function(cd){cd=bP.propFix[cd]||cd;
return this.each(function(){try{this[cd]=undefined;
delete this[cd]
}catch(ce){}})
}});
bP.extend({prop:function(ch,cg,ci){var cf,cd,ce=ch.nodeType;
if(ce===3||ce===8||ce===2){return
}if(ce!==1||!bP.isXMLDoc(ch)){cg=bP.propFix[cg]||cg;
cd=bP.propHooks[cg]
}if(ci!==undefined){if(cd&&"set" in cd&&(cf=cd.set(ch,ci,cg))!==undefined){return cf
}return(ch[cg]=ci)
}if(cd&&"get" in cd&&(cf=cd.get(ch,cg))!==null){return cf
}return ch[cg]
},propHooks:{tabIndex:{get:function(ce){var cd=bP.find.attr(ce,"tabindex");
return cd?parseInt(cd,10):aP.test(ce.nodeName)||H.test(ce.nodeName)&&ce.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}});
if(!F.hrefNormalized){bP.each(["href","src"],function(ce,cd){bP.propHooks[cd]={get:function(cf){return cf.getAttribute(cd,4)
}}
})
}if(!F.optSelected){bP.propHooks.selected={get:function(ce){var cd=ce.parentNode;
if(cd){cd.selectedIndex;
if(cd.parentNode){cd.parentNode.selectedIndex
}}return null
},set:function(ce){var cd=ce.parentNode;
if(cd){cd.selectedIndex;
if(cd.parentNode){cd.parentNode.selectedIndex
}}}}
}bP.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bP.propFix[this.toLowerCase()]=this
});
if(!F.enctype){bP.propFix.enctype="encoding"
}var bR=/[\t\r\n\f]/g;
function D(cd){return bP.attr(cd,"class")||""
}bP.fn.extend({addClass:function(ck){var cf,ce,cl,cg,cj,ch,cd,ci=0;
if(bP.isFunction(ck)){return this.each(function(cm){bP(this).addClass(ck.call(this,cm,D(this)))
})
}if(typeof ck==="string"&&ck){cf=ck.match(aM)||[];
while((ce=this[ci++])){cg=D(ce);
cl=ce.nodeType===1&&(" "+cg+" ").replace(bR," ");
if(cl){ch=0;
while((cj=cf[ch++])){if(cl.indexOf(" "+cj+" ")<0){cl+=cj+" "
}}cd=bP.trim(cl);
if(cg!==cd){bP.attr(ce,"class",cd)
}}}}return this
},removeClass:function(ck){var cf,ce,cl,cg,cj,ch,cd,ci=0;
if(bP.isFunction(ck)){return this.each(function(cm){bP(this).removeClass(ck.call(this,cm,D(this)))
})
}if(!arguments.length){return this.attr("class","")
}if(typeof ck==="string"&&ck){cf=ck.match(aM)||[];
while((ce=this[ci++])){cg=D(ce);
cl=ce.nodeType===1&&(" "+cg+" ").replace(bR," ");
if(cl){ch=0;
while((cj=cf[ch++])){while(cl.indexOf(" "+cj+" ")>-1){cl=cl.replace(" "+cj+" "," ")
}}cd=bP.trim(cl);
if(cg!==cd){bP.attr(ce,"class",cd)
}}}}return this
},toggleClass:function(cf,cd){var ce=typeof cf;
if(typeof cd==="boolean"&&ce==="string"){return cd?this.addClass(cf):this.removeClass(cf)
}if(bP.isFunction(cf)){return this.each(function(cg){bP(this).toggleClass(cf.call(this,cg,D(this),cd),cd)
})
}return this.each(function(){var ci,ch,cg,cj;
if(ce==="string"){ch=0;
cg=bP(this);
cj=cf.match(aM)||[];
while((ci=cj[ch++])){if(cg.hasClass(ci)){cg.removeClass(ci)
}else{cg.addClass(ci)
}}}else{if(cf===undefined||ce==="boolean"){ci=D(this);
if(ci){bP._data(this,"__className__",ci)
}bP.attr(this,"class",ci||cf===false?"":bP._data(this,"__className__")||"")
}}})
},hasClass:function(cd){var cf,cg,ce=0;
cf=" "+cd+" ";
while((cg=this[ce++])){if(cg.nodeType===1&&(" "+D(cg)+" ").replace(bR," ").indexOf(cf)>-1){return true
}}return false
}});
bP.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(ce,cd){bP.fn[cd]=function(cg,cf){return arguments.length>0?this.on(cd,null,cg,cf):this.trigger(cd)
}
});
bP.fn.extend({hover:function(cd,ce){return this.mouseenter(cd).mouseleave(ce||cd)
}});
var aV=bc.location;
var bw=bP.now();
var bW=(/\?/);
var a9=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
bP.parseJSON=function(cd){if(bc.JSON&&bc.JSON.parse){return bc.JSON.parse(cd+"")
}var cg,cf=null,ce=bP.trim(cd+"");
return ce&&!bP.trim(ce.replace(a9,function(cj,ch,ci,ck){if(cg&&ch){cf=0
}if(cf===0){return cj
}cg=ci||ch;
cf+=!ck-!ci;
return""
}))?(Function("return "+ce))():bP.error("Invalid JSON: "+cd)
};
bP.parseXML=function(cf){var cd,ce;
if(!cf||typeof cf!=="string"){return null
}try{if(bc.DOMParser){ce=new bc.DOMParser();
cd=ce.parseFromString(cf,"text/xml")
}else{cd=new bc.ActiveXObject("Microsoft.XMLDOM");
cd.async="false";
cd.loadXML(cf)
}}catch(cg){cd=undefined
}if(!cd||!cd.documentElement||cd.getElementsByTagName("parsererror").length){bP.error("Invalid XML: "+cf)
}return cd
};
var ax=/#.*$/,Z=/([?&])_=[^&]*/,ao=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,E=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,q=/^(?:GET|HEAD)$/,aQ=/^\/\//,a1=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,t={},bg={},a5="*/".concat("*"),ai=aV.href,cb=a1.exec(ai.toLowerCase())||[];
function bQ(cd){return function(ch,ci){if(typeof ch!=="string"){ci=ch;
ch="*"
}var ce,cf=0,cg=ch.toLowerCase().match(aM)||[];
if(bP.isFunction(ci)){while((ce=cg[cf++])){if(ce.charAt(0)==="+"){ce=ce.slice(1)||"*";
(cd[ce]=cd[ce]||[]).unshift(ci)
}else{(cd[ce]=cd[ce]||[]).push(ci)
}}}}
}function p(cd,cf,cj,cg){var ce={},ch=(cd===bg);
function ci(ck){var cl;
ce[ck]=true;
bP.each(cd[ck]||[],function(cn,cm){var co=cm(cf,cj,cg);
if(typeof co==="string"&&!ch&&!ce[co]){cf.dataTypes.unshift(co);
ci(co);
return false
}else{if(ch){return !(cl=co)
}}});
return cl
}return ci(cf.dataTypes[0])||!ce["*"]&&ci("*")
}function s(cf,cg){var cd,ce,ch=bP.ajaxSettings.flatOptions||{};
for(ce in cg){if(cg[ce]!==undefined){(ch[ce]?cf:(cd||(cd={})))[ce]=cg[ce]
}}if(cd){bP.extend(true,cf,cd)
}return cf
}function f(cl,ck,ch){var cd,cg,cf,ci,ce=cl.contents,cj=cl.dataTypes;
while(cj[0]==="*"){cj.shift();
if(cg===undefined){cg=cl.mimeType||ck.getResponseHeader("Content-Type")
}}if(cg){for(ci in ce){if(ce[ci]&&ce[ci].test(cg)){cj.unshift(ci);
break
}}}if(cj[0] in ch){cf=cj[0]
}else{for(ci in ch){if(!cj[0]||cl.converters[ci+" "+cj[0]]){cf=ci;
break
}if(!cd){cd=ci
}}cf=cf||cd
}if(cf){if(cf!==cj[0]){cj.unshift(cf)
}return ch[cf]
}}function an(co,cg,cl,ce){var cd,cj,cm,ch,cf,cn={},ck=co.dataTypes.slice();
if(ck[1]){for(cm in co.converters){cn[cm.toLowerCase()]=co.converters[cm]
}}cj=ck.shift();
while(cj){if(co.responseFields[cj]){cl[co.responseFields[cj]]=cg
}if(!cf&&ce&&co.dataFilter){cg=co.dataFilter(cg,co.dataType)
}cf=cj;
cj=ck.shift();
if(cj){if(cj==="*"){cj=cf
}else{if(cf!=="*"&&cf!==cj){cm=cn[cf+" "+cj]||cn["* "+cj];
if(!cm){for(cd in cn){ch=cd.split(" ");
if(ch[1]===cj){cm=cn[cf+" "+ch[0]]||cn["* "+ch[0]];
if(cm){if(cm===true){cm=cn[cd]
}else{if(cn[cd]!==true){cj=ch[0];
ck.unshift(ch[1])
}}break
}}}}if(cm!==true){if(cm&&co["throws"]){cg=cm(cg)
}else{try{cg=cm(cg)
}catch(ci){return{state:"parsererror",error:cm?ci:"No conversion from "+cf+" to "+cj}
}}}}}}}return{state:"success",data:cg}
}bP.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ai,type:"GET",isLocal:E.test(cb[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":a5,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":bP.parseJSON,"text xml":bP.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(ce,cd){return cd?s(s(ce,bP.ajaxSettings),cd):s(bP.ajaxSettings,ce)
},ajaxPrefilter:bQ(t),ajaxTransport:bQ(bg),ajax:function(ch,ce){if(typeof ch==="object"){ce=ch;
ch=undefined
}ce=ce||{};
var cq,cs,ci,cx,cm,cd,ct,cf,cl=bP.ajaxSetup({},ce),cz=cl.context||cl,co=cl.context&&(cz.nodeType||cz.jquery)?bP(cz):bP.event,cy=bP.Deferred(),cv=bP.Callbacks("once memory"),cj=cl.statusCode||{},cp={},cw={},cg=0,ck="canceled",cr={readyState:0,getResponseHeader:function(cB){var cA;
if(cg===2){if(!cf){cf={};
while((cA=ao.exec(cx))){cf[cA[1].toLowerCase()]=cA[2]
}}cA=cf[cB.toLowerCase()]
}return cA==null?null:cA
},getAllResponseHeaders:function(){return cg===2?cx:null
},setRequestHeader:function(cB,cC){var cA=cB.toLowerCase();
if(!cg){cB=cw[cA]=cw[cA]||cB;
cp[cB]=cC
}return this
},overrideMimeType:function(cA){if(!cg){cl.mimeType=cA
}return this
},statusCode:function(cB){var cA;
if(cB){if(cg<2){for(cA in cB){cj[cA]=[cj[cA],cB[cA]]
}}else{cr.always(cB[cr.status])
}}return this
},abort:function(cB){var cA=cB||ck;
if(ct){ct.abort(cA)
}cn(0,cA);
return this
}};
cy.promise(cr).complete=cv.add;
cr.success=cr.done;
cr.error=cr.fail;
cl.url=((ch||cl.url||ai)+"").replace(ax,"").replace(aQ,cb[1]+"//");
cl.type=ce.method||ce.type||cl.method||cl.type;
cl.dataTypes=bP.trim(cl.dataType||"*").toLowerCase().match(aM)||[""];
if(cl.crossDomain==null){cq=a1.exec(cl.url.toLowerCase());
cl.crossDomain=!!(cq&&(cq[1]!==cb[1]||cq[2]!==cb[2]||(cq[3]||(cq[1]==="http:"?"80":"443"))!==(cb[3]||(cb[1]==="http:"?"80":"443"))))
}if(cl.data&&cl.processData&&typeof cl.data!=="string"){cl.data=bP.param(cl.data,cl.traditional)
}p(t,cl,ce,cr);
if(cg===2){return cr
}cd=bP.event&&cl.global;
if(cd&&bP.active++===0){bP.event.trigger("ajaxStart")
}cl.type=cl.type.toUpperCase();
cl.hasContent=!q.test(cl.type);
ci=cl.url;
if(!cl.hasContent){if(cl.data){ci=(cl.url+=(bW.test(ci)?"&":"?")+cl.data);
delete cl.data
}if(cl.cache===false){cl.url=Z.test(ci)?ci.replace(Z,"$1_="+bw++):ci+(bW.test(ci)?"&":"?")+"_="+bw++
}}if(cl.ifModified){if(bP.lastModified[ci]){cr.setRequestHeader("If-Modified-Since",bP.lastModified[ci])
}if(bP.etag[ci]){cr.setRequestHeader("If-None-Match",bP.etag[ci])
}}if(cl.data&&cl.hasContent&&cl.contentType!==false||ce.contentType){cr.setRequestHeader("Content-Type",cl.contentType)
}cr.setRequestHeader("Accept",cl.dataTypes[0]&&cl.accepts[cl.dataTypes[0]]?cl.accepts[cl.dataTypes[0]]+(cl.dataTypes[0]!=="*"?", "+a5+"; q=0.01":""):cl.accepts["*"]);
for(cs in cl.headers){cr.setRequestHeader(cs,cl.headers[cs])
}if(cl.beforeSend&&(cl.beforeSend.call(cz,cr,cl)===false||cg===2)){return cr.abort()
}ck="abort";
for(cs in {success:1,error:1,complete:1}){cr[cs](cl[cs])
}ct=p(bg,cl,ce,cr);
if(!ct){cn(-1,"No Transport")
}else{cr.readyState=1;
if(cd){co.trigger("ajaxSend",[cr,cl])
}if(cg===2){return cr
}if(cl.async&&cl.timeout>0){cm=bc.setTimeout(function(){cr.abort("timeout")
},cl.timeout)
}try{cg=1;
ct.send(cp,cn)
}catch(cu){if(cg<2){cn(-1,cu)
}else{throw cu
}}}function cn(cF,cB,cG,cD){var cA,cJ,cH,cE,cI,cC=cB;
if(cg===2){return
}cg=2;
if(cm){bc.clearTimeout(cm)
}ct=undefined;
cx=cD||"";
cr.readyState=cF>0?4:0;
cA=cF>=200&&cF<300||cF===304;
if(cG){cE=f(cl,cr,cG)
}cE=an(cl,cE,cr,cA);
if(cA){if(cl.ifModified){cI=cr.getResponseHeader("Last-Modified");
if(cI){bP.lastModified[ci]=cI
}cI=cr.getResponseHeader("etag");
if(cI){bP.etag[ci]=cI
}}if(cF===204||cl.type==="HEAD"){cC="nocontent"
}else{if(cF===304){cC="notmodified"
}else{cC=cE.state;
cJ=cE.data;
cH=cE.error;
cA=!cH
}}}else{cH=cC;
if(cF||!cC){cC="error";
if(cF<0){cF=0
}}}cr.status=cF;
cr.statusText=(cB||cC)+"";
if(cA){cy.resolveWith(cz,[cJ,cC,cr])
}else{cy.rejectWith(cz,[cr,cC,cH])
}cr.statusCode(cj);
cj=undefined;
if(cd){co.trigger(cA?"ajaxSuccess":"ajaxError",[cr,cl,cA?cJ:cH])
}cv.fireWith(cz,[cr,cC]);
if(cd){co.trigger("ajaxComplete",[cr,cl]);
if(!(--bP.active)){bP.event.trigger("ajaxStop")
}}}return cr
},getJSON:function(cd,ce,cf){return bP.get(cd,ce,cf,"json")
},getScript:function(cd,ce){return bP.get(cd,undefined,ce,"script")
}});
bP.each(["get","post"],function(cd,ce){bP[ce]=function(cf,ch,ci,cg){if(bP.isFunction(ch)){cg=cg||ci;
ci=ch;
ch=undefined
}return bP.ajax(bP.extend({url:cf,type:ce,dataType:cg,data:ch,success:ci},bP.isPlainObject(cf)&&cf))
}
});
bP._evalUrl=function(cd){return bP.ajax({url:cd,type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true})
};
bP.fn.extend({wrapAll:function(cd){if(bP.isFunction(cd)){return this.each(function(cf){bP(this).wrapAll(cd.call(this,cf))
})
}if(this[0]){var ce=bP(cd,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){ce.insertBefore(this[0])
}ce.map(function(){var cf=this;
while(cf.firstChild&&cf.firstChild.nodeType===1){cf=cf.firstChild
}return cf
}).append(this)
}return this
},wrapInner:function(cd){if(bP.isFunction(cd)){return this.each(function(ce){bP(this).wrapInner(cd.call(this,ce))
})
}return this.each(function(){var ce=bP(this),cf=ce.contents();
if(cf.length){cf.wrapAll(cd)
}else{ce.append(cd)
}})
},wrap:function(cd){var ce=bP.isFunction(cd);
return this.each(function(cf){bP(this).wrapAll(ce?cd.call(this,cf):cd)
})
},unwrap:function(){return this.parent().each(function(){if(!bP.nodeName(this,"body")){bP(this).replaceWith(this.childNodes)
}}).end()
}});
function Q(cd){return cd.style&&cd.style.display||bP.css(cd,"display")
}function N(cd){if(!bP.contains(cd.ownerDocument||m,cd)){return true
}while(cd&&cd.nodeType===1){if(Q(cd)==="none"||cd.type==="hidden"){return true
}cd=cd.parentNode
}return false
}bP.expr.filters.hidden=function(cd){return F.reliableHiddenOffsets()?(cd.offsetWidth<=0&&cd.offsetHeight<=0&&!cd.getClientRects().length):N(cd)
};
bP.expr.filters.visible=function(cd){return !bP.expr.filters.hidden(cd)
};
var bD=/%20/g,aZ=/\[\]$/,ae=/\r?\n/g,b=/^(?:submit|button|image|reset|file)$/i,aC=/^(?:input|select|textarea|keygen)/i;
function h(cf,ch,ce,cg){var cd;
if(bP.isArray(ch)){bP.each(ch,function(cj,ci){if(ce||aZ.test(cf)){cg(cf,ci)
}else{h(cf+"["+(typeof ci==="object"&&ci!=null?cj:"")+"]",ci,ce,cg)
}})
}else{if(!ce&&bP.type(ch)==="object"){for(cd in ch){h(cf+"["+cd+"]",ch[cd],ce,cg)
}}else{cg(cf,ch)
}}}bP.param=function(cd,cf){var cg,ce=[],ch=function(ci,cj){cj=bP.isFunction(cj)?cj():(cj==null?"":cj);
ce[ce.length]=encodeURIComponent(ci)+"="+encodeURIComponent(cj)
};
if(cf===undefined){cf=bP.ajaxSettings&&bP.ajaxSettings.traditional
}if(bP.isArray(cd)||(cd.jquery&&!bP.isPlainObject(cd))){bP.each(cd,function(){ch(this.name,this.value)
})
}else{for(cg in cd){h(cg,cd[cg],cf,ch)
}}return ce.join("&").replace(bD,"+")
};
bP.fn.extend({serialize:function(){return bP.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var cd=bP.prop(this,"elements");
return cd?bP.makeArray(cd):this
}).filter(function(){var cd=this.type;
return this.name&&!bP(this).is(":disabled")&&aC.test(this.nodeName)&&!b.test(cd)&&(this.checked||!aS.test(cd))
}).map(function(cd,ce){var cf=bP(this).val();
return cf==null?null:bP.isArray(cf)?bP.map(cf,function(cg){return{name:ce.name,value:cg.replace(ae,"\r\n")}
}):{name:ce.name,value:cf.replace(ae,"\r\n")}
}).get()
}});
bP.ajaxSettings.xhr=bc.ActiveXObject!==undefined?function(){if(this.isLocal){return bn()
}if(m.documentMode>8){return bL()
}return/^(get|post|head|put|delete|options)$/i.test(this.type)&&bL()||bn()
}:bL;
var aI=0,aq={},aG=bP.ajaxSettings.xhr();
if(bc.attachEvent){bc.attachEvent("onunload",function(){for(var cd in aq){aq[cd](undefined,true)
}})
}F.cors=!!aG&&("withCredentials" in aG);
aG=F.ajax=!!aG;
if(aG){bP.ajaxTransport(function(cd){if(!cd.crossDomain||F.cors){var ce;
return{send:function(ci,cf){var cg,ch=cd.xhr(),cj=++aI;
ch.open(cd.type,cd.url,cd.async,cd.username,cd.password);
if(cd.xhrFields){for(cg in cd.xhrFields){ch[cg]=cd.xhrFields[cg]
}}if(cd.mimeType&&ch.overrideMimeType){ch.overrideMimeType(cd.mimeType)
}if(!cd.crossDomain&&!ci["X-Requested-With"]){ci["X-Requested-With"]="XMLHttpRequest"
}for(cg in ci){if(ci[cg]!==undefined){ch.setRequestHeader(cg,ci[cg]+"")
}}ch.send((cd.hasContent&&cd.data)||null);
ce=function(cm,cl){var ck,cp,cn;
if(ce&&(cl||ch.readyState===4)){delete aq[cj];
ce=undefined;
ch.onreadystatechange=bP.noop;
if(cl){if(ch.readyState!==4){ch.abort()
}}else{cn={};
ck=ch.status;
if(typeof ch.responseText==="string"){cn.text=ch.responseText
}try{cp=ch.statusText
}catch(co){cp=""
}if(!ck&&cd.isLocal&&!cd.crossDomain){ck=cn.text?200:404
}else{if(ck===1223){ck=204
}}}}if(cn){cf(ck,cp,cn,ch.getAllResponseHeaders())
}};
if(!cd.async){ce()
}else{if(ch.readyState===4){bc.setTimeout(ce)
}else{ch.onreadystatechange=aq[cj]=ce
}}},abort:function(){if(ce){ce(undefined,true)
}}}
}})
}function bL(){try{return new bc.XMLHttpRequest()
}catch(cd){}}function bn(){try{return new bc.ActiveXObject("Microsoft.XMLHTTP")
}catch(cd){}}bP.ajaxPrefilter(function(cd){if(cd.crossDomain){cd.contents.script=false
}});
bP.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(cd){bP.globalEval(cd);
return cd
}}});
bP.ajaxPrefilter("script",function(cd){if(cd.cache===undefined){cd.cache=false
}if(cd.crossDomain){cd.type="GET";
cd.global=false
}});
bP.ajaxTransport("script",function(cf){if(cf.crossDomain){var cd,ce=m.head||bP("head")[0]||m.documentElement;
return{send:function(cg,ch){cd=m.createElement("script");
cd.async=true;
if(cf.scriptCharset){cd.charset=cf.scriptCharset
}cd.src=cf.url;
cd.onload=cd.onreadystatechange=function(cj,ci){if(ci||!cd.readyState||/loaded|complete/.test(cd.readyState)){cd.onload=cd.onreadystatechange=null;
if(cd.parentNode){cd.parentNode.removeChild(cd)
}cd=null;
if(!ci){ch(200,"success")
}}};
ce.insertBefore(cd,ce.firstChild)
},abort:function(){if(cd){cd.onload(undefined,true)
}}}
}});
var bz=[],bf=/(=)\?(?=&|$)|\?\?/;
bP.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var cd=bz.pop()||(bP.expando+"_"+(bw++));
this[cd]=true;
return cd
}});
bP.ajaxPrefilter("json jsonp",function(cg,cd,ch){var cj,ce,cf,ci=cg.jsonp!==false&&(bf.test(cg.url)?"url":typeof cg.data==="string"&&(cg.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&bf.test(cg.data)&&"data");
if(ci||cg.dataTypes[0]==="jsonp"){cj=cg.jsonpCallback=bP.isFunction(cg.jsonpCallback)?cg.jsonpCallback():cg.jsonpCallback;
if(ci){cg[ci]=cg[ci].replace(bf,"$1"+cj)
}else{if(cg.jsonp!==false){cg.url+=(bW.test(cg.url)?"&":"?")+cg.jsonp+"="+cj
}}cg.converters["script json"]=function(){if(!cf){bP.error(cj+" was not called")
}return cf[0]
};
cg.dataTypes[0]="json";
ce=bc[cj];
bc[cj]=function(){cf=arguments
};
ch.always(function(){if(ce===undefined){bP(bc).removeProp(cj)
}else{bc[cj]=ce
}if(cg[cj]){cg.jsonpCallback=cd.jsonpCallback;
bz.push(cj)
}if(cf&&bP.isFunction(ce)){ce(cf[0])
}cf=ce=undefined
});
return"script"
}});
bP.parseHTML=function(ch,cf,cg){if(!ch||typeof ch!=="string"){return null
}if(typeof cf==="boolean"){cg=cf;
cf=false
}cf=cf||m;
var ce=a.exec(ch),cd=!cg&&[];
if(ce){return[cf.createElement(ce[1])]
}ce=B([ch],cf,cd);
if(cd&&cd.length){bP(cd).remove()
}return bP.merge([],ce.childNodes)
};
var b9=bP.fn.load;
bP.fn.load=function(cg,cj,ck){if(typeof cg!=="string"&&b9){return b9.apply(this,arguments)
}var cd,ch,cf,ce=this,ci=cg.indexOf(" ");
if(ci>-1){cd=bP.trim(cg.slice(ci,cg.length));
cg=cg.slice(0,ci)
}if(bP.isFunction(cj)){ck=cj;
cj=undefined
}else{if(cj&&typeof cj==="object"){ch="POST"
}}if(ce.length>0){bP.ajax({url:cg,type:ch||"GET",dataType:"html",data:cj}).done(function(cl){cf=arguments;
ce.html(cd?bP("<div>").append(bP.parseHTML(cl)).find(cd):cl)
}).always(ck&&function(cm,cl){ce.each(function(){ck.apply(this,cf||[cm.responseText,cl,cm])
})
})
}return this
};
bP.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(cd,ce){bP.fn[ce]=function(cf){return this.on(ce,cf)
}
});
bP.expr.filters.animated=function(cd){return bP.grep(bP.timers,function(ce){return cd===ce.elem
}).length
};
function by(cd){return bP.isWindow(cd)?cd:cd.nodeType===9?cd.defaultView||cd.parentWindow:false
}bP.offset={setOffset:function(cf,cp,cj){var cl,ci,cd,cg,ce,cn,co,ck=bP.css(cf,"position"),ch=bP(cf),cm={};
if(ck==="static"){cf.style.position="relative"
}ce=ch.offset();
cd=bP.css(cf,"top");
cn=bP.css(cf,"left");
co=(ck==="absolute"||ck==="fixed")&&bP.inArray("auto",[cd,cn])>-1;
if(co){cl=ch.position();
cg=cl.top;
ci=cl.left
}else{cg=parseFloat(cd)||0;
ci=parseFloat(cn)||0
}if(bP.isFunction(cp)){cp=cp.call(cf,cj,bP.extend({},ce))
}if(cp.top!=null){cm.top=(cp.top-ce.top)+cg
}if(cp.left!=null){cm.left=(cp.left-ce.left)+ci
}if("using" in cp){cp.using.call(cf,cm)
}else{ch.css(cm)
}}};
bP.fn.extend({offset:function(ce){if(arguments.length){return ce===undefined?this:this.each(function(cj){bP.offset.setOffset(this,ce,cj)
})
}var cd,ci,cg={top:0,left:0},cf=this[0],ch=cf&&cf.ownerDocument;
if(!ch){return
}cd=ch.documentElement;
if(!bP.contains(cd,cf)){return cg
}if(typeof cf.getBoundingClientRect!=="undefined"){cg=cf.getBoundingClientRect()
}ci=by(ch);
return{top:cg.top+(ci.pageYOffset||cd.scrollTop)-(cd.clientTop||0),left:cg.left+(ci.pageXOffset||cd.scrollLeft)-(cd.clientLeft||0)}
},position:function(){if(!this[0]){return
}var cf,cg,cd={top:0,left:0},ce=this[0];
if(bP.css(ce,"position")==="fixed"){cg=ce.getBoundingClientRect()
}else{cf=this.offsetParent();
cg=this.offset();
if(!bP.nodeName(cf[0],"html")){cd=cf.offset()
}cd.top+=bP.css(cf[0],"borderTopWidth",true);
cd.left+=bP.css(cf[0],"borderLeftWidth",true)
}return{top:cg.top-cd.top-bP.css(ce,"marginTop",true),left:cg.left-cd.left-bP.css(ce,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var cd=this.offsetParent;
while(cd&&(!bP.nodeName(cd,"html")&&bP.css(cd,"position")==="static")){cd=cd.offsetParent
}return cd||b1
})
}});
bP.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(cf,ce){var cd=/Y/.test(ce);
bP.fn[cf]=function(cg){return aJ(this,function(ch,ck,cj){var ci=by(ch);
if(cj===undefined){return ci?(ce in ci)?ci[ce]:ci.document.documentElement[ck]:ch[ck]
}if(ci){ci.scrollTo(!cd?cj:bP(ci).scrollLeft(),cd?cj:bP(ci).scrollTop())
}else{ch[ck]=cj
}},cf,cg,arguments.length,null)
}
});
bP.each(["top","left"],function(cd,ce){bP.cssHooks[ce]=be(F.pixelPosition,function(cg,cf){if(cf){cf=I(cg,ce);
return ag.test(cf)?bP(cg).position()[ce]+"px":cf
}})
});
bP.each({Height:"height",Width:"width"},function(cd,ce){bP.each({padding:"inner"+cd,content:ce,"":"outer"+cd},function(cf,cg){bP.fn[cg]=function(ck,cj){var ci=arguments.length&&(cf||typeof ck!=="boolean"),ch=cf||(ck===true||cj===true?"margin":"border");
return aJ(this,function(cm,cl,cn){var co;
if(bP.isWindow(cm)){return cm.document.documentElement["client"+cd]
}if(cm.nodeType===9){co=cm.documentElement;
return Math.max(cm.body["scroll"+cd],co["scroll"+cd],cm.body["offset"+cd],co["offset"+cd],co["client"+cd])
}return cn===undefined?bP.css(cm,cl,ch):bP.style(cm,cl,cn,ch)
},ce,ci?ck:undefined,ci,null)
}
})
});
bP.fn.extend({bind:function(cd,cf,ce){return this.on(cd,null,cf,ce)
},unbind:function(cd,ce){return this.off(cd,null,ce)
},delegate:function(cd,ce,cg,cf){return this.on(ce,cd,cg,cf)
},undelegate:function(cd,ce,cf){return arguments.length===1?this.off(cd,"**"):this.off(ce,cd||"**",cf)
}});
bP.fn.size=function(){return this.length
};
bP.fn.andSelf=bP.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return bP
})
}var br=bc.jQuery,O=bc.$;
bP.noConflict=function(cd){if(bc.$===bP){bc.$=O
}if(cd&&bc.jQuery===bP){bc.jQuery=br
}return bP
};
if(!aD){bc.jQuery=bc.$=bP
}return bP
}));
jQuery.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
};
if(!jQuery.browser){matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){browser[matched.browser]=true;
browser.version=matched.version
}if(browser.chrome){browser.webkit=true
}else{if(browser.webkit){browser.safari=true
}}jQuery.browser=browser
}(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.Sling=a()
}}(function(){return{SELECTOR_INFINITY:".infinity",CHARSET:"_charset_",STATUS:":status",STATUS_BROWSER:"browser",OPERATION:":operation",OPERATION_DELETE:"delete",OPERATION_MOVE:"move",DELETE_SUFFIX:"@Delete",TYPEHINT_SUFFIX:"@TypeHint",COPY_SUFFIX:"@CopyFrom",MOVE_SUFFIX:"@MoveFrom",ORDER:":order",REPLACE:":replace",DESTINATION:":dest",SAVE_PARAM_PREFIX:":saveParamPrefix",IGNORE_PARAM:":ignore",REQUEST_LOGIN_PARAM:"sling:authRequestLogin",LOGIN_URL:"/system/sling/login.html",LOGOUT_URL:"/system/sling/logout.html"}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.Util=a()
}}(function(){var a=function(b){return Object.prototype.toString.call(b)==="[object Array]"
};
return{patchText:function(d,c){if(c){if(!a(c)){d=d.replace("{0}",c)
}else{for(var b=0;
b<c.length;
b++){d=d.replace(("{"+b+"}"),c[b])
}}}return d
},getTopWindow:function(){var c=window;
if(this.iFrameTopWindow){return this.iFrameTopWindow
}try{while(c.parent&&c!==c.parent&&c.parent.location.href){c=c.parent
}}catch(b){}return c
},setIFrameMode:function(b){this.iFrameTopWindow=b||window
},applyDefaults:function(){var d;
var f=arguments[0]||{};
for(var c=1;
c<arguments.length;
c++){d=arguments[c];
for(var b in d){var e=d[b];
if(d.hasOwnProperty(b)&&e!==undefined){if(e!==null&&typeof e==="object"&&!(e instanceof Array)){f[b]=this.applyDefaults(f[b],e)
}else{if(e instanceof Array){f[b]=e.slice(0)
}else{f[b]=e
}}}}}return f
},getKeyCode:function(b){return b.keyCode?b.keyCode:b.which
}}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("@granite/util"),require("jquery"))
}else{window.Granite.HTTP=a(Granite.Util,jQuery)
}}(function(util,$){return(function(){var contextPath=null;
var SCRIPT_URL_REGEXP=/^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/;
var ENCODE_PATH_REGEXP=/[^\w-.~%:/?[\]@!$&'()*+,;=]/;
var URI_REGEXP=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var loginRedirected=false;
var self={};
self.getSchemeAndAuthority=function(uri){if(!uri){return""
}var result=URI_REGEXP.exec(uri);
if(result===null){return""
}return[result[1],result[3]].join("")
};
self.getContextPath=function(){if(contextPath===null){contextPath=self.detectContextPath()
}return contextPath
};
self.detectContextPath=function(){try{if(window.CQURLInfo){contextPath=CQURLInfo.contextPath||""
}else{var scripts=document.getElementsByTagName("script");
for(var i=0;
i<scripts.length;
i++){var result=SCRIPT_URL_REGEXP.exec(scripts[i].src);
if(result){contextPath=result[1];
return contextPath
}}contextPath=""
}}catch(e){}return contextPath
};
self.externalize=function(url){try{if(url.indexOf("/")===0&&self.getContextPath()&&url.indexOf(self.getContextPath()+"/")!==0){url=self.getContextPath()+url
}}catch(e){}return url
};
self.internalize=function(url,doc){if(url.charAt(0)==="/"){if(contextPath===url){return""
}else{if(contextPath&&url.indexOf(contextPath+"/")===0){return url.substring(contextPath.length)
}else{return url
}}}if(!doc){doc=document
}var docHost=self.getSchemeAndAuthority(doc.location.href);
var urlHost=self.getSchemeAndAuthority(url);
if(docHost===urlHost){return url.substring(urlHost.length+(contextPath?contextPath.length:0))
}else{return url
}};
self.getPath=function(url){if(!url){if(window.CQURLInfo&&CQURLInfo.requestPath){return CQURLInfo.requestPath
}else{url=window.location.pathname
}}else{url=self.removeParameters(url);
url=self.removeAnchor(url)
}url=self.internalize(url);
var i=url.indexOf(".",url.lastIndexOf("/"));
if(i!==-1){url=url.substring(0,i)
}return url
};
self.removeAnchor=function(uri){var fragmentIndex=uri.indexOf("#");
if(fragmentIndex>=0){return uri.substring(0,fragmentIndex)
}else{return uri
}};
self.removeParameters=function(uri){var queryIndex=uri.indexOf("?");
if(queryIndex>=0){return uri.substring(0,queryIndex)
}else{return uri
}};
self.encodePathOfURI=function(uri){var DELIMS=["?","#"];
var parts=[uri];
var delim;
for(var i=0,ln=DELIMS.length;
i<ln;
i++){delim=DELIMS[i];
if(uri.indexOf(delim)>=0){parts=uri.split(delim);
break
}}if(ENCODE_PATH_REGEXP.test(parts[0])){parts[0]=self.encodePath(parts[0])
}return parts.join(delim)
};
self.encodePath=function(uri){uri=encodeURI(uri);
uri=uri.replace(/%5B/g,"[").replace(/%5D/g,"]");
uri=uri.replace(/\?/g,"%3F");
uri=uri.replace(/#/g,"%23");
return uri
};
self.handleLoginRedirect=function(){if(!loginRedirected){loginRedirected=true;
alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
var l=util.getTopWindow().document.location;
l.href=self.externalize("/")+"?resource="+encodeURIComponent(l.pathname+l.search+l.hash)
}};
self.getXhrHook=function(url,method,params){method=method||"GET";
if(window.G_XHR_HOOK&&typeof G_XHR_HOOK==="function"){var p={url:url,method:method};
if(params){p.params=params
}return G_XHR_HOOK(p)
}return null
};
self.eval=function(response){if(typeof response!=="object"){response=$.ajax({url:response,type:"get",async:false})
}try{return eval("("+(response.body?response.body:response.responseText)+")")
}catch(e){}return null
};
return self
}())
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("@granite/http"))
}else{window.Granite.I18n=a(window.Granite.HTTP)
}}(function(a){return(function(){var b={};
var g="/libs/cq/i18n/dict.";
var k=".json";
var c=undefined;
var j=false;
var f=null;
var l={};
var e=false;
var d=function(m){if(e){return g+m+k
}var o;
var n=document.querySelector("html");
if(n){o=n.getAttribute("data-i18n-dictionary-src")
}if(!o){return g+m+k
}return o.replace("{locale}",encodeURIComponent(m)).replace("{+locale}",m)
};
var h=function(o,n){if(n){if(Array.isArray(n)){for(var m=0;
m<n.length;
m++){o=o.replace("{"+m+"}",n[m])
}}else{o=o.replace("{0}",n)
}}return o
};
l.LOCALE_DEFAULT="en";
l.PSEUDO_LANGUAGE="zz";
l.PSEUDO_PATTERN_KEY="_pseudoPattern_";
l.init=function(m){m=m||{};
this.setLocale(m.locale);
this.setUrlPrefix(m.urlPrefix);
this.setUrlSuffix(m.urlSuffix)
};
l.setLocale=function(m){if(!m){return
}c=m
};
l.getLocale=function(){if(typeof c==="function"){c=c()
}return c||document.documentElement.lang||l.LOCALE_DEFAULT
};
l.setUrlPrefix=function(m){if(!m){return
}g=m;
e=true
};
l.setUrlSuffix=function(m){if(!m){return
}k=m;
e=true
};
l.getDictionary=function(m){m=m||l.getLocale();
if(!b[m]){j=m.indexOf(l.PSEUDO_LANGUAGE)===0;
try{var o=new XMLHttpRequest();
o.open("GET",a.externalize(d(m)),false);
o.send();
b[m]=JSON.parse(o.responseText)
}catch(n){}if(!b[m]){b[m]={}
}}return b[m]
};
l.get=function(q,n,o){var r;
var p;
var m;
r=l.getDictionary();
m=j?l.PSEUDO_PATTERN_KEY:o?q+" (("+o+"))":q;
if(r){p=r[m]
}if(!p){p=q
}if(j){p=p.replace("{string}",q).replace("{comment}",o?o:"")
}return h(p,n)
};
l.getVar=function(n,m){if(!n){return null
}return l.get(n,null,m)
};
l.getLanguages=function(){if(!f){try{var m=a.externalize("/libs/wcm/core/resources/languages.overlay.infinity.json");
var p=new XMLHttpRequest();
p.open("GET",m,false);
p.send();
var n=JSON.parse(p.responseText);
Object.keys(n).forEach(function(r){var q=n[r];
if(q.language){q.title=l.getVar(q.language)
}if(q.title&&q.country&&q.country!=="*"){q.title+=" ("+l.getVar(q.country)+")"
}});
f=n
}catch(o){f={}
}}return f
};
l.parseLocale=function(p){if(!p){return null
}var o=p.indexOf("_");
if(o<0){o=p.indexOf("-")
}var n;
var m;
if(o<0){n=p;
m=null
}else{n=p.substring(0,o);
m=p.substring(o+1)
}return{code:p,language:n,country:m}
};
return l
}())
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))
}else{var b=window.Granite=window.Granite||{};
b.TouchIndicator=a(window.jQuery)
}}(function(d){var b={visibility:"hidden",position:"absolute",width:"30px",height:"30px","-webkit-border-radius":"20px","border-radius":"20px",border:"5px solid orange","-webkit-user-select":"none","user-select":"none",opacity:"0.5","z-index":"2000","pointer-events":"none"};
var c={};
var a=[];
return{debugWithMouse:false,init:function(){var e=this;
var f=".touchindicator";
d(document).on("touchstart"+f+"touchmove"+f+"touchend"+f,function(h){var g=h.originalEvent.touches;
e.update(g);
return true
});
if(this.debugWithMouse){d(document).on("mousemove"+f,function(g){g.identifer="fake";
e.update([g]);
return true
})
}},update:function(h){var f={};
for(var g=0;
g<h.length;
g++){var k=h[g];
var j=k.identifier;
var e=c[j];
if(!e){e=a.pop();
if(!e){e=d(document.createElement("div")).css(b);
d("body").append(e)
}}f[j]=e;
e.offset({left:k.pageX-20,top:k.pageY-20});
e.css("visibility","visible")
}for(j in c){if(c.hasOwnProperty(j)&&!f[j]){e=c[j];
e.css("visibility","hidden");
a.push(e)
}}c=f
}}
}));
(function(a){if(typeof module==="object"&&module.exports){module.exports=a()
}else{var b=window.Granite=window.Granite||{};
b.OptOutUtil=a()
}}(function(b){function a(c){if(String.prototype.trim){return c.trim()
}return c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}return(function(){var c={};
var d=[];
var e=[];
c.init=function(f){if(f){d=f.cookieNames||[];
e=f.whitelistCookieNames||[]
}else{d=[];
e=[]
}};
c.getCookieNames=function(){return d
};
c.getWhitelistCookieNames=function(){return e
};
c.isOptedOut=function(){var h=document.cookie.split(";");
for(var g=0;
g<h.length;
g++){var f=h[g];
var j=a(f.split("=")[0]);
if(c.getCookieNames().indexOf(j)>=0){return true
}}return false
};
c.maySetCookie=function(f){return !(c.isOptedOut()&&c.getWhitelistCookieNames().indexOf(f)===-1)
};
return c
}())
}));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
(function(c,b){var a;
b.Granite=b.Granite||{};
b.Granite.$=b.Granite.$||c;
b._g=b._g||{};
b._g.$=b._g.$||c;
a=Granite.HTTP;
c.ajaxSetup({externalize:true,encodePath:true,hook:true,beforeSend:function(e,d){if(typeof G_IS_HOOKED==="undefined"||!G_IS_HOOKED(d.url)){if(d.externalize){d.url=a.externalize(d.url)
}if(d.encodePath){d.url=a.encodePathOfURI(d.url)
}}if(d.hook){var f=a.getXhrHook(d.url,d.type,d.data);
if(f){d.url=f.url;
if(f.params){if(d.type.toUpperCase()==="GET"){d.url+="?"+c.param(f.params)
}else{d.data=c.param(f.params)
}}}}},statusCode:{403:function(d){if(d.getResponseHeader("X-Reason")==="Authentication Failed"){a.handleLoginRedirect()
}}}});
c.ajaxSettings.traditional=true
}(jQuery,this));
(function(a){if(window.Granite.csrf){return
}window.Granite.csrf=a(window.Granite.HTTP)
}(function(n){function b(){this._handler=[]
}b.prototype={then:function(u,t){this._handler.push({resolve:u,reject:t})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(t,u){if(this._handler===null){throw new Error("Promise already completed.")
}for(var v=0,w=this._handler.length;
v<w;
v++){this._handler[v][t].apply(window,u)
}this.then=function(y,x){(t==="resolve"?y:x).apply(window,u)
};
this._handler=null
}};
function e(u){var v=document.location.host;
var x=document.location.protocol;
var w="//"+v;
var t=x+w;
return(u===t||u.slice(0,t.length+1)===t+"/")||(u===w||u.slice(0,w.length+1)===w+"/")||!(/^(\/\/|http:|https:).*/.test(u))
}var q=":cq_csrf_token";
var g="CSRF-Token";
var l=n.externalize("/libs/granite/csrf/token.json");
var k;
var s;
function p(t){if(window.console){console.warn("CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: "+t)
}}function o(){var t=new b();
k=t;
var u=new XMLHttpRequest();
u.onreadystatechange=function(){if(u.readyState===4){try{var w=JSON.parse(u.responseText);
s=w.token;
t.resolve(s)
}catch(v){p(v);
t.reject(u.responseText)
}}};
u.open("GET",l,true);
u.send();
return t
}function d(){var u=new XMLHttpRequest();
u.open("GET",l,false);
u.send();
try{return s=JSON.parse(u.responseText).token
}catch(t){p(t)
}}function m(){s=undefined;
o()
}function a(u){var v=u.getAttribute("action");
if(u.method.toUpperCase()==="GET"||(v&&!e(v))){return
}if(!s){d()
}if(!s){return
}var t=u.querySelector('input[name="'+q+'"]');
if(!t){t=document.createElement("input");
t.setAttribute("type","hidden");
t.setAttribute("name",q);
u.appendChild(t)
}t.setAttribute("value",s)
}function j(t){var u=function(w){var v=w.target;
if(v.nodeName==="FORM"){a(v)
}};
if(t.addEventListener){t.addEventListener("submit",u,true)
}else{if(t.attachEvent){t.attachEvent("submit",u)
}}}j(document);
var h=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(v,t,u){if(v.toLowerCase()!=="get"&&e(t)){this._csrf=true;
this._async=u
}return h.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(){if(!this._csrf){c.apply(this,arguments);
return
}if(s){this.setRequestHeader(g,s);
c.apply(this,arguments);
return
}if(this._async===false){d();
if(s){this.setRequestHeader(g,s)
}c.apply(this,arguments);
return
}var t=this;
var u=Array.prototype.slice.call(arguments);
k.then(function(v){t.setRequestHeader(g,v);
c.apply(t,u)
},function(){c.apply(t,u)
})
};
var f=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return f.apply(this,arguments)
};
if(window.Node){var r=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var t=r.apply(this,arguments);
if(t.nodeName==="IFRAME"){try{if(t.contentWindow&&!t._csrf){t._csrf=true;
j(t.contentWindow.document)
}}catch(u){if(t.src&&t.src.length&&e(t.src)){if(window.console){console.error("Unable to attach CSRF token to an iframe element on the same origin")
}}}}return t
}
}o();
setInterval(function(){o()
},300000);
return{initialised:false,refreshToken:o,_clearToken:m}
}));
window.$CQ=_g.$;
window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(a){}}
}_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false,externalize:false,encodePath:false,hook:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false,externalize:false,encodePath:false,hook:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}if(url.indexOf("#")!=-1){url=url.substring(0,url.indexOf("#"))
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:Granite.HTTP.removeParameters,addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof(days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(url,encode){if((typeof G_IS_HOOKED!="undefined")&&G_IS_HOOKED(url)){return url
}if(encode){url=_g.HTTP.encodePathOfURI(url)
}url=Granite.HTTP.externalize(url);
return url
},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){if(window.CQURLInfo&&CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){Granite.HTTP.handleLoginRedirect();
return true
}return false
}catch(e){return false
}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:Granite.Util.patchText,eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:Granite.Util.getTopWindow,setIFrameMode:Granite.Util.setIFrameMode}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(a){if(a&&a[":jcr:data"]!=undefined){var b=new Object();
b.size=a[":jcr:data"];
b.type=a["jcr:mimeType"];
b.date=a["jcr:lastModified"];
a=b
}return a
},getContentPath:function(c,a,b){var d=a;
if(d.lastIndexOf(".")>d.lastIndexOf("/")){d=d.substr(0,d.indexOf(".",d.lastIndexOf("/")))
}if(c){if(c.indexOf("/")==0){d=c
}else{if(b){while(c.indexOf("../")==0){c=c.substring(3);
d=d.substring(0,d.lastIndexOf("/"))
}}c=c.replace("./","");
d=d+"/"+c
}}return d
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(a){if(!a){return""
}if(_g.XSS.KEY_REGEXP.test(a)){return a
}return a+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(e,c,a){var d="";
if(e&&c){var b=e.get(this.getXSSPropertyName(c));
if(b){d=b
}else{d=this.getXSSValue(e.get(c))
}if(a&&!isNaN(a)){d=_g.Util.ellipsis(d,a,true)
}}return d
},getXSSTablePropertyValue:function(d,c,a){var e="";
if(d&&c){var b=d[this.getXSSPropertyName(c)];
if(b){e=b
}else{e=this.getXSSValue(d[c])
}if(a&&!isNaN(a)){e=_g.Util.ellipsis(e,a,true)
}}return e
},getXSSValue:function(a){if(a){return _g.Util.htmlEncode(a)
}else{return""
}},updatePropertyName:function(a,b){if(!a||!b||!a[b]){return
}if(a.xssProtect&&!a.xssKeepPropName){a[b]=this.getXSSPropertyName(a[b])
}},xssPropertyRenderer:function(d,b,c,a){if(a&&a.dataIndex&&c&&c.data&&c.data[this.getXSSPropertyName(a.dataIndex)]){d=c.data[this.getXSSPropertyName(a.dataIndex)];
if(a.ellipsisLimit&&!isNaN(a.ellipsisLimit)){d=_g.Util.ellipsis(d,a.ellipsisLimit,true)
}return d
}else{if(d){return d
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;
_g.I18n=_g.shared.I18n;
_g.shared.I18n.getMessage=Granite.I18n.get;
_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(d,b){if(d==null||b==null){return d==null&&b==null
}if(b.length>d.length){return false
}var a=d.toString();
var c=b.toString();
return(a.indexOf(c)==0)
},endsWith:function(b,a){if(b==null||a==null){return b==null&&a==null
}if(a.length>b.length){return false
}b=b.toString();
a=a.toString();
return(b.lastIndexOf(a)==(b.length-a.length))
},contains:function(b,a){if(b==null||a==null){return false
}b=b.toString();
a=a.toString();
return(b.indexOf(a)>=0)
}}
};
_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(a){var e={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode
},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()
},debug:function(){if(console){var f=this.getMap();
var h="[ClientSidePersistence -> mode="+this.getMode().name+", container="+(this.config.container||"")+"]\n";
var g=0;
var j=new RegExp("^"+this.config.container+"/");
for(var l=0,o=Object.keys(f).sort(),m=null;
l<o.length;
l++){var n=o[l];
if(this.config.container&&(typeof(n)=="string")&&!n.match(j)){continue
}var k=f[n];
h+="-["+ ++g+"]-> '"+n.replace(j,"")+"' = '"+decodeURIComponent(k)+"'\n"
}if(!g){h+="(container is empty)"
}console.log(h)
}},keyName:function(f){return(this.config.container?(this.config.container+"/"):"")+f
},getKeys:function(){var j=this.getMap();
var h=[];
if(j){for(var f in j){if(this.config.container){if(f.indexOf(this.config.container+"/")==0){var g=f.substring(this.config.container.length+1);
h.push(g)
}}else{h.push(f)
}}}return h
},get:function(f){var g=this.getMap()[this.keyName(f)];
return g?decodeURIComponent(g):g
},set:function(g,k){g=(typeof g==="string")?g.replace(/:=/g,""):"";
var j={key:g};
g=this.keyName(g);
if(!g.length){return
}var f=[];
var l=this.getMap();
j.action=l[g]?"update":"set";
if(k){l[g]=encodeURIComponent(k)
}else{j.action="remove";
delete l[g]
}for(var h in l){f.push(h+":="+l[h])
}this.cache=l;
this.write(f.join("|"));
_g.$.extend(j,{value:k,mode:this.getMode().name,container:this.config.container});
_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,j)
},getMap:function(){if(!this.cache||!this.config.useCache){var j=this.read().split("|");
var g={};
for(var f=0;
f<j.length;
f++){var k=j[f].split(":=");
var h=k[0];
if(h&&h.length){g[h]=k[1]||""
}}this.cache=g
}return this.cache
},remove:function(f){this.set(f)
},clearMap:function(){this.write()
},read:function(){return this.config.mode.read(this)||""
},write:function(f){this.config.mode.write(this,f||"")
}};
_g.$.extend(e.config,_g.shared.ClientSidePersistence.getDefaultConfig(),a);
if(e.config.useContainer===false){e.config.container=null
}var d;
var c="test-"+Math.random();
if(e.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION){d=false;
try{window.sessionStorage.setItem(c,c);
window.sessionStorage.removeItem(c)
}catch(b){d=true
}if(d){e.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL
}}if(e.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL){d=false;
try{window.localStorage.setItem(c,c);
window.localStorage.removeItem(c)
}catch(b){d=true
}if(d){e.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW
}}return e
};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";
_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(a){return a.getWindow().sessionStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().sessionStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(a){return a.getWindow().localStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().localStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.decoratePersistenceName=function(a){return a
};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(a){return a.getWindow().name
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().name=b
}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(a){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()&&!Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)){return
}if(!b){_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)
}else{_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,b,365)
}}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:false,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}
};
_g.shared.ClientSidePersistence.CookieHelper={set:function(c,d,e){var a="";
if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
a="; expires="+b.toGMTString()
}if(d){d=encodeURIComponent(d)
}document.cookie=c+"="+d+a+"; path=/"
},read:function(b){var f=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e?decodeURIComponent(e):null
}}return null
},erase:function(a){_g.shared.ClientSidePersistence.CookieHelper.set(a,"",-1)
}};
_g.shared.ClientSidePersistence.clearAllMaps=function(){var a=[_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW];
_g.$.each(a,function(d,c){var b=new _g.shared.ClientSidePersistence({mode:c});
b.clearMap()
})
};
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var e=function(){var j=parent.frames.ContentFrame,m=j!==undefined?j.contentDocument:document;
var k=new Object();
var l=m.getElementsByTagName("label");
for(var h=0;
h<l.length;
h++){var g=l[h].htmlFor;
if(g){k[g]=l[h]
}}return k
};
var f=function(h){var j="";
var g=function(l){if(l.nodeType==3){j+=l.nodeValue
}if(l.nodeName.toLowerCase()=="select"||l.nodeName.toLowerCase()=="input"||l.nodeName.toLowerCase()=="textarea"||l.nodeName.toLowerCase()=="button"){return
}for(var k=0;
l.childNodes&&k<l.childNodes.length;
k++){g(l.childNodes[k])
}};
g(h);
return j
};
var c=function(g){return g.replace(/-\d+$/,"")
};
var b=function(h,g){if(!g){g=e()
}if(g[h]){return f(g[h])
}return null
};
var a=function(j){var h;
var k=j.nodeName.toLowerCase();
var g=d(j,"type")?j.getAttribute("type"):undefined;
if(k=="input"){if(g=="radio"||g=="checkbox"){if(d(j,"checked")){h=j.getAttribute("value")
}}else{if(j.type=="text"){h=j.defaultValue
}else{h=j.value
}}}else{if(k=="textarea"){h=j.value
}else{if(k=="option"&&d(j,"selected")){h=j.getAttribute("value")
}}}return h
};
var d=function(h,g){if(h==null){return false
}return($CQ(h).attr(g)!=undefined)
};
return{searchArray:function(h,g,k){for(var j=0;
j<h.length;
j++){if(h[j][g]&&h[j][g]==k){return h[j]
}}return null
},getLabelForField:function(g,j){if(!j){j=e()
}var k=g.getAttribute("id");
if(k&&j[k]){return f(j[k])
}var h=g.parentNode;
while(h){if(h.nodeName.toLowerCase()=="label"){return f(h)
}h=h.parentNode
}return g.getAttribute("name")
},getFields:function(){var k=parent.frames.ContentFrame,m=k!==undefined?k.contentDocument:document,l=e();
var g=[];
var h=function(q,s,r){var p=q.getAttribute("name");
var t=q.nodeName.toLowerCase();
var v;
if(t=="input"||t=="textarea"){var o=d(q,"type")?q.getAttribute("type").toLowerCase():"text";
if(o=="button"||o=="submit"||o=="reset"){return
}v=CQ.shared.Form.searchArray(g,"value",p);
if(!v){g.push({text:CQ.shared.Form.getLabelForField(q,l),value:p,name:p,enumeration:undefined,local:s,selector:r,type:t,defaultValue:a(q),node:q});
v=g[g.length-1]
}if(o=="radio"||(v.local&&o=="checkbox")){if(!v.enumeration){var w=q.getAttribute("id");
if(w){var y=c(w);
var x=b(y,l);
v.text=(x?x:p)
}else{v.text=p
}v.enumeration=[]
}v.enumeration.push({text:CQ.shared.Form.getLabelForField(q,l),value:q.getAttribute("value"),defaultValue:a(q),node:q})
}}else{if(t=="select"){g.push({text:CQ.shared.Form.getLabelForField(q,l),value:p,name:p,enumeration:[],local:s,type:t,selector:r,defaultValue:undefined,node:q});
v=g[g.length-1];
var n=q.getElementsByTagName("option");
for(var u=0;
u<n.length;
u++){v.enumeration.push({text:n[u].innerHTML,value:n[u].getAttribute("value"),defaultValue:a(n[u]),node:n[u]})
}}}};
var j=function(q,p,n){if(q.nodeName.toLowerCase()=="div"&&$CQ(q).children(".form_row").length>0){p=true;
n=$CQ(q).attr("class").replace(/\s/g,".")
}if(q.getAttribute&&q.getAttribute("name")){h(q,p,n)
}for(var o=0;
q.childNodes&&o<q.childNodes.length;
o++){var r=q.childNodes[o];
if(r.nodeType==1){j(r,p,n)
}}};
j(m,false,undefined);
return g
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},load:function(){var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}},init:function(infoData,force){if(!this.initialized||force){if(infoData){this.data=infoData
}else{this.load()
}this.initialized=true
}return this.data
},lazyInit:function(){this.lazyLoad=function(){this.load();
this.initialized=true
}
},isInitialized:function(){return this.initialized
},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad){this.lazyLoad.call(this)
}this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){return document.documentElement.lang||CQ.shared.User.getLanguage()
},urlPrefix:"/libs/cq/i18n/dict."});
(function(){var m;
var g=[],s=[];
var I=0;
var a=+new Date+"";
var b=75;
var k=40;
var F=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var x=/\b__p \+= '';/g,S=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var A=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var D=/\w*$/;
var q=/^\s*function[ \n\r\t]+\w/;
var n=/<%=([\s\S]+?)%>/g;
var X=RegExp("^["+F+"]*0+(?=.$)");
var Q=/($^)/;
var j=/\bthis\b/;
var U=/['\n\r\t\u2028\u2029\\]/g;
var y=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"];
var aa=0;
var T="[object Arguments]",u="[object Array]",B="[object Boolean]",J="[object Date]",ac="[object Function]",G="[object Number]",c="[object Object]",K="[object RegExp]",H="[object String]";
var v={};
v[ac]=false;
v[T]=v[u]=v[B]=v[J]=v[G]=v[c]=v[K]=v[H]=true;
var N={leading:false,maxWait:0,trailing:false};
var l={configurable:false,enumerable:false,value:null,writable:false};
var E={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var M={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var C=(E[typeof window]&&window)||this;
var V=E[typeof exports]&&exports&&!exports.nodeType&&exports;
var z=E[typeof module]&&module&&!module.nodeType&&module;
var P=z&&z.exports===V&&V;
var w=E[typeof global]&&global;
if(w&&(w.global===w||w.window===w)){C=w
}function h(ah,ag,ae){var ad=(ae||0)-1,af=ah?ah.length:0;
while(++ad<af){if(ah[ad]===ag){return ad
}}return -1
}function O(ad,ag){var af=typeof ag;
ad=ad.cache;
if(af=="boolean"||ag==null){return ad[ag]?0:-1
}if(af!="number"&&af!="string"){af="object"
}var ae=af=="number"?ag:a+ag;
ad=(ad=ad[af])&&ad[ae];
return af=="object"?(ad&&h(ad,ag)>-1?0:-1):(ad?0:-1)
}function L(ah){var ae=this.cache,ag=typeof ah;
if(ag=="boolean"||ah==null){ae[ah]=true
}else{if(ag!="number"&&ag!="string"){ag="object"
}var af=ag=="number"?ah:a+ah,ad=ae[ag]||(ae[ag]={});
if(ag=="object"){(ad[af]||(ad[af]=[])).push(ah)
}else{ad[af]=true
}}}function p(ad){return ad.charCodeAt(0)
}function W(af,ae){var ai=af.criteria,ak=ae.criteria,ag=-1,ah=ai.length;
while(++ag<ah){var aj=ai[ag],ad=ak[ag];
if(aj!==ad){if(aj>ad||typeof aj=="undefined"){return 1
}if(aj<ad||typeof ad=="undefined"){return -1
}}}return af.index-ae.index
}function Z(ak){var ag=-1,ai=ak.length,aj=ak[0],af=ak[(ai/2)|0],ah=ak[ai-1];
if(aj&&typeof aj=="object"&&af&&typeof af=="object"&&ah&&typeof ah=="object"){return false
}var ae=r();
ae["false"]=ae["null"]=ae["true"]=ae["undefined"]=false;
var ad=r();
ad.array=ak;
ad.cache=ae;
ad.push=L;
while(++ag<ai){ad.push(ak[ag])
}return ad
}function f(ad){return"\\"+M[ad]
}function d(){return g.pop()||[]
}function r(){return s.pop()||{array:null,cache:null,criteria:null,"false":false,index:0,"null":false,number:null,object:null,push:null,string:null,"true":false,"undefined":false,value:null}
}function R(ad){ad.length=0;
if(g.length<k){g.push(ad)
}}function o(ae){var ad=ae.cache;
if(ad){o(ad)
}ae.array=ae.cache=ae.criteria=ae.object=ae.number=ae.string=ae.value=null;
if(s.length<k){s.push(ae)
}}function t(ai,ah,ae){ah||(ah=0);
if(typeof ae=="undefined"){ae=ai?ai.length:0
}var af=-1,ag=ae-ah||0,ad=Array(ag<0?0:ag);
while(++af<ag){ad[af]=ai[ah+af]
}return ad
}function Y(ai){ai=ai?ab.defaults(C.Object(),ai,ab.pick(C,y)):C;
var aG=ai.Array,ce=ai.Boolean,cf=ai.Date,aZ=ai.Function,b4=ai.Math,be=ai.Number,c2=ai.Object,cG=ai.RegExp,cp=ai.String,aH=ai.TypeError;
var b8=[];
var cK=c2.prototype;
var cW=ai._;
var aA=cK.toString;
var b1=cG("^"+cp(aA).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");
var aW=b4.ceil,bS=ai.clearTimeout,cO=b4.floor,bC=aZ.prototype.toString,au=b5(au=c2.getPrototypeOf)&&au,a0=cK.hasOwnProperty,ax=b8.push,aX=ai.setTimeout,cn=b8.splice,cJ=b8.unshift;
var cH=(function(){try{var di={},dg=b5(dg=c2.defineProperty)&&dg,at=dg(di,di,di)&&dg
}catch(dh){}return at
}());
var aw=b5(aw=c2.create)&&aw,bf=b5(bf=aG.isArray)&&bf,aJ=ai.isFinite,bE=ai.isNaN,cj=b5(cj=c2.keys)&&cj,ck=b4.max,an=b4.min,db=ai.parseInt,bK=b4.random;
var cL={};
cL[u]=aG;
cL[B]=ce;
cL[J]=cf;
cL[ac]=aZ;
cL[c]=c2;
cL[G]=be;
cL[K]=cG;
cL[H]=cp;
function aU(at){return(at&&typeof at=="object"&&!bD(at)&&a0.call(at,"__wrapped__"))?at:new cQ(at)
}function cQ(dg,at){this.__chain__=!!at;
this.__wrapped__=dg
}cQ.prototype=aU.prototype;
var aF=aU.support={};
aF.funcDecomp=!b5(ai.WinRTError)&&j.test(Y);
aF.funcNames=typeof aZ.name=="string";
aU.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:n,variable:"",imports:{_:aU}};
function aq(dj){var di=dj[0],dg=dj[2],at=dj[4];
function dh(){if(dg){var dm=t(dg);
ax.apply(dm,arguments)
}if(this instanceof dh){var dl=b0(di.prototype),dk=di.apply(dl,dm||arguments);
return de(dk)?dk:dl
}return di.apply(at,dm||arguments)
}ae(dh,dj);
return dh
}function bj(dp,dl,dq,dj,dh){if(dq){var dr=dq(dp);
if(typeof dr!="undefined"){return dr
}}var di=de(dp);
if(di){var dm=aA.call(dp);
if(!v[dm]){return dp
}var dn=cL[dm];
switch(dm){case B:case J:return new dn(+dp);
case G:case H:return new dn(dp);
case K:dr=dn(dp.source,D.exec(dp));
dr.lastIndex=dp.lastIndex;
return dr
}}else{return dp
}var dk=bD(dp);
if(dl){var dg=!dj;
dj||(dj=d());
dh||(dh=d());
var at=dj.length;
while(at--){if(dj[at]==dp){return dh[at]
}}dr=dk?dn(dp.length):{}
}else{dr=dk?t(dp):bs({},dp)
}if(dk){if(a0.call(dp,"index")){dr.index=dp.index
}if(a0.call(dp,"input")){dr.input=dp.input
}}if(!dl){return dr
}dj.push(dp);
dh.push(dr);
(dk?bB:bO)(dp,function(ds,dt){dr[dt]=bj(ds,dl,dq,dj,dh)
});
if(dg){R(dj);
R(dh)
}return dr
}function b0(at,dg){return de(at)?aw(at):{}
}if(!aw){b0=(function(){function at(){}return function(dh){if(de(dh)){at.prototype=dh;
var dg=new at;
at.prototype=null
}return dg||ai.Object()
}
}())
}function cu(dg,at,dj){if(typeof dg!="function"){return bk
}if(typeof at=="undefined"||!("prototype" in dg)){return dg
}var di=dg.__bindData__;
if(typeof di=="undefined"){if(aF.funcNames){di=!dg.name
}di=di||!aF.funcDecomp;
if(!di){var dh=bC.call(dg);
if(!aF.funcNames){di=!q.test(dh)
}if(!di){di=j.test(dh);
ae(dg,di)
}}}if(di===false||(di!==true&&di[1]&1)){return dg
}switch(dj){case 1:return function(dk){return dg.call(at,dk)
};
case 2:return function(dl,dk){return dg.call(at,dl,dk)
};
case 3:return function(dl,dk,dm){return dg.call(at,dl,dk,dm)
};
case 4:return function(dk,dm,dl,dn){return dg.call(at,dk,dm,dl,dn)
}
}return bY(dg,at)
}function bm(di){var dk=di[0],dh=di[1],dm=di[2],dg=di[3],dq=di[4],at=di[5];
var dj=dh&1,ds=dh&2,dp=dh&4,dn=dh&8,dr=dk;
function dl(){var du=dj?dq:this;
if(dm){var dv=t(dm);
ax.apply(dv,arguments)
}if(dg||dp){dv||(dv=t(arguments));
if(dg){ax.apply(dv,dg)
}if(dp&&dv.length<at){dh|=16&~32;
return bm([dk,(dn?dh:dh&~3),dv,null,dq,at])
}}dv||(dv=arguments);
if(ds){dk=du[dr]
}if(this instanceof dl){du=b0(dk.prototype);
var dt=dk.apply(du,dv);
return de(dt)?dt:du
}return dk.apply(du,dv)
}ae(dl,di);
return dl
}function dd(di,dm){var dh=-1,dj=b6(),dg=di?di.length:0,dk=dg>=b&&dj===h,dn=[];
if(dk){var at=Z(dm);
if(at){dj=O;
dm=at
}else{dk=false
}}while(++dh<dg){var dl=di[dh];
if(dj(dm,dl)<0){dn.push(dl)
}}if(dk){o(dm)
}return dn
}function bU(di,dk,dg,dl){var dh=(dl||0)-1,at=di?di.length:0,dq=[];
while(++dh<at){var dm=di[dh];
if(dm&&typeof dm=="object"&&typeof dm.length=="number"&&(bD(dm)||a5(dm))){if(!dk){dm=bU(dm,dk,dg)
}var dp=-1,dj=dm.length,dn=dq.length;
dq.length+=dj;
while(++dp<dj){dq[dn++]=dm[dp]
}}else{if(!dg){dq.push(dm)
}}}return dq
}function bc(dy,dx,dm,du,dA,dz){if(dm){var ds=dm(dy,dx);
if(typeof ds!="undefined"){return !!ds
}}if(dy===dx){return dy!==0||(1/dy==1/dx)
}var dl=typeof dy,dj=typeof dx;
if(dy===dy&&!(dy&&E[dl])&&!(dx&&E[dj])){return false
}if(dy==null||dx==null){return dy===dx
}var dg=aA.call(dy),dq=aA.call(dx);
if(dg==T){dg=c
}if(dq==T){dq=c
}if(dg!=dq){return false
}switch(dg){case B:case J:return +dy==+dx;
case G:return(dy!=+dy)?dx!=+dx:(dy==0?(1/dy==1/dx):dy==+dx);
case K:case H:return dy==cp(dx)
}var dn=dg==u;
if(!dn){var dt=a0.call(dy,"__wrapped__"),at=a0.call(dx,"__wrapped__");
if(dt||at){return bc(dt?dy.__wrapped__:dy,at?dx.__wrapped__:dx,dm,du,dA,dz)
}if(dg!=c){return false
}var dk=dy.constructor,dh=dx.constructor;
if(dk!=dh&&!(ay(dk)&&dk instanceof dk&&ay(dh)&&dh instanceof dh)&&("constructor" in dy&&"constructor" in dx)){return false
}}var dr=!dA;
dA||(dA=d());
dz||(dz=d());
var di=dA.length;
while(di--){if(dA[di]==dy){return dz[di]==dx
}}var dv=0;
ds=true;
dA.push(dy);
dz.push(dx);
if(dn){di=dy.length;
dv=dx.length;
ds=dv==di;
if(ds||du){while(dv--){var dp=di,dw=dx[dv];
if(du){while(dp--){if((ds=bc(dy[dp],dw,dm,du,dA,dz))){break
}}}else{if(!(ds=bc(dy[dv],dw,dm,du,dA,dz))){break
}}}}}else{aj(dx,function(dD,dC,dB){if(a0.call(dB,dC)){dv++;
return(ds=a0.call(dy,dC)&&bc(dy[dC],dD,dm,du,dA,dz))
}});
if(ds&&!du){aj(dy,function(dD,dC,dB){if(a0.call(dB,dC)){return(ds=--dv>-1)
}})
}}dA.pop();
dz.pop();
if(dr){R(dA);
R(dz)
}return ds
}function ah(dg,dh,dj,at,di){(bD(dh)?bB:bO)(dh,function(dr,dm){var dq,dn,dl=dr,dp=dg[dm];
if(dr&&((dn=bD(dr))||aO(dr))){var ds=at.length;
while(ds--){if((dq=at[ds]==dr)){dp=di[ds];
break
}}if(!dq){var dk;
if(dj){dl=dj(dp,dr);
if((dk=typeof dl!="undefined")){dp=dl
}}if(!dk){dp=dn?(bD(dp)?dp:[]):(aO(dp)?dp:{})
}at.push(dr);
di.push(dp);
if(!dk){ah(dp,dr,dj,at,di)
}}}else{if(dj){dl=dj(dp,dr);
if(typeof dl=="undefined"){dl=dr
}}if(typeof dl!="undefined"){dp=dl
}}dg[dm]=dp
})
}function ap(dg,at){return dg+cO(bK()*(at-dg+1))
}function af(dl,di,dq){var dk=-1,dm=b6(),dh=dl?dl.length:0,dr=[];
var dn=!di&&dh>=b&&dm===h,dg=(dq||dn)?d():dr;
if(dn){var at=Z(dg);
dm=O;
dg=at
}while(++dk<dh){var dp=dl[dk],dj=dq?dq(dp,dk,dl):dp;
if(di?!dk||dg[dg.length-1]!==dj:dm(dg,dj)<0){if(dq||dn){dg.push(dj)
}dr.push(dp)
}}if(dn){R(dg.array);
o(dg)
}else{if(dq){R(dg)
}}return dr
}function bT(at){return function(dl,dm,dh){var dg={};
dm=aU.createCallback(dm,dh,3);
var di=-1,dj=dl?dl.length:0;
if(typeof dj=="number"){while(++di<dj){var dk=dl[di];
at(dg,dk,dm(dk,di,dl),dl)
}}else{bO(dl,function(dp,dn,dq){at(dg,dp,dm(dp,dn,dq),dq)
})
}return dg
}
}function cM(dl,di,dm,dh,ds,at){var dk=di&1,dt=di&2,dq=di&4,dp=di&8,dg=di&16,dn=di&32;
if(!dt&&!ay(dl)){throw new aH
}if(dg&&!dm.length){di&=~16;
dg=dm=false
}if(dn&&!dh.length){di&=~32;
dn=dh=false
}var dj=dl&&dl.__bindData__;
if(dj&&dj!==true){dj=t(dj);
if(dj[2]){dj[2]=t(dj[2])
}if(dj[3]){dj[3]=t(dj[3])
}if(dk&&!(dj[1]&1)){dj[4]=ds
}if(!dk&&dj[1]&1){di|=8
}if(dq&&!(dj[1]&4)){dj[5]=at
}if(dg){ax.apply(dj[2]||(dj[2]=[]),dm)
}if(dn){cJ.apply(dj[3]||(dj[3]=[]),dh)
}dj[1]|=di;
return cM.apply(null,dj)
}var dr=(di==1||di===17)?aq:bm;
return dr([dl,di,dm,dh,ds,at])
}function bo(at){return aT[at]
}function b6(){var at=(at=aU.indexOf)===c5?h:at;
return at
}function b5(at){return typeof at=="function"&&b1.test(at)
}var ae=!cH?ag:function(at,dg){l.value=dg;
cH(at,"__bindData__",l)
};
function aL(dh){var dg,at;
if(!(dh&&aA.call(dh)==c)||(dg=dh.constructor,ay(dg)&&!(dg instanceof dg))){return false
}aj(dh,function(dj,di){at=di
});
return typeof at=="undefined"||a0.call(dh,at)
}function bp(at){return bV[at]
}function a5(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aA.call(at)==T||false
}var bD=bf||function(at){return at&&typeof at=="object"&&typeof at.length=="number"&&aA.call(at)==u||false
};
var bd=function(dh){var dg,di=dh,at=[];
if(!di){return at
}if(!(E[typeof dh])){return at
}for(dg in di){if(a0.call(di,dg)){at.push(dg)
}}return at
};
var ca=!cj?bd:function(at){if(!de(at)){return[]
}return cj(at)
};
var aT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bV=b7(aT);
var cb=cG("("+ca(bV).join("|")+")","g"),ch=cG("["+ca(aT).join("")+"]","g");
var bs=function(dj,at,dm){var dl,di=dj,ds=di;
if(!di){return ds
}var dp=arguments,dg=0,dk=typeof dm=="number"?2:dp.length;
if(dk>3&&typeof dp[dk-2]=="function"){var dr=cu(dp[--dk-1],dp[dk--],2)
}else{if(dk>2&&typeof dp[dk-1]=="function"){dr=dp[--dk]
}}while(++dg<dk){di=dp[dg];
if(di&&E[typeof di]){var dn=-1,dq=E[typeof di]&&ca(di),dh=dq?dq.length:0;
while(++dn<dh){dl=dq[dn];
ds[dl]=dr?dr(ds[dl],di[dl]):di[dl]
}}}return ds
};
function cC(dh,dg,di,at){if(typeof dg!="boolean"&&dg!=null){at=di;
di=dg;
dg=false
}return bj(dh,dg,typeof di=="function"&&cu(di,at,1))
}function da(dg,dh,at){return bj(dg,true,typeof dh=="function"&&cu(dh,at,1))
}function aQ(dg,dh){var at=b0(dg);
return dh?bs(at,dh):at
}var bt=function(dj,at,dm){var dl,di=dj,dr=di;
if(!di){return dr
}var dp=arguments,dg=0,dk=typeof dm=="number"?2:dp.length;
while(++dg<dk){di=dp[dg];
if(di&&E[typeof di]){var dn=-1,dq=E[typeof di]&&ca(di),dh=dq?dq.length:0;
while(++dn<dh){dl=dq[dn];
if(typeof dr[dl]=="undefined"){dr[dl]=di[dl]
}}}}return dr
};
function cs(dh,di,dg){var at;
di=aU.createCallback(di,dg,3);
bO(dh,function(dl,dk,dj){if(di(dl,dk,dj)){at=dk;
return false
}});
return at
}function bN(dh,di,dg){var at;
di=aU.createCallback(di,dg,3);
c1(dh,function(dl,dk,dj){if(di(dl,dk,dj)){at=dk;
return false
}});
return at
}var aj=function(dj,dk,dg){var dh,di=dj,at=di;
if(!di){return at
}if(!E[typeof di]){return at
}dk=dk&&typeof dg=="undefined"?dk:cu(dk,dg,3);
for(dh in di){if(dk(di[dh],dh,dj)===false){return at
}}return at
};
function ct(dg,dj,at){var di=[];
aj(dg,function(dl,dk){di.push(dk,dl)
});
var dh=di.length;
dj=cu(dj,at,3);
while(dh--){if(dj(di[dh--],di[dh],dg)===false){break
}}return dg
}var bO=function(dh,dm,dk){var di,dg=dh,dn=dg;
if(!dg){return dn
}if(!E[typeof dg]){return dn
}dm=dm&&typeof dk=="undefined"?dm:cu(dm,dk,3);
var dj=-1,dl=E[typeof dg]&&ca(dg),at=dl?dl.length:0;
while(++dj<at){di=dl[dj];
if(dm(dg[di],di,dh)===false){return dn
}}return dn
};
function c1(dg,dk,at){var di=ca(dg),dj=di.length;
dk=cu(dk,at,3);
while(dj--){var dh=di[dj];
if(dk(dg[dh],dh,dg)===false){break
}}return dg
}function cI(dg){var at=[];
aj(dg,function(di,dh){if(ay(di)){at.push(dh)
}});
return at.sort()
}function cY(at,dg){return at?a0.call(at,dg):false
}function b7(dh){var dg=-1,dj=ca(dh),dk=dj.length,at={};
while(++dg<dk){var di=dj[dg];
at[dh[di]]=di
}return at
}function bH(at){return at===true||at===false||at&&typeof at=="object"&&aA.call(at)==B||false
}function a8(at){return at&&typeof at=="object"&&aA.call(at)==J||false
}function b2(at){return at&&at.nodeType===1||false
}function cq(di){var at=true;
if(!di){return at
}var dg=aA.call(di),dh=di.length;
if((dg==u||dg==H||dg==T)||(dg==c&&typeof dh=="number"&&ay(di.splice))){return !dh
}bO(di,function(){return(at=false)
});
return at
}function b3(dh,at,di,dg){return bc(dh,at,typeof di=="function"&&cu(di,dg,2))
}function aK(at){return aJ(at)&&!bE(parseFloat(at))
}function ay(at){return typeof at=="function"
}function de(at){return !!(at&&E[typeof at])
}function bQ(at){return br(at)&&at!=+at
}function c4(at){return at===null
}function br(at){return typeof at=="number"||at&&typeof at=="object"&&aA.call(at)==G||false
}var aO=!au?aL:function(dh){if(!(dh&&aA.call(dh)==c)){return false
}var at=dh.valueOf,dg=b5(at)&&(dg=au(at))&&au(dg);
return dg?(dh==dg||au(dh)==dg):aL(dh)
};
function cS(at){return at&&typeof at=="object"&&aA.call(at)==K||false
}function cz(at){return typeof at=="string"||at&&typeof at=="object"&&aA.call(at)==H||false
}function bX(at){return typeof at=="undefined"
}function bh(dh,di,dg){var at={};
di=aU.createCallback(di,dg,3);
bO(dh,function(dl,dk,dj){at[dk]=di(dl,dk,dj)
});
return at
}function bJ(dj){var di=arguments,dk=2;
if(!de(dj)){return dj
}if(typeof di[2]!="number"){dk=di.length
}if(dk>3&&typeof di[dk-2]=="function"){var dm=cu(di[--dk-1],di[dk--],2)
}else{if(dk>2&&typeof di[dk-1]=="function"){dm=di[--dk]
}}var dh=t(arguments,1,dk),dg=-1,at=d(),dl=d();
while(++dg<dk){ah(dj,dh[dg],dm,at,dl)
}R(at);
R(dl);
return dj
}function cv(di,dm,dg){var at={};
if(typeof dm!="function"){var dk=[];
aj(di,function(dp,dn){dk.push(dn)
});
dk=dd(dk,bU(arguments,true,false,1));
var dh=-1,dl=dk.length;
while(++dh<dl){var dj=dk[dh];
at[dj]=di[dj]
}}else{dm=aU.createCallback(dm,dg,3);
aj(di,function(dq,dp,dn){if(!dm(dq,dp,dn)){at[dp]=dq
}})
}return at
}function bz(dh){var dg=-1,dj=ca(dh),dk=dj.length,at=aG(dk);
while(++dg<dk){var di=dj[dg];
at[dg]=[di,dh[di]]
}return at
}function bL(di,dm,dg){var at={};
if(typeof dm!="function"){var dh=-1,dk=bU(arguments,true,false,1),dl=de(di)?dk.length:0;
while(++dh<dl){var dj=dk[dh];
if(dj in di){at[dj]=di[dj]
}}}else{dm=aU.createCallback(dm,dg,3);
aj(di,function(dq,dp,dn){if(dm(dq,dp,dn)){at[dp]=dq
}})
}return at
}function cX(dh,dl,dg,at){var dk=bD(dh);
if(dg==null){if(dk){dg=[]
}else{var dj=dh&&dh.constructor,di=dj&&dj.prototype;
dg=b0(di)
}}if(dl){dl=aU.createCallback(dl,at,4);
(dk?bB:bO)(dh,function(dp,dn,dm){return dl(dg,dp,dn,dm)
})
}return dg
}function bw(dh){var dg=-1,di=ca(dh),dj=di.length,at=aG(dj);
while(++dg<dj){at[dg]=dh[di[dg]]
}return at
}function cN(dk){var dh=arguments,dg=-1,di=bU(dh,true,false,1),dj=(dh[2]&&dh[2][dh[1]]===dk)?1:di.length,at=aG(dj);
while(++dg<dj){at[dg]=dk[di[dg]]
}return at
}function a4(dl,dk,di){var dg=-1,dh=b6(),dj=dl?dl.length:0,at=false;
di=(di<0?ck(0,dj+di):di)||0;
if(bD(dl)){at=dh(dl,dk,di)>-1
}else{if(typeof dj=="number"){at=(cz(dl)?dl.indexOf(dk,di):dh(dl,dk,di))>-1
}else{bO(dl,function(dm){if(++dg>=di){return !(at=dm===dk)
}})
}}return at
}var bI=bT(function(at,dh,dg){(a0.call(at,dg)?at[dg]++:at[dg]=1)
});
function az(dj,dk,dg){var at=true;
dk=aU.createCallback(dk,dg,3);
var dh=-1,di=dj?dj.length:0;
if(typeof di=="number"){while(++dh<di){if(!(at=!!dk(dj[dh],dh,dj))){break
}}}else{bO(dj,function(dm,dl,dn){return(at=!!dk(dm,dl,dn))
})
}return at
}function bP(dk,dl,dg){var at=[];
dl=aU.createCallback(dl,dg,3);
var dh=-1,di=dk?dk.length:0;
if(typeof di=="number"){while(++dh<di){var dj=dk[dh];
if(dl(dj,dh,dk)){at.push(dj)
}}}else{bO(dk,function(dn,dm,dp){if(dl(dn,dm,dp)){at.push(dn)
}})
}return at
}function bG(dk,dl,dg){dl=aU.createCallback(dl,dg,3);
var dh=-1,di=dk?dk.length:0;
if(typeof di=="number"){while(++dh<di){var dj=dk[dh];
if(dl(dj,dh,dk)){return dj
}}}else{var at;
bO(dk,function(dn,dm,dp){if(dl(dn,dm,dp)){at=dn;
return false
}});
return at
}}function c8(dh,di,dg){var at;
di=aU.createCallback(di,dg,3);
ar(dh,function(dk,dj,dl){if(di(dk,dj,dl)){at=dk;
return false
}});
return at
}function bB(di,dj,at){var dg=-1,dh=di?di.length:0;
dj=dj&&typeof at=="undefined"?dj:cu(dj,at,3);
if(typeof dh=="number"){while(++dg<dh){if(dj(di[dg],dg,di)===false){break
}}}else{bO(di,dj)
}return di
}function ar(di,dj,at){var dh=di?di.length:0;
dj=dj&&typeof at=="undefined"?dj:cu(dj,at,3);
if(typeof dh=="number"){while(dh--){if(dj(di[dh],dh,di)===false){break
}}}else{var dg=ca(di);
dh=dg.length;
bO(di,function(dl,dk,dm){dk=dg?dg[--dh]:--dh;
return dj(dm[dk],dk,dm)
})
}return di
}var bq=bT(function(at,dh,dg){(a0.call(at,dg)?at[dg]:at[dg]=[]).push(dh)
});
var c6=bT(function(at,dh,dg){at[dg]=dh
});
function aI(dl,dg){var di=t(arguments,2),dh=-1,dk=typeof dg=="function",dj=dl?dl.length:0,at=aG(typeof dj=="number"?dj:0);
bB(dl,function(dm){at[++dh]=(dk?dg:dm[dg]).apply(dm,di)
});
return at
}function bl(dj,dk,dg){var dh=-1,di=dj?dj.length:0;
dk=aU.createCallback(dk,dg,3);
if(typeof di=="number"){var at=aG(di);
while(++dh<di){at[dh]=dk(dj[dh],dh,dj)
}}else{at=[];
bO(dj,function(dm,dl,dn){at[++dh]=dk(dm,dl,dn)
})
}return at
}function bi(dl,dm,dg){var dj=-Infinity,at=dj;
if(typeof dm!="function"&&dg&&dg[dm]===dl){dm=null
}if(dm==null&&bD(dl)){var dh=-1,di=dl.length;
while(++dh<di){var dk=dl[dh];
if(dk>at){at=dk
}}}else{dm=(dm==null&&cz(dl))?p:aU.createCallback(dm,dg,3);
bB(dl,function(dp,dn,dr){var dq=dm(dp,dn,dr);
if(dq>dj){dj=dq;
at=dp
}})
}return at
}function cm(dl,dm,dg){var dj=Infinity,at=dj;
if(typeof dm!="function"&&dg&&dg[dm]===dl){dm=null
}if(dm==null&&bD(dl)){var dh=-1,di=dl.length;
while(++dh<di){var dk=dl[dh];
if(dk<at){at=dk
}}}else{dm=(dm==null&&cz(dl))?p:aU.createCallback(dm,dg,3);
bB(dl,function(dp,dn,dr){var dq=dm(dp,dn,dr);
if(dq<dj){dj=dq;
at=dp
}})
}return at
}var c9=bl;
function co(dk,dl,dg,at){if(!dk){return dg
}var di=arguments.length<3;
dl=aU.createCallback(dl,at,4);
var dh=-1,dj=dk.length;
if(typeof dj=="number"){if(di){dg=dk[++dh]
}while(++dh<dj){dg=dl(dg,dk[dh],dh,dk)
}}else{bO(dk,function(dn,dm,dp){dg=di?(di=false,dn):dl(dg,dn,dm,dp)
})
}return dg
}function cU(di,dj,dg,at){var dh=arguments.length<3;
dj=aU.createCallback(dj,at,4);
ar(di,function(dl,dk,dm){dg=dh?(dh=false,dl):dj(dg,dl,dk,dm)
});
return dg
}function aB(dg,dh,at){dh=aU.createCallback(dh,at,3);
return bP(dg,function(dj,di,dk){return !dh(dj,di,dk)
})
}function cT(dh,di,dg){if(dh&&typeof dh.length!="number"){dh=bw(dh)
}if(di==null||dg){return dh?dh[ap(0,dh.length-1)]:m
}var at=bx(dh);
at.length=an(ck(0,di),at.length);
return at
}function bx(di){var dg=-1,dh=di?di.length:0,at=aG(typeof dh=="number"?dh:0);
bB(di,function(dk){var dj=ap(0,++dg);
at[dg]=at[dj];
at[dj]=dk
});
return at
}function a7(dg){var at=dg?dg.length:0;
return typeof at=="number"?at:ca(dg).length
}function a6(dj,dk,dg){var at;
dk=aU.createCallback(dk,dg,3);
var dh=-1,di=dj?dj.length:0;
if(typeof di=="number"){while(++dh<di){if((at=dk(dj[dh],dh,dj))){break
}}}else{bO(dj,function(dm,dl,dn){return !(at=dk(dm,dl,dn))
})
}return !!at
}function a9(dl,dm,dg){var di=-1,dk=bD(dm),dj=dl?dl.length:0,at=aG(typeof dj=="number"?dj:0);
if(!dk){dm=aU.createCallback(dm,dg,3)
}bB(dl,function(dq,dp,dr){var dn=at[++di]=r();
if(dk){dn.criteria=bl(dm,function(ds){return dq[ds]
})
}else{(dn.criteria=d())[0]=dm(dq,dp,dr)
}dn.index=di;
dn.value=dq
});
dj=at.length;
at.sort(W);
while(dj--){var dh=at[dj];
at[dj]=dh.value;
if(!dk){R(dh.criteria)
}o(dh)
}return at
}function aD(at){if(at&&typeof at.length=="number"){return t(at)
}return bw(at)
}var ak=bP;
function aP(dj){var dg=-1,dh=dj?dj.length:0,at=[];
while(++dg<dh){var di=dj[dg];
if(di){at.push(di)
}}return at
}function ad(at){return dd(at,bU(arguments,true,true,1))
}function c3(dj,di,at){var dg=-1,dh=dj?dj.length:0;
di=aU.createCallback(di,at,3);
while(++dg<dh){if(di(dj[dg],dg,dj)){return dg
}}return -1
}function aM(di,dh,at){var dg=di?di.length:0;
dh=aU.createCallback(dh,at,3);
while(dg--){if(dh(di[dg],dg,di)){return dg
}}return -1
}function bg(dk,dj,at){var di=0,dh=dk?dk.length:0;
if(typeof dj!="number"&&dj!=null){var dg=-1;
dj=aU.createCallback(dj,at,3);
while(++dg<dh&&dj(dk[dg],dg,dk)){di++
}}else{di=dj;
if(di==null||at){return dk?dk[0]:m
}}return t(dk,0,an(ck(0,di),dh))
}function cB(di,at,dh,dg){if(typeof at!="boolean"&&at!=null){dg=dh;
dh=(typeof at!="function"&&dg&&dg[at]===di)?null:at;
at=false
}if(dh!=null){di=bl(di,dh,dg)
}return bU(di,at)
}function c5(dj,di,dg){if(typeof dg=="number"){var dh=dj?dj.length:0;
dg=(dg<0?ck(0,dh+dg):dg||0)
}else{if(dg){var at=ba(dj,di);
return dj[at]===di?at:-1
}}return h(dj,di,dg)
}function c7(dk,dj,at){var di=0,dh=dk?dk.length:0;
if(typeof dj!="number"&&dj!=null){var dg=dh;
dj=aU.createCallback(dj,at,3);
while(dg--&&dj(dk[dg],dg,dk)){di++
}}else{di=(dj==null||at)?1:dj||di
}return t(dk,0,an(ck(0,dh-di),dh))
}function cy(){var dp=[],dh=-1,dk=arguments.length,dn=d(),dq=b6(),dj=dq===h,dg=d();
while(++dh<dk){var dr=arguments[dh];
if(bD(dr)||a5(dr)){dp.push(dr);
dn.push(dj&&dr.length>=b&&Z(dh?dp[dh]:dg))
}}var dm=dp[0],dl=-1,di=dm?dm.length:0,ds=[];
outer:while(++dl<di){var at=dn[0];
dr=dm[dl];
if((at?O(at,dr):dq(dg,dr))<0){dh=dk;
(at||dg).push(dr);
while(--dh){at=dn[dh];
if((at?O(at,dr):dq(dp[dh],dr))<0){continue outer
}}ds.push(dr)
}}while(dk--){at=dn[dk];
if(at){o(at)
}}R(dn);
R(dg);
return ds
}function bu(dk,dj,at){var di=0,dh=dk?dk.length:0;
if(typeof dj!="number"&&dj!=null){var dg=dh;
dj=aU.createCallback(dj,at,3);
while(dg--&&dj(dk[dg],dg,dk)){di++
}}else{di=dj;
if(di==null||at){return dk?dk[dh-1]:m
}}return t(dk,ck(0,dh-di))
}function df(di,dh,dg){var at=di?di.length:0;
if(typeof dg=="number"){at=(dg<0?ck(0,at+dg):an(dg,at-1))+1
}while(at--){if(di[at]===dh){return at
}}return -1
}function cc(dl){var dh=arguments,at=0,dj=dh.length,di=dl?dl.length:0;
while(++at<dj){var dg=-1,dk=dh[at];
while(++dg<di){if(dl[dg]===dk){cn.call(dl,dg--,1);
di--
}}}return dl
}function aY(dk,dg,dj){dk=+dk||0;
dj=typeof dj=="number"?dj:(+dj||1);
if(dg==null){dg=dk;
dk=0
}var dh=-1,di=ck(0,aW((dg-dk)/(dj||1))),at=aG(di);
while(++dh<di){at[dh]=dk;
dk+=dj
}return at
}function aN(dl,dk,dg){var dh=-1,di=dl?dl.length:0,at=[];
dk=aU.createCallback(dk,dg,3);
while(++dh<di){var dj=dl[dh];
if(dk(dj,dh,dl)){at.push(dj);
cn.call(dl,dh--,1);
di--
}}return at
}function b9(dk,dj,at){if(typeof dj!="number"&&dj!=null){var di=0,dg=-1,dh=dk?dk.length:0;
dj=aU.createCallback(dj,at,3);
while(++dg<dh&&dj(dk[dg],dg,dk)){di++
}}else{di=(dj==null||at)?1:ck(0,dj)
}return t(dk,di)
}function ba(dl,dj,dk,dg){var at=0,di=dl?dl.length:at;
dk=dk?aU.createCallback(dk,dg,1):bk;
dj=dk(dj);
while(at<di){var dh=(at+di)>>>1;
(dk(dl[dh])<dj)?at=dh+1:di=dh
}return at
}function av(){return af(bU(arguments,true,true))
}function bR(di,dh,dg,at){if(typeof dh!="boolean"&&dh!=null){at=dg;
dg=(typeof dh!="function"&&at&&at[dh]===di)?null:dh;
dh=false
}if(dg!=null){dg=aU.createCallback(dg,at,3)
}return af(di,dh,dg)
}function c0(at){return dd(at,t(arguments,1))
}function bZ(){var dg=-1,dh=arguments.length;
while(++dg<dh){var di=arguments[dg];
if(bD(di)||a5(di)){var at=at?af(dd(at,di).concat(dd(di,at))):di
}}return at||[]
}function ao(){var di=arguments.length>1?arguments:arguments[0],dg=-1,dh=di?bi(c9(di,"length")):0,at=aG(dh<0?0:dh);
while(++dg<dh){at[dg]=c9(di,dg)
}return at
}function cD(dk,dg){var dh=-1,dj=dk?dk.length:0,at={};
if(!dg&&dj&&!bD(dk[0])){dg=[]
}while(++dh<dj){var di=dk[dh];
if(dg){at[di]=dg[dh]
}else{if(di){at[di[0]]=di[1]
}}}return at
}function aS(dg,at){if(!ay(at)){throw new aH
}return function(){if(--dg<1){return at.apply(this,arguments)
}}
}function bY(dg,at){return arguments.length>2?cM(dg,17,t(arguments,2),null,at):cM(dg,1,null,null,at)
}function bv(dh){var at=arguments.length>1?bU(arguments,true,false,1):cI(dh),dg=-1,dj=at.length;
while(++dg<dj){var di=at[dg];
dh[di]=cM(dh[di],1,null,null,dh)
}return dh
}function cR(at,dg){return arguments.length>2?cM(dg,19,t(arguments,2),null,at):cM(dg,3,null,null,at)
}function cF(){var at=arguments,dg=at.length;
while(dg--){if(!ay(at[dg])){throw new aH
}}return function(){var dh=arguments,di=at.length;
while(di--){dh=[at[di].apply(this,dh)]
}return dh[0]
}
}function cP(at,dg){dg=typeof dg=="number"?dg:(+dg||at.length);
return cM(at,4,null,null,null,dg)
}function cE(di,dn,du){var dq,dl,dv,at,ds,dt,dr,dm=0,dk=false,dp=true;
if(!ay(di)){throw new aH
}dn=ck(0,dn)||0;
if(du===true){var dh=true;
dp=false
}else{if(de(du)){dh=du.leading;
dk="maxWait" in du&&(ck(dn,du.maxWait)||0);
dp="trailing" in du?du.trailing:dp
}}var dj=function(){var dx=dn-(cg()-at);
if(dx<=0){if(dl){bS(dl)
}var dw=dr;
dl=dt=dr=m;
if(dw){dm=cg();
dv=di.apply(ds,dq);
if(!dt&&!dl){dq=ds=null
}}}else{dt=aX(dj,dx)
}};
var dg=function(){if(dt){bS(dt)
}dl=dt=dr=m;
if(dp||(dk!==dn)){dm=cg();
dv=di.apply(ds,dq);
if(!dt&&!dl){dq=ds=null
}}};
return function(){dq=arguments;
at=cg();
ds=this;
dr=dp&&(dt||!dh);
if(dk===false){var dw=dh&&!dt
}else{if(!dl&&!dh){dm=at
}var dy=dk-(at-dm),dx=dy<=0;
if(dx){if(dl){dl=bS(dl)
}dm=at;
dv=di.apply(ds,dq)
}else{if(!dl){dl=aX(dg,dy)
}}}if(dx&&dt){dt=bS(dt)
}else{if(!dt&&dn!==dk){dt=aX(dj,dn)
}}if(dw){dx=true;
dv=di.apply(ds,dq)
}if(dx&&!dt&&!dl){dq=ds=null
}return dv
}
}function a1(dg){if(!ay(dg)){throw new aH
}var at=t(arguments,1);
return aX(function(){dg.apply(m,at)
},1)
}function bM(dg,dh){if(!ay(dg)){throw new aH
}var at=t(arguments,2);
return aX(function(){dg.apply(m,at)
},dh)
}function a3(dg,dh){if(!ay(dg)){throw new aH
}var at=function(){var di=at.cache,dj=dh?dh.apply(this,arguments):a+arguments[0];
return a0.call(di,dj)?di[dj]:(di[dj]=dg.apply(this,arguments))
};
at.cache={};
return at
}function cx(dh){var dg,at;
if(!ay(dh)){throw new aH
}return function(){if(dg){return at
}dg=true;
at=dh.apply(this,arguments);
dh=null;
return at
}
}function cV(at){return cM(at,16,t(arguments,1))
}function cr(at){return cM(at,32,null,t(arguments,1))
}function cl(dg,dh,at){var dj=true,di=true;
if(!ay(dg)){throw new aH
}if(at===false){dj=false
}else{if(de(at)){dj="leading" in at?at.leading:dj;
di="trailing" in at?at.trailing:di
}}N.leading=dj;
N.maxWait=dh;
N.trailing=di;
return cE(dg,dh,N)
}function bW(at,dg){return cM(dg,16,[at])
}function cw(at){return function(){return at
}
}function aE(dk,dg,dl){var dj=typeof dk;
if(dk==null||dj=="function"){return cu(dk,dg,dl)
}if(dj!="object"){return a2(dk)
}var di=ca(dk),dh=di[0],at=dk[dh];
if(di.length==1&&at===at&&!de(at)){return function(dn){var dm=dn[dh];
return at===dm&&(at!==0||(1/at==1/dm))
}
}return function(dn){var dp=di.length,dm=false;
while(dp--){if(!(dm=bc(dn[di[dp]],dk[di[dp]],null,true))){break
}}return dm
}
}function bb(at){return at==null?"":cp(at).replace(ch,bo)
}function bk(at){return at
}function aC(dg,dl,at){var dh=true,dj=dl&&cI(dl);
if(!dl||(!at&&!dj.length)){if(at==null){at=dl
}di=cQ;
dl=dg;
dg=aU;
dj=cI(dl)
}if(at===false){dh=false
}else{if(de(at)&&"chain" in at){dh=at.chain
}}var di=dg,dk=ay(di);
bB(dj,function(dm){var dn=dg[dm]=dl[dm];
if(dk){di.prototype[dm]=function(){var dq=this.__chain__,ds=this.__wrapped__,dr=[ds];
ax.apply(dr,arguments);
var dp=dn.apply(dg,dr);
if(dh||dq){if(ds===dp&&de(dp)){return this
}dp=new di(dp);
dp.__chain__=dq
}return dp
}
}})
}function cZ(){ai._=cW;
return this
}function ag(){}var cg=b5(cg=cf.now)&&cg||function(){return new cf().getTime()
};
var dc=db(F+"08")==8?db:function(dg,at){return db(cz(dg)?dg.replace(X,""):dg,at||0)
};
function a2(at){return function(dg){return dg[at]
}
}function cd(dh,at,dk){var dj=dh==null,dg=at==null;
if(dk==null){if(typeof dh=="boolean"&&dg){dk=dh;
dh=1
}else{if(!dg&&typeof at=="boolean"){dk=at;
dg=true
}}}if(dj&&dg){at=1
}dh=+dh||0;
if(dg){at=dh;
dh=0
}else{at=+at||0
}if(dk||dh%1||at%1){var di=bK();
return an(dh+(di*(at-dh+parseFloat("1e-"+((di+"").length-1)))),at)
}return ap(dh,at)
}function aR(at,dg){if(at){var dh=at[dg];
return ay(dh)?at[dg]():dh
}}function bF(dt,dm,dw){var dj=aU.templateSettings;
dt=cp(dt||"");
dw=bt({},dw,dj);
var dh=bt({},dw.imports,dj.imports),dn=ca(dh),di=bw(dh);
var ds,dp=0,dr=dw.interpolate||Q,dg="__p += '";
var dv=cG((dw.escape||Q).source+"|"+dr.source+"|"+(dr===n?A:Q).source+"|"+(dw.evaluate||Q).source+"|$","g");
dt.replace(dv,function(dx,dB,dz,dy,dA,dC){dz||(dz=dy);
dg+=dt.slice(dp,dC).replace(U,f);
if(dB){dg+="' +\n__e("+dB+") +\n'"
}if(dA){ds=true;
dg+="';\n"+dA+";\n__p += '"
}if(dz){dg+="' +\n((__t = ("+dz+")) == null ? '' : __t) +\n'"
}dp=dC+dx.length;
return dx
});
dg+="';\n";
var dk=dw.variable,dl=dk;
if(!dl){dk="obj";
dg="with ("+dk+") {\n"+dg+"\n}\n"
}dg=(ds?dg.replace(x,""):dg).replace(S,"$1").replace(e,"$1;");
dg="function("+dk+") {\n"+(dl?"":dk+" || ("+dk+" = {});\n")+"var __t, __p = '', __e = _.escape"+(ds?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+dg+"return __p\n}";
var at="\n/*\n//# sourceURL="+(dw.sourceURL||"/lodash/template/source["+(aa++)+"]")+"\n*/";
try{var du=aZ(dn,"return "+dg+at).apply(m,di)
}catch(dq){dq.source=dg;
throw dq
}if(dm){return du(dm)
}du.source=dg;
return du
}function al(dj,di,dg){dj=(dj=+dj)>-1?dj:0;
var dh=-1,at=aG(dj);
di=cu(di,dg,1);
while(++dh<dj){at[dh]=di(dh)
}return at
}function am(at){return at==null?"":cp(at).replace(cb,bp)
}function ci(at){var dg=++I;
return cp(at==null?"":at)+dg
}function by(at){at=new cQ(at);
at.__chain__=true;
return at
}function cA(at,dg){dg(at);
return at
}function bA(){this.__chain__=true;
return this
}function bn(){return cp(this.__wrapped__)
}function aV(){return this.__wrapped__
}aU.after=aS;
aU.assign=bs;
aU.at=cN;
aU.bind=bY;
aU.bindAll=bv;
aU.bindKey=cR;
aU.chain=by;
aU.compact=aP;
aU.compose=cF;
aU.constant=cw;
aU.countBy=bI;
aU.create=aQ;
aU.createCallback=aE;
aU.curry=cP;
aU.debounce=cE;
aU.defaults=bt;
aU.defer=a1;
aU.delay=bM;
aU.difference=ad;
aU.filter=bP;
aU.flatten=cB;
aU.forEach=bB;
aU.forEachRight=ar;
aU.forIn=aj;
aU.forInRight=ct;
aU.forOwn=bO;
aU.forOwnRight=c1;
aU.functions=cI;
aU.groupBy=bq;
aU.indexBy=c6;
aU.initial=c7;
aU.intersection=cy;
aU.invert=b7;
aU.invoke=aI;
aU.keys=ca;
aU.map=bl;
aU.mapValues=bh;
aU.max=bi;
aU.memoize=a3;
aU.merge=bJ;
aU.min=cm;
aU.omit=cv;
aU.once=cx;
aU.pairs=bz;
aU.partial=cV;
aU.partialRight=cr;
aU.pick=bL;
aU.pluck=c9;
aU.property=a2;
aU.pull=cc;
aU.range=aY;
aU.reject=aB;
aU.remove=aN;
aU.rest=b9;
aU.shuffle=bx;
aU.sortBy=a9;
aU.tap=cA;
aU.throttle=cl;
aU.times=al;
aU.toArray=aD;
aU.transform=cX;
aU.union=av;
aU.uniq=bR;
aU.values=bw;
aU.where=ak;
aU.without=c0;
aU.wrap=bW;
aU.xor=bZ;
aU.zip=ao;
aU.zipObject=cD;
aU.collect=bl;
aU.drop=b9;
aU.each=bB;
aU.eachRight=ar;
aU.extend=bs;
aU.methods=cI;
aU.object=cD;
aU.select=bP;
aU.tail=b9;
aU.unique=bR;
aU.unzip=ao;
aC(aU);
aU.clone=cC;
aU.cloneDeep=da;
aU.contains=a4;
aU.escape=bb;
aU.every=az;
aU.find=bG;
aU.findIndex=c3;
aU.findKey=cs;
aU.findLast=c8;
aU.findLastIndex=aM;
aU.findLastKey=bN;
aU.has=cY;
aU.identity=bk;
aU.indexOf=c5;
aU.isArguments=a5;
aU.isArray=bD;
aU.isBoolean=bH;
aU.isDate=a8;
aU.isElement=b2;
aU.isEmpty=cq;
aU.isEqual=b3;
aU.isFinite=aK;
aU.isFunction=ay;
aU.isNaN=bQ;
aU.isNull=c4;
aU.isNumber=br;
aU.isObject=de;
aU.isPlainObject=aO;
aU.isRegExp=cS;
aU.isString=cz;
aU.isUndefined=bX;
aU.lastIndexOf=df;
aU.mixin=aC;
aU.noConflict=cZ;
aU.noop=ag;
aU.now=cg;
aU.parseInt=dc;
aU.random=cd;
aU.reduce=co;
aU.reduceRight=cU;
aU.result=aR;
aU.runInContext=Y;
aU.size=a7;
aU.some=a6;
aU.sortedIndex=ba;
aU.template=bF;
aU.unescape=am;
aU.uniqueId=ci;
aU.all=az;
aU.any=a6;
aU.detect=bG;
aU.findWhere=bG;
aU.foldl=co;
aU.foldr=cU;
aU.include=a4;
aU.inject=co;
aC(function(){var at={};
bO(aU,function(dh,dg){if(!aU.prototype[dg]){at[dg]=dh
}});
return at
}(),false);
aU.first=bg;
aU.last=bu;
aU.sample=cT;
aU.take=bg;
aU.head=bg;
bO(aU,function(dh,dg){var at=dg!=="sample";
if(!aU.prototype[dg]){aU.prototype[dg]=function(dl,dk){var dj=this.__chain__,di=dh(this.__wrapped__,dl,dk);
return !dj&&(dl==null||(dk&&!(at&&typeof dl=="function")))?di:new cQ(di,dj)
}
}});
aU.VERSION="2.4.1";
aU.prototype.chain=bA;
aU.prototype.toString=bn;
aU.prototype.value=aV;
aU.prototype.valueOf=aV;
bB(["join","pop","shift"],function(at){var dg=b8[at];
aU.prototype[at]=function(){var di=this.__chain__,dh=dg.apply(this.__wrapped__,arguments);
return di?new cQ(dh,di):dh
}
});
bB(["push","reverse","sort","unshift"],function(at){var dg=b8[at];
aU.prototype[at]=function(){dg.apply(this.__wrapped__,arguments);
return this
}
});
bB(["concat","slice","splice"],function(at){var dg=b8[at];
aU.prototype[at]=function(){return new cQ(dg.apply(this.__wrapped__,arguments),this.__chain__)
}
});
return aU
}var ab=Y();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){C._=ab;
define(function(){return ab
})
}else{if(V&&z){if(P){(z.exports=ab)._=ab
}else{V._=ab
}}else{C._=ab
}}}.call(this));
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)
},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()
};
m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=m.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return m.each(this,a,b)
},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===m.type(a)
},isArray:Array.isArray||function(a){return"array"===m.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){return !m.isArray(a)&&a-parseFloat(a)+1>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(k.ownLast){for(b in a){return j.call(a,b)
}}for(b in a){}return void 0===b||j.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(n,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(g){return g.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))
},e.guid=a.guid=a.guid||m.guid++,e):void 0
},now:function(){return +new Date
},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function r(a){var b="length" in a&&a.length,c=m.type(a);
return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},ea=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k){return d
}if(!e&&p){if(11!==k&&(f=_.exec(a))){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName){return H.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+ra(o[l])
}w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")
}if(x){try{return H.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function ha(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ia(a){return a[u]=!0,a
}function ja(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function ka(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function ma(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function na(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(ca,da);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),ja(function(a){var b=g.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
if(!e||!f){return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return la(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},g):n
},ga.matches=function(a,b){return ga(a,null,null,b)
},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return ga(b,n,null,[a]).length>0
},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ia(function(a){return function(b){return ga(a,b).length>0
}
}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:oa(function(){return[0]
}),last:oa(function(a,b){return[b-1]
}),eq:oa(function(a,b,c){return[0>c?c+b:c]
}),even:oa(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:oa(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=ma(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=na(b)
}function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?ga.error(a):z(a,i).slice(0)
};
function ra(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function ta(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ua(a,b,c){for(var d=0,e=b.length;
e>d;
d++){ga(a,b[d],c)
}return c
}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b
},h,!0),l=sa(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[sa(ta(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))
}m.push(c)
}}return ta(m)
}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=F.call(i))
}}s=va(s)
}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?ia(f):f
}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=xa(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,ya(e,d)),f.selector=a
}return f
},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),ja(function(a){return null==a.getAttribute("disabled")
})||ka(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),ga
}(a);
m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;
var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
function w(a,b,c){if(m.isFunction(b)){return m.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return m.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(v.test(b)){return m.filter(b,a,c)
}b=m.filter(b,a)
}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c
})
}m.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType
}))
},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(m(a).filter(function(){for(b=0;
e>b;
b++){if(m.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){m.find(a,d[b],c)
}return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(w(this,a||[],!1))
},not:function(a){return this.pushStack(w(this,a||[],!0))
},is:function(a){return !!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length
}});
var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||x).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b)){for(c in b){m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return x.find(a)
}this.length=1,this[0]=d
}return this.context=y,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))
};
A.prototype=m.fn,x=m(y);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
m.extend({dir:function(a,b,c){var d=[],e=a[b];
while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]
}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(m.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?m.unique(f):f)
},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}m.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return m.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return m.dir(a,"nextSibling")
},prevAll:function(a){return m.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)
},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return m.sibling(a.firstChild)
},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)
}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return m.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;
h&&e>f;
f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;
break
}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())
},k={add:function(){if(h){var d=h.length;
!function f(b){m.each(b,function(b,c){var d=m.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)
})
}(arguments),b?e=h.length:c&&(g=d,j(c))
}return this
},remove:function(){return h&&m.each(arguments,function(a,c){var d;
while((d=m.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)
}}),this
},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],e=0,this
},disable:function(){return h=i=c=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,c||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,c){return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?m.extend(a,d):d
}},e={};
return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
m.fn.ready=function(a){return m.ready.promise().done(a),this
},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)
},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body){return setTimeout(m.ready)
}m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))
}}});
function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))
}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())
}m.ready.promise=function(b){if(!H){if(H=m.Deferred(),"complete"===y.readyState){setTimeout(m.ready)
}else{if(y.addEventListener){y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1)
}else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);
var c=!1;
try{c=null==a.frameElement&&y.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(e,50)
}I(),m.ready()
}}()
}}}return H.promise(b)
};
var K="undefined",L;
for(L in m(k)){break
}k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))
}),function(){var a=y.createElement("div");
if(null==k.deleteExpando){k.deleteExpando=!0;
try{delete a.test
}catch(b){k.deleteExpando=!1
}}a=null
}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
};
var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;
function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c
}catch(e){}m.data(a,b,c)
}else{c=void 0
}}return c
}function P(a){var b;
for(b in a){if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f
}}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!P(d):!m.isEmptyObject(d)){return
}}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)
},data:function(a,b,c){return Q(a,b,c)
},removeData:function(a,b){return R(a,b)
},_data:function(a,b,c){return Q(a,b,c,!0)
},_removeData:function(a,b){return R(a,b,!0)
}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])))
}m._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){m.data(this,a)
}):arguments.length>1?this.each(function(){m.data(this,a,b)
}):f?O(f,a,m.data(f,a)):void 0
},removeData:function(a){return this.each(function(){m.removeData(this,a)
})
}}),m.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)
})})
}}),m.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);
m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){m.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)
},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===m.type(c)){e=!0;
for(h in c){m.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},W=/^(?:checkbox|radio)$/i;
!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();
if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;
try{delete b.test
}catch(d){k.deleteExpando=!1
}}}(),function(){var b,c,d=y.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1)
}d=null
}();
var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;
function aa(){return !0
}function ba(){return !1
}function ca(){try{return y.activeElement
}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(E)||[""],h=b.length;
while(h--){f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);
if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;
while(f--){g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){m.event.remove(a,o+b[j],c,d,!0)
}}}m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];
if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);
h;
h=h.parentNode){o.push(h),l=h
}l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)
}n=0;
while((h=o[n++])&&!b.isPropagationStopped()){b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())
}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;
try{d[p]()
}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)
}return b.result
}},dispatch:function(a){a=m.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;
while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;
h>f;
f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d)
}e.length&&g.push({elem:i,handlers:e})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[m.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return m.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))
},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void (this[m.expando]=!0)):new m.Event(a,b)
},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;
c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),m._data(c,"submitBubbles",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")
}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)
})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;
X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)
}),m._data(b,"changeBubbles",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)
}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)
};
m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);
e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;
e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))
}}
}),m.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(f in a){this.on(f,b,c,a[f],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=ba
}else{if(!d){return this
}}return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?m.event.trigger(a,b,c,!0):void 0
}});
function da(a){var b=ea.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));
ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;
function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b))
}}return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f
}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)
}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a
}function ya(a){var b=pa.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function za(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))
}}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){m.event.add(b,c,h[c][d])
}}}g.data&&(g.data=m.extend({},g.data))
}}function Ba(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);
for(d in e.events){m.removeEvent(b,d,e.handle)
}b.removeAttribute(m.expando)
}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);
if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a))){for(d=ua(f),h=ua(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Ba(e,d[g])
}}if(b){if(c){for(h=h||ua(a),d=d||ua(f),g=0;
null!=(e=h[g]);
g++){Aa(e,d[g])
}}else{Aa(a,f)
}}return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;
n>q;
q++){if(f=a[q],f||0===f){if("object"===m.type(f)){m.merge(p,f.nodeType?[f]:f)
}else{if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];
while(e--){h=h.lastChild
}if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;
while(e--){m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)
}}m.merge(p,h.childNodes),h.textContent="";
while(h.firstChild){h.removeChild(h.firstChild)
}h=o.lastChild
}else{p.push(b.createTextNode(f))
}}}}h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;
while(f=p[q++]){if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;
while(f=h[e++]){oa.test(f.type||"")&&c.push(f)
}}}return h=null,o
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;
null!=(d=a[h]);
h++){if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))
}}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&m.cleanData(ua(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&m.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)
})
},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0
}if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p)){return this.each(function(c){var d=n.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;
l>j;
j++){d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j)
}if(f){for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;
f>j;
j++){d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")))
}}i=c=null
}return this
}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get())
}return this.pushStack(e)
}
});
var Ca,Da={};
function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");
return e.detach(),f
}function Fa(a){var b=y,c=Da[a];
return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c
}!function(){var a;
k.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,d;
return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0
}
}();
var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)
},Ja=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle
},Ja=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function La(a,b){return{get:function(){var c=a();
if(null!=c){return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}
}!function(){var b,c,d,e,f,g,h;
if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g
},boxSizingReliable:function(){return null==f&&i(),f
},pixelPosition:function(){return null==e&&i(),e
},reliableMarginRight:function(){return null==h&&i(),h
}});
function i(){var b,c,d,i;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))
}}}(),m.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];
function Ua(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;
while(e--){if(b=Ta[e]+c,b in a){return b
}}return d
}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function Wa(a,b,c){var d=Pa.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)))
}return g
}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"
}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;
if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);
return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f
}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)
}):Ya(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ia(a);
return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)
}}
}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)
}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0
}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+T[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)
}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;
if(m.isArray(b)){for(d=Ia(a),e=b.length;
e>g;
g++){f[b[g]]=m.css(a,b[g],!1,d)
}return f
}return void 0!==c?m.style(a,b,c):m.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Va(this,!0)
},hide:function(){return Va(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()
})
}});
function Za(a,b,c,d,e){return new Za.prototype.init(a,b,c,d,e)
}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Za.propHooks[this.prop];
return a&&a.get?a.get(this):Za.propHooks._default.get(this)
},run:function(a){var b,c=Za.propHooks[this.prop];
return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this
}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},m.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},m.fx=Za.prototype.init,m.fx.step={};
var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,m.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function fb(){return setTimeout(function(){$a=void 0
}),$a=m.now()
}function gb(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=T[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");
c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||m.style(a,d)
}else{j=void 0
}}if(m.isEmptyObject(o)){"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()
}),n.done(function(){var b;
m._removeData(a,"fxshow");
for(b in o){m.style(a,b,o[b])
}});
for(d in o){g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function jb(a,b){var c,d,e,f,g;
for(c in a){if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(jb(k,j.opts.specialEasing);
g>f;
f++){if(d=db[f].call(j,a,k,j.opts)){return d
}}return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)
}},prefilter:function(a,b){b?db.unshift(a):db.push(a)
}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};
return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)
},d
},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);
(e||m._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&cb.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&m.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;
for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];
m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)
}
}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;
for($a=m.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||m.fx.stop(),$a=void 0
},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()
},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))
},m.fx.stop=function(){clearInterval(_a),_a=null
},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a,b,c,d,e;
b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value
}();
var lb=/\r/g;
m.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=m.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""
})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)
}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");
return null!=b?b:m.trim(m.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;
while(g--){if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0
}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;
m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)
})
}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c
}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;
ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;
return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e
}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null
}
}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void (a.defaultValue=b):mb&&mb.set(a,b,c)
}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},ob.id=ob.name=ob.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)
}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;
m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");
return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1
}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this
}),k.enctype||(m.propFix.enctype="encoding");
var ub=/[\t\r\n\f]/g;
m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).addClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=m.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?m.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0){return !0
}}return !1
}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
m.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=m.trim(b+"");
return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():m.error("Invalid JSON: "+b)
},m.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c
};
var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");
try{zb=location.href
}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href
}yb=Gb.exec(zb.toLowerCase())||[];
function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(m.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Mb(a,b,c,d){var e={},f=a===Ib;
function g(h){var i;
return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&m.extend(!0,a,c),a
}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)
},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!j){j={};
while(b=Cb.exec(f)){j[b[1].toLowerCase()]=b[2]
}}b=j[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?f:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return i&&i.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t){return v
}h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);
for(d in k.headers){v.setRequestHeader(d,k.headers[d])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(d in {success:1,error:1,complete:1}){v[d](k[d])
}if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,i.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,c,d){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return m.get(a,b,c,"json")
},getScript:function(a,b){return m.get(a,void 0,b,"script")
}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},m.fn.extend({wrapAll:function(a){if(m.isFunction(a)){return this.each(function(b){m(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))
}:function(){var b=m(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=m.isFunction(a);
return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)
}).end()
}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))
},m.expr.filters.visible=function(a){return !m.expr.filters.hidden(a)
};
var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;
function Vb(a,b,c,d){var e;
if(m.isArray(b)){m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==m.type(b)){d(a,b)
}else{for(e in b){Vb(a+"["+e+"]",b[e],c,d)
}}}}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a)){m.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Vb(c,a[c],b,e)
}}return d.join("&").replace(Qb,"+")
},m.fn.extend({serialize:function(){return m.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");
return a?m.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))
}).map(function(a,b){var c=m(this).val();
return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}
}):{name:b.name,value:c.replace(Sb,"\r\n")}
}).get()
}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()
}:Zb;
var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb){Xb[a](void 0,!0)
}}),k.cors=!!Yb&&"withCredentials" in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++Wb;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")
}f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState)){if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e){4!==f.readyState&&f.abort()
}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);
try{i=f.statusText
}catch(k){i=""
}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404
}}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()
},abort:function(){b&&b(void 0,!0)
}}
}});
function Zb(){try{return new a.XMLHttpRequest
}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a
}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;
return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var _b=[],ac=/(=)\?(?=&|$)|\?\?/;
m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;
return this[a]=!0,a
}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||y;
var d=u.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))
};
var bc=m.fn.load;
m.fn.load=function(a,b,c){if("string"!=typeof a&&bc){return bc.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])
}),this
},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)
}
}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem
}).length
};
var cc=a.document.documentElement;
function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using" in b?b.using.call(a,n):l.css(n)
}},m.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;
while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position")){a=a.offsetParent
}return a||cc
})
}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0
})
}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return V(this,function(b,c,d){var e;
return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),m.fn.size=function(){return this.length
},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m
});
var ec=a.jQuery,fc=a.$;
return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m
},typeof b===K&&(a.jQuery=a.$=m),m
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1||c[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){if(d(a.target).is(this)){return a.handleObj.handler.apply(this,arguments)
}}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new j(this)),"string"==typeof a&&b[a].call(d)
})
}var k='[data-dismiss="alert"]',j=function(a){g(a).on("click",k,this.close)
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=150,j.prototype.close=function(a){function n(){d.detach().trigger("closed.bs.alert").remove()
}var m=g(this),l=m.attr("data-target");
l||(l=m.attr("href"),l=l&&l.replace(/.*(?=#[^\s]*$)/,""));
var d=g("#"===l?[]:l);
a&&a.preventDefault(),d.length||(d=m.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",n).emulateTransitionEnd(j.TRANSITION_DURATION):n())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=j,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",k,j.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.button"),b="object"==typeof a&&a;
c||j.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.7",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var m="disabled",l=this.$element,k=l.is("input")?"val":"html",j=l.data();
a+="Text",null==j.resetText&&l.data("resetText",l[k]()),setTimeout(f.proxy(function(){l[k](null==j[a]?this.options[a]:j[a]),"loadingText"==a?(this.isLoading=!0,l.addClass(m).attr(m,m).prop(m,!0)):this.isLoading&&(this.isLoading=!1,l.removeClass(m).removeAttr(m).prop(m,!1))
},this),0)
},h.prototype.toggle=function(){var j=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var k=this.$element.find("input");
"radio"==k.prop("type")?(k.prop("checked")&&(j=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==k.prop("type")&&(k.prop("checked")!==this.$element.hasClass("active")&&(j=!1),this.$element.toggleClass("active")),k.prop("checked",this.$element.hasClass("active")),j&&k.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target).closest(".btn");
e.call(a,"toggle"),f(b.target).is('input[type="radio"], input[type="checkbox"]')||(b.preventDefault(),a.is("input,button")?a.trigger("focus"):a.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var m=g(this),l=m.data("bs.carousel"),c=g.extend({},k.DEFAULTS,m.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
l||m.data("bs.carousel",l=new k(this,c)),"number"==typeof a?l.to(a):b?l[b]():c.interval&&l.pause().cycle()
})
}var k=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
k.VERSION="3.3.7",k.TRANSITION_DURATION=600,k.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},k.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},k.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},k.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},k.prototype.getItemForDirection=function(m,l){var q=this.getItemIndex(l),p="prev"==m&&0===q||"next"==m&&q==this.$items.length-1;
if(p&&!this.options.wrap){return l
}var o="prev"==m?-1:1,n=(q+o)%this.$items.length;
return this.$items.eq(n)
},k.prototype.to=function(e){var d=this,l=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(e>this.$items.length-1||e<0)){return this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):l==e?this.pause().cycle():this.slide(e>l?"next":"prev",this.$items.eq(e))
}},k.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},k.prototype.next=function(){if(!this.sliding){return this.slide("next")
}},k.prototype.prev=function(){if(!this.sliding){return this.slide("prev")
}},k.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(k.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var j=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=k,g.fn.carousel.noConflict=function(){return g.fn.carousel=j,this
};
var h=function(o){var n,m=g(this),l=g(m.attr("data-target")||(n=m.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));
if(l.hasClass("carousel")){var b=g.extend({},l.data(),m.data()),a=m.attr("data-slide-to");
a&&(b.interval=!1),f.call(l,b),a&&l.data("bs.carousel").to(a),o.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var l,e=a.attr("data-target")||(l=a.attr("href"))&&l.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function k(a){return this.each(function(){var l=g(this),d=l.data("bs.collapse"),b=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||l.data("bs.collapse",d=new j(this,b)),"string"==typeof a&&d[a]()
})
}var j=function(a,d){this.$element=g(a),this.options=g.extend({},j.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=350,j.DEFAULTS={toggle:!0},j.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},j.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(n&&n.length&&(a=n.data("bs.collapse"),a&&a.transitioning))){var m=g.Event("show.bs.collapse");
if(this.$element.trigger(m),!m.isDefaultPrevented()){n&&n.length&&(k.call(n,"hide"),a||n.data("bs.collapse",null));
var l=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",l].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(j.TRANSITION_DURATION)[l](this.$element[0][c])
}}}},j.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var l=this.dimension();
this.$element[l](this.$element[l]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[l](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(j.TRANSITION_DURATION):d.call(this)
}}},j.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},j.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(l,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},j.prototype.addAriaAndCollapsedClass=function(e,d){var l=e.hasClass("in");
e.attr("aria-expanded",l),d.toggleClass("collapsed",!l).attr("aria-expanded",l)
};
var h=g.fn.collapse;
g.fn.collapse=k,g.fn.collapse.Constructor=j,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(m){var l=g(this);
l.attr("data-target")||m.preventDefault();
var c=f(l),b=c.data("bs.collapse"),a=b?"toggle":l.data();
k.call(c,a)
})
}(jQuery),+function(k){function j(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&k(f);
return e&&e.length?e:a.parent()
}function q(a){a&&3===a.which||(k(o).remove(),k(n).each(function(){var g=k(this),c=j(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&k.contains(c[0],a.target)||(c.trigger(a=k.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger(k.Event("hidden.bs.dropdown",b)))))
}))
}function p(a){return this.each(function(){var e=k(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new m(this)),"string"==typeof a&&b[a].call(e)
})
}var o=".dropdown-backdrop",n='[data-toggle="dropdown"]',m=function(a){k(a).on("click.bs.dropdown",this.toggle)
};
m.VERSION="3.3.7",m.prototype.toggle=function(s){var r=k(this);
if(!r.is(".disabled, :disabled")){var c=j(r),b=c.hasClass("open");
if(q(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&k(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(k(this)).on("click",q);
var a={relatedTarget:this};
if(c.trigger(s=k.Event("show.bs.dropdown",a)),s.isDefaultPrevented()){return
}r.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(k.Event("shown.bs.dropdown",a))
}return !1
}},m.prototype.keydown=function(u){if(/(38|40|27|32)/.test(u.which)&&!/input|textarea/i.test(u.target.tagName)){var t=k(this);
if(u.preventDefault(),u.stopPropagation(),!t.is(".disabled, :disabled")){var s=j(t),r=s.hasClass("open");
if(!r&&27!=u.which||r&&27==u.which){return 27==u.which&&s.find(n).trigger("focus"),t.trigger("click")
}var f=" li:not(.disabled):visible a",b=s.find(".dropdown-menu"+f);
if(b.length){var a=b.index(u.target);
38==u.which&&a>0&&a--,40==u.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var l=k.fn.dropdown;
k.fn.dropdown=p,k.fn.dropdown.Constructor=m,k.fn.dropdown.noConflict=function(){return k.fn.dropdown=l,this
},k(document).on("click.bs.dropdown.data-api",q).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",n,m.prototype.toggle).on("keydown.bs.dropdown.data-api",n,m.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",m.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var j=f(this),d=j.data("bs.modal"),b=f.extend({},h.DEFAULTS,j.data(),"object"==typeof a&&a);
d||j.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var j=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){j.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(j.$element)&&(j.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&j.$element.hasClass("fade");
j.$element.parent().length||j.$element.appendTo(j.$body),j.$element.show().scrollTop(0),j.adjustDialog(),d&&j.$element[0].offsetWidth,j.$element.addClass("in"),j.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?j.$dialog.one("bsTransitionEnd",function(){j.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):j.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){document===b.target||this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var l=this,k=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var j=f.support.transition&&k;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+k).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),j&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}j?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){l.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(l){var k=f(this),j=k.attr("href"),b=f(k.attr("data-target")||j&&j.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(j)&&j},b.data(),k.data());
k.is("a")&&l.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){k.is(":visible")&&k.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.tooltip"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||j.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
if(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),!d.isInStateTrue()){return clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
}},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(j,d,k){this.arrow().css(k?"left":"top",50*(1-j/d)+"%").css(k?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function l(){"in"!=k.hoverState&&j.detach(),k.$element&&k.$element.removeAttr("aria-describedby").trigger("hidden.bs."+k.type),a&&a()
}var k=this,j=f(this.$tip),c=f.Event("hide.bs."+this.type);
if(this.$element.trigger(c),!c.isDefaultPrevented()){return j.removeClass("in"),f.support.transition&&j.hasClass("fade")?j.one("bsTransitionEnd",l).emulateTransitionEnd(h.TRANSITION_DURATION):l(),this.hoverState=null,this
}},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var p=a[0],o="BODY"==p.tagName,n=p.getBoundingClientRect();
null==n.width&&(n=f.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));
var m=window.SVGElement&&p instanceof window.SVGElement,l=o?{top:0,left:0}:m?null:a.offset(),k={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},j=o?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},n,k,j,l)
},h.prototype.getCalculatedOffset=function(k,j,m,l){return"bottom"==k?{top:j.top+j.height,left:j.left+j.width/2-m/2}:"top"==k?{top:j.top-l,left:j.left+j.width/2-m/2}:"left"==k?{top:j.top+j.height/2-l/2,left:j.left-m}:{top:j.top+j.height/2-l/2,left:j.left+j.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var j,d=this.$element,k=this.options;
return j=d.attr("data-original-title")||("function"==typeof k.title?k.title.call(d[0]):k.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null,b.$element=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.popover"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||j.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.7",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var j=this.tip(),d=this.getTitle(),k=this.getContent();
j.find(".popover-title")[this.options.html?"html":"text"](d),j.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof k?"html":"append":"text"](k),j.removeClass("fade top bottom left right in"),j.find(".popover-title").html()||j.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var j=f(this),c=j.data("bs.scrollspy"),b="object"==typeof a&&a;
c||j.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,k="offset",j=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(k="position",j=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),l=c.data("target")||c.attr("href"),d=/^#./.test(l)&&f(l);
return d&&d.length&&d.is(":visible")&&[[d[k]().top+j,l]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var k,j=this.$scrollElement.scrollTop()+this.options.offset,p=this.getScrollHeight(),o=this.options.offset+p-this.$scrollElement.height(),n=this.offsets,m=this.targets,l=this.activeTarget;
if(this.scrollHeight!=p&&this.refresh(),j>=o){return l!=(k=m[m.length-1])&&this.activate(k)
}if(l&&j<n[0]){return this.activeTarget=null,this.clear()
}for(k=n.length;
k--;
){l!=m[k]&&j>=n[k]&&(void 0===n[k+1]||j<n[k+1])&&this.activate(m[k])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var k=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',j=f(k).parents("li").addClass("active");
j.parent(".dropdown-menu").length&&(j=j.closest("li.dropdown").addClass("active")),j.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new k(this)),"string"==typeof a&&b[a]()
})
}var k=function(a){this.element=g(a)
};
k.VERSION="3.3.7",k.TRANSITION_DURATION=150,k.prototype.show=function(){var a=this.element,q=a.closest("ul:not(.dropdown-menu)"),p=a.data("target");
if(p||(p=a.attr("href"),p=p&&p.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var o=q.find(".active:last a"),n=g.Event("hide.bs.tab",{relatedTarget:a[0]}),m=g.Event("show.bs.tab",{relatedTarget:o[0]});
if(o.trigger(n),a.trigger(m),!m.isDefaultPrevented()&&!n.isDefaultPrevented()){var l=g(p);
this.activate(a.closest("li"),q),this.activate(l,l.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:o[0]})
})
}}},k.prototype.activate=function(a,o,n){function m(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()
}var l=o.find("> .active"),c=n&&g.support.transition&&(l.length&&l.hasClass("fade")||!!o.find("> .fade").length);
l.length&&c?l.one("bsTransitionEnd",m).emulateTransitionEnd(k.TRANSITION_DURATION):m(),l.removeClass("in")
};
var j=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=k,g.fn.tab.noConflict=function(){return g.fn.tab=j,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),c=j.data("bs.affix"),b="object"==typeof a&&a;
c||j.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.7",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return p<r&&"top"
}if("bottom"==this.affixed){return null!=r?!(p+this.unpin<=o.top)&&"bottom":!(p+n<=t-q)&&"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&p<=r?"top":null!=q&&l+k>=t-q&&"bottom"
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
(function(V,F){function N(b){var a=Array.prototype.slice.call(arguments,1);
return b.prop?b.prop.apply(b,a):b.attr.apply(b,a)
}function G(f,c,g){var d,b;
for(d in g){g.hasOwnProperty(d)&&(b=d.replace(/ |$/g,c.eventNamespace),f.bind(b,g[d]))
}}function Z(b,a,c){G(b,c,{focus:function(){a.addClass(c.focusClass)
},blur:function(){a.removeClass(c.focusClass),a.removeClass(c.activeClass)
},mouseenter:function(){a.addClass(c.hoverClass)
},mouseleave:function(){a.removeClass(c.hoverClass),a.removeClass(c.activeClass)
},"mousedown touchbegin":function(){b.is(":disabled")||a.addClass(c.activeClass)
},"mouseup touchend":function(){a.removeClass(c.activeClass)
}})
}function R(b,a){b.removeClass(a.hoverClass+" "+a.focusClass+" "+a.activeClass)
}function J(b,a,c){c?b.addClass(a):b.removeClass(a)
}function P(f,c,g){var d="checked",b=c.is(":"+d);
c.prop?c.prop(d,b):b?c.attr(d,d):c.removeAttr(d),J(f,g.checkedClass,b)
}function E(b,a,c){J(b,c.disabledClass,a.is(":disabled"))
}function M(b,a,c){switch(c){case"after":return b.after(a),b.next();
case"before":return b.before(a),b.prev();
case"wrap":return b.wrap(a),b.parent()
}return null
}function X(e,f,c){var d,g,b;
return c||(c={}),c=V.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},c),d=V("<div />"),g=V("<span />"),f.autoHide&&e.is(":hidden")&&"none"===e.css("display")&&d.hide(),c.divClass&&d.addClass(c.divClass),f.wrapperClass&&d.addClass(f.wrapperClass),c.spanClass&&g.addClass(c.spanClass),b=N(e,"id"),f.useID&&b&&N(d,"id",f.idPrefix+"-"+b),c.spanHtml&&g.html(c.spanHtml),d=M(e,d,c.divWrap),g=M(e,g,c.spanWrap),E(d,e,f),{div:d,span:g}
}function W(a,c){var b;
return c.wrapperClass?(b=V("<span />").addClass(c.wrapperClass),b=M(a,b,"wrap")):null
}function U(){var c,e,d,b;
return b="rgb(120,2,153)",e=V('<div style="width:0;height:0;color:'+b+'">'),V("body").append(e),d=e.get(0),c=window.getComputedStyle?window.getComputedStyle(d,"").color:(d.currentStyle||d.style||{}).color,e.remove(),c.replace(/ /g,"")!==b
}function L(a){return a?V("<span />").text(a).html():""
}function O(){return navigator.cpuClass&&!navigator.product
}function D(){return window.XMLHttpRequest!==void 0?!0:!1
}function S(b){var a;
return b[0].multiple?!0:(a=N(b,"size"),!a||1>=a?!1:!0)
}function I(){return !1
}function B(b,a){var c="none";
G(b,a,{"selectstart dragstart mousedown":I}),b.css({MozUserSelect:c,msUserSelect:c,webkitUserSelect:c,userSelect:c})
}function Y(c,a,d){var b=c.val();
""===b?b=d.fileDefaultHtml:(b=b.split(/[\/\\]+/),b=b[b.length-1]),a.text(b)
}function j(f,c,g){var d,b;
for(d=[],f.each(function(){var a;
for(a in c){Object.prototype.hasOwnProperty.call(c,a)&&(d.push({el:this,name:a,old:this.style[a]}),this.style[a]=c[a])
}}),g();
d.length;
){b=d.pop(),b.el.style[b.name]=b.old
}}function T(b,a){var c;
c=b.parents(),c.push(b[0]),c=c.not(":visible"),j(c,{visibility:"hidden",display:"block",position:"absolute"},a)
}function Q(b,a){return function(){b.unwrap().unwrap().unbind(a.eventNamespace)
}
}var z=!0,q=!1,K=[{match:function(a){return a.is("a, button, :submit, :reset, input[type='button']")
},apply:function(h,b){var c,a,m,k,g;
return a=b.submitDefaultHtml,h.is(":reset")&&(a=b.resetDefaultHtml),k=h.is("a, button")?function(){return h.html()||a
}:function(){return L(N(h,"value"))||a
},m=X(h,b,{divClass:b.buttonClass,spanHtml:k()}),c=m.div,Z(h,c,b),g=!1,G(c,b,{"click touchend":function(){var f,l,d,e;
g||h.is(":disabled")||(g=!0,h[0].dispatchEvent?(f=document.createEvent("MouseEvents"),f.initEvent("click",!0,!0),l=h[0].dispatchEvent(f),h.is("a")&&l&&(d=N(h,"target"),e=N(h,"href"),d&&"_self"!==d?window.open(e,d):document.location.href=e)):h.click(),g=!1)
}}),B(c,b),{remove:function(){return c.after(h),c.remove(),h.unbind(b.eventNamespace),h
},update:function(){R(c,b),E(c,h,b),h.detach(),m.span.html(k()).append(h)
}}
}},{match:function(a){return a.is(":checkbox")
},apply:function(c,a){var f,b,d;
return f=X(c,a,{divClass:a.checkboxClass}),b=f.div,d=f.span,Z(c,b,a),G(c,a,{"click touchend":function(){P(d,c,a)
}}),P(d,c,a),{remove:Q(c,a),update:function(){R(b,a),d.removeClass(a.checkedClass),P(d,c,a),E(b,c,a)
}}
}},{match:function(a){return a.is(":file")
},apply:function(c,e){function a(){Y(c,h,e)
}var k,g,h,b;
return k=X(c,e,{divClass:e.fileClass,spanClass:e.fileButtonClass,spanHtml:e.fileButtonHtml,spanWrap:"after"}),g=k.div,b=k.span,h=V("<span />").html(e.fileDefaultHtml),h.addClass(e.filenameClass),h=M(c,h,"after"),N(c,"size")||N(c,"size",g.width()/10),Z(c,g,e),a(),O()?G(c,e,{click:function(){c.trigger("change"),setTimeout(a,0)
}}):G(c,e,{change:a}),B(h,e),B(b,e),{remove:function(){return h.remove(),b.remove(),c.unwrap().unbind(e.eventNamespace)
},update:function(){R(g,e),Y(c,h,e),E(g,c,e)
}}
}},{match:function(c){if(c.is("input")){var a=(" "+N(c,"type")+" ").toLowerCase(),b=" color date datetime datetime-local email month number password search tel text time url week ";
return b.indexOf(a)>=0
}return !1
},apply:function(d,b){var c,a;
return c=N(d,"type"),d.addClass(b.inputClass),a=W(d,b),Z(d,d,b),b.inputAddTypeAsClass&&d.addClass(c),{remove:function(){d.removeClass(b.inputClass),b.inputAddTypeAsClass&&d.removeClass(c),a&&d.unwrap()
},update:I}
}},{match:function(a){return a.is(":radio")
},apply:function(a,b){var g,e,c;
return g=X(a,b,{divClass:b.radioClass}),e=g.div,c=g.span,Z(a,e,b),G(a,b,{"click touchend":function(){V.uniform.update(V(':radio[name="'+N(a,"name")+'"]'))
}}),P(c,a,b),{remove:Q(a,b),update:function(){R(e,b),P(c,a,b),E(e,a,b)
}}
}},{match:function(a){return a.is("select")&&!S(a)?!0:!1
},apply:function(b,g){var c,a,f,e;
return g.selectAutoWidth&&T(b,function(){e=b.width()
}),c=X(b,g,{divClass:g.selectClass,spanHtml:(b.find(":selected:first")||b.find("option:first")).html(),spanWrap:"before"}),a=c.div,f=c.span,g.selectAutoWidth?T(b,function(){j(V([f[0],a[0]]),{display:"block"},function(){var d;
d=f.outerWidth()-f.width(),a.width(e+d),f.width(e)
})
}):a.addClass("fixedWidth"),Z(b,a,g),G(b,g,{change:function(){f.html(b.find(":selected").html()),a.removeClass(g.activeClass)
},"click touchend":function(){var d=b.find(":selected").html();
f.html()!==d&&b.trigger("change")
},keyup:function(){f.html(b.find(":selected").html())
}}),B(f,g),{remove:function(){return f.remove(),b.unwrap().unbind(g.eventNamespace),b
},update:function(){g.selectAutoWidth?(V.uniform.restore(b),b.uniform(g)):(R(a,g),f.html(b.find(":selected").html()),E(a,b,g))
}}
}},{match:function(a){return a.is("select")&&S(a)?!0:!1
},apply:function(b,a){var c;
return b.addClass(a.selectMultiClass),c=W(b,a),Z(b,b,a),{remove:function(){b.removeClass(a.selectMultiClass),c&&b.unwrap()
},update:I}
}},{match:function(a){return a.is("textarea")
},apply:function(b,a){var c;
return b.addClass(a.textareaClass),c=W(b,a),Z(b,b,a),{remove:function(){b.removeClass(a.textareaClass),c&&b.unwrap()
},update:I}
}}];
O()&&!D()&&(z=!1),V.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},V.fn.uniform=function(a){var b=this;
return a=V.extend({},V.uniform.defaults,a),q||(q=!0,U()&&(z=!1)),z?(a.resetSelector&&V(a.resetSelector).mouseup(function(){window.setTimeout(function(){V.uniform.update(b)
},10)
}),this.each(function(){var f,e,c,d=V(this);
if(d.data("uniformed")){return V.uniform.update(d),void 0
}for(f=0;
K.length>f;
f+=1){if(e=K[f],e.match(d,a)){return c=e.apply(d,a),d.data("uniformed",c),V.uniform.elements.push(d.get(0)),void 0
}}})):this
},V.uniform.restore=V.fn.uniform.restore=function(a){a===F&&(a=V.uniform.elements),V(a).each(function(){var b,d,c=V(this);
d=c.data("uniformed"),d&&(d.remove(),b=V.inArray(this,V.uniform.elements),b>=0&&V.uniform.elements.splice(b,1),c.removeData("uniformed"))
})
},V.uniform.update=V.fn.uniform.update=function(a){a===F&&(a=V.uniform.elements),V(a).each(function(){var b,c=V(this);
b=c.data("uniformed"),b&&b.update(c,b.options)
})
}
})(jQuery);
(function(g,j,s,h){var a="autoHidingNavbar",q=g(j),x=g(s),t=null,k=null,c=70,n=0,d=null,v=q.height(),r=true,p,l={disableAutohide:false,showOnUpscroll:true,showOnBottom:true,hideOffset:"auto",animationDuration:200,navbarOffset:0};
function o(z,y){this.element=g(z);
this.settings=g.extend({},l,y);
this._defaults=l;
this._name=a;
this.init()
}function m(y){if(!r){return
}y.element.addClass("navbar-hidden").animate({top:-1*parseInt(y.element.css("height"),10)+y.settings.navbarOffset},{queue:false,duration:y.settings.animationDuration});
g(".dropdown.open .dropdown-toggle",y.element).dropdown("toggle");
r=false;
y.element.trigger("hide.autoHidingNavbar")
}function w(y){if(r){return
}y.element.removeClass("navbar-hidden").animate({top:0},{queue:false,duration:y.settings.animationDuration});
r=true;
y.element.trigger("show.autoHidingNavbar")
}function u(y){var A=q.scrollTop(),z=A-d;
d=A;
if(z<0){if(r){return
}if(y.settings.showOnUpscroll||A<=p){w(y)
}}else{if(z>0){if(!r){if(y.settings.showOnBottom&&A+v===x.height()){w(y)
}return
}if(A>=p){m(y)
}}}}function f(y){if(y.settings.disableAutohide){return
}n=new Date().getTime();
u(y)
}function b(y){x.on("scroll."+a,function(){if(new Date().getTime()-n>c){f(y)
}else{clearTimeout(t);
t=setTimeout(function(){f(y)
},c)
}});
q.on("resize."+a,function(){clearTimeout(k);
k=setTimeout(function(){v=q.height()
},c)
})
}function e(){x.off("."+a);
q.off("."+a)
}o.prototype={init:function(){this.elements={navbar:this.element};
this.setDisableAutohide(this.settings.disableAutohide);
this.setShowOnUpscroll(this.settings.showOnUpscroll);
this.setShowOnBottom(this.settings.showOnBottom);
this.setHideOffset(this.settings.hideOffset);
this.setAnimationDuration(this.settings.animationDuration);
p=this.settings.hideOffset==="auto"?parseInt(this.element.css("height"),10):this.settings.hideOffset;
b(this);
return this.element
},setDisableAutohide:function(y){this.settings.disableAutohide=y;
return this.element
},setShowOnUpscroll:function(y){this.settings.showOnUpscroll=y;
return this.element
},setShowOnBottom:function(y){this.settings.showOnBottom=y;
return this.element
},setHideOffset:function(y){this.settings.hideOffset=y;
return this.element
},setAnimationDuration:function(y){this.settings.animationDuration=y;
return this.element
},show:function(){w(this);
return this.element
},hide:function(){m(this);
return this.element
},destroy:function(){e(this);
w(this);
g.data(this,"plugin_"+a,null);
return this.element
}};
g.fn[a]=function(z){var y=arguments;
if(z===h||typeof z==="object"){return this.each(function(){if(!g.data(this,"plugin_"+a)){g.data(this,"plugin_"+a,new o(this,z))
}})
}else{if(typeof z==="string"&&z[0]!=="_"&&z!=="init"){var A;
this.each(function(){var B=g.data(this,"plugin_"+a);
if(B instanceof o&&typeof B[z]==="function"){A=B[z].apply(B,Array.prototype.slice.call(y,1))
}});
return A!==h?A:this
}}}
})(jQuery,window,document);
!function(c){var b={},a={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};
c.fn.bxSlider=function(J){var W,Y;
if(0==this.length){return this
}if(this.length>1){return this.each(function(){c(this).bxSlider(J)
}),this
}W={},Y=this,b.el=this;
var T=c(window).width(),X=c(window).height(),B=function(){W.settings=c.extend({},a,J),W.settings.slideWidth=parseInt(W.settings.slideWidth),W.children=Y.children(W.settings.slideSelector),W.children.length<W.settings.minSlides&&(W.settings.minSlides=W.children.length),W.children.length<W.settings.maxSlides&&(W.settings.maxSlides=W.children.length),W.settings.randomStart&&(W.settings.startSlide=Math.floor(Math.random()*W.children.length)),W.active={index:W.settings.startSlide},W.carousel=W.settings.minSlides>1||W.settings.maxSlides>1,W.carousel&&(W.settings.preloadImages="all"),W.minThreshold=W.settings.minSlides*W.settings.slideWidth+(W.settings.minSlides-1)*W.settings.slideMargin,W.maxThreshold=W.settings.maxSlides*W.settings.slideWidth+(W.settings.maxSlides-1)*W.settings.slideMargin,W.working=!1,W.controls={},W.interval=null,W.animProp="vertical"==W.settings.mode?"top":"left",W.usingCSS=W.settings.useCSS&&"fade"!=W.settings.mode&&function(){var e=document.createElement("div"),d=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],f;
for(f in d){if(void 0!==e.style[d[f]]){return W.cssPrefix=d[f].replace("Perspective","").toLowerCase(),W.animProp="-"+W.cssPrefix+"-transform",!0
}}return !1
}(),"vertical"==W.settings.mode&&(W.settings.maxSlides=W.settings.minSlides),Y.data("origStyle",Y.attr("style")),Y.children(W.settings.slideSelector).each(function(){c(this).data("origStyle",c(this).attr("style"))
}),A()
},A=function(){Y.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),W.viewport=Y.parent(),W.loader=c('<div class="bx-loading" />'),W.viewport.prepend(W.loader),Y.css({width:"horizontal"==W.settings.mode?100*W.children.length+215+"%":"auto",position:"relative"}),W.usingCSS&&W.settings.easing?Y.css("-"+W.cssPrefix+"-transition-timing-function",W.settings.easing):W.settings.easing||(W.settings.easing="swing"),U(),W.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),W.viewport.parent().css({maxWidth:L()}),W.settings.pager||W.viewport.parent().css({margin:"0 auto 0px"}),W.children.css({float:"horizontal"==W.settings.mode?"left":"none",listStyle:"none",position:"relative"}),W.children.css("width",F()),"horizontal"==W.settings.mode&&W.settings.slideMargin>0&&W.children.css("marginRight",W.settings.slideMargin),"vertical"==W.settings.mode&&W.settings.slideMargin>0&&W.children.css("marginBottom",W.settings.slideMargin),"fade"==W.settings.mode&&(W.children.css({position:"absolute",zIndex:0,display:"none"}),W.children.eq(W.settings.startSlide).css({zIndex:50,display:"block"})),W.controls.el=c('<div class="bx-controls" />'),W.settings.captions&&x(),W.active.last=W.settings.startSlide==K()-1,W.settings.video&&Y.fitVids();
var d=W.children.eq(W.settings.startSlide);
"all"==W.settings.preloadImages&&(d=W.children),W.settings.ticker?W.settings.pager=!1:(W.settings.pager&&q(),W.settings.controls&&P(),W.settings.auto&&W.settings.autoControls&&aa(),(W.settings.controls||W.settings.autoControls||W.settings.pager)&&W.viewport.after(W.controls.el)),D(d,Q)
},D=function(f,e){var d=f.find("img, iframe").length,g;
if(0==d){return e(),void 0
}g=0,f.find("img, iframe").each(function(){c(this).one("load",function(){++g==d&&e()
}).each(function(){this.complete&&c(this).load()
})
})
},Q=function(){if(W.settings.infiniteLoop&&"fade"!=W.settings.mode&&!W.settings.ticker){var e="vertical"==W.settings.mode?W.settings.minSlides:W.settings.maxSlides,f=W.children.slice(0,e).clone().addClass("bx-clone"),d=W.children.slice(-e).clone().addClass("bx-clone");
Y.append(f).prepend(d)
}W.loader.remove(),E(),"vertical"==W.settings.mode&&(W.settings.adaptiveHeight=!0),W.viewport.height(R()),Y.redrawSlider(),W.settings.onSliderLoad(W.active.index),W.initialized=!0,W.settings.responsive&&c(window).bind("resize",Z),W.settings.auto&&W.settings.autoStart&&M(),W.settings.ticker&&r(),W.settings.pager&&N(W.settings.startSlide),W.settings.controls&&V(),W.settings.touchEnabled&&!W.settings.ticker&&C()
},R=function(){var d=0,e=c(),f;
if("vertical"==W.settings.mode||W.settings.adaptiveHeight){if(W.carousel){for(f=1==W.settings.moveSlides?W.active.index:W.active.index*ab(),e=W.children.eq(f),i=1;
i<=W.settings.maxSlides-1;
i++){e=f+i>=W.children.length?e.add(W.children.eq(i-1)):e.add(W.children.eq(f+i))
}}else{e=W.children.eq(W.active.index)
}}else{e=W.children
}return"vertical"==W.settings.mode?(e.each(function(){d+=c(this).outerHeight()
}),W.settings.slideMargin>0&&(d+=W.settings.slideMargin*(W.settings.minSlides-1))):d=Math.max.apply(Math,e.map(function(){return c(this).outerHeight(!1)
}).get()),d
},L=function(){var d="100%";
return W.settings.slideWidth>0&&(d="horizontal"==W.settings.mode?W.settings.maxSlides*W.settings.slideWidth+(W.settings.maxSlides-1)*W.settings.slideMargin:W.settings.slideWidth),d
},F=function(){var d=W.settings.slideWidth,e=W.viewport.width();
return 0==W.settings.slideWidth||W.settings.slideWidth>e&&!W.carousel||"vertical"==W.settings.mode?d=e:W.settings.maxSlides>1&&"horizontal"==W.settings.mode&&(e>W.maxThreshold||e<W.minThreshold&&(d=(e-W.settings.slideMargin*(W.settings.minSlides-1))/W.settings.minSlides)),d
},U=function(){var e=1,d;
return"horizontal"==W.settings.mode&&W.settings.slideWidth>0?W.viewport.width()<W.minThreshold?e=W.settings.minSlides:W.viewport.width()>W.maxThreshold?e=W.settings.maxSlides:(d=W.children.first().width(),e=Math.floor(W.viewport.width()/d)):"vertical"==W.settings.mode&&(e=W.settings.minSlides),e
},K=function(){var f=0,e,d;
if(W.settings.moveSlides>0){if(W.settings.infiniteLoop){f=W.children.length/ab()
}else{for(e=0,d=0;
e<W.children.length;
){++f,e=d+U(),d+=W.settings.moveSlides<=U()?W.settings.moveSlides:U()
}}}else{f=Math.ceil(W.children.length/U())
}return f
},ab=function(){return W.settings.moveSlides>0&&W.settings.moveSlides<=U()?W.settings.moveSlides:U()
},E=function(){var e,d,f;
W.children.length>W.settings.maxSlides&&W.active.last&&!W.settings.infiniteLoop?"horizontal"==W.settings.mode?(e=W.children.last(),f=e.position(),O(-(f.left-(W.viewport.width()-e.width())),"reset",0)):"vertical"==W.settings.mode&&(d=W.children.length-W.settings.minSlides,f=W.children.eq(d).position(),O(-f.top,"reset",0)):(f=W.children.eq(W.active.index*ab()).position(),W.active.index==K()-1&&(W.active.last=!0),void 0!=f&&("horizontal"==W.settings.mode?O(-f.left,"reset",0):"vertical"==W.settings.mode&&O(-f.top,"reset",0)))
},O=function(k,f,e,h){var g,d;
W.usingCSS?(g="vertical"==W.settings.mode?"translate3d(0, "+k+"px, 0)":"translate3d("+k+"px, 0, 0)",Y.css("-"+W.cssPrefix+"-transition-duration",e/1000+"s"),"slide"==f?(Y.css(W.animProp,g),Y.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){Y.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),I()
})):"reset"==f?Y.css(W.animProp,g):"ticker"==f&&(Y.css("-"+W.cssPrefix+"-transition-timing-function","linear"),Y.css(W.animProp,g),Y.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){Y.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),O(h.resetValue,"reset",0),ad()
}))):(d={},d[W.animProp]=k,"slide"==f?Y.animate(d,e,W.settings.easing,function(){I()
}):"reset"==f?Y.css(W.animProp,k):"ticker"==f&&Y.animate(d,speed,"linear",function(){O(h.resetValue,"reset",0),ad()
}))
},ac=function(){for(var f,g="",d=K(),e=0;
d>e;
e++){f="",W.settings.buildPager&&c.isFunction(W.settings.buildPager)?(f=W.settings.buildPager(e),W.pagerEl.addClass("bx-custom-pager")):(f=e+1,W.pagerEl.addClass("bx-default-pager")),g+='<div class="bx-pager-item"><a href="" data-slide-index="'+e+'" class="bx-pager-link">Slide '+f+"</a></div>"
}W.pagerEl.html(g)
},q=function(){W.settings.pagerCustom?W.pagerEl=c(W.settings.pagerCustom):(W.pagerEl=c('<div class="bx-pager" />'),W.settings.pagerSelector?c(W.settings.pagerSelector).html(W.pagerEl):W.controls.el.addClass("bx-has-pager").append(W.pagerEl),ac()),W.pagerEl.delegate("a","click",m)
},P=function(){W.controls.next=c('<a class="bx-next" href="">'+W.settings.nextText+"</a>"),W.controls.prev=c('<a class="bx-prev" href="">'+W.settings.prevText+"</a>"),W.controls.next.bind("click",j),W.controls.prev.bind("click",t),W.settings.nextSelector&&c(W.settings.nextSelector).append(W.controls.next),W.settings.prevSelector&&c(W.settings.prevSelector).append(W.controls.prev),W.settings.nextSelector||W.settings.prevSelector||(W.controls.directionEl=c('<div class="bx-controls-direction" />'),W.controls.directionEl.append(W.controls.prev).append(W.controls.next),W.controls.el.addClass("bx-has-controls-direction").append(W.controls.directionEl))
},aa=function(){W.controls.start=c('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+W.settings.startText+"</a></div>"),W.controls.stop=c('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+W.settings.stopText+"</a></div>"),W.controls.autoEl=c('<div class="bx-controls-auto" />'),W.controls.autoEl.delegate(".bx-start","click",n),W.controls.autoEl.delegate(".bx-stop","click",ae),W.settings.autoControlsCombine?W.controls.autoEl.append(W.controls.start):W.controls.autoEl.append(W.controls.start).append(W.controls.stop),W.settings.autoControlsSelector?c(W.settings.autoControlsSelector).html(W.controls.autoEl):W.controls.el.addClass("bx-has-controls-auto").append(W.controls.autoEl),G(W.settings.autoStart?"stop":"start")
},x=function(){W.children.each(function(){var d=c(this).find("img:first").attr("title");
void 0!=d&&(""+d).length&&c(this).append('<div class="bx-caption"><span>'+d+"</span></div>")
})
},j=function(d){W.settings.auto&&Y.stopAuto(),Y.goToNextSlide(),d.preventDefault()
},t=function(d){W.settings.auto&&Y.stopAuto(),Y.goToPrevSlide(),d.preventDefault()
},n=function(d){Y.startAuto(),d.preventDefault()
},ae=function(d){Y.stopAuto(),d.preventDefault()
},m=function(e){W.settings.auto&&Y.stopAuto();
var f=c(e.currentTarget),d=parseInt(f.attr("data-slide-index"));
d!=W.active.index&&Y.goToSlide(d),e.preventDefault()
},N=function(e){var d=W.children.length;
return"short"==W.settings.pagerType?(W.settings.maxSlides>1&&(d=Math.ceil(W.children.length/W.settings.maxSlides)),W.pagerEl.html(e+1+W.settings.pagerShortSeparator+d),void 0):(W.pagerEl.find("a").removeClass("active"),W.pagerEl.each(function(f,g){c(g).find("a").eq(e).addClass("active")
}),void 0)
},I=function(){if(W.settings.infiniteLoop){var d="";
0==W.active.index?d=W.children.eq(0).position():W.active.index==K()-1&&W.carousel?d=W.children.eq((K()-1)*ab()).position():W.active.index==W.children.length-1&&(d=W.children.eq(W.children.length-1).position()),"horizontal"==W.settings.mode?O(-d.left,"reset",0):"vertical"==W.settings.mode&&O(-d.top,"reset",0)
}W.working=!1,W.settings.onSlideAfter(W.children.eq(W.active.index),W.oldIndex,W.active.index)
},G=function(d){W.settings.autoControlsCombine?W.controls.autoEl.html(W.controls[d]):(W.controls.autoEl.find("a").removeClass("active"),W.controls.autoEl.find("a:not(.bx-"+d+")").addClass("active"))
},V=function(){1==K()?(W.controls.prev.addClass("disabled"),W.controls.next.addClass("disabled")):!W.settings.infiniteLoop&&W.settings.hideControlOnEnd&&(0==W.active.index?(W.controls.prev.addClass("disabled"),W.controls.next.removeClass("disabled")):W.active.index==K()-1?(W.controls.next.addClass("disabled"),W.controls.prev.removeClass("disabled")):(W.controls.prev.removeClass("disabled"),W.controls.next.removeClass("disabled")))
},M=function(){W.settings.autoDelay>0?setTimeout(Y.startAuto,W.settings.autoDelay):Y.startAuto(),W.settings.autoHover&&Y.hover(function(){W.interval&&(Y.stopAuto(!0),W.autoPaused=!0)
},function(){W.autoPaused&&(Y.startAuto(!0),W.autoPaused=null)
})
},r=function(){var e=0,d;
"next"==W.settings.autoDirection?Y.append(W.children.clone().addClass("bx-clone")):(Y.prepend(W.children.clone().addClass("bx-clone")),d=W.children.first().position(),e="horizontal"==W.settings.mode?-d.left:-d.top),O(e,"reset",0),W.settings.pager=!1,W.settings.controls=!1,W.settings.autoControls=!1,W.settings.tickerHover&&!W.usingCSS&&W.viewport.hover(function(){Y.stop()
},function(){var h=0;
W.children.each(function(){h+="horizontal"==W.settings.mode?c(this).outerWidth(!0):c(this).outerHeight(!0)
});
var f=W.settings.speed/h,k="horizontal"==W.settings.mode?"left":"top",g=f*(h-Math.abs(parseInt(Y.css(k))));
ad(g)
}),ad()
},ad=function(k){var f,e;
speed=k?k:W.settings.speed,f={left:0,top:0},e={left:0,top:0},"next"==W.settings.autoDirection?f=Y.find(".bx-clone").first().position():e=W.children.first().position();
var g="horizontal"==W.settings.mode?-f.left:-f.top,d="horizontal"==W.settings.mode?-e.left:-e.top,h={resetValue:d};
O(g,"ticker",speed,h)
},C=function(){W.touch={start:{x:0,y:0},end:{x:0,y:0}},W.viewport.bind("touchstart",z)
},z=function(e){if(W.working){e.preventDefault()
}else{W.touch.originalPos=Y.position();
var d=e.originalEvent;
W.touch.start.x=d.changedTouches[0].pageX,W.touch.start.y=d.changedTouches[0].pageY,W.viewport.bind("touchmove",H),W.viewport.bind("touchend",S)
}},H=function(l){var h=l.originalEvent,d=Math.abs(h.changedTouches[0].pageX-W.touch.start.x),k=Math.abs(h.changedTouches[0].pageY-W.touch.start.y),g,f;
(3*d>k&&W.settings.preventDefaultSwipeX?l.preventDefault():3*k>d&&W.settings.preventDefaultSwipeY&&l.preventDefault(),"fade"!=W.settings.mode&&W.settings.oneToOneTouch)&&(g=0,"horizontal"==W.settings.mode?(f=h.changedTouches[0].pageX-W.touch.start.x,g=W.touch.originalPos.left+f):(f=h.changedTouches[0].pageY-W.touch.start.y,g=W.touch.originalPos.top+f),O(g,"reset",0))
},S=function(g){var f,e,d;
W.viewport.unbind("touchmove",H),f=g.originalEvent,e=0,(W.touch.end.x=f.changedTouches[0].pageX,W.touch.end.y=f.changedTouches[0].pageY,"fade"==W.settings.mode)?(d=Math.abs(W.touch.start.x-W.touch.end.x),d>=W.settings.swipeThreshold&&(W.touch.start.x>W.touch.end.x?Y.goToNextSlide():Y.goToPrevSlide(),Y.stopAuto())):(d=0,"horizontal"==W.settings.mode?(d=W.touch.end.x-W.touch.start.x,e=W.touch.originalPos.left):(d=W.touch.end.y-W.touch.start.y,e=W.touch.originalPos.top),!W.settings.infiniteLoop&&(0==W.active.index&&d>0||W.active.last&&0>d)?O(e,"reset",200):Math.abs(d)>=W.settings.swipeThreshold?(0>d?Y.goToNextSlide():Y.goToPrevSlide(),Y.stopAuto()):O(e,"reset",200)),W.viewport.unbind("touchend",S)
},Z=function(){var e=c(window).width(),d=c(window).height();
(T!=e||X!=d)&&(T=e,X=d,Y.redrawSlider())
};
return Y.goToSlide=function(s,e){var f,d,o,k,p,l,g;
W.working||W.active.index==s||((W.working=!0,W.oldIndex=W.active.index,W.active.index=0>s?K()-1:s>=K()?0:s,W.settings.onSlideBefore(W.children.eq(W.active.index),W.oldIndex,W.active.index),"next"==e?W.settings.onSlideNext(W.children.eq(W.active.index),W.oldIndex,W.active.index):"prev"==e&&W.settings.onSlidePrev(W.children.eq(W.active.index),W.oldIndex,W.active.index),W.active.last=W.active.index>=K()-1,W.settings.pager&&N(W.active.index),W.settings.controls&&V(),"fade"==W.settings.mode)?(W.settings.adaptiveHeight&&W.viewport.height()!=R()&&W.viewport.animate({height:R()},W.settings.adaptiveHeightSpeed),W.children.filter(":visible").fadeOut(W.settings.speed).css({zIndex:0}),W.children.eq(W.active.index).css("zIndex",51).fadeIn(W.settings.speed,function(){c(this).css("zIndex",50),I()
})):(W.settings.adaptiveHeight&&W.viewport.height()!=R()&&W.viewport.animate({height:R()},W.settings.adaptiveHeightSpeed),f=0,d={left:0,top:0},!W.settings.infiniteLoop&&W.carousel&&W.active.last?"horizontal"==W.settings.mode?(p=W.children.eq(W.children.length-1),d=p.position(),f=W.viewport.width()-p.outerWidth()):(o=W.children.length-W.settings.minSlides,d=W.children.eq(o).position()):W.carousel&&W.active.last&&"prev"==e?(k=1==W.settings.moveSlides?W.settings.maxSlides-ab():(K()-1)*ab()-(W.children.length-W.settings.maxSlides),p=Y.children(".bx-clone").eq(k),d=p.position()):"next"==e&&0==W.active.index?(d=Y.find("> .bx-clone").eq(W.settings.maxSlides).position(),W.active.last=!1):s<0||(l=s*ab(),d=W.children.eq(l).position()),"undefined"!=typeof d&&(g="horizontal"==W.settings.mode?-(d.left-f):-d.top,O(g,"slide",W.settings.speed))))
},Y.goToNextSlide=function(){if(W.settings.infiniteLoop||!W.active.last){var d=parseInt(W.active.index)+1;
Y.goToSlide(d,"next")
}},Y.goToPrevSlide=function(){if(W.settings.infiniteLoop||0!=W.active.index){var d=parseInt(W.active.index)-1;
Y.goToSlide(d,"prev")
}},Y.startAuto=function(d){W.interval||(W.interval=setInterval(function(){"next"==W.settings.autoDirection?Y.goToNextSlide():Y.goToPrevSlide()
},W.settings.pause),W.settings.autoControls&&1!=d&&G("stop"))
},Y.stopAuto=function(d){W.interval&&(clearInterval(W.interval),W.interval=null,W.settings.autoControls&&1!=d&&G("start"))
},Y.getCurrentSlide=function(){return W.active.index
},Y.getSlideCount=function(){return W.children.length
},Y.redrawSlider=function(){W.children.add(Y.find(".bx-clone")).outerWidth(F()),W.viewport.css("height",R()),W.settings.ticker||E(),W.active.last&&(W.active.index=K()-1),W.active.index>=K()&&(W.active.last=!0),W.settings.pager&&!W.settings.pagerCustom&&(ac(),N(W.active.index))
},Y.destroySlider=function(){W.initialized&&(W.initialized=!1,c(".bx-clone",this).remove(),W.children.each(function(){void 0!=c(this).data("origStyle")?c(this).attr("style",c(this).data("origStyle")):c(this).removeAttr("style")
}),void 0!=c(this).data("origStyle")?this.attr("style",c(this).data("origStyle")):c(this).removeAttr("style"),c(this).unwrap().unwrap(),W.controls.el&&W.controls.el.remove(),W.controls.next&&W.controls.next.remove(),W.controls.prev&&W.controls.prev.remove(),W.pagerEl&&W.pagerEl.remove(),c(".bx-caption",this).remove(),W.controls.autoEl&&W.controls.autoEl.remove(),clearInterval(W.interval),W.settings.responsive&&c(window).unbind("resize",Z))
},Y.reloadSlider=function(d){void 0!=d&&(J=d),Y.destroySlider(),B()
},B(),this
}
}(jQuery);
(function(a){a.fn.extend({responsiveTabs:function(){var d="tabset-active",k="tabset-nav-list",g="tabset-nav-list-item",b="tabset-nav-list-link",j="tabset-content",c="tabset-content-link",h;
this.each(function(x){function o(){h=a("."+c).is(":visible")?"accordion":"tabset"
}var u=x,n=0,m=a(this),t=m.children("ul"),q=t.find("li"),r=q.find("a"),e=m.children("div").before('<a href="#"></a>'),f;
$tabsetContentLink=m.children("a"),typeof HashSearch!="undefined"&&HashSearch.keyExists("tab")&&(f=HashSearch.get("tab"),Math.floor(f)==f&&a.isNumeric(f)&&f<=r.length&&(n=f-1)),t.attr({role:"tablist"}).addClass(k),q.each(function(p){var l=a(this),s=p+1;
l.attr({role:"tab",id:"tabset-"+u+"-tab-link-"+s,"aria-controls":"tabset-"+u+"-content-"+s}).addClass(g),p===n?l.attr("aria-selected","true").addClass(d):l.attr("aria-selected","false")
}),r.each(function(l){var p=a(this),s=l+1;
p.attr({href:"#tabset-"+u+"-content-"+s}).addClass(b),l===n&&p.addClass(d)
}),e.each(function(p){var s=a(this),l=p+1;
s.attr({role:"tabpanel",tabIndex:"-1",id:"tabset-"+u+"-content-"+l}).addClass(j),p===n?s.attr({"aria-expanded":"true"}).addClass(d):s.attr({"aria-expanded":"false"})
}),$tabsetContentLink.each(function(p){var l=a(this);
l.addClass(c).text(r.eq(p).text()).attr({"aria-hidden":"true",href:r.eq(p).attr("href")}),p===n&&l.addClass(d)
});
a("."+c+", ."+b).on("click",m,function(z){var A=a(this),p=A.attr("href").split("#")[1],y,w;
if(window.innerWidth<601){z.stopImmediatePropagation()
}z.preventDefault(),A.hasClass(c)&&A.hasClass(d)?(A.removeClass(d),m.find("."+j+"."+d).removeClass(d).attr({"aria-expanded":"false"}),r.eq(n).addClass(d).closest("."+g).addClass(d).attr({"aria-selected":"true"})):(m.find("."+b+"."+d).removeClass(d).closest("."+g).removeClass(d).attr({"aria-selected":"false"}),m.find("."+c+"."+d).removeClass(d),m.find("."+b+'[href="#'+p+'"]').addClass(d).closest("."+g).addClass(d).attr({"aria-selected":"true"}),m.find("."+c+'[href="#'+p+'"]').addClass(d),m.find("."+j+"."+d).removeClass(d).attr({"aria-expanded":"false"}),m.find("."+j+"#"+p).attr({"aria-expanded":"true"}).addClass(d),A.hasClass(c)?(y=a(this).offset().top,w=a(window).scrollTop()>=y?y-80:y,a("html,body").animate({scrollTop:w},200,"swing")):(y=a(this).offset().top-($(".suntrust-header-alt").innerHeight()+15),a("html,body").animate({scrollTop:y},200,"swing")))
});
o();
a(window).on("resize",function(){var l=h;
o(),l==="accordion"&&h==="tabset"&&a("."+c+"."+d).length===0&&(m.find("."+b+"."+d).removeClass(d).closest("."+g).removeClass(d).attr({"aria-selected":"false"}),m.find("."+c+"."+d).removeClass(d),r.eq(n).addClass(d).closest("."+g).addClass(d).attr({"aria-selected":"true"}),$tabsetContentLink.eq(n).addClass(d),e.eq(n).attr({"aria-expanded":"true"}).addClass(d))
})
})
}})
})(jQuery);
/*!
* JavaScript Cookie v2.0.0-pre
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl
* Released under the MIT license
*/
;
!function(a){if("function"==typeof define&&define.amd){define(a)
}else{if("object"==typeof exports){module.exports=a()
}else{var c=window.Cookies,b=window.Cookies=a(window.jQuery);
b.noConflict=function(){return window.Cookies=c,b
}
}}}(function(){function a(){for(var d=0,g={};
d<arguments.length;
d++){var f=arguments[d];
for(var c in f){g[c]=f[c]
}}return g
}function b(d){function c(h,e,o){var v;
if(arguments.length>1){if(o=a({path:"/"},c.defaults,o),"number"==typeof o.expires){var y=new Date;
y.setMilliseconds(y.getMilliseconds()+86400000*o.expires),o.expires=y
}try{v=JSON.stringify(e),/^[\{\[]/.test(v)&&(e=v)
}catch(w){}return e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),h=encodeURIComponent(String(h)),h=h.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),h=h.replace(/[\(\)]/g,escape),document.cookie=[h,"=",e,o.expires&&"; expires="+o.expires.toUTCString(),o.path&&"; path="+o.path,o.domain&&"; domain="+o.domain,o.secure&&"; secure"].join("")
}h||(v={});
for(var g=document.cookie?document.cookie.split("; "):[],x=/(%[0-9A-Z]{2})+/g,t=0;
t<g.length;
t++){var q=g[t].split("="),k=q[0].replace(x,decodeURIComponent),j=q.slice(1).join("=");
if('"'===j.charAt(0)&&(j=j.slice(1,-1)),j=d&&d(j,k)||j.replace(x,decodeURIComponent),this.json){try{j=JSON.parse(j)
}catch(w){}}if(h===k){v=j;
break
}h||(v[k]=j)
}return v
}return c.get=c.set=c,c.getJSON=function(){return c.apply({json:!0},[].slice.call(arguments))
},c.defaults={},c.remove=function(f,e){c(f,"",a(e,{expires:-1}))
},c.withConverter=b,c
}return b()
});
!function(a){if("function"==typeof define&&define.amd){define(a)
}else{if("object"==typeof exports){module.exports=a()
}else{var c=window.Cookies,b=window.Cookies=a(window.jQuery);
b.noConflict=function(){return window.Cookies=c,b
}
}}}(function(){function a(){for(var d=0,g={};
d<arguments.length;
d++){var f=arguments[d];
for(var c in f){g[c]=f[c]
}}return g
}function b(d){function c(h,e,o){var v;
if(arguments.length>1){if(o=a({path:"/"},c.defaults,o),"number"==typeof o.expires){var y=new Date;
y.setMilliseconds(y.getMilliseconds()+86400000*o.expires),o.expires=y
}try{v=JSON.stringify(e),/^[\{\[]/.test(v)&&(e=v)
}catch(w){}return e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),h=encodeURIComponent(String(h)),h=h.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),h=h.replace(/[\(\)]/g,escape),document.cookie=[h,"=",e,o.expires&&"; expires="+o.expires.toUTCString(),o.path&&"; path="+o.path,o.domain&&"; domain="+o.domain,o.secure&&"; secure"].join("")
}h||(v={});
for(var g=document.cookie?document.cookie.split("; "):[],x=/(%[0-9A-Z]{2})+/g,t=0;
t<g.length;
t++){var q=g[t].split("="),k=q[0].replace(x,decodeURIComponent),j=q.slice(1).join("=");
if('"'===j.charAt(0)&&(j=j.slice(1,-1)),j=d&&d(j,k)||j.replace(x,decodeURIComponent),this.json){try{j=JSON.parse(j)
}catch(w){}}if(h===k){v=j;
break
}h||(v[k]=j)
}return v
}return c.get=c.set=c,c.getJSON=function(){return c.apply({json:!0},[].slice.call(arguments))
},c.defaults={},c.remove=function(f,e){c(f,"",a(e,{expires:-1}))
},c.withConverter=b,c
}return b()
});
/*!
 * VERSION: 1.18.5
 * DATE: 2016-05-24
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
;
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(D,C,B){var A=function(f){var e,h=[],g=f.length;
for(e=0;
e!==g;
h.push(f[e++])){}return h
},z=function(h,g,m){var l,k,j=h.cycle;
for(l in j){k=j[l],h[l]="function"==typeof k?k.call(g[m],m):k[m%k.length]
}delete h.cycle
},y=function(e,c,f){B.call(this,e,c,f),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=y.prototype.render
},x=1e-10,w=B._internals,v=w.isSelector,u=w.isArray,t=y.prototype=B.to({},0.1,{}),s=[];
y.version="1.18.5",t.constructor=y,t.kill()._gc=!1,y.killTweensOf=y.killDelayedCallsTo=B.killTweensOf,y.getTweensOf=B.getTweensOf,y.lagSmoothing=B.lagSmoothing,y.ticker=B.ticker,y.render=B.render,t.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),B.prototype.invalidate.call(this)
},t.updateTo=function(G,F){var E,o=this.ratio,n=this.vars.immediateRender||G.immediateRender;
F&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));
for(E in G){this.vars[E]=G[E]
}if(this._initted||n){if(F){this._initted=!1,n&&this.render(0,!0,!0)
}else{if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&B._onPluginEvent("_onDisable",this),this._time/this._duration>0.998){var m=this._totalTime;
this.render(0,!0,!1),this._initted=!1,this.render(m,!0,!1)
}else{if(this._initted=!1,this._init(),this._time>0||n){for(var l,k=1/(1-o),c=this._firstPT;
c;
){l=c.s+c.c,c.c*=k,c.s=l-c.c,c=c._next
}}}}}return this
},t.render=function(R,Q,P){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();
var O,N,M,L,K,J,I,H,G=this._dirty?this.totalDuration():this._totalDuration,F=this._time,E=this._totalTime,h=this._cycle,g=this._duration,S=this._rawPrevTime;
if(R>=G-1e-7?(this._totalTime=G,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(O=!0,N="onComplete",P=P||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||P)&&(this._startTime===this._timeline._duration&&(R=0),(0>S||0>=R&&R>=-1e-7||S===x&&"isPause"!==this.data)&&S!==R&&(P=!0,S>x&&(N="onReverseComplete")),this._rawPrevTime=H=!Q||R||S===R?R:x)):1e-7>R?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==E||0===g&&S>0)&&(N="onReverseComplete",O=this._reversed),0>R&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||P)&&(S>=0&&(P=!0),this._rawPrevTime=H=!Q||R||S===R?R:x)),this._initted||(P=!0)):(this._totalTime=this._time=R,0!==this._repeat&&(L=g+this._repeatDelay,this._cycle=this._totalTime/L>>0,0!==this._cycle&&this._cycle===this._totalTime/L&&R>=E&&this._cycle--,this._time=this._totalTime-this._cycle*L,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:this._time<0&&(this._time=0)),this._easeType?(K=this._time/g,J=this._easeType,I=this._easePower,(1===J||3===J&&K>=0.5)&&(K=1-K),3===J&&(K*=2),1===I?K*=K:2===I?K*=K*K:3===I?K*=K*K*K:4===I&&(K*=K*K*K*K),1===J?this.ratio=1-K:2===J?this.ratio=K:this._time/g<0.5?this.ratio=K/2:this.ratio=1-K/2):this.ratio=this._ease.getRatio(this._time/g)),F===this._time&&!P&&h===this._cycle){return void (E!==this._totalTime&&this._onUpdate&&(Q||this._callback("onUpdate")))
}if(!this._initted){if(this._init(),!this._initted||this._gc){return
}if(!P&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){return this._time=F,this._totalTime=E,this._rawPrevTime=S,this._cycle=h,w.lazyTweens.push(this),void (this._lazy=[R,Q])
}this._time&&!O?this.ratio=this._ease.getRatio(this._time/g):O&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==F&&R>=0&&(this._active=!0),0===E&&(2===this._initted&&R>0&&this._init(),this._startAt&&(R>=0?this._startAt.render(R,Q,P):N||(N="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(Q||this._callback("onStart"))),M=this._firstPT;
M;
){M.f?M.t[M.p](M.c*this.ratio+M.s):M.t[M.p]=M.c*this.ratio+M.s,M=M._next
}this._onUpdate&&(0>R&&this._startAt&&this._startTime&&this._startAt.render(R,Q,P),Q||(this._totalTime!==E||N)&&this._callback("onUpdate")),this._cycle!==h&&(Q||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),N&&(!this._gc||P)&&(0>R&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(R,Q,P),O&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!Q&&this.vars[N]&&this._callback(N),0===g&&this._rawPrevTime===x&&H!==x&&(this._rawPrevTime=0))
},y.to=function(e,d,f){return new y(e,d,f)
},y.from=function(e,d,f){return f.runBackwards=!0,f.immediateRender=0!=f.immediateRender,new y(e,d,f)
},y.fromTo=function(f,e,h,g){return g.startAt=h,g.immediateRender=0!=g.immediateRender&&0!=h.immediateRender,new y(f,e,g)
},y.staggerTo=y.allTo=function(I,H,G,F,E,l,j){F=F||0;
var f,e,d,c,N=0,M=[],L=function(){G.onComplete&&G.onComplete.apply(G.onCompleteScope||this,arguments),E.apply(j||G.callbackScope||this,l||s)
},K=G.cycle,J=G.startAt&&G.startAt.cycle;
for(u(I)||("string"==typeof I&&(I=B.selector(I)||I),v(I)&&(I=A(I))),I=I||[],0>F&&(I=A(I),I.reverse(),F*=-1),f=I.length-1,d=0;
f>=d;
d++){e={};
for(c in G){e[c]=G[c]
}if(K&&(z(e,I,d),null!=e.duration&&(H=e.duration,delete e.duration)),J){J=e.startAt={};
for(c in G.startAt){J[c]=G.startAt[c]
}z(e.startAt,I,d)
}e.delay=N+(e.delay||0),d===f&&E&&(e.onComplete=L),M[d]=new y(I[d],H,e),N+=F
}return M
},y.staggerFrom=y.allFrom=function(j,f,o,n,m,l,k){return o.runBackwards=!0,o.immediateRender=0!=o.immediateRender,y.staggerTo(j,f,o,n,m,l,k)
},y.staggerFromTo=y.allFromTo=function(j,f,E,o,n,m,l,k){return o.startAt=E,o.immediateRender=0!=o.immediateRender&&0!=E.immediateRender,y.staggerTo(j,f,o,n,m,l,k)
},y.delayedCall=function(g,f,k,j,h){return new y(f,0,{delay:g,onComplete:f,onCompleteParams:k,callbackScope:j,onReverseComplete:f,onReverseCompleteParams:k,immediateRender:!1,useFrames:h,overwrite:0})
},y.set=function(d,c){return new y(d,0,c)
},y.isTweening=function(b){return B.getTweensOf(b,!0).length>0
};
var r=function(g,c){for(var k=[],j=0,h=g._first;
h;
){h instanceof B?k[j++]=h:(c&&(k[j++]=h),k=k.concat(r(h,c)),j=k.length),h=h._next
}return k
},q=y.getAllTweens=function(a){return r(D._rootTimeline,a).concat(r(D._rootFramesTimeline,a))
};
y.killAll=function(I,H,G,F){null==H&&(H=!0),null==G&&(G=!0);
var E,o,n,m=q(0!=F),l=m.length,b=H&&G&&F;
for(n=0;
l>n;
n++){o=m[n],(b||o instanceof C||(E=o.target===o.vars.onComplete)&&G||H&&!E)&&(I?o.totalTime(o._reversed?0:o.totalDuration()):o._enabled(!1,!1))
}},y.killChildTweensOf=function(h,d){if(null!=h){var E,o,j,f,c,F=w.tweenLookup;
if("string"==typeof h&&(h=B.selector(h)||h),v(h)&&(h=A(h)),u(h)){for(f=h.length;
--f>-1;
){y.killChildTweensOf(h[f],d)
}}else{E=[];
for(j in F){for(o=F[j].target.parentNode;
o;
){o===h&&(E=E.concat(F[j].tweens)),o=o.parentNode
}}for(c=E.length,f=0;
c>f;
f++){d&&E[f].totalTime(E[f].totalDuration()),E[f]._enabled(!1,!1)
}}}};
var p=function(G,F,E,o){F=F!==!1,E=E!==!1,o=o!==!1;
for(var n,m,l=q(o),k=F&&E&&o,b=l.length;
--b>-1;
){m=l[b],(k||m instanceof C||(n=m.target===m.vars.onComplete)&&E||F&&!n)&&m.paused(G)
}};
return y.pauseAll=function(e,d,f){p(!0,e,d,f)
},y.resumeAll=function(e,d,f){p(!1,e,d,f)
},y.globalTimeScale=function(a){var f=D._rootTimeline,c=B.ticker.time;
return arguments.length?(a=a||x,f._startTime=c-(c-f._startTime)*f._timeScale/a,f=D._rootFramesTimeline,c=B.ticker.frame,f._startTime=c-(c-f._startTime)*f._timeScale/a,f._timeScale=D._rootTimeline._timeScale=a,a):f._timeScale
},t.progress=function(d,c){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-d:d)+this._cycle*(this._duration+this._repeatDelay),c):this._time/this.duration()
},t.totalProgress=function(d,c){return arguments.length?this.totalTime(this.totalDuration()*d,c):this._totalTime/this.totalDuration()
},t.time=function(d,c){return arguments.length?(this._dirty&&this.totalDuration(),d>this._duration&&(d=this._duration),this._yoyo&&0!==(1&this._cycle)?d=this._duration-d+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(d+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(d,c)):this._time
},t.duration=function(a){return arguments.length?D.prototype.duration.call(this,a):this._duration
},t.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)
},t.repeat=function(b){return arguments.length?(this._repeat=b,this._uncache(!0)):this._repeat
},t.repeatDelay=function(b){return arguments.length?(this._repeatDelay=b,this._uncache(!0)):this._repeatDelay
},t.yoyo=function(b){return arguments.length?(this._yoyo=b,this):this._yoyo
},y
},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(H,G,F){var E=function(b){G.call(this,b),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;
var h,g,f=this.vars;
for(g in f){h=f[g],z(h)&&-1!==h.join("").indexOf("{self}")&&(f[g]=this._swapSelfInParams(h))
}z(f.tweens)&&this.add(f.tweens,0,f.align,f.stagger)
},D=1e-10,C=F._internals,B=E._internals={},A=C.isSelector,z=C.isArray,y=C.lazyTweens,x=C.lazyRender,w=_gsScope._gsDefine.globals,v=function(e){var d,f={};
for(d in e){f[d]=e[d]
}return f
},u=function(h,g,m){var l,k,j=h.cycle;
for(l in j){k=j[l],h[l]="function"==typeof k?k.call(g[m],m):k[m%k.length]
}delete h.cycle
},t=B.pauseCallback=function(){},s=function(f){var e,h=[],g=f.length;
for(e=0;
e!==g;
h.push(f[e++])){}return h
},r=E.prototype=new G;
return E.version="1.18.5",r.constructor=E,r.kill()._gc=r._forcingPlayhead=r._hasPause=!1,r.to=function(g,c,k,j){var h=k.repeat&&w.TweenMax||F;
return c?this.add(new h(g,c,k),j):this.set(g,k,j)
},r.from=function(f,c,h,g){return this.add((h.repeat&&w.TweenMax||F).from(f,c,h),g)
},r.fromTo=function(h,c,m,l,k){var j=l.repeat&&w.TweenMax||F;
return c?this.add(j.fromTo(h,c,m,l),k):this.set(h,l,k)
},r.staggerTo=function(N,M,L,K,J,I,p,n){var m,h,d=new E({onComplete:I,onCompleteParams:p,callbackScope:n,smoothChildTiming:this.smoothChildTiming}),c=L.cycle;
for("string"==typeof N&&(N=F.selector(N)||N),N=N||[],A(N)&&(N=s(N)),K=K||0,0>K&&(N=s(N),N.reverse(),K*=-1),h=0;
h<N.length;
h++){m=v(L),m.startAt&&(m.startAt=v(m.startAt),m.startAt.cycle&&u(m.startAt,N,h)),c&&(u(m,N,h),null!=m.duration&&(M=m.duration,delete m.duration)),d.to(N[h],M,m,h*K)
}return this.add(d,J)
},r.staggerFrom=function(k,j,q,p,o,n,m,l){return q.immediateRender=0!=q.immediateRender,q.runBackwards=!0,this.staggerTo(k,j,q,p,o,n,m,l)
},r.staggerFromTo=function(I,q,p,o,n,m,l,k,j){return o.startAt=p,o.immediateRender=0!=o.immediateRender&&0!=p.immediateRender,this.staggerTo(I,q,o,n,m,l,k,j)
},r.call=function(f,c,h,g){return this.add(F.delayedCall(0,f,c,h),g)
},r.set=function(e,c,f){return f=this._parseTimeOrLabel(f,0,!0),null==c.immediateRender&&(c.immediateRender=f===this._time&&!this._paused),this.add(new F(e,0,c),f)
},E.exportRoot=function(d,c){d=d||{},null==d.smoothChildTiming&&(d.smoothChildTiming=!0);
var m,l,k=new E(d),j=k._timeline;
for(null==c&&(c=!0),j._remove(k,!0),k._startTime=0,k._rawPrevTime=k._time=k._totalTime=j._time,m=j._first;
m;
){l=m._next,c&&m instanceof F&&m.target===m.vars.onComplete||k.add(m,m._startTime-m._delay),m=l
}return j.add(k,0),k
},r.add=function(L,K,J,I){var q,p,d,c,b,a;
if("number"!=typeof K&&(K=this._parseTimeOrLabel(K,0,!0,L)),!(L instanceof H)){if(L instanceof Array||L&&L.push&&z(L)){for(J=J||"normal",I=I||0,q=K,p=L.length,d=0;
p>d;
d++){z(c=L[d])&&(c=new E({tweens:c})),this.add(c,q),"string"!=typeof c&&"function"!=typeof c&&("sequence"===J?q=c._startTime+c.totalDuration()/c._timeScale:"start"===J&&(c._startTime-=c.delay())),q+=I
}return this._uncache(!0)
}if("string"==typeof L){return this.addLabel(L,K)
}if("function"!=typeof L){throw"Cannot add "+L+" into the timeline; it is not a tween, timeline, function, or string."
}L=F.delayedCall(0,L)
}if(G.prototype.add.call(this,L,K),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration()){for(b=this,a=b.rawTime()>L._startTime;
b._timeline;
){a&&b._timeline.smoothChildTiming?b.totalTime(b._totalTime,!0):b._gc&&b._enabled(!0,!1),b=b._timeline
}}return this
},r.remove=function(a){if(a instanceof H){this._remove(a,!1);
var f=a._timeline=a.vars.useFrames?H._rootFramesTimeline:H._rootTimeline;
return a._startTime=(a._paused?a._pauseTime:f._time)-(a._reversed?a.totalDuration()-a._totalTime:a._totalTime)/a._timeScale,this
}if(a instanceof Array||a&&a.push&&z(a)){for(var e=a.length;
--e>-1;
){this.remove(a[e])
}return this
}return"string"==typeof a?this.removeLabel(a):this.kill(null,a)
},r._remove=function(b,f){G.prototype._remove.call(this,b,f);
var e=this._last;
return e?this._time>e._startTime+e._totalDuration/e._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this
},r.append=function(d,c){return this.add(d,this._parseTimeOrLabel(null,c,!0,d))
},r.insert=r.insertMultiple=function(f,e,h,g){return this.add(f,e||0,h,g)
},r.appendMultiple=function(f,e,h,g){return this.add(f,this._parseTimeOrLabel(null,e,!0,f),h,g)
},r.addLabel=function(d,c){return this._labels[d]=this._parseTimeOrLabel(c),this
},r.addPause=function(g,c,k,j){var h=F.delayedCall(0,t,k,j||this);
return h.vars.onComplete=h.vars.onReverseComplete=c,h.data="isPause",this._hasPause=!0,this.add(h,g)
},r.removeLabel=function(b){return delete this._labels[b],this
},r.getLabelTime=function(b){return null!=this._labels[b]?this._labels[b]:-1
},r._parseTimeOrLabel=function(a,k,j,h){var g;
if(h instanceof H&&h.timeline===this){this.remove(h)
}else{if(h&&(h instanceof Array||h.push&&z(h))){for(g=h.length;
--g>-1;
){h[g] instanceof H&&h[g].timeline===this&&this.remove(h[g])
}}}if("string"==typeof k){return this._parseTimeOrLabel(k,j&&"number"==typeof a&&null==this._labels[k]?a-this.duration():0,j)
}if(k=k||0,"string"!=typeof a||!isNaN(a)&&null==this._labels[a]){null==a&&(a=this.duration())
}else{if(g=a.indexOf("="),-1===g){return null==this._labels[a]?j?this._labels[a]=this.duration()+k:k:this._labels[a]+k
}k=parseInt(a.charAt(g-1)+"1",10)*Number(a.substr(g+1)),a=g>1?this._parseTimeOrLabel(a.substr(0,g-1),0,j):this.duration()
}return Number(a)+k
},r.seek=function(d,c){return this.totalTime("number"==typeof d?d:this._parseTimeOrLabel(d),c!==!1)
},r.stop=function(){return this.paused(!0)
},r.gotoAndPlay=function(d,c){return this.play(d,c)
},r.gotoAndStop=function(d,c){return this.pause(d,c)
},r.render=function(T,S,R){this._gc&&this._enabled(!0,!1);
var Q,P,O,N,M,L,K,J=this._dirty?this.totalDuration():this._totalDuration,I=this._time,k=this._startTime,j=this._timeScale,e=this._paused;
if(T>=J-1e-7){this._totalTime=this._time=J,this._reversed||this._hasPausedChild()||(P=!0,N="onComplete",M=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=T&&T>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===D)&&this._rawPrevTime!==T&&this._first&&(M=!0,this._rawPrevTime>D&&(N="onReverseComplete"))),this._rawPrevTime=this._duration||!S||T||this._rawPrevTime===T?T:D,T=J+0.0001
}else{if(1e-7>T){if(this._totalTime=this._time=0,(0!==I||0===this._duration&&this._rawPrevTime!==D&&(this._rawPrevTime>0||0>T&&this._rawPrevTime>=0))&&(N="onReverseComplete",P=this._reversed),0>T){this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(M=P=!0,N="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(M=!0),this._rawPrevTime=T
}else{if(this._rawPrevTime=this._duration||!S||T||this._rawPrevTime===T?T:D,0===T&&P){for(Q=this._first;
Q&&0===Q._startTime;
){Q._duration||(P=!1),Q=Q._next
}}T=0,this._initted||(M=!0)
}}else{if(this._hasPause&&!this._forcingPlayhead&&!S){if(T>=I){for(Q=this._first;
Q&&Q._startTime<=T&&!L;
){Q._duration||"isPause"!==Q.data||Q.ratio||0===Q._startTime&&0===this._rawPrevTime||(L=Q),Q=Q._next
}}else{for(Q=this._last;
Q&&Q._startTime>=T&&!L;
){Q._duration||"isPause"===Q.data&&Q._rawPrevTime>0&&(L=Q),Q=Q._prev
}}L&&(this._time=T=L._startTime,this._totalTime=T+this._cycle*(this._totalDuration+this._repeatDelay))
}this._totalTime=this._time=this._rawPrevTime=T
}}if(this._time!==I&&this._first||R||M||L){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==I&&T>0&&(this._active=!0),0===I&&this.vars.onStart&&(0===this._time&&this._duration||S||this._callback("onStart")),K=this._time,K>=I){for(Q=this._first;
Q&&(O=Q._next,K===this._time&&(!this._paused||e));
){(Q._active||Q._startTime<=K&&!Q._paused&&!Q._gc)&&(L===Q&&this.pause(),Q._reversed?Q.render((Q._dirty?Q.totalDuration():Q._totalDuration)-(T-Q._startTime)*Q._timeScale,S,R):Q.render((T-Q._startTime)*Q._timeScale,S,R)),Q=O
}}else{for(Q=this._last;
Q&&(O=Q._prev,K===this._time&&(!this._paused||e));
){if(Q._active||Q._startTime<=I&&!Q._paused&&!Q._gc){if(L===Q){for(L=Q._prev;
L&&L.endTime()>this._time;
){L.render(L._reversed?L.totalDuration()-(T-L._startTime)*L._timeScale:(T-L._startTime)*L._timeScale,S,R),L=L._prev
}L=null,this.pause()
}Q._reversed?Q.render((Q._dirty?Q.totalDuration():Q._totalDuration)-(T-Q._startTime)*Q._timeScale,S,R):Q.render((T-Q._startTime)*Q._timeScale,S,R)
}Q=O
}}this._onUpdate&&(S||(y.length&&x(),this._callback("onUpdate"))),N&&(this._gc||(k===this._startTime||j!==this._timeScale)&&(0===this._time||J>=this.totalDuration())&&(P&&(y.length&&x(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!S&&this.vars[N]&&this._callback(N)))
}},r._hasPausedChild=function(){for(var b=this._first;
b;
){if(b._paused||b instanceof E&&b._hasPausedChild()){return !0
}b=b._next
}return !1
},r.getChildren=function(j,c,o,n){n=n||-9999999999;
for(var m=[],l=this._first,k=0;
l;
){l._startTime<n||(l instanceof F?c!==!1&&(m[k++]=l):(o!==!1&&(m[k++]=l),j!==!1&&(m=m.concat(l.getChildren(!0,c,o)),k=m.length))),l=l._next
}return m
},r.getTweensOf=function(j,c){var o,n,m=this._gc,l=[],k=0;
for(m&&this._enabled(!0,!0),o=F.getTweensOf(j),n=o.length;
--n>-1;
){(o[n].timeline===this||c&&this._contains(o[n]))&&(l[k++]=o[n])
}return m&&this._enabled(!1,!0),l
},r.recent=function(){return this._recent
},r._contains=function(d){for(var c=d.timeline;
c;
){if(c===this){return !0
}c=c.timeline
}return !1
},r.shiftChildren=function(h,g,m){m=m||0;
for(var l,k=this._first,j=this._labels;
k;
){k._startTime>=m&&(k._startTime+=h),k=k._next
}if(g){for(l in j){j[l]>=m&&(j[l]+=h)
}}return this._uncache(!0)
},r._kill=function(g,f){if(!g&&!f){return this._enabled(!1,!1)
}for(var k=f?this.getTweensOf(f):this.getChildren(!0,!0,!1),j=k.length,h=!1;
--j>-1;
){k[j]._kill(g,f)&&(h=!0)
}return h
},r.clear=function(e){var d=this.getChildren(!1,!0,!0),f=d.length;
for(this._time=this._totalTime=0;
--f>-1;
){d[f]._enabled(!1,!1)
}return e!==!1&&(this._labels={}),this._uncache(!0)
},r.invalidate=function(){for(var a=this._first;
a;
){a.invalidate(),a=a._next
}return H.prototype.invalidate.call(this)
},r._enabled=function(b,f){if(b===this._gc){for(var e=this._first;
e;
){e._enabled(b,!0),e=e._next
}}return G.prototype._enabled.call(this,b,f)
},r.totalTime=function(a,h,g){this._forcingPlayhead=!0;
var f=H.prototype.totalTime.apply(this,arguments);
return this._forcingPlayhead=!1,f
},r.duration=function(b){return arguments.length?(0!==this.duration()&&0!==b&&this.timeScale(this._duration/b),this):(this._dirty&&this.totalDuration(),this._duration)
},r.totalDuration=function(h){if(!arguments.length){if(this._dirty){for(var g,m,l=0,k=this._last,j=999999999999;
k;
){g=k._prev,k._dirty&&k.totalDuration(),k._startTime>j&&this._sortChildren&&!k._paused?this.add(k,k._startTime-k._delay):j=k._startTime,k._startTime<0&&!k._paused&&(l-=k._startTime,this._timeline.smoothChildTiming&&(this._startTime+=k._startTime/this._timeScale),this.shiftChildren(-k._startTime,!1,-9999999999),j=0),m=k._startTime+k._totalDuration/k._timeScale,m>l&&(l=m),k=g
}this._duration=this._totalDuration=l,this._dirty=!1
}return this._totalDuration
}return h&&this.totalDuration()?this.timeScale(this._totalDuration/h):this
},r.paused=function(a){if(!a){for(var f=this._first,e=this._time;
f;
){f._startTime===e&&"isPause"===f.data&&(f._rawPrevTime=0),f=f._next
}}return H.prototype.paused.apply(this,arguments)
},r.usesFrames=function(){for(var a=this._timeline;
a._timeline;
){a=a._timeline
}return a===H._rootFramesTimeline
},r.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale
},E
},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,s,r){var q=function(a){t.call(this,a),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0
},p=1e-10,o=s._internals,n=o.lazyTweens,m=o.lazyRender,l=new r(null,null,1,0),k=q.prototype=new t;
return k.constructor=q,k.kill()._gc=!1,q.version="1.18.5",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)
},k.addCallback=function(b,h,g,f){return this.add(s.delayedCall(0,b,g,f),h)
},k.removeCallback=function(g,f){if(g){if(null==f){this._kill(null,g)
}else{for(var u=this.getTweensOf(g,!1),j=u.length,h=this._parseTimeOrLabel(f);
--j>-1;
){u[j]._startTime===h&&u[j]._enabled(!1,!1)
}}}return this
},k.removePause=function(a){return this.removeCallback(t._internals.pauseCallback,a)
},k.tweenTo=function(b,w){w=w||{};
var v,u,j,h={ease:l,useFrames:this.usesFrames(),immediateRender:!1};
for(u in w){h[u]=w[u]
}return h.time=this._parseTimeOrLabel(b),v=Math.abs(Number(h.time)-this._time)/this._timeScale||0.001,j=new s(this,v,h),h.onStart=function(){j.target.paused(!0),j.vars.time!==j.target.time()&&v===j.duration()&&j.duration(Math.abs(j.vars.time-j.target.time())/j.target._timeScale),w.onStart&&j._callback("onStart")
},j
},k.tweenFromTo=function(f,e,h){h=h||{},f=this._parseTimeOrLabel(f),h.startAt={onComplete:this.seek,onCompleteParams:[f],callbackScope:this},h.immediateRender=h.immediateRender!==!1;
var g=this.tweenTo(e,h);
return g.duration(Math.abs(g.vars.time-f)/this._timeScale||0.001)
},k.render=function(Z,Y,X){this._gc&&this._enabled(!0,!1);
var W,V,U,T,S,R,Q,P,O=this._dirty?this.totalDuration():this._totalDuration,N=this._duration,L=this._time,J=this._totalTime,H=this._startTime,G=this._timeScale,F=this._rawPrevTime,E=this._paused,D=this._cycle;
if(Z>=O-1e-7){this._locked||(this._totalTime=O,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(V=!0,T="onComplete",S=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=Z&&Z>=-1e-7||0>F||F===p)&&F!==Z&&this._first&&(S=!0,F>p&&(T="onReverseComplete"))),this._rawPrevTime=this._duration||!Y||Z||this._rawPrevTime===Z?Z:p,this._yoyo&&0!==(1&this._cycle)?this._time=Z=0:(this._time=N,Z=N+0.0001)
}else{if(1e-7>Z){if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==L||0===N&&F!==p&&(F>0||0>Z&&F>=0)&&!this._locked)&&(T="onReverseComplete",V=this._reversed),0>Z){this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(S=V=!0,T="onReverseComplete"):F>=0&&this._first&&(S=!0),this._rawPrevTime=Z
}else{if(this._rawPrevTime=N||!Y||Z||this._rawPrevTime===Z?Z:p,0===Z&&V){for(W=this._first;
W&&0===W._startTime;
){W._duration||(V=!1),W=W._next
}}Z=0,this._initted||(S=!0)
}}else{if(0===N&&0>F&&(S=!0),this._time=this._rawPrevTime=Z,this._locked||(this._totalTime=Z,0!==this._repeat&&(R=N+this._repeatDelay,this._cycle=this._totalTime/R>>0,0!==this._cycle&&this._cycle===this._totalTime/R&&Z>=J&&this._cycle--,this._time=this._totalTime-this._cycle*R,this._yoyo&&0!==(1&this._cycle)&&(this._time=N-this._time),this._time>N?(this._time=N,Z=N+0.0001):this._time<0?this._time=Z=0:Z=this._time)),this._hasPause&&!this._forcingPlayhead&&!Y){if(Z=this._time,Z>=L){for(W=this._first;
W&&W._startTime<=Z&&!Q;
){W._duration||"isPause"!==W.data||W.ratio||0===W._startTime&&0===this._rawPrevTime||(Q=W),W=W._next
}}else{for(W=this._last;
W&&W._startTime>=Z&&!Q;
){W._duration||"isPause"===W.data&&W._rawPrevTime>0&&(Q=W),W=W._prev
}}Q&&(this._time=Z=Q._startTime,this._totalTime=Z+this._cycle*(this._totalDuration+this._repeatDelay))
}}}if(this._cycle!==D&&!this._locked){var h=this._yoyo&&0!==(1&D),g=h===(this._yoyo&&0!==(1&this._cycle)),e=this._totalTime,M=this._cycle,K=this._rawPrevTime,I=this._time;
if(this._totalTime=D*N,this._cycle<D?h=!h:this._totalTime+=N,this._time=L,this._rawPrevTime=0===N?F-0.0001:F,this._cycle=D,this._locked=!0,L=h?0:N,this.render(L,Y,0===N),Y||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),L!==this._time){return
}if(g&&(L=h?N+0.0001:-0.0001,this.render(L,!0,!1)),this._locked=!1,this._paused&&!E){return
}this._time=I,this._totalTime=e,this._cycle=M,this._rawPrevTime=K
}if(!(this._time!==L&&this._first||X||S||Q)){return void (J!==this._totalTime&&this._onUpdate&&(Y||this._callback("onUpdate")))
}if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==J&&Z>0&&(this._active=!0),0===J&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||Y||this._callback("onStart")),P=this._time,P>=L){for(W=this._first;
W&&(U=W._next,P===this._time&&(!this._paused||E));
){(W._active||W._startTime<=this._time&&!W._paused&&!W._gc)&&(Q===W&&this.pause(),W._reversed?W.render((W._dirty?W.totalDuration():W._totalDuration)-(Z-W._startTime)*W._timeScale,Y,X):W.render((Z-W._startTime)*W._timeScale,Y,X)),W=U
}}else{for(W=this._last;
W&&(U=W._prev,P===this._time&&(!this._paused||E));
){if(W._active||W._startTime<=L&&!W._paused&&!W._gc){if(Q===W){for(Q=W._prev;
Q&&Q.endTime()>this._time;
){Q.render(Q._reversed?Q.totalDuration()-(Z-Q._startTime)*Q._timeScale:(Z-Q._startTime)*Q._timeScale,Y,X),Q=Q._prev
}Q=null,this.pause()
}W._reversed?W.render((W._dirty?W.totalDuration():W._totalDuration)-(Z-W._startTime)*W._timeScale,Y,X):W.render((Z-W._startTime)*W._timeScale,Y,X)
}W=U
}}this._onUpdate&&(Y||(n.length&&m(),this._callback("onUpdate"))),T&&(this._locked||this._gc||(H===this._startTime||G!==this._timeScale)&&(0===this._time||O>=this.totalDuration())&&(V&&(n.length&&m(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!Y&&this.vars[T]&&this._callback(T)))
},k.getActive=function(B,A,z){null==B&&(B=!0),null==A&&(A=!0),null==z&&(z=!1);
var y,x,w=[],v=this.getChildren(B,A,z),u=0,j=v.length;
for(y=0;
j>y;
y++){x=v[y],x.isActive()&&(w[u++]=x)
}return w
},k.getLabelAfter=function(f){f||0!==f&&(f=this._time);
var e,h=this.getLabelsArray(),g=h.length;
for(e=0;
g>e;
e++){if(h[e].time>f){return h[e].name
}}return null
},k.getLabelBefore=function(e){null==e&&(e=this._time);
for(var d=this.getLabelsArray(),f=d.length;
--f>-1;
){if(d[f].time<e){return d[f].name
}}return null
},k.getLabelsArray=function(){var e,d=[],f=0;
for(e in this._labels){d[f++]={time:this._labels[e],name:e}
}return d.sort(function(g,c){return g.time-c.time
}),d
},k.progress=function(d,c){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-d:d)+this._cycle*(this._duration+this._repeatDelay),c):this._time/this.duration()
},k.totalProgress=function(d,c){return arguments.length?this.totalTime(this.totalDuration()*d,c):this._totalTime/this.totalDuration()
},k.totalDuration=function(a){return arguments.length?-1!==this._repeat&&a?this.timeScale(this.totalDuration()/a):this:(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)
},k.time=function(d,c){return arguments.length?(this._dirty&&this.totalDuration(),d>this._duration&&(d=this._duration),this._yoyo&&0!==(1&this._cycle)?d=this._duration-d+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(d+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(d,c)):this._time
},k.repeat=function(b){return arguments.length?(this._repeat=b,this._uncache(!0)):this._repeat
},k.repeatDelay=function(b){return arguments.length?(this._repeatDelay=b,this._uncache(!0)):this._repeatDelay
},k.yoyo=function(b){return arguments.length?(this._yoyo=b,this):this._yoyo
},k.currentLabel=function(b){return arguments.length?this.seek(b,!0):this.getLabelBefore(this._time+1e-8)
},q
},!0),function(){var H=180/Math.PI,G=[],F=[],E=[],D={},C=_gsScope._gsDefine.globals,B=function(f,e,h,g){h===g&&(h=g-(g-e)/1000000),f===e&&(e=f+(h-f)/1000000),this.a=f,this.b=e,this.c=h,this.d=g,this.da=g-f,this.ca=h-f,this.ba=e-f
},A=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",z=function(S,R,Q,P){var O={a:S},N={},M={},L={c:P},K=(S+R)/2,J=(R+Q)/2,I=(Q+P)/2,q=(K+J)/2,p=(J+I)/2,o=(p-q)/8;
return O.b=K+(S-K)/4,N.b=q+o,O.c=N.a=(O.b+N.b)/2,N.c=M.a=(q+p)/2,M.b=p-o,L.b=I+(P-I)/4,M.c=L.a=(M.b+L.b)/2,[O,N,M,L]
},y=function(Z,Y,X,W,V){var U,T,S,R,Q,P,O,N,M,L,K,J,I,d=Z.length-1,c=0,b=Z[0].a;
for(U=0;
d>U;
U++){Q=Z[c],T=Q.a,S=Q.d,R=Z[c+1].d,V?(K=G[U],J=F[U],I=(J+K)*Y*0.25/(W?0.5:E[U]||0.5),P=S-(S-T)*(W?0.5*Y:0!==K?I/K:0),O=S+(R-S)*(W?0.5*Y:0!==J?I/J:0),N=S-(P+((O-P)*(3*K/(K+J)+0.5)/4||0))):(P=S-(S-T)*Y*0.5,O=S+(R-S)*Y*0.5,N=S-(P+O)/2),P+=N,O+=N,Q.c=M=P,0!==U?Q.b=b:Q.b=b=Q.a+0.6*(Q.c-Q.a),Q.da=S-T,Q.ca=M-T,Q.ba=b-T,X?(L=z(T,b,M,S),Z.splice(c,1,L[0],L[1],L[2],L[3]),c+=4):c++,b=O
}Q=Z[c],Q.b=b,Q.c=b+0.4*(Q.d-b),Q.da=Q.d-Q.a,Q.ca=Q.c-Q.a,Q.ba=b-Q.a,X&&(L=z(Q.a,b,Q.c,Q.d),Z.splice(c,1,L[0],L[1],L[2],L[3]))
},x=function(M,L,K,J){var I,q,p,o,g,c,b=[];
if(J){for(M=[J].concat(M),q=M.length;
--q>-1;
){"string"==typeof(c=M[q][L])&&"="===c.charAt(1)&&(M[q][L]=J[L]+Number(c.charAt(0)+c.substr(2)))
}}if(I=M.length-2,0>I){return b[0]=new B(M[0][L],0,0,M[-1>I?0:1][L]),b
}for(q=0;
I>q;
q++){p=M[q][L],o=M[q+1][L],b[q]=new B(p,0,0,o),K&&(g=M[q+2][L],G[q]=(G[q]||0)+(o-p)*(o-p),F[q]=(F[q]||0)+(g-o)*(g-o))
}return b[q]=new B(M[q][L],0,0,M[q+1][L]),b
},w=function(M,K,J,I,k,j){var h,e,d,c,b,R,Q,P,O={},N=[],L=j||M[0];
k="string"==typeof k?","+k+",":A,null==K&&(K=1);
for(e in M[0]){N.push(e)
}if(M.length>1){for(P=M[M.length-1],Q=!0,h=N.length;
--h>-1;
){if(e=N[h],Math.abs(L[e]-P[e])>0.05){Q=!1;
break
}}Q&&(M=M.concat(),j&&M.unshift(j),M.push(M[1]),j=M[M.length-3])
}for(G.length=F.length=E.length=0,h=N.length;
--h>-1;
){e=N[h],D[e]=-1!==k.indexOf(","+e+","),O[e]=x(M,e,D[e],j)
}for(h=G.length;
--h>-1;
){G[h]=Math.sqrt(G[h]),F[h]=Math.sqrt(F[h])
}if(!I){for(h=N.length;
--h>-1;
){if(D[e]){for(d=O[N[h]],R=d.length-1,c=0;
R>c;
c++){b=d[c+1].da/F[c]+d[c].da/G[c]||0,E[c]=(E[c]||0)+b*b
}}}for(h=E.length;
--h>-1;
){E[h]=Math.sqrt(E[h])
}}for(h=N.length,c=J?4:1;
--h>-1;
){e=N[h],d=O[e],y(d,K,J,I,D[e]),Q&&(d.splice(0,c),d.splice(d.length-c,c))
}return O
},v=function(Y,X,W){X=X||"soft";
var V,U,T,S,R,Q,P,O,N,M,L,K={},J="cubic"===X?3:2,I="soft"===X,g=[];
if(I&&W&&(Y=[W].concat(Y)),null==Y||Y.length<J+1){throw"invalid Bezier data"
}for(N in Y[0]){g.push(N)
}for(Q=g.length;
--Q>-1;
){for(N=g[Q],K[N]=R=[],M=0,O=Y.length,P=0;
O>P;
P++){V=null==W?Y[P][N]:"string"==typeof(L=Y[P][N])&&"="===L.charAt(1)?W[N]+Number(L.charAt(0)+L.substr(2)):Number(L),I&&P>1&&O-1>P&&(R[M++]=(V+R[M-2])/2),R[M++]=V
}for(O=M-J+1,M=0,P=0;
O>P;
P+=J){V=R[P],U=R[P+1],T=R[P+2],S=2===J?0:R[P+3],R[M++]=L=3===J?new B(V,U,T,S):new B(V,(2*U+V)/3,(2*U+T)/3,T)
}R.length=M
}return K
},u=function(W,V,U){for(var T,S,R,Q,P,O,N,M,L,K,J,I=1/U,q=W.length;
--q>-1;
){for(K=W[q],R=K.a,Q=K.d-R,P=K.c-R,O=K.b-R,T=S=0,M=1;
U>=M;
M++){N=I*M,L=1-N,T=S-(S=(N*N*Q+3*L*(N*P+L*O))*N),J=q*U+M-1,V[J]=(V[J]||0)+T*T
}}},t=function(Q,P){P=P>>0||6;
var O,N,M,L,K=[],J=[],I=0,q=0,p=P-1,o=[],n=[];
for(O in Q){u(Q[O],K,P)
}for(M=K.length,N=0;
M>N;
N++){I+=Math.sqrt(K[N]),L=N%P,n[L]=I,L===p&&(q+=I,L=N/P>>0,o[L]=n,J[L]=q,I=0,n=[])
}return{length:q,lengths:J,segments:o}
},s=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.6",API:2,global:!0,init:function(Q,P,O){this._target=Q,P instanceof Array&&(P={values:P}),this._func={},this._round={},this._props=[],this._timeRes=null==P.timeResolution?6:parseInt(P.timeResolution,10);
var N,M,L,K,J,I=P.values||[],q={},o=I[0],m=P.autoRotate||O.vars.orientToBezier;
this._autoRotate=m?m instanceof Array?m:[["x","y","rotation",m===!0?0:Number(m)||0]]:null;
for(N in o){this._props.push(N)
}for(L=this._props.length;
--L>-1;
){N=this._props[L],this._overwriteProps.push(N),M=this._func[N]="function"==typeof Q[N],q[N]=M?Q[N.indexOf("set")||"function"!=typeof Q["get"+N.substr(3)]?N:"get"+N.substr(3)]():parseFloat(Q[N]),J||q[N]!==I[0][N]&&(J=q)
}if(this._beziers="cubic"!==P.type&&"quadratic"!==P.type&&"soft"!==P.type?w(I,isNaN(P.curviness)?1:P.curviness,!1,"thruBasic"===P.type,P.correlate,J):v(I,P.type,q),this._segCount=this._beziers[N].length,this._timeRes){var l=t(this._beziers,this._timeRes);
this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length
}if(m=this._autoRotate){for(this._initialRotations=[],m[0] instanceof Array||(this._autoRotate=m=[m]),L=m.length;
--L>-1;
){for(K=0;
3>K;
K++){N=m[L][K],this._func[N]="function"==typeof Q[N]?Q[N.indexOf("set")||"function"!=typeof Q["get"+N.substr(3)]?N:"get"+N.substr(3)]:!1
}N=m[L][2],this._initialRotations[L]=(this._func[N]?this._func[N].call(this._target):this._target[N])||0
}}return this._startRatio=O.vars.runBackwards?1:0,!0
},set:function(ad){var ac,ab,aa,Z,Y,X,W,V,U,T,S=this._segCount,R=this._func,Q=this._target,P=ad!==this._startRatio;
if(this._timeRes){if(U=this._lengths,T=this._curSeg,ad*=this._length,aa=this._li,ad>this._l2&&S-1>aa){for(V=S-1;
V>aa&&(this._l2=U[++aa])<=ad;
){}this._l1=U[aa-1],this._li=aa,this._curSeg=T=this._segments[aa],this._s2=T[this._s1=this._si=0]
}else{if(ad<this._l1&&aa>0){for(;
aa>0&&(this._l1=U[--aa])>=ad;
){}0===aa&&ad<this._l1?this._l1=0:aa++,this._l2=U[aa],this._li=aa,this._curSeg=T=this._segments[aa],this._s1=T[(this._si=T.length-1)-1]||0,this._s2=T[this._si]
}}if(ac=aa,ad-=this._l1,aa=this._si,ad>this._s2&&aa<T.length-1){for(V=T.length-1;
V>aa&&(this._s2=T[++aa])<=ad;
){}this._s1=T[aa-1],this._si=aa
}else{if(ad<this._s1&&aa>0){for(;
aa>0&&(this._s1=T[--aa])>=ad;
){}0===aa&&ad<this._s1?this._s1=0:aa++,this._s2=T[aa],this._si=aa
}}X=(aa+(ad-this._s1)/(this._s2-this._s1))*this._prec||0
}else{ac=0>ad?0:ad>=1?S-1:S*ad>>0,X=(ad-ac*(1/S))*S
}for(ab=1-X,aa=this._props.length;
--aa>-1;
){Z=this._props[aa],Y=this._beziers[Z][ac],W=(X*X*Y.da+3*ab*(X*Y.ca+ab*Y.ba))*X+Y.a,this._round[Z]&&(W=Math.round(W)),R[Z]?Q[Z](W):Q[Z]=W
}if(this._autoRotate){var O,N,M,L,K,J,I,a=this._autoRotate;
for(aa=a.length;
--aa>-1;
){Z=a[aa][2],J=a[aa][3]||0,I=a[aa][4]===!0?1:H,Y=this._beziers[a[aa][0]],O=this._beziers[a[aa][1]],Y&&O&&(Y=Y[ac],O=O[ac],N=Y.a+(Y.b-Y.a)*X,L=Y.b+(Y.c-Y.b)*X,N+=(L-N)*X,L+=(Y.c+(Y.d-Y.c)*X-L)*X,M=O.a+(O.b-O.a)*X,K=O.b+(O.c-O.b)*X,M+=(K-M)*X,K+=(O.c+(O.d-O.c)*X-K)*X,W=P?Math.atan2(K-M,L-N)*I+J:this._initialRotations[aa],R[Z]?Q[Z](W):Q[Z]=W)
}}}}),r=s.prototype;
s.bezierThrough=w,s.cubicToQuadratic=z,s._autoCSS=!0,s.quadraticToCubic=function(e,d,f){return new B(e,(2*d+e)/3,(2*d+f)/3,f)
},s._cssRegister=function(){var g=C.CSSPlugin;
if(g){var f=g._internals,k=f._parseToProxy,j=f._setPluginRatio,h=f.CSSPropTween;
f._registerComplexSpecialProp("bezier",{parser:function(Q,P,O,N,M,L){P instanceof Array&&(P={values:P}),L=new s;
var K,J,I,p=P.values,e=p.length-1,d=[],c={};
if(0>e){return M
}for(K=0;
e>=K;
K++){I=k(Q,p[K],N,M,L,e!==K),d[K]=I.end
}for(J in P){c[J]=P[J]
}return c.values=d,M=new h(Q,"bezier",0,0,I.pt,2),M.data=I,M.plugin=L,M.setRatio=j,0===c.autoRotate&&(c.autoRotate=!0),!c.autoRotate||c.autoRotate instanceof Array||(K=c.autoRotate===!0?0:Number(c.autoRotate),c.autoRotate=null!=I.end.left?[["left","top","rotation",K,!1]]:null!=I.end.x?[["x","y","rotation",K,!1]]:!1),c.autoRotate&&(N._transform||N._enableTransforms(!1),I.autoRotate=N._target._gsTransform,I.proxy.rotation=I.autoRotate.rotation||0),L._onInitTween(I.proxy,c,N._tween),M
}})
}},r._roundProps=function(f,e){for(var h=this._overwriteProps,g=h.length;
--g>-1;
){(f[h[g]]||f.bezier||f.bezierThrough)&&(this._round[h[g]]=e)
}},r._kill=function(f){var e,h,g=this._props;
for(e in this._beziers){if(e in f){for(delete this._beziers[e],delete this._func[e],h=g.length;
--h>-1;
){g[h]===e&&g.splice(h,1)
}}}return this._super._kill.call(this,f)
}
}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(aW,aV){var aU,aR,aQ,aP,aO=function(){aW.call(this,"css"),this._overwriteProps.length=0,this.setRatio=aO.prototype.setRatio
},aN=_gsScope._gsDefine.globals,aK={},aJ=aO.prototype=new aW("css");
aJ.constructor=aO,aO.version="1.18.5",aO.API=2,aO.defaultTransformPerspective=0,aO.defaultSkewType="compensated",aO.defaultSmoothOrigin=!0,aJ="px",aO.suffixMap={top:aJ,right:aJ,bottom:aJ,left:aJ,width:aJ,height:aJ,fontSize:aJ,padding:aJ,margin:aJ,perspective:aJ,lineHeight:""};
var aI,aH,aG,aE,aD,aC,aB=/(?:\-|\.|\b)(\d|\.|e\-)+/g,aA=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,az=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,ay=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,ax=/(?:\d|\-|\+|=|#|\.)*/g,aw=/opacity *= *([^)]*)/i,av=/opacity:([^;]*)/i,au=/alpha\(opacity *=.+?\)/i,at=/^(rgb|hsl)/,ar=/([A-Z])/g,bw=/-([a-z])/gi,bv=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,bu=function(d,c){return c.toUpperCase()
},bt=/(?:Left|Right|Width)/i,bq=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,bp=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,bo=/,(?=[^\)]*(?:\(|$))/gi,bn=/[\s,\(]/i,bm=Math.PI/180,bj=180/Math.PI,bi={},bh=document,bg=function(b){return bh.createElementNS?bh.createElementNS("http://www.w3.org/1999/xhtml",b):bh.createElement(b)
},bf=bg("div"),be=bg("img"),bc=aO._internals={_specialProps:aK},bb=navigator.userAgent,a9=function(){var d=bb.indexOf("Android"),c=bg("a");
return aG=-1!==bb.indexOf("Safari")&&-1===bb.indexOf("Chrome")&&(-1===d||Number(bb.substr(d+8,1))>3),aD=aG&&Number(bb.substr(bb.indexOf("Version/")+8,1))<6,aE=-1!==bb.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(bb)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(bb))&&(aC=parseFloat(RegExp.$1)),c?(c.style.cssText="top:1px;opacity:.55;",/^0.55/.test(c.style.opacity)):!1
}(),a8=function(b){return aw.test("string"==typeof b?b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100:1
},a7=function(b){window.console&&console.log(b)
},a6="",a5="",a4=function(g,f){f=f||bf;
var k,j,h=f.style;
if(void 0!==h[g]){return g
}for(g=g.charAt(0).toUpperCase()+g.substr(1),k=["O","Moz","ms","Ms","Webkit"],j=5;
--j>-1&&void 0===h[k[j]+g];
){}return j>=0?(a5=3===j?"ms":k[j],a6="-"+a5.toLowerCase()+"-",a5+g):null
},a3=bh.defaultView?bh.defaultView.getComputedStyle:function(){},a2=aO.getStyle=function(h,g,m,l,k){var j;
return a9||"opacity"!==g?(!l&&h.style[g]?j=h.style[g]:(m=m||a3(h))?j=m[g]||m.getPropertyValue(g)||m.getPropertyValue(g.replace(ar,"-$1").toLowerCase()):h.currentStyle&&(j=h.currentStyle[g]),null==k||j&&"none"!==j&&"auto"!==j&&"auto auto"!==j?j:k):a8(h)
},a0=bc.convertToPixels=function(z,y,x,w,v){if("px"===w||!w){return x
}if("auto"===w||!x){return 0
}var u,t,s,r=bt.test(y),q=z,p=bf.style,g=0>x,b=1===x;
if(g&&(x=-x),b&&(x*=100),"%"===w&&-1!==y.indexOf("border")){u=x/100*(r?z.clientWidth:z.clientHeight)
}else{if(p.cssText="border:0 solid red;position:"+a2(z,"position")+";line-height:0;","%"!==w&&q.appendChild&&"v"!==w.charAt(0)&&"rem"!==w){p[r?"borderLeftWidth":"borderTopWidth"]=x+w
}else{if(q=z.parentNode||bh.body,t=q._gsCache,s=aV.ticker.frame,t&&r&&t.time===s){return t.width*x/100
}p[r?"width":"height"]=x+w
}q.appendChild(bf),u=parseFloat(bf[r?"offsetWidth":"offsetHeight"]),q.removeChild(bf),r&&"%"===w&&aO.cacheWidths!==!1&&(t=q._gsCache=q._gsCache||{},t.time=s,t.width=u/x*100),0!==u||v||(u=a0(z,y,x,w,!0))
}return b&&(u/=100),g?-u:u
},bG=bc.calculateOffset=function(g,f,k){if("absolute"!==a2(g,"position",k)){return 0
}var j="left"===f?"Left":"Top",h=a2(g,"margin"+j,k);
return g["offset"+j]-(a0(g,f,parseFloat(h),h.replace(ax,""))||0)
},aY=function(h,g){var m,l,k,j={};
if(g=g||a3(h,null)){if(m=g.length){for(;
--m>-1;
){k=g[m],(-1===k.indexOf("-transform")||bM===k)&&(j[k.replace(bw,bu)]=g.getPropertyValue(k))
}}else{for(m in g){(-1===m.indexOf("Transform")||bz===m)&&(j[m]=g[m])
}}}else{if(g=h.currentStyle||h.style){for(m in g){"string"==typeof m&&void 0===j[m]&&(j[m.replace(bw,bu)]=g[m])
}}}return a9||(j.opacity=a8(h)),l=bI(h,g,!1),j.rotation=l.rotation,j.skewX=l.skewX,j.scaleX=l.scaleX,j.scaleY=l.scaleY,j.x=l.x,j.y=l.y,bl&&(j.z=l.z,j.rotationX=l.rotationX,j.rotationY=l.rotationY,j.scaleZ=l.scaleZ),j.filters&&delete j.filters,j
},bB=function(t,s,r,q,p){var o,n,m,l={},k=t.style;
for(n in r){"cssText"!==n&&"length"!==n&&isNaN(n)&&(s[n]!==(o=r[n])||p&&p[n])&&-1===n.indexOf("Origin")&&("number"==typeof o||"string"==typeof o)&&(l[n]="auto"!==o||"left"!==n&&"top"!==n?""!==o&&"auto"!==o&&"none"!==o||"string"!=typeof s[n]||""===s[n].replace(ay,"")?o:0:bG(t,n),void 0!==k[n]&&(m=new an(k,n,k[n],m)))
}if(q){for(n in q){"className"!==n&&(l[n]=q[n])
}}return{difs:l,firstMPT:m}
},bd={width:["Left","Right"],height:["Top","Bottom"]},aF=["marginLeft","marginRight","marginTop","marginBottom"],ak=function(h,g,m){if("svg"===(h.nodeName+"").toLowerCase()){return(m||a3(h))[g]||0
}if(h.getBBox&&ao(h)){return h.getBBox()[g]||0
}var l=parseFloat("width"===g?h.offsetWidth:h.offsetHeight),k=bd[g],j=k.length;
for(m=m||a3(h,null);
--j>-1;
){l-=parseFloat(a2(h,"padding"+k[j],m,!0))||0,l-=parseFloat(a2(h,"border"+k[j]+"Width",m,!0))||0
}return l
},ad=function(h,g){if("contain"===h||"auto"===h||"auto auto"===h){return h+" "
}(null==h||""===h)&&(h="0 0");
var m,l=h.split(" "),k=-1!==h.indexOf("left")?"0%":-1!==h.indexOf("right")?"100%":l[0],j=-1!==h.indexOf("top")?"0%":-1!==h.indexOf("bottom")?"100%":l[1];
if(l.length>3&&!g){for(l=h.split(", ").join(",").split(","),h=[],m=0;
m<l.length;
m++){h.push(ad(l[m]))
}return h.join(",")
}return null==j?j="center"===k?"50%":"0":"center"===j&&(j="50%"),("center"===k||isNaN(parseFloat(k))&&-1===(k+"").indexOf("="))&&(k="50%"),h=k+" "+j+(l.length>2?" "+l[2]:""),g&&(g.oxp=-1!==k.indexOf("%"),g.oyp=-1!==j.indexOf("%"),g.oxr="="===k.charAt(1),g.oyr="="===j.charAt(1),g.ox=parseFloat(k.replace(ay,"")),g.oy=parseFloat(j.replace(ay,"")),g.v=h),g||h
},bL=function(d,c){return"string"==typeof d&&"="===d.charAt(1)?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-parseFloat(c)||0
},bC=function(d,c){return null==d?c:"string"==typeof d&&"="===d.charAt(1)?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2))+c:parseFloat(d)||0
},bk=function(t,s,r,q){var p,o,n,m,l,k=0.000001;
return null==t?m=s:"number"==typeof t?m=t:(p=360,o=t.split("_"),l="="===t.charAt(1),n=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(o[0].substr(2)):parseFloat(o[0]))*(-1===t.indexOf("rad")?1:bj)-(l?0:s),o.length&&(q&&(q[r]=s+n),-1!==t.indexOf("short")&&(n%=p,n!==n%(p/2)&&(n=0>n?n+p:n-p)),-1!==t.indexOf("_cw")&&0>n?n=(n+9999999999*p)%p-(n/p|0)*p:-1!==t.indexOf("ccw")&&n>0&&(n=(n-9999999999*p)%p-(n/p|0)*p)),m=s+n),k>m&&m>-k&&(m=0),m
},aL={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},al=function(e,d,f){return e=0>e?e+1:e>1?e-1:e,255*(1>6*e?d+(f-d)*e*6:0.5>e?f:2>3*e?d+(f-d)*(2/3-e)*6:d)+0.5|0
},ae=aO.parseColor=function(z,y){var x,w,v,u,t,s,r,q,p,o,n;
if(z){if("number"==typeof z){x=[z>>16,z>>8&255,255&z]
}else{if(","===z.charAt(z.length-1)&&(z=z.substr(0,z.length-1)),aL[z]){x=aL[z]
}else{if("#"===z.charAt(0)){4===z.length&&(w=z.charAt(1),v=z.charAt(2),u=z.charAt(3),z="#"+w+w+v+v+u+u),z=parseInt(z.substr(1),16),x=[z>>16,z>>8&255,255&z]
}else{if("hsl"===z.substr(0,3)){if(x=n=z.match(aB),y){if(-1!==z.indexOf("=")){return z.match(aA)
}}else{t=Number(x[0])%360/360,s=Number(x[1])/100,r=Number(x[2])/100,v=0.5>=r?r*(s+1):r+s-r*s,w=2*r-v,x.length>3&&(x[3]=Number(z[3])),x[0]=al(t+1/3,w,v),x[1]=al(t,w,v),x[2]=al(t-1/3,w,v)
}}else{x=z.match(aB)||aL.transparent
}}}x[0]=Number(x[0]),x[1]=Number(x[1]),x[2]=Number(x[2]),x.length>3&&(x[3]=Number(x[3]))
}}else{x=aL.black
}return y&&!n&&(w=x[0]/255,v=x[1]/255,u=x[2]/255,q=Math.max(w,v,u),p=Math.min(w,v,u),r=(q+p)/2,q===p?t=s=0:(o=q-p,s=r>0.5?o/(2-q-p):o/(q+p),t=q===w?(v-u)/o+(u>v?6:0):q===v?(u-w)/o+2:(w-v)/o+4,t*=60),x[0]=t+0.5|0,x[1]=100*s+0.5|0,x[2]=100*r+0.5|0),x
},bN=function(k,j){var q,p,o,n=k.match(bE)||[],m=0,l=n.length?"":k;
for(q=0;
q<n.length;
q++){p=n[q],o=k.substr(m,k.indexOf(p,m)-m),m+=o.length+p.length,p=ae(p,j),3===p.length&&p.push(1),l+=o+(j?"hsla("+p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:"rgba("+p.join(","))+")"
}return l+k.substr(m)
},bE="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
for(aJ in aL){bE+="|"+aJ+"\\b"
}bE=new RegExp(bE+")","gi"),aO.colorStringFilter=function(e){var d,f=e[0]+e[1];
bE.test(f)&&(d=-1!==f.indexOf("hsl(")||-1!==f.indexOf("hsla("),e[0]=bN(e[0],d),e[1]=bN(e[1],d)),bE.lastIndex=0
},aV.defaultStringFilter||(aV.defaultStringFilter=aO.colorStringFilter);
var br=function(x,w,v,u){if(null==x){return function(b){return b
}
}var t,s=w?(x.match(bE)||[""])[0]:"",r=x.split(s).join("").match(az)||[],q=x.substr(0,x.indexOf(r[0])),p=")"===x.charAt(x.length-1)?")":"",o=-1!==x.indexOf(" ")?" ":",",n=r.length,m=n>0?r[0].replace(aB,""):"";
return n?t=w?function(e){var d,c,g,f;
if("number"==typeof e){e+=m
}else{if(u&&bo.test(e)){for(f=e.replace(bo,"|").split("|"),g=0;
g<f.length;
g++){f[g]=t(f[g])
}return f.join(",")
}}if(d=(e.match(bE)||[s])[0],c=e.split(d).join("").match(az)||[],g=c.length,n>g--){for(;
++g<n;
){c[g]=v?c[(g-1)/2|0]:r[g]
}}return q+c.join(o)+o+d+p+(-1!==e.indexOf("inset")?" inset":"")
}:function(e){var d,g,c;
if("number"==typeof e){e+=m
}else{if(u&&bo.test(e)){for(g=e.replace(bo,"|").split("|"),c=0;
c<g.length;
c++){g[c]=t(g[c])
}return g.join(",")
}}if(d=e.match(az)||[],c=d.length,n>c--){for(;
++c<n;
){d[c]=v?d[(c-1)/2|0]:r[c]
}}return q+d.join(o)+p
}:function(b){return b
}
},aS=function(b){return b=b.split(","),function(r,q,p,o,n,m,l){var k,a=(q+"").split(" ");
for(l={},k=0;
4>k;
k++){l[b[k]]=a[k]=a[k]||a[(k-1)/2>>0]
}return o.parse(r,l,n,m)
}
},an=(bc._setPluginRatio=function(t){this.plugin.setRatio(t);
for(var s,r,q,p,o,n=this.data,m=n.proxy,l=n.firstMPT,k=0.000001;
l;
){s=m[l.v],l.r?s=Math.round(s):k>s&&s>-k&&(s=0),l.t[l.p]=s,l=l._next
}if(n.autoRotate&&(n.autoRotate.rotation=m.rotation),1===t||0===t){for(l=n.firstMPT,o=1===t?"e":"b";
l;
){if(r=l.t,r.type){if(1===r.type){for(p=r.xs0+r.s+r.xs1,q=1;
q<r.l;
q++){p+=r["xn"+q]+r["xs"+(q+1)]
}r[o]=p
}}else{r[o]=r.s+r.xs0
}l=l._next
}}},function(g,f,k,j,h){this.t=g,this.p=f,this.v=k,this.r=h,j&&(j._prev=this,this._next=j)
}),ag=(bc._parseToProxy=function(F,E,D,C,B,A){var z,y,x,w,v,u=C,t={},s={},r=D._transform,q=bi;
for(D._transform=null,bi=E,C=v=D.parse(F,E,C,B),bi=q,A&&(D._transform=r,u&&(u._prev=null,u._prev&&(u._prev._next=null)));
C&&C!==u;
){if(C.type<=1&&(y=C.p,s[y]=C.s+C.c,t[y]=C.s,A||(w=new an(C,"s",y,w,C.r),C.c=0),1===C.type)){for(z=C.l;
--z>0;
){x="xn"+z,y=C.p+"_"+x,s[y]=C.data[x],t[y]=C[x],A||(w=new an(C,x,y,w,C.rxp[x]))
}}C=C._next
}return{proxy:t,end:s,firstMPT:w,pt:v}
},bc.CSSPropTween=function(v,u,t,s,r,q,p,o,n,f,c){this.t=v,this.p=u,this.s=t,this.c=s,this.n=p||u,v instanceof ag||aP.push(this.n),this.r=o,this.type=q||0,n&&(this.pr=n,aU=!0),this.b=void 0===f?t:f,this.e=void 0===c?t+s:c,r&&(this._next=r,r._prev=this)
}),bP=function(j,h,o,n,m,l){var k=new ag(j,h,o,n-o,m,-1,l);
return k.b=o,k.e=k.xs0=n,k
},bH=aO.parseComplex=function(ba,aa,Z,Y,X,W,V,U,T,S){Z=Z||W||"",V=new ag(ba,aa,0,0,V,S?2:1,null,!1,U,Z,Y),Y+="",X&&bE.test(Y+Z)&&(Y=[Z,Y],aO.colorStringFilter(Y),Z=Y[0],Y=Y[1]);
var R,Q,P,O,K,I,G,F,r,q,k,g,N,M=Z.split(", ").join(",").split(" "),L=Y.split(", ").join(",").split(" "),J=M.length,H=aI!==!1;
for((-1!==Y.indexOf(",")||-1!==Z.indexOf(","))&&(M=M.join(" ").replace(bo,", ").split(" "),L=L.join(" ").replace(bo,", ").split(" "),J=M.length),J!==L.length&&(M=(W||"").split(" "),J=M.length),V.plugin=T,V.setRatio=S,bE.lastIndex=0,R=0;
J>R;
R++){if(O=M[R],K=L[R],F=parseFloat(O),F||0===F){V.appendXtra("",F,bL(K,F),K.replace(aA,""),H&&-1!==K.indexOf("px"),!0)
}else{if(X&&bE.test(O)){g=K.indexOf(")")+1,g=")"+(g?K.substr(g):""),N=-1!==K.indexOf("hsl")&&a9,O=ae(O,N),K=ae(K,N),r=O.length+K.length>6,r&&!a9&&0===K[3]?(V["xs"+V.l]+=V.l?" transparent":"transparent",V.e=V.e.split(L[R]).join("transparent")):(a9||(r=!1),N?V.appendXtra(r?"hsla(":"hsl(",O[0],bL(K[0],O[0]),",",!1,!0).appendXtra("",O[1],bL(K[1],O[1]),"%,",!1).appendXtra("",O[2],bL(K[2],O[2]),r?"%,":"%"+g,!1):V.appendXtra(r?"rgba(":"rgb(",O[0],K[0]-O[0],",",!0,!0).appendXtra("",O[1],K[1]-O[1],",",!0).appendXtra("",O[2],K[2]-O[2],r?",":g,!0),r&&(O=O.length<4?1:O[3],V.appendXtra("",O,(K.length<4?1:K[3])-O,g,!1))),bE.lastIndex=0
}else{if(I=O.match(aB)){if(G=K.match(aA),!G||G.length!==I.length){return V
}for(P=0,Q=0;
Q<I.length;
Q++){k=I[Q],q=O.indexOf(k,P),V.appendXtra(O.substr(P,q-P),Number(k),bL(G[Q],k),"",H&&"px"===O.substr(q+k.length,2),0===Q),P=q+k.length
}V["xs"+V.l]+=O.substr(P)
}else{V["xs"+V.l]+=V.l||V["xs"+V.l]?" "+K:K
}}}}if(-1!==Y.indexOf("=")&&V.data){for(g=V.xs0+V.data.s,R=1;
R<V.l;
R++){g+=V["xs"+R]+V.data["xn"+R]
}V.e=g+V["xs"+R]
}return V.l||(V.type=-1,V.xs0=V.e),V.xfirst||V
},bx=9;
for(aJ=ag.prototype,aJ.l=aJ.pr=0;
--bx>0;
){aJ["xn"+bx]=0,aJ["xs"+bx]=""
}aJ.xs0="",aJ._next=aJ._prev=aJ.xfirst=aJ.data=aJ.plugin=aJ.setRatio=aJ.rxp=null,aJ.appendXtra=function(k,j,q,p,o,n){var m=this,l=m.l;
return m["xs"+l]+=n&&(l||m["xs"+l])?" "+k:k||"",q||0===l||m.plugin?(m.l++,m.type=m.setRatio?2:1,m["xs"+m.l]=p||"",l>0?(m.data["xn"+l]=j+q,m.rxp["xn"+l]=o,m["xn"+l]=j,m.plugin||(m.xfirst=new ag(m,"xn"+l,j,q,m.xfirst||m,0,m.n,o,m.pr),m.xfirst.xs0=0),m):(m.data={s:j+q},m.rxp={},m.s=j,m.c=q,m.r=o,m)):(m["xs"+l]+=j+(p||""),m)
};
var aX=function(d,c){c=c||{},this.p=c.prefix?a4(d)||d:d,aK[d]=aK[this.p]=this,this.format=c.formatter||br(c.defaultValue,c.color,c.collapsible,c.multi),c.parser&&(this.parse=c.parser),this.clrs=c.color,this.multi=c.multi,this.keyword=c.keyword,this.dflt=c.defaultValue,this.pr=c.priority||0
},ap=bc._registerComplexSpecialProp=function(j,h,o){"object"!=typeof h&&(h={parser:o});
var n,m,l=j.split(","),k=h.defaultValue;
for(o=o||[k],n=0;
n<l.length;
n++){h.prefix=0===n&&h.prefix,h.defaultValue=o[n]||k,m=new aX(l[n],h)
}},ai=function(d){if(!aK[d]){var c=d.charAt(0).toUpperCase()+d.substr(1)+"Plugin";
ap(d,{parser:function(b,q,p,o,n,m,l){var h=aN.com.greensock.plugins[c];
return h?(h._cssRegister(),aK[p].parse(b,q,p,o,n,m,l)):(a7("Error: "+c+" js file not loaded."),n)
}})
}};
aJ=aX.prototype,aJ.parseComplex=function(z,y,x,w,v,u){var t,s,r,q,p,o,n=this.keyword;
if(this.multi&&(bo.test(x)||bo.test(y)?(s=y.replace(bo,"|").split("|"),r=x.replace(bo,"|").split("|")):n&&(s=[y],r=[x])),r){for(q=r.length>s.length?r.length:s.length,t=0;
q>t;
t++){y=s[t]=s[t]||this.dflt,x=r[t]=r[t]||this.dflt,n&&(p=y.indexOf(n),o=x.indexOf(n),p!==o&&(-1===o?s[t]=s[t].split(n).join(""):-1===p&&(s[t]+=" "+n)))
}y=s.join(", "),x=r.join(", ")
}return bH(z,this.p,y,x,this.clrs,this.dflt,w,this.pr,v,u)
},aJ.parse=function(j,e,o,n,m,l,k){return this.parseComplex(j.style,this.format(a2(j,this.p,aQ,!1,this.dflt)),this.format(e),m,l)
},aO.registerSpecialProp=function(e,d,f){ap(e,{parser:function(b,p,o,n,m,l,k){var c=new ag(b,o,0,0,m,2,o,!1,f);
return c.plugin=l,c.setRatio=d(b,p,n._tween,o),c
},priority:f})
},aO.useSVGTransformAttr=aG||aE;
var ab,bJ="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),bz=a4("transform"),bM=a6+"transform",bD=a4("transformOrigin"),bl=null!==a4("perspective"),aM=bc.Transform=function(){this.perspective=parseFloat(aO.defaultTransformPerspective)||0,this.force3D=aO.defaultForce3D!==!1&&bl?aO.defaultForce3D||"auto":!1
},am=window.SVGElement,af=function(h,g,m){var l,k=bh.createElementNS("http://www.w3.org/2000/svg",h),j=/([a-z])([A-Z])/g;
for(l in m){k.setAttributeNS(null,l.replace(j,"$1-$2").toLowerCase(),m[l])
}return g.appendChild(k),k
},bO=bh.documentElement,bF=function(){var f,e,h,g=aC||/Android/i.test(bb)&&!window.chrome;
return bh.createElementNS&&!g&&(f=af("svg",bO),e=af("rect",f,{width:100,height:50,x:100}),h=e.getBoundingClientRect().width,e.style[bD]="50% 50%",e.style[bz]="scaleX(0.5)",g=h===e.getBoundingClientRect().width&&!(aE&&bl),bO.removeChild(f)),g
}(),bs=function(R,Q,P,O,N,M){var L,K,J,I,H,G,F,E,D,C,B,A,z,y,x=R._gsTransform,g=bQ(R,!0);
x&&(z=x.xOrigin,y=x.yOrigin),(!O||(L=O.split(" ")).length<2)&&(F=R.getBBox(),Q=ad(Q).split(" "),L=[(-1!==Q[0].indexOf("%")?parseFloat(Q[0])/100*F.width:parseFloat(Q[0]))+F.x,(-1!==Q[1].indexOf("%")?parseFloat(Q[1])/100*F.height:parseFloat(Q[1]))+F.y]),P.xOrigin=I=parseFloat(L[0]),P.yOrigin=H=parseFloat(L[1]),O&&g!==ah&&(G=g[0],F=g[1],E=g[2],D=g[3],C=g[4],B=g[5],A=G*D-F*E,K=I*(D/A)+H*(-E/A)+(E*B-D*C)/A,J=I*(-F/A)+H*(G/A)-(G*B-F*C)/A,I=P.xOrigin=L[0]=K,H=P.yOrigin=L[1]=J),x&&(M&&(P.xOffset=x.xOffset,P.yOffset=x.yOffset,x=P),N||N!==!1&&aO.defaultSmoothOrigin!==!1?(K=I-z,J=H-y,x.xOffset+=K*g[0]+J*g[2]-K,x.yOffset+=K*g[1]+J*g[3]-J):x.xOffset=x.yOffset=0),M||R.setAttribute("data-svg-origin",L.join(" "))
},aT=function(b){try{return b.getBBox()
}catch(b){}},ao=function(b){return !!(am&&b.getBBox&&b.getCTM&&aT(b)&&(!b.parentNode||b.parentNode.getBBox&&b.parentNode.getCTM))
},ah=[1,0,0,1,0,0],bQ=function(v,u){var t,s,r,q,p,o,n=v._gsTransform||new aM,m=100000,l=v.style;
if(bz?s=a2(v,bM,null,!0):v.currentStyle&&(s=v.currentStyle.filter.match(bq),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),n.x||0,n.y||0].join(","):""),t=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,t&&bz&&((o="none"===a3(v).display)||!v.parentNode)&&(o&&(q=l.display,l.display="block"),v.parentNode||(p=1,bO.appendChild(v)),s=a2(v,bM,null,!0),t=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,q?l.display=q:o&&aj(l,"display"),p&&bO.removeChild(v)),(n.svg||v.getBBox&&ao(v))&&(t&&-1!==(l[bz]+"").indexOf("matrix")&&(s=l[bz],t=0),r=v.getAttribute("transform"),t&&r&&(-1!==r.indexOf("matrix")?(s=r,t=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",t=0))),t){return ah
}for(r=(s||"").match(aB)||[],bx=r.length;
--bx>-1;
){q=Number(r[bx]),r[bx]=(p=q-(q|=0))?(p*m+(0>p?-0.5:0.5)|0)/m+q:q
}return u&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r
},bI=bc.getTransform=function(ck,cj,ci,ch){if(ck._gsTransform&&ci&&!ch){return ck._gsTransform
}var cg,cf,ce,cd,cc,cb,ca=ci?ck._gsTransform||new aM:new aM,b9=ca.scaleX<0,b8=0.00002,b7=100000,b6=bl?parseFloat(a2(ck,bD,cj,!1,"0 0 0").split(" ")[2])||ca.zOrigin||0:0,b5=parseFloat(aO.defaultTransformPerspective)||0;
if(ca.svg=!(!ck.getBBox||!ao(ck)),ca.svg&&(bs(ck,a2(ck,bD,cj,!1,"50% 50%")+"",ca,ck.getAttribute("data-svg-origin")),ab=aO.useSVGTransformAttr||bF),cg=bQ(ck),cg!==ah){if(16===cg.length){var b4,b3,b2,b1,b0,bZ=cg[0],bY=cg[1],bX=cg[2],bW=cg[3],bV=cg[4],bU=cg[5],bT=cg[6],bS=cg[7],bR=cg[8],ba=cg[9],aa=cg[10],Z=cg[12],Y=cg[13],X=cg[14],W=cg[11],V=Math.atan2(bT,aa);
ca.zOrigin&&(X=-ca.zOrigin,Z=bR*X-cg[12],Y=ba*X-cg[13],X=aa*X+ca.zOrigin-cg[14]),ca.rotationX=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),b4=bV*b1+bR*b0,b3=bU*b1+ba*b0,b2=bT*b1+aa*b0,bR=bV*-b0+bR*b1,ba=bU*-b0+ba*b1,aa=bT*-b0+aa*b1,W=bS*-b0+W*b1,bV=b4,bU=b3,bT=b2),V=Math.atan2(-bX,aa),ca.rotationY=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),b4=bZ*b1-bR*b0,b3=bY*b1-ba*b0,b2=bX*b1-aa*b0,ba=bY*b0+ba*b1,aa=bX*b0+aa*b1,W=bW*b0+W*b1,bZ=b4,bY=b3,bX=b2),V=Math.atan2(bY,bZ),ca.rotation=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),bZ=bZ*b1+bV*b0,b3=bY*b1+bU*b0,bU=bY*-b0+bU*b1,bT=bX*-b0+bT*b1,bY=b3),ca.rotationX&&Math.abs(ca.rotationX)+Math.abs(ca.rotation)>359.9&&(ca.rotationX=ca.rotation=0,ca.rotationY=180-ca.rotationY),ca.scaleX=(Math.sqrt(bZ*bZ+bY*bY)*b7+0.5|0)/b7,ca.scaleY=(Math.sqrt(bU*bU+ba*ba)*b7+0.5|0)/b7,ca.scaleZ=(Math.sqrt(bT*bT+aa*aa)*b7+0.5|0)/b7,ca.rotationX||ca.rotationY?ca.skewX=0:(ca.skewX=bV||bU?Math.atan2(bV,bU)*bj+ca.rotation:ca.skewX||0,Math.abs(ca.skewX)>90&&Math.abs(ca.skewX)<270&&(b9?(ca.scaleX*=-1,ca.skewX+=ca.rotation<=0?180:-180,ca.rotation+=ca.rotation<=0?180:-180):(ca.scaleY*=-1,ca.skewX+=ca.skewX<=0?180:-180))),ca.perspective=W?1/(0>W?-W:W):0,ca.x=Z,ca.y=Y,ca.z=X,ca.svg&&(ca.x-=ca.xOrigin-(ca.xOrigin*bZ-ca.yOrigin*bV),ca.y-=ca.yOrigin-(ca.yOrigin*bY-ca.xOrigin*bU))
}else{if(!bl||ch||!cg.length||ca.x!==cg[4]||ca.y!==cg[5]||!ca.rotationX&&!ca.rotationY){var U=cg.length>=6,T=U?cg[0]:1,J=cg[1]||0,g=cg[2]||0,b=U?cg[3]:1;
ca.x=cg[4]||0,ca.y=cg[5]||0,ce=Math.sqrt(T*T+J*J),cd=Math.sqrt(b*b+g*g),cc=T||J?Math.atan2(J,T)*bj:ca.rotation||0,cb=g||b?Math.atan2(g,b)*bj+cc:ca.skewX||0,Math.abs(cb)>90&&Math.abs(cb)<270&&(b9?(ce*=-1,cb+=0>=cc?180:-180,cc+=0>=cc?180:-180):(cd*=-1,cb+=0>=cb?180:-180)),ca.scaleX=ce,ca.scaleY=cd,ca.rotation=cc,ca.skewX=cb,bl&&(ca.rotationX=ca.rotationY=ca.z=0,ca.perspective=b5,ca.scaleZ=1),ca.svg&&(ca.x-=ca.xOrigin-(ca.xOrigin*T+ca.yOrigin*g),ca.y-=ca.yOrigin-(ca.xOrigin*J+ca.yOrigin*b))
}}ca.zOrigin=b6;
for(cf in ca){ca[cf]<b8&&ca[cf]>-b8&&(ca[cf]=0)
}}return ci&&(ck._gsTransform=ca,ca.svg&&(ab&&ck.style[bz]?aV.delayedCall(0.001,function(){aj(ck.style,bz)
}):!ab&&ck.getAttribute("transform")&&aV.delayedCall(0.001,function(){ck.removeAttribute("transform")
}))),ca
},by=function(X){var W,V,U=this.data,T=-U.rotation*bm,S=T+U.skewX*bm,R=100000,Q=(Math.cos(T)*U.scaleX*R|0)/R,P=(Math.sin(T)*U.scaleX*R|0)/R,O=(Math.sin(S)*-U.scaleY*R|0)/R,N=(Math.cos(S)*U.scaleY*R|0)/R,M=this.t.style,L=this.t.currentStyle;
if(L){V=P,P=-O,O=-V,W=L.filter,M.filter="";
var K,J,H=this.t.offsetWidth,F=this.t.offsetHeight,E="absolute"!==L.position,D="progid:DXImageTransform.Microsoft.Matrix(M11="+Q+", M12="+P+", M21="+O+", M22="+N,C=U.x+H*U.xPercent/100,v=U.y+F*U.yPercent/100;
if(null!=U.ox&&(K=(U.oxp?H*U.ox*0.01:U.ox)-H/2,J=(U.oyp?F*U.oy*0.01:U.oy)-F/2,C+=K-(K*Q+J*P),v+=J-(K*O+J*N)),E?(K=H/2,J=F/2,D+=", Dx="+(K-(K*Q+J*P)+C)+", Dy="+(J-(K*O+J*N)+v)+")"):D+=", sizingMethod='auto expand')",-1!==W.indexOf("DXImageTransform.Microsoft.Matrix(")?M.filter=W.replace(bp,D):M.filter=D+" "+W,(0===X||1===X)&&1===Q&&0===P&&0===O&&1===N&&(E&&-1===D.indexOf("Dx=0, Dy=0")||aw.test(W)&&100!==parseFloat(RegExp.$1)||-1===W.indexOf(W.indexOf("Alpha"))&&M.removeAttribute("filter")),!E){var u,p,I,G=8>aC?1:-1;
for(K=U.ieOffsetX||0,J=U.ieOffsetY||0,U.ieOffsetX=Math.round((H-((0>Q?-Q:Q)*H+(0>P?-P:P)*F))/2+C),U.ieOffsetY=Math.round((F-((0>N?-N:N)*F+(0>O?-O:O)*H))/2+v),bx=0;
4>bx;
bx++){p=aF[bx],u=L[p],V=-1!==u.indexOf("px")?parseFloat(u):a0(this.t,p,parseFloat(u),u.replace(ax,""))||0,I=V!==U[p]?2>bx?-U.ieOffsetX:-U.ieOffsetY:2>bx?K-U.ieOffsetX:J-U.ieOffsetY,M[p]=(U[p]=Math.round(V-I*(0===bx||2===bx?1:G)))+"px"
}}}},aZ=bc.set3DTransformRatio=bc.setTransformRatio=function(cc){var cb,ca,b9,b8,b7,b6,b5,b4,b3,b2,b1,b0,bZ,bY,bX,bW,bV,bU,bT,bS,bR,ba,aa,Z=this.data,Y=this.t.style,X=Z.rotation,W=Z.rotationX,V=Z.rotationY,U=Z.scaleX,T=Z.scaleY,S=Z.scaleZ,R=Z.x,Q=Z.y,P=Z.z,O=Z.svg,I=Z.perspective,n=Z.force3D;
if(((1===cc||0===cc)&&"auto"===n&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!n)&&!P&&!I&&!V&&!W&&1===S||ab&&O||!bl){return void (X||Z.skewX||O?(X*=bm,ba=Z.skewX*bm,aa=100000,cb=Math.cos(X)*U,b8=Math.sin(X)*U,ca=Math.sin(X-ba)*-T,b7=Math.cos(X-ba)*T,ba&&"simple"===Z.skewType&&(bV=Math.tan(ba),bV=Math.sqrt(1+bV*bV),ca*=bV,b7*=bV,Z.skewY&&(cb*=bV,b8*=bV)),O&&(R+=Z.xOrigin-(Z.xOrigin*cb+Z.yOrigin*ca)+Z.xOffset,Q+=Z.yOrigin-(Z.xOrigin*b8+Z.yOrigin*b7)+Z.yOffset,ab&&(Z.xPercent||Z.yPercent)&&(bY=this.t.getBBox(),R+=0.01*Z.xPercent*bY.width,Q+=0.01*Z.yPercent*bY.height),bY=0.000001,bY>R&&R>-bY&&(R=0),bY>Q&&Q>-bY&&(Q=0)),bT=(cb*aa|0)/aa+","+(b8*aa|0)/aa+","+(ca*aa|0)/aa+","+(b7*aa|0)/aa+","+R+","+Q+")",O&&ab?this.t.setAttribute("transform","matrix("+bT):Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix(":"matrix(")+bT):Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix(":"matrix(")+U+",0,0,"+T+","+R+","+Q+")")
}if(aE&&(bY=0.0001,bY>U&&U>-bY&&(U=S=0.00002),bY>T&&T>-bY&&(T=S=0.00002),!I||Z.z||Z.rotationX||Z.rotationY||(I=0)),X||Z.skewX){X*=bm,bX=cb=Math.cos(X),bW=b8=Math.sin(X),Z.skewX&&(X-=Z.skewX*bm,bX=Math.cos(X),bW=Math.sin(X),"simple"===Z.skewType&&(bV=Math.tan(Z.skewX*bm),bV=Math.sqrt(1+bV*bV),bX*=bV,bW*=bV,Z.skewY&&(cb*=bV,b8*=bV))),ca=-bW,b7=bX
}else{if(!(V||W||1!==S||I||O)){return void (Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) translate3d(":"translate3d(")+R+"px,"+Q+"px,"+P+"px)"+(1!==U||1!==T?" scale("+U+","+T+")":""))
}cb=b7=1,ca=b8=0
}b3=1,b9=b6=b5=b4=b2=b1=0,b0=I?-1/I:0,bZ=Z.zOrigin,bY=0.000001,bS=",",bR="0",X=V*bm,X&&(bX=Math.cos(X),bW=Math.sin(X),b5=-bW,b2=b0*-bW,b9=cb*bW,b6=b8*bW,b3=bX,b0*=bX,cb*=bX,b8*=bX),X=W*bm,X&&(bX=Math.cos(X),bW=Math.sin(X),bV=ca*bX+b9*bW,bU=b7*bX+b6*bW,b4=b3*bW,b1=b0*bW,b9=ca*-bW+b9*bX,b6=b7*-bW+b6*bX,b3*=bX,b0*=bX,ca=bV,b7=bU),1!==S&&(b9*=S,b6*=S,b3*=S,b0*=S),1!==T&&(ca*=T,b7*=T,b4*=T,b1*=T),1!==U&&(cb*=U,b8*=U,b5*=U,b2*=U),(bZ||O)&&(bZ&&(R+=b9*-bZ,Q+=b6*-bZ,P+=b3*-bZ+bZ),O&&(R+=Z.xOrigin-(Z.xOrigin*cb+Z.yOrigin*ca)+Z.xOffset,Q+=Z.yOrigin-(Z.xOrigin*b8+Z.yOrigin*b7)+Z.yOffset),bY>R&&R>-bY&&(R=bR),bY>Q&&Q>-bY&&(Q=bR),bY>P&&P>-bY&&(P=0)),bT=Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix3d(":"matrix3d(",bT+=(bY>cb&&cb>-bY?bR:cb)+bS+(bY>b8&&b8>-bY?bR:b8)+bS+(bY>b5&&b5>-bY?bR:b5),bT+=bS+(bY>b2&&b2>-bY?bR:b2)+bS+(bY>ca&&ca>-bY?bR:ca)+bS+(bY>b7&&b7>-bY?bR:b7),W||V||1!==S?(bT+=bS+(bY>b4&&b4>-bY?bR:b4)+bS+(bY>b1&&b1>-bY?bR:b1)+bS+(bY>b9&&b9>-bY?bR:b9),bT+=bS+(bY>b6&&b6>-bY?bR:b6)+bS+(bY>b3&&b3>-bY?bR:b3)+bS+(bY>b0&&b0>-bY?bR:b0)+bS):bT+=",0,0,0,0,1,0,",bT+=R+bS+Q+bS+P+bS+(I?1+-P/I:1)+")",Y[bz]=bT
};
aJ=aM.prototype,aJ.x=aJ.y=aJ.z=aJ.skewX=aJ.skewY=aJ.rotation=aJ.rotationX=aJ.rotationY=aJ.zOrigin=aJ.xPercent=aJ.yPercent=aJ.xOffset=aJ.yOffset=0,aJ.scaleX=aJ.scaleY=aJ.scaleZ=1,ap("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(V,U,T,S,R,Q,P){if(S._lastParsedTransform===P){return R
}S._lastParsedTransform=P;
var O,N,M,L,K,J,I,H,G,F=V._gsTransform,E=V.style,D=0.000001,C=bJ.length,B=P,A={},g="transformOrigin",e=bI(V,aQ,!0,P.parseTransform);
if(S._transform=e,"string"==typeof B.transform&&bz){N=bf.style,N[bz]=B.transform,N.display="block",N.position="absolute",bh.body.appendChild(bf),O=bI(bf,null,!1),e.svg&&(I=e.xOrigin,H=e.yOrigin,O.x-=e.xOffset,O.y-=e.yOffset,(B.transformOrigin||B.svgOrigin)&&(M={},bs(V,ad(B.transformOrigin),M,B.svgOrigin,B.smoothOrigin,!0),I=M.xOrigin,H=M.yOrigin,O.x-=M.xOffset-e.xOffset,O.y-=M.yOffset-e.yOffset),(I||H)&&(G=bQ(bf,!0),O.x-=I-(I*G[0]+H*G[2]),O.y-=H-(I*G[1]+H*G[3]))),bh.body.removeChild(bf),O.perspective||(O.perspective=e.perspective),null!=B.xPercent&&(O.xPercent=bC(B.xPercent,e.xPercent)),null!=B.yPercent&&(O.yPercent=bC(B.yPercent,e.yPercent))
}else{if("object"==typeof B){if(O={scaleX:bC(null!=B.scaleX?B.scaleX:B.scale,e.scaleX),scaleY:bC(null!=B.scaleY?B.scaleY:B.scale,e.scaleY),scaleZ:bC(B.scaleZ,e.scaleZ),x:bC(B.x,e.x),y:bC(B.y,e.y),z:bC(B.z,e.z),xPercent:bC(B.xPercent,e.xPercent),yPercent:bC(B.yPercent,e.yPercent),perspective:bC(B.transformPerspective,e.perspective)},J=B.directionalRotation,null!=J){if("object"==typeof J){for(N in J){B[N]=J[N]
}}else{B.rotation=J
}}"string"==typeof B.x&&-1!==B.x.indexOf("%")&&(O.x=0,O.xPercent=bC(B.x,e.xPercent)),"string"==typeof B.y&&-1!==B.y.indexOf("%")&&(O.y=0,O.yPercent=bC(B.y,e.yPercent)),O.rotation=bk("rotation" in B?B.rotation:"shortRotation" in B?B.shortRotation+"_short":"rotationZ" in B?B.rotationZ:e.rotation-e.skewY,e.rotation-e.skewY,"rotation",A),bl&&(O.rotationX=bk("rotationX" in B?B.rotationX:"shortRotationX" in B?B.shortRotationX+"_short":e.rotationX||0,e.rotationX,"rotationX",A),O.rotationY=bk("rotationY" in B?B.rotationY:"shortRotationY" in B?B.shortRotationY+"_short":e.rotationY||0,e.rotationY,"rotationY",A)),O.skewX=bk(B.skewX,e.skewX-e.skewY),(O.skewY=bk(B.skewY,e.skewY))&&(O.skewX+=O.skewY,O.rotation+=O.skewY)
}}for(bl&&null!=B.force3D&&(e.force3D=B.force3D,K=!0),e.skewType=B.skewType||e.skewType||aO.defaultSkewType,L=e.force3D||e.z||e.rotationX||e.rotationY||O.z||O.rotationX||O.rotationY||O.perspective,L||null==B.scale||(O.scaleZ=1);
--C>-1;
){T=bJ[C],M=O[T]-e[T],(M>D||-D>M||null!=B[T]||null!=bi[T])&&(K=!0,R=new ag(e,T,e[T],M,R),T in A&&(R.e=A[T]),R.xs0=0,R.plugin=Q,S._overwriteProps.push(R.n))
}return M=B.transformOrigin,e.svg&&(M||B.svgOrigin)&&(I=e.xOffset,H=e.yOffset,bs(V,ad(M),O,B.svgOrigin,B.smoothOrigin),R=bP(e,"xOrigin",(F?e:O).xOrigin,O.xOrigin,R,g),R=bP(e,"yOrigin",(F?e:O).yOrigin,O.yOrigin,R,g),(I!==e.xOffset||H!==e.yOffset)&&(R=bP(e,"xOffset",F?I:e.xOffset,e.xOffset,R,g),R=bP(e,"yOffset",F?H:e.yOffset,e.yOffset,R,g)),M=ab?null:"0px 0px"),(M||bl&&L&&e.zOrigin)&&(bz?(K=!0,T=bD,M=(M||a2(V,T,aQ,!1,"50% 50%"))+"",R=new ag(E,T,0,0,R,-1,g),R.b=E[T],R.plugin=Q,bl?(N=e.zOrigin,M=M.split(" "),e.zOrigin=(M.length>2&&(0===N||"0px"!==M[2])?parseFloat(M[2]):N)||0,R.xs0=R.e=M[0]+" "+(M[1]||"50%")+" 0px",R=new ag(e,"zOrigin",0,0,R,-1,R.n),R.b=N,R.xs0=R.e=e.zOrigin):R.xs0=R.e=M):ad(M+"",e)),K&&(S._transformType=e.svg&&ab||!L&&3!==this._transformType?2:3),R
},prefix:!0}),ap("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ap("borderRadius",{defaultValue:"0px",parser:function(V,U,T,S,R,Q){U=this.format(U);
var P,O,N,M,L,K,J,I,H,G,F,E,D,C,B,A,e=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],d=V.style;
for(H=parseFloat(V.offsetWidth),G=parseFloat(V.offsetHeight),P=U.split(" "),O=0;
O<e.length;
O++){this.p.indexOf("border")&&(e[O]=a4(e[O])),L=M=a2(V,e[O],aQ,!1,"0px"),-1!==L.indexOf(" ")&&(M=L.split(" "),L=M[0],M=M[1]),K=N=P[O],J=parseFloat(L),E=L.substr((J+"").length),D="="===K.charAt(1),D?(I=parseInt(K.charAt(0)+"1",10),K=K.substr(2),I*=parseFloat(K),F=K.substr((I+"").length-(0>I?1:0))||""):(I=parseFloat(K),F=K.substr((I+"").length)),""===F&&(F=aR[T]||E),F!==E&&(C=a0(V,"borderLeft",J,E),B=a0(V,"borderTop",J,E),"%"===F?(L=C/H*100+"%",M=B/G*100+"%"):"em"===F?(A=a0(V,"borderLeft",1,"em"),L=C/A+"em",M=B/A+"em"):(L=C+"px",M=B+"px"),D&&(K=parseFloat(L)+I+F,N=parseFloat(M)+I+F)),R=bH(d,e[O],L+" "+M,K+" "+N,!1,"0px",R)
}return R
},prefix:!0,formatter:br("0px 0px 0px 0px",!1,!0)}),ap("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(h,e,m,l,k,j){return bH(h.style,m,this.format(a2(h,m,aQ,!1,"0px 0px")),this.format(e),!1,"0px",k)
},prefix:!0,formatter:br("0px 0px",!1,!0)}),ap("backgroundPosition",{defaultValue:"0 0",parser:function(F,E,D,C,B,A){var z,y,x,w,v,u,t="background-position",s=aQ||a3(F,null),p=this.format((s?aC?s.getPropertyValue(t+"-x")+" "+s.getPropertyValue(t+"-y"):s.getPropertyValue(t):F.currentStyle.backgroundPositionX+" "+F.currentStyle.backgroundPositionY)||"0 0"),e=this.format(E);
if(-1!==p.indexOf("%")!=(-1!==e.indexOf("%"))&&e.split(",").length<2&&(u=a2(F,"backgroundImage").replace(bv,""),u&&"none"!==u)){for(z=p.split(" "),y=e.split(" "),be.setAttribute("src",u),x=2;
--x>-1;
){p=z[x],w=-1!==p.indexOf("%"),w!==(-1!==y[x].indexOf("%"))&&(v=0===x?F.offsetWidth-be.width:F.offsetHeight-be.height,z[x]=w?parseFloat(p)/100*v+"px":parseFloat(p)/v*100+"%")
}p=z.join(" ")
}return this.parseComplex(F.style,p,e,B,A)
},formatter:ad}),ap("backgroundSize",{defaultValue:"0 0",formatter:ad}),ap("perspective",{defaultValue:"0px",prefix:!0}),ap("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ap("transformStyle",{prefix:!0}),ap("backfaceVisibility",{prefix:!0}),ap("userSelect",{prefix:!0}),ap("margin",{parser:aS("marginTop,marginRight,marginBottom,marginLeft")}),ap("padding",{parser:aS("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ap("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(r,q,p,o,n,m){var l,k,e;
return 9>aC?(k=r.currentStyle,e=8>aC?" ":",",l="rect("+k.clipTop+e+k.clipRight+e+k.clipBottom+e+k.clipLeft+")",q=this.format(q).split(",").join(e)):(l=this.format(a2(r,this.p,aQ,!1,this.dflt)),q=this.format(q)),this.parseComplex(r.style,l,q,n,m)
}}),ap("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ap("autoRound,strictUnits",{parser:function(g,f,k,j,h){return h
}}),ap("border",{defaultValue:"0px solid #000",parser:function(r,q,p,o,n,m){var l=a2(r,"borderTopWidth",aQ,!1,"0px"),k=this.format(q).split(" "),e=k[0].replace(ax,"");
return"px"!==e&&(l=parseFloat(l)/a0(r,"borderTopWidth",1,e)+e),this.parseComplex(r.style,this.format(l+" "+a2(r,"borderTopStyle",aQ,!1,"solid")+" "+a2(r,"borderTopColor",aQ,!1,"#000")),k.join(" "),n,m)
},color:!0,formatter:function(d){var c=d.split(" ");
return c[0]+" "+(c[1]||"solid")+" "+(d.match(bE)||["#000"])[0]
}}),ap("borderWidth",{parser:aS("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ap("float,cssFloat,styleFloat",{parser:function(k,j,q,p,o,n){var m=k.style,l="cssFloat" in m?"cssFloat":"styleFloat";
return new ag(m,l,0,0,o,-1,q,!1,0,m[l],j)
}});
var aq=function(g){var f,k=this.t,j=k.filter||a2(this.data,"filter")||"",h=this.s+this.c*g|0;
100===h&&(-1===j.indexOf("atrix(")&&-1===j.indexOf("radient(")&&-1===j.indexOf("oader(")?(k.removeAttribute("filter"),f=!a2(this.data,"filter")):(k.filter=j.replace(au,""),f=!0)),f||(this.xn1&&(k.filter=j=j||"alpha(opacity="+h+")"),-1===j.indexOf("pacity")?0===h&&this.xn1||(k.filter=j+" alpha(opacity="+h+")"):k.filter=j.replace(aw,"opacity="+h))
};
ap("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(r,q,p,o,n,m){var l=parseFloat(a2(r,"opacity",aQ,!1,"1")),k=r.style,e="autoAlpha"===p;
return"string"==typeof q&&"="===q.charAt(1)&&(q=("-"===q.charAt(0)?-1:1)*parseFloat(q.substr(2))+l),e&&1===l&&"hidden"===a2(r,"visibility",aQ)&&0!==q&&(l=0),a9?n=new ag(k,"opacity",l,q-l,n):(n=new ag(k,"opacity",100*l,100*(q-l),n),n.xn1=e?1:0,k.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=r,n.plugin=m,n.setRatio=aq),e&&(n=new ag(k,"visibility",0,0,n,-1,null,!1,0,0!==l?"inherit":"hidden",0===q?"hidden":"inherit"),n.xs0="inherit",o._overwriteProps.push(n.n),o._overwriteProps.push(p)),n
}});
var aj=function(d,c){c&&(d.removeProperty?(("ms"===c.substr(0,2)||"webkit"===c.substr(0,6))&&(c="-"+c),d.removeProperty(c.replace(ar,"-$1").toLowerCase())):d.removeAttribute(c))
},ac=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.setAttribute("class",0===e?this.b:this.e);
for(var d=this.data,f=this.t.style;
d;
){d.v?f[d.p]=d.v:aj(f,d.p),d=d._next
}1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)
}else{this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)
}};
ap("className",{parser:function(B,A,z,y,x,w,v){var u,t,s,r,q,e=B.getAttribute("class")||"",c=B.style.cssText;
if(x=y._classNamePT=new ag(B,z,0,0,x,2),x.setRatio=ac,x.pr=-11,aU=!0,x.b=e,t=aY(B,aQ),s=B._gsClassPT){for(r={},q=s.data;
q;
){r[q.p]=1,q=q._next
}s.setRatio(1)
}return B._gsClassPT=x,x.e="="!==A.charAt(1)?A:e.replace(new RegExp("(?:\\s|^)"+A.substr(2)+"(?![\\w-])"),"")+("+"===A.charAt(0)?" "+A.substr(2):""),B.setAttribute("class",x.e),u=bB(B,t,aY(B),v,r),B.setAttribute("class",e),x.data=u.firstMPT,B.style.cssText=c,x=x.xfirst=y.parse(B,u.difs,x,w)
}});
var bK=function(k){if((1===k||0===k)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var j,q,p,o,n,m=this.t.style,l=aK.transform.parse;
if("all"===this.e){m.cssText="",o=!0
}else{for(j=this.e.split(" ").join("").split(","),p=j.length;
--p>-1;
){q=j[p],aK[q]&&(aK[q].parse===l?o=!0:q="transformOrigin"===q?bD:aK[q].p),aj(m,q)
}}o&&(aj(m,bz),n=this.t._gsTransform,n&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))
}};
for(ap("clearProps",{parser:function(g,c,k,j,h){return h=new ag(g,k,0,0,h,2),h.setRatio=bK,h.e=c,h.pr=-10,h.data=j._tween,aU=!0,h
}}),aJ="bezier,throwProps,physicsProps,physics2D".split(","),bx=aJ.length;
bx--;
){ai(aJ[bx])
}aJ=aO.prototype,aJ._firstPT=aJ._lastParsedTransform=aJ._transform=null,aJ._onInitTween=function(o,l,k){if(!o.nodeType){return !1
}this._target=o,this._tween=k,this._vars=l,aI=l.autoRound,aU=!1,aR=l.suffixMap||aO.suffixMap,aQ=a3(o,""),aP=this._overwriteProps;
var g,f,e,d,c,A,z,y,w,m=o.style;
if(aH&&""===m.zIndex&&(g=a2(o,"zIndex",aQ),("auto"===g||""===g)&&this._addLazySet(m,"zIndex",0)),"string"==typeof l&&(d=m.cssText,g=aY(o,aQ),m.cssText=d+";"+l,g=bB(o,g,aY(o)).difs,!a9&&av.test(l)&&(g.opacity=parseFloat(RegExp.$1)),l=g,m.cssText=d),l.className?this._firstPT=f=aK.className.parse(o,l.className,"className",this,null,null,l):this._firstPT=f=this.parse(o,l,null),this._transformType){for(w=3===this._transformType,bz?aG&&(aH=!0,""===m.zIndex&&(z=a2(o,"zIndex",aQ),("auto"===z||""===z)&&this._addLazySet(m,"zIndex",0)),aD&&this._addLazySet(m,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(w?"visible":"hidden"))):m.zoom=1,e=f;
e&&e._next;
){e=e._next
}y=new ag(o,"transform",0,0,null,2),this._linkCSSP(y,null,e),y.setRatio=bz?aZ:by,y.data=this._transform||bI(o,aQ,!0),y.tween=k,y.pr=-1,aP.pop()
}if(aU){for(;
f;
){for(A=f._next,e=d;
e&&e.pr>f.pr;
){e=e._next
}(f._prev=e?e._prev:c)?f._prev._next=f:d=f,(f._next=e)?e._prev=f:c=f,f=A
}this._firstPT=d
}return !0
},aJ.parse=function(D,C,B,A){var z,y,x,w,v,u,t,k,e,d,E=D.style;
for(z in C){u=C[z],y=aK[z],y?B=y.parse(D,u,z,this,B,A,C):(v=a2(D,z,aQ)+"",e="string"==typeof u,"color"===z||"fill"===z||"stroke"===z||-1!==z.indexOf("Color")||e&&at.test(u)?(e||(u=ae(u),u=(u.length>3?"rgba(":"rgb(")+u.join(",")+")"),B=bH(E,z,v,u,!0,"transparent",B,0,A)):e&&bn.test(u)?B=bH(E,z,v,u,!0,null,B,0,A):(x=parseFloat(v),t=x||0===x?v.substr((x+"").length):"",(""===v||"auto"===v)&&("width"===z||"height"===z?(x=ak(D,z,aQ),t="px"):"left"===z||"top"===z?(x=bG(D,z,aQ),t="px"):(x="opacity"!==z?0:1,t="")),d=e&&"="===u.charAt(1),d?(w=parseInt(u.charAt(0)+"1",10),u=u.substr(2),w*=parseFloat(u),k=u.replace(ax,"")):(w=parseFloat(u),k=e?u.replace(ax,""):""),""===k&&(k=z in aR?aR[z]:t),u=w||0===w?(d?w+x:w)+k:C[z],t!==k&&""!==k&&(w||0===w)&&x&&(x=a0(D,z,x,t),"%"===k?(x/=a0(D,z,100,"%")/100,C.strictUnits!==!0&&(v=x+"%")):"em"===k||"rem"===k||"vw"===k||"vh"===k?x/=a0(D,z,1,k):"px"!==k&&(w=a0(D,z,w,k),k="px"),d&&(w||0===w)&&(u=w+x+k)),d&&(w+=x),!x&&0!==x||!w&&0!==w?void 0!==E[z]&&(u||u+""!="NaN"&&null!=u)?(B=new ag(E,z,w||x||0,0,B,-1,z,!1,0,v,u),B.xs0="none"!==u||"display"!==z&&-1===z.indexOf("Style")?u:v):a7("invalid "+z+" tween value: "+C[z]):(B=new ag(E,z,x,w-x,B,0,z,aI!==!1&&("px"===k||"zIndex"===z),0,v,u),B.xs0=k))),A&&B&&!B.plugin&&(B.plugin=A)
}return B
},aJ.setRatio=function(h){var g,m,l,k=this._firstPT,j=0.000001;
if(1!==h||this._tween._time!==this._tween._duration&&0!==this._tween._time){if(h||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-0.000001){for(;
k;
){if(g=k.c*h+k.s,k.r?g=Math.round(g):j>g&&g>-j&&(g=0),k.type){if(1===k.type){if(l=k.l,2===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2
}else{if(3===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3
}else{if(4===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3+k.xn3+k.xs4
}else{if(5===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3+k.xn3+k.xs4+k.xn4+k.xs5
}else{for(m=k.xs0+g+k.xs1,l=1;
l<k.l;
l++){m+=k["xn"+l]+k["xs"+(l+1)]
}k.t[k.p]=m
}}}}}else{-1===k.type?k.t[k.p]=k.xs0:k.setRatio&&k.setRatio(h)
}}else{k.t[k.p]=g+k.xs0
}k=k._next
}}else{for(;
k;
){2!==k.type?k.t[k.p]=k.b:k.setRatio(h),k=k._next
}}}else{for(;
k;
){if(2!==k.type){if(k.r&&-1!==k.type){if(g=Math.round(k.s+k.c),k.type){if(1===k.type){for(l=k.l,m=k.xs0+g+k.xs1,l=1;
l<k.l;
l++){m+=k["xn"+l]+k["xs"+(l+1)]
}k.t[k.p]=m
}}else{k.t[k.p]=g+k.xs0
}}else{k.t[k.p]=k.e
}}else{k.setRatio(h)
}k=k._next
}}},aJ._enableTransforms=function(b){this._transform=this._transform||bI(this._target,aQ,!0),this._transformType=this._transform.svg&&ab||!b&&3!==this._transformType?2:3
};
var bA=function(b){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)
};
aJ._addLazySet=function(f,e,h){var g=this._firstPT=new ag(f,e,0,0,this._firstPT,2);
g.e=h,g.setRatio=bA,g.data=this
},aJ._linkCSSP=function(f,e,h,g){return f&&(e&&(e._prev=f),f._next&&(f._next._prev=f._prev),f._prev?f._prev._next=f._next:this._firstPT===f&&(this._firstPT=f._next,g=!0),h?h._next=f:g||null!==this._firstPT||(this._firstPT=f),f._next=e,f._prev=h),f
},aJ._kill=function(a){var k,j,h,g=a;
if(a.autoAlpha||a.alpha){g={};
for(j in a){g[j]=a[j]
}g.opacity=1,g.autoAlpha&&(g.visibility=1)
}return a.className&&(k=this._classNamePT)&&(h=k.xfirst,h&&h._prev?this._linkCSSP(h._prev,k._next,h._prev._prev):h===this._firstPT&&(this._firstPT=k._next),k._next&&this._linkCSSP(k._next,k._next._next,h._prev),this._classNamePT=null),aW.prototype._kill.call(this,g)
};
var a1=function(j,h,o){var n,m,l,k;
if(j.slice){for(m=j.length;
--m>-1;
){a1(j[m],h,o)
}}else{for(n=j.childNodes,m=n.length;
--m>-1;
){l=n[m],k=l.type,l.style&&(h.push(aY(l)),o&&o.push(l)),1!==k&&9!==k&&11!==k||!l.childNodes.length||a1(l,h,o)
}}};
return aO.cascadeTo=function(z,y,x){var w,v,u,t,s=aV.to(z,y,x),r=[s],q=[],p=[],o=[],b=aV._internals.reservedProps;
for(z=s._targets||s.target,a1(z,q,o),s.render(y,!0,!0),a1(z,p),s.render(0,!0,!0),s._enabled(!0),w=o.length;
--w>-1;
){if(v=bB(o[w],q[w],p[w]),v.firstMPT){v=v.difs;
for(u in x){b[u]&&(v[u]=x[u])
}t={};
for(u in v){t[u]=q[w][u]
}r.push(aV.fromTo(o[w],y,t,v))
}}return r
},aW.activate([aO]),aO
},!0),function(){var e=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(h,g,j){return this._tween=j,!0
}}),d=function(b){for(;
b;
){b.f||b.blob||(b.r=1),b=b._next
}},f=e.prototype;
f._onInitAllProps=function(){for(var b,p,o,n=this._tween,m=n.vars.roundProps.join?n.vars.roundProps:n.vars.roundProps.split(","),l=m.length,k={},j=n._propLookup.roundProps;
--l>-1;
){k[m[l]]=1
}for(l=m.length;
--l>-1;
){for(b=m[l],p=n._firstPT;
p;
){o=p._next,p.pg?p.t._roundProps(k,!0):p.n===b&&(2===p.f&&p.t?d(p.t._firstPT):(this._add(p.t,b,p.s,p.c),o&&(o._prev=p._prev),p._prev?p._prev._next=o:n._firstPT===p&&(n._firstPT=o),p._next=p._prev=null,n._propLookup[b]=j)),p=o
}}return !1
},f._add=function(h,g,k,j){this._addTween(h,g,k,k+j,g,!0),this._overwriteProps.push(g)
}
}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(f,e,h){var g;
if("function"!=typeof f.setAttribute){return !1
}for(g in e){this._addTween(f,"setAttribute",f.getAttribute(g)+"",e[g]+"",g,!1,g),this._overwriteProps.push(g)
}return !0
}})
}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(v,u,t){"object"!=typeof u&&(u={rotation:u}),this.finals={};
var s,r,q,p,o,n,m=u.useRadians===!0?2*Math.PI:360,l=0.000001;
for(s in u){"useRadians"!==s&&(n=(u[s]+"").split("_"),r=n[0],q=parseFloat("function"!=typeof v[s]?v[s]:v[s.indexOf("set")||"function"!=typeof v["get"+s.substr(3)]?s:"get"+s.substr(3)]()),p=this.finals[s]="string"==typeof r&&"="===r.charAt(1)?q+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,o=p-q,n.length&&(r=n.join("_"),-1!==r.indexOf("short")&&(o%=m,o!==o%(m/2)&&(o=0>o?o+m:o-m)),-1!==r.indexOf("_cw")&&0>o?o=(o+9999999999*m)%m-(o/m|0)*m:-1!==r.indexOf("ccw")&&o>0&&(o=(o-9999999999*m)%m-(o/m|0)*m)),(o>l||-l>o)&&(this._addTween(v,s,q,q+o,s),this._overwriteProps.push(s)))
}return !0
},set:function(d){var c;
if(1!==d){this._super.setRatio.call(this,d)
}else{for(c=this._firstPT;
c;
){c.f?c.t[c.p](this.finals[c.p]):c.t[c.p]=this.finals[c.p],c=c._next
}}}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(H){var G,F,E,D=_gsScope.GreenSockGlobals||_gsScope,C=D.com.greensock,B=2*Math.PI,A=Math.PI/2,z=C._class,y=function(a,h){var g=z("easing."+a,function(){},!0),f=g.prototype=new H;
return f.constructor=g,f.getRatio=h,g
},x=H.register||function(){},w=function(h,g,m,l,k){var j=z("easing."+h,{easeOut:new g,easeIn:new m,easeInOut:new l},!0);
return x(j,h),j
},v=function(e,d,f){this.t=e,this.v=d,f&&(this.next=f,f.prev=this,this.c=f.v-d,this.gap=f.t-e)
},u=function(a,h){var g=z("easing."+a,function(b){this._p1=b||0===b?b:1.70158,this._p2=1.525*this._p1
},!0),f=g.prototype=new H;
return f.constructor=g,f.getRatio=h,f.config=function(b){return new g(b)
},g
},t=w("Back",u("BackOut",function(b){return(b-=1)*b*((this._p1+1)*b+this._p1)+1
}),u("BackIn",function(b){return b*b*((this._p1+1)*b-this._p1)
}),u("BackInOut",function(b){return(b*=2)<1?0.5*b*b*((this._p2+1)*b-this._p2):0.5*((b-=2)*b*((this._p2+1)*b+this._p2)+2)
})),s=z("easing.SlowMo",function(e,d,f){d=d||0===d?d:0.7,null==e?e=0.7:e>1&&(e=1),this._p=1!==e?d:0,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=f===!0
},!0),r=s.prototype=new H;
return r.constructor=s,r.getRatio=function(d){var c=d+(0.5-d)*this._p;
return d<this._p1?this._calcEnd?1-(d=1-d/this._p1)*d:c-(d=1-d/this._p1)*d*d*d*c:d>this._p3?this._calcEnd?1-(d=(d-this._p3)/this._p1)*d:c+(d-c)*(d=(d-this._p3)/this._p1)*d*d*d:this._calcEnd?1:c
},s.ease=new s(0.7,0.7),r.config=s.config=function(e,d,f){return new s(e,d,f)
},G=z("easing.SteppedEase",function(b){b=b||1,this._p1=1/b,this._p2=b+1
},!0),r=G.prototype=new H,r.constructor=G,r.getRatio=function(b){return 0>b?b=0:b>=1&&(b=0.999999999),(this._p2*b>>0)*this._p1
},r.config=G.config=function(b){return new G(b)
},F=z("easing.RoughEase",function(V){V=V||{};
for(var U,T,S,R,Q,P,O=V.taper||"none",N=[],M=0,L=0|(V.points||20),K=L,J=V.randomize!==!1,I=V.clamp===!0,m=V.template instanceof H?V.template:null,a="number"==typeof V.strength?0.4*V.strength:0.4;
--K>-1;
){U=J?Math.random():1/L*K,T=m?m.getRatio(U):U,"none"===O?S=a:"out"===O?(R=1-U,S=R*R*a):"in"===O?S=U*U*a:0.5>U?(R=2*U,S=R*R*0.5*a):(R=2*(1-U),S=R*R*0.5*a),J?T+=Math.random()*S-0.5*S:K%2?T+=0.5*S:T-=0.5*S,I&&(T>1?T=1:0>T&&(T=0)),N[M++]={x:U,y:T}
}for(N.sort(function(d,c){return d.x-c.x
}),P=new v(1,1,null),K=L;
--K>-1;
){Q=N[K],P=new v(Q.x,Q.y,P)
}this._prev=new v(0,0,0!==P.t?P:P.next)
},!0),r=F.prototype=new H,r.constructor=F,r.getRatio=function(d){var c=this._prev;
if(d>c.t){for(;
c.next&&d>=c.t;
){c=c.next
}c=c.prev
}else{for(;
c.prev&&d<=c.t;
){c=c.prev
}}return this._prev=c,c.v+(d-c.t)/c.gap*c.c
},r.config=function(b){return new F(b)
},F.ease=new F,w("Bounce",y("BounceOut",function(b){return 1/2.75>b?7.5625*b*b:2/2.75>b?7.5625*(b-=1.5/2.75)*b+0.75:2.5/2.75>b?7.5625*(b-=2.25/2.75)*b+0.9375:7.5625*(b-=2.625/2.75)*b+0.984375
}),y("BounceIn",function(b){return(b=1-b)<1/2.75?1-7.5625*b*b:2/2.75>b?1-(7.5625*(b-=1.5/2.75)*b+0.75):2.5/2.75>b?1-(7.5625*(b-=2.25/2.75)*b+0.9375):1-(7.5625*(b-=2.625/2.75)*b+0.984375)
}),y("BounceInOut",function(d){var c=0.5>d;
return d=c?1-2*d:2*d-1,d=1/2.75>d?7.5625*d*d:2/2.75>d?7.5625*(d-=1.5/2.75)*d+0.75:2.5/2.75>d?7.5625*(d-=2.25/2.75)*d+0.9375:7.5625*(d-=2.625/2.75)*d+0.984375,c?0.5*(1-d):0.5*d+0.5
})),w("Circ",y("CircOut",function(b){return Math.sqrt(1-(b-=1)*b)
}),y("CircIn",function(b){return -(Math.sqrt(1-b*b)-1)
}),y("CircInOut",function(b){return(b*=2)<1?-0.5*(Math.sqrt(1-b*b)-1):0.5*(Math.sqrt(1-(b-=2)*b)+1)
})),E=function(a,k,j){var h=z("easing."+a,function(d,c){this._p1=d>=1?d:1,this._p2=(c||j)/(1>d?d:1),this._p3=this._p2/B*(Math.asin(1/this._p1)||0),this._p2=B/this._p2
},!0),g=h.prototype=new H;
return g.constructor=h,g.getRatio=k,g.config=function(d,c){return new h(d,c)
},h
},w("Elastic",E("ElasticOut",function(b){return this._p1*Math.pow(2,-10*b)*Math.sin((b-this._p3)*this._p2)+1
},0.3),E("ElasticIn",function(b){return -(this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*this._p2))
},0.3),E("ElasticInOut",function(b){return(b*=2)<1?-0.5*(this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(b-=1))*Math.sin((b-this._p3)*this._p2)*0.5+1
},0.45)),w("Expo",y("ExpoOut",function(b){return 1-Math.pow(2,-10*b)
}),y("ExpoIn",function(b){return Math.pow(2,10*(b-1))-0.001
}),y("ExpoInOut",function(b){return(b*=2)<1?0.5*Math.pow(2,10*(b-1)):0.5*(2-Math.pow(2,-10*(b-1)))
})),w("Sine",y("SineOut",function(b){return Math.sin(b*A)
}),y("SineIn",function(b){return -Math.cos(b*A)+1
}),y("SineInOut",function(b){return -0.5*(Math.cos(Math.PI*b)-1)
})),z("easing.EaseLookup",{find:function(a){return H.map[a]
}},!0),x(D.SlowMo,"SlowMo","ease,"),x(F,"RoughEase","ease,"),x(G,"SteppedEase","ease,"),t
},!0)
}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a3,a2){var a1={},a0=a3.GreenSockGlobals=a3.GreenSockGlobals||a3;
if(!a0.TweenLite){var aZ,aY,aX,aW,aV,aU=function(f){var d,h=f.split("."),g=a0;
for(d=0;
d<h.length;
d++){g[h[d]]=g=g[h[d]]||{}
}return g
},aT=aU("com.greensock"),aS=1e-10,aR=function(f){var e,h=[],g=f.length;
for(e=0;
e!==g;
h.push(f[e++])){}return h
},aQ=function(){},aP=function(){var d=Object.prototype.toString,c=d.call([]);
return function(a){return null!=a&&(a instanceof Array||"object"==typeof a&&!!a.push&&d.call(a)===c)
}
}(),aO={},aN=function(j,d,c,b){this.sc=aO[j]?aO[j].sc:[],aO[j]=this,this.gsClass=null,this.func=c;
var a=[];
this.check=function(g){for(var f,e,v,u,q,p=d.length,h=p;
--p>-1;
){(f=aO[d[p]]||new aN(d[p],[])).gsClass?(a[p]=f.gsClass,h--):g&&f.sc.push(this)
}if(0===h&&c){if(e=("com.greensock."+j).split("."),v=e.pop(),u=aU(e.join("."))[v]=this.gsClass=c.apply(c,a),b){if(a0[v]=u,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd){define((a3.GreenSockAMDPath?a3.GreenSockAMDPath+"/":"")+j.split(".").pop(),[],function(){return u
})
}else{if(q){if(j===a2){module.exports=a1[a2]=u;
for(p in a1){u[p]=a1[p]
}}else{a1[a2]&&(a1[a2][v]=u)
}}}}for(p=0;
p<this.sc.length;
p++){this.sc[p].check()
}}},this.check(!0)
},aM=a3._gsDefine=function(f,e,h,g){return new aN(f,e,h,g)
},aL=aT._class=function(e,d,f){return d=d||function(){},aM(e,[],function(){return d
},f),d
};
aM.globals=a0;
var aK=[0,0,1,1],aJ=[],aI=aL("easing.Ease",function(f,e,h,g){this._func=f,this._type=h||0,this._power=g||0,this._params=e?aK.concat(e):aK
},!0),aH=aI.map={},aG=aI.register=function(v,u,t,s){for(var r,q,p,o,n=u.split(","),m=n.length,k=(t||"easeIn,easeOut,easeInOut").split(",");
--m>-1;
){for(q=n[m],r=s?aL("easing."+q,null,!0):aT.easing[q]||{},p=k.length;
--p>-1;
){o=k[p],aH[q+"."+o]=aH[o+q]=r[o]=v.getRatio?v:v[o]||new v
}}};
for(aX=aI.prototype,aX._calcEnd=!1,aX.getRatio=function(f){if(this._func){return this._params[0]=f,this._func.apply(null,this._params)
}var e=this._type,h=this._power,g=1===e?1-f:2===e?f:0.5>f?2*f:2*(1-f);
return 1===h?g*=g:2===h?g*=g*g:3===h?g*=g*g*g:4===h&&(g*=g*g*g*g),1===e?1-g:2===e?g:0.5>f?g/2:1-g/2
},aZ=["Linear","Quad","Cubic","Quart","Quint,Strong"],aY=aZ.length;
--aY>-1;
){aX=aZ[aY]+",Power"+aY,aG(new aI(null,null,1,aY),aX,"easeOut",!0),aG(new aI(null,null,2,aY),aX,"easeIn"+(0===aY?",easeNone":"")),aG(new aI(null,null,3,aY),aX,"easeInOut")
}aH.linear=aT.easing.Linear.easeIn,aH.swing=aT.easing.Quad.easeInOut;
var aF=aL("events.EventDispatcher",function(b){this._listeners={},this._eventTarget=b||this
});
aX=aF.prototype,aX.addEventListener=function(s,r,q,p,o){o=o||0;
var n,m,l=this._listeners[s],h=0;
for(this!==aW||aV||aW.wake(),null==l&&(this._listeners[s]=l=[]),m=l.length;
--m>-1;
){n=l[m],n.c===r&&n.s===q?l.splice(m,1):0===h&&n.pr<o&&(h=m+1)
}l.splice(h,0,{c:r,s:q,up:p,pr:o})
},aX.removeEventListener=function(f,e){var h,g=this._listeners[f];
if(g){for(h=g.length;
--h>-1;
){if(g[h].c===e){return void g.splice(h,1)
}}}},aX.dispatchEvent=function(g){var f,k,j,h=this._listeners[g];
if(h){for(f=h.length,k=this._eventTarget;
--f>-1;
){j=h[f],j&&(j.up?j.c.call(j.s||k,{type:g,target:k}):j.c.call(j.s||k))
}}};
var aE=a3.requestAnimationFrame,aB=a3.cancelAnimationFrame,aA=Date.now||function(){return(new Date).getTime()
},az=aA();
for(aZ=["ms","moz","webkit","o"],aY=aZ.length;
--aY>-1&&!aE;
){aE=a3[aZ[aY]+"RequestAnimationFrame"],aB=a3[aZ[aY]+"CancelAnimationFrame"]||a3[aZ[aY]+"CancelRequestAnimationFrame"]
}aL("Ticker",function(C,B){var A,z,y,x,w,v=this,u=aA(),t=B!==!1&&aE?"auto":!1,s=500,n=33,l="tick",h=function(d){var c,f,e=aA()-az;
e>s&&(u+=e-n),az+=e,v.time=(az-u)/1000,c=v.time-w,(!A||c>0||d===!0)&&(v.frame++,w+=c+(c>=x?0.004:x-c),f=!0),d!==!0&&(y=z(h)),f&&v.dispatchEvent(l)
};
aF.call(v),v.time=v.frame=0,v.tick=function(){h(!0)
},v.lagSmoothing=function(d,c){s=d||1/aS,n=Math.min(c,s,0)
},v.sleep=function(){null!=y&&(t&&aB?aB(y):clearTimeout(y),z=aQ,y=null,v===aW&&(aV=!1))
},v.wake=function(b){null!==y?v.sleep():b?u+=-az+(az=aA()):v.frame>10&&(az=aA()-s+5),z=0===A?aQ:t&&aE?aE:function(c){return setTimeout(c,1000*(w-v.time)+1|0)
},v===aW&&(aV=!0),h(2)
},v.fps=function(b){return arguments.length?(A=b,x=1/(A||60),w=this.time+x,void v.wake()):A
},v.useRAF=function(b){return arguments.length?(v.sleep(),t=b,void v.fps(A)):t
},v.fps(C),setTimeout(function(){"auto"===t&&v.frame<5&&"hidden"!==document.visibilityState&&v.useRAF(!1)
},1500)
}),aX=aT.Ticker.prototype=new aT.events.EventDispatcher,aX.constructor=aT.Ticker;
var ay=aL("core.Animation",function(e,d){if(this.vars=d=d||{},this._duration=this._totalDuration=e||0,this._delay=Number(d.delay)||0,this._timeScale=1,this._active=d.immediateRender===!0,this.data=d.data,this._reversed=d.reversed===!0,ae){aV||aW.wake();
var f=this.vars.useFrames?af:ae;
f.add(this,f._time),this.vars.paused&&this.paused(!0)
}});
aW=ay.ticker=new aT.Ticker,aX=ay.prototype,aX._dirty=aX._gc=aX._initted=aX._paused=!1,aX._totalTime=aX._time=0,aX._rawPrevTime=-1,aX._next=aX._last=aX._onUpdate=aX._timeline=aX.timeline=null,aX._paused=!1;
var ax=function(){aV&&aA()-az>2000&&aW.wake(),setTimeout(ax,2000)
};
ax(),aX.play=function(d,c){return null!=d&&this.seek(d,c),this.reversed(!1).paused(!1)
},aX.pause=function(d,c){return null!=d&&this.seek(d,c),this.paused(!0)
},aX.resume=function(d,c){return null!=d&&this.seek(d,c),this.paused(!1)
},aX.seek=function(d,c){return this.totalTime(Number(d),c!==!1)
},aX.restart=function(d,c){return this.reversed(!1).paused(!1).totalTime(d?-this._delay:0,c!==!1,!0)
},aX.reverse=function(d,c){return null!=d&&this.seek(d||this.totalDuration(),c),this.reversed(!0).paused(!1)
},aX.render=function(e,d,f){},aX.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this
},aX.isActive=function(){var e,d=this._timeline,f=this._startTime;
return !d||!this._gc&&!this._paused&&d.isActive()&&(e=d.rawTime())>=f&&e<f+this.totalDuration()/this._timeScale
},aX._enabled=function(d,c){return aV||aW.wake(),this._gc=!d,this._active=this.isActive(),c!==!0&&(d&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!d&&this.timeline&&this._timeline._remove(this,!0)),!1
},aX._kill=function(d,c){return this._enabled(!1,!1)
},aX.kill=function(d,c){return this._kill(d,c),this
},aX._uncache=function(d){for(var c=d?this:this.timeline;
c;
){c._dirty=!0,c=c.timeline
}return this
},aX._swapSelfInParams=function(e){for(var d=e.length,f=e.concat();
--d>-1;
){"{self}"===e[d]&&(f[d]=this)
}return f
},aX._callback=function(d){var c=this.vars;
c[d].apply(c[d+"Scope"]||c.callbackScope||this,c[d+"Params"]||aJ)
},aX.eventCallback=function(g,f,k,j){if("on"===(g||"").substr(0,2)){var h=this.vars;
if(1===arguments.length){return h[g]
}null==f?delete h[g]:(h[g]=f,h[g+"Params"]=aP(k)&&-1!==k.join("").indexOf("{self}")?this._swapSelfInParams(k):k,h[g+"Scope"]=j),"onUpdate"===g&&(this._onUpdate=f)
}return this
},aX.delay=function(b){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+b-this._delay),this._delay=b,this):this._delay
},aX.duration=function(b){return arguments.length?(this._duration=this._totalDuration=b,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==b&&this.totalTime(this._totalTime*(b/this._duration),!0),this):(this._dirty=!1,this._duration)
},aX.totalDuration=function(b){return this._dirty=!1,arguments.length?this.duration(b):this._totalDuration
},aX.time=function(d,c){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(d>this._duration?this._duration:d,c)):this._time
},aX.totalTime=function(g,f,k){if(aV||aW.wake(),!arguments.length){return this._totalTime
}if(this._timeline){if(0>g&&!k&&(g+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();
var j=this._totalDuration,h=this._timeline;
if(g>j&&!k&&(g=j),this._startTime=(this._paused?this._pauseTime:h._time)-(this._reversed?j-g:g)/this._timeScale,h._dirty||this._uncache(!1),h._timeline){for(;
h._timeline;
){h._timeline._time!==(h._startTime+h._totalTime)/h._timeScale&&h.totalTime(h._totalTime,!0),h=h._timeline
}}}this._gc&&this._enabled(!0,!1),(this._totalTime!==g||0===this._duration)&&(ar.length&&ac(),this.render(g,f,!1),ar.length&&ac())
}return this
},aX.progress=aX.totalProgress=function(e,d){var f=this.duration();
return arguments.length?this.totalTime(f*e,d):f?this._time/f:this.ratio
},aX.startTime=function(b){return arguments.length?(b!==this._startTime&&(this._startTime=b,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,b-this._delay)),this):this._startTime
},aX.endTime=function(b){return this._startTime+(0!=b?this.totalDuration():this.duration())/this._timeScale
},aX.timeScale=function(e){if(!arguments.length){return this._timeScale
}if(e=e||aS,this._timeline&&this._timeline.smoothChildTiming){var d=this._pauseTime,f=d||0===d?d:this._timeline.totalTime();
this._startTime=f-(f-this._startTime)*this._timeScale/e
}return this._timeScale=e,this._uncache(!1)
},aX.reversed=function(b){return arguments.length?(b!=this._reversed&&(this._reversed=b,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed
},aX.paused=function(f){if(!arguments.length){return this._paused
}var e,h,g=this._timeline;
return f!=this._paused&&g&&(aV||f||aW.wake(),e=g.rawTime(),h=e-this._pauseTime,!f&&g.smoothChildTiming&&(this._startTime+=h,this._uncache(!1)),this._pauseTime=f?e:null,this._paused=f,this._active=this.isActive(),!f&&0!==h&&this._initted&&this.duration()&&(e=g.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!f&&this._enabled(!0,!1),this
};
var aw=aL("core.SimpleTimeline",function(b){ay.call(this,0,b),this.autoRemoveChildren=this.smoothChildTiming=!0
});
aX=aw.prototype=new ay,aX.constructor=aw,aX.kill()._gc=!1,aX._first=aX._last=aX._recent=null,aX._sortChildren=!1,aX.add=aX.insert=function(h,g,m,l){var k,j;
if(h._startTime=Number(g||0)+h._delay,h._paused&&this!==h._timeline&&(h._pauseTime=h._startTime+(this.rawTime()-h._startTime)/h._timeScale),h.timeline&&h.timeline._remove(h,!0),h.timeline=h._timeline=this,h._gc&&h._enabled(!0,!0),k=this._last,this._sortChildren){for(j=h._startTime;
k&&k._startTime>j;
){k=k._prev
}}return k?(h._next=k._next,k._next=h):(h._next=this._first,this._first=h),h._next?h._next._prev=h:this._last=h,h._prev=k,this._recent=h,this._timeline&&this._uncache(!0),this
},aX._remove=function(d,c){return d.timeline===this&&(c||d._enabled(!1,!0),d._prev?d._prev._next=d._next:this._first===d&&(this._first=d._next),d._next?d._next._prev=d._prev:this._last===d&&(this._last=d._prev),d._next=d._prev=d.timeline=null,d===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this
},aX.render=function(g,f,k){var j,h=this._first;
for(this._totalTime=this._time=this._rawPrevTime=g;
h;
){j=h._next,(h._active||g>=h._startTime&&!h._paused)&&(h._reversed?h.render((h._dirty?h.totalDuration():h._totalDuration)-(g-h._startTime)*h._timeScale,f,k):h.render((g-h._startTime)*h._timeScale,f,k)),h=j
}},aX.rawTime=function(){return aV||aW.wake(),this._totalTime
};
var av=aL("TweenLite",function(a,p,o){if(ay.call(this,p,o),this.render=av.prototype.render,null==a){throw"Cannot tween a null target."
}this.target=a="string"!=typeof a?a:av.selector(a)||a;
var n,m,l,k=a.jquery||a.length&&a!==a3&&a[0]&&(a[0]===a3||a[0].nodeType&&a[0].style&&!a.nodeType),j=this.vars.overwrite;
if(this._overwrite=j=null==j?ag[av.defaultOverwrite]:"number"==typeof j?j>>0:ag[j],(k||a instanceof Array||a.push&&aP(a))&&"number"!=typeof a[0]){for(this._targets=l=aR(a),this._propLookup=[],this._siblings=[],n=0;
n<l.length;
n++){m=l[n],m?"string"!=typeof m?m.length&&m!==a3&&m[0]&&(m[0]===a3||m[0].nodeType&&m[0].style&&!m.nodeType)?(l.splice(n--,1),this._targets=l=l.concat(aR(m))):(this._siblings[n]=ab(m,this,!1),1===j&&this._siblings[n].length>1&&a5(m,this,null,1,this._siblings[n])):(m=l[n--]=av.selector(m),"string"==typeof m&&l.splice(n+1,1)):l.splice(n--,1)
}}else{this._propLookup={},this._siblings=ab(a,this,!1),1===j&&this._siblings.length>1&&a5(a,this,null,1,this._siblings)
}(this.vars.immediateRender||0===p&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-aS,this.render(Math.min(0,-this._delay)))
},!0),au=function(a){return a&&a.length&&a!==a3&&a[0]&&(a[0]===a3||a[0].nodeType&&a[0].style&&!a.nodeType)
},at=function(f,e){var h,g={};
for(h in f){ah[h]||h in e&&"transform"!==h&&"x"!==h&&"y"!==h&&"width"!==h&&"height"!==h&&"className"!==h&&"border"!==h||!(!ak[h]||ak[h]&&ak[h]._autoCSS)||(g[h]=f[h],delete f[h])
}f.css=g
};
aX=av.prototype=new ay,aX.constructor=av,aX.kill()._gc=!1,aX.ratio=0,aX._firstPT=aX._targets=aX._overwrittenProps=aX._startAt=null,aX._notifyPluginsOfEnabled=aX._lazy=!1,av.version="1.18.5",av.defaultEase=aX._ease=new aI(null,null,1,1),av.defaultOverwrite="auto",av.ticker=aW,av.autoSleep=120,av.lagSmoothing=function(d,c){aW.lagSmoothing(d,c)
},av.selector=a3.$||a3.jQuery||function(a){var d=a3.$||a3.jQuery;
return d?(av.selector=d,d(a)):"undefined"==typeof document?a:document.querySelectorAll?document.querySelectorAll(a):document.getElementById("#"===a.charAt(0)?a.substr(1):a)
};
var ar=[],aq={},ap=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,ao=function(f){for(var e,h=this._firstPT,g=0.000001;
h;
){e=h.blob?f?this.join(""):this.start:h.c*f+h.s,h.r?e=Math.round(e):g>e&&e>-g&&(e=0),h.f?h.fp?h.t[h.p](h.fp,e):h.t[h.p](e):h.t[h.p]=e,h=h._next
}},an=function(D,C,B,A){var z,y,x,w,v,u,t,s=[D,C],r=0,q="",p=0;
for(s.start=D,B&&(B(s),D=s[0],C=s[1]),s.length=0,z=D.match(ap)||[],y=C.match(ap)||[],A&&(A._next=null,A.blob=1,s._firstPT=A),v=y.length,w=0;
v>w;
w++){t=y[w],u=C.substr(r,C.indexOf(t,r)-r),q+=u||!w?u:",",r+=u.length,p?p=(p+1)%5:"rgba("===u.substr(-5)&&(p=1),t===z[w]||z.length<=w?q+=t:(q&&(s.push(q),q=""),x=parseFloat(z[w]),s.push(x),s._firstPT={_next:s._firstPT,t:s,p:s.length-1,s:x,c:("="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-x)||0,f:0,r:p&&4>p}),r+=t.length
}return q+=C.substr(r),q&&s.push(q),s.setRatio=ao,s
},am=function(B,A,z,y,x,w,v,u){var t,s,r="get"===z?B[A]:z,q=typeof B[A],p="string"==typeof y&&"="===y.charAt(1),o={t:B,p:A,s:r,f:"function"===q,pg:0,n:x||A,r:w,pr:0,c:p?parseInt(y.charAt(0)+"1",10)*parseFloat(y.substr(2)):parseFloat(y)-r||0};
return"number"!==q&&("function"===q&&"get"===z&&(s=A.indexOf("set")||"function"!=typeof B["get"+A.substr(3)]?A:"get"+A.substr(3),o.s=r=v?B[s](v):B[s]()),"string"==typeof r&&(v||isNaN(r))?(o.fp=v,t=an(r,y,u||av.defaultStringFilter,o),o={t:t,p:"setRatio",s:0,c:1,f:2,pg:0,n:x||A,pr:0}):p||(o.s=parseFloat(r),o.c=parseFloat(y)-o.s||0)),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0
},al=av._internals={isArray:aP,isSelector:au,lazyTweens:ar,blobDif:an},ak=av._plugins={},aj=al.tweenLookup={},ai=0,ah=al.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},ag={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},af=ay._rootFramesTimeline=new aw,ae=ay._rootTimeline=new aw,ad=30,ac=al.lazyRender=function(){var d,c=ar.length;
for(aq={};
--c>-1;
){d=ar[c],d&&d._lazy!==!1&&(d.render(d._lazy[0],d._lazy[1],!0),d._lazy=!1)
}ar.length=0
};
ae._startTime=aW.time,af._startTime=aW.frame,ae._active=af._active=!0,setTimeout(ac,1),ay._updateRoot=av.render=function(){var e,d,f;
if(ar.length&&ac(),ae.render((aW.time-ae._startTime)*ae._timeScale,!1,!1),af.render((aW.frame-af._startTime)*af._timeScale,!1,!1),ar.length&&ac(),aW.frame>=ad){ad=aW.frame+(parseInt(av.autoSleep,10)||120);
for(f in aj){for(d=aj[f].tweens,e=d.length;
--e>-1;
){d[e]._gc&&d.splice(e,1)
}0===d.length&&delete aj[f]
}if(f=ae._first,(!f||f._paused)&&av.autoSleep&&!af._first&&1===aW._listeners.tick.length){for(;
f&&f._paused;
){f=f._next
}f||aW.sleep()
}}},aW.addEventListener("tick",ay._updateRoot);
var ab=function(h,g,m){var l,k,j=h._gsTweenID;
if(aj[j||(h._gsTweenID=j="t"+ai++)]||(aj[j]={target:h,tweens:[]}),g&&(l=aj[j].tweens,l[k=l.length]=g,m)){for(;
--k>-1;
){l[k]===g&&l.splice(k,1)
}}return aj[j].tweens
},aD=function(j,h,o,n){var m,l,k=j.vars.onOverwrite;
return k&&(m=k(j,h,o,n)),k=av.onOverwrite,k&&(l=k(j,h,o,n)),m!==!1&&l!==!1
},a5=function(B,A,z,y,x){var w,v,u,t;
if(1===y||y>=4){for(t=x.length,w=0;
t>w;
w++){if((u=x[w])!==A){u._gc||u._kill(null,B,A)&&(v=!0)
}else{if(5===y){break
}}}return v
}var s,r=A._startTime+aS,q=[],p=0,l=0===A._duration;
for(w=x.length;
--w>-1;
){(u=x[w])===A||u._gc||u._paused||(u._timeline!==A._timeline?(s=s||aC(A,0,l),0===aC(u,s,l)&&(q[p++]=u)):u._startTime<=r&&u._startTime+u.totalDuration()/u._timeScale>r&&((l||!u._initted)&&r-u._startTime<=2e-10||(q[p++]=u)))
}for(w=p;
--w>-1;
){if(u=q[w],2===y&&u._kill(z,B,A)&&(v=!0),2!==y||!u._firstPT&&u._initted){if(2!==y&&!aD(u,A)){continue
}u._enabled(!1,!1)&&(v=!0)
}}return v
},aC=function(h,g,m){for(var l=h._timeline,k=l._timeScale,j=h._startTime;
l._timeline;
){if(j+=l._startTime,k*=l._timeScale,l._paused){return -100
}l=l._timeline
}return j/=k,j>g?j-g:m&&j===g||!h._initted&&2*aS>j-g?aS:(j+=h.totalDuration()/h._timeScale/k)>g+aS?0:j-g-aS
};
aX._init=function(){var t,s,r,q,p,o=this.vars,n=this._overwrittenProps,m=this._duration,l=!!o.immediateRender,k=o.ease;
if(o.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),p={};
for(q in o.startAt){p[q]=o.startAt[q]
}if(p.overwrite=!1,p.immediateRender=!0,p.lazy=l&&o.lazy!==!1,p.startAt=p.delay=null,this._startAt=av.to(this.target,0,p),l){if(this._time>0){this._startAt=null
}else{if(0!==m){return
}}}}else{if(o.runBackwards&&0!==m){if(this._startAt){this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null
}else{0!==this._time&&(l=!1),r={};
for(q in o){ah[q]&&"autoCSS"!==q||(r[q]=o[q])
}if(r.overwrite=0,r.data="isFromStart",r.lazy=l&&o.lazy!==!1,r.immediateRender=l,this._startAt=av.to(this.target,0,r),l){if(0===this._time){return
}}else{this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)
}}}}if(this._ease=k=k?k instanceof aI?k:"function"==typeof k?new aI(k,o.easeParams):aH[k]||av.defaultEase:av.defaultEase,o.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,o.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets){for(t=this._targets.length;
--t>-1;
){this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(s=!0)
}}else{s=this._initProps(this.target,this._propLookup,this._siblings,n)
}if(s&&av._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),o.runBackwards){for(r=this._firstPT;
r;
){r.s+=r.c,r.c=-r.c,r=r._next
}}this._onUpdate=o.onUpdate,this._initted=!0
},aX._initProps=function(t,s,r,q){var p,o,n,m,l,a;
if(null==t){return !1
}aq[t._gsTweenID]&&ac(),this.vars.css||t.style&&t!==a3&&t.nodeType&&ak.css&&this.vars.autoCSS!==!1&&at(this.vars,t);
for(p in this.vars){if(a=this.vars[p],ah[p]){a&&(a instanceof Array||a.push&&aP(a))&&-1!==a.join("").indexOf("{self}")&&(this.vars[p]=a=this._swapSelfInParams(a,this))
}else{if(ak[p]&&(m=new ak[p])._onInitTween(t,this.vars[p],this)){for(this._firstPT=l={_next:this._firstPT,t:m,p:"setRatio",s:0,c:1,f:1,n:p,pg:1,pr:m._priority},o=m._overwriteProps.length;
--o>-1;
){s[m._overwriteProps[o]]=this._firstPT
}(m._priority||m._onInitAllProps)&&(n=!0),(m._onDisable||m._onEnable)&&(this._notifyPluginsOfEnabled=!0),l._next&&(l._next._prev=l)
}else{s[p]=am.call(this,t,p,"get",a,p,0,null,this.vars.stringFilter)
}}}return q&&this._kill(q,t)?this._initProps(t,s,r,q):this._overwrite>1&&this._firstPT&&r.length>1&&a5(t,this,s,this._overwrite,r)?(this._kill(s,t),this._initProps(t,s,r,q)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(aq[t._gsTweenID]=!0),n)
},aX.render=function(z,y,x){var w,v,u,t,s=this._time,r=this._duration,q=this._rawPrevTime;
if(z>=r-1e-7){this._totalTime=this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(w=!0,v="onComplete",x=x||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||x)&&(this._startTime===this._timeline._duration&&(z=0),(0>q||0>=z&&z>=-1e-7||q===aS&&"isPause"!==this.data)&&q!==z&&(x=!0,q>aS&&(v="onReverseComplete")),this._rawPrevTime=t=!y||z||q===z?z:aS)
}else{if(1e-7>z){this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==s||0===r&&q>0)&&(v="onReverseComplete",w=this._reversed),0>z&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||x)&&(q>=0&&(q!==aS||"isPause"!==this.data)&&(x=!0),this._rawPrevTime=t=!y||z||q===z?z:aS)),this._initted||(x=!0)
}else{if(this._totalTime=this._time=z,this._easeType){var p=z/r,o=this._easeType,l=this._easePower;
(1===o||3===o&&p>=0.5)&&(p=1-p),3===o&&(p*=2),1===l?p*=p:2===l?p*=p*p:3===l?p*=p*p*p:4===l&&(p*=p*p*p*p),1===o?this.ratio=1-p:2===o?this.ratio=p:0.5>z/r?this.ratio=p/2:this.ratio=1-p/2
}else{this.ratio=this._ease.getRatio(z/r)
}}}if(this._time!==s||x){if(!this._initted){if(this._init(),!this._initted||this._gc){return
}if(!x&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)){return this._time=this._totalTime=s,this._rawPrevTime=q,ar.push(this),void (this._lazy=[z,y])
}this._time&&!w?this.ratio=this._ease.getRatio(this._time/r):w&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==s&&z>=0&&(this._active=!0),0===s&&(this._startAt&&(z>=0?this._startAt.render(z,y,x):v||(v="_dummyGS")),this.vars.onStart&&(0!==this._time||0===r)&&(y||this._callback("onStart"))),u=this._firstPT;
u;
){u.f?u.t[u.p](u.c*this.ratio+u.s):u.t[u.p]=u.c*this.ratio+u.s,u=u._next
}this._onUpdate&&(0>z&&this._startAt&&z!==-0.0001&&this._startAt.render(z,y,x),y||(this._time!==s||w||x)&&this._callback("onUpdate")),v&&(!this._gc||x)&&(0>z&&this._startAt&&!this._onUpdate&&z!==-0.0001&&this._startAt.render(z,y,x),w&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!y&&this.vars[v]&&this._callback(v),0===r&&this._rawPrevTime===aS&&t!==aS&&(this._rawPrevTime=0))
}},aX._kill=function(z,y,x){if("all"===z&&(z=null),null==z&&(null==y||y===this.target)){return this._lazy=!1,this._enabled(!1,!1)
}y="string"!=typeof y?y||this._targets||this.target:av.selector(y)||y;
var w,v,u,t,s,r,q,p,o,n=x&&this._time&&x._startTime===this._startTime&&this._timeline===x._timeline;
if((aP(y)||au(y))&&"number"!=typeof y[0]){for(w=y.length;
--w>-1;
){this._kill(z,y[w],x)&&(r=!0)
}}else{if(this._targets){for(w=this._targets.length;
--w>-1;
){if(y===this._targets[w]){s=this._propLookup[w]||{},this._overwrittenProps=this._overwrittenProps||[],v=this._overwrittenProps[w]=z?this._overwrittenProps[w]||{}:"all";
break
}}}else{if(y!==this.target){return !1
}s=this._propLookup,v=this._overwrittenProps=z?this._overwrittenProps||{}:"all"
}if(s){if(q=z||s,p=z!==v&&"all"!==v&&z!==s&&("object"!=typeof z||!z._tempKill),x&&(av.onOverwrite||this.vars.onOverwrite)){for(u in q){s[u]&&(o||(o=[]),o.push(u))
}if((o||!z)&&!aD(this,x,y,o)){return !1
}}for(u in q){(t=s[u])&&(n&&(t.f?t.t[t.p](t.s):t.t[t.p]=t.s,r=!0),t.pg&&t.t._kill(q)&&(r=!0),t.pg&&0!==t.t._overwriteProps.length||(t._prev?t._prev._next=t._next:t===this._firstPT&&(this._firstPT=t._next),t._next&&(t._next._prev=t._prev),t._next=t._prev=null),delete s[u]),p&&(v[u]=1)
}!this._firstPT&&this._initted&&this._enabled(!1,!1)
}}return r
},aX.invalidate=function(){return this._notifyPluginsOfEnabled&&av._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],ay.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-aS,this.render(Math.min(0,-this._delay))),this
},aX._enabled=function(f,e){if(aV||aW.wake(),f&&this._gc){var h,g=this._targets;
if(g){for(h=g.length;
--h>-1;
){this._siblings[h]=ab(g[h],this,!0)
}}else{this._siblings=ab(this.target,this,!0)
}}return ay.prototype._enabled.call(this,f,e),this._notifyPluginsOfEnabled&&this._firstPT?av._onPluginEvent(f?"_onEnable":"_onDisable",this):!1
},av.to=function(e,d,f){return new av(e,d,f)
},av.from=function(e,d,f){return f.runBackwards=!0,f.immediateRender=0!=f.immediateRender,new av(e,d,f)
},av.fromTo=function(f,e,h,g){return g.startAt=h,g.immediateRender=0!=g.immediateRender&&0!=h.immediateRender,new av(f,e,g)
},av.delayedCall=function(g,f,k,j,h){return new av(f,0,{delay:g,onComplete:f,onCompleteParams:k,callbackScope:j,onReverseComplete:f,onReverseCompleteParams:k,immediateRender:!1,lazy:!1,useFrames:h,overwrite:0})
},av.set=function(d,c){return new av(d,0,c)
},av.getTweensOf=function(h,g){if(null==h){return[]
}h="string"!=typeof h?h:av.selector(h)||h;
var m,l,k,j;
if((aP(h)||au(h))&&"number"!=typeof h[0]){for(m=h.length,l=[];
--m>-1;
){l=l.concat(av.getTweensOf(h[m],g))
}for(m=l.length;
--m>-1;
){for(j=l[m],k=m;
--k>-1;
){j===l[k]&&l.splice(m,1)
}}}else{for(l=ab(h).concat(),m=l.length;
--m>-1;
){(l[m]._gc||g&&!l[m].isActive())&&l.splice(m,1)
}}return l
},av.killTweensOf=av.killDelayedCallsTo=function(g,f,k){"object"==typeof f&&(k=f,f=!1);
for(var j=av.getTweensOf(g,f),h=j.length;
--h>-1;
){j[h]._kill(k,g)
}};
var a4=aL("plugins.TweenPlugin",function(d,c){this._overwriteProps=(d||"").split(","),this._propName=this._overwriteProps[0],this._priority=c||0,this._super=a4.prototype
},!0);
if(aX=a4.prototype,a4.version="1.18.0",a4.API=2,aX._firstPT=null,aX._addTween=am,aX.setRatio=ao,aX._kill=function(f){var e,h=this._overwriteProps,g=this._firstPT;
if(null!=f[this._propName]){this._overwriteProps=[]
}else{for(e=h.length;
--e>-1;
){null!=f[h[e]]&&h.splice(e,1)
}}for(;
g;
){null!=f[g.n]&&(g._next&&(g._next._prev=g._prev),g._prev?(g._prev._next=g._next,g._prev=null):this._firstPT===g&&(this._firstPT=g._next)),g=g._next
}return !1
},aX._roundProps=function(e,d){for(var f=this._firstPT;
f;
){(e[this._propName]||null!=f.n&&e[f.n.split(this._propName+"_").join("")])&&(f.r=d),f=f._next
}},av._onPluginEvent=function(k,j){var q,p,o,n,m,l=j._firstPT;
if("_onInitAllProps"===k){for(;
l;
){for(m=l._next,p=o;
p&&p.pr>l.pr;
){p=p._next
}(l._prev=p?p._prev:n)?l._prev._next=l:o=l,(l._next=p)?p._prev=l:n=l,l=m
}l=j._firstPT=o
}for(;
l;
){l.pg&&"function"==typeof l.t[k]&&l.t[k]()&&(q=!0),l=l._next
}return q
},a4.activate=function(d){for(var c=d.length;
--c>-1;
){d[c].API===a4.API&&(ak[(new d[c])._propName]=d[c])
}return !0
},aM.plugin=function(k){if(!(k&&k.propName&&k.init&&k.API)){throw"illegal plugin definition."
}var j,q=k.propName,p=k.priority||0,o=k.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},m=aL("plugins."+q.charAt(0).toUpperCase()+q.substr(1)+"Plugin",function(){a4.call(this,q,p),this._overwriteProps=o||[]
},k.global===!0),l=m.prototype=new a4(q);
l.constructor=m,m.API=k.API;
for(j in n){"function"==typeof k[j]&&(l[n[j]]=k[j])
}return m.version=k.version,a4.activate([m]),m
},aZ=a3._gsQueue){for(aY=0;
aY<aZ.length;
aY++){aZ[aY]()
}for(aX in aO){aO[aX].func||a3.console.log("GSAP encountered missing dependency: com.greensock."+aX)
}}aV=!1
}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*!
 * VERSION: 1.18.5
 * DATE: 2016-05-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
;
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(aW,aV){var aU,aR,aQ,aP,aO=function(){aW.call(this,"css"),this._overwriteProps.length=0,this.setRatio=aO.prototype.setRatio
},aN=_gsScope._gsDefine.globals,aK={},aJ=aO.prototype=new aW("css");
aJ.constructor=aO,aO.version="1.18.5",aO.API=2,aO.defaultTransformPerspective=0,aO.defaultSkewType="compensated",aO.defaultSmoothOrigin=!0,aJ="px",aO.suffixMap={top:aJ,right:aJ,bottom:aJ,left:aJ,width:aJ,height:aJ,fontSize:aJ,padding:aJ,margin:aJ,perspective:aJ,lineHeight:""};
var aI,aH,aG,aE,aD,aC,aB=/(?:\-|\.|\b)(\d|\.|e\-)+/g,aA=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,az=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,ay=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,ax=/(?:\d|\-|\+|=|#|\.)*/g,aw=/opacity *= *([^)]*)/i,av=/opacity:([^;]*)/i,au=/alpha\(opacity *=.+?\)/i,at=/^(rgb|hsl)/,ar=/([A-Z])/g,bw=/-([a-z])/gi,bv=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,bu=function(d,c){return c.toUpperCase()
},bt=/(?:Left|Right|Width)/i,bq=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,bp=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,bo=/,(?=[^\)]*(?:\(|$))/gi,bn=/[\s,\(]/i,bm=Math.PI/180,bj=180/Math.PI,bi={},bh=document,bg=function(b){return bh.createElementNS?bh.createElementNS("http://www.w3.org/1999/xhtml",b):bh.createElement(b)
},bf=bg("div"),be=bg("img"),bc=aO._internals={_specialProps:aK},bb=navigator.userAgent,a9=function(){var d=bb.indexOf("Android"),c=bg("a");
return aG=-1!==bb.indexOf("Safari")&&-1===bb.indexOf("Chrome")&&(-1===d||Number(bb.substr(d+8,1))>3),aD=aG&&Number(bb.substr(bb.indexOf("Version/")+8,1))<6,aE=-1!==bb.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(bb)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(bb))&&(aC=parseFloat(RegExp.$1)),c?(c.style.cssText="top:1px;opacity:.55;",/^0.55/.test(c.style.opacity)):!1
}(),a8=function(b){return aw.test("string"==typeof b?b:(b.currentStyle?b.currentStyle.filter:b.style.filter)||"")?parseFloat(RegExp.$1)/100:1
},a7=function(b){window.console&&console.log(b)
},a6="",a5="",a4=function(g,f){f=f||bf;
var k,j,h=f.style;
if(void 0!==h[g]){return g
}for(g=g.charAt(0).toUpperCase()+g.substr(1),k=["O","Moz","ms","Ms","Webkit"],j=5;
--j>-1&&void 0===h[k[j]+g];
){}return j>=0?(a5=3===j?"ms":k[j],a6="-"+a5.toLowerCase()+"-",a5+g):null
},a3=bh.defaultView?bh.defaultView.getComputedStyle:function(){},a2=aO.getStyle=function(h,g,m,l,k){var j;
return a9||"opacity"!==g?(!l&&h.style[g]?j=h.style[g]:(m=m||a3(h))?j=m[g]||m.getPropertyValue(g)||m.getPropertyValue(g.replace(ar,"-$1").toLowerCase()):h.currentStyle&&(j=h.currentStyle[g]),null==k||j&&"none"!==j&&"auto"!==j&&"auto auto"!==j?j:k):a8(h)
},a0=bc.convertToPixels=function(z,y,x,w,v){if("px"===w||!w){return x
}if("auto"===w||!x){return 0
}var u,t,s,r=bt.test(y),q=z,p=bf.style,g=0>x,b=1===x;
if(g&&(x=-x),b&&(x*=100),"%"===w&&-1!==y.indexOf("border")){u=x/100*(r?z.clientWidth:z.clientHeight)
}else{if(p.cssText="border:0 solid red;position:"+a2(z,"position")+";line-height:0;","%"!==w&&q.appendChild&&"v"!==w.charAt(0)&&"rem"!==w){p[r?"borderLeftWidth":"borderTopWidth"]=x+w
}else{if(q=z.parentNode||bh.body,t=q._gsCache,s=aV.ticker.frame,t&&r&&t.time===s){return t.width*x/100
}p[r?"width":"height"]=x+w
}q.appendChild(bf),u=parseFloat(bf[r?"offsetWidth":"offsetHeight"]),q.removeChild(bf),r&&"%"===w&&aO.cacheWidths!==!1&&(t=q._gsCache=q._gsCache||{},t.time=s,t.width=u/x*100),0!==u||v||(u=a0(z,y,x,w,!0))
}return b&&(u/=100),g?-u:u
},bG=bc.calculateOffset=function(g,f,k){if("absolute"!==a2(g,"position",k)){return 0
}var j="left"===f?"Left":"Top",h=a2(g,"margin"+j,k);
return g["offset"+j]-(a0(g,f,parseFloat(h),h.replace(ax,""))||0)
},aY=function(h,g){var m,l,k,j={};
if(g=g||a3(h,null)){if(m=g.length){for(;
--m>-1;
){k=g[m],(-1===k.indexOf("-transform")||bM===k)&&(j[k.replace(bw,bu)]=g.getPropertyValue(k))
}}else{for(m in g){(-1===m.indexOf("Transform")||bz===m)&&(j[m]=g[m])
}}}else{if(g=h.currentStyle||h.style){for(m in g){"string"==typeof m&&void 0===j[m]&&(j[m.replace(bw,bu)]=g[m])
}}}return a9||(j.opacity=a8(h)),l=bI(h,g,!1),j.rotation=l.rotation,j.skewX=l.skewX,j.scaleX=l.scaleX,j.scaleY=l.scaleY,j.x=l.x,j.y=l.y,bl&&(j.z=l.z,j.rotationX=l.rotationX,j.rotationY=l.rotationY,j.scaleZ=l.scaleZ),j.filters&&delete j.filters,j
},bB=function(t,s,r,q,p){var o,n,m,l={},k=t.style;
for(n in r){"cssText"!==n&&"length"!==n&&isNaN(n)&&(s[n]!==(o=r[n])||p&&p[n])&&-1===n.indexOf("Origin")&&("number"==typeof o||"string"==typeof o)&&(l[n]="auto"!==o||"left"!==n&&"top"!==n?""!==o&&"auto"!==o&&"none"!==o||"string"!=typeof s[n]||""===s[n].replace(ay,"")?o:0:bG(t,n),void 0!==k[n]&&(m=new an(k,n,k[n],m)))
}if(q){for(n in q){"className"!==n&&(l[n]=q[n])
}}return{difs:l,firstMPT:m}
},bd={width:["Left","Right"],height:["Top","Bottom"]},aF=["marginLeft","marginRight","marginTop","marginBottom"],ak=function(h,g,m){if("svg"===(h.nodeName+"").toLowerCase()){return(m||a3(h))[g]||0
}if(h.getBBox&&ao(h)){return h.getBBox()[g]||0
}var l=parseFloat("width"===g?h.offsetWidth:h.offsetHeight),k=bd[g],j=k.length;
for(m=m||a3(h,null);
--j>-1;
){l-=parseFloat(a2(h,"padding"+k[j],m,!0))||0,l-=parseFloat(a2(h,"border"+k[j]+"Width",m,!0))||0
}return l
},ad=function(h,g){if("contain"===h||"auto"===h||"auto auto"===h){return h+" "
}(null==h||""===h)&&(h="0 0");
var m,l=h.split(" "),k=-1!==h.indexOf("left")?"0%":-1!==h.indexOf("right")?"100%":l[0],j=-1!==h.indexOf("top")?"0%":-1!==h.indexOf("bottom")?"100%":l[1];
if(l.length>3&&!g){for(l=h.split(", ").join(",").split(","),h=[],m=0;
m<l.length;
m++){h.push(ad(l[m]))
}return h.join(",")
}return null==j?j="center"===k?"50%":"0":"center"===j&&(j="50%"),("center"===k||isNaN(parseFloat(k))&&-1===(k+"").indexOf("="))&&(k="50%"),h=k+" "+j+(l.length>2?" "+l[2]:""),g&&(g.oxp=-1!==k.indexOf("%"),g.oyp=-1!==j.indexOf("%"),g.oxr="="===k.charAt(1),g.oyr="="===j.charAt(1),g.ox=parseFloat(k.replace(ay,"")),g.oy=parseFloat(j.replace(ay,"")),g.v=h),g||h
},bL=function(d,c){return"string"==typeof d&&"="===d.charAt(1)?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-parseFloat(c)||0
},bC=function(d,c){return null==d?c:"string"==typeof d&&"="===d.charAt(1)?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2))+c:parseFloat(d)||0
},bk=function(t,s,r,q){var p,o,n,m,l,k=0.000001;
return null==t?m=s:"number"==typeof t?m=t:(p=360,o=t.split("_"),l="="===t.charAt(1),n=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(o[0].substr(2)):parseFloat(o[0]))*(-1===t.indexOf("rad")?1:bj)-(l?0:s),o.length&&(q&&(q[r]=s+n),-1!==t.indexOf("short")&&(n%=p,n!==n%(p/2)&&(n=0>n?n+p:n-p)),-1!==t.indexOf("_cw")&&0>n?n=(n+9999999999*p)%p-(n/p|0)*p:-1!==t.indexOf("ccw")&&n>0&&(n=(n-9999999999*p)%p-(n/p|0)*p)),m=s+n),k>m&&m>-k&&(m=0),m
},aL={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},al=function(e,d,f){return e=0>e?e+1:e>1?e-1:e,255*(1>6*e?d+(f-d)*e*6:0.5>e?f:2>3*e?d+(f-d)*(2/3-e)*6:d)+0.5|0
},ae=aO.parseColor=function(z,y){var x,w,v,u,t,s,r,q,p,o,n;
if(z){if("number"==typeof z){x=[z>>16,z>>8&255,255&z]
}else{if(","===z.charAt(z.length-1)&&(z=z.substr(0,z.length-1)),aL[z]){x=aL[z]
}else{if("#"===z.charAt(0)){4===z.length&&(w=z.charAt(1),v=z.charAt(2),u=z.charAt(3),z="#"+w+w+v+v+u+u),z=parseInt(z.substr(1),16),x=[z>>16,z>>8&255,255&z]
}else{if("hsl"===z.substr(0,3)){if(x=n=z.match(aB),y){if(-1!==z.indexOf("=")){return z.match(aA)
}}else{t=Number(x[0])%360/360,s=Number(x[1])/100,r=Number(x[2])/100,v=0.5>=r?r*(s+1):r+s-r*s,w=2*r-v,x.length>3&&(x[3]=Number(z[3])),x[0]=al(t+1/3,w,v),x[1]=al(t,w,v),x[2]=al(t-1/3,w,v)
}}else{x=z.match(aB)||aL.transparent
}}}x[0]=Number(x[0]),x[1]=Number(x[1]),x[2]=Number(x[2]),x.length>3&&(x[3]=Number(x[3]))
}}else{x=aL.black
}return y&&!n&&(w=x[0]/255,v=x[1]/255,u=x[2]/255,q=Math.max(w,v,u),p=Math.min(w,v,u),r=(q+p)/2,q===p?t=s=0:(o=q-p,s=r>0.5?o/(2-q-p):o/(q+p),t=q===w?(v-u)/o+(u>v?6:0):q===v?(u-w)/o+2:(w-v)/o+4,t*=60),x[0]=t+0.5|0,x[1]=100*s+0.5|0,x[2]=100*r+0.5|0),x
},bN=function(k,j){var q,p,o,n=k.match(bE)||[],m=0,l=n.length?"":k;
for(q=0;
q<n.length;
q++){p=n[q],o=k.substr(m,k.indexOf(p,m)-m),m+=o.length+p.length,p=ae(p,j),3===p.length&&p.push(1),l+=o+(j?"hsla("+p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:"rgba("+p.join(","))+")"
}return l+k.substr(m)
},bE="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
for(aJ in aL){bE+="|"+aJ+"\\b"
}bE=new RegExp(bE+")","gi"),aO.colorStringFilter=function(e){var d,f=e[0]+e[1];
bE.test(f)&&(d=-1!==f.indexOf("hsl(")||-1!==f.indexOf("hsla("),e[0]=bN(e[0],d),e[1]=bN(e[1],d)),bE.lastIndex=0
},aV.defaultStringFilter||(aV.defaultStringFilter=aO.colorStringFilter);
var br=function(x,w,v,u){if(null==x){return function(b){return b
}
}var t,s=w?(x.match(bE)||[""])[0]:"",r=x.split(s).join("").match(az)||[],q=x.substr(0,x.indexOf(r[0])),p=")"===x.charAt(x.length-1)?")":"",o=-1!==x.indexOf(" ")?" ":",",n=r.length,m=n>0?r[0].replace(aB,""):"";
return n?t=w?function(e){var d,c,g,f;
if("number"==typeof e){e+=m
}else{if(u&&bo.test(e)){for(f=e.replace(bo,"|").split("|"),g=0;
g<f.length;
g++){f[g]=t(f[g])
}return f.join(",")
}}if(d=(e.match(bE)||[s])[0],c=e.split(d).join("").match(az)||[],g=c.length,n>g--){for(;
++g<n;
){c[g]=v?c[(g-1)/2|0]:r[g]
}}return q+c.join(o)+o+d+p+(-1!==e.indexOf("inset")?" inset":"")
}:function(e){var d,g,c;
if("number"==typeof e){e+=m
}else{if(u&&bo.test(e)){for(g=e.replace(bo,"|").split("|"),c=0;
c<g.length;
c++){g[c]=t(g[c])
}return g.join(",")
}}if(d=e.match(az)||[],c=d.length,n>c--){for(;
++c<n;
){d[c]=v?d[(c-1)/2|0]:r[c]
}}return q+d.join(o)+p
}:function(b){return b
}
},aS=function(b){return b=b.split(","),function(r,q,p,o,n,m,l){var k,a=(q+"").split(" ");
for(l={},k=0;
4>k;
k++){l[b[k]]=a[k]=a[k]||a[(k-1)/2>>0]
}return o.parse(r,l,n,m)
}
},an=(bc._setPluginRatio=function(t){this.plugin.setRatio(t);
for(var s,r,q,p,o,n=this.data,m=n.proxy,l=n.firstMPT,k=0.000001;
l;
){s=m[l.v],l.r?s=Math.round(s):k>s&&s>-k&&(s=0),l.t[l.p]=s,l=l._next
}if(n.autoRotate&&(n.autoRotate.rotation=m.rotation),1===t||0===t){for(l=n.firstMPT,o=1===t?"e":"b";
l;
){if(r=l.t,r.type){if(1===r.type){for(p=r.xs0+r.s+r.xs1,q=1;
q<r.l;
q++){p+=r["xn"+q]+r["xs"+(q+1)]
}r[o]=p
}}else{r[o]=r.s+r.xs0
}l=l._next
}}},function(g,f,k,j,h){this.t=g,this.p=f,this.v=k,this.r=h,j&&(j._prev=this,this._next=j)
}),ag=(bc._parseToProxy=function(F,E,D,C,B,A){var z,y,x,w,v,u=C,t={},s={},r=D._transform,q=bi;
for(D._transform=null,bi=E,C=v=D.parse(F,E,C,B),bi=q,A&&(D._transform=r,u&&(u._prev=null,u._prev&&(u._prev._next=null)));
C&&C!==u;
){if(C.type<=1&&(y=C.p,s[y]=C.s+C.c,t[y]=C.s,A||(w=new an(C,"s",y,w,C.r),C.c=0),1===C.type)){for(z=C.l;
--z>0;
){x="xn"+z,y=C.p+"_"+x,s[y]=C.data[x],t[y]=C[x],A||(w=new an(C,x,y,w,C.rxp[x]))
}}C=C._next
}return{proxy:t,end:s,firstMPT:w,pt:v}
},bc.CSSPropTween=function(v,u,t,s,r,q,p,o,n,f,c){this.t=v,this.p=u,this.s=t,this.c=s,this.n=p||u,v instanceof ag||aP.push(this.n),this.r=o,this.type=q||0,n&&(this.pr=n,aU=!0),this.b=void 0===f?t:f,this.e=void 0===c?t+s:c,r&&(this._next=r,r._prev=this)
}),bP=function(j,h,o,n,m,l){var k=new ag(j,h,o,n-o,m,-1,l);
return k.b=o,k.e=k.xs0=n,k
},bH=aO.parseComplex=function(ba,aa,Z,Y,X,W,V,U,T,S){Z=Z||W||"",V=new ag(ba,aa,0,0,V,S?2:1,null,!1,U,Z,Y),Y+="",X&&bE.test(Y+Z)&&(Y=[Z,Y],aO.colorStringFilter(Y),Z=Y[0],Y=Y[1]);
var R,Q,P,O,K,I,G,F,r,q,k,g,N,M=Z.split(", ").join(",").split(" "),L=Y.split(", ").join(",").split(" "),J=M.length,H=aI!==!1;
for((-1!==Y.indexOf(",")||-1!==Z.indexOf(","))&&(M=M.join(" ").replace(bo,", ").split(" "),L=L.join(" ").replace(bo,", ").split(" "),J=M.length),J!==L.length&&(M=(W||"").split(" "),J=M.length),V.plugin=T,V.setRatio=S,bE.lastIndex=0,R=0;
J>R;
R++){if(O=M[R],K=L[R],F=parseFloat(O),F||0===F){V.appendXtra("",F,bL(K,F),K.replace(aA,""),H&&-1!==K.indexOf("px"),!0)
}else{if(X&&bE.test(O)){g=K.indexOf(")")+1,g=")"+(g?K.substr(g):""),N=-1!==K.indexOf("hsl")&&a9,O=ae(O,N),K=ae(K,N),r=O.length+K.length>6,r&&!a9&&0===K[3]?(V["xs"+V.l]+=V.l?" transparent":"transparent",V.e=V.e.split(L[R]).join("transparent")):(a9||(r=!1),N?V.appendXtra(r?"hsla(":"hsl(",O[0],bL(K[0],O[0]),",",!1,!0).appendXtra("",O[1],bL(K[1],O[1]),"%,",!1).appendXtra("",O[2],bL(K[2],O[2]),r?"%,":"%"+g,!1):V.appendXtra(r?"rgba(":"rgb(",O[0],K[0]-O[0],",",!0,!0).appendXtra("",O[1],K[1]-O[1],",",!0).appendXtra("",O[2],K[2]-O[2],r?",":g,!0),r&&(O=O.length<4?1:O[3],V.appendXtra("",O,(K.length<4?1:K[3])-O,g,!1))),bE.lastIndex=0
}else{if(I=O.match(aB)){if(G=K.match(aA),!G||G.length!==I.length){return V
}for(P=0,Q=0;
Q<I.length;
Q++){k=I[Q],q=O.indexOf(k,P),V.appendXtra(O.substr(P,q-P),Number(k),bL(G[Q],k),"",H&&"px"===O.substr(q+k.length,2),0===Q),P=q+k.length
}V["xs"+V.l]+=O.substr(P)
}else{V["xs"+V.l]+=V.l||V["xs"+V.l]?" "+K:K
}}}}if(-1!==Y.indexOf("=")&&V.data){for(g=V.xs0+V.data.s,R=1;
R<V.l;
R++){g+=V["xs"+R]+V.data["xn"+R]
}V.e=g+V["xs"+R]
}return V.l||(V.type=-1,V.xs0=V.e),V.xfirst||V
},bx=9;
for(aJ=ag.prototype,aJ.l=aJ.pr=0;
--bx>0;
){aJ["xn"+bx]=0,aJ["xs"+bx]=""
}aJ.xs0="",aJ._next=aJ._prev=aJ.xfirst=aJ.data=aJ.plugin=aJ.setRatio=aJ.rxp=null,aJ.appendXtra=function(k,j,q,p,o,n){var m=this,l=m.l;
return m["xs"+l]+=n&&(l||m["xs"+l])?" "+k:k||"",q||0===l||m.plugin?(m.l++,m.type=m.setRatio?2:1,m["xs"+m.l]=p||"",l>0?(m.data["xn"+l]=j+q,m.rxp["xn"+l]=o,m["xn"+l]=j,m.plugin||(m.xfirst=new ag(m,"xn"+l,j,q,m.xfirst||m,0,m.n,o,m.pr),m.xfirst.xs0=0),m):(m.data={s:j+q},m.rxp={},m.s=j,m.c=q,m.r=o,m)):(m["xs"+l]+=j+(p||""),m)
};
var aX=function(d,c){c=c||{},this.p=c.prefix?a4(d)||d:d,aK[d]=aK[this.p]=this,this.format=c.formatter||br(c.defaultValue,c.color,c.collapsible,c.multi),c.parser&&(this.parse=c.parser),this.clrs=c.color,this.multi=c.multi,this.keyword=c.keyword,this.dflt=c.defaultValue,this.pr=c.priority||0
},ap=bc._registerComplexSpecialProp=function(j,h,o){"object"!=typeof h&&(h={parser:o});
var n,m,l=j.split(","),k=h.defaultValue;
for(o=o||[k],n=0;
n<l.length;
n++){h.prefix=0===n&&h.prefix,h.defaultValue=o[n]||k,m=new aX(l[n],h)
}},ai=function(d){if(!aK[d]){var c=d.charAt(0).toUpperCase()+d.substr(1)+"Plugin";
ap(d,{parser:function(b,q,p,o,n,m,l){var h=aN.com.greensock.plugins[c];
return h?(h._cssRegister(),aK[p].parse(b,q,p,o,n,m,l)):(a7("Error: "+c+" js file not loaded."),n)
}})
}};
aJ=aX.prototype,aJ.parseComplex=function(z,y,x,w,v,u){var t,s,r,q,p,o,n=this.keyword;
if(this.multi&&(bo.test(x)||bo.test(y)?(s=y.replace(bo,"|").split("|"),r=x.replace(bo,"|").split("|")):n&&(s=[y],r=[x])),r){for(q=r.length>s.length?r.length:s.length,t=0;
q>t;
t++){y=s[t]=s[t]||this.dflt,x=r[t]=r[t]||this.dflt,n&&(p=y.indexOf(n),o=x.indexOf(n),p!==o&&(-1===o?s[t]=s[t].split(n).join(""):-1===p&&(s[t]+=" "+n)))
}y=s.join(", "),x=r.join(", ")
}return bH(z,this.p,y,x,this.clrs,this.dflt,w,this.pr,v,u)
},aJ.parse=function(j,e,o,n,m,l,k){return this.parseComplex(j.style,this.format(a2(j,this.p,aQ,!1,this.dflt)),this.format(e),m,l)
},aO.registerSpecialProp=function(e,d,f){ap(e,{parser:function(b,p,o,n,m,l,k){var c=new ag(b,o,0,0,m,2,o,!1,f);
return c.plugin=l,c.setRatio=d(b,p,n._tween,o),c
},priority:f})
},aO.useSVGTransformAttr=aG||aE;
var ab,bJ="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),bz=a4("transform"),bM=a6+"transform",bD=a4("transformOrigin"),bl=null!==a4("perspective"),aM=bc.Transform=function(){this.perspective=parseFloat(aO.defaultTransformPerspective)||0,this.force3D=aO.defaultForce3D!==!1&&bl?aO.defaultForce3D||"auto":!1
},am=window.SVGElement,af=function(h,g,m){var l,k=bh.createElementNS("http://www.w3.org/2000/svg",h),j=/([a-z])([A-Z])/g;
for(l in m){k.setAttributeNS(null,l.replace(j,"$1-$2").toLowerCase(),m[l])
}return g.appendChild(k),k
},bO=bh.documentElement,bF=function(){var f,e,h,g=aC||/Android/i.test(bb)&&!window.chrome;
return bh.createElementNS&&!g&&(f=af("svg",bO),e=af("rect",f,{width:100,height:50,x:100}),h=e.getBoundingClientRect().width,e.style[bD]="50% 50%",e.style[bz]="scaleX(0.5)",g=h===e.getBoundingClientRect().width&&!(aE&&bl),bO.removeChild(f)),g
}(),bs=function(R,Q,P,O,N,M){var L,K,J,I,H,G,F,E,D,C,B,A,z,y,x=R._gsTransform,g=bQ(R,!0);
x&&(z=x.xOrigin,y=x.yOrigin),(!O||(L=O.split(" ")).length<2)&&(F=R.getBBox(),Q=ad(Q).split(" "),L=[(-1!==Q[0].indexOf("%")?parseFloat(Q[0])/100*F.width:parseFloat(Q[0]))+F.x,(-1!==Q[1].indexOf("%")?parseFloat(Q[1])/100*F.height:parseFloat(Q[1]))+F.y]),P.xOrigin=I=parseFloat(L[0]),P.yOrigin=H=parseFloat(L[1]),O&&g!==ah&&(G=g[0],F=g[1],E=g[2],D=g[3],C=g[4],B=g[5],A=G*D-F*E,K=I*(D/A)+H*(-E/A)+(E*B-D*C)/A,J=I*(-F/A)+H*(G/A)-(G*B-F*C)/A,I=P.xOrigin=L[0]=K,H=P.yOrigin=L[1]=J),x&&(M&&(P.xOffset=x.xOffset,P.yOffset=x.yOffset,x=P),N||N!==!1&&aO.defaultSmoothOrigin!==!1?(K=I-z,J=H-y,x.xOffset+=K*g[0]+J*g[2]-K,x.yOffset+=K*g[1]+J*g[3]-J):x.xOffset=x.yOffset=0),M||R.setAttribute("data-svg-origin",L.join(" "))
},aT=function(b){try{return b.getBBox()
}catch(b){}},ao=function(b){return !!(am&&b.getBBox&&b.getCTM&&aT(b)&&(!b.parentNode||b.parentNode.getBBox&&b.parentNode.getCTM))
},ah=[1,0,0,1,0,0],bQ=function(v,u){var t,s,r,q,p,o,n=v._gsTransform||new aM,m=100000,l=v.style;
if(bz?s=a2(v,bM,null,!0):v.currentStyle&&(s=v.currentStyle.filter.match(bq),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),n.x||0,n.y||0].join(","):""),t=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,t&&bz&&((o="none"===a3(v).display)||!v.parentNode)&&(o&&(q=l.display,l.display="block"),v.parentNode||(p=1,bO.appendChild(v)),s=a2(v,bM,null,!0),t=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,q?l.display=q:o&&aj(l,"display"),p&&bO.removeChild(v)),(n.svg||v.getBBox&&ao(v))&&(t&&-1!==(l[bz]+"").indexOf("matrix")&&(s=l[bz],t=0),r=v.getAttribute("transform"),t&&r&&(-1!==r.indexOf("matrix")?(s=r,t=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",t=0))),t){return ah
}for(r=(s||"").match(aB)||[],bx=r.length;
--bx>-1;
){q=Number(r[bx]),r[bx]=(p=q-(q|=0))?(p*m+(0>p?-0.5:0.5)|0)/m+q:q
}return u&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r
},bI=bc.getTransform=function(ck,cj,ci,ch){if(ck._gsTransform&&ci&&!ch){return ck._gsTransform
}var cg,cf,ce,cd,cc,cb,ca=ci?ck._gsTransform||new aM:new aM,b9=ca.scaleX<0,b8=0.00002,b7=100000,b6=bl?parseFloat(a2(ck,bD,cj,!1,"0 0 0").split(" ")[2])||ca.zOrigin||0:0,b5=parseFloat(aO.defaultTransformPerspective)||0;
if(ca.svg=!(!ck.getBBox||!ao(ck)),ca.svg&&(bs(ck,a2(ck,bD,cj,!1,"50% 50%")+"",ca,ck.getAttribute("data-svg-origin")),ab=aO.useSVGTransformAttr||bF),cg=bQ(ck),cg!==ah){if(16===cg.length){var b4,b3,b2,b1,b0,bZ=cg[0],bY=cg[1],bX=cg[2],bW=cg[3],bV=cg[4],bU=cg[5],bT=cg[6],bS=cg[7],bR=cg[8],ba=cg[9],aa=cg[10],Z=cg[12],Y=cg[13],X=cg[14],W=cg[11],V=Math.atan2(bT,aa);
ca.zOrigin&&(X=-ca.zOrigin,Z=bR*X-cg[12],Y=ba*X-cg[13],X=aa*X+ca.zOrigin-cg[14]),ca.rotationX=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),b4=bV*b1+bR*b0,b3=bU*b1+ba*b0,b2=bT*b1+aa*b0,bR=bV*-b0+bR*b1,ba=bU*-b0+ba*b1,aa=bT*-b0+aa*b1,W=bS*-b0+W*b1,bV=b4,bU=b3,bT=b2),V=Math.atan2(-bX,aa),ca.rotationY=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),b4=bZ*b1-bR*b0,b3=bY*b1-ba*b0,b2=bX*b1-aa*b0,ba=bY*b0+ba*b1,aa=bX*b0+aa*b1,W=bW*b0+W*b1,bZ=b4,bY=b3,bX=b2),V=Math.atan2(bY,bZ),ca.rotation=V*bj,V&&(b1=Math.cos(-V),b0=Math.sin(-V),bZ=bZ*b1+bV*b0,b3=bY*b1+bU*b0,bU=bY*-b0+bU*b1,bT=bX*-b0+bT*b1,bY=b3),ca.rotationX&&Math.abs(ca.rotationX)+Math.abs(ca.rotation)>359.9&&(ca.rotationX=ca.rotation=0,ca.rotationY=180-ca.rotationY),ca.scaleX=(Math.sqrt(bZ*bZ+bY*bY)*b7+0.5|0)/b7,ca.scaleY=(Math.sqrt(bU*bU+ba*ba)*b7+0.5|0)/b7,ca.scaleZ=(Math.sqrt(bT*bT+aa*aa)*b7+0.5|0)/b7,ca.rotationX||ca.rotationY?ca.skewX=0:(ca.skewX=bV||bU?Math.atan2(bV,bU)*bj+ca.rotation:ca.skewX||0,Math.abs(ca.skewX)>90&&Math.abs(ca.skewX)<270&&(b9?(ca.scaleX*=-1,ca.skewX+=ca.rotation<=0?180:-180,ca.rotation+=ca.rotation<=0?180:-180):(ca.scaleY*=-1,ca.skewX+=ca.skewX<=0?180:-180))),ca.perspective=W?1/(0>W?-W:W):0,ca.x=Z,ca.y=Y,ca.z=X,ca.svg&&(ca.x-=ca.xOrigin-(ca.xOrigin*bZ-ca.yOrigin*bV),ca.y-=ca.yOrigin-(ca.yOrigin*bY-ca.xOrigin*bU))
}else{if(!bl||ch||!cg.length||ca.x!==cg[4]||ca.y!==cg[5]||!ca.rotationX&&!ca.rotationY){var U=cg.length>=6,T=U?cg[0]:1,J=cg[1]||0,g=cg[2]||0,b=U?cg[3]:1;
ca.x=cg[4]||0,ca.y=cg[5]||0,ce=Math.sqrt(T*T+J*J),cd=Math.sqrt(b*b+g*g),cc=T||J?Math.atan2(J,T)*bj:ca.rotation||0,cb=g||b?Math.atan2(g,b)*bj+cc:ca.skewX||0,Math.abs(cb)>90&&Math.abs(cb)<270&&(b9?(ce*=-1,cb+=0>=cc?180:-180,cc+=0>=cc?180:-180):(cd*=-1,cb+=0>=cb?180:-180)),ca.scaleX=ce,ca.scaleY=cd,ca.rotation=cc,ca.skewX=cb,bl&&(ca.rotationX=ca.rotationY=ca.z=0,ca.perspective=b5,ca.scaleZ=1),ca.svg&&(ca.x-=ca.xOrigin-(ca.xOrigin*T+ca.yOrigin*g),ca.y-=ca.yOrigin-(ca.xOrigin*J+ca.yOrigin*b))
}}ca.zOrigin=b6;
for(cf in ca){ca[cf]<b8&&ca[cf]>-b8&&(ca[cf]=0)
}}return ci&&(ck._gsTransform=ca,ca.svg&&(ab&&ck.style[bz]?aV.delayedCall(0.001,function(){aj(ck.style,bz)
}):!ab&&ck.getAttribute("transform")&&aV.delayedCall(0.001,function(){ck.removeAttribute("transform")
}))),ca
},by=function(X){var W,V,U=this.data,T=-U.rotation*bm,S=T+U.skewX*bm,R=100000,Q=(Math.cos(T)*U.scaleX*R|0)/R,P=(Math.sin(T)*U.scaleX*R|0)/R,O=(Math.sin(S)*-U.scaleY*R|0)/R,N=(Math.cos(S)*U.scaleY*R|0)/R,M=this.t.style,L=this.t.currentStyle;
if(L){V=P,P=-O,O=-V,W=L.filter,M.filter="";
var K,J,H=this.t.offsetWidth,F=this.t.offsetHeight,E="absolute"!==L.position,D="progid:DXImageTransform.Microsoft.Matrix(M11="+Q+", M12="+P+", M21="+O+", M22="+N,C=U.x+H*U.xPercent/100,v=U.y+F*U.yPercent/100;
if(null!=U.ox&&(K=(U.oxp?H*U.ox*0.01:U.ox)-H/2,J=(U.oyp?F*U.oy*0.01:U.oy)-F/2,C+=K-(K*Q+J*P),v+=J-(K*O+J*N)),E?(K=H/2,J=F/2,D+=", Dx="+(K-(K*Q+J*P)+C)+", Dy="+(J-(K*O+J*N)+v)+")"):D+=", sizingMethod='auto expand')",-1!==W.indexOf("DXImageTransform.Microsoft.Matrix(")?M.filter=W.replace(bp,D):M.filter=D+" "+W,(0===X||1===X)&&1===Q&&0===P&&0===O&&1===N&&(E&&-1===D.indexOf("Dx=0, Dy=0")||aw.test(W)&&100!==parseFloat(RegExp.$1)||-1===W.indexOf(W.indexOf("Alpha"))&&M.removeAttribute("filter")),!E){var u,p,I,G=8>aC?1:-1;
for(K=U.ieOffsetX||0,J=U.ieOffsetY||0,U.ieOffsetX=Math.round((H-((0>Q?-Q:Q)*H+(0>P?-P:P)*F))/2+C),U.ieOffsetY=Math.round((F-((0>N?-N:N)*F+(0>O?-O:O)*H))/2+v),bx=0;
4>bx;
bx++){p=aF[bx],u=L[p],V=-1!==u.indexOf("px")?parseFloat(u):a0(this.t,p,parseFloat(u),u.replace(ax,""))||0,I=V!==U[p]?2>bx?-U.ieOffsetX:-U.ieOffsetY:2>bx?K-U.ieOffsetX:J-U.ieOffsetY,M[p]=(U[p]=Math.round(V-I*(0===bx||2===bx?1:G)))+"px"
}}}},aZ=bc.set3DTransformRatio=bc.setTransformRatio=function(cc){var cb,ca,b9,b8,b7,b6,b5,b4,b3,b2,b1,b0,bZ,bY,bX,bW,bV,bU,bT,bS,bR,ba,aa,Z=this.data,Y=this.t.style,X=Z.rotation,W=Z.rotationX,V=Z.rotationY,U=Z.scaleX,T=Z.scaleY,S=Z.scaleZ,R=Z.x,Q=Z.y,P=Z.z,O=Z.svg,I=Z.perspective,n=Z.force3D;
if(((1===cc||0===cc)&&"auto"===n&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!n)&&!P&&!I&&!V&&!W&&1===S||ab&&O||!bl){return void (X||Z.skewX||O?(X*=bm,ba=Z.skewX*bm,aa=100000,cb=Math.cos(X)*U,b8=Math.sin(X)*U,ca=Math.sin(X-ba)*-T,b7=Math.cos(X-ba)*T,ba&&"simple"===Z.skewType&&(bV=Math.tan(ba),bV=Math.sqrt(1+bV*bV),ca*=bV,b7*=bV,Z.skewY&&(cb*=bV,b8*=bV)),O&&(R+=Z.xOrigin-(Z.xOrigin*cb+Z.yOrigin*ca)+Z.xOffset,Q+=Z.yOrigin-(Z.xOrigin*b8+Z.yOrigin*b7)+Z.yOffset,ab&&(Z.xPercent||Z.yPercent)&&(bY=this.t.getBBox(),R+=0.01*Z.xPercent*bY.width,Q+=0.01*Z.yPercent*bY.height),bY=0.000001,bY>R&&R>-bY&&(R=0),bY>Q&&Q>-bY&&(Q=0)),bT=(cb*aa|0)/aa+","+(b8*aa|0)/aa+","+(ca*aa|0)/aa+","+(b7*aa|0)/aa+","+R+","+Q+")",O&&ab?this.t.setAttribute("transform","matrix("+bT):Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix(":"matrix(")+bT):Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix(":"matrix(")+U+",0,0,"+T+","+R+","+Q+")")
}if(aE&&(bY=0.0001,bY>U&&U>-bY&&(U=S=0.00002),bY>T&&T>-bY&&(T=S=0.00002),!I||Z.z||Z.rotationX||Z.rotationY||(I=0)),X||Z.skewX){X*=bm,bX=cb=Math.cos(X),bW=b8=Math.sin(X),Z.skewX&&(X-=Z.skewX*bm,bX=Math.cos(X),bW=Math.sin(X),"simple"===Z.skewType&&(bV=Math.tan(Z.skewX*bm),bV=Math.sqrt(1+bV*bV),bX*=bV,bW*=bV,Z.skewY&&(cb*=bV,b8*=bV))),ca=-bW,b7=bX
}else{if(!(V||W||1!==S||I||O)){return void (Y[bz]=(Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) translate3d(":"translate3d(")+R+"px,"+Q+"px,"+P+"px)"+(1!==U||1!==T?" scale("+U+","+T+")":""))
}cb=b7=1,ca=b8=0
}b3=1,b9=b6=b5=b4=b2=b1=0,b0=I?-1/I:0,bZ=Z.zOrigin,bY=0.000001,bS=",",bR="0",X=V*bm,X&&(bX=Math.cos(X),bW=Math.sin(X),b5=-bW,b2=b0*-bW,b9=cb*bW,b6=b8*bW,b3=bX,b0*=bX,cb*=bX,b8*=bX),X=W*bm,X&&(bX=Math.cos(X),bW=Math.sin(X),bV=ca*bX+b9*bW,bU=b7*bX+b6*bW,b4=b3*bW,b1=b0*bW,b9=ca*-bW+b9*bX,b6=b7*-bW+b6*bX,b3*=bX,b0*=bX,ca=bV,b7=bU),1!==S&&(b9*=S,b6*=S,b3*=S,b0*=S),1!==T&&(ca*=T,b7*=T,b4*=T,b1*=T),1!==U&&(cb*=U,b8*=U,b5*=U,b2*=U),(bZ||O)&&(bZ&&(R+=b9*-bZ,Q+=b6*-bZ,P+=b3*-bZ+bZ),O&&(R+=Z.xOrigin-(Z.xOrigin*cb+Z.yOrigin*ca)+Z.xOffset,Q+=Z.yOrigin-(Z.xOrigin*b8+Z.yOrigin*b7)+Z.yOffset),bY>R&&R>-bY&&(R=bR),bY>Q&&Q>-bY&&(Q=bR),bY>P&&P>-bY&&(P=0)),bT=Z.xPercent||Z.yPercent?"translate("+Z.xPercent+"%,"+Z.yPercent+"%) matrix3d(":"matrix3d(",bT+=(bY>cb&&cb>-bY?bR:cb)+bS+(bY>b8&&b8>-bY?bR:b8)+bS+(bY>b5&&b5>-bY?bR:b5),bT+=bS+(bY>b2&&b2>-bY?bR:b2)+bS+(bY>ca&&ca>-bY?bR:ca)+bS+(bY>b7&&b7>-bY?bR:b7),W||V||1!==S?(bT+=bS+(bY>b4&&b4>-bY?bR:b4)+bS+(bY>b1&&b1>-bY?bR:b1)+bS+(bY>b9&&b9>-bY?bR:b9),bT+=bS+(bY>b6&&b6>-bY?bR:b6)+bS+(bY>b3&&b3>-bY?bR:b3)+bS+(bY>b0&&b0>-bY?bR:b0)+bS):bT+=",0,0,0,0,1,0,",bT+=R+bS+Q+bS+P+bS+(I?1+-P/I:1)+")",Y[bz]=bT
};
aJ=aM.prototype,aJ.x=aJ.y=aJ.z=aJ.skewX=aJ.skewY=aJ.rotation=aJ.rotationX=aJ.rotationY=aJ.zOrigin=aJ.xPercent=aJ.yPercent=aJ.xOffset=aJ.yOffset=0,aJ.scaleX=aJ.scaleY=aJ.scaleZ=1,ap("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(V,U,T,S,R,Q,P){if(S._lastParsedTransform===P){return R
}S._lastParsedTransform=P;
var O,N,M,L,K,J,I,H,G,F=V._gsTransform,E=V.style,D=0.000001,C=bJ.length,B=P,A={},g="transformOrigin",e=bI(V,aQ,!0,P.parseTransform);
if(S._transform=e,"string"==typeof B.transform&&bz){N=bf.style,N[bz]=B.transform,N.display="block",N.position="absolute",bh.body.appendChild(bf),O=bI(bf,null,!1),e.svg&&(I=e.xOrigin,H=e.yOrigin,O.x-=e.xOffset,O.y-=e.yOffset,(B.transformOrigin||B.svgOrigin)&&(M={},bs(V,ad(B.transformOrigin),M,B.svgOrigin,B.smoothOrigin,!0),I=M.xOrigin,H=M.yOrigin,O.x-=M.xOffset-e.xOffset,O.y-=M.yOffset-e.yOffset),(I||H)&&(G=bQ(bf,!0),O.x-=I-(I*G[0]+H*G[2]),O.y-=H-(I*G[1]+H*G[3]))),bh.body.removeChild(bf),O.perspective||(O.perspective=e.perspective),null!=B.xPercent&&(O.xPercent=bC(B.xPercent,e.xPercent)),null!=B.yPercent&&(O.yPercent=bC(B.yPercent,e.yPercent))
}else{if("object"==typeof B){if(O={scaleX:bC(null!=B.scaleX?B.scaleX:B.scale,e.scaleX),scaleY:bC(null!=B.scaleY?B.scaleY:B.scale,e.scaleY),scaleZ:bC(B.scaleZ,e.scaleZ),x:bC(B.x,e.x),y:bC(B.y,e.y),z:bC(B.z,e.z),xPercent:bC(B.xPercent,e.xPercent),yPercent:bC(B.yPercent,e.yPercent),perspective:bC(B.transformPerspective,e.perspective)},J=B.directionalRotation,null!=J){if("object"==typeof J){for(N in J){B[N]=J[N]
}}else{B.rotation=J
}}"string"==typeof B.x&&-1!==B.x.indexOf("%")&&(O.x=0,O.xPercent=bC(B.x,e.xPercent)),"string"==typeof B.y&&-1!==B.y.indexOf("%")&&(O.y=0,O.yPercent=bC(B.y,e.yPercent)),O.rotation=bk("rotation" in B?B.rotation:"shortRotation" in B?B.shortRotation+"_short":"rotationZ" in B?B.rotationZ:e.rotation-e.skewY,e.rotation-e.skewY,"rotation",A),bl&&(O.rotationX=bk("rotationX" in B?B.rotationX:"shortRotationX" in B?B.shortRotationX+"_short":e.rotationX||0,e.rotationX,"rotationX",A),O.rotationY=bk("rotationY" in B?B.rotationY:"shortRotationY" in B?B.shortRotationY+"_short":e.rotationY||0,e.rotationY,"rotationY",A)),O.skewX=bk(B.skewX,e.skewX-e.skewY),(O.skewY=bk(B.skewY,e.skewY))&&(O.skewX+=O.skewY,O.rotation+=O.skewY)
}}for(bl&&null!=B.force3D&&(e.force3D=B.force3D,K=!0),e.skewType=B.skewType||e.skewType||aO.defaultSkewType,L=e.force3D||e.z||e.rotationX||e.rotationY||O.z||O.rotationX||O.rotationY||O.perspective,L||null==B.scale||(O.scaleZ=1);
--C>-1;
){T=bJ[C],M=O[T]-e[T],(M>D||-D>M||null!=B[T]||null!=bi[T])&&(K=!0,R=new ag(e,T,e[T],M,R),T in A&&(R.e=A[T]),R.xs0=0,R.plugin=Q,S._overwriteProps.push(R.n))
}return M=B.transformOrigin,e.svg&&(M||B.svgOrigin)&&(I=e.xOffset,H=e.yOffset,bs(V,ad(M),O,B.svgOrigin,B.smoothOrigin),R=bP(e,"xOrigin",(F?e:O).xOrigin,O.xOrigin,R,g),R=bP(e,"yOrigin",(F?e:O).yOrigin,O.yOrigin,R,g),(I!==e.xOffset||H!==e.yOffset)&&(R=bP(e,"xOffset",F?I:e.xOffset,e.xOffset,R,g),R=bP(e,"yOffset",F?H:e.yOffset,e.yOffset,R,g)),M=ab?null:"0px 0px"),(M||bl&&L&&e.zOrigin)&&(bz?(K=!0,T=bD,M=(M||a2(V,T,aQ,!1,"50% 50%"))+"",R=new ag(E,T,0,0,R,-1,g),R.b=E[T],R.plugin=Q,bl?(N=e.zOrigin,M=M.split(" "),e.zOrigin=(M.length>2&&(0===N||"0px"!==M[2])?parseFloat(M[2]):N)||0,R.xs0=R.e=M[0]+" "+(M[1]||"50%")+" 0px",R=new ag(e,"zOrigin",0,0,R,-1,R.n),R.b=N,R.xs0=R.e=e.zOrigin):R.xs0=R.e=M):ad(M+"",e)),K&&(S._transformType=e.svg&&ab||!L&&3!==this._transformType?2:3),R
},prefix:!0}),ap("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ap("borderRadius",{defaultValue:"0px",parser:function(V,U,T,S,R,Q){U=this.format(U);
var P,O,N,M,L,K,J,I,H,G,F,E,D,C,B,A,e=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],d=V.style;
for(H=parseFloat(V.offsetWidth),G=parseFloat(V.offsetHeight),P=U.split(" "),O=0;
O<e.length;
O++){this.p.indexOf("border")&&(e[O]=a4(e[O])),L=M=a2(V,e[O],aQ,!1,"0px"),-1!==L.indexOf(" ")&&(M=L.split(" "),L=M[0],M=M[1]),K=N=P[O],J=parseFloat(L),E=L.substr((J+"").length),D="="===K.charAt(1),D?(I=parseInt(K.charAt(0)+"1",10),K=K.substr(2),I*=parseFloat(K),F=K.substr((I+"").length-(0>I?1:0))||""):(I=parseFloat(K),F=K.substr((I+"").length)),""===F&&(F=aR[T]||E),F!==E&&(C=a0(V,"borderLeft",J,E),B=a0(V,"borderTop",J,E),"%"===F?(L=C/H*100+"%",M=B/G*100+"%"):"em"===F?(A=a0(V,"borderLeft",1,"em"),L=C/A+"em",M=B/A+"em"):(L=C+"px",M=B+"px"),D&&(K=parseFloat(L)+I+F,N=parseFloat(M)+I+F)),R=bH(d,e[O],L+" "+M,K+" "+N,!1,"0px",R)
}return R
},prefix:!0,formatter:br("0px 0px 0px 0px",!1,!0)}),ap("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(h,e,m,l,k,j){return bH(h.style,m,this.format(a2(h,m,aQ,!1,"0px 0px")),this.format(e),!1,"0px",k)
},prefix:!0,formatter:br("0px 0px",!1,!0)}),ap("backgroundPosition",{defaultValue:"0 0",parser:function(F,E,D,C,B,A){var z,y,x,w,v,u,t="background-position",s=aQ||a3(F,null),p=this.format((s?aC?s.getPropertyValue(t+"-x")+" "+s.getPropertyValue(t+"-y"):s.getPropertyValue(t):F.currentStyle.backgroundPositionX+" "+F.currentStyle.backgroundPositionY)||"0 0"),e=this.format(E);
if(-1!==p.indexOf("%")!=(-1!==e.indexOf("%"))&&e.split(",").length<2&&(u=a2(F,"backgroundImage").replace(bv,""),u&&"none"!==u)){for(z=p.split(" "),y=e.split(" "),be.setAttribute("src",u),x=2;
--x>-1;
){p=z[x],w=-1!==p.indexOf("%"),w!==(-1!==y[x].indexOf("%"))&&(v=0===x?F.offsetWidth-be.width:F.offsetHeight-be.height,z[x]=w?parseFloat(p)/100*v+"px":parseFloat(p)/v*100+"%")
}p=z.join(" ")
}return this.parseComplex(F.style,p,e,B,A)
},formatter:ad}),ap("backgroundSize",{defaultValue:"0 0",formatter:ad}),ap("perspective",{defaultValue:"0px",prefix:!0}),ap("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ap("transformStyle",{prefix:!0}),ap("backfaceVisibility",{prefix:!0}),ap("userSelect",{prefix:!0}),ap("margin",{parser:aS("marginTop,marginRight,marginBottom,marginLeft")}),ap("padding",{parser:aS("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ap("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(r,q,p,o,n,m){var l,k,e;
return 9>aC?(k=r.currentStyle,e=8>aC?" ":",",l="rect("+k.clipTop+e+k.clipRight+e+k.clipBottom+e+k.clipLeft+")",q=this.format(q).split(",").join(e)):(l=this.format(a2(r,this.p,aQ,!1,this.dflt)),q=this.format(q)),this.parseComplex(r.style,l,q,n,m)
}}),ap("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ap("autoRound,strictUnits",{parser:function(g,f,k,j,h){return h
}}),ap("border",{defaultValue:"0px solid #000",parser:function(r,q,p,o,n,m){var l=a2(r,"borderTopWidth",aQ,!1,"0px"),k=this.format(q).split(" "),e=k[0].replace(ax,"");
return"px"!==e&&(l=parseFloat(l)/a0(r,"borderTopWidth",1,e)+e),this.parseComplex(r.style,this.format(l+" "+a2(r,"borderTopStyle",aQ,!1,"solid")+" "+a2(r,"borderTopColor",aQ,!1,"#000")),k.join(" "),n,m)
},color:!0,formatter:function(d){var c=d.split(" ");
return c[0]+" "+(c[1]||"solid")+" "+(d.match(bE)||["#000"])[0]
}}),ap("borderWidth",{parser:aS("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ap("float,cssFloat,styleFloat",{parser:function(k,j,q,p,o,n){var m=k.style,l="cssFloat" in m?"cssFloat":"styleFloat";
return new ag(m,l,0,0,o,-1,q,!1,0,m[l],j)
}});
var aq=function(g){var f,k=this.t,j=k.filter||a2(this.data,"filter")||"",h=this.s+this.c*g|0;
100===h&&(-1===j.indexOf("atrix(")&&-1===j.indexOf("radient(")&&-1===j.indexOf("oader(")?(k.removeAttribute("filter"),f=!a2(this.data,"filter")):(k.filter=j.replace(au,""),f=!0)),f||(this.xn1&&(k.filter=j=j||"alpha(opacity="+h+")"),-1===j.indexOf("pacity")?0===h&&this.xn1||(k.filter=j+" alpha(opacity="+h+")"):k.filter=j.replace(aw,"opacity="+h))
};
ap("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(r,q,p,o,n,m){var l=parseFloat(a2(r,"opacity",aQ,!1,"1")),k=r.style,e="autoAlpha"===p;
return"string"==typeof q&&"="===q.charAt(1)&&(q=("-"===q.charAt(0)?-1:1)*parseFloat(q.substr(2))+l),e&&1===l&&"hidden"===a2(r,"visibility",aQ)&&0!==q&&(l=0),a9?n=new ag(k,"opacity",l,q-l,n):(n=new ag(k,"opacity",100*l,100*(q-l),n),n.xn1=e?1:0,k.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=r,n.plugin=m,n.setRatio=aq),e&&(n=new ag(k,"visibility",0,0,n,-1,null,!1,0,0!==l?"inherit":"hidden",0===q?"hidden":"inherit"),n.xs0="inherit",o._overwriteProps.push(n.n),o._overwriteProps.push(p)),n
}});
var aj=function(d,c){c&&(d.removeProperty?(("ms"===c.substr(0,2)||"webkit"===c.substr(0,6))&&(c="-"+c),d.removeProperty(c.replace(ar,"-$1").toLowerCase())):d.removeAttribute(c))
},ac=function(e){if(this.t._gsClassPT=this,1===e||0===e){this.t.setAttribute("class",0===e?this.b:this.e);
for(var d=this.data,f=this.t.style;
d;
){d.v?f[d.p]=d.v:aj(f,d.p),d=d._next
}1===e&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)
}else{this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)
}};
ap("className",{parser:function(B,A,z,y,x,w,v){var u,t,s,r,q,e=B.getAttribute("class")||"",c=B.style.cssText;
if(x=y._classNamePT=new ag(B,z,0,0,x,2),x.setRatio=ac,x.pr=-11,aU=!0,x.b=e,t=aY(B,aQ),s=B._gsClassPT){for(r={},q=s.data;
q;
){r[q.p]=1,q=q._next
}s.setRatio(1)
}return B._gsClassPT=x,x.e="="!==A.charAt(1)?A:e.replace(new RegExp("(?:\\s|^)"+A.substr(2)+"(?![\\w-])"),"")+("+"===A.charAt(0)?" "+A.substr(2):""),B.setAttribute("class",x.e),u=bB(B,t,aY(B),v,r),B.setAttribute("class",e),x.data=u.firstMPT,B.style.cssText=c,x=x.xfirst=y.parse(B,u.difs,x,w)
}});
var bK=function(k){if((1===k||0===k)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var j,q,p,o,n,m=this.t.style,l=aK.transform.parse;
if("all"===this.e){m.cssText="",o=!0
}else{for(j=this.e.split(" ").join("").split(","),p=j.length;
--p>-1;
){q=j[p],aK[q]&&(aK[q].parse===l?o=!0:q="transformOrigin"===q?bD:aK[q].p),aj(m,q)
}}o&&(aj(m,bz),n=this.t._gsTransform,n&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))
}};
for(ap("clearProps",{parser:function(g,c,k,j,h){return h=new ag(g,k,0,0,h,2),h.setRatio=bK,h.e=c,h.pr=-10,h.data=j._tween,aU=!0,h
}}),aJ="bezier,throwProps,physicsProps,physics2D".split(","),bx=aJ.length;
bx--;
){ai(aJ[bx])
}aJ=aO.prototype,aJ._firstPT=aJ._lastParsedTransform=aJ._transform=null,aJ._onInitTween=function(o,l,k){if(!o.nodeType){return !1
}this._target=o,this._tween=k,this._vars=l,aI=l.autoRound,aU=!1,aR=l.suffixMap||aO.suffixMap,aQ=a3(o,""),aP=this._overwriteProps;
var g,f,e,d,c,A,z,y,w,m=o.style;
if(aH&&""===m.zIndex&&(g=a2(o,"zIndex",aQ),("auto"===g||""===g)&&this._addLazySet(m,"zIndex",0)),"string"==typeof l&&(d=m.cssText,g=aY(o,aQ),m.cssText=d+";"+l,g=bB(o,g,aY(o)).difs,!a9&&av.test(l)&&(g.opacity=parseFloat(RegExp.$1)),l=g,m.cssText=d),l.className?this._firstPT=f=aK.className.parse(o,l.className,"className",this,null,null,l):this._firstPT=f=this.parse(o,l,null),this._transformType){for(w=3===this._transformType,bz?aG&&(aH=!0,""===m.zIndex&&(z=a2(o,"zIndex",aQ),("auto"===z||""===z)&&this._addLazySet(m,"zIndex",0)),aD&&this._addLazySet(m,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(w?"visible":"hidden"))):m.zoom=1,e=f;
e&&e._next;
){e=e._next
}y=new ag(o,"transform",0,0,null,2),this._linkCSSP(y,null,e),y.setRatio=bz?aZ:by,y.data=this._transform||bI(o,aQ,!0),y.tween=k,y.pr=-1,aP.pop()
}if(aU){for(;
f;
){for(A=f._next,e=d;
e&&e.pr>f.pr;
){e=e._next
}(f._prev=e?e._prev:c)?f._prev._next=f:d=f,(f._next=e)?e._prev=f:c=f,f=A
}this._firstPT=d
}return !0
},aJ.parse=function(D,C,B,A){var z,y,x,w,v,u,t,k,e,d,E=D.style;
for(z in C){u=C[z],y=aK[z],y?B=y.parse(D,u,z,this,B,A,C):(v=a2(D,z,aQ)+"",e="string"==typeof u,"color"===z||"fill"===z||"stroke"===z||-1!==z.indexOf("Color")||e&&at.test(u)?(e||(u=ae(u),u=(u.length>3?"rgba(":"rgb(")+u.join(",")+")"),B=bH(E,z,v,u,!0,"transparent",B,0,A)):e&&bn.test(u)?B=bH(E,z,v,u,!0,null,B,0,A):(x=parseFloat(v),t=x||0===x?v.substr((x+"").length):"",(""===v||"auto"===v)&&("width"===z||"height"===z?(x=ak(D,z,aQ),t="px"):"left"===z||"top"===z?(x=bG(D,z,aQ),t="px"):(x="opacity"!==z?0:1,t="")),d=e&&"="===u.charAt(1),d?(w=parseInt(u.charAt(0)+"1",10),u=u.substr(2),w*=parseFloat(u),k=u.replace(ax,"")):(w=parseFloat(u),k=e?u.replace(ax,""):""),""===k&&(k=z in aR?aR[z]:t),u=w||0===w?(d?w+x:w)+k:C[z],t!==k&&""!==k&&(w||0===w)&&x&&(x=a0(D,z,x,t),"%"===k?(x/=a0(D,z,100,"%")/100,C.strictUnits!==!0&&(v=x+"%")):"em"===k||"rem"===k||"vw"===k||"vh"===k?x/=a0(D,z,1,k):"px"!==k&&(w=a0(D,z,w,k),k="px"),d&&(w||0===w)&&(u=w+x+k)),d&&(w+=x),!x&&0!==x||!w&&0!==w?void 0!==E[z]&&(u||u+""!="NaN"&&null!=u)?(B=new ag(E,z,w||x||0,0,B,-1,z,!1,0,v,u),B.xs0="none"!==u||"display"!==z&&-1===z.indexOf("Style")?u:v):a7("invalid "+z+" tween value: "+C[z]):(B=new ag(E,z,x,w-x,B,0,z,aI!==!1&&("px"===k||"zIndex"===z),0,v,u),B.xs0=k))),A&&B&&!B.plugin&&(B.plugin=A)
}return B
},aJ.setRatio=function(h){var g,m,l,k=this._firstPT,j=0.000001;
if(1!==h||this._tween._time!==this._tween._duration&&0!==this._tween._time){if(h||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-0.000001){for(;
k;
){if(g=k.c*h+k.s,k.r?g=Math.round(g):j>g&&g>-j&&(g=0),k.type){if(1===k.type){if(l=k.l,2===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2
}else{if(3===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3
}else{if(4===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3+k.xn3+k.xs4
}else{if(5===l){k.t[k.p]=k.xs0+g+k.xs1+k.xn1+k.xs2+k.xn2+k.xs3+k.xn3+k.xs4+k.xn4+k.xs5
}else{for(m=k.xs0+g+k.xs1,l=1;
l<k.l;
l++){m+=k["xn"+l]+k["xs"+(l+1)]
}k.t[k.p]=m
}}}}}else{-1===k.type?k.t[k.p]=k.xs0:k.setRatio&&k.setRatio(h)
}}else{k.t[k.p]=g+k.xs0
}k=k._next
}}else{for(;
k;
){2!==k.type?k.t[k.p]=k.b:k.setRatio(h),k=k._next
}}}else{for(;
k;
){if(2!==k.type){if(k.r&&-1!==k.type){if(g=Math.round(k.s+k.c),k.type){if(1===k.type){for(l=k.l,m=k.xs0+g+k.xs1,l=1;
l<k.l;
l++){m+=k["xn"+l]+k["xs"+(l+1)]
}k.t[k.p]=m
}}else{k.t[k.p]=g+k.xs0
}}else{k.t[k.p]=k.e
}}else{k.setRatio(h)
}k=k._next
}}},aJ._enableTransforms=function(b){this._transform=this._transform||bI(this._target,aQ,!0),this._transformType=this._transform.svg&&ab||!b&&3!==this._transformType?2:3
};
var bA=function(b){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)
};
aJ._addLazySet=function(f,e,h){var g=this._firstPT=new ag(f,e,0,0,this._firstPT,2);
g.e=h,g.setRatio=bA,g.data=this
},aJ._linkCSSP=function(f,e,h,g){return f&&(e&&(e._prev=f),f._next&&(f._next._prev=f._prev),f._prev?f._prev._next=f._next:this._firstPT===f&&(this._firstPT=f._next,g=!0),h?h._next=f:g||null!==this._firstPT||(this._firstPT=f),f._next=e,f._prev=h),f
},aJ._kill=function(a){var k,j,h,g=a;
if(a.autoAlpha||a.alpha){g={};
for(j in a){g[j]=a[j]
}g.opacity=1,g.autoAlpha&&(g.visibility=1)
}return a.className&&(k=this._classNamePT)&&(h=k.xfirst,h&&h._prev?this._linkCSSP(h._prev,k._next,h._prev._prev):h===this._firstPT&&(this._firstPT=k._next),k._next&&this._linkCSSP(k._next,k._next._next,h._prev),this._classNamePT=null),aW.prototype._kill.call(this,g)
};
var a1=function(j,h,o){var n,m,l,k;
if(j.slice){for(m=j.length;
--m>-1;
){a1(j[m],h,o)
}}else{for(n=j.childNodes,m=n.length;
--m>-1;
){l=n[m],k=l.type,l.style&&(h.push(aY(l)),o&&o.push(l)),1!==k&&9!==k&&11!==k||!l.childNodes.length||a1(l,h,o)
}}};
return aO.cascadeTo=function(z,y,x){var w,v,u,t,s=aV.to(z,y,x),r=[s],q=[],p=[],o=[],b=aV._internals.reservedProps;
for(z=s._targets||s.target,a1(z,q,o),s.render(y,!0,!0),a1(z,p),s.render(0,!0,!0),s._enabled(!0),w=o.length;
--w>-1;
){if(v=bB(o[w],q[w],p[w]),v.firstMPT){v=v.difs;
for(u in x){b[u]&&(v[u]=x[u])
}t={};
for(u in v){t[u]=q[w][u]
}r.push(aV.fromTo(o[w],y,t,v))
}}return r
},aW.activate([aO]),aO
},!0)
}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(d){var c=function(){return(_gsScope.GreenSockGlobals||_gsScope)[d]
};
"function"==typeof define&&define.amd?define(["../TweenLite"],c):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=c())
}("CSSPlugin");
/*!
 * VERSION: 1.15.4
 * DATE: 2016-05-24
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
;
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){_gsScope._gsDefine("easing.Back",["easing.Ease"],function(H){var G,F,E,D=_gsScope.GreenSockGlobals||_gsScope,C=D.com.greensock,B=2*Math.PI,A=Math.PI/2,z=C._class,y=function(a,h){var g=z("easing."+a,function(){},!0),f=g.prototype=new H;
return f.constructor=g,f.getRatio=h,g
},x=H.register||function(){},w=function(h,g,m,l,k){var j=z("easing."+h,{easeOut:new g,easeIn:new m,easeInOut:new l},!0);
return x(j,h),j
},v=function(e,d,f){this.t=e,this.v=d,f&&(this.next=f,f.prev=this,this.c=f.v-d,this.gap=f.t-e)
},u=function(a,h){var g=z("easing."+a,function(b){this._p1=b||0===b?b:1.70158,this._p2=1.525*this._p1
},!0),f=g.prototype=new H;
return f.constructor=g,f.getRatio=h,f.config=function(b){return new g(b)
},g
},t=w("Back",u("BackOut",function(b){return(b-=1)*b*((this._p1+1)*b+this._p1)+1
}),u("BackIn",function(b){return b*b*((this._p1+1)*b-this._p1)
}),u("BackInOut",function(b){return(b*=2)<1?0.5*b*b*((this._p2+1)*b-this._p2):0.5*((b-=2)*b*((this._p2+1)*b+this._p2)+2)
})),s=z("easing.SlowMo",function(e,d,f){d=d||0===d?d:0.7,null==e?e=0.7:e>1&&(e=1),this._p=1!==e?d:0,this._p1=(1-e)/2,this._p2=e,this._p3=this._p1+this._p2,this._calcEnd=f===!0
},!0),r=s.prototype=new H;
return r.constructor=s,r.getRatio=function(d){var c=d+(0.5-d)*this._p;
return d<this._p1?this._calcEnd?1-(d=1-d/this._p1)*d:c-(d=1-d/this._p1)*d*d*d*c:d>this._p3?this._calcEnd?1-(d=(d-this._p3)/this._p1)*d:c+(d-c)*(d=(d-this._p3)/this._p1)*d*d*d:this._calcEnd?1:c
},s.ease=new s(0.7,0.7),r.config=s.config=function(e,d,f){return new s(e,d,f)
},G=z("easing.SteppedEase",function(b){b=b||1,this._p1=1/b,this._p2=b+1
},!0),r=G.prototype=new H,r.constructor=G,r.getRatio=function(b){return 0>b?b=0:b>=1&&(b=0.999999999),(this._p2*b>>0)*this._p1
},r.config=G.config=function(b){return new G(b)
},F=z("easing.RoughEase",function(V){V=V||{};
for(var U,T,S,R,Q,P,O=V.taper||"none",N=[],M=0,L=0|(V.points||20),K=L,J=V.randomize!==!1,I=V.clamp===!0,m=V.template instanceof H?V.template:null,a="number"==typeof V.strength?0.4*V.strength:0.4;
--K>-1;
){U=J?Math.random():1/L*K,T=m?m.getRatio(U):U,"none"===O?S=a:"out"===O?(R=1-U,S=R*R*a):"in"===O?S=U*U*a:0.5>U?(R=2*U,S=R*R*0.5*a):(R=2*(1-U),S=R*R*0.5*a),J?T+=Math.random()*S-0.5*S:K%2?T+=0.5*S:T-=0.5*S,I&&(T>1?T=1:0>T&&(T=0)),N[M++]={x:U,y:T}
}for(N.sort(function(d,c){return d.x-c.x
}),P=new v(1,1,null),K=L;
--K>-1;
){Q=N[K],P=new v(Q.x,Q.y,P)
}this._prev=new v(0,0,0!==P.t?P:P.next)
},!0),r=F.prototype=new H,r.constructor=F,r.getRatio=function(d){var c=this._prev;
if(d>c.t){for(;
c.next&&d>=c.t;
){c=c.next
}c=c.prev
}else{for(;
c.prev&&d<=c.t;
){c=c.prev
}}return this._prev=c,c.v+(d-c.t)/c.gap*c.c
},r.config=function(b){return new F(b)
},F.ease=new F,w("Bounce",y("BounceOut",function(b){return 1/2.75>b?7.5625*b*b:2/2.75>b?7.5625*(b-=1.5/2.75)*b+0.75:2.5/2.75>b?7.5625*(b-=2.25/2.75)*b+0.9375:7.5625*(b-=2.625/2.75)*b+0.984375
}),y("BounceIn",function(b){return(b=1-b)<1/2.75?1-7.5625*b*b:2/2.75>b?1-(7.5625*(b-=1.5/2.75)*b+0.75):2.5/2.75>b?1-(7.5625*(b-=2.25/2.75)*b+0.9375):1-(7.5625*(b-=2.625/2.75)*b+0.984375)
}),y("BounceInOut",function(d){var c=0.5>d;
return d=c?1-2*d:2*d-1,d=1/2.75>d?7.5625*d*d:2/2.75>d?7.5625*(d-=1.5/2.75)*d+0.75:2.5/2.75>d?7.5625*(d-=2.25/2.75)*d+0.9375:7.5625*(d-=2.625/2.75)*d+0.984375,c?0.5*(1-d):0.5*d+0.5
})),w("Circ",y("CircOut",function(b){return Math.sqrt(1-(b-=1)*b)
}),y("CircIn",function(b){return -(Math.sqrt(1-b*b)-1)
}),y("CircInOut",function(b){return(b*=2)<1?-0.5*(Math.sqrt(1-b*b)-1):0.5*(Math.sqrt(1-(b-=2)*b)+1)
})),E=function(a,k,j){var h=z("easing."+a,function(d,c){this._p1=d>=1?d:1,this._p2=(c||j)/(1>d?d:1),this._p3=this._p2/B*(Math.asin(1/this._p1)||0),this._p2=B/this._p2
},!0),g=h.prototype=new H;
return g.constructor=h,g.getRatio=k,g.config=function(d,c){return new h(d,c)
},h
},w("Elastic",E("ElasticOut",function(b){return this._p1*Math.pow(2,-10*b)*Math.sin((b-this._p3)*this._p2)+1
},0.3),E("ElasticIn",function(b){return -(this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*this._p2))
},0.3),E("ElasticInOut",function(b){return(b*=2)<1?-0.5*(this._p1*Math.pow(2,10*(b-=1))*Math.sin((b-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(b-=1))*Math.sin((b-this._p3)*this._p2)*0.5+1
},0.45)),w("Expo",y("ExpoOut",function(b){return 1-Math.pow(2,-10*b)
}),y("ExpoIn",function(b){return Math.pow(2,10*(b-1))-0.001
}),y("ExpoInOut",function(b){return(b*=2)<1?0.5*Math.pow(2,10*(b-1)):0.5*(2-Math.pow(2,-10*(b-1)))
})),w("Sine",y("SineOut",function(b){return Math.sin(b*A)
}),y("SineIn",function(b){return -Math.cos(b*A)+1
}),y("SineInOut",function(b){return -0.5*(Math.cos(Math.PI*b)-1)
})),z("easing.EaseLookup",{find:function(a){return H.map[a]
}},!0),x(D.SlowMo,"SlowMo","ease,"),x(F,"RoughEase","ease,"),x(G,"SteppedEase","ease,"),t
},!0)
}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){var b=function(){return _gsScope.GreenSockGlobals||_gsScope
};
"function"==typeof define&&define.amd?define(["../TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())
}();
function CallInitialAnimation(){TweenMax.set(".InfoGraphicbxsliderAnimation",{css:{perspective:1000}}),TweenMax.set(pig1Text,{alpha:0}),TweenMax.set(pig2Text,{alpha:0}),TweenMax.set(pig3Text,{alpha:0}),TweenMax.set(pigBodyCopy,{alpha:0}),TweenMax.set(stFabGScta,{scale:0.75,alpha:0}),TweenMax.set(f3blockTitle,{scale:0.5,alpha:0}),TweenMax.set(f3blockBody,{alpha:0}),TweenMax.set(f3atm,{scale:0.75}),TweenMax.set(f3computer,{scale:0.75}),TweenMax.set(f3smartphone,{scale:0.75}),TweenMax.set(stFabBBcta,{scale:0.75,alpha:0}),TweenMax.set(f4subtitle,{alpha:0}),TweenMax.set(f4creditcard,{scale:0.75}),TweenMax.set(f4wallet,{scale:0.75}),TweenMax.set(f4dollar1,{scale:0.25}),TweenMax.set(f4dollar2,{scale:0.25}),TweenMax.set(f4safe,{scale:0.75}),TweenMax.set(stFabMTcta,{scale:0.75,alpha:0}),TweenMax.set(coinpileCoin,{rotation:16}),TweenMax.set(stFabTBcta,{scale:0.75,alpha:0}),TweenMax.set(ufBill1,{rotation:-70}),TweenMax.set(ufBill2,{rotation:-50}),TweenMax.set(ufBill3,{rotation:-65}),TweenMax.set(ufBill4,{rotation:-80}),TweenMax.set(ufHeader,{scale:0.5,alpha:0}),TweenMax.set(ufBody,{alpha:0}),TweenMax.set(stFabUFcta,{scale:0.75,alpha:0}),TweenMax.set(stFabGcta,{scale:0.75,alpha:0}),TweenMax.set(gCounter1,{scale:0.75,alpha:0}),TweenMax.set(gCounter2,{scale:0.75,alpha:0}),TweenMax.set(faqCircle,{scale:0}),TweenMax.set(lq1,{alpha:0}),TweenMax.set(lq2,{alpha:0}),TweenMax.set(lq3,{alpha:0}),TweenMax.set(lq4,{alpha:0}),TweenMax.set(lq5,{alpha:0}),TweenMax.set(lq6,{alpha:0}),TweenMax.set(lq7,{alpha:0}),TweenMax.set(lq8,{alpha:0}),TweenMax.set(lq9,{alpha:0}),TweenMax.set(rq1,{alpha:0}),TweenMax.set(rq2,{alpha:0}),TweenMax.set(rq3,{alpha:0}),TweenMax.set(rq4,{alpha:0}),TweenMax.set(rq5,{alpha:0}),TweenMax.set(rq6,{alpha:0}),TweenMax.set(stFabFAQcta,{scale:0.75,alpha:0})
}function gettingStartedAnimation(){animatePig1(),setTimeout(function(){animatePig2()
},1000),setTimeout(function(){animatePig3()
},2000),setTimeout(function(){TweenMax.to(pigBodyCopy,1.5,{alpha:1,delay:1,force3D:!0})
},3000)
}function animatePig1(){TweenMax.to(pig1Coin01,2,{top:"94%"}),TweenMax.to(pig1Coin01,0.8,{left:"23%",delay:1.7}),TweenMax.to(pig1Coin02,2,{top:"94%",delay:0.4}),TweenMax.to(pig1Coin02,0.8,{left:"57%",delay:1.9}),TweenMax.to(pig1Coin03,2,{top:"92%",delay:0.9}),TweenMax.to(pig1Coin03,0.8,{left:"29%",delay:2.1}),TweenMax.to(pig1Coin04,2,{top:"91.8%",delay:1.3}),TweenMax.to(pig1Coin04,0.8,{left:"40.5%",delay:2.5}),TweenMax.to(pig1Coin05,2,{top:"90.6%",delay:1.4}),TweenMax.to(pig1Coin05,0.8,{left:"23%",delay:3}),TweenMax.to(pig1Coin06,2,{top:"88.25%",delay:1.6}),TweenMax.to(pig1Coin06,0.8,{left:"36.75%",delay:3.2}),TweenMax.to(pig1Coin07,2,{top:"89.5%",delay:1.8}),TweenMax.to(pig1Coin07,0.8,{left:"8.93%",delay:3.5}),TweenMax.to(pig1Coin08,2,{top:"90%",delay:2.1}),TweenMax.to(pig1Coin08,0.8,{left:"53.6%",delay:3.6}),TweenMax.to(pig1Coin09,2,{top:"86.5%",delay:2.3}),TweenMax.to(pig1Coin09,0.8,{left:"36.75%",delay:3.8}),TweenMax.to(pig1Coin10,2,{top:"87%",delay:2.6}),TweenMax.to(pig1Coin10,0.8,{left:"1.42%",delay:4.1}),TweenMax.to(pig1Coin11,2,{top:"90%",delay:2.7}),TweenMax.to(pig1Coin11,1.3,{left:"70.59%",delay:4.1}),TweenMax.to(pig1Coin12,2,{top:"85%",delay:2.8}),TweenMax.to(pig1Coin12,0.5,{left:"48.03%",delay:4.3}),TweenMax.to(pig1Coin13,2,{top:"85.7%",delay:3}),TweenMax.to(pig1Coin13,0.4,{left:"20.21%",delay:4.5}),TweenMax.to(pig1Coin14,2,{top:"85.8%",delay:3.1}),TweenMax.to(pig1Coin14,1.2,{left:"63.07%",delay:4.5}),TweenMax.to(pig1Coin15,2,{top:"82.5%",delay:3.2}),TweenMax.to(pig1Text,1.5,{opacity:1,delay:1.2,force3D:!0})
}function animatePig2(){TweenMax.to(pig2Coin01,2,{top:"93.75%"}),TweenMax.to(pig2Coin01,0.8,{left:"23.33%",delay:1.7}),TweenMax.to(pig2Coin02,2,{top:"94.37%",delay:0.4}),TweenMax.to(pig2Coin02,0.8,{left:"56.66%",delay:1.9}),TweenMax.to(pig2Coin03,2,{top:"92.5%",delay:0.9}),TweenMax.to(pig2Coin03,0.8,{left:"35.45%",delay:2.1}),TweenMax.to(pig2Coin04,2,{top:"91.87%",delay:1.3}),TweenMax.to(pig2Coin04,0.8,{left:"44.54%",delay:2.5}),TweenMax.to(pig2Coin05,2,{top:"90.62%",delay:1.4}),TweenMax.to(pig2Coin05,0.8,{left:"30.9%",delay:3}),TweenMax.to(pig2Coin06,2,{top:"88.25%",delay:1.6}),TweenMax.to(pig2Coin06,0.8,{left:"41.51%",delay:3.2}),TweenMax.to(pig2Coin07,2,{top:"89.5%",delay:1.8}),TweenMax.to(pig2Coin07,0.8,{left:"19.09%",delay:3.5}),TweenMax.to(pig2Coin08,2,{top:"90%",delay:2.1}),TweenMax.to(pig2Coin08,0.8,{left:"55.15%",delay:3.6}),TweenMax.to(pig2Coin09,2,{top:"86.87%",delay:2.3}),TweenMax.to(pig2Coin09,0.8,{left:"41.51%",delay:3.8}),TweenMax.to(pig2Coin10,2,{top:"87%",delay:2.6}),TweenMax.to(pig2Coin10,0.8,{left:"9.09%",delay:4.1}),TweenMax.to(pig2Coin11,2,{top:"90%",delay:2.7}),TweenMax.to(pig2Coin11,1.3,{left:"68.78%",delay:4.1}),TweenMax.to(pig2Coin12,2,{top:"85.62%",delay:2.8}),TweenMax.to(pig2Coin12,0.5,{left:"50.6%",delay:4.3}),TweenMax.to(pig2Coin13,2,{top:"85.75%",delay:3}),TweenMax.to(pig2Coin13,0.4,{left:"28.18%",delay:4.5}),TweenMax.to(pig2Coin14,2,{top:"85.87%",delay:3.1}),TweenMax.to(pig2Coin14,1.2,{left:"62.72%",delay:4.5}),TweenMax.to(pig2Coin15,2,{top:"82.5%",delay:3.2}),TweenMax.to(pig2Coin16,1.9,{top:"84.37%",delay:3.3}),TweenMax.to(pig2Coin16,0.5,{left:"74.84%",delay:4.9}),TweenMax.to(pig2Coin17,1.8,{top:"83.25%",delay:3.5}),TweenMax.to(pig2Coin17,1.4,{left:"0.9%",delay:4.9}),TweenMax.to(pig2Coin18,1.8,{top:"80.87%",delay:3.6}),TweenMax.to(pig2Coin18,1.4,{left:"62.72%",delay:4.88}),TweenMax.to(pig2Coin19,1.8,{top:"81.87%",delay:3.8}),TweenMax.to(pig2Coin19,0.5,{left:"50.6%",delay:4.9}),TweenMax.to(pig2Coin20,1.8,{top:"83.12%",delay:3.8}),TweenMax.to(pig2Coin20,0.6,{left:"17.87%",delay:5}),TweenMax.to(pig2Coin21,1.7,{top:"81.25%",delay:3.9}),TweenMax.to(pig2Coin21,1.3,{left:"86.36%",delay:5.2}),TweenMax.to(pig2Coin22,1.7,{top:"76.87%",delay:4}),TweenMax.to(pig2Coin22,0.5,{left:"35.60%",delay:5.5}),TweenMax.to(pig2Coin23,1.7,{top:"79.37%",delay:4.2}),TweenMax.to(pig2Coin23,0.4,{left:"28.18%",delay:5.6}),TweenMax.to(pig2Coin24,1.7,{top:"77.5%",delay:4.35}),TweenMax.to(pig2Coin24,1.2,{left:"50.72%",delay:5.7}),TweenMax.to(pig2Coin25,1.7,{top:"76.62%",delay:4.5}),TweenMax.to(pig2Coin25,1.2,{left:"60.72%",delay:5.8}),TweenMax.to(pig2Text,1.5,{opacity:1,delay:1.2,force3D:!0})
}function animatePig3(){TweenMax.to(pig3Coin01,2,{top:"93.75%"}),TweenMax.to(pig3Coin01,0.8,{left:"26%",delay:1.7}),TweenMax.to(pig3Coin02,2,{top:"94.38%",delay:0.4}),TweenMax.to(pig3Coin02,0.8,{left:"53.95%",delay:1.9}),TweenMax.to(pig3Coin03,2,{top:"92.5%",delay:0.9}),TweenMax.to(pig3Coin03,0.8,{left:"37.67%",delay:2.1}),TweenMax.to(pig3Coin04,2,{top:"91.88%",delay:1.3}),TweenMax.to(pig3Coin04,0.8,{left:"44.65%",delay:2.5}),TweenMax.to(pig3Coin05,2,{top:"90.63%",delay:1.4}),TweenMax.to(pig3Coin05,0.8,{left:"31.86%",delay:3}),TweenMax.to(pig3Coin06,2,{top:"88.25%",delay:1.6}),TweenMax.to(pig3Coin06,0.8,{left:"42.3%",delay:3.2}),TweenMax.to(pig3Coin07,2,{top:"89.5%",delay:1.8}),TweenMax.to(pig3Coin07,0.8,{left:"20.23%",delay:3.5}),TweenMax.to(pig3Coin08,2,{top:"90%",delay:2.1}),TweenMax.to(pig3Coin08,0.8,{left:"52.79%",delay:3.6}),TweenMax.to(pig3Coin09,2,{top:"86.88%",delay:2.3}),TweenMax.to(pig3Coin09,0.8,{left:"42.32%",delay:3.8}),TweenMax.to(pig3Coin10,2,{top:"87%",delay:2.6}),TweenMax.to(pig3Coin10,0.8,{left:"10.49%",delay:4.1}),TweenMax.to(pig3Coin11,2,{top:"90%",delay:2.7}),TweenMax.to(pig3Coin11,1.3,{left:"63.25%",delay:4.1}),TweenMax.to(pig3Coin12,2,{top:"85.63%",delay:2.8}),TweenMax.to(pig3Coin12,0.5,{left:"49.3%",delay:4.3}),TweenMax.to(pig3Coin13,2,{top:"85.75%",delay:3}),TweenMax.to(pig3Coin13,0.4,{left:"32%",delay:4.5}),TweenMax.to(pig3Coin14,2,{top:"85.89%",delay:3.1}),TweenMax.to(pig3Coin14,1.2,{left:"58.6%",delay:4.5}),TweenMax.to(pig3Coin15,2,{top:"82.5%",delay:3.2}),TweenMax.to(pig3Coin16,1.9,{top:"85.62%",delay:3.3}),TweenMax.to(pig3Coin16,0.5,{left:"70.23%",delay:4.9}),TweenMax.to(pig3Coin17,1.8,{top:"83.25%",delay:3.5}),TweenMax.to(pig3Coin17,1.4,{left:"11.16%",delay:4.9}),TweenMax.to(pig3Coin18,1.8,{top:"80.88%",delay:3.6}),TweenMax.to(pig3Coin18,1.4,{left:"63.25%",delay:4.88}),TweenMax.to(pig3Coin19,1.8,{top:"81.88%",delay:3.8}),TweenMax.to(pig3Coin19,0.5,{left:"49.3%",delay:4.9}),TweenMax.to(pig3Coin20,1.8,{top:"84.38%",delay:3.8}),TweenMax.to(pig3Coin20,0.6,{left:"22.55%",delay:5}),TweenMax.to(pig3Coin21,1.7,{top:"83.75%",delay:3.9}),TweenMax.to(pig3Coin21,1.3,{left:"76.44%",delay:5.2}),TweenMax.to(pig3Coin22,1.7,{top:"77.5%",delay:4}),TweenMax.to(pig3Coin22,0.5,{left:"49.3%",delay:5.5}),TweenMax.to(pig3Coin23,1.7,{top:"80.25%",delay:4.2}),TweenMax.to(pig3Coin23,0.4,{left:"32%",delay:5.6}),TweenMax.to(pig3Coin24,1.7,{top:"78.75%",delay:4.35}),TweenMax.to(pig3Coin24,1.2,{left:"58.6%",delay:5.7}),TweenMax.to(pig3Coin25,1.7,{top:"81.25%",delay:4.5}),TweenMax.to(pig3Coin25,1.2,{left:"18.6%",delay:5.6}),TweenMax.to(pig3Coin26,1.65,{top:"79.375%",delay:4.65}),TweenMax.to(pig3Coin26,1.5,{left:"70.23%",delay:5.9}),TweenMax.to(pig3Coin27,1.6,{top:"82%",delay:4.8}),TweenMax.to(pig3Coin27,1.4,{left:"1.86%",delay:6.1}),TweenMax.to(pig3Coin28,1.6,{top:"80.87%",delay:5}),TweenMax.to(pig3Coin28,1.4,{left:"58.6%",delay:6}),TweenMax.to(pig3Coin29,1.6,{top:"79.4%",delay:5.2}),TweenMax.to(pig3Coin29,0.5,{left:"44.65%",delay:6.2}),TweenMax.to(pig3Coin30,1.6,{top:"78.75%",delay:5.4}),TweenMax.to(pig3Coin30,0.6,{left:"23%",delay:6.65}),TweenMax.to(pig3Coin31,1.5,{top:"78.75%",delay:5.6}),TweenMax.to(pig3Coin31,1.3,{left:"81.4%",delay:6.8}),TweenMax.to(pig3Coin32,1.5,{top:"76.25%",delay:5.8}),TweenMax.to(pig3Coin32,0.4,{left:"38.1%",delay:7.4}),TweenMax.to(pig3Coin33,1.5,{top:"75%",delay:6.1}),TweenMax.to(pig3Coin33,0.4,{left:"28.8%",delay:7.5}),TweenMax.to(pig3Coin34,1.5,{top:"77.25%",delay:6.35}),TweenMax.to(pig3Coin34,1.2,{left:"88.8%",delay:7.6}),TweenMax.to(pig3Coin35,1.5,{top:"78.1%",delay:6.55}),TweenMax.to(pig3Coin35,1.2,{left:"10.9%",delay:7.8}),TweenMax.to(pig3Text,1.5,{opacity:1,delay:1.2,force3D:!0}),TweenMax.to(stFabGScta,0.6,{display:"block",autoAlpha:1,delay:2.8,force3D:!1}),TweenMax.fromTo(stFabGScta,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:2.8,force3D:!1})
}function bankingBasicsAnimation(){frameWidth=$("#s5").width(),TweenMax.to(f3blockTitle,0.25,{scaleX:1,scaleY:1,alpha:1,ease:Power2.easeOut,delay:0.5,force3D:!0}),TweenMax.to(f3blockBody,1,{alpha:1,delay:1.5,force3D:!0}),TweenMax.to(f3linesContainer1,1.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeNone,onCompleteParams:[f3linesContainer1,bankingBasicsAnimation2],onComplete:onCompleteProxy})
}function bankingBasicsAnimation2(){TweenMax.to(f3linesContainer2,2,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeNone,onCompleteParams:[f3linesContainer2],onComplete:killClip}),TweenMax.to(f3atm,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut}),TweenMax.to(f3computer,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:0.65}),TweenMax.to(f3smartphone,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:1.4}),TweenMax.to(stFabBBcta,0.6,{display:"block",autoAlpha:1,delay:2,force3D:!1}),TweenMax.to(stFabBBcta,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:2,force3D:!1})
}function makingTransactionsAnimation(){frameWidth=$("#s7").width(),TweenMax.to(f4subtitle,1,{top:"67%",alpha:1,ease:Power2.easeOut}),TweenMax.to(f4line1cont,1.5,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeNone,delay:1,onCompleteParams:[f4line1cont,makingTransactionsAnimation2],onComplete:onCompleteProxy}),TweenMax.to(f4maincont,1.25,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:1.75,onCompleteParams:[f4maincont],onComplete:killClip})
}function makingTransactionsAnimation2(){frameWidth=$("#s7").width(),TweenMax.to(f4line2cont,1,{clip:"rect(0px "+frameWidth+" 40px 0px)",ease:Power0.easeOut}),TweenMax.to(f4line2cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line2cont],onComplete:killClip}),TweenMax.to(f4line3cont,0.5,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line3cont,makingTransactionsAnimation3],onComplete:onCompleteProxy})
}function makingTransactionsAnimation3(){frameWidth=$("#s7").width(),TweenMax.to(f4line4cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line4cont],onComplete:killClip}),TweenMax.to(f4creditcard,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut}),TweenMax.to(f4wallet,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:0.1}),TweenMax.to(f4dollar1,1,{scaleX:1,scaleY:1,rotation:-40,y:"-30%",x:"20%",ease:Back.easeOut,delay:0.2}),TweenMax.to(f4dollar2,1,{scaleX:1,scaleY:1,rotation:-50,y:"-75%",x:"5%",ease:Back.easeOut,delay:0.3}),TweenMax.to(f4line5cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:0.1,onCompleteParams:[f4line5cont,makingTransactionsAnimation4],onComplete:onCompleteProxy})
}function makingTransactionsAnimation4(){frameWidth=$("#s7").width(),TweenMax.to(f4line6cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line6cont],onComplete:killClip}),TweenMax.to(f4safe,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:0.5}),TweenMax.to(f4line7cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:0.5,onCompleteParams:[f4line7cont,makingTransactionsAnimation5],onComplete:onCompleteProxy})
}function makingTransactionsAnimation5(){frameWidth=$("#s7").width(),TweenMax.to(f4line8cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line8cont],onComplete:killClip}),TweenMax.to(f4line9cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:0.1,onCompleteParams:[f4line9cont,makingTransactionsAnimation6],onComplete:onCompleteProxy})
}function makingTransactionsAnimation6(){frameWidth=$("#s8").width(),TweenMax.to(f4line10cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,onCompleteParams:[f4line10cont],onComplete:killClip}),TweenMax.to(stFabMTcta,0.6,{display:"block",autoAlpha:1,delay:0.5,force3D:!1}),TweenMax.to(stFabMTcta,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:0.5,force3D:!1})
}function trackBalancesAnimation(){frameWidth=$("#s9").width(),TweenMax.to(clockhand,1.5,{rotation:180,transformOrigin:"right center",delay:0.25}),TweenMax.to(linebaseCont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:1.25,onCompleteParams:[linebaseCont],onComplete:killClip}),TweenMax.to(coinline1cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:1.85,onCompleteParams:[coinline1cont],onComplete:killClip}),TweenMax.to(coinline2cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:2.05,onCompleteParams:[coinline2cont],onComplete:killClip}),TweenMax.to(coinline3cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:2.25,onCompleteParams:[coinline3cont],onComplete:killClip}),TweenMax.to(coinline4cont,1,{clip:"rect(0px 800px 400px 0px)",ease:Power0.easeOut,delay:1.5,onCompleteParams:[coinline4cont],onComplete:killClip}),setTimeout(function(){TweenMax.to(coinstack1coin1,0.2,{y:"-100%",delay:0.25}),TweenMax.to(coinstack1coin1,0.2,{y:"0%",delay:0.45,ease:Bounce.easeOut}),TweenMax.to(coinstack1coin2,0.2,{y:"-35%",delay:0.2}),TweenMax.to(coinstack1coin2,0.2,{y:"0%",delay:0.4,ease:Bounce.easeOut}),TweenMax.to(coinstack2coin1,0.2,{y:"-100%",delay:0.35}),TweenMax.to(coinstack2coin1,0.2,{y:"0%",delay:0.75,ease:Bounce.easeOut}),TweenMax.to(coinstack2coin2,0.2,{y:"-35%",delay:0.3}),TweenMax.to(coinstack2coin2,0.2,{y:"0%",delay:0.7,ease:Bounce.easeOut}),TweenMax.to(coinstack3coin1,0.2,{y:"-100%",delay:0.85}),TweenMax.to(coinstack3coin1,0.2,{y:"0%",delay:1.05,ease:Bounce.easeOut}),TweenMax.to(coinstack3coin2,0.2,{y:"-35%",delay:0.8}),TweenMax.to(coinstack3coin2,0.2,{y:"0%",delay:1,ease:Bounce.easeOut})
},1700),TweenMax.fromTo(stFabTBbody,0.4,{top:"120%",left:"5%"},{top:"71%",left:"5%",delay:2.4,ease:Back.easeOut}),setTimeout(function(){TweenMax.fromTo(coinpileCoin,0.5,{top:"41%",left:"25%"},{top:"47%",left:"33%",delay:0.4}),TweenMax.to(coinpileCoin,1.3,{top:"58%",left:"56%",delay:0.7,ease:Quad.easeInOut})
},2300),TweenMax.to(stFabTBcta,0.6,{display:"block",autoAlpha:1,delay:3.4,force3D:!1}),TweenMax.fromTo(stFabTBcta,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:3.4,force3D:!1})
}function understandingFeesAnimation(){frameWidth=$("#s10").width(),setTimeout(function(){TweenMax.to(ufBill4,2.3,{rotation:30,top:"75%",left:"5.5%",delay:0.6,force3D:!0,ease:Power1.easeOut}),TweenMax.to(ufBill3,2.1,{rotation:-30,top:"62%",left:"4.5%",delay:0.65,force3D:!0,ease:Power1.easeOut}),TweenMax.to(ufBill2,2.2,{rotation:-11,top:"42%",left:"13.5%",delay:0.7,force3D:!0,ease:Power1.easeOut}),TweenMax.to(ufBill1,2.1,{rotation:14,top:"25%",left:"3.5%",delay:0.75,force3D:!0,ease:Power1.easeOut})
},2800),TweenMax.to(ufCircle2BottomCont,1.2,{clip:"rect(0px "+frameWidth+" 450px 0px)",ease:Power0.easeOut,delay:1.5,onCompleteParams:[ufCircle2BottomCont],onComplete:killClip}),TweenMax.to(ufCircle2TopCont,1.2,{clip:"rect(0px "+frameWidth+" 450px 0px)",ease:Power0.easeOut,delay:1,onCompleteParams:[ufCircle2TopCont],onComplete:killClip}),TweenMax.to(ufHeader,1,{scale:1,alpha:1,force3D:!0}),TweenMax.to(ufBody,1,{alpha:1,delay:1.5,force3D:!0}),TweenMax.to(ufLine1cont,1,{clip:"rect(0px "+frameWidth+" 900px 0px)",ease:Power0.easeOut,onCompleteParams:[ufLine1cont],onComplete:killClip}),TweenMax.to(ufLine2cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:0.75,onCompleteParams:[ufLine2cont],onComplete:killClip}),TweenMax.to(ufLine3cont,1,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,delay:1.75,onCompleteParams:[ufLine3cont,understandingFeesAnimation2],onComplete:onCompleteProxy})
}function understandingFeesAnimation2(){frameWidth=$("#s11").width(),TweenMax.to(ufLine4cont,1,{clip:"rect(0px "+frameWidth+" 450px 0px)",ease:Power0.easeOut,onCompleteParams:[ufLine4cont],onComplete:killClip}),TweenMax.to(stFabUFcta,0.6,{display:"block",autoAlpha:1,delay:1.2,force3D:!1}),TweenMax.fromTo(stFabUFcta,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:1.25,force3D:!1})
}function glossaryAnimation(){frameWidth=$("#s12").width(),TweenMax.to(gLeftLine1cont,1.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,onCompleteParams:[gLeftLine1cont],onComplete:killClip}),TweenMax.to(gLeftLine2cont,1.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:1.7,onCompleteParams:[gLeftLine2cont],onComplete:killClip}),TweenMax.to(gLeftLine3cont,1.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:2.2,onCompleteParams:[gLeftLine3cont],onComplete:killClip}),TweenMax.to(gLeftLine4cont,0.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:3.7,onCompleteParams:[gLeftLine4cont],onComplete:killClip}),TweenMax.to(gLeftLine5cont,2.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:1.7,onCompleteParams:[gLeftLine5cont],onComplete:killClip}),TweenMax.to(gLeftLine6cont,1.7,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:3.7,onCompleteParams:[gLeftLine6cont],onComplete:killClip}),TweenMax.to(gRightLine1cont,1.2,{clip:"rect(0px "+frameWidth+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:3.7,onCompleteParams:[gRightLine1cont],onComplete:killClip}),TweenMax.to(gRightLine2cont,2.2,{clip:"rect(0px "+frameWidth*1.1+" 400px 0px)",ease:Power0.easeOut,force3D:!0,delay:4.2,onCompleteParams:[gRightLine2cont],onComplete:killClip}),TweenMax.to(stFabGcta,0.6,{display:"block",autoAlpha:1,delay:5.7,force3D:!0}),TweenMax.fromTo(stFabGcta,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:5.75,force3D:!0}),TweenMax.to(gCounter1,0.6,{alpha:1,delay:4.75,force3D:!0}),TweenMax.fromTo(gCounter1,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:4.8,force3D:!0}),TweenMax.to(gCounter2,0.6,{alpha:1,delay:5,force3D:!0}),TweenMax.fromTo(gCounter2,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:5.05,force3D:!0})
}function faqAnimation(){frameWidth=$("#s13").width(),TweenMax.to(faqLineCont,1.6,{clip:"rect(0px "+frameWidth+" 800px 0px)",ease:Power0.easeOut,force3D:!0,delay:1}),TweenMax.to(faqCircle,1,{scaleX:1,scaleY:1,ease:Elastic.easeOut,force3D:!0,delay:2.6}),TweenMax.to(faqCurlCont,4,{clip:"rect(0px "+frameWidth+" 800px 0px)",ease:Power0.easeInOut,force3D:!0,delay:1.8}),TweenMax.set(faqLineCont,{clip:"rect(0px 8000px 8000px 0px)",delay:2.7}),TweenMax.set(faqCurlCont,{clip:"rect(0px 8000px 8000px 0px)",delay:5.9});
var a=3;
TweenMax.to(lq1,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.6}),TweenMax.to(lq2,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.4}),TweenMax.to(lq3,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1.6}),TweenMax.to(lq4,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1.2}),TweenMax.to(lq5,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1}),TweenMax.to(lq6,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1.8}),TweenMax.to(lq7,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.8}),TweenMax.to(lq8,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.2}),TweenMax.to(lq9,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.7}),TweenMax.to(rq1,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.7}),TweenMax.to(rq2,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1}),TweenMax.to(rq3,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2.3}),TweenMax.to(rq4,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*2}),TweenMax.to(rq5,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1.6}),TweenMax.to(rq6,1.6,{alpha:1,left:"0%",ease:Quad.easeOut,force3D:!0,delay:a*1.2}),TweenMax.to(stFabFAQcta,0.6,{display:"block",autoAlpha:1,delay:5.2,force3D:!1}),TweenMax.fromTo(stFabFAQcta,1,{scaleX:0.75,scaleY:0.75},{scaleX:1,scaleY:1,ease:Elastic.easeOut,delay:5.25,force3D:!1})
}function onCompleteProxy(b,a){killClip(b),a()
}function killClip(b){var a=b.id;
$("#"+a).css("clip","auto")
}var frameWidth;
var $jscomp={scope:{},findInternal:function(f,e,k){f instanceof String&&(f=String(f));
for(var j=f.length,g=0;
g<j;
g++){var c=f[g];
if(e.call(k,c,g,f)){return{i:g,v:c}
}}return{i:-1,v:void 0}
}};
$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,b,e){if(e.get||e.set){throw new TypeError("ES3 does not support getters and setters.")
}c!=Array.prototype&&c!=Object.prototype&&(c[b]=e.value)
};
$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b
};
$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(c,b,g,f){if(b){g=$jscomp.global;
c=c.split(".");
for(f=0;
f<c.length-1;
f++){var e=c[f];
e in g||(g[e]={});
g=g[e]
}c=c[c.length-1];
f=g[c];
b=b(f);
b!=f&&null!=b&&$jscomp.defineProperty(g,c,{configurable:!0,writable:!0,value:b})
}};
$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(c,e){return $jscomp.findInternal(this,c,e).v
}
},"es6-impl","es3");
(function(c,b,e){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?module.exports=c(require("jquery")):c(b||e)
})(function(c){var b=function(j,n,l){var p={invalid:[],getCaret:function(){try{var d,m=0,h=j.get(0),s=document.selection,q=h.selectionStart;
if(s&&-1===navigator.appVersion.indexOf("MSIE 10")){d=s.createRange(),d.moveStart("character",-p.val().length),m=d.text.length
}else{if(q||"0"===q){m=q
}}return m
}catch(t){}},setCaret:function(d){try{if(j.is(":focus")){var q,h=j.get(0);
h.setSelectionRange?h.setSelectionRange(d,d):(q=h.createTextRange(),q.collapse(!0),q.moveEnd("character",d),q.moveStart("character",d),q.select())
}}catch(m){}},events:function(){j.on("keydown.mask",function(d){j.data("mask-keycode",d.keyCode||d.which);
j.data("mask-previus-value",j.val());
j.data("mask-previus-caret-pos",p.getCaret());
p.maskDigitPosMapOld=p.maskDigitPosMap
}).on(c.jMaskGlobals.useInput?"input.mask":"keyup.mask",p.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){j.keydown().keyup()
},100)
}).on("change.mask",function(){j.data("changed",!0)
}).on("blur.mask",function(){o===p.val()||j.data("changed")||j.trigger("change");
j.data("changed",!1)
}).on("blur.mask",function(){o=p.val()
}).on("focus.mask",function(d){!0===l.selectOnFocus&&c(d.target).select()
}).on("focusout.mask",function(){l.clearIfNotMatch&&!k.test(p.val())&&p.val("")
})
},getRegexMask:function(){for(var m=[],h,t,q,s,r=0;
r<n.length;
r++){(h=a.translation[n.charAt(r)])?(t=h.pattern.toString().replace(/.{1}$|^.{1}/g,""),q=h.optional,(h=h.recursive)?(m.push(n.charAt(r)),s={digit:n.charAt(r),pattern:t}):m.push(q||h?t+"?":t)):m.push(n.charAt(r).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"))
}m=m.join("");
s&&(m=m.replace(new RegExp("("+s.digit+"(.*"+s.digit+")?)"),"($1)?").replace(new RegExp(s.digit,"g"),s.pattern));
return new RegExp(m)
},destroyEvents:function(){j.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
},val:function(d){var h=j.is("input")?"val":"text";
if(0<arguments.length){if(j[h]()!==d){j[h](d)
}h=j
}else{h=j[h]()
}return h
},calculateCaretPosition:function(){var y=j.data("mask-previus-value")||"",w=p.getMasked(),u=p.getCaret();
if(y!==w){var v=j.data("mask-previus-caret-pos")||0,w=w.length,x=y.length,q=y=0,t=0,r=0,s;
for(s=u;
s<w&&p.maskDigitPosMap[s];
s++){q++
}for(s=u-1;
0<=s&&p.maskDigitPosMap[s];
s--){y++
}for(s=u-1;
0<=s;
s--){p.maskDigitPosMap[s]&&t++
}for(s=v-1;
0<=s;
s--){p.maskDigitPosMapOld[s]&&r++
}u>x?u=10*w:v>=u&&v!==x?p.maskDigitPosMapOld[u]||(v=u,u=u-(r-t)-y,p.maskDigitPosMap[u]&&(u=v)):u>v&&(u=u+(t-r)+q)
}return u
},behaviour:function(h){h=h||window.event;
p.invalid=[];
var m=j.data("mask-keycode");
if(-1===c.inArray(m,a.byPassKeys)){var m=p.getMasked(),d=p.getCaret();
setTimeout(function(){p.setCaret(p.calculateCaretPosition())
},10);
p.val(m);
p.setCaret(d);
return p.callbacks(h)
}},getMasked:function(R,Q){var O=[],P=void 0===Q?p.val():Q+"",K=0,N=n.length,H=0,L=P.length,M=1,G="push",J=-1,F=0,s=[],D,m;
l.reverse?(G="unshift",M=-1,D=0,K=N-1,H=L-1,m=function(){return -1<K&&-1<H
}):(D=N-1,m=function(){return K<N&&H<L
});
for(var I;
m();
){var B=n.charAt(K),C=P.charAt(H),E=a.translation[B];
if(E){C.match(E.pattern)?(O[G](C),E.recursive&&(-1===J?J=K:K===D&&(K=J-M),D===J&&(K-=M)),K+=M):C===I?(F--,I=void 0):E.optional?(K+=M,H-=M):E.fallback?(O[G](E.fallback),K+=M,H-=M):p.invalid.push({p:H,v:C,e:E.pattern}),H+=M
}else{if(!R){O[G](B)
}C===B?(s.push(H),H+=M):(I=B,s.push(H+F),F++);
K+=M
}}P=n.charAt(D);
N!==L+1||a.translation[P]||O.push(P);
O=O.join("");
p.mapMaskdigitPositions(O,s,L);
return O
},mapMaskdigitPositions:function(h,d,m){h=l.reverse?h.length-m:0;
p.maskDigitPosMap={};
for(m=0;
m<d.length;
m++){p.maskDigitPosMap[d[m]+h]=1
}},callbacks:function(r){var s=p.val(),t=s!==o,d=[s,r,j,l],u=function(m,h,q){"function"===typeof l[m]&&h&&l[m].apply(this,q)
};
u("onChange",!0===t,d);
u("onKeyPress",!0===t,d);
u("onComplete",s.length===n.length,d);
u("onInvalid",0<p.invalid.length,[s,r,j,p.invalid,l])
}};
j=c(j);
var a=this,o=p.val(),k;
n="function"===typeof n?n(p.val(),void 0,j,l):n;
a.mask=n;
a.options=l;
a.remove=function(){var d=p.getCaret();
p.destroyEvents();
p.val(a.getCleanVal());
p.setCaret(d);
return j
};
a.getCleanVal=function(){return p.getMasked(!0)
};
a.getMaskedVal=function(d){return p.getMasked(!1,d)
};
a.init=function(q){q=q||!1;
l=l||{};
a.clearIfNotMatch=c.jMaskGlobals.clearIfNotMatch;
a.byPassKeys=c.jMaskGlobals.byPassKeys;
a.translation=c.extend({},c.jMaskGlobals.translation,l.translation);
a=c.extend(!0,{},a,l);
k=p.getRegexMask();
if(q){p.events(),p.val(p.getMasked())
}else{l.placeholder&&j.attr("placeholder",l.placeholder);
j.data("mask")&&j.attr("autocomplete","off");
q=0;
for(var h=!0;
q<n.length;
q++){var m=a.translation[n.charAt(q)];
if(m&&m.recursive){h=!1;
break
}}h&&j.attr("maxlength",n.length);
p.destroyEvents();
p.events();
q=p.getCaret();
p.val(p.getMasked());
p.setCaret(q)
}};
a.init(!j.is("input"))
};
c.maskWatchers={};
var g=function(){var a=c(this),h={},d=a.attr("data-mask");
a.attr("data-mask-reverse")&&(h.reverse=!0);
a.attr("data-mask-clearifnotmatch")&&(h.clearIfNotMatch=!0);
"true"===a.attr("data-mask-selectonfocus")&&(h.selectOnFocus=!0);
if(f(a,d,h)){return a.data("mask",new b(this,d,h))
}},f=function(a,k,j){j=j||{};
var m=c(a).data("mask"),l=JSON.stringify;
a=c(a).val()||c(a).text();
try{return"function"===typeof k&&(k=k(a)),"object"!==typeof m||l(m.options)!==l(j)||m.mask!==k
}catch(h){}},e=function(j){var h=document.createElement("div"),k;
j="on"+j;
k=j in h;
k||(h.setAttribute(j,"return;"),k="function"===typeof h[j]);
return k
};
c.fn.mask=function(a,m){m=m||{};
var l=this.selector,n=c.jMaskGlobals,k=n.watchInterval,n=m.watchInputs||n.watchInputs,j=function(){if(f(this,a,m)){return c(this).data("mask",new b(this,a,m))
}};
c(this).each(j);
l&&""!==l&&n&&(clearInterval(c.maskWatchers[l]),c.maskWatchers[l]=setInterval(function(){c(document).find(l).each(j)
},k));
return this
};
c.fn.masked=function(d){return this.data("mask").getMaskedVal(d)
};
c.fn.unmask=function(){clearInterval(c.maskWatchers[this.selector]);
delete c.maskWatchers[this.selector];
return this.each(function(){var a=c(this).data("mask");
a&&a.remove().removeData("mask")
})
};
c.fn.cleanVal=function(){return this.data("mask").getCleanVal()
};
c.applyDataMask=function(a){a=a||c.jMaskGlobals.maskElements;
(a instanceof c?a:c(a)).filter(c.jMaskGlobals.dataMaskAttr).each(g)
};
e={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&e("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};
c.jMaskGlobals=c.jMaskGlobals||{};
e=c.jMaskGlobals=c.extend(!0,{},e,c.jMaskGlobals);
e.dataMask&&c.applyDataMask();
setInterval(function(){c.jMaskGlobals.watchDataMask&&c.applyDataMask()
},e.watchInterval)
},window.jQuery,window.Zepto);
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(c){var b=(function(){if(c&&c.fn&&c.fn.select2&&c.fn.select2.amd){var d=c.fn.select2.amd
}var d;
(function(){if(!d||!d.requirejs){if(!d){d={}
}else{e=d
}var f,e,g;
(function(m){var p,h,t,u,l={},k={},A={},x={},s=Object.prototype.hasOwnProperty,q=[].slice,r=/\.js$/;
function B(C,D){return s.call(C,D)
}function v(F,D){var N,J,H,K,O,G,Q,R,M,L,I,P=D&&D.split("/"),E=A.map,C=(E&&E["*"])||{};
if(F&&F.charAt(0)==="."){if(D){F=F.split("/");
O=F.length-1;
if(A.nodeIdCompat&&r.test(F[O])){F[O]=F[O].replace(r,"")
}F=P.slice(0,P.length-1).concat(F);
for(M=0;
M<F.length;
M+=1){I=F[M];
if(I==="."){F.splice(M,1);
M-=1
}else{if(I===".."){if(M===1&&(F[2]===".."||F[0]==="..")){break
}else{if(M>0){F.splice(M-1,2);
M-=2
}}}}}F=F.join("/")
}else{if(F.indexOf("./")===0){F=F.substring(2)
}}}if((P||C)&&E){N=F.split("/");
for(M=N.length;
M>0;
M-=1){J=N.slice(0,M).join("/");
if(P){for(L=P.length;
L>0;
L-=1){H=E[P.slice(0,L).join("/")];
if(H){H=H[J];
if(H){K=H;
G=M;
break
}}}}if(K){break
}if(!Q&&C&&C[J]){Q=C[J];
R=M
}}if(!K&&Q){K=Q;
G=R
}if(K){N.splice(0,G,K);
F=N.join("/")
}}return F
}function z(C,D){return function(){var E=q.call(arguments,0);
if(typeof E[0]!=="string"&&E.length===1){E.push(null)
}return h.apply(m,E.concat([C,D]))
}
}function w(C){return function(D){return v(D,C)
}
}function n(C){return function(D){l[C]=D
}
}function o(D){if(B(k,D)){var C=k[D];
delete k[D];
x[D]=true;
p.apply(m,C)
}if(!B(l,D)&&!B(x,D)){throw new Error("No "+D)
}return l[D]
}function y(D){var E,C=D?D.indexOf("!"):-1;
if(C>-1){E=D.substring(0,C);
D=D.substring(C+1,D.length)
}return[E,D]
}t=function(D,C){var E,G=y(D),F=G[0];
D=G[1];
if(F){F=v(F,C);
E=o(F)
}if(F){if(E&&E.normalize){D=E.normalize(D,w(C))
}else{D=v(D,C)
}}else{D=v(D,C);
G=y(D);
F=G[0];
D=G[1];
if(F){E=o(F)
}}return{f:F?F+"!"+D:D,n:D,pr:F,p:E}
};
function j(C){return function(){return(A&&A.config&&A.config[C])||{}
}
}u={require:function(C){return z(C)
},exports:function(C){var D=l[C];
if(typeof D!=="undefined"){return D
}else{return(l[C]={})
}},module:function(C){return{id:C,uri:"",exports:l[C],config:j(C)}
}};
p=function(D,N,M,L){var G,K,H,C,F,I=[],E=typeof M,J;
L=L||D;
if(E==="undefined"||E==="function"){N=!N.length&&M.length?["require","exports","module"]:N;
for(F=0;
F<N.length;
F+=1){C=t(N[F],L);
K=C.f;
if(K==="require"){I[F]=u.require(D)
}else{if(K==="exports"){I[F]=u.exports(D);
J=true
}else{if(K==="module"){G=I[F]=u.module(D)
}else{if(B(l,K)||B(k,K)||B(x,K)){I[F]=o(K)
}else{if(C.p){C.p.load(C.n,z(L,true),n(K),{});
I[F]=l[K]
}else{throw new Error(D+" missing "+K)
}}}}}}H=M?M.apply(l[D],I):undefined;
if(D){if(G&&G.exports!==m&&G.exports!==l[D]){l[D]=G.exports
}else{if(H!==m||!J){l[D]=H
}}}}else{if(D){l[D]=M
}}};
f=e=h=function(F,G,C,D,E){if(typeof F==="string"){if(u[F]){return u[F](G)
}return o(t(F,G).f)
}else{if(!F.splice){A=F;
if(A.deps){h(A.deps,A.callback)
}if(!G){return
}if(G.splice){F=G;
G=C;
C=null
}else{F=m
}}}G=G||function(){};
if(typeof C==="function"){C=D;
D=E
}if(D){p(m,F,G,C)
}else{setTimeout(function(){p(m,F,G,C)
},4)
}return h
};
h.config=function(C){return h(C)
};
f._defined=l;
g=function(C,D,E){if(typeof C!=="string"){throw new Error("See almond README: incorrect module build, no module name")
}if(!D.splice){E=D;
D=[]
}if(!B(l,C)&&!B(k,C)){k[C]=[C,D,E]
}};
g.amd={jQuery:true}
}());
d.requirejs=f;
d.require=e;
d.define=g
}}());
d.define("almond",function(){});
d.define("jquery",[],function(){var e=c||$;
if(e==null&&console&&console.error){console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.")
}return e
});
d.define("select2/utils",["jquery"],function(h){var g={};
g.Extend=function(n,k){var l={}.hasOwnProperty;
function j(){this.constructor=n
}for(var m in k){if(l.call(k,m)){n[m]=k[m]
}}j.prototype=k.prototype;
n.prototype=new j();
n.__super__=k.prototype;
return n
};
function f(o){var n=o.prototype;
var l=[];
for(var k in n){var j=n[k];
if(typeof j!=="function"){continue
}if(k==="constructor"){continue
}l.push(k)
}return l
}g.Decorate=function(r,q){var p=f(q);
var o=f(r);
function u(){var v=Array.prototype.unshift;
var w=q.prototype.constructor.length;
var m=r.prototype.constructor;
if(w>0){v.call(arguments,r.prototype.constructor);
m=q.prototype.constructor
}m.apply(this,arguments)
}q.displayName=r.displayName;
function j(){this.constructor=u
}u.prototype=new j();
for(var n=0;
n<o.length;
n++){var k=o[n];
u.prototype[k]=r.prototype[k]
}var t=function(m){var v=function(){};
if(m in u.prototype){v=u.prototype[m]
}var w=q.prototype[m];
return function(){var x=Array.prototype.unshift;
x.call(arguments,v);
return w.apply(this,arguments)
}
};
for(var s=0;
s<p.length;
s++){var l=p[s];
u.prototype[l]=t(l)
}return u
};
var e=function(){this.listeners={}
};
e.prototype.on=function(j,k){this.listeners=this.listeners||{};
if(j in this.listeners){this.listeners[j].push(k)
}else{this.listeners[j]=[k]
}};
e.prototype.trigger=function(j){var l=Array.prototype.slice;
var k=l.call(arguments,1);
this.listeners=this.listeners||{};
if(k==null){k=[]
}if(k.length===0){k.push({})
}k[0]._type=j;
if(j in this.listeners){this.invoke(this.listeners[j],l.call(arguments,1))
}if("*" in this.listeners){this.invoke(this.listeners["*"],arguments)
}};
e.prototype.invoke=function(l,m){for(var k=0,j=l.length;
k<j;
k++){l[k].apply(this,m)
}};
g.Observable=e;
g.generateChars=function(m){var l="";
for(var k=0;
k<m;
k++){var j=Math.floor(Math.random()*36);
l+=j.toString(36)
}return l
};
g.bind=function(k,j){return function(){k.apply(j,arguments)
}
};
g._convertData=function(p){for(var o in p){var n=o.split("-");
var j=p;
if(n.length===1){continue
}for(var l=0;
l<n.length;
l++){var m=n[l];
m=m.substring(0,1).toLowerCase()+m.substring(1);
if(!(m in j)){j[m]={}
}if(l==n.length-1){j[m]=p[o]
}j=j[m]
}delete p[o]
}return p
};
g.hasScroll=function(l,n){var m=h(n);
var k=n.style.overflowX;
var j=n.style.overflowY;
if(k===j&&(j==="hidden"||j==="visible")){return false
}if(k==="scroll"||j==="scroll"){return true
}return(m.innerHeight()<n.scrollHeight||m.innerWidth()<n.scrollWidth)
};
g.escapeMarkup=function(j){var k={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};
if(typeof j!=="string"){return j
}return String(j).replace(/[&<>"'\/\\]/g,function(l){return k[l]
})
};
g.appendMany=function(j,l){if(h.fn.jquery.substr(0,3)==="1.7"){var k=h();
h.map(l,function(m){k=k.add(m)
});
l=k
}j.append(l)
};
return g
});
d.define("select2/results",["jquery","./utils"],function(g,f){function e(h,j,k){this.$element=h;
this.data=k;
this.options=j;
e.__super__.constructor.call(this)
}f.Extend(e,f.Observable);
e.prototype.render=function(){var h=g('<ul class="select2-results__options" role="tree"></ul>');
if(this.options.get("multiple")){h.attr("aria-multiselectable","true")
}this.$results=h;
return h
};
e.prototype.clear=function(){this.$results.empty()
};
e.prototype.displayMessage=function(l){var h=this.options.get("escapeMarkup");
this.clear();
this.hideLoading();
var j=g('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>');
var k=this.options.get("translations").get(l.message);
j.append(h(k(l.args)));
j[0].className+=" select2-results__message";
this.$results.append(j)
};
e.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()
};
e.prototype.append=function(k){this.hideLoading();
var h=[];
if(k.results==null||k.results.length===0){if(this.$results.children().length===0){this.trigger("results:message",{message:"noResults"})
}return
}k.results=this.sort(k.results);
for(var m=0;
m<k.results.length;
m++){var j=k.results[m];
var l=this.option(j);
h.push(l)
}this.$results.append(h)
};
e.prototype.position=function(h,j){var k=j.find(".select2-results");
k.append(h)
};
e.prototype.sort=function(h){var j=this.options.get("sorter");
return j(h)
};
e.prototype.highlightFirstItem=function(){var h=this.$results.find(".select2-results__option[aria-selected]");
var j=h.filter("[aria-selected=true]");
if(j.length>0){j.first().trigger("mouseenter")
}else{h.first().trigger("mouseenter")
}this.ensureHighlightVisible()
};
e.prototype.setClasses=function(){var h=this;
this.data.current(function(l){var k=g.map(l,function(m){return m.id.toString()
});
var j=h.$results.find(".select2-results__option[aria-selected]");
j.each(function(){var n=g(this);
var m=g.data(this,"data");
var o=""+m.id;
if((m.element!=null&&m.element.selected)||(m.element==null&&g.inArray(o,k)>-1)){n.attr("aria-selected","true")
}else{n.attr("aria-selected","false")
}})
})
};
e.prototype.showLoading=function(k){this.hideLoading();
var j=this.options.get("translations").get("searching");
var l={disabled:true,loading:true,text:j(k)};
var h=this.option(l);
h.className+=" loading-results";
this.$results.prepend(h)
};
e.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()
};
e.prototype.option=function(m){var n=document.createElement("li");
n.className="select2-results__option";
var u={role:"treeitem","aria-selected":"false"};
if(m.disabled){delete u["aria-selected"];
u["aria-disabled"]="true"
}if(m.id==null){delete u["aria-selected"]
}if(m._resultId!=null){n.id=m._resultId
}if(m.title){n.title=m.title
}if(m.children){u.role="group";
u["aria-label"]=m.text;
delete u["aria-selected"]
}for(var o in u){var l=u[o];
n.setAttribute(o,l)
}if(m.children){var h=g(n);
var s=document.createElement("strong");
s.className="select2-results__group";
var r=g(s);
this.template(m,s);
var t=[];
for(var q=0;
q<m.children.length;
q++){var k=m.children[q];
var j=this.option(k);
t.push(j)
}var p=g("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});
p.append(t);
h.append(s);
h.append(p)
}else{this.template(m,n)
}g.data(n,"data",m);
return n
};
e.prototype.bind=function(h,k){var j=this;
var l=h.id+"-results";
this.$results.attr("id",l);
h.on("results:all",function(m){j.clear();
j.append(m.data);
if(h.isOpen()){j.setClasses();
j.highlightFirstItem()
}});
h.on("results:append",function(m){j.append(m.data);
if(h.isOpen()){j.setClasses()
}});
h.on("query",function(m){j.hideMessages();
j.showLoading(m)
});
h.on("select",function(){if(!h.isOpen()){return
}j.setClasses();
j.highlightFirstItem()
});
h.on("unselect",function(){if(!h.isOpen()){return
}j.setClasses();
j.highlightFirstItem()
});
h.on("open",function(){j.$results.attr("aria-expanded","true");
j.$results.attr("aria-hidden","false");
j.setClasses();
j.ensureHighlightVisible()
});
h.on("close",function(){j.$results.attr("aria-expanded","false");
j.$results.attr("aria-hidden","true");
j.$results.removeAttr("aria-activedescendant")
});
h.on("results:toggle",function(){var m=j.getHighlightedResults();
if(m.length===0){return
}m.trigger("mouseup")
});
h.on("results:select",function(){var m=j.getHighlightedResults();
if(m.length===0){return
}var n=m.data("data");
if(m.attr("aria-selected")=="true"){j.trigger("close",{})
}else{j.trigger("select",{data:n})
}});
h.on("results:previous",function(){var o=j.getHighlightedResults();
var n=j.$results.find("[aria-selected]");
var q=n.index(o);
if(q===0){return
}var m=q-1;
if(o.length===0){m=0
}var p=n.eq(m);
p.trigger("mouseenter");
var t=j.$results.offset().top;
var s=p.offset().top;
var r=j.$results.scrollTop()+(s-t);
if(m===0){j.$results.scrollTop(0)
}else{if(s-t<0){j.$results.scrollTop(r)
}}});
h.on("results:next",function(){var o=j.getHighlightedResults();
var n=j.$results.find("[aria-selected]");
var q=n.index(o);
var m=q+1;
if(m>=n.length){return
}var p=n.eq(m);
p.trigger("mouseenter");
var t=j.$results.offset().top+j.$results.outerHeight(false);
var s=p.offset().top+p.outerHeight(false);
var r=j.$results.scrollTop()+s-t;
if(m===0){j.$results.scrollTop(0)
}else{if(s>t){j.$results.scrollTop(r)
}}});
h.on("results:focus",function(m){m.element.addClass("select2-results__option--highlighted")
});
h.on("results:message",function(m){j.displayMessage(m)
});
if(g.fn.mousewheel){this.$results.on("mousewheel",function(p){var o=j.$results.scrollTop();
var m=j.$results.get(0).scrollHeight-o+p.deltaY;
var q=p.deltaY>0&&o-p.deltaY<=0;
var n=p.deltaY<0&&m<=j.$results.height();
if(q){j.$results.scrollTop(0);
p.preventDefault();
p.stopPropagation()
}else{if(n){j.$results.scrollTop(j.$results.get(0).scrollHeight-j.$results.height());
p.preventDefault();
p.stopPropagation()
}}})
}this.$results.on("mouseup",".select2-results__option[aria-selected]",function(m){var o=g(this);
var n=o.data("data");
if(o.attr("aria-selected")==="true"){if(j.options.get("multiple")){j.trigger("unselect",{originalEvent:m,data:n})
}else{j.trigger("close",{})
}return
}j.trigger("select",{originalEvent:m,data:n})
});
this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(m){var n=g(this).data("data");
j.getHighlightedResults().removeClass("select2-results__option--highlighted");
j.trigger("results:focus",{data:n,element:g(this)})
})
};
e.prototype.getHighlightedResults=function(){var h=this.$results.find(".select2-results__option--highlighted");
return h
};
e.prototype.destroy=function(){this.$results.remove()
};
e.prototype.ensureHighlightVisible=function(){var j=this.getHighlightedResults();
if(j.length===0){return
}var h=this.$results.find("[aria-selected]");
var k=h.index(j);
var n=this.$results.offset().top;
var m=j.offset().top;
var l=this.$results.scrollTop()+(m-n);
var o=m-n;
l-=j.outerHeight(false)*2;
if(k<=2){this.$results.scrollTop(0)
}else{if(o>this.$results.outerHeight()||o<0){this.$results.scrollTop(l)
}}};
e.prototype.template=function(j,k){var l=this.options.get("templateResult");
var h=this.options.get("escapeMarkup");
var m=l(j,k);
if(m==null){k.style.display="none"
}else{if(typeof m==="string"){k.innerHTML=h(m)
}else{g(k).append(m)
}}};
return e
});
d.define("select2/keys",[],function(){var e={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};
return e
});
d.define("select2/selection/base",["jquery","../utils","../keys"],function(h,g,e){function f(j,k){this.$element=j;
this.options=k;
f.__super__.constructor.call(this)
}g.Extend(f,g.Observable);
f.prototype.render=function(){var j=h('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
this._tabindex=0;
if(this.$element.data("old-tabindex")!=null){this._tabindex=this.$element.data("old-tabindex")
}else{if(this.$element.attr("tabindex")!=null){this._tabindex=this.$element.attr("tabindex")
}}j.attr("title",this.$element.attr("title"));
j.attr("tabindex",this._tabindex);
this.$selection=j;
return j
};
f.prototype.bind=function(j,m){var l=this;
var n=j.id+"-container";
var k=j.id+"-results";
this.container=j;
this.$selection.on("focus",function(o){l.trigger("focus",o)
});
this.$selection.on("blur",function(o){l._handleBlur(o)
});
this.$selection.on("keydown",function(o){l.trigger("keypress",o);
if(o.which===e.SPACE){o.preventDefault()
}});
j.on("results:focus",function(o){l.$selection.attr("aria-activedescendant",o.data._resultId)
});
j.on("selection:update",function(o){l.update(o.data)
});
j.on("open",function(){l.$selection.attr("aria-expanded","true");
l.$selection.attr("aria-owns",k);
l._attachCloseHandler(j)
});
j.on("close",function(){l.$selection.attr("aria-expanded","false");
l.$selection.removeAttr("aria-activedescendant");
l.$selection.removeAttr("aria-owns");
l.$selection.focus();
l._detachCloseHandler(j)
});
j.on("enable",function(){l.$selection.attr("tabindex",l._tabindex)
});
j.on("disable",function(){l.$selection.attr("tabindex","-1")
})
};
f.prototype._handleBlur=function(j){var k=this;
window.setTimeout(function(){if((document.activeElement==k.$selection[0])||(h.contains(k.$selection[0],document.activeElement))){return
}k.trigger("blur",j)
},1)
};
f.prototype._attachCloseHandler=function(j){var k=this;
h(document.body).on("mousedown.select2."+j.id,function(o){var l=h(o.target);
var m=l.closest(".select2");
var n=h(".select2.select2-container--open");
n.each(function(){var q=h(this);
if(this==m[0]){return
}var p=q.data("element");
p.select2("close")
})
})
};
f.prototype._detachCloseHandler=function(j){h(document.body).off("mousedown.select2."+j.id)
};
f.prototype.position=function(j,l){var k=l.find(".selection");
k.append(j)
};
f.prototype.destroy=function(){this._detachCloseHandler(this.container)
};
f.prototype.update=function(j){throw new Error("The `update` method must be defined in child classes.")
};
return f
});
d.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(h,f,g,e){function j(){j.__super__.constructor.apply(this,arguments)
}g.Extend(j,f);
j.prototype.render=function(){var k=j.__super__.render.call(this);
k.addClass("select2-selection--single");
k.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>');
return k
};
j.prototype.bind=function(k,m){var l=this;
j.__super__.bind.apply(this,arguments);
var n=k.id+"-container";
this.$selection.find(".select2-selection__rendered").attr("id",n);
this.$selection.attr("aria-labelledby",n);
this.$selection.on("mousedown",function(o){if(o.which!==1){return
}l.trigger("toggle",{originalEvent:o})
});
this.$selection.on("focus",function(o){});
this.$selection.on("blur",function(o){});
k.on("focus",function(o){if(!k.isOpen()){l.$selection.focus()
}});
k.on("selection:update",function(o){l.update(o.data)
})
};
j.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()
};
j.prototype.display=function(n,l){var m=this.options.get("templateSelection");
var k=this.options.get("escapeMarkup");
return k(m(n,l))
};
j.prototype.selectionContainer=function(){return h("<span></span>")
};
j.prototype.update=function(m){if(m.length===0){this.clear();
return
}var k=m[0];
var n=this.$selection.find(".select2-selection__rendered");
var l=this.display(k,n);
n.empty().append(l);
n.prop("title",k.title||k.text)
};
return j
});
d.define("select2/selection/multiple",["jquery","./base","../utils"],function(h,e,g){function f(j,k){f.__super__.constructor.apply(this,arguments)
}g.Extend(f,e);
f.prototype.render=function(){var j=f.__super__.render.call(this);
j.addClass("select2-selection--multiple");
j.html('<ul class="select2-selection__rendered"></ul>');
return j
};
f.prototype.bind=function(j,l){var k=this;
f.__super__.bind.apply(this,arguments);
this.$selection.on("click",function(m){k.trigger("toggle",{originalEvent:m})
});
this.$selection.on("click",".select2-selection__choice__remove",function(n){if(k.options.get("disabled")){return
}var o=h(this);
var m=o.parent();
var p=m.data("data");
k.trigger("unselect",{originalEvent:n,data:p})
})
};
f.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()
};
f.prototype.display=function(m,k){var l=this.options.get("templateSelection");
var j=this.options.get("escapeMarkup");
return j(l(m,k))
};
f.prototype.selectionContainer=function(){var j=h('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
return j
};
f.prototype.update=function(n){this.clear();
if(n.length===0){return
}var k=[];
for(var p=0;
p<n.length;
p++){var l=n[p];
var j=this.selectionContainer();
var m=this.display(l,j);
j.append(m);
j.prop("title",l.title||l.text);
j.data("data",l);
k.push(j)
}var o=this.$selection.find(".select2-selection__rendered");
g.appendMany(o,k)
};
return f
});
d.define("select2/selection/placeholder",["../utils"],function(f){function e(j,g,h){this.placeholder=this.normalizePlaceholder(h.get("placeholder"));
j.call(this,g,h)
}e.prototype.normalizePlaceholder=function(g,h){if(typeof h==="string"){h={id:"",text:h}
}return h
};
e.prototype.createPlaceholder=function(h,j){var g=this.selectionContainer();
g.html(this.display(j));
g.addClass("select2-selection__placeholder").removeClass("select2-selection__choice");
return g
};
e.prototype.update=function(l,k){var h=(k.length==1&&k[0].id!=this.placeholder.id);
var j=k.length>1;
if(j||h){return l.call(this,k)
}this.clear();
var g=this.createPlaceholder(this.placeholder);
this.$selection.find(".select2-selection__rendered").append(g)
};
return e
});
d.define("select2/selection/allowClear",["jquery","../keys"],function(f,e){function g(){}g.prototype.bind=function(k,h,l){var j=this;
k.call(this,h,l);
if(this.placeholder==null){if(this.options.get("debug")&&window.console&&console.error){console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.")
}}this.$selection.on("mousedown",".select2-selection__clear",function(m){j._handleClear(m)
});
h.on("keypress",function(m){j._handleKeyboardClear(m,h)
})
};
g.prototype._handleClear=function(j,h){if(this.options.get("disabled")){return
}var m=this.$selection.find(".select2-selection__clear");
if(m.length===0){return
}h.stopPropagation();
var l=m.data("data");
for(var n=0;
n<l.length;
n++){var k={data:l[n]};
this.trigger("unselect",k);
if(k.prevented){return
}}this.$element.val(this.placeholder.id).trigger("change");
this.trigger("toggle",{})
};
g.prototype._handleKeyboardClear=function(k,j,h){if(h.isOpen()){return
}if(j.which==e.DELETE||j.which==e.BACKSPACE){this._handleClear(j)
}};
g.prototype.update=function(k,j){k.call(this,j);
if(this.$selection.find(".select2-selection__placeholder").length>0||j.length===0){return
}var h=f('<span class="select2-selection__clear">&times;</span>');
h.data("data",j);
this.$selection.find(".select2-selection__rendered").prepend(h)
};
return g
});
d.define("select2/selection/search",["jquery","../utils","../keys"],function(h,g,e){function f(l,j,k){l.call(this,j,k)
}f.prototype.render=function(k){var j=h('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
this.$searchContainer=j;
this.$search=j.find("input");
var l=k.call(this);
this._transferTabIndex();
return l
};
f.prototype.bind=function(n,k,o){var l=this;
n.call(this,k,o);
k.on("open",function(){l.$search.trigger("focus")
});
k.on("close",function(){l.$search.val("");
l.$search.removeAttr("aria-activedescendant");
l.$search.trigger("focus")
});
k.on("enable",function(){l.$search.prop("disabled",false);
l._transferTabIndex()
});
k.on("disable",function(){l.$search.prop("disabled",true)
});
k.on("focus",function(p){l.$search.trigger("focus")
});
k.on("results:focus",function(p){l.$search.attr("aria-activedescendant",p.id)
});
this.$selection.on("focusin",".select2-search--inline",function(p){l.trigger("focus",p)
});
this.$selection.on("focusout",".select2-search--inline",function(p){l._handleBlur(p)
});
this.$selection.on("keydown",".select2-search--inline",function(p){p.stopPropagation();
l.trigger("keypress",p);
l._keyUpPrevented=p.isDefaultPrevented();
var r=p.which;
if(r===e.BACKSPACE&&l.$search.val()===""){var q=l.$searchContainer.prev(".select2-selection__choice");
if(q.length>0){var s=q.data("data");
l.searchRemoveChoice(s);
p.preventDefault()
}}});
var m=document.documentMode;
var j=m&&m<=11;
this.$selection.on("input.searchcheck",".select2-search--inline",function(p){if(j){l.$selection.off("input.search input.searchcheck");
return
}l.$selection.off("keyup.search")
});
this.$selection.on("keyup.search input.search",".select2-search--inline",function(p){if(j&&p.type==="input"){l.$selection.off("input.search input.searchcheck");
return
}var q=p.which;
if(q==e.SHIFT||q==e.CTRL||q==e.ALT){return
}if(q==e.TAB){return
}l.handleSearch(p)
})
};
f.prototype._transferTabIndex=function(j){this.$search.attr("tabindex",this.$selection.attr("tabindex"));
this.$selection.attr("tabindex","-1")
};
f.prototype.createPlaceholder=function(j,k){this.$search.attr("placeholder",k.text)
};
f.prototype.update=function(l,k){var j=this.$search[0]==document.activeElement;
this.$search.attr("placeholder","");
l.call(this,k);
this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
this.resizeSearch();
if(j){this.$search.focus()
}};
f.prototype.handleSearch=function(){this.resizeSearch();
if(!this._keyUpPrevented){var j=this.$search.val();
this.trigger("query",{term:j})
}this._keyUpPrevented=false
};
f.prototype.searchRemoveChoice=function(k,j){this.trigger("unselect",{data:j});
this.$search.val(j.text);
this.handleSearch()
};
f.prototype.resizeSearch=function(){this.$search.css("width","25px");
var j="";
if(this.$search.attr("placeholder")!==""){j=this.$selection.find(".select2-selection__rendered").innerWidth()
}else{var k=this.$search.val().length+1;
j=(k*0.75)+"em"
}this.$search.css("width",j)
};
return f
});
d.define("select2/selection/eventRelay",["jquery"],function(e){function f(){}f.prototype.bind=function(l,g,m){var h=this;
var j=["open","opening","close","closing","select","selecting","unselect","unselecting"];
var k=["opening","closing","selecting","unselecting"];
l.call(this,g,m);
g.on("*",function(o,p){if(e.inArray(o,j)===-1){return
}p=p||{};
var n=e.Event("select2:"+o,{params:p});
h.$element.trigger(n);
if(e.inArray(o,k)===-1){return
}p.prevented=n.isDefaultPrevented()
})
};
return f
});
d.define("select2/translation",["jquery","require"],function(g,f){function e(h){this.dict=h||{}
}e.prototype.all=function(){return this.dict
};
e.prototype.get=function(h){return this.dict[h]
};
e.prototype.extend=function(h){this.dict=g.extend({},h.all(),this.dict)
};
e._cache={};
e.loadPath=function(j){if(!(j in e._cache)){var h=f(j);
e._cache[j]=h
}return new e(e._cache[j])
};
return e
});
d.define("select2/diacritics",[],function(){var e={"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};
return e
});
d.define("select2/data/base",["../utils"],function(f){function e(g,h){e.__super__.constructor.call(this)
}f.Extend(e,f.Observable);
e.prototype.current=function(g){throw new Error("The `current` method must be defined in child classes.")
};
e.prototype.query=function(g,h){throw new Error("The `query` method must be defined in child classes.")
};
e.prototype.bind=function(g,h){};
e.prototype.destroy=function(){};
e.prototype.generateResultId=function(g,h){var j=g.id+"-result-";
j+=f.generateChars(4);
if(h.id!=null){j+="-"+h.id.toString()
}else{j+="-"+f.generateChars(4)
}return j
};
return e
});
d.define("select2/data/select",["./base","../utils","jquery"],function(e,h,g){function f(j,k){this.$element=j;
this.options=k;
f.__super__.constructor.call(this)
}h.Extend(f,e);
f.prototype.current=function(l){var k=[];
var j=this;
this.$element.find(":selected").each(function(){var n=g(this);
var m=j.item(n);
k.push(m)
});
l(k)
};
f.prototype.select=function(k){var j=this;
k.selected=true;
if(g(k.element).is("option")){k.element.selected=true;
this.$element.trigger("change");
return
}if(this.$element.prop("multiple")){this.current(function(m){var o=[];
k=[k];
k.push.apply(k,m);
for(var n=0;
n<k.length;
n++){var p=k[n].id;
if(g.inArray(p,o)===-1){o.push(p)
}}j.$element.val(o);
j.$element.trigger("change")
})
}else{var l=k.id;
this.$element.val(l);
this.$element.trigger("change")
}};
f.prototype.unselect=function(k){var j=this;
if(!this.$element.prop("multiple")){return
}k.selected=false;
if(g(k.element).is("option")){k.element.selected=false;
this.$element.trigger("change");
return
}this.current(function(l){var n=[];
for(var m=0;
m<l.length;
m++){var o=l[m].id;
if(o!==k.id&&g.inArray(o,n)===-1){n.push(o)
}}j.$element.val(n);
j.$element.trigger("change")
})
};
f.prototype.bind=function(j,l){var k=this;
this.container=j;
j.on("select",function(m){k.select(m.data)
});
j.on("unselect",function(m){k.unselect(m.data)
})
};
f.prototype.destroy=function(){this.$element.find("*").each(function(){g.removeData(this,"data")
})
};
f.prototype.query=function(m,n){var l=[];
var k=this;
var j=this.$element.children();
j.each(function(){var q=g(this);
if(!q.is("option")&&!q.is("optgroup")){return
}var o=k.item(q);
var p=k.matches(m,o);
if(p!==null){l.push(p)
}});
n({results:l})
};
f.prototype.addOptions=function(j){h.appendMany(this.$element,j)
};
f.prototype.option=function(k){var j;
if(k.children){j=document.createElement("optgroup");
j.label=k.text
}else{j=document.createElement("option");
if(j.textContent!==undefined){j.textContent=k.text
}else{j.innerText=k.text
}}if(k.id){j.value=k.id
}if(k.disabled){j.disabled=true
}if(k.selected){j.selected=true
}if(k.title){j.title=k.title
}var l=g(j);
var m=this._normalizeItem(k);
m.element=j;
g.data(j,"data",m);
return l
};
f.prototype.item=function(n){var m={};
m=g.data(n[0],"data");
if(m!=null){return m
}if(n.is("option")){m={id:n.val(),text:n.text(),disabled:n.prop("disabled"),selected:n.prop("selected"),title:n.prop("title")}
}else{if(n.is("optgroup")){m={text:n.prop("label"),children:[],title:n.prop("title")};
var j=n.children("option");
var k=[];
for(var p=0;
p<j.length;
p++){var l=g(j[p]);
var o=this.item(l);
k.push(o)
}m.children=k
}}m=this._normalizeItem(m);
m.element=n[0];
g.data(n[0],"data",m);
return m
};
f.prototype._normalizeItem=function(j){if(!g.isPlainObject(j)){j={id:j,text:j}
}j=g.extend({},{text:""},j);
var k={selected:false,disabled:false};
if(j.id!=null){j.id=j.id.toString()
}if(j.text!=null){j.text=j.text.toString()
}if(j._resultId==null&&j.id&&this.container!=null){j._resultId=this.generateResultId(this.container,j)
}return g.extend({},k,j)
};
f.prototype.matches=function(l,j){var k=this.options.get("matcher");
return k(l,j)
};
return f
});
d.define("select2/data/array",["./select","../utils","jquery"],function(e,g,f){function h(j,k){var l=k.get("data")||[];
h.__super__.constructor.call(this,j,k);
this.addOptions(this.convertToOptions(l))
}g.Extend(h,e);
h.prototype.select=function(j){var k=this.$element.find("option").filter(function(l,m){return m.value==j.id.toString()
});
if(k.length===0){k=this.option(j);
this.addOptions(k)
}h.__super__.select.call(this,j)
};
h.prototype.convertToOptions=function(l){var v=this;
var o=this.$element.find("option");
var k=o.map(function(){return v.item(f(this)).id
}).get();
var n=[];
function s(x){return function(){return f(this).val()==x.id
}
}for(var r=0;
r<l.length;
r++){var u=this._normalizeItem(l[r]);
if(f.inArray(u.id,k)>=0){var p=o.filter(s(u));
var q=this.item(p);
var w=f.extend(true,{},u,q);
var m=this.option(w);
p.replaceWith(m);
continue
}var j=this.option(u);
if(u.children){var t=this.convertToOptions(u.children);
g.appendMany(j,t)
}n.push(j)
}return n
};
return h
});
d.define("select2/data/ajax",["./array","../utils","jquery"],function(h,g,f){function e(j,k){this.ajaxOptions=this._applyDefaults(k.get("ajax"));
if(this.ajaxOptions.processResults!=null){this.processResults=this.ajaxOptions.processResults
}e.__super__.constructor.call(this,j,k)
}g.Extend(e,h);
e.prototype._applyDefaults=function(j){var k={data:function(l){return f.extend({},l,{q:l.term})
},transport:function(o,n,m){var l=f.ajax(o);
l.then(n);
l.fail(m);
return l
}};
return f.extend({},k,j,true)
};
e.prototype.processResults=function(j){return j
};
e.prototype.query=function(n,o){var m=[];
var j=this;
if(this._request!=null){if(f.isFunction(this._request.abort)){this._request.abort()
}this._request=null
}var k=f.extend({type:"GET"},this.ajaxOptions);
if(typeof k.url==="function"){k.url=k.url.call(this.$element,n)
}if(typeof k.data==="function"){k.data=k.data.call(this.$element,n)
}function l(){var p=k.transport(k,function(r){var q=j.processResults(r,n);
if(j.options.get("debug")&&window.console&&console.error){if(!q||!q.results||!f.isArray(q.results)){console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")
}}o(q)
},function(){if(p.status&&p.status==="0"){return
}j.trigger("results:message",{message:"errorLoading"})
});
j._request=p
}if(this.ajaxOptions.delay&&n.term!=null){if(this._queryTimeout){window.clearTimeout(this._queryTimeout)
}this._queryTimeout=window.setTimeout(l,this.ajaxOptions.delay)
}else{l()
}};
return e
});
d.define("select2/data/tags",["jquery"],function(f){function e(h,l,o){var p=o.get("tags");
var j=o.get("createTag");
if(j!==undefined){this.createTag=j
}var k=o.get("insertTag");
if(k!==undefined){this.insertTag=k
}h.call(this,l,o);
if(f.isArray(p)){for(var n=0;
n<p.length;
n++){var q=p[n];
var m=this._normalizeItem(q);
var g=this.option(m);
this.$element.append(g)
}}}e.prototype.query=function(h,j,l){var g=this;
this._removeOldTags();
if(j.term==null||j.page!=null){h.call(this,j,l);
return
}function k(q,n){var r=q.results;
for(var s=0;
s<r.length;
s++){var t=r[s];
var o=(t.children!=null&&!k({results:t.children},true));
var p=t.text===j.term;
if(p||o){if(n){return false
}q.data=r;
l(q);
return
}}if(n){return true
}var u=g.createTag(j);
if(u!=null){var m=g.option(u);
m.attr("data-select2-tag",true);
g.addOptions([m]);
g.insertTag(r,u)
}q.results=r;
l(q)
}h.call(this,j,k)
};
e.prototype.createTag=function(h,j){var g=f.trim(j.term);
if(g===""){return null
}return{id:g,text:g}
};
e.prototype.insertTag=function(h,j,g){j.unshift(g)
};
e.prototype._removeOldTags=function(j){var h=this._lastTag;
var g=this.$element.find("option[data-select2-tag]");
g.each(function(){if(this.selected){return
}f(this).remove()
})
};
return e
});
d.define("select2/data/tokenizer",["jquery"],function(f){function e(k,g,h){var j=h.get("tokenizer");
if(j!==undefined){this.tokenizer=j
}k.call(this,g,h)
}e.prototype.bind=function(h,g,j){h.call(this,g,j);
this.$search=g.dropdown.$search||g.selection.$search||j.find(".select2-search__field")
};
e.prototype.query=function(k,l,n){var j=this;
function h(p){var o=j._normalizeItem(p);
var r=j.$element.find("option").filter(function(){return f(this).val()===o.id
});
if(!r.length){var q=j.option(o);
q.attr("data-select2-tag",true);
j._removeOldTags();
j.addOptions([q])
}g(o)
}function g(o){j.trigger("select",{data:o})
}l.term=l.term||"";
var m=this.tokenizer(l,this.options,h);
if(m.term!==l.term){if(this.$search.length){this.$search.val(m.term);
this.$search.focus()
}l.term=m.term
}k.call(this,l,n)
};
e.prototype.tokenizer=function(o,j,s,r){var k=s.get("tokenSeparators")||[];
var h=j.term;
var m=0;
var n=this.createTag||function(t){return{id:t.term,text:t.term}
};
while(m<h.length){var q=h[m];
if(f.inArray(q,k)===-1){m++;
continue
}var g=h.substr(0,m);
var p=f.extend({},j,{term:g});
var l=n(p);
if(l==null){m++;
continue
}r(l);
h=h.substr(m+1)||"";
m=0
}return{term:h}
};
return e
});
d.define("select2/data/minimumInputLength",[],function(){function e(h,g,f){this.minimumInputLength=f.get("minimumInputLength");
h.call(this,g,f)
}e.prototype.query=function(f,g,h){g.term=g.term||"";
if(g.term.length<this.minimumInputLength){this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:g.term,params:g}});
return
}f.call(this,g,h)
};
return e
});
d.define("select2/data/maximumInputLength",[],function(){function e(h,g,f){this.maximumInputLength=f.get("maximumInputLength");
h.call(this,g,f)
}e.prototype.query=function(f,g,h){g.term=g.term||"";
if(this.maximumInputLength>0&&g.term.length>this.maximumInputLength){this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:g.term,params:g}});
return
}f.call(this,g,h)
};
return e
});
d.define("select2/data/maximumSelectionLength",[],function(){function e(h,g,f){this.maximumSelectionLength=f.get("maximumSelectionLength");
h.call(this,g,f)
}e.prototype.query=function(g,h,j){var f=this;
this.current(function(k){var l=k!=null?k.length:0;
if(f.maximumSelectionLength>0&&l>=f.maximumSelectionLength){f.trigger("results:message",{message:"maximumSelected",args:{maximum:f.maximumSelectionLength}});
return
}g.call(f,h,j)
})
};
return e
});
d.define("select2/dropdown",["jquery","./utils"],function(g,f){function e(h,j){this.$element=h;
this.options=j;
e.__super__.constructor.call(this)
}f.Extend(e,f.Observable);
e.prototype.render=function(){var h=g('<span class="select2-dropdown"><span class="select2-results"></span></span>');
h.attr("dir",this.options.get("dir"));
this.$dropdown=h;
return h
};
e.prototype.bind=function(){};
e.prototype.position=function(h,j){};
e.prototype.destroy=function(){this.$dropdown.remove()
};
return e
});
d.define("select2/dropdown/search",["jquery","../utils"],function(g,f){function e(){}e.prototype.render=function(j){var k=j.call(this);
var h=g('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
this.$searchContainer=h;
this.$search=h.find("input");
k.prepend(h);
return k
};
e.prototype.bind=function(k,h,l){var j=this;
k.call(this,h,l);
this.$search.on("keydown",function(m){j.trigger("keypress",m);
j._keyUpPrevented=m.isDefaultPrevented()
});
this.$search.on("input",function(m){g(this).off("keyup")
});
this.$search.on("keyup input",function(m){j.handleSearch(m)
});
h.on("open",function(){j.$search.attr("tabindex",0);
j.$search.focus();
window.setTimeout(function(){j.$search.focus()
},0)
});
h.on("close",function(){j.$search.attr("tabindex",-1);
j.$search.val("")
});
h.on("focus",function(){if(h.isOpen()){j.$search.focus()
}});
h.on("results:all",function(n){if(n.query.term==null||n.query.term===""){var m=j.showSearch(n);
if(m){j.$searchContainer.removeClass("select2-search--hide")
}else{j.$searchContainer.addClass("select2-search--hide")
}}})
};
e.prototype.handleSearch=function(h){if(!this._keyUpPrevented){var j=this.$search.val();
this.trigger("query",{term:j})
}this._keyUpPrevented=false
};
e.prototype.showSearch=function(h,j){return true
};
return e
});
d.define("select2/dropdown/hidePlaceholder",[],function(){function e(h,f,g,j){this.placeholder=this.normalizePlaceholder(g.get("placeholder"));
h.call(this,f,g,j)
}e.prototype.append=function(g,f){f.results=this.removePlaceholder(f.results);
g.call(this,f)
};
e.prototype.normalizePlaceholder=function(f,g){if(typeof g==="string"){g={id:"",text:g}
}return g
};
e.prototype.removePlaceholder=function(f,j){var h=j.slice(0);
for(var k=j.length-1;
k>=0;
k--){var g=j[k];
if(this.placeholder.id===g.id){h.splice(k,1)
}}return h
};
return e
});
d.define("select2/dropdown/infiniteScroll",["jquery"],function(f){function e(j,g,h,k){this.lastParams={};
j.call(this,g,h,k);
this.$loadingMore=this.createLoadingMore();
this.loading=false
}e.prototype.append=function(h,g){this.$loadingMore.remove();
this.loading=false;
h.call(this,g);
if(this.showLoadingMore(g)){this.$results.append(this.$loadingMore)
}};
e.prototype.bind=function(j,g,k){var h=this;
j.call(this,g,k);
g.on("query",function(l){h.lastParams=l;
h.loading=true
});
g.on("query:append",function(l){h.lastParams=l;
h.loading=true
});
this.$results.on("scroll",function(){var n=f.contains(document.documentElement,h.$loadingMore[0]);
if(h.loading||!n){return
}var m=h.$results.offset().top+h.$results.outerHeight(false);
var l=h.$loadingMore.offset().top+h.$loadingMore.outerHeight(false);
if(m+50>=l){h.loadMore()
}})
};
e.prototype.loadMore=function(){this.loading=true;
var g=f.extend({},{page:1},this.lastParams);
g.page++;
this.trigger("query:append",g)
};
e.prototype.showLoadingMore=function(g,h){return h.pagination&&h.pagination.more
};
e.prototype.createLoadingMore=function(){var h=f('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>');
var g=this.options.get("translations").get("loadingMore");
h.html(g(this.lastParams));
return h
};
return e
});
d.define("select2/dropdown/attachBody",["jquery","../utils"],function(g,f){function e(k,h,j){this.$dropdownParent=j.get("dropdownParent")||g(document.body);
k.call(this,h,j)
}e.prototype.bind=function(l,h,m){var k=this;
var j=false;
l.call(this,h,m);
h.on("open",function(){k._showDropdown();
k._attachPositioningHandler(h);
if(!j){j=true;
h.on("results:all",function(){k._positionDropdown();
k._resizeDropdown()
});
h.on("results:append",function(){k._positionDropdown();
k._resizeDropdown()
})
}});
h.on("close",function(){k._hideDropdown();
k._detachPositioningHandler(h)
});
this.$dropdownContainer.on("mousedown",function(n){n.stopPropagation()
})
};
e.prototype.destroy=function(h){h.call(this);
this.$dropdownContainer.remove()
};
e.prototype.position=function(h,j,k){j.attr("class",k.attr("class"));
j.removeClass("select2");
j.addClass("select2-container--open");
j.css({position:"absolute",top:-999999});
this.$container=k
};
e.prototype.render=function(h){var k=g("<span></span>");
var j=h.call(this);
k.append(j);
this.$dropdownContainer=k;
return k
};
e.prototype._hideDropdown=function(h){this.$dropdownContainer.detach()
};
e.prototype._attachPositioningHandler=function(o,h){var j=this;
var l="scroll.select2."+h.id;
var n="resize.select2."+h.id;
var m="orientationchange.select2."+h.id;
var k=this.$container.parents().filter(f.hasScroll);
k.each(function(){g(this).data("select2-scroll-position",{x:g(this).scrollLeft(),y:g(this).scrollTop()})
});
k.on(l,function(q){var p=g(this).data("select2-scroll-position");
g(this).scrollTop(p.y)
});
g(window).on(l+" "+n+" "+m,function(p){j._positionDropdown();
j._resizeDropdown()
})
};
e.prototype._detachPositioningHandler=function(n,h){var k="scroll.select2."+h.id;
var m="resize.select2."+h.id;
var l="orientationchange.select2."+h.id;
var j=this.$container.parents().filter(f.hasScroll);
j.off(k);
g(window).off(k+" "+m+" "+l)
};
e.prototype._positionDropdown=function(){var l=g(window);
var u=this.$dropdown.hasClass("select2-dropdown--above");
var k=this.$dropdown.hasClass("select2-dropdown--below");
var r=null;
var m=this.$container.offset();
m.bottom=m.top+this.$container.outerHeight(false);
var j={height:this.$container.outerHeight(false)};
j.top=m.top;
j.bottom=m.top+j.height;
var t={height:this.$dropdown.outerHeight(false)};
var p={top:l.scrollTop(),bottom:l.scrollTop()+l.height()};
var o=p.top<(m.top-t.height);
var q=p.bottom>(m.bottom+t.height);
var n={left:m.left,top:j.bottom};
var s=this.$dropdownParent;
if(s.css("position")==="static"){s=s.offsetParent()
}var h=s.offset();
n.top-=h.top;
n.left-=h.left;
if(!u&&!k){r="below"
}if(!q&&o&&!u){r="above"
}else{if(!o&&q&&u){r="below"
}}if(r=="above"||(u&&r!=="below")){n.top=j.top-h.top-t.height
}if(r!=null){this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r);
this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)
}this.$dropdownContainer.css(n)
};
e.prototype._resizeDropdown=function(){var h={width:this.$container.outerWidth(false)+"px"};
if(this.options.get("dropdownAutoWidth")){h.minWidth=h.width;
h.position="relative";
h.width="auto"
}this.$dropdown.css(h)
};
e.prototype._showDropdown=function(h){this.$dropdownContainer.appendTo(this.$dropdownParent);
this._positionDropdown();
this._resizeDropdown()
};
return e
});
d.define("select2/dropdown/minimumResultsForSearch",[],function(){function f(j){var h=0;
for(var k=0;
k<j.length;
k++){var g=j[k];
if(g.children){h+=f(g.children)
}else{h++
}}return h
}function e(j,g,h,k){this.minimumResultsForSearch=h.get("minimumResultsForSearch");
if(this.minimumResultsForSearch<0){this.minimumResultsForSearch=Infinity
}j.call(this,g,h,k)
}e.prototype.showSearch=function(g,h){if(f(h.data.results)<this.minimumResultsForSearch){return false
}return g.call(this,h)
};
return e
});
d.define("select2/dropdown/selectOnClose",[],function(){function e(){}e.prototype.bind=function(h,f,j){var g=this;
h.call(this,f,j);
f.on("close",function(k){g._handleSelectOnClose(k)
})
};
e.prototype._handleSelectOnClose=function(g,k){if(k&&k.originalSelect2Event!=null){var h=k.originalSelect2Event;
if(h._type==="select"||h._type==="unselect"){return
}}var f=this.getHighlightedResults();
if(f.length<1){return
}var j=f.data("data");
if((j.element!=null&&j.element.selected)||(j.element==null&&j.selected)){return
}this.trigger("select",{data:j})
};
return e
});
d.define("select2/dropdown/closeOnSelect",[],function(){function e(){}e.prototype.bind=function(h,f,j){var g=this;
h.call(this,f,j);
f.on("select",function(k){g._selectTriggered(k)
});
f.on("unselect",function(k){g._selectTriggered(k)
})
};
e.prototype._selectTriggered=function(h,g){var f=g.originalEvent;
if(f&&f.ctrlKey){return
}this.trigger("close",{originalEvent:f,originalSelect2Event:g})
};
return e
});
d.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."
},inputTooLong:function(e){var g=e.input.length-e.maximum;
var f="Please delete "+g+" character";
if(g!=1){f+="s"
}return f
},inputTooShort:function(e){var g=e.minimum-e.input.length;
var f="Please enter "+g+" or more characters";
return f
},loadingMore:function(){return"Loading more results…"
},maximumSelected:function(e){var f="You can only select "+e.maximum+" item";
if(e.maximum!=1){f+="s"
}return f
},noResults:function(){return"No results found"
},searching:function(){return"Searching…"
}}
});
d.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(g,l,F,p,u,H,k,D,G,e,v,J,C,t,f,y,h,E,I,x,B,n,r,A,s,w,m,j,z){function q(){this.reset()
}q.prototype.apply=function(aa){aa=g.extend(true,{},this.defaults,aa);
if(aa.dataAdapter==null){if(aa.ajax!=null){aa.dataAdapter=f
}else{if(aa.data!=null){aa.dataAdapter=t
}else{aa.dataAdapter=C
}}if(aa.minimumInputLength>0){aa.dataAdapter=e.Decorate(aa.dataAdapter,E)
}if(aa.maximumInputLength>0){aa.dataAdapter=e.Decorate(aa.dataAdapter,I)
}if(aa.maximumSelectionLength>0){aa.dataAdapter=e.Decorate(aa.dataAdapter,x)
}if(aa.tags){aa.dataAdapter=e.Decorate(aa.dataAdapter,y)
}if(aa.tokenSeparators!=null||aa.tokenizer!=null){aa.dataAdapter=e.Decorate(aa.dataAdapter,h)
}if(aa.query!=null){var S=l(aa.amdBase+"compat/query");
aa.dataAdapter=e.Decorate(aa.dataAdapter,S)
}if(aa.initSelection!=null){var Z=l(aa.amdBase+"compat/initSelection");
aa.dataAdapter=e.Decorate(aa.dataAdapter,Z)
}}if(aa.resultsAdapter==null){aa.resultsAdapter=F;
if(aa.ajax!=null){aa.resultsAdapter=e.Decorate(aa.resultsAdapter,A)
}if(aa.placeholder!=null){aa.resultsAdapter=e.Decorate(aa.resultsAdapter,r)
}if(aa.selectOnClose){aa.resultsAdapter=e.Decorate(aa.resultsAdapter,m)
}}if(aa.dropdownAdapter==null){if(aa.multiple){aa.dropdownAdapter=B
}else{var M=e.Decorate(B,n);
aa.dropdownAdapter=M
}if(aa.minimumResultsForSearch!==0){aa.dropdownAdapter=e.Decorate(aa.dropdownAdapter,w)
}if(aa.closeOnSelect){aa.dropdownAdapter=e.Decorate(aa.dropdownAdapter,j)
}if(aa.dropdownCssClass!=null||aa.dropdownCss!=null||aa.adaptDropdownCssClass!=null){var L=l(aa.amdBase+"compat/dropdownCss");
aa.dropdownAdapter=e.Decorate(aa.dropdownAdapter,L)
}aa.dropdownAdapter=e.Decorate(aa.dropdownAdapter,s)
}if(aa.selectionAdapter==null){if(aa.multiple){aa.selectionAdapter=u
}else{aa.selectionAdapter=p
}if(aa.placeholder!=null){aa.selectionAdapter=e.Decorate(aa.selectionAdapter,H)
}if(aa.allowClear){aa.selectionAdapter=e.Decorate(aa.selectionAdapter,k)
}if(aa.multiple){aa.selectionAdapter=e.Decorate(aa.selectionAdapter,D)
}if(aa.containerCssClass!=null||aa.containerCss!=null||aa.adaptContainerCssClass!=null){var U=l(aa.amdBase+"compat/containerCss");
aa.selectionAdapter=e.Decorate(aa.selectionAdapter,U)
}aa.selectionAdapter=e.Decorate(aa.selectionAdapter,G)
}if(typeof aa.language==="string"){if(aa.language.indexOf("-")>0){var P=aa.language.split("-");
var R=P[0];
aa.language=[aa.language,R]
}else{aa.language=[aa.language]
}}if(g.isArray(aa.language)){var O=new v();
aa.language.push("en");
var X=aa.language;
for(var N=0;
N<X.length;
N++){var K=X[N];
var Q={};
try{Q=v.loadPath(K)
}catch(T){try{K=this.defaults.amdLanguageBase+K;
Q=v.loadPath(K)
}catch(W){if(aa.debug&&window.console&&console.warn){console.warn('Select2: The language file for "'+K+'" could not be automatically loaded. A fallback will be used instead.')
}continue
}}O.extend(Q)
}aa.translations=O
}else{var V=v.loadPath(this.defaults.amdLanguageBase+"en");
var Y=new v(aa.language);
Y.extend(V);
aa.translations=Y
}return aa
};
q.prototype.reset=function(){function L(N){function M(O){return J[O]||O
}return N.replace(/[^\u0000-\u007E]/g,M)
}function K(R,Q){if(g.trim(R.term)===""){return Q
}if(Q.children&&Q.children.length>0){var M=g.extend(true,{},Q);
for(var T=Q.children.length-1;
T>=0;
T--){var S=Q.children[T];
var P=K(R,S);
if(P==null){M.children.splice(T,1)
}}if(M.children.length>0){return M
}return K(R,M)
}var O=L(Q.text).toUpperCase();
var N=L(R.term).toUpperCase();
if(O.indexOf(N)>-1){return Q
}return null
}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:true,debug:false,dropdownAutoWidth:false,escapeMarkup:e.escapeMarkup,language:z,matcher:K,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:false,sorter:function(M){return M
},templateResult:function(M){return M.text
},templateSelection:function(M){return M.text
},theme:"default",width:"resolve"}
};
q.prototype.set=function(L,N){var K=g.camelCase(L);
var M={};
M[K]=N;
var O=e._convertData(M);
g.extend(this.defaults,O)
};
var o=new q();
return o
});
d.define("select2/options",["require","jquery","./defaults","./utils"],function(f,h,j,g){function e(m,k){this.options=m;
if(k!=null){this.fromElement(k)
}this.options=j.apply(this.options);
if(k&&k.is("input")){var l=f(this.get("amdBase")+"compat/inputData");
this.options.dataAdapter=g.Decorate(this.options.dataAdapter,l)
}}e.prototype.fromElement=function(k){var m=["select2"];
if(this.options.multiple==null){this.options.multiple=k.prop("multiple")
}if(this.options.disabled==null){this.options.disabled=k.prop("disabled")
}if(this.options.language==null){if(k.prop("lang")){this.options.language=k.prop("lang").toLowerCase()
}else{if(k.closest("[lang]").prop("lang")){this.options.language=k.closest("[lang]").prop("lang")
}}}if(this.options.dir==null){if(k.prop("dir")){this.options.dir=k.prop("dir")
}else{if(k.closest("[dir]").prop("dir")){this.options.dir=k.closest("[dir]").prop("dir")
}else{this.options.dir="ltr"
}}}k.prop("disabled",this.options.disabled);
k.prop("multiple",this.options.multiple);
if(k.data("select2Tags")){if(this.options.debug&&window.console&&console.warn){console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.')
}k.data("data",k.data("select2Tags"));
k.data("tags",true)
}if(k.data("ajaxUrl")){if(this.options.debug&&window.console&&console.warn){console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.")
}k.attr("ajax--url",k.data("ajaxUrl"));
k.data("ajax--url",k.data("ajaxUrl"))
}var o={};
if(h.fn.jquery&&h.fn.jquery.substr(0,2)=="1."&&k[0].dataset){o=h.extend(true,{},k[0].dataset,k.data())
}else{o=k.data()
}var n=h.extend(true,{},o);
n=g._convertData(n);
for(var l in n){if(h.inArray(l,m)>-1){continue
}if(h.isPlainObject(this.options[l])){h.extend(this.options[l],n[l])
}else{this.options[l]=n[l]
}}return this
};
e.prototype.get=function(k){return this.options[k]
};
e.prototype.set=function(k,l){this.options[k]=l
};
return e
});
d.define("select2/core",["jquery","./options","./utils","./keys"],function(j,g,h,e){var f=function(p,s){if(p.data("select2")!=null){p.data("select2").destroy()
}this.$element=p;
this.id=this._generateId(p);
s=s||{};
this.options=new g(s,p);
f.__super__.constructor.call(this);
var n=p.attr("tabindex")||0;
p.data("old-tabindex",n);
p.attr("tabindex","-1");
var m=this.options.get("dataAdapter");
this.dataAdapter=new m(p,this.options);
var r=this.render();
this._placeContainer(r);
var o=this.options.get("selectionAdapter");
this.selection=new o(p,this.options);
this.$selection=this.selection.render();
this.selection.position(this.$selection,r);
var k=this.options.get("dropdownAdapter");
this.dropdown=new k(p,this.options);
this.$dropdown=this.dropdown.render();
this.dropdown.position(this.$dropdown,r);
var l=this.options.get("resultsAdapter");
this.results=new l(p,this.options,this.dataAdapter);
this.$results=this.results.render();
this.results.position(this.$results,this.$dropdown);
var q=this;
this._bindAdapters();
this._registerDomEvents();
this._registerDataEvents();
this._registerSelectionEvents();
this._registerDropdownEvents();
this._registerResultsEvents();
this._registerEvents();
this.dataAdapter.current(function(t){q.trigger("selection:update",{data:t})
});
p.addClass("select2-hidden-accessible");
p.attr("aria-hidden","true");
this._syncAttributes();
p.data("select2",this)
};
h.Extend(f,h.Observable);
f.prototype._generateId=function(k){var l="";
if(k.attr("id")!=null){l=k.attr("id")
}else{if(k.attr("name")!=null){l=k.attr("name")+"-"+h.generateChars(2)
}else{l=h.generateChars(4)
}}l=l.replace(/(:|\.|\[|\]|,)/g,"");
l="select2-"+l;
return l
};
f.prototype._placeContainer=function(l){l.insertAfter(this.$element);
var k=this._resolveWidth(this.$element,this.options.get("width"));
if(k!=null){l.css("width",k)
}};
f.prototype._resolveWidth=function(v,k){var t=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
if(k=="resolve"){var o=this._resolveWidth(v,"style");
if(o!=null){return o
}return this._resolveWidth(v,"element")
}if(k=="element"){var s=v.outerWidth(false);
if(s<=0){return"auto"
}return s+"px"
}if(k=="style"){var m=v.attr("style");
if(typeof(m)!=="string"){return null
}var u=m.split(";");
for(var p=0,n=u.length;
p<n;
p=p+1){var r=u[p].replace(/\s/g,"");
var q=r.match(t);
if(q!==null&&q.length>=1){return q[1]
}}return null
}return k
};
f.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container);
this.selection.bind(this,this.$container);
this.dropdown.bind(this,this.$container);
this.results.bind(this,this.$container)
};
f.prototype._registerDomEvents=function(){var l=this;
this.$element.on("change.select2",function(){l.dataAdapter.current(function(m){l.trigger("selection:update",{data:m})
})
});
this.$element.on("focus.select2",function(m){l.trigger("focus",m)
});
this._syncA=h.bind(this._syncAttributes,this);
this._syncS=h.bind(this._syncSubtree,this);
if(this.$element[0].attachEvent){this.$element[0].attachEvent("onpropertychange",this._syncA)
}var k=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
if(k!=null){this._observer=new k(function(m){j.each(m,l._syncA);
j.each(m,l._syncS)
});
this._observer.observe(this.$element[0],{attributes:true,childList:true,subtree:false})
}else{if(this.$element[0].addEventListener){this.$element[0].addEventListener("DOMAttrModified",l._syncA,false);
this.$element[0].addEventListener("DOMNodeInserted",l._syncS,false);
this.$element[0].addEventListener("DOMNodeRemoved",l._syncS,false)
}}};
f.prototype._registerDataEvents=function(){var k=this;
this.dataAdapter.on("*",function(l,m){k.trigger(l,m)
})
};
f.prototype._registerSelectionEvents=function(){var k=this;
var l=["toggle","focus"];
this.selection.on("toggle",function(){k.toggleDropdown()
});
this.selection.on("focus",function(m){k.focus(m)
});
this.selection.on("*",function(m,n){if(j.inArray(m,l)!==-1){return
}k.trigger(m,n)
})
};
f.prototype._registerDropdownEvents=function(){var k=this;
this.dropdown.on("*",function(l,m){k.trigger(l,m)
})
};
f.prototype._registerResultsEvents=function(){var k=this;
this.results.on("*",function(l,m){k.trigger(l,m)
})
};
f.prototype._registerEvents=function(){var k=this;
this.on("open",function(){k.$container.addClass("select2-container--open")
});
this.on("close",function(){k.$container.removeClass("select2-container--open")
});
this.on("enable",function(){k.$container.removeClass("select2-container--disabled")
});
this.on("disable",function(){k.$container.addClass("select2-container--disabled")
});
this.on("blur",function(){k.$container.removeClass("select2-container--focus")
});
this.on("query",function(l){if(!k.isOpen()){k.trigger("open",{})
}this.dataAdapter.query(l,function(m){k.trigger("results:all",{data:m,query:l})
})
});
this.on("query:append",function(l){this.dataAdapter.query(l,function(m){k.trigger("results:append",{data:m,query:l})
})
});
this.on("keypress",function(l){var m=l.which;
if(k.isOpen()){if(m===e.ESC||m===e.TAB||(m===e.UP&&l.altKey)){k.close();
l.preventDefault()
}else{if(m===e.ENTER){k.trigger("results:select",{});
l.preventDefault()
}else{if((m===e.SPACE&&l.ctrlKey)){k.trigger("results:toggle",{});
l.preventDefault()
}else{if(m===e.UP){k.trigger("results:previous",{});
l.preventDefault()
}else{if(m===e.DOWN){k.trigger("results:next",{});
l.preventDefault()
}}}}}}else{if(m===e.ENTER||m===e.SPACE||(m===e.DOWN&&l.altKey)){k.open();
l.preventDefault()
}}})
};
f.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled"));
if(this.options.get("disabled")){if(this.isOpen()){this.close()
}this.trigger("disable",{})
}else{this.trigger("enable",{})
}};
f.prototype._syncSubtree=function(l,k){var p=false;
var m=this;
if(l&&l.target&&(l.target.nodeName!=="OPTION"&&l.target.nodeName!=="OPTGROUP")){return
}if(!k){p=true
}else{if(k.addedNodes&&k.addedNodes.length>0){for(var q=0;
q<k.addedNodes.length;
q++){var o=k.addedNodes[q];
if(o.selected){p=true
}}}else{if(k.removedNodes&&k.removedNodes.length>0){p=true
}}}if(p){this.dataAdapter.current(function(n){m.trigger("selection:update",{data:n})
})
}};
f.prototype.trigger=function(n,m){var o=f.__super__.trigger;
var p={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};
if(m===undefined){m={}
}if(n in p){var l=p[n];
var k={prevented:false,name:n,args:m};
o.call(this,l,k);
if(k.prevented){m.prevented=true;
return
}}o.call(this,n,m)
};
f.prototype.toggleDropdown=function(){if(this.options.get("disabled")){return
}if(this.isOpen()){this.close()
}else{this.open()
}};
f.prototype.open=function(){if(this.isOpen()){return
}this.trigger("query",{})
};
f.prototype.close=function(){if(!this.isOpen()){return
}this.trigger("close",{})
};
f.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")
};
f.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")
};
f.prototype.focus=function(k){if(this.hasFocus()){return
}this.$container.addClass("select2-container--focus");
this.trigger("focus",{})
};
f.prototype.enable=function(k){if(this.options.get("debug")&&window.console&&console.warn){console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.')
}if(k==null||k.length===0){k=[true]
}var l=!k[0];
this.$element.prop("disabled",l)
};
f.prototype.data=function(){if(this.options.get("debug")&&arguments.length>0&&window.console&&console.warn){console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.')
}var k=[];
this.dataAdapter.current(function(l){k=l
});
return k
};
f.prototype.val=function(l){if(this.options.get("debug")&&window.console&&console.warn){console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.')
}if(l==null||l.length===0){return this.$element.val()
}var k=l[0];
if(j.isArray(k)){k=j.map(k,function(m){return m.toString()
})
}this.$element.val(k).trigger("change")
};
f.prototype.destroy=function(){this.$container.remove();
if(this.$element[0].detachEvent){this.$element[0].detachEvent("onpropertychange",this._syncA)
}if(this._observer!=null){this._observer.disconnect();
this._observer=null
}else{if(this.$element[0].removeEventListener){this.$element[0].removeEventListener("DOMAttrModified",this._syncA,false);
this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,false);
this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,false)
}}this._syncA=null;
this._syncS=null;
this.$element.off(".select2");
this.$element.attr("tabindex",this.$element.data("old-tabindex"));
this.$element.removeClass("select2-hidden-accessible");
this.$element.attr("aria-hidden","false");
this.$element.removeData("select2");
this.dataAdapter.destroy();
this.selection.destroy();
this.dropdown.destroy();
this.results.destroy();
this.dataAdapter=null;
this.selection=null;
this.dropdown=null;
this.results=null
};
f.prototype.render=function(){var k=j('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
k.attr("dir",this.options.get("dir"));
this.$container=k;
this.$container.addClass("select2-container--"+this.options.get("theme"));
k.data("element",this.$element);
return k
};
return f
});
d.define("jquery-mousewheel",["jquery"],function(e){return e
});
d.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(h,g,e,j){if(h.fn.select2==null){var f=["open","close","destroy"];
h.fn.select2=function(m){m=m||{};
if(typeof m==="object"){this.each(function(){var o=h.extend(true,{},m);
var n=new e(h(this),o)
});
return this
}else{if(typeof m==="string"){var l;
var k=Array.prototype.slice.call(arguments,1);
this.each(function(){var n=h(this).data("select2");
if(n==null&&window.console&&console.error){console.error("The select2('"+m+"') method was called on an element that is not using Select2.")
}l=n[m].apply(n,k)
});
if(h.inArray(m,f)>-1){return this
}return l
}else{throw new Error("Invalid arguments for Select2: "+m)
}}}
}if(h.fn.select2.defaults==null){h.fn.select2.defaults=j
}return e
});
return{define:d.define,require:d.require}
}());
var a=b.require("jquery.select2");
c.fn.select2.amd=b;
return a
}));
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"undefined"!=typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(function(d){var c=window.Slick||{};
c=function(){function e(j,h){var b,g=this;
g.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(j),appendDots:d(j),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(k,f){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(f+1)+"</button>"
},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000},g.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},d.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.hidden="hidden",g.paused=!1,g.positionProp=null,g.respondTo=null,g.rowCount=1,g.shouldClick=!0,g.$slider=d(j),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.visibilityChange="visibilitychange",g.windowWidth=0,g.windowTimer=null,b=d(j).data("slick")||{},g.options=d.extend({},g.defaults,b,h),g.currentSlide=g.options.initialSlide,g.originalSettings=g.options,"undefined"!=typeof document.mozHidden?(g.hidden="mozHidden",g.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(g.hidden="webkitHidden",g.visibilityChange="webkitvisibilitychange"),g.autoPlay=d.proxy(g.autoPlay,g),g.autoPlayClear=d.proxy(g.autoPlayClear,g),g.changeSlide=d.proxy(g.changeSlide,g),g.clickHandler=d.proxy(g.clickHandler,g),g.selectHandler=d.proxy(g.selectHandler,g),g.setPosition=d.proxy(g.setPosition,g),g.swipeHandler=d.proxy(g.swipeHandler,g),g.dragHandler=d.proxy(g.dragHandler,g),g.keyHandler=d.proxy(g.keyHandler,g),g.autoPlayIterator=d.proxy(g.autoPlayIterator,g),g.instanceUid=a++,g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,g.registerBreakpoints(),g.init(!0),g.checkResponsive(!0)
}var a=0;
return e
}(),c.prototype.addSlide=c.prototype.slickAdd=function(a,h,g){var f=this;
if("boolean"==typeof h){g=h,h=null
}else{if(0>h||h>=f.slideCount){return !1
}}f.unload(),"number"==typeof h?0===h&&0===f.$slides.length?d(a).appendTo(f.$slideTrack):g?d(a).insertBefore(f.$slides.eq(h)):d(a).insertAfter(f.$slides.eq(h)):g===!0?d(a).prependTo(f.$slideTrack):d(a).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(e,j){d(j).attr("data-slick-index",e)
}),f.$slidesCache=f.$slides,f.reinit()
},c.prototype.animateHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.animate({height:e},f.options.speed)
}},c.prototype.animateSlide=function(a,h){var g={},f=this;
f.animateHeight(),f.options.rtl===!0&&f.options.vertical===!1&&(a=-a),f.transformsEnabled===!1?f.options.vertical===!1?f.$slideTrack.animate({left:a},f.options.speed,f.options.easing,h):f.$slideTrack.animate({top:a},f.options.speed,f.options.easing,h):f.cssTransitions===!1?(f.options.rtl===!0&&(f.currentLeft=-f.currentLeft),d({animStart:f.currentLeft}).animate({animStart:a},{duration:f.options.speed,easing:f.options.easing,step:function(b){b=Math.ceil(b),f.options.vertical===!1?(g[f.animType]="translate("+b+"px, 0px)",f.$slideTrack.css(g)):(g[f.animType]="translate(0px,"+b+"px)",f.$slideTrack.css(g))
},complete:function(){h&&h.call()
}})):(f.applyTransition(),a=Math.ceil(a),g[f.animType]=f.options.vertical===!1?"translate3d("+a+"px, 0px, 0px)":"translate3d(0px,"+a+"px, 0px)",f.$slideTrack.css(g),h&&setTimeout(function(){f.disableTransition(),h.call()
},f.options.speed))
},c.prototype.asNavFor=function(a){var f=this,e=f.options.asNavFor;
e&&null!==e&&(e=d(e).not(f.$slider)),null!==e&&"object"==typeof e&&e.each(function(){var b=d(this).slick("getSlick");
b.unslicked||b.slideHandler(a,!0)
})
},c.prototype.applyTransition=function(f){var e=this,g={};
g[e.transitionType]=e.options.fade===!1?e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:"opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.autoPlay=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer),b.slideCount>b.options.slidesToShow&&b.paused!==!0&&(b.autoPlayTimer=setInterval(b.autoPlayIterator,b.options.autoplaySpeed))
},c.prototype.autoPlayClear=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer)
},c.prototype.autoPlayIterator=function(){var b=this;
b.options.infinite===!1?1===b.direction?(b.currentSlide+1===b.slideCount-1&&(b.direction=0),b.slideHandler(b.currentSlide+b.options.slidesToScroll)):(0===b.currentSlide-1&&(b.direction=1),b.slideHandler(b.currentSlide-b.options.slidesToScroll)):b.slideHandler(b.currentSlide+b.options.slidesToScroll)
},c.prototype.buildArrows=function(){var a=this;
a.options.arrows===!0&&(a.$prevArrow=d(a.options.prevArrow).addClass("slick-arrow"),a.$nextArrow=d(a.options.nextArrow).addClass("slick-arrow"),a.slideCount>a.options.slidesToShow?(a.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.prependTo(a.options.appendArrows),a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.appendTo(a.options.appendArrows),a.options.infinite!==!0&&a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):a.$prevArrow.add(a.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))
},c.prototype.buildDots=function(){var f,e,a=this;
if(a.options.dots===!0&&a.slideCount>a.options.slidesToShow){for(e='<ul class="'+a.options.dotsClass+'">',f=0;
f<=a.getDotCount();
f+=1){e+="<li>"+a.options.customPaging.call(this,a,f)+"</li>"
}e+="</ul>",a.$dots=d(e).appendTo(a.options.appendDots),a.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}},c.prototype.buildOut=function(){var a=this;
a.$slides=a.$slider.children(a.options.slide+":not(.slick-cloned)").addClass("slick-slide"),a.slideCount=a.$slides.length,a.$slides.each(function(e,f){d(f).attr("data-slick-index",e).data("originalStyling",d(f).attr("style")||"")
}),a.$slidesCache=a.$slides,a.$slider.addClass("slick-slider"),a.$slideTrack=0===a.slideCount?d('<div class="slick-track"/>').appendTo(a.$slider):a.$slides.wrapAll('<div class="slick-track"/>').parent(),a.$list=a.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),a.$slideTrack.css("opacity",0),(a.options.centerMode===!0||a.options.swipeToSlide===!0)&&(a.options.slidesToScroll=1),d("img[data-lazy]",a.$slider).not("[src]").addClass("slick-loading"),a.setupInfinite(),a.buildArrows(),a.buildDots(),a.updateDots(),a.setSlideClasses("number"==typeof a.currentSlide?a.currentSlide:0),a.options.draggable===!0&&a.$list.addClass("draggable")
},c.prototype.buildRows=function(){var u,t,s,r,q,p,o,v=this;
if(r=document.createDocumentFragment(),p=v.$slider.children(),v.options.rows>1){for(o=v.options.slidesPerRow*v.options.rows,q=Math.ceil(p.length/o),u=0;
q>u;
u++){var n=document.createElement("div");
for(t=0;
t<v.options.rows;
t++){var m=document.createElement("div");
for(s=0;
s<v.options.slidesPerRow;
s++){var l=u*o+(t*v.options.slidesPerRow+s);
p.get(l)&&m.appendChild(p.get(l))
}n.appendChild(m)
}r.appendChild(n)
}v.$slider.html(r),v.$slider.children().children().children().css({width:100/v.options.slidesPerRow+"%",display:"inline-block"})
}},c.prototype.checkResponsive=function(r,q){var o,n,m,p=this,l=!1,k=p.$slider.width(),a=window.innerWidth||d(window).width();
if("window"===p.respondTo?m=a:"slider"===p.respondTo?m=k:"min"===p.respondTo&&(m=Math.min(a,k)),p.options.responsive&&p.options.responsive.length&&null!==p.options.responsive){n=null;
for(o in p.breakpoints){p.breakpoints.hasOwnProperty(o)&&(p.originalSettings.mobileFirst===!1?m<p.breakpoints[o]&&(n=p.breakpoints[o]):m>p.breakpoints[o]&&(n=p.breakpoints[o]))
}null!==n?null!==p.activeBreakpoint?(n!==p.activeBreakpoint||q)&&(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r)),l=n):(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r)),l=n):null!==p.activeBreakpoint&&(p.activeBreakpoint=null,p.options=p.originalSettings,r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r),l=n),r||l===!1||p.$slider.trigger("breakpoint",[p,l])
}},c.prototype.changeSlide=function(a,p){var m,l,k,o=this,n=d(a.target);
switch(n.is("a")&&a.preventDefault(),n.is("li")||(n=n.closest("li")),k=0!==o.slideCount%o.options.slidesToScroll,m=k?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,a.data.message){case"previous":l=0===m?o.options.slidesToScroll:o.options.slidesToShow-m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-l,!1,p);
break;
case"next":l=0===m?o.options.slidesToScroll:m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+l,!1,p);
break;
case"index":var j=0===a.data.index?0:a.data.index||n.index()*o.options.slidesToScroll;
o.slideHandler(o.checkNavigable(j),!1,p),n.children().trigger("focus");
break;
default:return
}},c.prototype.checkNavigable=function(g){var k,j,f=this;
if(k=f.getNavigableIndexes(),j=0,g>k[k.length-1]){g=k[k.length-1]
}else{for(var h in k){if(g<k[h]){g=j;
break
}j=k[h]
}}return g
},c.prototype.cleanUpEvents=function(){var a=this;
a.options.dots&&null!==a.$dots&&(d("li",a.$dots).off("click.slick",a.changeSlide),a.options.pauseOnDotsHover===!0&&a.options.autoplay===!0&&d("li",a.$dots).off("mouseenter.slick",d.proxy(a.setPaused,a,!0)).off("mouseleave.slick",d.proxy(a.setPaused,a,!1))),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow&&a.$prevArrow.off("click.slick",a.changeSlide),a.$nextArrow&&a.$nextArrow.off("click.slick",a.changeSlide)),a.$list.off("touchstart.slick mousedown.slick",a.swipeHandler),a.$list.off("touchmove.slick mousemove.slick",a.swipeHandler),a.$list.off("touchend.slick mouseup.slick",a.swipeHandler),a.$list.off("touchcancel.slick mouseleave.slick",a.swipeHandler),a.$list.off("click.slick",a.clickHandler),d(document).off(a.visibilityChange,a.visibility),a.$list.off("mouseenter.slick",d.proxy(a.setPaused,a,!0)),a.$list.off("mouseleave.slick",d.proxy(a.setPaused,a,!1)),a.options.accessibility===!0&&a.$list.off("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().off("click.slick",a.selectHandler),d(window).off("orientationchange.slick.slick-"+a.instanceUid,a.orientationChange),d(window).off("resize.slick.slick-"+a.instanceUid,a.resize),d("[draggable!=true]",a.$slideTrack).off("dragstart",a.preventDefault),d(window).off("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).off("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.cleanUpRows=function(){var e,f=this;
f.options.rows>1&&(e=f.$slides.children().children(),e.removeAttr("style"),f.$slider.html(e))
},c.prototype.clickHandler=function(f){var e=this;
e.shouldClick===!1&&(f.stopImmediatePropagation(),f.stopPropagation(),f.preventDefault())
},c.prototype.destroy=function(a){var e=this;
e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),d(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){d(this).attr("style",d(this).data("originalStyling"))
}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.unslicked=!0,a||e.$slider.trigger("destroy",[e])
},c.prototype.disableTransition=function(f){var e=this,g={};
g[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.fadeSlide=function(f,e){var g=this;
g.cssTransitions===!1?(g.$slides.eq(f).css({zIndex:g.options.zIndex}),g.$slides.eq(f).animate({opacity:1},g.options.speed,g.options.easing,e)):(g.applyTransition(f),g.$slides.eq(f).css({opacity:1,zIndex:g.options.zIndex}),e&&setTimeout(function(){g.disableTransition(f),e.call()
},g.options.speed))
},c.prototype.fadeSlideOut=function(f){var e=this;
e.cssTransitions===!1?e.$slides.eq(f).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(f),e.$slides.eq(f).css({opacity:0,zIndex:e.options.zIndex-2}))
},c.prototype.filterSlides=c.prototype.slickFilter=function(f){var e=this;
null!==f&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(f).appendTo(e.$slideTrack),e.reinit())
},c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var b=this;
return b.currentSlide
},c.prototype.getDotCount=function(){var f=this,e=0,h=0,g=0;
if(f.options.infinite===!0){for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToShow,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{if(f.options.centerMode===!0){g=f.slideCount
}else{for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToShow,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}}return g-1
},c.prototype.getLeft=function(h){var m,l,j,g=this,k=0;
return g.slideOffset=0,l=g.$slides.first().outerHeight(!0),g.options.infinite===!0?(g.slideCount>g.options.slidesToShow&&(g.slideOffset=-1*g.slideWidth*g.options.slidesToShow,k=-1*l*g.options.slidesToShow),0!==g.slideCount%g.options.slidesToScroll&&h+g.options.slidesToScroll>g.slideCount&&g.slideCount>g.options.slidesToShow&&(h>g.slideCount?(g.slideOffset=-1*(g.options.slidesToShow-(h-g.slideCount))*g.slideWidth,k=-1*(g.options.slidesToShow-(h-g.slideCount))*l):(g.slideOffset=-1*g.slideCount%g.options.slidesToScroll*g.slideWidth,k=-1*g.slideCount%g.options.slidesToScroll*l))):h+g.options.slidesToShow>g.slideCount&&(g.slideOffset=(h+g.options.slidesToShow-g.slideCount)*g.slideWidth,k=(h+g.options.slidesToShow-g.slideCount)*l),g.slideCount<=g.options.slidesToShow&&(g.slideOffset=0,k=0),g.options.centerMode===!0&&g.options.infinite===!0?g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)-g.slideWidth:g.options.centerMode===!0&&(g.slideOffset=0,g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)),m=g.options.vertical===!1?-1*h*g.slideWidth+g.slideOffset:-1*h*l+k,g.options.variableWidth===!0&&(j=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow),m=j[0]?-1*j[0].offsetLeft:0,g.options.centerMode===!0&&(j=g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow+1),m=j[0]?-1*j[0].offsetLeft:0,m+=(g.$list.width()-j.outerWidth())/2)),m
},c.prototype.getOption=c.prototype.slickGetOption=function(f){var e=this;
return e.options[f]
},c.prototype.getNavigableIndexes=function(){var h,g=this,f=0,k=0,j=[];
for(g.options.infinite===!1?h=g.slideCount:(f=-1*g.options.slidesToScroll,k=-1*g.options.slidesToScroll,h=2*g.slideCount);
h>f;
){j.push(f),f=k+g.options.slidesToScroll,k+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return j
},c.prototype.getSlick=function(){return this
},c.prototype.getSlideCount=function(){var h,g,f,a=this;
return f=a.options.centerMode===!0?a.slideWidth*Math.floor(a.options.slidesToShow/2):0,a.options.swipeToSlide===!0?(a.$slideTrack.find(".slick-slide").each(function(e,b){return b.offsetLeft-f+d(b).outerWidth()/2>-1*a.swipeLeft?(g=b,!1):void 0
}),h=Math.abs(d(g).attr("data-slick-index")-a.currentSlide)||1):a.options.slidesToScroll
},c.prototype.goTo=c.prototype.slickGoTo=function(f,e){var g=this;
g.changeSlide({data:{message:"index",index:parseInt(f)}},e)
},c.prototype.init=function(a){var e=this;
d(e.$slider).hasClass("slick-initialized")||(d(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots()),a&&e.$slider.trigger("init",[e]),e.options.accessibility===!0&&e.initADA()
},c.prototype.initArrowEvents=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.on("click.slick",{message:"previous"},b.changeSlide),b.$nextArrow.on("click.slick",{message:"next"},b.changeSlide))
},c.prototype.initDotEvents=function(){var a=this;
a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&d("li",a.$dots).on("click.slick",{message:"index"},a.changeSlide),a.options.dots===!0&&a.options.pauseOnDotsHover===!0&&a.options.autoplay===!0&&d("li",a.$dots).on("mouseenter.slick",d.proxy(a.setPaused,a,!0)).on("mouseleave.slick",d.proxy(a.setPaused,a,!1))
},c.prototype.initializeEvents=function(){var a=this;
a.initArrowEvents(),a.initDotEvents(),a.$list.on("touchstart.slick mousedown.slick",{action:"start"},a.swipeHandler),a.$list.on("touchmove.slick mousemove.slick",{action:"move"},a.swipeHandler),a.$list.on("touchend.slick mouseup.slick",{action:"end"},a.swipeHandler),a.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},a.swipeHandler),a.$list.on("click.slick",a.clickHandler),d(document).on(a.visibilityChange,d.proxy(a.visibility,a)),a.$list.on("mouseenter.slick",d.proxy(a.setPaused,a,!0)),a.$list.on("mouseleave.slick",d.proxy(a.setPaused,a,!1)),a.options.accessibility===!0&&a.$list.on("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),d(window).on("orientationchange.slick.slick-"+a.instanceUid,d.proxy(a.orientationChange,a)),d(window).on("resize.slick.slick-"+a.instanceUid,d.proxy(a.resize,a)),d("[draggable!=true]",a.$slideTrack).on("dragstart",a.preventDefault),d(window).on("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).on("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.initUI=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.show(),b.$nextArrow.show()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.show(),b.options.autoplay===!0&&b.autoPlay()
},c.prototype.keyHandler=function(f){var e=this;
f.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===f.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===f.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}}))
},c.prototype.lazyLoad=function(){function h(e){d("img[data-lazy]",e).each(function(){var f=d(this),n=d(this).attr("data-lazy"),g=document.createElement("img");
g.onload=function(){f.animate({opacity:0},100,function(){f.attr("src",n).animate({opacity:1},200,function(){f.removeAttr("data-lazy").removeClass("slick-loading")
})
})
},g.src=n
})
}var m,l,k,j,a=this;
a.options.centerMode===!0?a.options.infinite===!0?(k=a.currentSlide+(a.options.slidesToShow/2+1),j=k+a.options.slidesToShow+2):(k=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),j=2+(a.options.slidesToShow/2+1)+a.currentSlide):(k=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,j=k+a.options.slidesToShow,a.options.fade===!0&&(k>0&&k--,j<=a.slideCount&&j++)),m=a.$slider.find(".slick-slide").slice(k,j),h(m),a.slideCount<=a.options.slidesToShow?(l=a.$slider.find(".slick-slide"),h(l)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(l=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),h(l)):0===a.currentSlide&&(l=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),h(l))
},c.prototype.loadSlider=function(){var b=this;
b.setPosition(),b.$slideTrack.css({opacity:1}),b.$slider.removeClass("slick-loading"),b.initUI(),"progressive"===b.options.lazyLoad&&b.progressiveLazyLoad()
},c.prototype.next=c.prototype.slickNext=function(){var b=this;
b.changeSlide({data:{message:"next"}})
},c.prototype.orientationChange=function(){var b=this;
b.checkResponsive(),b.setPosition()
},c.prototype.pause=c.prototype.slickPause=function(){var b=this;
b.autoPlayClear(),b.paused=!0
},c.prototype.play=c.prototype.slickPlay=function(){var b=this;
b.paused=!1,b.autoPlay()
},c.prototype.postSlide=function(f){var e=this;
e.$slider.trigger("afterChange",[e,f]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay(),e.options.accessibility===!0&&e.initADA()
},c.prototype.prev=c.prototype.slickPrev=function(){var b=this;
b.changeSlide({data:{message:"previous"}})
},c.prototype.preventDefault=function(b){b.preventDefault()
},c.prototype.progressiveLazyLoad=function(){var f,e,a=this;
f=d("img[data-lazy]",a.$slider).length,f>0&&(e=d("img[data-lazy]",a.$slider).first(),e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy"),a.progressiveLazyLoad(),a.options.adaptiveHeight===!0&&a.setPosition()
}).error(function(){e.removeAttr("data-lazy"),a.progressiveLazyLoad()
}))
},c.prototype.refresh=function(a){var f=this,e=f.currentSlide;
f.destroy(!0),d.extend(f,f.initials,{currentSlide:e}),f.init(),a||f.changeSlide({data:{message:"index",index:e}},!1)
},c.prototype.registerBreakpoints=function(){var k,j,h,a=this,g=a.options.responsive||null;
if("array"===d.type(g)&&g.length){a.respondTo=a.options.respondTo||"window";
for(k in g){if(h=a.breakpoints.length-1,j=g[k].breakpoint,g.hasOwnProperty(k)){for(;
h>=0;
){a.breakpoints[h]&&a.breakpoints[h]===j&&a.breakpoints.splice(h,1),h--
}a.breakpoints.push(j),a.breakpointSettings[j]=g[k].settings
}}a.breakpoints.sort(function(b,e){return a.options.mobileFirst?b-e:e-b
})
}},c.prototype.reinit=function(){var a=this;
a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.slideCount<=a.options.slidesToShow&&(a.currentSlide=0),a.registerBreakpoints(),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.checkResponsive(!1,!0),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),a.setSlideClasses(0),a.setPosition(),a.$slider.trigger("reInit",[a]),a.options.autoplay===!0&&a.focusHandler()
},c.prototype.resize=function(){var a=this;
d(window).width()!==a.windowWidth&&(clearTimeout(a.windowDelay),a.windowDelay=window.setTimeout(function(){a.windowWidth=d(window).width(),a.checkResponsive(),a.unslicked||a.setPosition()
},50))
},c.prototype.removeSlide=c.prototype.slickRemove=function(f,e,h){var g=this;
return"boolean"==typeof f?(e=f,f=e===!0?0:g.slideCount-1):f=e===!0?--f:f,g.slideCount<1||0>f||f>g.slideCount-1?!1:(g.unload(),h===!0?g.$slideTrack.children().remove():g.$slideTrack.children(this.options.slide).eq(f).remove(),g.$slides=g.$slideTrack.children(this.options.slide),g.$slideTrack.children(this.options.slide).detach(),g.$slideTrack.append(g.$slides),g.$slidesCache=g.$slides,g.reinit(),void 0)
},c.prototype.setCSS=function(g){var j,h,f=this,k={};
f.options.rtl===!0&&(g=-g),j="left"==f.positionProp?Math.ceil(g)+"px":"0px",h="top"==f.positionProp?Math.ceil(g)+"px":"0px",k[f.positionProp]=g,f.transformsEnabled===!1?f.$slideTrack.css(k):(k={},f.cssTransitions===!1?(k[f.animType]="translate("+j+", "+h+")",f.$slideTrack.css(k)):(k[f.animType]="translate3d("+j+", "+h+", 0px)",f.$slideTrack.css(k)))
},c.prototype.setDimensions=function(){var f=this;
f.options.vertical===!1?f.options.centerMode===!0&&f.$list.css({padding:"0px "+f.options.centerPadding}):(f.$list.height(f.$slides.first().outerHeight(!0)*f.options.slidesToShow),f.options.centerMode===!0&&f.$list.css({padding:f.options.centerPadding+" 0px"})),f.listWidth=f.$list.width(),f.listHeight=f.$list.height(),f.options.vertical===!1&&f.options.variableWidth===!1?(f.slideWidth=Math.ceil(f.listWidth/f.options.slidesToShow),f.$slideTrack.width(Math.ceil(f.slideWidth*f.$slideTrack.children(".slick-slide").length))):f.options.variableWidth===!0?f.$slideTrack.width(5000*f.slideCount):(f.slideWidth=Math.ceil(f.listWidth),f.$slideTrack.height(Math.ceil(f.$slides.first().outerHeight(!0)*f.$slideTrack.children(".slick-slide").length)));
var e=f.$slides.first().outerWidth(!0)-f.$slides.first().width();
f.options.variableWidth===!1&&f.$slideTrack.children(".slick-slide").width(f.slideWidth-e)
},c.prototype.setFade=function(){var e,a=this;
a.$slides.each(function(f,b){e=-1*a.slideWidth*f,a.options.rtl===!0?d(b).css({position:"relative",right:e,top:0,zIndex:a.options.zIndex-2,opacity:0}):d(b).css({position:"relative",left:e,top:0,zIndex:a.options.zIndex-2,opacity:0})
}),a.$slides.eq(a.currentSlide).css({zIndex:a.options.zIndex-1,opacity:1})
},c.prototype.setHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.css("height",e)
}},c.prototype.setOption=c.prototype.slickSetOption=function(a,m,l){var j,h,k=this;
if("responsive"===a&&"array"===d.type(m)){for(h in m){if("array"!==d.type(k.options.responsive)){k.options.responsive=[m[h]]
}else{for(j=k.options.responsive.length-1;
j>=0;
){k.options.responsive[j].breakpoint===m[h].breakpoint&&k.options.responsive.splice(j,1),j--
}k.options.responsive.push(m[h])
}}}else{k.options[a]=m
}l===!0&&(k.unload(),k.reinit())
},c.prototype.setPosition=function(){var b=this;
b.setDimensions(),b.setHeight(),b.options.fade===!1?b.setCSS(b.getLeft(b.currentSlide)):b.setFade(),b.$slider.trigger("setPosition",[b])
},c.prototype.setProps=function(){var f=this,e=document.body.style;
f.positionProp=f.options.vertical===!0?"top":"left","top"===f.positionProp?f.$slider.addClass("slick-vertical"):f.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&f.options.useCSS===!0&&(f.cssTransitions=!0),f.options.fade&&("number"==typeof f.options.zIndex?f.options.zIndex<3&&(f.options.zIndex=3):f.options.zIndex=f.defaults.zIndex),void 0!==e.OTransform&&(f.animType="OTransform",f.transformType="-o-transform",f.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.MozTransform&&(f.animType="MozTransform",f.transformType="-moz-transform",f.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(f.animType=!1)),void 0!==e.webkitTransform&&(f.animType="webkitTransform",f.transformType="-webkit-transform",f.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.msTransform&&(f.animType="msTransform",f.transformType="-ms-transform",f.transitionType="msTransition",void 0===e.msTransform&&(f.animType=!1)),void 0!==e.transform&&f.animType!==!1&&(f.animType="transform",f.transformType="transform",f.transitionType="transition"),f.transformsEnabled=null!==f.animType&&f.animType!==!1
},c.prototype.setSlideClasses=function(h){var m,l,k,j,g=this;
l=g.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),g.$slides.eq(h).addClass("slick-current"),g.options.centerMode===!0?(m=Math.floor(g.options.slidesToShow/2),g.options.infinite===!0&&(h>=m&&h<=g.slideCount-1-m?g.$slides.slice(h-m,h+m+1).addClass("slick-active").attr("aria-hidden","false"):(k=g.options.slidesToShow+h,l.slice(k-m+1,k+m+2).addClass("slick-active").attr("aria-hidden","false")),0===h?l.eq(l.length-1-g.options.slidesToShow).addClass("slick-center"):h===g.slideCount-1&&l.eq(g.options.slidesToShow).addClass("slick-center")),g.$slides.eq(h).addClass("slick-center")):h>=0&&h<=g.slideCount-g.options.slidesToShow?g.$slides.slice(h,h+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):l.length<=g.options.slidesToShow?l.addClass("slick-active").attr("aria-hidden","false"):(j=g.slideCount%g.options.slidesToShow,k=g.options.infinite===!0?g.options.slidesToShow+h:h,g.options.slidesToShow==g.options.slidesToScroll&&g.slideCount-h<g.options.slidesToShow?l.slice(k-(g.options.slidesToShow-j),k+j).addClass("slick-active").attr("aria-hidden","false"):l.slice(k,k+g.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===g.options.lazyLoad&&g.lazyLoad()
},c.prototype.setupInfinite=function(){var h,g,f,a=this;
if(a.options.fade===!0&&(a.options.centerMode=!1),a.options.infinite===!0&&a.options.fade===!1&&(g=null,a.slideCount>a.options.slidesToShow)){for(f=a.options.centerMode===!0?a.options.slidesToShow+1:a.options.slidesToShow,h=a.slideCount;
h>a.slideCount-f;
h-=1){g=h-1,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g-a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
}for(h=0;
f>h;
h+=1){g=h,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g+a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
}a.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")
})
}},c.prototype.setPaused=function(f){var e=this;
e.options.autoplay===!0&&e.options.pauseOnHover===!0&&(e.paused=f,f?e.autoPlayClear():e.autoPlay())
},c.prototype.selectHandler=function(a){var h=this,g=d(a.target).is(".slick-slide")?d(a.target):d(a.target).parents(".slick-slide"),f=parseInt(g.attr("data-slick-index"));
return f||(f=0),h.slideCount<=h.options.slidesToShow?(h.setSlideClasses(f),h.asNavFor(f),void 0):(h.slideHandler(f),void 0)
},c.prototype.slideHandler=function(r,q,p){var o,n,m,l,k=null,j=this;
return q=q||!1,j.animating===!0&&j.options.waitForAnimate===!0||j.options.fade===!0&&j.currentSlide===r||j.slideCount<=j.options.slidesToShow?void 0:(q===!1&&j.asNavFor(r),o=r,k=j.getLeft(o),l=j.getLeft(j.currentSlide),j.currentLeft=null===j.swipeLeft?l:j.swipeLeft,j.options.infinite===!1&&j.options.centerMode===!1&&(0>r||r>j.getDotCount()*j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):j.options.infinite===!1&&j.options.centerMode===!0&&(0>r||r>j.slideCount-j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):(j.options.autoplay===!0&&clearInterval(j.autoPlayTimer),n=0>o?0!==j.slideCount%j.options.slidesToScroll?j.slideCount-j.slideCount%j.options.slidesToScroll:j.slideCount+o:o>=j.slideCount?0!==j.slideCount%j.options.slidesToScroll?0:o-j.slideCount:o,j.animating=!0,j.$slider.trigger("beforeChange",[j,j.currentSlide,n]),m=j.currentSlide,j.currentSlide=n,j.setSlideClasses(j.currentSlide),j.updateDots(),j.updateArrows(),j.options.fade===!0?(p!==!0?(j.fadeSlideOut(m),j.fadeSlide(n,function(){j.postSlide(n)
})):j.postSlide(n),j.animateHeight(),void 0):(p!==!0?j.animateSlide(k,function(){j.postSlide(n)
}):j.postSlide(n),void 0)))
},c.prototype.startLoad=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.hide(),b.$nextArrow.hide()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.hide(),b.$slider.addClass("slick-loading")
},c.prototype.swipeDirection=function(){var g,f,k,j,h=this;
return g=h.touchObject.startX-h.touchObject.curX,f=h.touchObject.startY-h.touchObject.curY,k=Math.atan2(f,g),j=Math.round(180*k/Math.PI),0>j&&(j=360-Math.abs(j)),45>=j&&j>=0?h.options.rtl===!1?"left":"right":360>=j&&j>=315?h.options.rtl===!1?"left":"right":j>=135&&225>=j?h.options.rtl===!1?"right":"left":h.options.verticalSwiping===!0?j>=35&&135>=j?"left":"right":"vertical"
},c.prototype.swipeEnd=function(){var e,a=this;
if(a.dragging=!1,a.shouldClick=a.touchObject.swipeLength>10?!1:!0,void 0===a.touchObject.curX){return !1
}if(a.touchObject.edgeHit===!0&&a.$slider.trigger("edge",[a,a.swipeDirection()]),a.touchObject.swipeLength>=a.touchObject.minSwipe){switch(a.swipeDirection()){case"left":e=a.options.swipeToSlide?a.checkNavigable(a.currentSlide+a.getSlideCount()):a.currentSlide+a.getSlideCount(),a.slideHandler(e),a.currentDirection=0,a.touchObject={},a.$slider.trigger("swipe",[a,"left"]);
break;
case"right":e=a.options.swipeToSlide?a.checkNavigable(a.currentSlide-a.getSlideCount()):a.currentSlide-a.getSlideCount(),a.slideHandler(e),a.currentDirection=1,a.touchObject={},a.$slider.trigger("swipe",[a,"right"])
}}else{a.touchObject.startX!==a.touchObject.curX&&(a.slideHandler(a.currentSlide),a.touchObject={})
}},c.prototype.swipeHandler=function(f){var e=this;
if(!(e.options.swipe===!1||"ontouchend" in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==f.type.indexOf("mouse"))){switch(e.touchObject.fingerCount=f.originalEvent&&void 0!==f.originalEvent.touches?f.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),f.data.action){case"start":e.swipeStart(f);
break;
case"move":e.swipeMove(f);
break;
case"end":e.swipeEnd(f)
}}},c.prototype.swipeMove=function(k){var p,o,n,m,l,j=this;
return l=void 0!==k.originalEvent?k.originalEvent.touches:null,!j.dragging||l&&1!==l.length?!1:(p=j.getLeft(j.currentSlide),j.touchObject.curX=void 0!==l?l[0].pageX:k.clientX,j.touchObject.curY=void 0!==l?l[0].pageY:k.clientY,j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curX-j.touchObject.startX,2))),j.options.verticalSwiping===!0&&(j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curY-j.touchObject.startY,2)))),o=j.swipeDirection(),"vertical"!==o?(void 0!==k.originalEvent&&j.touchObject.swipeLength>4&&k.preventDefault(),m=(j.options.rtl===!1?1:-1)*(j.touchObject.curX>j.touchObject.startX?1:-1),j.options.verticalSwiping===!0&&(m=j.touchObject.curY>j.touchObject.startY?1:-1),n=j.touchObject.swipeLength,j.touchObject.edgeHit=!1,j.options.infinite===!1&&(0===j.currentSlide&&"right"===o||j.currentSlide>=j.getDotCount()&&"left"===o)&&(n=j.touchObject.swipeLength*j.options.edgeFriction,j.touchObject.edgeHit=!0),j.swipeLeft=j.options.vertical===!1?p+n*m:p+n*(j.$list.height()/j.listWidth)*m,j.options.verticalSwiping===!0&&(j.swipeLeft=p+n*m),j.options.fade===!0||j.options.touchMove===!1?!1:j.animating===!0?(j.swipeLeft=null,!1):(j.setCSS(j.swipeLeft),void 0)):void 0)
},c.prototype.swipeStart=function(f){var g,e=this;
return 1!==e.touchObject.fingerCount||e.slideCount<=e.options.slidesToShow?(e.touchObject={},!1):(void 0!==f.originalEvent&&void 0!==f.originalEvent.touches&&(g=f.originalEvent.touches[0]),e.touchObject.startX=e.touchObject.curX=void 0!==g?g.pageX:f.clientX,e.touchObject.startY=e.touchObject.curY=void 0!==g?g.pageY:f.clientY,e.dragging=!0,void 0)
},c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var b=this;
null!==b.$slidesCache&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.appendTo(b.$slideTrack),b.reinit())
},c.prototype.unload=function(){var a=this;
d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.remove(),a.$nextArrow&&a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
},c.prototype.unslick=function(f){var e=this;
e.$slider.trigger("unslick",[e,f]),e.destroy()
},c.prototype.updateArrows=function(){var e,f=this;
e=Math.floor(f.options.slidesToShow/2),f.options.arrows===!0&&f.slideCount>f.options.slidesToShow&&!f.options.infinite&&(f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===f.currentSlide?(f.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-f.options.slidesToShow&&f.options.centerMode===!1?(f.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-1&&f.options.centerMode===!0&&(f.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))
},c.prototype.updateDots=function(){var b=this;
null!==b.$dots&&(b.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),b.$dots.find("li").eq(Math.floor(b.currentSlide/b.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))
},c.prototype.visibility=function(){var b=this;
document[b.hidden]?(b.paused=!0,b.autoPlayClear()):b.options.autoplay===!0&&(b.paused=!1,b.autoPlay())
},c.prototype.initADA=function(){var a=this;
a.$slides.add(a.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),a.$slideTrack.attr("role","listbox"),a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b){d(this).attr({role:"option","aria-describedby":"slick-slide"+a.instanceUid+b})
}),null!==a.$dots&&a.$dots.attr("role","tablist").find("li").each(function(b){d(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+a.instanceUid+b,id:"slick-slide"+a.instanceUid+b})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),a.activateADA()
},c.prototype.activateADA=function(){var f=this,e=f.$slider.find("*").is(":focus");
f.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),e&&f.$slideTrack.find(".slick-active").focus()
},c.prototype.focusHandler=function(){var a=this;
a.$slider.on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();
var b=d(this);
setTimeout(function(){a.isPlay&&(b.is(":focus")?(a.autoPlayClear(),a.paused=!0):(a.paused=!1,a.autoPlay()))
},0)
})
},d.fn.slick=function(){var h,b=this,m=arguments[0],l=Array.prototype.slice.call(arguments,1),k=b.length,j=0;
for(j;
k>j;
j++){if("object"==typeof m||"undefined"==typeof m?b[j].slick=new c(b[j],m):h=b[j].slick[m].apply(b[j].slick,l),"undefined"!=typeof h){return h
}}return b
}
});
/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
;
window.Modernizr=function(S,L,W){function ag(a){ae.cssText=a
}function ad(b,a){return ag(U.join(b+";")+(a||""))
}function X(b,a){return typeof b===a
}function J(b,a){return !!~(""+b).indexOf(a)
}function B(d,b){var a,c;
for(a in d){c=d[a];
if(!J(c,"-")&&ae[c]!==W){return b=="pfx"?c:!0
}}return !1
}function z(e,b,c){var d,a;
for(d in e){a=b[e[d]];
if(a!==W){return c===!1?e[d]:X(a,"function")?a.bind(c||b):a
}}return !1
}function Z(e,c,b){var d=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+R.join(d+" ")+d).split(" ");
return X(c,"string")||X(c,"undefined")?B(a,c):(a=(e+" "+q.join(d+" ")+d).split(" "),z(a,c,b))
}function x(){K.input=function(b){for(var c=0,a=b.length;
c<a;
c++){af[b[c]]=!!(b[c] in ab)
}return af.list&&(af.list=!!(L.createElement("datalist")&&S.HTMLDataListElement)),af
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),K.inputtypes=function(g){for(var d=0,c,a,e,b=g.length;
d<b;
d++){ab.setAttribute("type",a=g[d]),c=ab.type!=="text",c&&(ab.value=aa,ab.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&ab.style.WebkitAppearance!==W?(M.appendChild(ab),e=L.defaultView,c=e.getComputedStyle&&e.getComputedStyle(ab,null).WebkitAppearance!=="textfield"&&ab.offsetHeight!==0,M.removeChild(ab)):/^(search|tel)$/.test(a)||(c=/^(url|email)$/.test(a)?ab.checkValidity&&ab.checkValidity()===!1:ab.value!=aa)),G[g[d]]=!!c
}return G
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var j="2.6.2",K={},Y=!0,M=L.documentElement,Q="modernizr",P=L.createElement(Q),ae=P.style,ab=L.createElement("input"),aa=":)",E={}.toString,U=" -webkit- -moz- -o- -ms- ".split(" "),D="Webkit Moz O ms",R=D.split(" "),q=D.toLowerCase().split(" "),ac={svg:"http://www.w3.org/2000/svg"},N={},G={},af={},C=[],F=C.slice,I,T=function(d,k,b,ah){var y,g,t,w,p=L.createElement("div"),o=L.body,s=o||L.createElement("body");
if(parseInt(b,10)){while(b--){t=L.createElement("div"),t.id=ah?ah[b]:Q+(b+1),p.appendChild(t)
}}return y=["&#173;",'<style id="s',Q,'">',d,"</style>"].join(""),p.id=Q,(o?p:s).innerHTML+=y,s.appendChild(p),o||(s.style.background="",s.style.overflow="hidden",w=M.style.overflow,M.style.overflow="hidden",M.appendChild(s)),g=k(p,d),o?p.parentNode.removeChild(p):(s.parentNode.removeChild(s),M.style.overflow=w),!!g
},m=function(b){var c=S.matchMedia||S.msMatchMedia,a;
return c?c(b).matches:(T("@media "+b+" { #"+Q+" { position: absolute; } }",function(d){a=(S.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position=="absolute"
}),a)
},A=function(){function b(e,c){c=c||L.createElement(a[e]||"div"),e="on"+e;
var d=e in c;
return d||(c.setAttribute||(c=L.createElement("div")),c.setAttribute&&c.removeAttribute&&(c.setAttribute(e,""),d=X(c[e],"function"),X(c[e],"undefined")||(c[e]=W),c.removeAttribute(e))),c=null,d
}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return b
}(),V={}.hasOwnProperty,O,H;
O=X(V,"undefined")||X(V.call,"undefined")?function(b,a){return a in b&&X(b.constructor.prototype[a],"undefined")
}:function(b,a){return V.call(b,a)
},Function.prototype.bind||(Function.prototype.bind=function(d){var b=this,c,a;
if(typeof b!="function"){throw new TypeError
}return c=F.call(arguments,1),a=function(){var h,k,g;
return this instanceof a?(h=function(){},h.prototype=b.prototype,k=new h,g=b.apply(k,c.concat(F.call(arguments))),Object(g)===g?g:k):b.apply(d,c.concat(F.call(arguments)))
},a
}),N.flexbox=function(){return Z("flexWrap")
},N.flexboxlegacy=function(){return Z("boxDirection")
},N.canvas=function(){var a=L.createElement("canvas");
return !!(a.getContext&&a.getContext("2d"))
},N.canvastext=function(){return !!(K.canvas&&X(L.createElement("canvas").getContext("2d").fillText,"function"))
},N.webgl=function(){return !!S.WebGLRenderingContext
},N.touch=function(){var a;
return"ontouchstart" in S||S.DocumentTouch&&L instanceof DocumentTouch?a=!0:T(["@media (",U.join("touch-enabled),("),Q,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},N.geolocation=function(){return"geolocation" in navigator
},N.postmessage=function(){return !!S.postMessage
},N.websqldatabase=function(){return !!S.openDatabase
},N.indexedDB=function(){return !!Z("indexedDB",S)
},N.hashchange=function(){return A("hashchange",S)&&(L.documentMode===W||L.documentMode>7)
},N.history=function(){return !!(S.history&&history.pushState)
},N.draganddrop=function(){var a=L.createElement("div");
return"draggable" in a||"ondragstart" in a&&"ondrop" in a
},N.websockets=function(){return"WebSocket" in S||"MozWebSocket" in S
},N.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),J(ae.backgroundColor,"rgba")
},N.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),J(ae.backgroundColor,"rgba")||J(ae.backgroundColor,"hsla")
},N.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ae.background)
},N.backgroundsize=function(){return Z("backgroundSize")
},N.borderimage=function(){return Z("borderImage")
},N.borderradius=function(){return Z("borderRadius")
},N.boxshadow=function(){return Z("boxShadow")
},N.textshadow=function(){return L.createElement("div").style.textShadow===""
},N.opacity=function(){return ad("opacity:.55"),/^0.55$/.test(ae.opacity)
},N.cssanimations=function(){return Z("animationName")
},N.csscolumns=function(){return Z("columnCount")
},N.cssgradients=function(){var c="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",a="linear-gradient(left top,#9f9, white);";
return ag((c+"-webkit- ".split(" ").join(b+c)+U.join(a+c)).slice(0,-c.length)),J(ae.backgroundImage,"gradient")
},N.cssreflections=function(){return Z("boxReflect")
},N.csstransforms=function(){return !!Z("transform")
},N.csstransforms3d=function(){var a=!!Z("perspective");
return a&&"webkitPerspective" in M.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=b.offsetLeft===9&&b.offsetHeight===3
}),a
},N.csstransitions=function(){return Z("transition")
},N.fontface=function(){var a;
return T('@font-face {font-family:"font";src:url("https://")}',function(c,d){var h=L.getElementById("smodernizr"),b=h.sheet||h.styleSheet,g=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0
}),a
},N.generatedcontent=function(){var a;
return T(["#",Q,"{font:0/0 a}#",Q,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3
}),a
},N.video=function(){var a=L.createElement("video"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(b){}return c
},N.audio=function(){var a=L.createElement("audio"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(b){}return c
},N.localstorage=function(){try{return localStorage.setItem(Q,Q),localStorage.removeItem(Q),!0
}catch(a){return !1
}},N.sessionstorage=function(){try{return sessionStorage.setItem(Q,Q),sessionStorage.removeItem(Q),!0
}catch(a){return !1
}},N.webworkers=function(){return !!S.Worker
},N.applicationcache=function(){return !!S.applicationCache
},N.svg=function(){return !!L.createElementNS&&!!L.createElementNS(ac.svg,"svg").createSVGRect
},N.inlinesvg=function(){var a=L.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==ac.svg
},N.smil=function(){return !!L.createElementNS&&/SVGAnimate/.test(E.call(L.createElementNS(ac.svg,"animate")))
},N.svgclippaths=function(){return !!L.createElementNS&&/SVGClipPath/.test(E.call(L.createElementNS(ac.svg,"clipPath")))
};
for(H in N){O(N,H)&&(I=H.toLowerCase(),K[I]=N[H](),C.push((K[I]?"":"no-")+I))
}K.input||x(),K.addTest=function(c,a){if(typeof c=="object"){for(var b in c){O(c,b)&&K.addTest(b,c[b])
}}else{c=c.toLowerCase();
if(K[c]!==W){return K
}a=typeof a=="function"?a():a,typeof Y!="undefined"&&Y&&(M.className+=" "+(a?"":"no-")+c),K[c]=a
}return K
},ag(""),P=ab=null;
/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
;
return(function(an,ai){function g(e,b){var c=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;
return c.innerHTML="x<style>"+b+"</style>",a.insertBefore(c.lastChild,a.firstChild)
}function aj(){var a=ap.elements;
return typeof a=="string"?a.split(" "):a
}function ah(b){var a=aw[b[ao]];
return a||(a={},ar++,b[ao]=ar,aw[ar]=a),a
}function aq(h,a,b){a||(a=ai);
if(ak){return a.createElement(h)
}b||(b=ah(a));
var c;
return c=b.cache[h]?b.cache[h].cloneNode():d.test(h)?(b.cache[h]=b.createElem(h)).cloneNode():b.createElem(h),c.canHaveChildren&&!al.test(h)?b.frag.appendChild(c):c
}function av(r,a){r||(r=ai);
if(ak){return r.createDocumentFragment()
}a=a||ah(r);
for(var p=a.frag.cloneNode(),c=0,l=aj(),b=l.length;
c<b;
c++){p.createElement(l[c])
}return p
}function k(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag()),b.createElement=function(c){return ap.shivMethods?aq(c,b,a):a.createElem(c)
},b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+aj().join().replace(/\w+/g,function(c){return a.createElem(c),a.frag.createElement(c),'c("'+c+'")'
})+");return n}")(ap,a.frag)
}function au(b){b||(b=ai);
var a=ah(b);
return !ap.shivCSS||am||a.hasCSS||(a.hasCSS=!!g(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),ak||k(b,a),b
}var at=an.html5||{},al=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,am,ao="_html5shiv",ar=0,aw={},ak,ap;
(function(){try{var b=ai.createElement("a");
b.innerHTML="<xyz></xyz>",am="hidden" in b,ak=b.childNodes.length==1||function(){ai.createElement("a");
var c=ai.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(a){am=!0,ak=!0
}})(),ap={elements:at.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:at.shivCSS!==!1,supportsUnknownElements:ak,shivMethods:at.shivMethods!==!1,type:"default",shivDocument:au,createElement:aq,createDocumentFragment:av},an.html5=ap,au(ai)
})(this,L),K._version=j,K._prefixes=U,K._domPrefixes=q,K._cssomPrefixes=R,K.mq=m,K.hasEvent=A,K.testProp=function(a){return B([a])
},K.testAllProps=Z,K.testStyles=T,K.prefixed=function(c,b,a){return b?Z(c,b,a):Z(c,"pfx")
},M.className=M.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(Y?" js "+C.join(" "):""),K
}(this,this.document);
window.Modernizr=function(M,G,Q){function ab(a){B.cssText=a
}function I(b,a){return typeof b===a
}function aa(b,a){return !!~(""+b).indexOf(a)
}function V(d,b){var a,c;
for(a in d){c=d[a];
if(!aa(c,"-")&&B[c]!==Q){return b=="pfx"?c:!0
}}return !1
}function z(e,b,c){var d,a;
for(d in e){a=b[e[d]];
if(a!==Q){return c===!1?e[d]:I(a,"function")?a.bind(c||b):a
}}return !1
}function L(e,c,b){var d=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+X.join(d+" ")+d).split(" ");
return I(c,"string")||I(c,"undefined")?V(a,c):(a=(e+" "+x.join(d+" ")+d).split(" "),z(a,c,b))
}function N(){J.input=function(a){for(var b=0,c=a.length;
b<c;
b++){W[a[b]]=a[b] in F
}return W.list&&(W.list=!!G.createElement("datalist")&&!!M.HTMLDataListElement),W
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),J.inputtypes=function(g){for(var e=0,c,d,b,a=g.length;
e<a;
e++){F.setAttribute("type",d=g[e]),c=F.type!=="text",c&&(F.value=A,F.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(d)&&F.style.WebkitAppearance!==Q?(U.appendChild(F),b=G.defaultView,c=b.getComputedStyle&&b.getComputedStyle(F,null).WebkitAppearance!=="textfield"&&F.offsetHeight!==0,U.removeChild(F)):/^(search|tel)$/.test(d)||(c=/^(url|email)$/.test(d)?F.checkValidity&&F.checkValidity()===!1:F.value!=A)),P[g[e]]=!!c
}return P
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var m="2.6.2",J={},Y=!0,U=G.documentElement,O="modernizr",S=G.createElement(O),B=S.style,F=G.createElement("input"),A=":)",H={}.toString,q="Webkit Moz O ms",X=q.split(" "),x=q.toLowerCase().split(" "),T={},P={},W={},K=[],D=K.slice,Z,j=function(e,g,b,y){var w,p,k,t,l=G.createElement("div"),ac=G.body,d=ac||G.createElement("body");
if(parseInt(b,10)){while(b--){k=G.createElement("div"),k.id=y?y[b]:O+(b+1),l.appendChild(k)
}}return w=["&#173;",'<style id="s',O,'">',e,"</style>"].join(""),l.id=O,(ac?l:d).innerHTML+=w,d.appendChild(l),ac||(d.style.background="",d.style.overflow="hidden",t=U.style.overflow,U.style.overflow="hidden",U.appendChild(d)),p=g(l,e),ac?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),U.style.overflow=t),!!p
},C={}.hasOwnProperty,R,E;
R=!I(C,"undefined")&&!I(C.call,"undefined")?function(b,a){return C.call(b,a)
}:function(b,a){return a in b&&I(b.constructor.prototype[a],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(d){var b=this,c,a;
if(typeof b!="function"){throw new TypeError
}return c=D.call(arguments,1),a=function(){var h,k,g;
return this instanceof a?(h=function(){},h.prototype=b.prototype,k=new h,g=b.apply(k,c.concat(D.call(arguments))),Object(g)===g?g:k):b.apply(d,c.concat(D.call(arguments)))
},a
}),T.flexbox=function(){return L("flexWrap")
},T.canvas=function(){var a=G.createElement("canvas");
return !!a.getContext&&!!a.getContext("2d")
},T.backgroundsize=function(){return L("backgroundSize")
},T.borderimage=function(){return L("borderImage")
},T.borderradius=function(){return L("borderRadius")
},T.cssanimations=function(){return L("animationName")
},T.csstransitions=function(){return L("transition")
},T.fontface=function(){var a;
return j('@font-face {font-family:"font";src:url("https://")}',function(c,d){var h=G.getElementById("smodernizr"),b=h.sheet||h.styleSheet,g=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0
}),a
},T.video=function(){var a=G.createElement("video"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(b){}return c
},T.audio=function(){var a=G.createElement("audio"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(b){}return c
};
for(E in T){R(T,E)&&(Z=E.toLowerCase(),J[Z]=T[E](),K.push((J[Z]?"":"no-")+Z))
}return J.input||N(),J.addTest=function(c,b){if(typeof c=="object"){for(var a in c){R(c,a)&&J.addTest(a,c[a])
}}else{c=c.toLowerCase();
if(J[c]!==Q){return J
}b=typeof b=="function"?b():b,typeof Y!="undefined"&&Y&&(U.className+=" "+(b?"":"no-")+c),J[c]=b
}return J
},ab(""),S=F=null,function(ai,ad){function d(e,b){var c=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;
return c.innerHTML="x<style>"+b+"</style>",a.insertBefore(c.lastChild,a.firstChild)
}function aq(){var a=ak.elements;
return typeof a=="string"?a.split(" "):a
}function ah(b){var a=al[b[ae]];
return a||(a={},an++,b[ae]=an,al[an]=a),a
}function aj(e,b,a){b||(b=ad);
if(af){return b.createElement(e)
}a||(a=ah(b));
var c;
return c=a.cache[e]?a.cache[e].cloneNode():ag.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),c.canHaveChildren&&!k.test(e)?a.frag.appendChild(c):c
}function ap(o,b){o||(o=ad);
if(af){return o.createDocumentFragment()
}b=b||ah(o);
for(var l=b.frag.cloneNode(),a=0,h=aq(),c=h.length;
a<c;
a++){l.createElement(h[a])
}return l
}function g(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag()),b.createElement=function(c){return ak.shivMethods?aj(c,b,a):a.createElem(c)
},b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+aq().join().replace(/\w+/g,function(c){return a.createElem(c),a.frag.createElement(c),'c("'+c+'")'
})+");return n}")(ak,a.frag)
}function ao(b){b||(b=ad);
var a=ah(b);
return ak.shivCSS&&!ac&&!a.hasCSS&&(a.hasCSS=!!d(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),af||g(b,a),b
}var am=ai.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,ag=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,ac,ae="_html5shiv",an=0,al={},af,ak;
(function(){try{var b=ad.createElement("a");
b.innerHTML="<xyz></xyz>",ac="hidden" in b,af=b.childNodes.length==1||function(){ad.createElement("a");
var c=ad.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(a){ac=!0,af=!0
}})(),ak={elements:am.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:am.shivCSS!==!1,supportsUnknownElements:af,shivMethods:am.shivMethods!==!1,type:"default",shivDocument:ao,createElement:aj,createDocumentFragment:ap},ai.html5=ak,ao(ad)
}(this,G),J._version=m,J._domPrefixes=x,J._cssomPrefixes=X,J.testProp=function(a){return V([a])
},J.testAllProps=L,J.testStyles=j,U.className=U.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(Y?" js "+K.join(" "):""),J
}(this,this.document),function(J,E,M){function S(a){return"[object Function]"==H.call(a)
}function C(a){return"string"==typeof a
}function N(){}function L(a){return !a||"loaded"==a||"complete"==a||"uninitialized"==a
}function P(){var a=V.shift();
K=1,a?a.t?F(function(){("c"==a.t?G.injectCss:G.injectJs)(a.s,0,a.a,a.x,a.e,1)
},0):(a(),P()):K=0
}function U(f,k,e,l,t,Z,X){function s(b){if(!r&&L(a.readyState)&&(u.r=r=1,!K&&P(),a.onload=a.onreadystatechange=null,b)){"img"!=f&&F(function(){x.removeChild(a)
},50);
for(var c in D[k]){D[k].hasOwnProperty(c)&&D[k][c].onload()
}}}var X=X||G.errorTimeout,a=E.createElement(f),r=0,Y=0,u={t:e,s:k,e:t,a:Z,x:X};
1===D[k]&&(Y=1,D[k]=[]),"object"==f?a.data=k:(a.src=k,a.type=f),a.width=a.height="0",a.onerror=a.onload=a.onreadystatechange=function(){s.call(this,Y)
},V.splice(l,0,u),"img"!=f&&(Y||2===D[k]?(x.insertBefore(a,W?null:Q),F(s,X)):D[k].push(a))
}function m(e,c,b,d,a){return K=0,c=c||"j",C(e)?U("c"==c?z:O,e,c,this.i++,b,d,a):(V.splice(this.i++,0,e),1==V.length&&P()),this
}function q(){var a=G;
return a.loader={load:m,i:0},a
}var I=E.documentElement,F=J.setTimeout,Q=E.getElementsByTagName("script")[0],H={}.toString,V=[],K=0,j="MozAppearance" in I.style,W=j&&!!E.createRange().compareNode,x=W?I:Q.parentNode,I=J.opera&&"[object Opera]"==H.call(J.opera),I=!!E.attachEvent&&!I,O=j?"object":I?"script":"img",z=I?"script":O,B=Array.isArray||function(a){return"[object Array]"==H.call(a)
},A=[],D={},T={timeout:function(b,a){return a.length&&(b.timeout=a[0]),b
}},R,G;
G=function(k){function a(y){for(var y=y.split("!"),w=A.length,p=y.pop(),v=y.length,p={url:p,origUrl:p,prefixes:y},l,s,o=0;
o<v;
o++){s=y[o].split("="),(l=T[s.shift()])&&(p=l(p,s))
}for(o=0;
o<w;
o++){p=A[o](p)
}return p
}function h(X,l,u,v,w){var y=a(X),p=y.autoCallback;
y.url.split(".").pop().split("?").shift(),y.bypass||(l&&(l=S(l)?l:l[X]||l[v]||l[X.split("/").pop().split("?")[0]]),y.instead?y.instead(X,l,u,v,w):(D[y.url]?y.noexec=!0:D[y.url]=1,u.load(y.url,y.forceCSS||!y.forceJS&&"css"==y.url.split(".").pop().split("?").shift()?"c":M,y.noexec,y.attrs,y.timeout),(S(l)||S(p))&&u.load(function(){q(),l&&l(y.origUrl,w,v),p&&p(y.origUrl,w,v),D[y.url]=2
})))
}function c(p,aa){function v(l,e){if(l){if(C(l)){e||(w=function(){var f=[].slice.call(arguments);
X.apply(this,f),Z()
}),h(l,w,aa,0,ab)
}else{if(Object(l)===l){for(o in Y=function(){var n=0,f;
for(f in l){l.hasOwnProperty(f)&&n++
}return n
}(),l){l.hasOwnProperty(o)&&(!e&&!--Y&&(S(w)?w=function(){var f=[].slice.call(arguments);
X.apply(this,f),Z()
}:w[o]=function(f){return function(){var n=[].slice.call(arguments);
f&&f.apply(this,n),Z()
}
}(X[o])),h(l[o],w,aa,o,ab))
}}}}else{!e&&Z()
}}var ab=!!p.test,y=p.load||p.both,w=p.callback||N,X=w,Z=p.complete||N,Y,o;
v(ab?p.yep:p.nope,!!y),y&&v(y)
}var d,b,g=this.yepnope.loader;
if(C(k)){h(k,0,g,0)
}else{if(B(k)){for(d=0;
d<k.length;
d++){b=k[d],C(b)?h(b,0,g,0):B(b)?G(b):Object(b)===b&&c(b,g)
}}else{Object(k)===k&&c(k,g)
}}},G.addPrefix=function(b,a){T[b]=a
},G.addFilter=function(a){A.push(a)
},G.errorTimeout=10000,null==E.readyState&&E.addEventListener&&(E.readyState="loading",E.addEventListener("DOMContentLoaded",R=function(){E.removeEventListener("DOMContentLoaded",R,0),E.readyState="complete"
},0)),J.yepnope=q(),J.yepnope.executeStack=P,J.yepnope.injectJs=function(d,f,r,b,g,e){var k=E.createElement("script"),p,h,b=b||G.errorTimeout;
k.src=d;
for(h in r){k.setAttribute(h,r[h])
}f=e?P:f||N,k.onreadystatechange=k.onload=function(){!p&&L(k.readyState)&&(p=1,f(),k.onload=k.onreadystatechange=null)
},F(function(){p||(p=1,f(1))
},b),g?k.onload():Q.parentNode.insertBefore(k,Q)
},J.yepnope.injectCss=function(h,d,e,b,f,g){var b=E.createElement("link"),a,d=g?P:d||N;
b.href=h,b.rel="stylesheet",b.type="text/css";
for(a in e){b.setAttribute(a,e[a])
}f||(Q.parentNode.insertBefore(b,Q),F(d,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
},window.Modernizr=function(S,L,W){function T(a){ad.cssText=a
}function x(b,a){return T(ac.join(b+";")+(a||""))
}function X(b,a){return typeof b===a
}function J(b,a){return !!~(""+b).indexOf(a)
}function B(d,b){var a,c;
for(a in d){c=d[a];
if(!J(c,"-")&&ad[c]!==W){return b=="pfx"?c:!0
}}return !1
}function m(e,b,c){var d,a;
for(d in e){a=b[e[d]];
if(a!==W){return c===!1?e[d]:X(a,"function")?a.bind(c||b):a
}}return !1
}function Z(e,c,b){var d=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+q.join(d+" ")+d).split(" ");
return X(c,"string")||X(c,"undefined")?B(a,c):(a=(e+" "+R.join(d+" ")+d).split(" "),m(a,c,b))
}function z(){K.input=function(b){for(var c=0,a=b.length;
c<a;
c++){ae[b[c]]=b[c] in ab
}return ae.list&&(ae.list=!!L.createElement("datalist")&&!!S.HTMLDataListElement),ae
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),K.inputtypes=function(g){for(var d=0,c,a,e,b=g.length;
d<b;
d++){ab.setAttribute("type",a=g[d]),c=ab.type!=="text",c&&(ab.value=C,ab.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&ab.style.WebkitAppearance!==W?(M.appendChild(ab),e=L.defaultView,c=e.getComputedStyle&&e.getComputedStyle(ab,null).WebkitAppearance!=="textfield"&&ab.offsetHeight!==0,M.removeChild(ab)):/^(search|tel)$/.test(a)||(c=/^(url|email)$/.test(a)?ab.checkValidity&&ab.checkValidity()===!1:ab.value!=C)),O[g[d]]=!!c
}return O
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var j="2.6.2",K={},V=!0,M=L.documentElement,Q="modernizr",D=L.createElement(Q),ad=D.style,ab=L.createElement("input"),C=":)",A={}.toString,ac=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",q=E.split(" "),R=E.toLowerCase().split(" "),P={svg:"http://www.w3.org/2000/svg"},N={},O={},ae={},aa=[],Y=aa.slice,I,af=function(d,k,b,ag){var y,g,t,w,p=L.createElement("div"),o=L.body,s=o||L.createElement("body");
if(parseInt(b,10)){while(b--){t=L.createElement("div"),t.id=ag?ag[b]:Q+(b+1),p.appendChild(t)
}}return y=["&#173;",'<style id="s',Q,'">',d,"</style>"].join(""),p.id=Q,(o?p:s).innerHTML+=y,s.appendChild(p),o||(s.style.background="",s.style.overflow="hidden",w=M.style.overflow,M.style.overflow="hidden",M.appendChild(s)),g=k(p,d),o?p.parentNode.removeChild(p):(s.parentNode.removeChild(s),M.style.overflow=w),!!g
},G=function(){function a(d,c){c=c||L.createElement(b[d]||"div"),d="on"+d;
var e=d in c;
return e||(c.setAttribute||(c=L.createElement("div")),c.setAttribute&&c.removeAttribute&&(c.setAttribute(d,""),e=X(c[d],"function"),X(c[d],"undefined")||(c[d]=W),c.removeAttribute(d))),c=null,e
}var b={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return a
}(),F={}.hasOwnProperty,U,H;
U=!X(F,"undefined")&&!X(F.call,"undefined")?function(b,a){return F.call(b,a)
}:function(b,a){return a in b&&X(b.constructor.prototype[a],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(d){var b=this,c,a;
if(typeof b!="function"){throw new TypeError
}return c=Y.call(arguments,1),a=function(){var h,k,g;
return this instanceof a?(h=function(){},h.prototype=b.prototype,k=new h,g=b.apply(k,c.concat(Y.call(arguments))),Object(g)===g?g:k):b.apply(d,c.concat(Y.call(arguments)))
},a
}),N.flexbox=function(){return Z("flexWrap")
},N.flexboxlegacy=function(){return Z("boxDirection")
},N.canvas=function(){var a=L.createElement("canvas");
return !!a.getContext&&!!a.getContext("2d")
},N.canvastext=function(){return !!K.canvas&&!!X(L.createElement("canvas").getContext("2d").fillText,"function")
},N.webgl=function(){return !!S.WebGLRenderingContext
},N.touch=function(){var a;
return"ontouchstart" in S||S.DocumentTouch&&L instanceof DocumentTouch?a=!0:af(["@media (",ac.join("touch-enabled),("),Q,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=b.offsetTop===9
}),a
},N.geolocation=function(){return"geolocation" in navigator
},N.postmessage=function(){return !!S.postMessage
},N.websqldatabase=function(){return !!S.openDatabase
},N.indexedDB=function(){return !!Z("indexedDB",S)
},N.hashchange=function(){return G("hashchange",S)&&(L.documentMode===W||L.documentMode>7)
},N.history=function(){return !!S.history&&!!history.pushState
},N.draganddrop=function(){var a=L.createElement("div");
return"draggable" in a||"ondragstart" in a&&"ondrop" in a
},N.websockets=function(){return"WebSocket" in S||"MozWebSocket" in S
},N.rgba=function(){return T("background-color:rgba(150,255,150,.5)"),J(ad.backgroundColor,"rgba")
},N.hsla=function(){return T("background-color:hsla(120,40%,100%,.5)"),J(ad.backgroundColor,"rgba")||J(ad.backgroundColor,"hsla")
},N.multiplebgs=function(){return T("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(ad.background)
},N.backgroundsize=function(){return Z("backgroundSize")
},N.borderimage=function(){return Z("borderImage")
},N.borderradius=function(){return Z("borderRadius")
},N.boxshadow=function(){return Z("boxShadow")
},N.textshadow=function(){return L.createElement("div").style.textShadow===""
},N.opacity=function(){return x("opacity:.55"),/^0.55$/.test(ad.opacity)
},N.cssanimations=function(){return Z("animationName")
},N.csscolumns=function(){return Z("columnCount")
},N.cssgradients=function(){var c="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",a="linear-gradient(left top,#9f9, white);";
return T((c+"-webkit- ".split(" ").join(b+c)+ac.join(a+c)).slice(0,-c.length)),J(ad.backgroundImage,"gradient")
},N.cssreflections=function(){return Z("boxReflect")
},N.csstransforms=function(){return !!Z("transform")
},N.csstransforms3d=function(){var a=!!Z("perspective");
return a&&"webkitPerspective" in M.style&&af("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=b.offsetLeft===9&&b.offsetHeight===3
}),a
},N.csstransitions=function(){return Z("transition")
},N.fontface=function(){var a;
return af('@font-face {font-family:"font";src:url("https://")}',function(c,d){var h=L.getElementById("smodernizr"),b=h.sheet||h.styleSheet,g=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0
}),a
},N.generatedcontent=function(){var a;
return af(["#",Q,"{font:0/0 a}#",Q,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3
}),a
},N.video=function(){var a=L.createElement("video"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(b){}return c
},N.audio=function(){var a=L.createElement("audio"),c=!1;
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(b){}return c
},N.localstorage=function(){try{return localStorage.setItem(Q,Q),localStorage.removeItem(Q),!0
}catch(a){return !1
}},N.sessionstorage=function(){try{return sessionStorage.setItem(Q,Q),sessionStorage.removeItem(Q),!0
}catch(a){return !1
}},N.webworkers=function(){return !!S.Worker
},N.applicationcache=function(){return !!S.applicationCache
},N.svg=function(){return !!L.createElementNS&&!!L.createElementNS(P.svg,"svg").createSVGRect
},N.inlinesvg=function(){var a=L.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==P.svg
},N.smil=function(){return !!L.createElementNS&&/SVGAnimate/.test(A.call(L.createElementNS(P.svg,"animate")))
},N.svgclippaths=function(){return !!L.createElementNS&&/SVGClipPath/.test(A.call(L.createElementNS(P.svg,"clipPath")))
};
for(H in N){U(N,H)&&(I=H.toLowerCase(),K[I]=N[H](),aa.push((K[I]?"":"no-")+I))
}return K.input||z(),K.addTest=function(c,a){if(typeof c=="object"){for(var b in c){U(c,b)&&K.addTest(b,c[b])
}}else{c=c.toLowerCase();
if(K[c]!==W){return K
}a=typeof a=="function"?a():a,typeof V!="undefined"&&V&&(M.className+=" "+(a?"":"no-")+c),K[c]=a
}return K
},T(""),D=ab=null,function(am,ah){function d(e,b){var c=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;
return c.innerHTML="x<style>"+b+"</style>",a.insertBefore(c.lastChild,a.firstChild)
}function av(){var a=ao.elements;
return typeof a=="string"?a.split(" "):a
}function al(b){var a=ap[b[ai]];
return a||(a={},ar++,b[ai]=ar,ap[ar]=a),a
}function an(e,b,a){b||(b=ah);
if(aj){return b.createElement(e)
}a||(a=al(b));
var c;
return c=a.cache[e]?a.cache[e].cloneNode():ak.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),c.canHaveChildren&&!k.test(e)?a.frag.appendChild(c):c
}function au(o,b){o||(o=ah);
if(aj){return o.createDocumentFragment()
}b=b||al(o);
for(var l=b.frag.cloneNode(),a=0,h=av(),c=h.length;
a<c;
a++){l.createElement(h[a])
}return l
}function g(b,a){a.cache||(a.cache={},a.createElem=b.createElement,a.createFrag=b.createDocumentFragment,a.frag=a.createFrag()),b.createElement=function(c){return ao.shivMethods?an(c,b,a):a.createElem(c)
},b.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+av().join().replace(/\w+/g,function(c){return a.createElem(c),a.frag.createElement(c),'c("'+c+'")'
})+");return n}")(ao,a.frag)
}function at(b){b||(b=ah);
var a=al(b);
return ao.shivCSS&&!ag&&!a.hasCSS&&(a.hasCSS=!!d(b,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),aj||g(b,a),b
}var aq=am.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,ak=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,ag,ai="_html5shiv",ar=0,ap={},aj,ao;
(function(){try{var b=ah.createElement("a");
b.innerHTML="<xyz></xyz>",ag="hidden" in b,aj=b.childNodes.length==1||function(){ah.createElement("a");
var c=ah.createDocumentFragment();
return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"
}()
}catch(a){ag=!0,aj=!0
}})(),ao={elements:aq.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:aq.shivCSS!==!1,supportsUnknownElements:aj,shivMethods:aq.shivMethods!==!1,type:"default",shivDocument:at,createElement:an,createDocumentFragment:au},am.html5=ao,at(ah)
}(this,L),K._version=j,K._prefixes=ac,K._domPrefixes=R,K._cssomPrefixes=q,K.hasEvent=G,K.testProp=function(a){return B([a])
},K.testAllProps=Z,K.testStyles=af,K.prefixed=function(c,b,a){return b?Z(c,b,a):Z(c,"pfx")
},M.className=M.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(V?" js "+aa.join(" "):""),K
}(this,this.document),function(J,E,M){function S(a){return"[object Function]"==H.call(a)
}function C(a){return"string"==typeof a
}function N(){}function L(a){return !a||"loaded"==a||"complete"==a||"uninitialized"==a
}function P(){var a=V.shift();
K=1,a?a.t?F(function(){("c"==a.t?G.injectCss:G.injectJs)(a.s,0,a.a,a.x,a.e,1)
},0):(a(),P()):K=0
}function U(f,k,e,l,t,Z,X){function s(b){if(!r&&L(a.readyState)&&(u.r=r=1,!K&&P(),a.onload=a.onreadystatechange=null,b)){"img"!=f&&F(function(){x.removeChild(a)
},50);
for(var c in D[k]){D[k].hasOwnProperty(c)&&D[k][c].onload()
}}}var X=X||G.errorTimeout,a=E.createElement(f),r=0,Y=0,u={t:e,s:k,e:t,a:Z,x:X};
1===D[k]&&(Y=1,D[k]=[]),"object"==f?a.data=k:(a.src=k,a.type=f),a.width=a.height="0",a.onerror=a.onload=a.onreadystatechange=function(){s.call(this,Y)
},V.splice(l,0,u),"img"!=f&&(Y||2===D[k]?(x.insertBefore(a,W?null:Q),F(s,X)):D[k].push(a))
}function m(e,c,b,d,a){return K=0,c=c||"j",C(e)?U("c"==c?z:O,e,c,this.i++,b,d,a):(V.splice(this.i++,0,e),1==V.length&&P()),this
}function q(){var a=G;
return a.loader={load:m,i:0},a
}var I=E.documentElement,F=J.setTimeout,Q=E.getElementsByTagName("script")[0],H={}.toString,V=[],K=0,j="MozAppearance" in I.style,W=j&&!!E.createRange().compareNode,x=W?I:Q.parentNode,I=J.opera&&"[object Opera]"==H.call(J.opera),I=!!E.attachEvent&&!I,O=j?"object":I?"script":"img",z=I?"script":O,B=Array.isArray||function(a){return"[object Array]"==H.call(a)
},A=[],D={},T={timeout:function(b,a){return a.length&&(b.timeout=a[0]),b
}},R,G;
G=function(k){function a(y){for(var y=y.split("!"),w=A.length,p=y.pop(),v=y.length,p={url:p,origUrl:p,prefixes:y},l,s,o=0;
o<v;
o++){s=y[o].split("="),(l=T[s.shift()])&&(p=l(p,s))
}for(o=0;
o<w;
o++){p=A[o](p)
}return p
}function h(X,l,u,v,w){var y=a(X),p=y.autoCallback;
y.url.split(".").pop().split("?").shift(),y.bypass||(l&&(l=S(l)?l:l[X]||l[v]||l[X.split("/").pop().split("?")[0]]),y.instead?y.instead(X,l,u,v,w):(D[y.url]?y.noexec=!0:D[y.url]=1,u.load(y.url,y.forceCSS||!y.forceJS&&"css"==y.url.split(".").pop().split("?").shift()?"c":M,y.noexec,y.attrs,y.timeout),(S(l)||S(p))&&u.load(function(){q(),l&&l(y.origUrl,w,v),p&&p(y.origUrl,w,v),D[y.url]=2
})))
}function c(p,aa){function v(l,e){if(l){if(C(l)){e||(w=function(){var f=[].slice.call(arguments);
X.apply(this,f),Z()
}),h(l,w,aa,0,ab)
}else{if(Object(l)===l){for(o in Y=function(){var n=0,f;
for(f in l){l.hasOwnProperty(f)&&n++
}return n
}(),l){l.hasOwnProperty(o)&&(!e&&!--Y&&(S(w)?w=function(){var f=[].slice.call(arguments);
X.apply(this,f),Z()
}:w[o]=function(f){return function(){var n=[].slice.call(arguments);
f&&f.apply(this,n),Z()
}
}(X[o])),h(l[o],w,aa,o,ab))
}}}}else{!e&&Z()
}}var ab=!!p.test,y=p.load||p.both,w=p.callback||N,X=w,Z=p.complete||N,Y,o;
v(ab?p.yep:p.nope,!!y),y&&v(y)
}var d,b,g=this.yepnope.loader;
if(C(k)){h(k,0,g,0)
}else{if(B(k)){for(d=0;
d<k.length;
d++){b=k[d],C(b)?h(b,0,g,0):B(b)?G(b):Object(b)===b&&c(b,g)
}}else{Object(k)===k&&c(k,g)
}}},G.addPrefix=function(b,a){T[b]=a
},G.addFilter=function(a){A.push(a)
},G.errorTimeout=10000,null==E.readyState&&E.addEventListener&&(E.readyState="loading",E.addEventListener("DOMContentLoaded",R=function(){E.removeEventListener("DOMContentLoaded",R,0),E.readyState="complete"
},0)),J.yepnope=q(),J.yepnope.executeStack=P,J.yepnope.injectJs=function(d,f,r,b,g,e){var k=E.createElement("script"),p,h,b=b||G.errorTimeout;
k.src=d;
for(h in r){k.setAttribute(h,r[h])
}f=e?P:f||N,k.onreadystatechange=k.onload=function(){!p&&L(k.readyState)&&(p=1,f(),k.onload=k.onreadystatechange=null)
},F(function(){p||(p=1,f(1))
},b),g?k.onload():Q.parentNode.insertBefore(k,Q)
},J.yepnope.injectCss=function(h,d,e,b,f,g){var b=E.createElement("link"),a,d=g?P:d||N;
b.href=h,b.rel="stylesheet",b.type="text/css";
for(a in e){b.setAttribute(a,e[a])
}f||(Q.parentNode.insertBefore(b,Q),F(d,0))
}
}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
},Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(a){return a.lastChild.offsetWidth>a.firstChild.offsetWidth
},2)
});
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */
(function(a,b){if(typeof define==="function"&&define.amd){define("bloodhound",["jquery"],function(c){return a.Bloodhound=b(c)
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{a.Bloodhound=b(jQuery)
}}})(this,function(d){var k=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false
},isBlankString:function(p){return !p||/^\s*$/.test(p)
},escapeRegExChars:function(p){return p.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(p){return typeof p==="string"
},isNumber:function(p){return typeof p==="number"
},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(p){return typeof p==="undefined"
},isElement:function(p){return !!(p&&p.nodeType===1)
},isJQuery:function(p){return p instanceof d
},toStr:function o(p){return k.isUndefined(p)||p===null?"":p+""
},bind:d.proxy,each:function(r,p){d.each(r,q);
function q(s,t){return p(t,s)
}},map:d.map,filter:d.grep,every:function(q,r){var p=true;
if(!q){return p
}d.each(q,function(s,t){if(!(p=r.call(null,t,s,q))){return false
}});
return !!p
},some:function(q,r){var p=false;
if(!q){return p
}d.each(q,function(s,t){if(p=r.call(null,t,s,q)){return false
}});
return !!p
},mixin:d.extend,identity:function(p){return p
},clone:function(p){return d.extend(true,{},p)
},getIdGenerator:function(){var p=0;
return function(){return p++
}
},templatify:function n(q){return d.isFunction(q)?q:p;
function p(){return String(q)
}},defer:function(p){setTimeout(p,0)
},debounce:function(r,t,q){var s,p;
return function(){var x=this,w=arguments,v,u;
v=function(){s=null;
if(!q){p=r.apply(x,w)
}};
u=q&&!s;
clearTimeout(s);
s=setTimeout(v,t);
if(u){p=r.apply(x,w)
}return p
}
},throttle:function(u,w){var s,r,v,p,t,q;
t=0;
q=function(){t=new Date();
v=null;
p=u.apply(s,r)
};
return function(){var x=new Date(),y=w-(x-t);
s=this;
r=arguments;
if(y<=0){clearTimeout(v);
v=null;
t=x;
p=u.apply(s,r)
}else{if(!v){v=setTimeout(q,y)
}}return p
}
},stringify:function(p){return k.isString(p)?p:JSON.stringify(p)
},noop:function(){}}
}();
var m="0.11.1";
var f=function(){return{nonword:n,whitespace:o,obj:{nonword:p(n),whitespace:p(o)}};
function o(q){q=k.toStr(q);
return q?q.split(/\s+/):[]
}function n(q){q=k.toStr(q);
return q?q.split(/\W+/):[]
}function p(r){return function q(s){s=k.isArray(s)?s:[].slice.call(arguments,0);
return function t(v){var u=[];
k.each(s,function(w){u=u.concat(r(k.toStr(v[w])))
});
return u
}
}
}}();
var l=function(){function o(v){this.maxSize=k.isNumber(v)?v:100;
this.reset();
if(this.maxSize<=0){this.set=this.get=d.noop
}}k.mixin(o.prototype,{set:function u(v,y){var x=this.list.tail,w;
if(this.size>=this.maxSize){this.list.remove(x);
delete this.hash[x.key];
this.size--
}if(w=this.hash[v]){w.val=y;
this.list.moveToFront(w)
}else{w=new p(v,y);
this.list.add(w);
this.hash[v]=w;
this.size++
}},get:function q(v){var w=this.hash[v];
if(w){this.list.moveToFront(w);
return w.val
}},reset:function s(){this.size=0;
this.hash={};
this.list=new r()
}});
function r(){this.head=this.tail=null
}k.mixin(r.prototype,{add:function t(v){if(this.head){v.next=this.head;
this.head.prev=v
}this.head=v;
this.tail=this.tail||v
},remove:function n(v){v.prev?v.prev.next=v.next:this.head=v.next;
v.next?v.next.prev=v.prev:this.tail=v.prev
},moveToFront:function(v){this.remove(v);
this.add(v)
}});
function p(v,w){this.key=v;
this.val=w;
this.prev=this.next=null
}return o
}();
var h=function(){var s;
try{s=window.localStorage;
s.setItem("~~~","!");
s.removeItem("~~~")
}catch(r){s=null
}function p(v,u){this.prefix=["__",v,"__"].join("");
this.ttlKey="__ttl__";
this.keyMatcher=new RegExp("^"+k.escapeRegExChars(this.prefix));
this.ls=u||s;
!this.ls&&this._noop()
}k.mixin(p.prototype,{_prefix:function(u){return this.prefix+u
},_ttlKey:function(u){return this._prefix(u)+this.ttlKey
},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=k.noop
},_safeSet:function(u,w){try{this.ls.setItem(u,w)
}catch(v){if(v.name==="QuotaExceededError"){this.clear();
this._noop()
}}},get:function(u){if(this.isExpired(u)){this.remove(u)
}return t(this.ls.getItem(this._prefix(u)))
},set:function(v,w,u){if(k.isNumber(u)){this._safeSet(this._ttlKey(v),q(o()+u))
}else{this.ls.removeItem(this._ttlKey(v))
}return this._safeSet(this._prefix(v),q(w))
},remove:function(u){this.ls.removeItem(this._ttlKey(u));
this.ls.removeItem(this._prefix(u));
return this
},clear:function(){var u,v=n(this.keyMatcher);
for(u=v.length;
u--;
){this.remove(v[u])
}return this
},isExpired:function(v){var u=t(this.ls.getItem(this._ttlKey(v)));
return k.isNumber(u)&&o()>u?true:false
}});
return p;
function o(){return new Date().getTime()
}function q(u){return JSON.stringify(k.isUndefined(u)?null:u)
}function t(u){return d.parseJSON(u)
}function n(v){var x,w,y=[],u=s.length;
for(x=0;
x<u;
x++){if((w=s.key(x)).match(v)){y.push(w.replace(v,""))
}}return y
}}();
var e=function(){var p=0,s={},n=6,r=new l(10);
function u(v){v=v||{};
this.cancelled=false;
this.lastReq=null;
this._send=v.transport;
this._get=v.limiter?v.limiter(this._get):this._get;
this._cache=v.cache===false?new l(0):r
}u.setMaxPendingRequests=function o(v){n=v
};
u.resetCache=function t(){r.reset()
};
k.mixin(u.prototype,{_fingerprint:function q(v){v=v||{};
return v.url+v.type+d.param(v.data||{})
},_get:function(C,w){var B=this,z,A;
z=this._fingerprint(C);
if(this.cancelled||z!==this.lastReq){return
}if(A=s[z]){A.done(y).fail(x)
}else{if(p<n){p++;
s[z]=this._send(C).done(y).fail(x).always(v)
}else{this.onDeckRequestArgs=[].slice.call(arguments,0)
}}function y(D){w(null,D);
B._cache.set(z,D)
}function x(){w(true)
}function v(){p--;
delete s[z];
if(B.onDeckRequestArgs){B._get.apply(B,B.onDeckRequestArgs);
B.onDeckRequestArgs=null
}}},get:function(y,v){var x,w;
v=v||d.noop;
y=k.isString(y)?{url:y}:y||{};
w=this._fingerprint(y);
this.cancelled=false;
this.lastReq=w;
if(x=this._cache.get(w)){v(null,x)
}else{this._get(y,v)
}},cancel:function(){this.cancelled=true
}});
return u
}();
var a=window.SearchIndex=function(){var u="c",v="i";
function n(A){A=A||{};
if(!A.datumTokenizer||!A.queryTokenizer){d.error("datumTokenizer and queryTokenizer are both required")
}this.identify=A.identify||k.stringify;
this.datumTokenizer=A.datumTokenizer;
this.queryTokenizer=A.queryTokenizer;
this.reset()
}k.mixin(n.prototype,{bootstrap:function p(A){this.datums=A.datums;
this.trie=A.trie
},add:function(B){var A=this;
B=k.isArray(B)?B:[B];
k.each(B,function(C){var E,D;
A.datums[E=A.identify(C)]=C;
D=r(A.datumTokenizer(C));
k.each(D,function(F){var I,H,G;
I=A.trie;
H=F.split("");
while(G=H.shift()){I=I[u][G]||(I[u][G]=w());
I[v].push(E)
}})
})
},get:function o(A){var B=this;
return k.map(A,function(C){return B.datums[C]
})
},search:function z(C){var A=this,D,B;
D=r(this.queryTokenizer(C));
k.each(D,function(E){var I,H,G,F;
if(B&&B.length===0){return false
}I=A.trie;
H=E.split("");
while(I&&(G=H.shift())){I=I[u][G]
}if(I&&H.length===0){F=I[v].slice(0);
B=B?s(B,F):F
}else{B=[];
return false
}});
return B?k.map(q(B),function(E){return A.datums[E]
}):[]
},all:function x(){var A=[];
for(var B in this.datums){A.push(this.datums[B])
}return A
},reset:function t(){this.datums={};
this.trie=w()
},serialize:function y(){return{datums:this.datums,trie:this.trie}
}});
return n;
function r(A){A=k.filter(A,function(B){return !!B
});
A=k.map(A,function(B){return B.toLowerCase()
});
return A
}function w(){var A={};
A[v]=[];
A[u]={};
return A
}function q(E){var B={},D=[];
for(var C=0,A=E.length;
C<A;
C++){if(!B[E[C]]){B[E[C]]=true;
D.push(E[C])
}}return D
}function s(F,D){var B=0,E=0,G=[];
F=F.sort();
D=D.sort();
var C=F.length,A=D.length;
while(B<C&&E<A){if(F[B]<D[E]){B++
}else{if(F[B]>D[E]){E++
}else{G.push(F[B]);
B++;
E++
}}}return G
}}();
var g=function(){var r;
r={data:"data",protocol:"protocol",thumbprint:"thumbprint"};
function s(t){this.url=t.url;
this.ttl=t.ttl;
this.cache=t.cache;
this.prepare=t.prepare;
this.transform=t.transform;
this.transport=t.transport;
this.thumbprint=t.thumbprint;
this.storage=new h(t.cacheKey)
}k.mixin(s.prototype,{_settings:function q(){return{url:this.url,type:"GET",dataType:"json"}
},store:function o(t){if(!this.cache){return
}this.storage.set(r.data,t,this.ttl);
this.storage.set(r.protocol,location.protocol,this.ttl);
this.storage.set(r.thumbprint,this.thumbprint,this.ttl)
},fromCache:function p(){var t={},u;
if(!this.cache){return null
}t.data=this.storage.get(r.data);
t.protocol=this.storage.get(r.protocol);
t.thumbprint=this.storage.get(r.thumbprint);
u=t.thumbprint!==this.thumbprint||t.protocol!==location.protocol;
return t.data&&!u?t.data:null
},fromNetwork:function(t){var w=this,u;
if(!t){return
}u=this.prepare(this._settings());
this.transport(u).fail(v).done(x);
function v(){t(true)
}function x(y){t(null,w.transform(y))
}},clear:function n(){this.storage.clear();
return this
}});
return s
}();
var c=function(){function p(r){this.url=r.url;
this.prepare=r.prepare;
this.transform=r.transform;
this.transport=new e({cache:r.cache,limiter:r.limiter,transport:r.transport})
}k.mixin(p.prototype,{_settings:function o(){return{url:this.url,type:"GET",dataType:"json"}
},get:function n(u,r){var t=this,s;
if(!r){return
}u=u||"";
s=this.prepare(u,this._settings());
return this.transport.get(s,v);
function v(w,x){w?r([]):r(t.transform(x))
}},cancelLastRequest:function q(){this.transport.cancel()
}});
return p
}();
var b=function(){return function r(u){var t,v;
t={initialize:true,identify:k.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null};
u=k.mixin(t,u||{});
!u.datumTokenizer&&d.error("datumTokenizer is required");
!u.queryTokenizer&&d.error("queryTokenizer is required");
v=u.sorter;
u.sorter=v?function(w){return w.sort(v)
}:k.identity;
u.local=k.isFunction(u.local)?u.local():u.local;
u.prefetch=o(u.prefetch);
u.remote=n(u.remote);
return u
};
function o(u){var t;
if(!u){return null
}t={url:null,ttl:24*60*60*1000,cache:true,cacheKey:null,thumbprint:"",prepare:k.identity,transform:k.identity,transport:null};
u=k.isString(u)?{url:u}:u;
u=k.mixin(t,u);
!u.url&&d.error("prefetch requires url to be set");
u.transform=u.filter||u.transform;
u.cacheKey=u.cacheKey||u.url;
u.thumbprint=m+u.thumbprint;
u.transport=u.transport?p(u.transport):d.ajax;
return u
}function n(u){var t;
if(!u){return
}t={url:null,cache:true,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:k.identity,transport:null};
u=k.isString(u)?{url:u}:u;
u=k.mixin(t,u);
!u.url&&d.error("remote requires url to be set");
u.transform=u.filter||u.transform;
u.prepare=s(u);
u.limiter=q(u);
u.transport=u.transport?p(u.transport):d.ajax;
delete u.replace;
delete u.wildcard;
delete u.rateLimitBy;
delete u.rateLimitWait;
return u
}function s(z){var w,y,u;
w=z.prepare;
y=z.replace;
u=z.wildcard;
if(w){return w
}if(y){w=t
}else{if(z.wildcard){w=v
}else{w=x
}}return w;
function t(B,A){A.url=y(A.url,B);
return A
}function v(B,A){A.url=A.url.replace(u,encodeURIComponent(B));
return A
}function x(B,A){return A
}}function q(x){var t,y,w;
t=x.limiter;
y=x.rateLimitBy;
w=x.rateLimitWait;
if(!t){t=/^throttle$/i.test(y)?v(w):u(w)
}return t;
function u(A){return function z(B){return k.debounce(B,A)
}
}function v(A){return function z(B){return k.throttle(B,A)
}
}}function p(t){return function u(y){var v=d.Deferred();
t(y,x,w);
return v;
function x(z){k.defer(function(){v.resolve(z)
})
}function w(z){k.defer(function(){v.reject(z)
})
}}
}}();
var j=function(){var p;
p=window&&window.Bloodhound;
function t(A){A=b(A);
this.sorter=A.sorter;
this.identify=A.identify;
this.sufficient=A.sufficient;
this.local=A.local;
this.remote=A.remote?new c(A.remote):null;
this.prefetch=A.prefetch?new g(A.prefetch):null;
this.index=new a({identify:this.identify,datumTokenizer:A.datumTokenizer,queryTokenizer:A.queryTokenizer});
A.initialize!==false&&this.initialize()
}t.noConflict=function s(){window&&(window.Bloodhound=p);
return t
};
t.tokenizers=f;
k.mixin(t.prototype,{__ttAdapter:function u(){var C=this;
return this.remote?B:A;
function B(F,E,D){return C.search(F,E,D)
}function A(E,D){return C.search(E,D)
}},_loadPrefetch:function n(){var C=this,B,D;
B=d.Deferred();
if(!this.prefetch){B.resolve()
}else{if(D=this.prefetch.fromCache()){this.index.bootstrap(D);
B.resolve()
}else{this.prefetch.fromNetwork(A)
}}return B.promise();
function A(E,F){if(E){return B.reject()
}C.add(F);
C.prefetch.store(C.index.serialize());
B.resolve()
}},_initialize:function q(){var C=this,A;
this.clear();
(this.initPromise=this._loadPrefetch()).done(B);
return this.initPromise;
function B(){C.add(C.local)
}},initialize:function q(A){return !this.initPromise||A?this._initialize():this.initPromise
},add:function y(A){this.index.add(A);
return this
},get:function o(A){A=k.isArray(A)?A:[].slice.call(arguments);
return this.index.get(A)
},search:function z(E,D,B){var C=this,A;
A=this.sorter(this.index.search(E));
D(this.remote?A.slice():A);
if(this.remote&&A.length<this.sufficient){this.remote.get(E,F)
}else{if(this.remote){this.remote.cancelLastRequest()
}}return this;
function F(H){var G=[];
k.each(H,function(I){!k.some(A,function(J){return C.identify(I)===C.identify(J)
})&&G.push(I)
});
B&&B(G)
}},all:function v(){return this.index.all()
},clear:function r(){this.index.reset();
return this
},clearPrefetchCache:function x(){this.prefetch&&this.prefetch.clear();
return this
},clearRemoteCache:function w(){e.resetCache();
return this
},ttAdapter:function u(){return this.__ttAdapter()
}});
return t
}();
return j
});
(function(a,b){if(typeof define==="function"&&define.amd){define("typeahead.js",["jquery"],function(c){return b(c)
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}})(this,function(d){var j=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false
},isBlankString:function(o){return !o||/^\s*$/.test(o)
},escapeRegExChars:function(o){return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(o){return typeof o==="string"
},isNumber:function(o){return typeof o==="number"
},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(o){return typeof o==="undefined"
},isElement:function(o){return !!(o&&o.nodeType===1)
},isJQuery:function(o){return o instanceof d
},toStr:function n(o){return j.isUndefined(o)||o===null?"":o+""
},bind:d.proxy,each:function(q,o){d.each(q,p);
function p(r,s){return o(s,r)
}},map:d.map,filter:d.grep,every:function(p,q){var o=true;
if(!p){return o
}d.each(p,function(r,s){if(!(o=q.call(null,s,r,p))){return false
}});
return !!o
},some:function(p,q){var o=false;
if(!p){return o
}d.each(p,function(r,s){if(o=q.call(null,s,r,p)){return false
}});
return !!o
},mixin:d.extend,identity:function(o){return o
},clone:function(o){return d.extend(true,{},o)
},getIdGenerator:function(){var o=0;
return function(){return o++
}
},templatify:function m(p){return d.isFunction(p)?p:o;
function o(){return String(p)
}},defer:function(o){setTimeout(o,0)
},debounce:function(q,s,p){var r,o;
return function(){var w=this,v=arguments,u,t;
u=function(){r=null;
if(!p){o=q.apply(w,v)
}};
t=p&&!r;
clearTimeout(r);
r=setTimeout(u,s);
if(t){o=q.apply(w,v)
}return o
}
},throttle:function(t,v){var r,q,u,o,s,p;
s=0;
p=function(){s=new Date();
u=null;
o=t.apply(r,q)
};
return function(){var w=new Date(),x=v-(w-s);
r=this;
q=arguments;
if(x<=0){clearTimeout(u);
u=null;
s=w;
o=t.apply(r,q)
}else{if(!u){u=setTimeout(p,x)
}}return o
}
},stringify:function(o){return j.isString(o)?o:JSON.stringify(o)
},noop:function(){}}
}();
var k=function(){var p={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};
return o;
function o(t){var s,r;
r=j.mixin({},p,t);
s={css:m(),classes:r,html:q(r),selectors:n(r)};
return{css:s.css,html:s.html,classes:s.classes,selectors:s.selectors,mixin:function(u){j.mixin(u,s)
}}
}function q(r){return{wrapper:'<span class="'+r.wrapper+'"></span>',menu:'<div class="'+r.menu+'"></div>'}
}function n(s){var r={};
j.each(s,function(u,t){r[t]="."+u
});
return r
}function m(){var r={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};
if(j.isMsie()){j.mixin(r.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})
}return r
}}();
var f=function(){var o,n;
o="typeahead:";
n={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"};
function m(p){if(!p||!p.el){d.error("EventBus initialized without el")
}this.$el=d(p.el)
}j.mixin(m.prototype,{_trigger:function(r,q){var p;
p=d.Event(o+r);
(q=q||[]).unshift(p);
this.$el.trigger.apply(this.$el,q);
return p
},before:function(r){var q,p;
q=[].slice.call(arguments,1);
p=this._trigger("before"+r,q);
return p.isDefaultPrevented()
},trigger:function(q){var p;
this._trigger(q,[].slice.call(arguments,1));
if(p=n[q]){this._trigger(p,[].slice.call(arguments,1))
}}});
return m
}();
var l=function(){var o=/\s+/,s=m();
return{onSync:t,onAsync:n,off:p,trigger:q};
function u(A,y,w,x){var z;
if(!w){return this
}y=y.split(o);
w=x?v(w,x):w;
this._callbacks=this._callbacks||{};
while(z=y.shift()){this._callbacks[z]=this._callbacks[z]||{sync:[],async:[]};
this._callbacks[z][A].push(w)
}return this
}function n(y,w,x){return u.call(this,"async",y,w,x)
}function t(y,w,x){return u.call(this,"sync",y,w,x)
}function p(w){var x;
if(!this._callbacks){return this
}w=w.split(o);
while(x=w.shift()){delete this._callbacks[x]
}return this
}function q(x){var y,z,w,A,B;
if(!this._callbacks){return this
}x=x.split(o);
w=[].slice.call(arguments,1);
while((y=x.shift())&&(z=this._callbacks[y])){A=r(z.sync,this,[y].concat(w));
B=r(z.async,this,[y].concat(w));
A()&&s(B)
}return this
}function r(z,y,x){return w;
function w(){var C;
for(var B=0,A=z.length;
!C&&B<A;
B+=1){C=z[B].apply(y,x)===false
}return !C
}}function m(){var x;
if(window.setImmediate){x=function y(z){setImmediate(function(){z()
})
}
}else{x=function w(z){setTimeout(function(){z()
},0)
}
}return x
}function v(x,w){return x.bind?x.bind(w):function(){x.apply(w,[].slice.call(arguments,0))
}
}}();
var b=function(p){var o={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false};
return function n(t){var q;
t=j.mixin({},o,t);
if(!t.node||!t.pattern){return
}t.pattern=j.isArray(t.pattern)?t.pattern:[t.pattern];
q=m(t.pattern,t.caseSensitive,t.wordsOnly);
r(t.node,s);
function s(x){var v,u,w;
if(v=q.exec(x.data)){w=p.createElement(t.tagName);
t.className&&(w.className=t.className);
u=x.splitText(v.index);
u.splitText(v[0].length);
w.appendChild(u.cloneNode(true));
x.parentNode.replaceChild(w,u)
}return !!v
}function r(x,y){var v,w=3;
for(var u=0;
u<x.childNodes.length;
u++){v=x.childNodes[u];
if(v.nodeType===w){u+=y(v)?1:0
}else{r(v,y)
}}}};
function m(t,r,w){var v=[],u;
for(var s=0,q=t.length;
s<q;
s++){v.push(j.escapeRegExChars(t[s]))
}u=w?"\\b("+v.join("|")+")\\b":"("+v.join("|")+")";
return r?new RegExp(u):new RegExp(u,"i")
}}(window.document);
var g=function(){var K;
K={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};
function G(P,O){P=P||{};
if(!P.input){d.error("input is missing")
}O.mixin(this);
this.$hint=d(P.hint);
this.$input=d(P.input);
this.query=this.$input.val();
this.queryWhenFocused=this.hasFocus()?this.query:null;
this.$overflowHelper=z(this.$input);
this._checkLanguageDirection();
if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=j.noop
}}G.normalizeQuery=function(O){return j.toStr(O).replace(/^\s*/g,"").replace(/\s{2,}/g," ")
};
j.mixin(G.prototype,l,{_onBlur:function x(){this.resetInputValue();
this.trigger("blurred")
},_onFocus:function s(){this.queryWhenFocused=this.query;
this.trigger("focused")
},_onKeydown:function M(O){var P=K[O.which||O.keyCode];
this._managePreventDefault(P,O);
if(P&&this._shouldTrigger(P,O)){this.trigger(P+"Keyed",O)
}},_onInput:function o(){this._setQuery(this.getInputValue());
this.clearHintIfInvalid();
this._checkLanguageDirection()
},_managePreventDefault:function u(Q,P){var O;
switch(Q){case"up":case"down":O=!A(P);
break;
default:O=false
}O&&P.preventDefault()
},_shouldTrigger:function N(Q,P){var O;
switch(Q){case"tab":O=!A(P);
break;
default:O=true
}return O
},_checkLanguageDirection:function n(){var O=(this.$input.css("direction")||"ltr").toLowerCase();
if(this.dir!==O){this.dir=O;
this.$hint.attr("dir",O);
this.trigger("langDirChanged",O)
}},_setQuery:function C(R,P){var O,Q;
O=w(R,this.query);
Q=O?this.query.length!==R.length:false;
this.query=R;
if(!P&&!O){this.trigger("queryChanged",this.query)
}else{if(!P&&Q){this.trigger("whitespaceChanged",this.query)
}}},bind:function(){var R=this,S,O,Q,P;
S=j.bind(this._onBlur,this);
O=j.bind(this._onFocus,this);
Q=j.bind(this._onKeydown,this);
P=j.bind(this._onInput,this);
this.$input.on("blur.tt",S).on("focus.tt",O).on("keydown.tt",Q);
if(!j.isMsie()||j.isMsie()>9){this.$input.on("input.tt",P)
}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(T){if(K[T.which||T.keyCode]){return
}j.defer(j.bind(R._onInput,R,T))
})
}return this
},focus:function B(){this.$input.focus()
},blur:function H(){this.$input.blur()
},getLangDir:function F(){return this.dir
},getQuery:function D(){return this.query||""
},setQuery:function C(P,O){this.setInputValue(P);
this._setQuery(P,O)
},hasQueryChangedSinceLastFocus:function I(){return this.query!==this.queryWhenFocused
},getInputValue:function t(){return this.$input.val()
},setInputValue:function v(O){this.$input.val(O);
this.clearHintIfInvalid();
this._checkLanguageDirection()
},resetInputValue:function r(){this.setInputValue(this.query)
},getHint:function p(){return this.$hint.val()
},setHint:function J(O){this.$hint.val(O)
},clearHint:function y(){this.setHint("")
},clearHintIfInvalid:function m(){var R,Q,O,P;
R=this.getInputValue();
Q=this.getHint();
O=R!==Q&&Q.indexOf(R)===0;
P=R!==""&&O&&!this.hasOverflow();
!P&&this.clearHint()
},hasFocus:function q(){return this.$input.is(":focus")
},hasOverflow:function E(){var O=this.$input.width()-2;
this.$overflowHelper.text(this.getInputValue());
return this.$overflowHelper.width()>=O
},isCursorAtEnd:function(){var P,Q,O;
P=this.$input.val().length;
Q=this.$input[0].selectionStart;
if(j.isNumber(Q)){return Q===P
}else{if(document.selection){O=document.selection.createRange();
O.moveStart("character",-P);
return P===O.text.length
}}return true
},destroy:function L(){this.$hint.off(".tt");
this.$input.off(".tt");
this.$overflowHelper.remove();
this.$hint=this.$input=this.$overflowHelper=d("<div>")
}});
return G;
function z(O){return d('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:O.css("font-family"),fontSize:O.css("font-size"),fontStyle:O.css("font-style"),fontVariant:O.css("font-variant"),fontWeight:O.css("font-weight"),wordSpacing:O.css("word-spacing"),letterSpacing:O.css("letter-spacing"),textIndent:O.css("text-indent"),textRendering:O.css("text-rendering"),textTransform:O.css("text-transform")}).insertAfter(O)
}function w(P,O){return G.normalizeQuery(P)===G.normalizeQuery(O)
}function A(O){return O.altKey||O.ctrlKey||O.metaKey||O.shiftKey
}}();
var a=function(){var x,A;
x={val:"tt-selectable-display",obj:"tt-selectable-object"};
A=j.getIdGenerator();
function I(K,J){K=K||{};
K.templates=K.templates||{};
K.templates.notFound=K.templates.notFound||K.templates.empty;
if(!K.source){d.error("missing source")
}if(!K.node){d.error("missing node")
}if(K.name&&!p(K.name)){d.error("invalid dataset name: "+K.name)
}J.mixin(this);
this.highlight=!!K.highlight;
this.name=K.name||A();
this.limit=K.limit||5;
this.displayFn=z(K.display||K.displayKey);
this.templates=q(K.templates,this.displayFn);
this.source=K.source.__ttAdapter?K.source.__ttAdapter():K.source;
this.async=j.isUndefined(K.async)?this.source.length>2:!!K.async;
this._resetLastSuggestion();
this.$el=d(K.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)
}I.extractData=function G(K){var J=d(K);
if(J.data(x.obj)){return{val:J.data(x.val)||"",obj:J.data(x.obj)||null}
}return null
};
j.mixin(I.prototype,l,{_overwrite:function n(K,J){J=J||[];
if(J.length){this._renderSuggestions(K,J)
}else{if(this.async&&this.templates.pending){this._renderPending(K)
}else{if(!this.async&&this.templates.notFound){this._renderNotFound(K)
}else{this._empty()
}}}this.trigger("rendered",this.name,J,false)
},_append:function E(K,J){J=J||[];
if(J.length&&this.$lastSuggestion.length){this._appendSuggestions(K,J)
}else{if(J.length){this._renderSuggestions(K,J)
}else{if(!this.$lastSuggestion.length&&this.templates.notFound){this._renderNotFound(K)
}}}this.trigger("rendered",this.name,J,true)
},_renderSuggestions:function y(K,J){var L;
L=this._getSuggestionsFragment(K,J);
this.$lastSuggestion=L.children().last();
this.$el.html(L).prepend(this._getHeader(K,J)).append(this._getFooter(K,J))
},_appendSuggestions:function o(K,J){var M,L;
M=this._getSuggestionsFragment(K,J);
L=M.children().last();
this.$lastSuggestion.after(M);
this.$lastSuggestion=L
},_renderPending:function s(K){var J=this.templates.pending;
this._resetLastSuggestion();
J&&this.$el.html(J({query:K,dataset:this.name}))
},_renderNotFound:function D(K){var J=this.templates.notFound;
this._resetLastSuggestion();
J&&this.$el.html(J({query:K,dataset:this.name}))
},_empty:function t(){this.$el.empty();
this._resetLastSuggestion()
},_getSuggestionsFragment:function m(N,J){var L=this,K;
K=document.createDocumentFragment();
j.each(J,function M(O){var Q,P;
P=L._injectQuery(N,O);
Q=d(L.templates.suggestion(P)).data(x.obj,O).data(x.val,L.displayFn(O)).addClass(L.classes.suggestion+" "+L.classes.selectable);
K.appendChild(Q[0])
});
this.highlight&&b({className:this.classes.highlight,node:K,pattern:N});
return d(K)
},_getFooter:function v(K,J){return this.templates.footer?this.templates.footer({query:K,suggestions:J,dataset:this.name}):null
},_getHeader:function C(K,J){return this.templates.header?this.templates.header({query:K,suggestions:J,dataset:this.name}):null
},_resetLastSuggestion:function u(){this.$lastSuggestion=d()
},_injectQuery:function H(J,K){return j.isObject(K)?j.mixin({_query:J},K):K
},update:function r(P){var O=this,K=false,J=false,Q=0;
this.cancel();
this.cancel=function N(){K=true;
O.cancel=d.noop;
O.async&&O.trigger("asyncCanceled",P)
};
this.source(P,M,L);
!J&&M([]);
function M(R){if(J){return
}J=true;
R=(R||[]).slice(0,O.limit);
Q=R.length;
O._overwrite(P,R);
if(Q<O.limit&&O.async){O.trigger("asyncRequested",P)
}}function L(R){R=R||[];
if(!K&&Q<O.limit){O.cancel=d.noop;
Q+=R.length;
O._append(P,R.slice(0,O.limit-Q));
O.async&&O.trigger("asyncReceived",P)
}}},cancel:d.noop,clear:function B(){this._empty();
this.cancel();
this.trigger("cleared")
},isEmpty:function w(){return this.$el.is(":empty")
},destroy:function F(){this.$el=d("<div>")
}});
return I;
function z(J){J=J||j.stringify;
return j.isFunction(J)?J:K;
function K(L){return L[J]
}}function q(K,L){return{notFound:K.notFound&&j.templatify(K.notFound),pending:K.pending&&j.templatify(K.pending),header:K.header&&j.templatify(K.header),footer:K.footer&&j.templatify(K.footer),suggestion:K.suggestion||J};
function J(M){return d("<div>").text(L(M))
}}function p(J){return/^[_a-zA-Z0-9-]+$/.test(J)
}}();
var e=function(){function o(K,H){var I=this;
K=K||{};
if(!K.node){d.error("node is required")
}H.mixin(this);
this.$node=d(K.node);
this.query=null;
this.datasets=j.map(K.datasets,J);
function J(M){var L=I.$node.find(M.node).first();
M.node=L.length?L:d("<div>").appendTo(I.$node);
return new a(M,H)
}}j.mixin(o.prototype,l,{_onSelectableClick:function A(H){this.trigger("selectableClicked",d(H.currentTarget))
},_onRendered:function n(J,K,H,I){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());
this.trigger("datasetRendered",K,H,I)
},_onCleared:function C(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());
this.trigger("datasetCleared")
},_propagate:function y(){this.trigger.apply(this,arguments)
},_allDatasetsEmpty:function p(){return j.every(this.datasets,H);
function H(I){return I.isEmpty()
}},_getSelectables:function D(){return this.$node.find(this.selectors.selectable)
},_removeCursor:function v(){var H=this.getActiveSelectable();
H&&H.removeClass(this.classes.cursor)
},_ensureVisible:function B(K){var H,J,I,L;
H=K.position().top;
J=H+K.outerHeight(true);
I=this.$node.scrollTop();
L=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10);
if(H<0){this.$node.scrollTop(I+H)
}else{if(L<J){this.$node.scrollTop(I+(J-L))
}}},bind:function(){var I=this,H;
H=j.bind(this._onSelectableClick,this);
this.$node.on("click.tt",this.selectors.selectable,H);
j.each(this.datasets,function(J){J.onSync("asyncRequested",I._propagate,I).onSync("asyncCanceled",I._propagate,I).onSync("asyncReceived",I._propagate,I).onSync("rendered",I._onRendered,I).onSync("cleared",I._onCleared,I)
});
return this
},isOpen:function z(){return this.$node.hasClass(this.classes.open)
},open:function w(){this.$node.addClass(this.classes.open)
},close:function x(){this.$node.removeClass(this.classes.open);
this._removeCursor()
},setLanguageDirection:function G(H){this.$node.attr("dir",H)
},selectableRelativeToCursor:function m(L){var J,I,K,H;
I=this.getActiveSelectable();
J=this._getSelectables();
K=I?J.index(I):-1;
H=K+L;
H=(H+1)%(J.length+1)-1;
H=H<-1?J.length-1:H;
return H===-1?null:J.eq(H)
},setCursor:function F(H){this._removeCursor();
if(H=H&&H.first()){H.addClass(this.classes.cursor);
this._ensureVisible(H)
}},getSelectableData:function s(H){return H&&H.length?a.extractData(H):null
},getActiveSelectable:function r(){var H=this._getSelectables().filter(this.selectors.cursor).first();
return H.length?H:null
},getTopSelectable:function u(){var H=this._getSelectables().first();
return H.length?H:null
},update:function q(I){var H=I!==this.query;
if(H){this.query=I;
j.each(this.datasets,J)
}return H;
function J(K){K.update(I)
}},empty:function t(){j.each(this.datasets,H);
this.query=null;
this.$node.addClass(this.classes.empty);
function H(I){I.clear()
}},destroy:function E(){this.$node.off(".tt");
this.$node=d("<div>");
j.each(this.datasets,H);
function H(I){I.destroy()
}}});
return o
}();
var c=function(){var v=e.prototype;
function p(){e.apply(this,[].slice.call(arguments,0))
}j.mixin(p.prototype,e.prototype,{open:function q(){!this._allDatasetsEmpty()&&this._show();
return v.open.apply(this,[].slice.call(arguments,0))
},close:function u(){this._hide();
return v.close.apply(this,[].slice.call(arguments,0))
},_onRendered:function o(){if(this._allDatasetsEmpty()){this._hide()
}else{this.isOpen()&&this._show()
}return v._onRendered.apply(this,[].slice.call(arguments,0))
},_onCleared:function m(){if(this._allDatasetsEmpty()){this._hide()
}else{this.isOpen()&&this._show()
}return v._onCleared.apply(this,[].slice.call(arguments,0))
},setLanguageDirection:function n(s){this.$node.css(s==="ltr"?this.css.ltr:this.css.rtl);
return v.setLanguageDirection.apply(this,[].slice.call(arguments,0))
},_hide:function r(){this.$node.hide()
},_show:function t(){this.$node.css("display","block")
}});
return p
}();
var h=function(){function D(Z,aa){var ai,ad,ac,af,ae,ah,ak,ag,al,aj,ab;
Z=Z||{};
if(!Z.input){d.error("missing input")
}if(!Z.menu){d.error("missing menu")
}if(!Z.eventBus){d.error("missing event bus")
}aa.mixin(this);
this.eventBus=Z.eventBus;
this.minLength=j.isNumber(Z.minLength)?Z.minLength:1;
this.input=Z.input;
this.menu=Z.menu;
this.enabled=true;
this.active=false;
this.input.hasFocus()&&this.activate();
this.dir=this.input.getLangDir();
this._hacks();
this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this);
ai=U(this,"activate","open","_onFocused");
ad=U(this,"deactivate","_onBlurred");
ac=U(this,"isActive","isOpen","_onEnterKeyed");
af=U(this,"isActive","isOpen","_onTabKeyed");
ae=U(this,"isActive","_onEscKeyed");
ah=U(this,"isActive","open","_onUpKeyed");
ak=U(this,"isActive","open","_onDownKeyed");
ag=U(this,"isActive","isOpen","_onLeftKeyed");
al=U(this,"isActive","isOpen","_onRightKeyed");
aj=U(this,"_openIfActive","_onQueryChanged");
ab=U(this,"_openIfActive","_onWhitespaceChanged");
this.input.bind().onSync("focused",ai,this).onSync("blurred",ad,this).onSync("enterKeyed",ac,this).onSync("tabKeyed",af,this).onSync("escKeyed",ae,this).onSync("upKeyed",ah,this).onSync("downKeyed",ak,this).onSync("leftKeyed",ag,this).onSync("rightKeyed",al,this).onSync("queryChanged",aj,this).onSync("whitespaceChanged",ab,this).onSync("langDirChanged",this._onLangDirChanged,this)
}j.mixin(D.prototype,{_hacks:function L(){var aa,Z;
aa=this.input.$input||d("<div>");
Z=this.menu.$node||d("<div>");
aa.on("blur.tt",function(ac){var ae,ad,ab;
ae=document.activeElement;
ad=Z.is(ae);
ab=Z.has(ae).length>0;
if(j.isMsie()&&(ad||ab)){ac.preventDefault();
ac.stopImmediatePropagation();
j.defer(function(){aa.focus()
})
}});
Z.on("mousedown.tt",function(ab){ab.preventDefault()
})
},_onSelectableClicked:function A(aa,Z){this.select(Z)
},_onDatasetCleared:function w(){this._updateHint()
},_onDatasetRendered:function n(ab,ac,Z,aa){this._updateHint();
this.eventBus.trigger("render",Z,aa,ac)
},_onAsyncRequested:function C(Z,ab,aa){this.eventBus.trigger("asyncrequest",aa,ab)
},_onAsyncCanceled:function H(Z,ab,aa){this.eventBus.trigger("asynccancel",aa,ab)
},_onAsyncReceived:function p(Z,ab,aa){this.eventBus.trigger("asyncreceive",aa,ab)
},_onFocused:function W(){this._minLengthMet()&&this.menu.update(this.input.getQuery())
},_onBlurred:function z(){if(this.input.hasQueryChangedSinceLastFocus()){this.eventBus.trigger("change",this.input.getQuery())
}},_onEnterKeyed:function s(ab,aa){var Z;
if(Z=this.menu.getActiveSelectable()){this.select(Z)&&aa.preventDefault()
}},_onTabKeyed:function v(ab,aa){var Z;
if(Z=this.menu.getActiveSelectable()){this.select(Z)&&aa.preventDefault()
}else{if(Z=this.menu.getTopSelectable()){this.autocomplete(Z)&&aa.preventDefault()
}}},_onEscKeyed:function I(){this.close()
},_onUpKeyed:function Q(){this.moveCursor(-1)
},_onDownKeyed:function V(){this.moveCursor(+1)
},_onLeftKeyed:function J(){if(this.dir==="rtl"&&this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable())
}},_onRightKeyed:function K(){if(this.dir==="ltr"&&this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable())
}},_onQueryChanged:function y(aa,Z){this._minLengthMet(Z)?this.menu.update(Z):this.menu.empty()
},_onWhitespaceChanged:function Y(){this._updateHint()
},_onLangDirChanged:function T(aa,Z){if(this.dir!==Z){this.dir=Z;
this.menu.setLanguageDirection(Z)
}},_openIfActive:function S(){this.isActive()&&this.open()
},_minLengthMet:function X(Z){Z=j.isString(Z)?Z:this.input.getQuery()||"";
return Z.length>=this.minLength
},_updateHint:function F(){var aa,ae,af,ad,ac,Z,ab;
aa=this.menu.getTopSelectable();
ae=this.menu.getSelectableData(aa);
af=this.input.getInputValue();
if(ae&&!j.isBlankString(af)&&!this.input.hasOverflow()){ad=g.normalizeQuery(af);
ac=j.escapeRegExChars(ad);
Z=new RegExp("^(?:"+ac+")(.+$)","i");
ab=Z.exec(ae.val);
ab&&this.input.setHint(af+ab[1])
}else{this.input.clearHint()
}},isEnabled:function P(){return this.enabled
},enable:function u(){this.enabled=true
},disable:function t(){this.enabled=false
},isActive:function R(){return this.active
},activate:function x(){if(this.isActive()){return true
}else{if(!this.isEnabled()||this.eventBus.before("active")){return false
}else{this.active=true;
this.eventBus.trigger("active");
return true
}}},deactivate:function q(){if(!this.isActive()){return true
}else{if(this.eventBus.before("idle")){return false
}else{this.active=false;
this.close();
this.eventBus.trigger("idle");
return true
}}},isOpen:function o(){return this.menu.isOpen()
},open:function E(){if(!this.isOpen()&&!this.eventBus.before("open")){this.menu.open();
this._updateHint();
this.eventBus.trigger("open")
}return this.isOpen()
},close:function M(){if(this.isOpen()&&!this.eventBus.before("close")){this.menu.close();
this.input.clearHint();
this.input.resetInputValue();
this.eventBus.trigger("close")
}return !this.isOpen()
},setVal:function G(Z){this.input.setQuery(j.toStr(Z))
},getVal:function B(){return this.input.getQuery()
},select:function O(Z){var aa=this.menu.getSelectableData(Z);
if(aa&&!this.eventBus.before("select",aa.obj)){this.input.setQuery(aa.val,true);
this.eventBus.trigger("select",aa.obj);
this.close();
return true
}return false
},autocomplete:function r(Z){var ab,aa,ac;
ab=this.input.getQuery();
aa=this.menu.getSelectableData(Z);
ac=aa&&ab!==aa.val;
if(ac&&!this.eventBus.before("autocomplete",aa.obj)){this.input.setQuery(aa.val);
this.eventBus.trigger("autocomplete",aa.obj);
return true
}return false
},moveCursor:function m(ae){var ac,Z,ab,ad,aa;
ac=this.input.getQuery();
Z=this.menu.selectableRelativeToCursor(ae);
ab=this.menu.getSelectableData(Z);
ad=ab?ab.obj:null;
aa=this._minLengthMet()&&this.menu.update(ac);
if(!aa&&!this.eventBus.before("cursorchange",ad)){this.menu.setCursor(Z);
if(ab){this.input.setInputValue(ab.val)
}else{this.input.resetInputValue();
this._updateHint()
}this.eventBus.trigger("cursorchange",ad);
return true
}return false
},destroy:function N(){this.input.destroy();
this.menu.destroy()
}});
return D;
function U(Z){var aa=[].slice.call(arguments,1);
return function(){var ab=[].slice.call(arguments);
j.each(aa,function(ac){return Z[ac].apply(Z,ab)
})
}
}}();
(function(){var m,y,E;
m=d.fn.typeahead;
y={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"};
E={initialize:function n(O,N){var M;
N=j.isArray(N)?N:[].slice.call(arguments,1);
O=O||{};
M=k(O.classNames);
return this.each(L);
function L(){var W,V,T,P,S,Z,Y,X,Q,U,R;
j.each(N,function(aa){aa.highlight=!!O.highlight
});
W=d(this);
V=d(M.html.wrapper);
T=H(O.hint);
P=H(O.menu);
S=O.hint!==false&&!T;
Z=O.menu!==false&&!P;
S&&(T=s(W,M));
Z&&(P=d(M.html.menu).css(M.css.menu));
T&&T.val("");
W=C(W,M);
if(S||Z){V.css(M.css.wrapper);
W.css(S?M.css.input:M.css.inputWithNoHint);
W.wrap(V).parent().prepend(S?T:null).append(Z?P:null)
}R=Z?c:e;
Y=new f({el:W});
X=new g({hint:T,input:W},M);
Q=new R({node:P,datasets:N},M);
U=new h({input:X,menu:Q,eventBus:Y,minLength:O.minLength},M);
W.data(y.www,M);
W.data(y.typeahead,U)
}},isEnabled:function G(){var L;
t(this.first(),function(M){L=M.isEnabled()
});
return L
},enable:function w(){t(this,function(L){L.enable()
});
return this
},disable:function q(){t(this,function(L){L.disable()
});
return this
},isActive:function D(){var L;
t(this.first(),function(M){L=M.isActive()
});
return L
},activate:function r(){t(this,function(L){L.activate()
});
return this
},deactivate:function p(){t(this,function(L){L.deactivate()
});
return this
},isOpen:function A(){var L;
t(this.first(),function(M){L=M.isOpen()
});
return L
},open:function x(){t(this,function(L){L.open()
});
return this
},close:function z(){t(this,function(L){L.close()
});
return this
},select:function B(M){var N=false,L=d(M);
t(this.first(),function(O){N=O.select(L)
});
return N
},autocomplete:function I(M){var N=false,L=d(M);
t(this.first(),function(O){N=O.autocomplete(L)
});
return N
},moveCursor:function u(M){var L=false;
t(this.first(),function(N){L=N.moveCursor(M)
});
return L
},val:function K(L){var M;
if(!arguments.length){t(this.first(),function(N){M=N.getVal()
});
return M
}else{t(this,function(N){N.setVal(L)
});
return this
}},destroy:function F(){t(this,function(L,M){o(M);
L.destroy()
});
return this
}};
d.fn.typeahead=function(L){if(E[L]){return E[L].apply(this,[].slice.call(arguments,1))
}else{return E.initialize.apply(this,arguments)
}};
d.fn.typeahead.noConflict=function J(){d.fn.typeahead=m;
return this
};
function t(M,L){M.each(function(){var O=d(this),N;
(N=O.data(y.typeahead))&&L(N,O)
})
}function s(M,L){return M.clone().addClass(L.classes.hint).removeData().css(L.css.hint).css(v(M)).prop("readonly",true).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})
}function C(N,L){N.data(y.attrs,{dir:N.attr("dir"),autocomplete:N.attr("autocomplete"),spellcheck:N.attr("spellcheck"),style:N.attr("style")});
N.addClass(L.classes.input).attr({autocomplete:"off",spellcheck:false});
try{!N.attr("dir")&&N.attr("dir","auto")
}catch(M){}return N
}function v(L){return{backgroundAttachment:L.css("background-attachment"),backgroundClip:L.css("background-clip"),backgroundColor:L.css("background-color"),backgroundImage:L.css("background-image"),backgroundOrigin:L.css("background-origin"),backgroundPosition:L.css("background-position"),backgroundRepeat:L.css("background-repeat"),backgroundSize:L.css("background-size")}
}function o(N){var L,M;
L=N.data(y.www);
M=N.parent().filter(L.selectors.wrapper);
j.each(N.data(y.attrs),function(P,O){j.isUndefined(P)?N.removeAttr(O):N.attr(O,P)
});
N.removeData(y.typeahead).removeData(y.www).removeData(y.attr).removeClass(L.classes.input);
if(M.length){N.detach().insertAfter(M);
M.remove()
}}function H(N){var M,L;
M=j.isJQuery(N)||j.isElement(N);
L=M?d(N).first():[];
return L.length?L:null
}})()
});
(function(){var p,r,H,k,w,z,G,l,u,n,A,m,a,B,c,f,d,q,C,E,e,s,j,F,D,t,b,y,v,h,o,g,x=[].slice;
d='<span class="odometer-value"></span>';
B='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+d+"</span></span>";
k='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+B+"</span></span>";
G='<span class="odometer-formatting-mark"></span>';
H="(,ddd).dd";
l=/^\(?([^)]*)\)?(?:(.)(d+))?$/;
u=30;
z=2000;
p=20;
n=2;
w=0.5;
A=1000/u;
r=1000/p;
c="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
D=document.createElement("div").style;
f=(D.transition!=null)||(D.webkitTransition!=null)||(D.mozTransition!=null)||(D.oTransition!=null);
j=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;
m=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
C=function(I){var J;
J=document.createElement("div");
J.innerHTML=I;
return J.children[0]
};
s=function(J,I){return J.className=J.className.replace(new RegExp("(^| )"+(I.split(" ").join("|"))+"( |$)","gi")," ")
};
q=function(J,I){s(J,I);
return J.className+=" "+I
};
t=function(K,J){var I;
if(document.createEvent!=null){I=document.createEvent("HTMLEvents");
I.initEvent(J,true,true);
return K.dispatchEvent(I)
}};
e=function(){var J,I;
return(J=(I=window.performance)!=null?typeof I.now==="function"?I.now():void 0:void 0)!=null?J:+(new Date)
};
F=function(J,I){if(I==null){I=0
}if(!I){return Math.round(J)
}J*=Math.pow(10,I);
J+=0.5;
J=Math.floor(J);
return J/=Math.pow(10,I)
};
b=function(I){if(I<0){return Math.ceil(I)
}else{return Math.floor(I)
}};
E=function(I){return I-F(I)
};
v=false;
(y=function(){var M,L,J,K,I;
if(v){return
}if(window.jQuery!=null){v=true;
K=["html","text"];
I=[];
for(L=0,J=K.length;
L<J;
L++){M=K[L];
I.push((function(O){var N;
N=window.jQuery.fn[O];
return window.jQuery.fn[O]=function(Q){var P;
if((Q==null)||(((P=this[0])!=null?P.odometer:void 0)==null)){return N.apply(this,arguments)
}return this[0].odometer.update(Q)
}
})(M))
}return I
}})();
setTimeout(y,0);
a=(function(){function I(V){var P,L,S,U,T,M,Q,N,K,J,O=this;
this.options=V;
this.el=this.options.el;
if(this.el.odometer!=null){return this.el.odometer
}this.el.odometer=this;
N=I.options;
for(L in N){U=N[L];
if(this.options[L]==null){this.options[L]=U
}}if((T=this.options).duration==null){T.duration=z
}this.MAX_VALUES=((this.options.duration/A)/n)|0;
this.resetFormat();
this.value=this.cleanValue((K=this.options.value)!=null?K:"");
this.renderInside();
this.render();
try{J=["innerHTML","innerText","textContent"];
for(M=0,Q=J.length;
M<Q;
M++){S=J[M];
if(this.el[S]!=null){(function(W){return Object.defineProperty(O.el,W,{get:function(){var X;
if(W==="innerHTML"){return O.inside.outerHTML
}else{return(X=O.inside.innerText)!=null?X:O.inside.textContent
}},set:function(X){return O.update(X)
}})
})(S)
}}}catch(R){P=R;
this.watchForMutations()
}this
}I.prototype.renderInside=function(){this.inside=document.createElement("div");
this.inside.className="odometer-inside";
this.el.innerHTML="";
return this.el.appendChild(this.inside)
};
I.prototype.watchForMutations=function(){var J,L=this;
if(m==null){return
}try{if(this.observer==null){this.observer=new m(function(M){var N;
N=L.el.innerText;
L.renderInside();
L.render(L.value);
return L.update(N)
})
}this.watchMutations=true;
return this.startWatchingMutations()
}catch(K){J=K
}};
I.prototype.startWatchingMutations=function(){if(this.watchMutations){return this.observer.observe(this.el,{childList:true})
}};
I.prototype.stopWatchingMutations=function(){var J;
return(J=this.observer)!=null?J.disconnect():void 0
};
I.prototype.cleanValue=function(K){var J;
if(typeof K==="string"){K=K.replace((J=this.format.radix)!=null?J:".","<radix>");
K=K.replace(/[.,]/g,"");
K=K.replace("<radix>",".");
K=parseFloat(K,10)||0
}return F(K,this.format.precision)
};
I.prototype.bindTransitionEnd=function(){var M,L,O,K,N,J,P=this;
if(this.transitionEndBound){return
}this.transitionEndBound=true;
L=false;
N=c.split(" ");
J=[];
for(O=0,K=N.length;
O<K;
O++){M=N[O];
J.push(this.el.addEventListener(M,function(){if(L){return true
}L=true;
setTimeout(function(){P.render();
L=false;
return t(P.el,"odometerdone")
},0);
return true
},false))
}return J
};
I.prototype.resetFormat=function(){var O,Q,L,K,M,P,N,J;
O=(N=this.options.format)!=null?N:H;
O||(O="d");
L=l.exec(O);
if(!L){throw new Error("Odometer: Unparsable digit format")
}J=L.slice(1,4),P=J[0],M=J[1],Q=J[2];
K=(Q!=null?Q.length:void 0)||0;
return this.format={repeating:P,radix:M,precision:K}
};
I.prototype.render=function(T){var K,V,R,Q,N,P,U,M,L,S,J,O;
if(T==null){T=this.value
}this.stopWatchingMutations();
this.resetFormat();
this.inside.innerHTML="";
P=this.options.theme;
K=this.el.className.split(" ");
N=[];
for(M=0,S=K.length;
M<S;
M++){V=K[M];
if(!V.length){continue
}if(Q=/^odometer-theme-(.+)$/.exec(V)){P=Q[1];
continue
}if(/^odometer(-|$)/.test(V)){continue
}N.push(V)
}N.push("odometer");
if(!f){N.push("odometer-no-transitions")
}if(P){N.push("odometer-theme-"+P)
}else{N.push("odometer-auto-theme")
}this.el.className=N.join(" ");
this.ribbons={};
this.digits=[];
U=!this.format.precision||!E(T)||false;
O=T.toString().split("").reverse();
for(L=0,J=O.length;
L<J;
L++){R=O[L];
if(R==="."){U=true
}this.addDigit(R,U)
}return this.startWatchingMutations()
};
I.prototype.update=function(K){var J,L=this;
K=this.cleanValue(K);
if(!(J=K-this.value)){return
}s(this.el,"odometer-animating-up odometer-animating-down odometer-animating");
if(J>0){q(this.el,"odometer-animating-up")
}else{q(this.el,"odometer-animating-down")
}this.stopWatchingMutations();
this.animate(K);
this.startWatchingMutations();
setTimeout(function(){L.el.offsetHeight;
return q(L.el,"odometer-animating")
},0);
return this.value=K
};
I.prototype.renderDigit=function(){return C(k)
};
I.prototype.insertDigit=function(K,J){if(J!=null){return this.inside.insertBefore(K,J)
}else{if(!this.inside.children.length){return this.inside.appendChild(K)
}else{return this.inside.insertBefore(K,this.inside.children[0])
}}};
I.prototype.addSpacer=function(L,M,K){var J;
J=C(G);
J.innerHTML=L;
if(K){q(J,K)
}return this.insertDigit(J,M)
};
I.prototype.addDigit=function(M,N){var K,O,J,L;
if(N==null){N=true
}if(M==="-"){return this.addSpacer(M,null,"odometer-negation-mark")
}if(M==="."){return this.addSpacer((L=this.format.radix)!=null?L:".",null,"odometer-radix-mark")
}if(N){J=false;
while(true){if(!this.format.repeating.length){if(J){throw new Error("Bad odometer format without digits")
}this.resetFormat();
J=true
}K=this.format.repeating[this.format.repeating.length-1];
this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1);
if(K==="d"){break
}this.addSpacer(K)
}}O=this.renderDigit();
O.querySelector(".odometer-value").innerHTML=M;
this.digits.push(O);
return this.insertDigit(O)
};
I.prototype.animate=function(J){if(!f||this.options.animation==="count"){return this.animateCount(J)
}else{return this.animateSlide(J)
}};
I.prototype.animateCount=function(M){var N,L,K,P,J,O=this;
if(!(L=+M-this.value)){return
}P=K=e();
N=this.value;
return(J=function(){var S,R,Q;
if((e()-P)>O.options.duration){O.value=M;
O.render();
t(O.el,"odometerdone");
return
}S=e()-K;
if(S>r){K=e();
Q=S/O.options.duration;
R=L*Q;
N+=R;
O.render(Math.round(N))
}if(j!=null){return j(J)
}else{return setTimeout(J,r)
}})()
};
I.prototype.getDigitCount=function(){var M,J,O,L,N,K;
L=1<=arguments.length?x.call(arguments,0):[];
for(M=N=0,K=L.length;
N<K;
M=++N){O=L[M];
L[M]=Math.abs(O)
}J=Math.max.apply(Math,L);
return Math.ceil(Math.log(J+1)/Math.log(10))
};
I.prototype.getFractionalDigitCount=function(){var L,P,O,N,K,M,J;
K=1<=arguments.length?x.call(arguments,0):[];
P=/^\-?\d*\.(\d*?)0*$/;
for(L=M=0,J=K.length;
M<J;
L=++M){N=K[L];
K[L]=N.toString();
O=P.exec(K[L]);
if(O==null){K[L]=0
}else{K[L]=O[1].length
}}return Math.max.apply(Math,K)
};
I.prototype.resetDigits=function(){this.digits=[];
this.ribbons=[];
this.inside.innerHTML="";
return this.resetFormat()
};
I.prototype.animateSlide=function(W){var af,P,X,ah,U,aa,Q,aj,Y,V,ac,ad,ab,T,ae,Z,R,ag,O,M,L,K,ai,al,ak,J,S,N;
Z=this.value;
aj=this.getFractionalDigitCount(Z,W);
if(aj){W=W*Math.pow(10,aj);
Z=Z*Math.pow(10,aj)
}if(!(X=W-Z)){return
}this.bindTransitionEnd();
ah=this.getDigitCount(Z,W);
U=[];
af=0;
for(ac=O=0;
0<=ah?O<ah:O>ah;
ac=0<=ah?++O:--O){R=b(Z/Math.pow(10,ah-ac-1));
Q=b(W/Math.pow(10,ah-ac-1));
aa=Q-R;
if(Math.abs(aa)>this.MAX_VALUES){V=[];
ad=aa/(this.MAX_VALUES+this.MAX_VALUES*af*w);
P=R;
while((aa>0&&P<Q)||(aa<0&&P>Q)){V.push(Math.round(P));
P+=ad
}if(V[V.length-1]!==Q){V.push(Q)
}af++
}else{V=(function(){N=[];
for(var am=R;
R<=Q?am<=Q:am>=Q;
R<=Q?am++:am--){N.push(am)
}return N
}).apply(this)
}for(ac=L=0,ai=V.length;
L<ai;
ac=++L){Y=V[ac];
V[ac]=Math.abs(Y%10)
}U.push(V)
}this.resetDigits();
S=U.reverse();
for(ac=K=0,al=S.length;
K<al;
ac=++K){V=S[ac];
if(!this.digits[ac]){this.addDigit(" ",ac>=aj)
}if((ag=this.ribbons)[ac]==null){ag[ac]=this.digits[ac].querySelector(".odometer-ribbon-inner")
}this.ribbons[ac].innerHTML="";
if(X<0){V=V.reverse()
}for(ab=J=0,ak=V.length;
J<ak;
ab=++J){Y=V[ab];
ae=document.createElement("div");
ae.className="odometer-value";
ae.innerHTML=Y;
this.ribbons[ac].appendChild(ae);
if(ab===V.length-1){q(ae,"odometer-last-value")
}if(ab===0){q(ae,"odometer-first-value")
}}}if(R<0){this.addDigit("-")
}T=this.inside.querySelector(".odometer-radix-mark");
if(T!=null){T.parent.removeChild(T)
}if(aj){return this.addSpacer(this.format.radix,this.digits[aj-1],"odometer-radix-mark")
}};
return I
})();
a.options=(o=window.odometerOptions)!=null?o:{};
setTimeout(function(){var L,K,M,I,J;
if(window.odometerOptions){I=window.odometerOptions;
J=[];
for(L in I){K=I[L];
J.push((M=a.options)[L]!=null?(M=a.options)[L]:M[L]=K)
}return J
}},0);
a.init=function(){var L,N,M,K,I,J;
if(document.querySelectorAll==null){return
}N=document.querySelectorAll(a.options.selector||".odometer");
J=[];
for(M=0,K=N.length;
M<K;
M++){L=N[M];
J.push(L.odometer=new a({el:L,value:(I=L.innerText)!=null?I:L.textContent}))
}return J
};
if((((g=document.documentElement)!=null?g.doScroll:void 0)!=null)&&(document.createEventObject!=null)){h=document.onreadystatechange;
document.onreadystatechange=function(){if(document.readyState==="complete"&&a.options.auto!==false){a.init()
}return h!=null?h.apply(this,arguments):void 0
}
}else{document.addEventListener("DOMContentLoaded",function(){if(a.options.auto!==false){return a.init()
}},false)
}if(typeof define==="function"&&define.amd){define(["jquery"],function(){return a
})
}else{if(typeof exports===!"undefined"){module.exports=a
}else{window.Odometer=a
}}}).call(this);