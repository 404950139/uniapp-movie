var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-block hot data-v-7f052e05'])
Z([3,'hot-title-wrapper data-v-7f052e05'])
Z([3,'hot-ico data-v-7f052e05'])
Z([[7],[3,'iconSrc']])
Z([3,'hot-title data-v-7f052e05'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'iconTitle']]],[1,'']]])
Z([[7],[3,'hotSuper']])
Z([3,'hot-scroll data-v-7f052e05'])
Z([3,'true'])
Z([3,'__i0__'])
Z([3,'hotSuper'])
Z([[7],[3,'hotSuperList']])
Z([3,'id'])
Z([3,'__e'])
Z([3,'single-poster data-v-7f052e05'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'turnMovie']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotSuperList']],[1,'id']],[[6],[[7],[3,'hotSuper']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'poster-wrapper data-v-7f052e05'])
Z([3,'poster data-v-7f052e05'])
Z([[6],[[7],[3,'hotSuper']],[3,'cover']])
Z([3,'movie-name data-v-7f052e05'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'hotSuper']],[3,'name']]],[1,'']]])
Z([3,'__l'])
Z([3,'data-v-7f052e05'])
Z([[6],[[7],[3,'hotSuper']],[3,'score']])
Z([[2,'+'],[1,'1-'],[[7],[3,'__i0__']]])
Z([[7],[3,'hotTrailer']])
Z([3,'hot-movies data-v-7f052e05'])
Z([3,'index'])
Z([3,'trailer'])
Z([[7],[3,'hotTrailerList']])
Z(z[27])
Z(z[13])
Z([3,'hot-movie-single data-v-7f052e05'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'meIsPlaying']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailer']],[3,'id']])
Z(z[34])
Z([[6],[[7],[3,'trailer']],[3,'poster']])
Z([[6],[[7],[3,'trailer']],[3,'trailer']])
Z([[7],[3,'guessUlike']])
Z([3,'guess-u-like data-v-7f052e05'])
Z(z[27])
Z([3,'guessU'])
Z([[7],[3,'guessUlikeList']])
Z(z[12])
Z([3,'single-like-movie data-v-7f052e05'])
Z([3,'like-movie data-v-7f052e05'])
Z([[6],[[7],[3,'guessU']],[3,'cover']])
Z([3,'movie-desc data-v-7f052e05'])
Z([3,'movie-title data-v-7f052e05'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guessU']],[3,'name']]],[1,'']]])
Z(z[21])
Z(z[22])
Z([[6],[[7],[3,'guessU']],[3,'score']])
Z([1,1])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'movie-info data-v-7f052e05'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guessU']],[3,'basicInfo']]],[1,'']]])
Z(z[55])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'guessU']],[3,'releaseDate']]],[1,'']]])
Z(z[21])
Z(z[22])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'movie-oper data-v-50214874'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praiseMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'praise-ico data-v-50214874'])
Z([3,'../../static/icos/praise.png'])
Z([3,'praise-me data-v-50214874'])
Z([3,'点赞'])
Z([[7],[3,'animationData']])
Z([3,'praise-me animation-opacity data-v-50214874'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-score-wrapper data-v-811d67ce'])
Z([3,'__i0__'])
Z([3,'yellow'])
Z([[7],[3,'yellowStart']])
Z([3,'star-ico data-v-811d67ce'])
Z([3,'../../static/icos/star-yellow.png'])
Z([3,'__i1__'])
Z([3,'gray'])
Z([[7],[3,'grayStart']])
Z(z[4])
Z([3,'../../static/icos/star-gray.png'])
Z([[7],[3,'showNum']])
Z([3,'movie-score data-v-811d67ce'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'score']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'carousel data-v-a707b520'])
Z([1,true])
Z(z[0])
Z([1,1000])
Z([3,'#ffffff'])
Z(z[1])
Z([1,3000])
Z([3,'__i0__'])
Z([3,'swiperImg'])
Z([[7],[3,'swiperImgList']])
Z([3,'id'])
Z([3,'data-v-a707b520'])
Z(z[11])
Z([[6],[[7],[3,'swiperImg']],[3,'image']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search-block data-v-ffebfb38'])
Z([3,'search-ico-wrapper data-v-ffebfb38'])
Z([3,'search-ico data-v-ffebfb38'])
Z([3,'../../static/icos/search.png'])
Z([3,'__e'])
Z([3,'search-text data-v-ffebfb38'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'searchMe']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索预告'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'black data-v-87f2b654'])
Z([3,'__e'])
Z([3,'cover data-v-87f2b654'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill'])
Z([3,'page-body uni-content-info'])
Z([3,'cropper-content'])
Z([[7],[3,'isShowImg']])
Z([3,'uni-corpper myDistance'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperInitW']]],[1,'px;height:']],[[7],[3,'cropperInitH']]],[1,'px;background:#000']])
Z([3,'uni-corpper-content'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px;left:']],[[7],[3,'cropperL']]],[1,'px;top:']],[[7],[3,'cropperT']]],[1,'px']])
Z([3,'myImage'])
Z([[7],[3,'imageSrc']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[7],[3,'cropperW']]],[1,'px;height:']],[[7],[3,'cropperH']]],[1,'px']])
Z([3,'__e'])
Z(z[11])
Z(z[11])
Z([3,'uni-corpper-crop-box'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'contentStartMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'contentMoveing']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'contentTouchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'left:'],[[7],[3,'cutL']]],[1,'px;top:']],[[7],[3,'cutT']]],[1,'px;right:']],[[7],[3,'cutR']]],[1,'px;bottom:']],[[7],[3,'cutB']]],[1,'px']])
Z([3,'uni-cropper-view-box'])
Z([3,'uni-cropper-dashed-h'])
Z([3,'uni-cropper-dashed-v'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-t'])
Z([3,'top'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-r'])
Z([3,'right'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-b'])
Z([3,'bottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-line-l'])
Z([3,'left'])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-t'])
Z(z[23])
Z(z[24])
Z([3,'uni-cropper-point point-tr'])
Z([3,'topTight'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-r'])
Z(z[28])
Z(z[24])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-rb'])
Z([3,'rightBottom'])
Z(z[24])
Z(z[11])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-b'])
Z(z[33])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'dragStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'dragMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'dragEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'uni-cropper-point point-bl'])
Z([3,'bottomLeft'])
Z(z[11])
Z(z[11])
Z([3,'uni-cropper-point point-l'])
Z(z[38])
Z(z[24])
Z([3,'uni-cropper-point point-lt'])
Z([3,'leftTop'])
Z([3,'footer-opertor'])
Z(z[11])
Z([3,'opertor-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[11])
Z(z[74])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getImageInfo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
Z([3,'myCanvas'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:absolute;border: 1px solid red; width:'],[[7],[3,'imageW']]],[1,'px;height:']],[[7],[3,'imageH']]],[1,'px;top:-9999px;left:-9999px;']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'index-swiper'])
Z([[7],[3,'swiperImgList']])
Z([3,'__l'])
Z([1,true])
Z([3,'../../static/icos/hot.png'])
Z([3,'热门超英'])
Z([3,'1'])
Z(z[3])
Z(z[4])
Z([3,'../../static/icos/interest.png'])
Z([3,'热门预告'])
Z([3,'2'])
Z(z[3])
Z([3,'vue-ref'])
Z([3,'gUlike'])
Z(z[4])
Z([3,'../../static/icos/guess-u-like.png'])
Z([3,'猜你喜欢'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-594b9bb4'])
Z([3,'header data-v-594b9bb4'])
Z([[7],[3,'userIsLogin']])
Z([3,'data-v-594b9bb4'])
Z([3,'face data-v-594b9bb4'])
Z([[6],[[7],[3,'userInfo']],[3,'faceImage']])
Z(z[3])
Z(z[4])
Z([3,'../../static/user.png'])
Z(z[2])
Z([3,'info-wrapper data-v-594b9bb4'])
Z([3,'nickname data-v-594b9bb4'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'userInfo']],[3,'nickname']]],[1,'']]])
Z([3,'nav-info data-v-594b9bb4'])
Z([a,[[2,'+'],[[2,'+'],[1,'ID: '],[[6],[[7],[3,'userInfo']],[3,'id']]],[1,'']]])
Z(z[3])
Z([3,'__e'])
Z([3,'nickname regist-login data-v-594b9bb4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'turnLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'注册/登录'])
Z(z[2])
Z(z[16])
Z([3,'set-wrapper data-v-594b9bb4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'setting']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'settings data-v-594b9bb4'])
Z([3,'../../static/icos/settings.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-6d88edf4'])
Z([3,'__e'])
Z([3,'data-v-6d88edf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block data-v-6d88edf4'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'dataChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'date'])
Z([3,'birthday data-v-6d88edf4'])
Z([a,[[7],[3,'birthday']]])
Z([3,'submitBtn data-v-6d88edf4'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-995ccdf4'])
Z([3,'pending-wapper data-v-995ccdf4'])
Z([3,'pending-face data-v-995ccdf4'])
Z([3,'face'])
Z([3,'scaleToFill'])
Z([[7],[3,'tempFace']])
Z([3,'notice data-v-995ccdf4'])
Z([3,'notice-words data-v-995ccdf4'])
Z([3,'* 请从相册中选择等比宽高的图片噢~'])
Z([3,'footer-opertor data-v-995ccdf4'])
Z([3,'__e'])
Z([3,'opertor-words data-v-995ccdf4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePendingFace']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'重新选择'])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认上传'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-3ea09be6'])
Z([3,'page-block info-list data-v-3ea09be6'])
Z([3,'__e'])
Z([3,'item-wrapper face-line-upbottom data-v-3ea09be6'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'operator']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'info-words data-v-3ea09be6'])
Z([3,'头像'])
Z([3,'right-wrapper data-v-3ea09be6'])
Z([3,'face data-v-3ea09be6'])
Z([[6],[[7],[3,'globalUser']],[3,'faceImage']])
Z([3,'arrow-block data-v-3ea09be6'])
Z([3,'arrow-ico data-v-3ea09be6'])
Z([3,'../../static/icos/left-gray-arrow.png'])
Z([3,'line-top data-v-3ea09be6'])
Z([3,'line data-v-3ea09be6'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyNicknam']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'昵称'])
Z(z[7])
Z([3,'gray-fields data-v-3ea09be6'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'nickname']]],[1,'']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifyBirthday']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'生日'])
Z(z[7])
Z(z[21])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'globalUser']],[3,'birthday']]],[1,'']]])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'modifySex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[5])
Z([3,'性别'])
Z(z[7])
Z(z[21])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,1]])
Z([3,'data-v-3ea09be6'])
Z([3,'男'])
Z([[2,'=='],[[6],[[7],[3,'globalUser']],[3,'sex']],[1,0]])
Z(z[49])
Z([3,'女'])
Z(z[49])
Z([3,'未选择'])
Z(z[10])
Z(z[11])
Z(z[12])
Z([3,'footer-wrapper data-v-3ea09be6'])
Z(z[2])
Z([3,'footer-words data-v-3ea09be6'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'cleanStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[2])
Z(z[61])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logOut']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'margin-top:10rpx;'])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-6f572f34'])
Z([3,'__e'])
Z([3,'data-v-6f572f34'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitNickname']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block data-v-6f572f34'])
Z([3,'margin-top:20rpx;'])
Z([3,'input data-v-6f572f34'])
Z([3,'10'])
Z([3,'nickname'])
Z([3,'请输入昵称'])
Z([3,'graywords'])
Z([3,'text'])
Z([[6],[[7],[3,'globalUser']],[3,'nickname']])
Z([3,'submitBtn data-v-6f572f34'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page data-v-c2ea57f0'])
Z([3,'player data-v-c2ea57f0'])
Z([3,'movie data-v-c2ea57f0'])
Z([[7],[3,'trailerId']])
Z([[6],[[7],[3,'trailerInfo']],[3,'poster']])
Z([[6],[[7],[3,'trailerInfo']],[3,'trailer']])
Z([3,'movie-info data-v-c2ea57f0'])
Z([3,'__e'])
Z([3,'cover data-v-c2ea57f0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'turnCover']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'trailerInfo']],[3,'cover']])
Z([3,'movie-desc data-v-c2ea57f0'])
Z([3,'title data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'name']]])
Z([3,'basic-info data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'basicInfo']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'originalName']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'totalTime']]])
Z(z[14])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'releaseDate']]])
Z([3,'score-block data-v-c2ea57f0'])
Z([3,'big-score data-v-c2ea57f0'])
Z([3,'score-words data-v-c2ea57f0'])
Z([3,'综合评分：'])
Z([3,'movie-score data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'score']]])
Z([3,'score-stars data-v-c2ea57f0'])
Z([[2,'>='],[[6],[[7],[3,'trailerInfo']],[3,'score']],[1,0]])
Z([3,'data-v-c2ea57f0'])
Z([3,'__l'])
Z(z[30])
Z([[6],[[7],[3,'trailerInfo']],[3,'score']])
Z([1,1])
Z([3,'1'])
Z([3,'prise-counts data-v-c2ea57f0'])
Z([a,[[2,'+'],[[6],[[7],[3,'trailerInfo']],[3,'prisedCounts']],[1,'人点赞']]])
Z([3,'line-wrapper data-v-c2ea57f0'])
Z([3,'line data-v-c2ea57f0'])
Z([3,'plots-block data-v-c2ea57f0'])
Z([3,'plots-title data-v-c2ea57f0'])
Z([3,'剧情介绍'])
Z([3,'plots-desc data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'trailerInfo']],[3,'plotDesc']]])
Z([3,'scroll-block data-v-c2ea57f0'])
Z(z[41])
Z([3,'演职人员'])
Z([3,'scroll-list data-v-c2ea57f0'])
Z([3,'StaffIndex'])
Z([3,'director'])
Z([[7],[3,'directorArray']])
Z([3,'actor-wrapper data-v-c2ea57f0'])
Z(z[7])
Z([3,'single-actor data-v-c2ea57f0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookStaffs']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'StaffIndex']])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'director']],[3,'photo']])
Z([3,'actor-name data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'director']],[3,'name']]])
Z([3,'actor-role data-v-c2ea57f0'])
Z([a,[[6],[[7],[3,'director']],[3,'actName']]])
Z([3,'actorIndex'])
Z([3,'actor'])
Z([[7],[3,'actorArray']])
Z(z[52])
Z(z[7])
Z(z[54])
Z(z[55])
Z([[2,'+'],[[7],[3,'actorIndex']],[[6],[[7],[3,'directorArray']],[3,'length']]])
Z(z[57])
Z([[6],[[7],[3,'actor']],[3,'photo']])
Z(z[59])
Z([a,[[6],[[7],[3,'actor']],[3,'name']]])
Z(z[61])
Z([a,[[6],[[7],[3,'actor']],[3,'actName']]])
Z(z[45])
Z(z[41])
Z([3,'剧照'])
Z(z[48])
Z([3,'imgIndex'])
Z([3,'img'])
Z([[7],[3,'plotPicsArray']])
Z(z[7])
Z([3,'plot-image data-v-c2ea57f0'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'lookList']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'imgIndex']])
Z(z[57])
Z([[7],[3,'img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body data-v-3b36b3e4'])
Z([3,'__e'])
Z([3,'data-v-3b36b3e4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSumit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'face-wrapper data-v-3b36b3e4'])
Z([3,'face data-v-3b36b3e4'])
Z([3,'../../static/icos/default-face.png'])
Z([3,'info-wrapper data-v-3b36b3e4'])
Z([3,'words-lbl data-v-3b36b3e4'])
Z([3,'账号'])
Z([3,'input data-v-3b36b3e4'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'text'])
Z([3,''])
Z(z[7])
Z([3,'margin-top:40rpx;'])
Z(z[8])
Z([3,'密码'])
Z(z[10])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[13])
Z(z[14])
Z(z[2])
Z([3,'submit'])
Z([3,'margin-top:60rpx;width:90%;'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'third-wrapper data-v-3b36b3e4'])
Z([3,'third-line data-v-3b36b3e4'])
Z([3,'single-line data-v-3b36b3e4'])
Z([3,'line data-v-3b36b3e4'])
Z([3,'third-words data-v-3b36b3e4'])
Z([3,'第三方账号登录'])
Z(z[32])
Z(z[33])
Z([3,'third-icos-wrapper data-v-3b36b3e4'])
Z(z[1])
Z([3,'third-ico data-v-3b36b3e4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuthLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'weixin'])
Z([3,'../../static/icos/weixin.png'])
Z(z[1])
Z(z[40])
Z(z[41])
Z([3,'qq'])
Z([3,'../../static/icos/qq.png'])
Z([3,'margin-left:80rpx;'])
Z(z[1])
Z(z[40])
Z(z[41])
Z([3,'sinaweibo'])
Z([3,'../../static/icos/weibo.png'])
Z(z[49])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-block'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^searchInp']],[[4],[[5],[[4],[[5],[1,'searchInp']]]]]]]]])
Z([3,'1'])
Z([3,'movie-list page-block'])
Z([3,'__i0__'])
Z([3,'searchSingle'])
Z([[7],[3,'searchAllList']])
Z([3,'id'])
Z([3,'movie-wrapper'])
Z(z[2])
Z([3,'poster'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTrailer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'searchSingle']],[3,'id']])
Z([[6],[[7],[3,'searchSingle']],[3,'cover']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page page-fill data-v-445b3934'])
Z([3,'__e'])
Z([3,'data-v-445b3934'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmitSex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'page-block data-v-445b3934'])
Z([3,'margin-top:20rpx;'])
Z(z[1])
Z([3,'radio-sex data-v-445b3934'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeSex']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'radio-single data-v-445b3934'])
Z([[2,'=='],[[7],[3,'sex']],[1,1]])
Z(z[2])
Z([3,'1'])
Z([3,'男'])
Z(z[9])
Z([[2,'=='],[[7],[3,'sex']],[1,0]])
Z(z[2])
Z([3,'0'])
Z([3,'女'])
Z([3,'submitBtn data-v-445b3934'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/index/hot.wxml','./components/index/praise.wxml','./components/index/stars.wxml','./components/index/swiper.wxml','./components/search/search.wxml','./pages/cover/cover.wxml','./pages/faceCrop/faceCrop.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meBirthday/meBirthday.wxml','./pages/meFace/meFace.wxml','./pages/meInfo/meInfo.wxml','./pages/meNickname/meNickname.wxml','./pages/movie/movie.wxml','./pages/registLogin/registLogin.wxml','./pages/search/search.wxml','./pages/sex/sex.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',1,e,s,gg)
var hG=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(cF,hG)
var oH=_n('view')
_rz(z,oH,'class',4,e,s,gg)
var cI=_oz(z,5,e,s,gg)
_(oH,cI)
_(cF,oH)
_(oB,cF)
var xC=_v()
_(oB,xC)
if(_oz(z,6,e,s,gg)){xC.wxVkey=1
var oJ=_mz(z,'scroll-view',['class',7,'scrollX',1],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],eN,tM,gg)
var oR=_n('view')
_rz(z,oR,'class',16,eN,tM,gg)
var fS=_mz(z,'image',['class',17,'src',1],[],eN,tM,gg)
_(oR,fS)
var cT=_n('view')
_rz(z,cT,'class',19,eN,tM,gg)
var hU=_oz(z,20,eN,tM,gg)
_(cT,hU)
_(oR,cT)
_(xQ,oR)
var oV=_mz(z,'stars',['bind:__l',21,'class',1,'score',2,'vueId',3],[],eN,tM,gg)
_(xQ,oV)
_(bO,xQ)
return bO
}
lK.wxXCkey=4
_2z(z,11,aL,e,s,gg,lK,'hotSuper','__i0__','id')
_(xC,oJ)
}
var oD=_v()
_(oB,oD)
if(_oz(z,25,e,s,gg)){oD.wxVkey=1
var cW=_n('view')
_rz(z,cW,'class',26,e,s,gg)
var oX=_v()
_(cW,oX)
var lY=function(t1,aZ,e2,gg){
var o4=_mz(z,'video',['controls',-1,'bindplay',31,'class',1,'data-event-opts',2,'data-playingIndex',3,'id',4,'poster',5,'src',6],[],t1,aZ,gg)
_(e2,o4)
return e2
}
oX.wxXCkey=2
_2z(z,29,lY,e,s,gg,oX,'trailer','index','index')
_(oD,cW)
}
var fE=_v()
_(oB,fE)
if(_oz(z,38,e,s,gg)){fE.wxVkey=1
var x5=_n('view')
_rz(z,x5,'class',39,e,s,gg)
var o6=_v()
_(x5,o6)
var f7=function(h9,c8,o0,gg){
var oBB=_n('view')
_rz(z,oBB,'class',44,h9,c8,gg)
var lCB=_mz(z,'image',['class',45,'src',1],[],h9,c8,gg)
_(oBB,lCB)
var aDB=_n('view')
_rz(z,aDB,'class',47,h9,c8,gg)
var tEB=_n('view')
_rz(z,tEB,'class',48,h9,c8,gg)
var eFB=_oz(z,49,h9,c8,gg)
_(tEB,eFB)
_(aDB,tEB)
var bGB=_mz(z,'stars',['bind:__l',50,'class',1,'score',2,'showNum',3,'vueId',4],[],h9,c8,gg)
_(aDB,bGB)
var oHB=_n('view')
_rz(z,oHB,'class',55,h9,c8,gg)
var xIB=_oz(z,56,h9,c8,gg)
_(oHB,xIB)
_(aDB,oHB)
var oJB=_n('view')
_rz(z,oJB,'class',57,h9,c8,gg)
var fKB=_oz(z,58,h9,c8,gg)
_(oJB,fKB)
_(aDB,oJB)
_(oBB,aDB)
var cLB=_mz(z,'praise',['bind:__l',59,'class',1,'vueId',2],[],h9,c8,gg)
_(oBB,cLB)
_(o0,oBB)
return o0
}
o6.wxXCkey=4
_2z(z,42,f7,e,s,gg,o6,'guessU','index','id')
_(fE,x5)
}
xC.wxXCkey=1
xC.wxXCkey=3
oD.wxXCkey=1
fE.wxXCkey=1
fE.wxXCkey=3
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oNB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cOB=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(oNB,cOB)
var oPB=_n('view')
_rz(z,oPB,'class',5,e,s,gg)
var lQB=_oz(z,6,e,s,gg)
_(oPB,lQB)
_(oNB,oPB)
var aRB=_mz(z,'view',['animation',7,'class',1],[],e,s,gg)
var tSB=_oz(z,9,e,s,gg)
_(aRB,tSB)
_(oNB,aRB)
_(r,oNB)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var bUB=_n('view')
_rz(z,bUB,'class',0,e,s,gg)
var xWB=_v()
_(bUB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_mz(z,'image',['class',4,'src',1],[],cZB,fYB,gg)
_(h1B,c3B)
return h1B
}
xWB.wxXCkey=2
_2z(z,3,oXB,e,s,gg,xWB,'yellow','__i0__','')
var o4B=_v()
_(bUB,o4B)
var l5B=function(t7B,a6B,e8B,gg){
var o0B=_mz(z,'image',['class',9,'src',1],[],t7B,a6B,gg)
_(e8B,o0B)
return e8B
}
o4B.wxXCkey=2
_2z(z,8,l5B,e,s,gg,o4B,'gray','__i1__','')
var oVB=_v()
_(bUB,oVB)
if(_oz(z,11,e,s,gg)){oVB.wxVkey=1
var xAC=_n('view')
_rz(z,xAC,'class',12,e,s,gg)
var oBC=_oz(z,13,e,s,gg)
_(xAC,oBC)
_(oVB,xAC)
}
oVB.wxXCkey=1
_(r,bUB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cDC=_n('view')
_rz(z,cDC,'class',0,e,s,gg)
var hEC=_mz(z,'swiper',['autoplay',1,'class',1,'duration',2,'indicatorActiveColor',3,'indicatorDots',4,'interval',5],[],e,s,gg)
var oFC=_v()
_(hEC,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_n('swiper-item')
_rz(z,eLC,'class',11,lIC,oHC,gg)
var bMC=_mz(z,'image',['class',12,'src',1],[],lIC,oHC,gg)
_(eLC,bMC)
_(aJC,eLC)
return aJC
}
oFC.wxXCkey=2
_2z(z,9,cGC,e,s,gg,oFC,'swiperImg','__i0__','id')
_(cDC,hEC)
_(r,cDC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var xOC=_n('view')
_rz(z,xOC,'class',0,e,s,gg)
var oPC=_n('view')
_rz(z,oPC,'class',1,e,s,gg)
var fQC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(oPC,fQC)
_(xOC,oPC)
var cRC=_mz(z,'input',['bindconfirm',4,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5],[],e,s,gg)
_(xOC,cRC)
_(r,xOC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_mz(z,'image',['bindlongpress',1,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e,s,gg)
_(oTC,cUC)
_(r,oTC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var aXC=_n('view')
_rz(z,aXC,'class',1,e,s,gg)
var tYC=_n('view')
_rz(z,tYC,'class',2,e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,3,e,s,gg)){eZC.wxVkey=1
var b1C=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var o2C=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var x3C=_mz(z,'image',['class',8,'src',1,'style',2],[],e,s,gg)
_(o2C,x3C)
var o4C=_mz(z,'view',['catchtouchend',11,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var f5C=_n('view')
_rz(z,f5C,'class',17,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',18,e,s,gg)
_(f5C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',19,e,s,gg)
_(f5C,h7C)
var o8C=_mz(z,'view',['catchtouchmove',20,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,o8C)
var c9C=_mz(z,'view',['catchtouchmove',25,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,c9C)
var o0C=_mz(z,'view',['catchtouchmove',30,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,o0C)
var lAD=_mz(z,'view',['catchtouchmove',35,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,lAD)
var aBD=_mz(z,'view',['catchtouchmove',40,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,aBD)
var tCD=_mz(z,'view',['class',45,'data-drag',1],[],e,s,gg)
_(f5C,tCD)
var eDD=_mz(z,'view',['catchtouchmove',47,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,eDD)
var bED=_mz(z,'view',['catchtouchmove',52,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,bED)
var oFD=_mz(z,'view',['catchtouchend',57,'catchtouchmove',1,'catchtouchstart',2,'class',3,'data-drag',4,'data-event-opts',5],[],e,s,gg)
_(f5C,oFD)
var xGD=_mz(z,'view',['class',63,'data-drag',1],[],e,s,gg)
_(f5C,xGD)
var oHD=_mz(z,'view',['catchtouchmove',65,'catchtouchstart',1,'class',2,'data-drag',3,'data-event-opts',4],[],e,s,gg)
_(f5C,oHD)
var fID=_mz(z,'view',['class',70,'data-drag',1],[],e,s,gg)
_(f5C,fID)
_(o4C,f5C)
_(o2C,o4C)
_(b1C,o2C)
_(eZC,b1C)
}
eZC.wxXCkey=1
_(aXC,tYC)
var cJD=_n('view')
_rz(z,cJD,'class',72,e,s,gg)
var hKD=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var oLD=_oz(z,76,e,s,gg)
_(hKD,oLD)
_(cJD,hKD)
var cMD=_mz(z,'view',['bindtap',77,'class',1,'data-event-opts',2],[],e,s,gg)
var oND=_oz(z,80,e,s,gg)
_(cMD,oND)
_(cJD,cMD)
_(aXC,cJD)
var lOD=_mz(z,'canvas',['canvasId',81,'style',1],[],e,s,gg)
_(aXC,lOD)
_(lWC,aXC)
_(r,lWC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_mz(z,'swiper',['class',1,'swiperImgListPay',1],[],e,s,gg)
_(tQD,eRD)
var bSD=_mz(z,'hot',['bind:__l',3,'hotSuper',1,'iconSrc',2,'iconTitle',3,'vueId',4],[],e,s,gg)
_(tQD,bSD)
var oTD=_mz(z,'hot',['bind:__l',8,'hotTrailer',1,'iconSrc',2,'iconTitle',3,'vueId',4],[],e,s,gg)
_(tQD,oTD)
var xUD=_mz(z,'hot',['bind:__l',13,'class',1,'data-ref',2,'guessUlike',3,'iconSrc',4,'iconTitle',5,'vueId',6],[],e,s,gg)
_(tQD,xUD)
_(r,tQD)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var fWD=_n('view')
_rz(z,fWD,'class',0,e,s,gg)
var cXD=_n('view')
_rz(z,cXD,'class',1,e,s,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,2,e,s,gg)){hYD.wxVkey=1
var o2D=_n('view')
_rz(z,o2D,'class',3,e,s,gg)
var l3D=_mz(z,'image',['class',4,'src',1],[],e,s,gg)
_(o2D,l3D)
_(hYD,o2D)
}
else{hYD.wxVkey=2
var a4D=_n('view')
_rz(z,a4D,'class',6,e,s,gg)
var t5D=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(a4D,t5D)
_(hYD,a4D)
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,9,e,s,gg)){oZD.wxVkey=1
var e6D=_n('view')
_rz(z,e6D,'class',10,e,s,gg)
var b7D=_n('view')
_rz(z,b7D,'class',11,e,s,gg)
var o8D=_oz(z,12,e,s,gg)
_(b7D,o8D)
_(e6D,b7D)
var x9D=_n('view')
_rz(z,x9D,'class',13,e,s,gg)
var o0D=_oz(z,14,e,s,gg)
_(x9D,o0D)
_(e6D,x9D)
_(oZD,e6D)
}
else{oZD.wxVkey=2
var fAE=_n('view')
_rz(z,fAE,'class',15,e,s,gg)
var cBE=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var hCE=_oz(z,19,e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
_(oZD,fAE)
}
var c1D=_v()
_(cXD,c1D)
if(_oz(z,20,e,s,gg)){c1D.wxVkey=1
var oDE=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var cEE=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
_(oDE,cEE)
_(c1D,oDE)
}
hYD.wxXCkey=1
oZD.wxXCkey=1
c1D.wxXCkey=1
_(fWD,cXD)
_(r,fWD)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lGE=_n('view')
_rz(z,lGE,'class',0,e,s,gg)
var aHE=_mz(z,'form',['bindsubmit',1,'class',1,'data-event-opts',2],[],e,s,gg)
var tIE=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var eJE=_mz(z,'picker',['bindchange',6,'class',1,'data-event-opts',2,'mode',3],[],e,s,gg)
var bKE=_n('view')
_rz(z,bKE,'class',10,e,s,gg)
var oLE=_oz(z,11,e,s,gg)
_(bKE,oLE)
_(eJE,bKE)
_(tIE,eJE)
_(aHE,tIE)
var xME=_mz(z,'button',['class',12,'formType',1,'type',2],[],e,s,gg)
var oNE=_oz(z,15,e,s,gg)
_(xME,oNE)
_(aHE,xME)
_(lGE,aHE)
_(r,lGE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cPE=_n('view')
_rz(z,cPE,'class',0,e,s,gg)
var hQE=_n('view')
_rz(z,hQE,'class',1,e,s,gg)
var oRE=_mz(z,'image',['class',2,'id',1,'mode',2,'src',3],[],e,s,gg)
_(hQE,oRE)
_(cPE,hQE)
var cSE=_n('view')
_rz(z,cSE,'class',6,e,s,gg)
var oTE=_n('view')
_rz(z,oTE,'class',7,e,s,gg)
var lUE=_oz(z,8,e,s,gg)
_(oTE,lUE)
_(cSE,oTE)
_(cPE,cSE)
var aVE=_n('view')
_rz(z,aVE,'class',9,e,s,gg)
var tWE=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
var eXE=_oz(z,13,e,s,gg)
_(tWE,eXE)
_(aVE,tWE)
var bYE=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var oZE=_oz(z,17,e,s,gg)
_(bYE,oZE)
_(aVE,bYE)
_(cPE,aVE)
_(r,cPE)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o2E=_n('view')
_rz(z,o2E,'class',0,e,s,gg)
var f3E=_n('view')
_rz(z,f3E,'class',1,e,s,gg)
var c4E=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var h5E=_n('view')
_rz(z,h5E,'class',5,e,s,gg)
var o6E=_oz(z,6,e,s,gg)
_(h5E,o6E)
_(c4E,h5E)
var c7E=_n('view')
_rz(z,c7E,'class',7,e,s,gg)
var o8E=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(c7E,o8E)
var l9E=_n('view')
_rz(z,l9E,'class',10,e,s,gg)
var a0E=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(l9E,a0E)
_(c7E,l9E)
_(c4E,c7E)
_(f3E,c4E)
var tAF=_n('view')
_rz(z,tAF,'class',13,e,s,gg)
var eBF=_n('view')
_rz(z,eBF,'class',14,e,s,gg)
_(tAF,eBF)
_(f3E,tAF)
var bCF=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',18,e,s,gg)
var xEF=_oz(z,19,e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
var oFF=_n('view')
_rz(z,oFF,'class',20,e,s,gg)
var fGF=_n('view')
_rz(z,fGF,'class',21,e,s,gg)
var cHF=_oz(z,22,e,s,gg)
_(fGF,cHF)
_(oFF,fGF)
var hIF=_n('view')
_rz(z,hIF,'class',23,e,s,gg)
var oJF=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
_(hIF,oJF)
_(oFF,hIF)
_(bCF,oFF)
_(f3E,bCF)
var cKF=_n('view')
_rz(z,cKF,'class',26,e,s,gg)
var oLF=_n('view')
_rz(z,oLF,'class',27,e,s,gg)
_(cKF,oLF)
_(f3E,cKF)
var lMF=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],e,s,gg)
var aNF=_n('view')
_rz(z,aNF,'class',31,e,s,gg)
var tOF=_oz(z,32,e,s,gg)
_(aNF,tOF)
_(lMF,aNF)
var ePF=_n('view')
_rz(z,ePF,'class',33,e,s,gg)
var bQF=_n('view')
_rz(z,bQF,'class',34,e,s,gg)
var oRF=_oz(z,35,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_n('view')
_rz(z,xSF,'class',36,e,s,gg)
var oTF=_mz(z,'image',['class',37,'src',1],[],e,s,gg)
_(xSF,oTF)
_(ePF,xSF)
_(lMF,ePF)
_(f3E,lMF)
var fUF=_n('view')
_rz(z,fUF,'class',39,e,s,gg)
var cVF=_n('view')
_rz(z,cVF,'class',40,e,s,gg)
_(fUF,cVF)
_(f3E,fUF)
var hWF=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var oXF=_n('view')
_rz(z,oXF,'class',44,e,s,gg)
var cYF=_oz(z,45,e,s,gg)
_(oXF,cYF)
_(hWF,oXF)
var oZF=_n('view')
_rz(z,oZF,'class',46,e,s,gg)
var l1F=_n('view')
_rz(z,l1F,'class',47,e,s,gg)
var a2F=_v()
_(l1F,a2F)
if(_oz(z,48,e,s,gg)){a2F.wxVkey=1
var t3F=_n('view')
_rz(z,t3F,'class',49,e,s,gg)
var e4F=_oz(z,50,e,s,gg)
_(t3F,e4F)
_(a2F,t3F)
}
else{a2F.wxVkey=2
var b5F=_v()
_(a2F,b5F)
if(_oz(z,51,e,s,gg)){b5F.wxVkey=1
var o6F=_n('view')
_rz(z,o6F,'class',52,e,s,gg)
var x7F=_oz(z,53,e,s,gg)
_(o6F,x7F)
_(b5F,o6F)
}
else{b5F.wxVkey=2
var o8F=_n('view')
_rz(z,o8F,'class',54,e,s,gg)
var f9F=_oz(z,55,e,s,gg)
_(o8F,f9F)
_(b5F,o8F)
}
b5F.wxXCkey=1
}
a2F.wxXCkey=1
_(oZF,l1F)
var c0F=_n('view')
_rz(z,c0F,'class',56,e,s,gg)
var hAG=_mz(z,'image',['class',57,'src',1],[],e,s,gg)
_(c0F,hAG)
_(oZF,c0F)
_(hWF,oZF)
_(f3E,hWF)
_(o2E,f3E)
var oBG=_n('view')
_rz(z,oBG,'class',59,e,s,gg)
var cCG=_mz(z,'view',['bindtap',60,'class',1,'data-event-opts',2],[],e,s,gg)
var oDG=_oz(z,63,e,s,gg)
_(cCG,oDG)
_(oBG,cCG)
var lEG=_mz(z,'view',['bindtap',64,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var aFG=_oz(z,68,e,s,gg)
_(lEG,aFG)
_(oBG,lEG)
_(o2E,oBG)
_(r,o2E)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var eHG=_n('view')
_rz(z,eHG,'class',0,e,s,gg)
var bIG=_mz(z,'form',['bindsubmit',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oJG=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var xKG=_mz(z,'input',['class',6,'maxlength',1,'name',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(oJG,xKG)
_(bIG,oJG)
var oLG=_mz(z,'button',['class',13,'formType',1,'type',2],[],e,s,gg)
var fMG=_oz(z,16,e,s,gg)
_(oLG,fMG)
_(bIG,oLG)
_(eHG,bIG)
_(r,eHG)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hOG=_n('view')
_rz(z,hOG,'class',0,e,s,gg)
var oPG=_n('view')
_rz(z,oPG,'class',1,e,s,gg)
var cQG=_mz(z,'video',['controls',-1,'class',2,'id',1,'poster',2,'src',3],[],e,s,gg)
_(oPG,cQG)
_(hOG,oPG)
var oRG=_n('view')
_rz(z,oRG,'class',6,e,s,gg)
var lSG=_mz(z,'image',['bindtap',7,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(oRG,lSG)
var aTG=_n('view')
_rz(z,aTG,'class',11,e,s,gg)
var tUG=_n('view')
_rz(z,tUG,'class',12,e,s,gg)
var eVG=_oz(z,13,e,s,gg)
_(tUG,eVG)
_(aTG,tUG)
var bWG=_n('view')
_rz(z,bWG,'class',14,e,s,gg)
var oXG=_oz(z,15,e,s,gg)
_(bWG,oXG)
_(aTG,bWG)
var xYG=_n('view')
_rz(z,xYG,'class',16,e,s,gg)
var oZG=_oz(z,17,e,s,gg)
_(xYG,oZG)
_(aTG,xYG)
var f1G=_n('view')
_rz(z,f1G,'class',18,e,s,gg)
var c2G=_oz(z,19,e,s,gg)
_(f1G,c2G)
_(aTG,f1G)
var h3G=_n('view')
_rz(z,h3G,'class',20,e,s,gg)
var o4G=_oz(z,21,e,s,gg)
_(h3G,o4G)
_(aTG,h3G)
var c5G=_n('view')
_rz(z,c5G,'class',22,e,s,gg)
var o6G=_n('view')
_rz(z,o6G,'class',23,e,s,gg)
var l7G=_n('view')
_rz(z,l7G,'class',24,e,s,gg)
var a8G=_oz(z,25,e,s,gg)
_(l7G,a8G)
_(o6G,l7G)
var t9G=_n('view')
_rz(z,t9G,'class',26,e,s,gg)
var e0G=_oz(z,27,e,s,gg)
_(t9G,e0G)
_(o6G,t9G)
_(c5G,o6G)
var bAH=_n('view')
_rz(z,bAH,'class',28,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,29,e,s,gg)){oBH.wxVkey=1
var xCH=_mz(z,'stars',['bind:__l',31,'class',1,'score',2,'showNum',3,'vueId',4],[],e,s,gg)
_(oBH,xCH)
}
var oDH=_n('view')
_rz(z,oDH,'class',36,e,s,gg)
var fEH=_oz(z,37,e,s,gg)
_(oDH,fEH)
_(bAH,oDH)
oBH.wxXCkey=1
oBH.wxXCkey=3
_(c5G,bAH)
_(aTG,c5G)
_(oRG,aTG)
_(hOG,oRG)
var cFH=_n('view')
_rz(z,cFH,'class',38,e,s,gg)
var hGH=_n('view')
_rz(z,hGH,'class',39,e,s,gg)
_(cFH,hGH)
_(hOG,cFH)
var oHH=_n('view')
_rz(z,oHH,'class',40,e,s,gg)
var cIH=_n('view')
_rz(z,cIH,'class',41,e,s,gg)
var oJH=_oz(z,42,e,s,gg)
_(cIH,oJH)
_(oHH,cIH)
var lKH=_n('view')
_rz(z,lKH,'class',43,e,s,gg)
var aLH=_oz(z,44,e,s,gg)
_(lKH,aLH)
_(oHH,lKH)
_(hOG,oHH)
var tMH=_n('view')
_rz(z,tMH,'class',45,e,s,gg)
var eNH=_n('view')
_rz(z,eNH,'class',46,e,s,gg)
var bOH=_oz(z,47,e,s,gg)
_(eNH,bOH)
_(tMH,eNH)
var oPH=_mz(z,'scroll-view',['scrollX',-1,'class',48],[],e,s,gg)
var xQH=_v()
_(oPH,xQH)
var oRH=function(cTH,fSH,hUH,gg){
var cWH=_n('view')
_rz(z,cWH,'class',52,cTH,fSH,gg)
var oXH=_mz(z,'image',['bindtap',53,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],cTH,fSH,gg)
_(cWH,oXH)
var lYH=_n('view')
_rz(z,lYH,'class',59,cTH,fSH,gg)
var aZH=_oz(z,60,cTH,fSH,gg)
_(lYH,aZH)
_(cWH,lYH)
var t1H=_n('view')
_rz(z,t1H,'class',61,cTH,fSH,gg)
var e2H=_oz(z,62,cTH,fSH,gg)
_(t1H,e2H)
_(cWH,t1H)
_(hUH,cWH)
return hUH
}
xQH.wxXCkey=2
_2z(z,51,oRH,e,s,gg,xQH,'director','StaffIndex','')
var b3H=_v()
_(oPH,b3H)
var o4H=function(o6H,x5H,f7H,gg){
var h9H=_n('view')
_rz(z,h9H,'class',66,o6H,x5H,gg)
var o0H=_mz(z,'image',['bindtap',67,'class',1,'data-event-opts',2,'data-staffIndex',3,'mode',4,'src',5],[],o6H,x5H,gg)
_(h9H,o0H)
var cAI=_n('view')
_rz(z,cAI,'class',73,o6H,x5H,gg)
var oBI=_oz(z,74,o6H,x5H,gg)
_(cAI,oBI)
_(h9H,cAI)
var lCI=_n('view')
_rz(z,lCI,'class',75,o6H,x5H,gg)
var aDI=_oz(z,76,o6H,x5H,gg)
_(lCI,aDI)
_(h9H,lCI)
_(f7H,h9H)
return f7H
}
b3H.wxXCkey=2
_2z(z,65,o4H,e,s,gg,b3H,'actor','actorIndex','')
_(tMH,oPH)
_(hOG,tMH)
var tEI=_n('view')
_rz(z,tEI,'class',77,e,s,gg)
var eFI=_n('view')
_rz(z,eFI,'class',78,e,s,gg)
var bGI=_oz(z,79,e,s,gg)
_(eFI,bGI)
_(tEI,eFI)
var oHI=_mz(z,'scroll-view',['scrollX',-1,'class',80],[],e,s,gg)
var xII=_v()
_(oHI,xII)
var oJI=function(cLI,fKI,hMI,gg){
var cOI=_mz(z,'image',['bindtap',84,'class',1,'data-event-opts',2,'data-imgIndex',3,'mode',4,'src',5],[],cLI,fKI,gg)
_(hMI,cOI)
return hMI
}
xII.wxXCkey=2
_2z(z,83,oJI,e,s,gg,xII,'img','imgIndex','')
_(tEI,oHI)
_(hOG,tEI)
_(r,hOG)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lQI=_n('view')
_rz(z,lQI,'class',0,e,s,gg)
var aRI=_mz(z,'form',['bindsubmit',1,'class',1,'data-event-opts',2],[],e,s,gg)
var tSI=_n('view')
_rz(z,tSI,'class',4,e,s,gg)
var eTI=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(tSI,eTI)
_(aRI,tSI)
var bUI=_n('view')
_rz(z,bUI,'class',7,e,s,gg)
var oVI=_n('label')
_rz(z,oVI,'class',8,e,s,gg)
var xWI=_oz(z,9,e,s,gg)
_(oVI,xWI)
_(bUI,oVI)
var oXI=_mz(z,'input',['class',10,'name',1,'placeholder',2,'type',3,'value',4],[],e,s,gg)
_(bUI,oXI)
_(aRI,bUI)
var fYI=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var cZI=_n('label')
_rz(z,cZI,'class',17,e,s,gg)
var h1I=_oz(z,18,e,s,gg)
_(cZI,h1I)
_(fYI,cZI)
var o2I=_mz(z,'input',['class',19,'name',1,'password',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(fYI,o2I)
_(aRI,fYI)
var c3I=_mz(z,'button',['class',25,'formType',1,'style',2,'type',3],[],e,s,gg)
var o4I=_oz(z,29,e,s,gg)
_(c3I,o4I)
_(aRI,c3I)
_(lQI,aRI)
var l5I=_n('view')
_rz(z,l5I,'class',30,e,s,gg)
var a6I=_n('view')
_rz(z,a6I,'class',31,e,s,gg)
var t7I=_n('view')
_rz(z,t7I,'class',32,e,s,gg)
var e8I=_n('view')
_rz(z,e8I,'class',33,e,s,gg)
_(t7I,e8I)
_(a6I,t7I)
var b9I=_n('view')
_rz(z,b9I,'class',34,e,s,gg)
var o0I=_oz(z,35,e,s,gg)
_(b9I,o0I)
_(a6I,b9I)
var xAJ=_n('view')
_rz(z,xAJ,'class',36,e,s,gg)
var oBJ=_n('view')
_rz(z,oBJ,'class',37,e,s,gg)
_(xAJ,oBJ)
_(a6I,xAJ)
_(l5I,a6I)
_(lQI,l5I)
var fCJ=_n('view')
_rz(z,fCJ,'class',38,e,s,gg)
var cDJ=_mz(z,'image',['bindtap',39,'class',1,'data-event-opts',2,'data-logintype',3,'src',4],[],e,s,gg)
_(fCJ,cDJ)
var hEJ=_mz(z,'image',['bindtap',44,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(fCJ,hEJ)
var oFJ=_mz(z,'image',['bindtap',50,'class',1,'data-event-opts',2,'data-logintype',3,'src',4,'style',5],[],e,s,gg)
_(fCJ,oFJ)
_(lQI,fCJ)
_(r,lQI)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oHJ=_n('view')
_rz(z,oHJ,'class',0,e,s,gg)
var lIJ=_mz(z,'search',['bind:__l',1,'bind:searchInp',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(oHJ,lIJ)
var aJJ=_n('view')
_rz(z,aJJ,'class',5,e,s,gg)
var tKJ=_v()
_(aJJ,tKJ)
var eLJ=function(oNJ,bMJ,xOJ,gg){
var fQJ=_n('view')
_rz(z,fQJ,'class',10,oNJ,bMJ,gg)
var cRJ=_mz(z,'image',['bindtap',11,'class',1,'data-event-opts',2,'data-trailerId',3,'src',4],[],oNJ,bMJ,gg)
_(fQJ,cRJ)
_(xOJ,fQJ)
return xOJ
}
tKJ.wxXCkey=2
_2z(z,8,eLJ,e,s,gg,tKJ,'searchSingle','__i0__','id')
_(oHJ,aJJ)
_(r,oHJ)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oTJ=_n('view')
_rz(z,oTJ,'class',0,e,s,gg)
var cUJ=_mz(z,'form',['bindsubmit',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oVJ=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var lWJ=_mz(z,'radio-group',['bindchange',6,'class',1,'data-event-opts',2],[],e,s,gg)
var aXJ=_n('label')
_rz(z,aXJ,'class',9,e,s,gg)
var tYJ=_mz(z,'radio',['checked',10,'class',1,'value',2],[],e,s,gg)
_(aXJ,tYJ)
var eZJ=_oz(z,13,e,s,gg)
_(aXJ,eZJ)
_(lWJ,aXJ)
var b1J=_n('label')
_rz(z,b1J,'class',14,e,s,gg)
var o2J=_mz(z,'radio',['checked',15,'class',1,'value',2],[],e,s,gg)
_(b1J,o2J)
var x3J=_oz(z,18,e,s,gg)
_(b1J,x3J)
_(lWJ,b1J)
_(oVJ,lWJ)
_(cUJ,oVJ)
var o4J=_mz(z,'button',['class',19,'formType',1,'type',2],[],e,s,gg)
var f5J=_oz(z,22,e,s,gg)
_(o4J,f5J)
_(cUJ,o4J)
_(oTJ,cUJ)
_(r,oTJ)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["body { width:100%; height:100%; }\n.",[1],"page { width: 100%; height:100%; background-color:#f7f7f7; }\n.",[1],"page-block { background-color:#ffffff; }\n.",[1],"line-wrapper { padding:",[0,0]," ",[0,20],"; }\n.",[1],"line { height:1px; background-color:#dbdbda; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/index/hot.wxss']=setCssToHead([".",[1],"hot.",[1],"data-v-7f052e05 { margin-top:",[0,12],"; padding:",[0,20],"; vertical-align: middle; }\n.",[1],"hot-title-wrapper.",[1],"data-v-7f052e05 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-bottom:",[0,12],"; }\n.",[1],"hot-ico.",[1],"data-v-7f052e05 { width:",[0,30],"; height:",[0,30],"; margin-top:",[0,15],"; }\n.",[1],"hot-title.",[1],"data-v-7f052e05 { font-size:20px; margin-left:",[0,20],"; font-weight:bold; }\n.",[1],"hot-scroll.",[1],"data-v-7f052e05 { width:100%; white-space: nowrap; }\n.",[1],"single-poster.",[1],"data-v-7f052e05 { display: inline-block; margin-right:",[0,20],"; }\n.",[1],"poster-wrapper.",[1],"data-v-7f052e05 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"poster.",[1],"data-v-7f052e05 { width:",[0,200],"; height:",[0,270],"; }\n.",[1],"movie-name.",[1],"data-v-7f052e05 { width:",[0,200],"; margin-top:",[0,10],"; font-size:14px; font-weight:bold; white-space:nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"hot-movies.",[1],"data-v-7f052e05 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap:wrap; -ms-flex-wrap:wrap; flex-wrap:wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"hot-movie-single.",[1],"data-v-7f052e05 { width:",[0,350],"; height:",[0,220],"; margin-top:",[0,10],"; }\n.",[1],"guess-u-like.",[1],"data-v-7f052e05 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"single-like-movie.",[1],"data-v-7f052e05 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding:",[0,30]," ",[0,20],"; }\n.",[1],"like-movie.",[1],"data-v-7f052e05 { width:",[0,180],"; height:",[0,240],"; -webkit-border-radius:3%; border-radius:3%; }\n.",[1],"movie-desc.",[1],"data-v-7f052e05 { width:",[0,340],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; padding:0 ",[0,15],"; }\n.",[1],"movie-title.",[1],"data-v-7f052e05 { white-space:nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"movie-info.",[1],"data-v-7f052e05 { color:#808080; font-size:12px; }\n",],undefined,{path:"./components/index/hot.wxss"});    
__wxAppCode__['components/index/hot.wxml']=$gwx('./components/index/hot.wxml');

__wxAppCode__['components/index/praise.wxss']=setCssToHead([".",[1],"movie-oper.",[1],"data-v-50214874 { width:",[0,140],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-left:2px dashed #dbdbdb; }\n.",[1],"praise-ico.",[1],"data-v-50214874 { width:",[0,40],"; height:",[0,40],"; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"praise-me.",[1],"data-v-50214874 { font-size:14px; color:#feab2a; -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n.",[1],"animation-opacity.",[1],"data-v-50214874 { opacity:0; font-weight:bold; }\n",],undefined,{path:"./components/index/praise.wxss"});    
__wxAppCode__['components/index/praise.wxml']=$gwx('./components/index/praise.wxml');

__wxAppCode__['components/index/stars.wxss']=setCssToHead([".",[1],"movie-score-wrapper.",[1],"data-v-811d67ce { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"star-ico.",[1],"data-v-811d67ce { width:",[0,20],"; height:",[0,20],"; margin-top:",[0,6],"; }\n.",[1],"movie-score.",[1],"data-v-811d67ce { font-size:12px; color:gray; margin-left:",[0,8],"; }\n",],undefined,{path:"./components/index/stars.wxss"});    
__wxAppCode__['components/index/stars.wxml']=$gwx('./components/index/stars.wxml');

__wxAppCode__['components/index/swiper.wxss']=setCssToHead([".",[1],"carousel.",[1],"data-v-a707b520 { width:100%; height: ",[0,440],"; }\n.",[1],"carousel wx-image.",[1],"data-v-a707b520 { width:100%; height:100%; }\n",],undefined,{path:"./components/index/swiper.wxss"});    
__wxAppCode__['components/index/swiper.wxml']=$gwx('./components/index/swiper.wxml');

__wxAppCode__['components/search/search.wxss']=setCssToHead([".",[1],"search-block.",[1],"data-v-ffebfb38 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding:",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; position:fixed; top:100; z-index: 2000; background-color:#f8f8f8; }\n.",[1],"search-ico-wrapper.",[1],"data-v-ffebfb38 { background-color:#eaeaea; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding:",[0,0]," ",[0,10],"; }\n.",[1],"search-ico.",[1],"data-v-ffebfb38 { width:",[0,40],"; height:",[0,40],"; }\n.",[1],"search-text.",[1],"data-v-ffebfb38 { font-size:14px; background-color:#eaeaea; height:",[0,60],"; width:",[0,650],"; }\n",],undefined,{path:"./components/search/search.wxss"});    
__wxAppCode__['components/search/search.wxml']=$gwx('./components/search/search.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"black.",[1],"data-v-87f2b654 { background-color:#000000; width:100%; height:100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position:fixed; }\n.",[1],"cover.",[1],"data-v-87f2b654 { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/faceCrop/faceCrop.wxss']=setCssToHead([".",[1],"uni-content-info { }\n.",[1],"cropper-config { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"cropper-content { min-height: ",[0,750],"; width: 100%; }\n.",[1],"uni-corpper { position: relative; overflow: hidden; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"uni-corpper-content { position: relative; }\n.",[1],"uni-corpper-content wx-image { display: block; width: 100%; min-width: 0 !important; max-width: none !important; height: 100%; min-height: 0 !important; max-height: none !important; image-orientation: 0deg !important; margin: 0 auto; }\n.",[1],"uni-cropper-drag-box { position: absolute; top: 0; right: 0; bottom: 0; left: 0; cursor: move; background: rgba(0, 0, 0, 0.6); z-index: 1; }\n.",[1],"uni-corpper-crop-box { position: absolute; background: rgba(255, 255, 255, 0.3); z-index: 2; }\n.",[1],"uni-corpper-crop-box .",[1],"uni-cropper-view-box { position: relative; display: block; width: 100%; height: 100%; overflow: visible; outline: ",[0,1]," solid #69f; outline-color: rgba(102, 153, 255, .75) }\n.",[1],"uni-cropper-dashed-h { position: absolute; top: 33.33333333%; left: 0; width: 100%; height: 33.33333333%; border-top: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-bottom: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-dashed-v { position: absolute; left: 33.33333333%; top: 0; width: 33.33333333%; height: 100%; border-left: ",[0,1]," dashed rgba(255, 255, 255, 0.5); border-right: ",[0,1]," dashed rgba(255, 255, 255, 0.5); }\n.",[1],"uni-cropper-line-t { position: absolute; display: block; width: 100%; background-color: #69f; top: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: n-resize; }\n.",[1],"uni-cropper-line-t::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-r { position: absolute; display: block; background-color: #69f; top: 0; right: ",[0,0],"; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: e-resize; }\n.",[1],"uni-cropper-line-r::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-b { position: absolute; display: block; width: 100%; background-color: #69f; bottom: 0; left: 0; height: ",[0,1],"; opacity: 0.1; cursor: s-resize; }\n.",[1],"uni-cropper-line-b::before { content: \x27\x27; position: absolute; top: 50%; right: ",[0,0],"; width: 100%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); bottom: 0; height: ",[0,41],"; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-line-l { position: absolute; display: block; background-color: #69f; top: 0; left: 0; width: ",[0,1],"; opacity: 0.1; height: 100%; cursor: w-resize; }\n.",[1],"uni-cropper-line-l::before { content: \x27\x27; position: absolute; top: 0; left: 50%; width: ",[0,41],"; -webkit-transform: translate3d(-50%, 0, 0); transform: translate3d(-50%, 0, 0); bottom: 0; height: 100%; background: transparent; z-index: 11; }\n.",[1],"uni-cropper-point { width: ",[0,5],"; height: ",[0,5],"; background-color: #69f; opacity: .75; position: absolute; z-index: 3; }\n.",[1],"point-t { top: ",[0,-3],"; left: 50%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-tr { top: ",[0,-3],"; left: 100%; margin-left: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-r { top: 50%; left: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-rb { left: 100%; top: 100%; -webkit-transform: translate3d(-50%, -50%, 0); transform: translate3d(-50%, -50%, 0); cursor: n-resize; width: ",[0,36],"; height: ",[0,36],"; background-color: #69f; position: absolute; z-index: 1112; opacity: 1; }\n.",[1],"point-b { left: 50%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-bl { left: 0%; top: 100%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-l { left: 0%; top: 50%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"point-lt { left: 0%; top: 0%; margin-left: ",[0,-3],"; margin-top: ",[0,-3],"; cursor: n-resize; }\n.",[1],"uni-cropper-viewer { position: relative; width: 100%; height: 100%; overflow: hidden; }\n.",[1],"uni-cropper-viewer wx-image { position: absolute; z-index: 2; }\n.",[1],"container { }\n.",[1],"page-fill { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"myDistance { }\n.",[1],"footer-opertor { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/faceCrop/faceCrop.wxss"});    
__wxAppCode__['pages/faceCrop/faceCrop.wxml']=$gwx('./pages/faceCrop/faceCrop.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"index-swiper { height:",[0,440],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead([".",[1],"header.",[1],"data-v-594b9bb4 { padding:",[0,120]," ",[0,30]," ",[0,40]," ",[0,30],"; background-color:#ffd655; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face.",[1],"data-v-594b9bb4 { width:",[0,120],"; height:",[0,120],"; -webkit-border-radius: 50%; border-radius: 50%; -webkit-flex-shrink:0; -ms-flex-negative:0; flex-shrink:0; }\n.",[1],"info-wrapper.",[1],"data-v-594b9bb4 { width:80%; margin-left:",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"nickname.",[1],"data-v-594b9bb4 { color:#6a5018; font-size:18px; font-weight:bold; }\n.",[1],"regist-login.",[1],"data-v-594b9bb4 { margin-left:",[0,60],"; margin-top:",[0,30],"; }\n.",[1],"nav-info.",[1],"data-v-594b9bb4 { color:#a38e62; font-size:14px; margin-top:",[0,10],"; }\n.",[1],"set-wrapper.",[1],"data-v-594b9bb4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; width:15%; }\n.",[1],"settings.",[1],"data-v-594b9bb4 { width:",[0,40],"; height:",[0,40],"; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meBirthday/meBirthday.wxss']=setCssToHead([".",[1],"page-fill.",[1],"data-v-6d88edf4 { width:100%; height:100%; position:absolute; }\n.",[1],"birth-inpug.",[1],"data-v-6d88edf4 { background-color:white; height:",[0,80],"; line-height:",[0,40],"; padding-left:",[0,20],"; }\n.",[1],"birthday.",[1],"data-v-6d88edf4 { background-color:white; height:",[0,80],"; padding-left:",[0,20],"; padding-top:",[0,30],"; }\n.",[1],"submitBtn.",[1],"data-v-6d88edf4 { width:95%; margin-top:",[0,40],"; }\n",],undefined,{path:"./pages/meBirthday/meBirthday.wxss"});    
__wxAppCode__['pages/meBirthday/meBirthday.wxml']=$gwx('./pages/meBirthday/meBirthday.wxml');

__wxAppCode__['pages/meFace/meFace.wxss']=setCssToHead([".",[1],"page-fill.",[1],"data-v-995ccdf4 { width:100%; height: 100%; position: absolute; background: black; }\n.",[1],"pending-wapper.",[1],"data-v-995ccdf4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top: ",[0,40],"; }\n.",[1],"pending-face.",[1],"data-v-995ccdf4 { width: ",[0,600],"; height: ",[0,600],"; }\n.",[1],"notice.",[1],"data-v-995ccdf4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"notice-words.",[1],"data-v-995ccdf4 { color: gray; font-size: 13px; margin-top: ",[0,30],"; width: ",[0,600],"; }\n.",[1],"footer-opertor.",[1],"data-v-995ccdf4 { position: fixed; bottom: 0; border-top: #515050 solid 1px; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: ",[0,30],"; }\n.",[1],"opertor-words.",[1],"data-v-995ccdf4 { color: #e8e5e5; font-size: 16px; width: ",[0,200],"; }\n",],undefined,{path:"./pages/meFace/meFace.wxss"});    
__wxAppCode__['pages/meFace/meFace.wxml']=$gwx('./pages/meFace/meFace.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead([".",[1],"page-fill.",[1],"data-v-3ea09be6 { width:100%; height:100%; position:absolute; }\n.",[1],"info-list.",[1],"data-v-3ea09be6 { padding:",[0,0]," ",[0,30]," ",[0,0]," ",[0,30],"; }\n.",[1],"info-words.",[1],"data-v-3ea09be6 { color:#333333; font-size:16px; width:25%; line-height:",[0,80],"; }\n.",[1],"face.",[1],"data-v-3ea09be6 { width:",[0,80],"; height:",[0,80],"; -webkit-border-radius:50%; border-radius:50%; }\n.",[1],"arrow-block.",[1],"data-v-3ea09be6 { margin-left:",[0,10],"; line-height:",[0,86],"; }\n.",[1],"arrow-ico.",[1],"data-v-3ea09be6 { width:",[0,30],"; height:",[0,30],"; }\n.",[1],"item-wrapper.",[1],"data-v-3ea09be6 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; }\n.",[1],"face-line-upbottom.",[1],"data-v-3ea09be6 { margin-top:",[0,20],"; padding-top:",[0,20],"; padding-bottom:",[0,20],"; }\n.",[1],"right-wrapper.",[1],"data-v-3ea09be6 { width:80%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; }\n.",[1],"gray-fields.",[1],"data-v-3ea09be6 { font-size:14px; color:darkgray; line-height:",[0,80],"; }\n.",[1],"footer-wrapper.",[1],"data-v-3ea09be6 { position:fixed; bottom:0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width:100%; }\n.",[1],"footer-words.",[1],"data-v-3ea09be6 { text-align: center; background-color: white; padding:",[0,20],"; color:#333333; font-size:16px; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/meNickname/meNickname.wxss']=setCssToHead([".",[1],"page-fill.",[1],"data-v-6f572f34 { width:100%; height:100%; position:absolute; }\n.",[1],"graywords.",[1],"data-v-6f572f34 { color:#eaeaea; }\n.",[1],"input.",[1],"data-v-6f572f34 { height:",[0,80],"; line-height:",[0,80],"; width:",[0,500],"; margin-left:",[0,40],"; }\n.",[1],"submitBtn.",[1],"data-v-6f572f34 { width:95%; margin-top:",[0,40],"; }\n",],undefined,{path:"./pages/meNickname/meNickname.wxss"});    
__wxAppCode__['pages/meNickname/meNickname.wxml']=$gwx('./pages/meNickname/meNickname.wxml');

__wxAppCode__['pages/movie/movie.wxss']=setCssToHead(["[v-cloak].",[1],"data-v-c2ea57f0 { display: none; }\n.",[1],"player.",[1],"data-v-c2ea57f0 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background-color: black; }\n.",[1],"movie.",[1],"data-v-c2ea57f0 { width: 100%; height: ",[0,440],"; }\n.",[1],"movie-info.",[1],"data-v-c2ea57f0 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; background-color: #f7f4f9; padding: ",[0,40]," ",[0,20],"; }\n.",[1],"cover.",[1],"data-v-c2ea57f0 { width: ",[0,280],"; height: ",[0,380],"; }\n.",[1],"movie-desc.",[1],"data-v-c2ea57f0 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,30],"; width: ",[0,400],"; }\n.",[1],"title.",[1],"data-v-c2ea57f0 { font-size: 30px; }\n.",[1],"basic-info.",[1],"data-v-c2ea57f0 { color: darkgray; font-size: 13px; line-height: ",[0,36],"; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"score-block.",[1],"data-v-c2ea57f0 { background-color: white; margin-top: ",[0,20],"; with: ",[0,360],"; height: ",[0,90],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; padding: ",[0,20],"; -webkit-box-shadow: 3px 2px 10px #dedede; box-shadow: 3px 2px 10px #dedede; }\n.",[1],"score-words.",[1],"data-v-c2ea57f0 { font-size: 12px; color: grey; }\n.",[1],"movie-score.",[1],"data-v-c2ea57f0 { font-size: 26px; font-weight: bold; margin-left: ",[0,8],"; color: #feab2a; line-height: ",[0,60],"; }\n.",[1],"prise-counts.",[1],"data-v-c2ea57f0 { font-size: 12px; line-height: ",[0,44],"; color: grey; }\n.",[1],"plots-block.",[1],"data-v-c2ea57f0 { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"plots-title.",[1],"data-v-c2ea57f0 { color: #a9a9a9; font-size: 14px; }\n.",[1],"plots-desc.",[1],"data-v-c2ea57f0 { margin-top: ",[0,10],"; font-size: 16px; }\n.",[1],"scroll-block.",[1],"data-v-c2ea57f0 { background-color: #f7f4f9; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"scroll-list.",[1],"data-v-c2ea57f0 { width: 100%; white-space: nowrap; margin-top: ",[0,20],"; }\n.",[1],"plot-image.",[1],"data-v-c2ea57f0 { width: ",[0,220],"; height: ",[0,320],"; margin-right: ",[0,10],"; }\n.",[1],"single-actor.",[1],"data-v-c2ea57f0 { width: ",[0,170],"; height: ",[0,240],"; margin-right: ",[0,10],"; }\n.",[1],"actor-wrapper.",[1],"data-v-c2ea57f0 { display: inline-block; }\n.",[1],"actor-name.",[1],"data-v-c2ea57f0 { width: ",[0,170],"; text-align: center; font-size: 15px; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"actor-role.",[1],"data-v-c2ea57f0 { width: ",[0,170],"; text-align: center; font-size: 13px; color: #a9a9a9; white-space: nowrap; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/movie/movie.wxss:2:1)",{path:"./pages/movie/movie.wxss"});    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/registLogin/registLogin.wxss']=setCssToHead([".",[1],"body.",[1],"data-v-3b36b3e4 { border-top:1px solid @dbdbda; padding:0 ",[0,40],"; }\n.",[1],"face-wrapper.",[1],"data-v-3b36b3e4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; margin-top:",[0,120],"; margin-bottom:",[0,120],"; }\n.",[1],"face.",[1],"data-v-3b36b3e4 { width:",[0,160],"; height:",[0,160],"; }\n.",[1],"info-wrapper.",[1],"data-v-3b36b3e4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; border-bottom:1px solid #dbdbda; padding-bottom:",[0,20],"; }\n.",[1],"words-lbl.",[1],"data-v-3b36b3e4 { color:#808080; }\n.",[1],"input.",[1],"data-v-3b36b3e4 { width:",[0,500],"; margin-left:",[0,40],"; }\n.",[1],"graywords.",[1],"data-v-3b36b3e4 { color:#eaeaea; }\n.",[1],"third-wrapper.",[1],"data-v-3b36b3e4 { width: 100%; margin-top: ",[0,60],"; }\n.",[1],"third-line.",[1],"data-v-3b36b3e4 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-words.",[1],"data-v-3b36b3e4 { color: #A9A9A9; font-size: 13px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"single-line.",[1],"data-v-3b36b3e4 { padding: ",[0,15]," ",[0,20],"; width: 25%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"third-icos-wrapper.",[1],"data-v-3b36b3e4 { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"third-ico.",[1],"data-v-3b36b3e4 { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"third-btn-ico.",[1],"data-v-3b36b3e4 { background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png); width: ",[0,60],"; height: ",[0,60],"; background-color: white; background-size: ",[0,60]," ",[0,60],"; background-repeat:no-repeat; border:none; padding: 0; }\nwx-button.",[1],"data-v-3b36b3e4::after{ border: none; }\n",],undefined,{path:"./pages/registLogin/registLogin.wxss"});    
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"poster { width:",[0,200],"; height:",[0,270],"; }\n.",[1],"movie-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap:wrap; -ms-flex-wrap:wrap; flex-wrap:wrap; padding:",[0,100]," ",[0,10]," 0 ",[0,10],"; }\n.",[1],"movie-wrapper { padding:",[0,10]," -webkit-calc(",[0,130]," / 6); padding:",[0,10]," calc(",[0,130]," / 6); }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/sex/sex.wxss']=setCssToHead([".",[1],"page-fill.",[1],"data-v-445b3934 { width:100%; height:100%; position:absolute; }\n.",[1],"radio-sex.",[1],"data-v-445b3934 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; }\n.",[1],"radio-single.",[1],"data-v-445b3934 { padding:",[0,20]," ",[0,20],"; }\n.",[1],"submitBtn.",[1],"data-v-445b3934 { width:95%; margin-top:",[0,40],"; }\n",],undefined,{path:"./pages/sex/sex.wxss"});    
__wxAppCode__['pages/sex/sex.wxml']=$gwx('./pages/sex/sex.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
