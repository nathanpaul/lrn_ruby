/*!CK:320458087!*//*1428406625,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fAGKz"]); }

__d("MessengerDispatcher",["Dispatcher"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';e.exports=new g();},null);
__d("MNCommerceActionTypes",["keyMirrorRecursive"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';var h=g({RECEIPT:{LOADED:null,LOAD_ERROR:null},SHIPMENT:{LOADED:null,LOAD_ERROR:null},DIALOG:{SHOW:null,HIDE:null}});e.exports=h;},null);
__d("MNCommerceDialogStateActions",["MessengerDispatcher","MNCommerceActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={showDialog:function(j,k){g.dispatch({type:h.DIALOG.SHOW,dialogContainer:j,state:k});},hideDialog:function(){g.dispatch({type:h.DIALOG.HIDE});}};e.exports=i;},null);
__d("MNCommerceReceiptActions",["MessengerDispatcher","MNCommerceActionTypes"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i={receiptLoaded:function(j){g.dispatch({type:h.RECEIPT.LOADED,receipt:j});},receiptLoadError:function(j){g.dispatch({type:h.RECEIPT.LOAD_ERROR,receiptID:j});}};e.exports=i;},null);
__d("MessengerAttachmentImageBlock.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=g,k=j.PropTypes,l=g.createClass({displayName:"MessengerAttachmentImageBlock",propTypes:{attachment:k.object.isRequired},render:function(){return (g.createElement("div",{className:i(this.props.className,this._computeClass())},this._renderImage(),g.createElement("div",{className:"_5swm"},this.props.children)));},_renderImage:function(){var n=this._getDimensions(),o=n.height,p=n.width;if(!o||!p)return null;var q=o>p,r=m(o,p),s=o/p*100,t=(q||r)?.2:1,u=(q||r)?s:52;return (g.createElement("div",{className:"_3xn1",style:{backgroundImage:'url('+this.props.attachment.media.image+')',paddingBottom:q&&s>150?'136px':u*t+'%'}}));},_computeClass:function(){var n=this._getDimensions(),o=n.height,p=n.width;if(!o||!p)return "_3xn3 _5swn";var q=o>p;return (("_3xn3")+(m(o,p)&&!q?' '+"_3xn5":'')+(q?' '+"_3xn6":'')+(p>=o?' '+"_3xn7":''));},_getDimensions:function(){var n=this.props.attachment.properties||{},o=n.height,p=n.width;if(o&&p){o=parseInt(o,10);p=parseInt(p,10);return {height:o,width:p};}return {height:0,width:0};}});function m(n,o){return n<=300&&o<=300;}e.exports=l;},null);
__d("MessengerButton.react",["ReactComponentWithPureRenderMixin","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();'use strict';var k=h,l=k.PropTypes,m=h.createClass({displayName:"MessengerButton",mixins:[g],propTypes:{label:l.string.isRequired,type:l.oneOf(['primary','secondary']).isRequired,use:l.oneOf(['default','danger']).isRequired},getDefaultProps:function(){return {use:'default'};},handleLinkClick:function(n){if(this.props.disabled){n.preventDefault();}else if(this.props.onClick)this.props.onClick(n);},render:function(){var n=this.props,o=n.className,p=n.label,q=(function(r,s){var t={},u=Object.prototype.hasOwnProperty;if(r==null)throw new TypeError();for(var v in r)if(u.call(r,v)&&!u.call(s,v))t[v]=r[v];return t;})(n,{className:1,label:1});return (h.createElement("a",h.__spread({className:j((("_3quh")+(' '+"_5vn4")+(' '+"_30yy")+(this.props.type==='primary'?' '+"_3qui":'')+(this.props.type==='secondary'?' '+"_3quj":'')+(this.props.use==='danger'?' '+"_3ay_":'')+(this.props.disabled?' '+"_4zab":'')),o),href:"#"},q,{onClick:this.handleLinkClick}),p));}});e.exports=m;},null);
__d("MessengerContextualDialog.react",["ReactAbstractContextualDialog","ReactLayer","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=12,k=h.createClass(g.createSpec({displayName:'MessengerContextualDialog',theme:{wrapperClassName:"_1r_9",arrowDimensions:{offset:j,length:16}}}));e.exports=k;},null);
__d("MessengerDialog.react",["LayerFadeOnHide","LayerHideOnEscape","React","XUIDialog.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=i,n=m.PropTypes,o=i.createClass({displayName:"MessengerDialog",propTypes:{onToggle:n.func.isRequired,repositionOnUpdate:n.bool,shown:n.bool,width:n.number},getDefaultProps:function(){return {repositionOnUpdate:false,shown:true,width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout(function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}.bind(this));},render:function(){return (i.createElement(j,i.__spread({behaviors:{LayerFadeOnHide:g,LayerHideOnEscape:h}},this.props,{className:l("_4ebx",this.props.className),ref:"dialog"}),i.createElement("div",{className:"_4eby"},this.props.children)));}});e.exports=o;},null);
__d("MessengerDialogBody.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=g.createClass({displayName:"MessengerDialogBody",render:function(){return (g.createElement("div",{className:i("_4eb-",this.props.className)},this.props.children));}});e.exports=j;},null);
__d("MessengerDialogButton.react",["MessengerButton.react","ReactComponentWithPureRenderMixin","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=i,m=l.PropTypes,n=i.createClass({displayName:"MessengerDialogButton",mixins:[h],propTypes:{action:m.oneOf(['button','cancel','confirm'])},render:function(){var o=this.props,p=o.action,q=o.className,r=(function(s,t){var u={},v=Object.prototype.hasOwnProperty;if(s==null)throw new TypeError();for(var w in s)if(v.call(s,w)&&!v.call(t,w))u[w]=s[w];return u;})(o,{action:1,className:1});return (i.createElement(g,i.__spread({className:k(q,(("_5ixy")+(p==='button'?' '+"layerButton":'')+(p==='cancel'?' '+"layerCancel":'')+(p==='confirm'?' '+"layerConfirm":'')))},r)));}});e.exports=n;},null);
__d("MessengerDialogFooter.react",["LeftRight.react","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();'use strict';var k=h,l=k.PropTypes,m=h.createClass({displayName:"MessengerDialogFooter",propTypes:{leftContent:l.object},render:function(){return (h.createElement("div",{className:j("_4eb_",this.props.className)},h.createElement(g,null,h.createElement("div",{className:"_2_d1"},this.props.leftContent),h.createElement("div",null,this.props.children))));}});e.exports=m;},null);
__d("MessengerDialogHeader.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=g.createClass({displayName:"MessengerDialogHeader",render:function(){return (g.createElement("h4",{className:i("_4ebz",this.props.className)},this.props.children));}});e.exports=j;},null);
__d("MessengerText.react",["ReactComponentWithPureRenderMixin","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();'use strict';var k=h,l=k.PropTypes,m=h.createClass({displayName:"MessengerText",mixins:[g],propTypes:{type:l.oneOf(['primary','secondary']).isRequired,size:l.oneOf(['small'])},render:function(){return (h.createElement("div",h.__spread({},this.props,{className:j((("_39r5")+(this.props.type==='primary'?' '+"_39r6":'')+(this.props.type==='secondary'?' '+"_39r7":'')+(this.props.size==='small'?' '+"_39r8":'')),this.props.className)}),this.props.children));}});e.exports=m;},null);
__d("MNCommerceAddress.react",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';var h=g,i=h.PropTypes,j=g.createClass({displayName:"MNCommerceAddress",propTypes:{address:i.array},render:function(){var k=this.props.address.map(function(l,m){return g.createElement("div",{key:'line'+m},l);});return (g.createElement("div",null,k));}});e.exports=j;},null);
__d("MNCommerceHeaderLabels",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={CANCELED:{plural:(g._("Canceled Items")),single:(g._("Canceled Item"))},RETURNED:{plural:(g._("Returned Items")),single:(g._("Returned Item"))}};e.exports=h;},null);
__d("MNCommerceItemText.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=g,k=j.PropTypes,l=g.createClass({displayName:"MNCommerceItemText",propTypes:{description:k.string,title:k.string,width:k.number,size:k.oneOf(['large','small'])},getDefaultProps:function(){return {size:'small'};},render:function(){var m={width:this.props.width},n=this.props,o=n.className,p=(function(r,s){var t={},u=Object.prototype.hasOwnProperty;if(r==null)throw new TypeError();for(var v in r)if(u.call(r,v)&&!u.call(s,v))t[v]=r[v];return t;})(n,{className:1}),q=(("_swr")+(p.size==='small'?' '+"_sws":''));return (g.createElement("div",g.__spread({className:i(o,q)},p),g.createElement("div",{className:(("_51fw")+(p.size==='large'?' '+"_swt":'')),style:m},this.props.title),g.createElement("div",{className:"_51fx",style:m},this.props.description)));}});e.exports=l;},null);
__d("MNCommerceSingleListItem.react",["Image.react","MNCommerceItemText.react","React","cx","merge"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=i,m=l.PropTypes,n=6,o=i.createClass({displayName:"MNCommerceSingleListItem",propTypes:{description:m.string,thumbURL:m.string,imageDimension:m.number.isRequired},render:function(){var p=this.props.width-n-this.props.imageDimension,q=k(this.props,{width:p});return (i.createElement("div",{className:this.props.className},i.createElement("div",{className:"_1fld",style:{marginRight:n}},this._renderImage()),i.createElement(h,i.__spread({className:"_1flf",style:{height:this.props.imageDimension},size:this.props.size},q))));},_renderImage:function(){var p=this.props.imageDimension;if(this.props.thumbURL){return (i.createElement(g,{className:"_1fle",height:p,src:this.props.thumbURL,width:p}));}else return (i.createElement("div",{className:"_1prr",style:{height:p,width:p}}));}});e.exports=o;},null);
__d("MNCommerceItemList.react",["List.react","MNCommerceSingleListItem.react","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=i,m=l.PropTypes,n=3,o=i.createClass({displayName:"MNCommerceItemList",propTypes:{items:m.array,imageDimension:m.number.isRequired,size:m.oneOf(['small','large']),width:m.number},render:function(){var p=this._getItems(),q=this.props.items.length;if(q>n)p.push(i.createElement("li",{key:"andMore",className:"_24ry"},k._("And {Number of items not visible} more",[k.param("Number of items not visible",q-n)])));return (i.createElement("div",null,i.createElement(g,{border:"none",spacing:"none"},p)));},_getItems:function(){var p=this.props,q=p.imageDimension,r=p.items,s=r.map(function(t){return i.createElement("li",{key:t.id,className:"_24rx"},i.createElement(h,i.__spread({imageDimension:q,size:this.props.size,width:this.props.width},t)));}.bind(this)).slice(0,n);return s;}});e.exports=o;},null);
__d("MNCommerceAttachmentConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={XLARGE_IMAGE_DIMENSION:72,LARGE_IMAGE_DIMENSION:60,SMALL_IMAGE_DIMENSION:32,BUBBLE_PADDING:6,DIALOG:{WIDTH:445,PADDING:12},ORDER_DETAIL:{SUB_TOTAL:'subTotal',SHIPPING:'shippingCost',TAX:'tax',TOTAL:'totalCost'}};e.exports=g;},null);
__d("MNCommerceLogoHeader.react",["Image.react","React","cx"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=h,k=j.PropTypes,l=h.createClass({displayName:"MNCommerceLogoHeader",propTypes:{logo:k.object,label:k.string},render:function(){var m=this._renderLogo();if(this.props.label){return (h.createElement("div",{className:"_56rt"},h.createElement("div",{className:"_56ru"},h.createElement("div",{className:"_56rv"},this.props.label)),h.createElement("div",{className:"_56ru"},m)));}else return m;},_renderLogo:function(){var m=this.props.logo;if(!m)return null;return (h.createElement(g,{className:"_56rs",height:m.height,src:m.src,width:m.width}));}});e.exports=l;},null);
__d("MNCommerceCancelReturnMercuryAttachment.react",["MNCommerceHeaderLabels","MNCommerceItemList.react","MNCommerceAttachmentConstants","MNCommerceLogoHeader.react","React","StoryAttachmentStyle","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=k,o=n.PropTypes,p='retail_return',q=k.createClass({displayName:"MNCommerceCancelReturnMercuryAttachment",propTypes:{items:o.array.isRequired,logo:o.object,type:o.string,width:o.number,onAttachmentClick:o.func},render:function(){var r=this._getHeaderLabelText();return (k.createElement("div",{onClick:this.props.onAttachmentClick,className:"_l4o"},k.createElement("div",{className:"_l4p"},k.createElement(j,{label:r,logo:this.props.logo})),k.createElement("div",{className:"_l4q"},this._renderItemDescriptions())));},_getHeaderLabelText:function(){var r;switch(this.props.type){case l.RETAIL_CANCELLATION:r=g.CANCELED;break;case p:r=g.RETURNED;break;}var s;if(r)if(this.props.items.length===1){s=r.single;}else s=r.plural;return s;},_renderItemDescriptions:function(){if(!this.props.items.length)return null;var r=this.props.width-2*i.BUBBLE_PADDING;return (k.createElement(h,{items:this.props.items,imageDimension:i.LARGE_IMAGE_DIMENSION,size:"large",width:r}));}});e.exports=q;},null);
__d("MNCommerceDialogStateStore",["FluxStore","MessengerDispatcher","MNCommerceActionTypes"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';for(var j in g)if(g.hasOwnProperty(j))l[j]=g[j];var k=g===null?null:g.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=g;function l(){g.call(this,h);this.$MNCommerceDialogStateStore0=null;this.$MNCommerceDialogStateStore1=null;}l.prototype.__onDispatch=function(m){var n=m.type;switch(n){case i.DIALOG.SHOW:this.$MNCommerceDialogStateStore0=m.dialogContainer;this.$MNCommerceDialogStateStore1=m.state;this.__emitChange();break;case i.DIALOG.HIDE:this.$MNCommerceDialogStateStore0=null;this.$MNCommerceDialogStateStore1=null;this.__emitChange();break;}};l.prototype.getDialogContainer=function(){return this.$MNCommerceDialogStateStore0;};l.prototype.getState=function(){return this.$MNCommerceDialogStateStore1;};e.exports=new l();},null);
__d("MNCommerceDetailSection.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g,j=i.PropTypes,k=g.createClass({displayName:"MNCommerceDetailSection",propTypes:{headerLabel:j.string.isRequired,margin:j.number},getDefaultProps:function(){return {margin:0};},render:function(){return (g.createElement("div",{className:this.props.className},g.createElement("div",{className:"_5171",style:{marginBottom:this.props.margin}},this.props.headerLabel),this.props.children));}});e.exports=k;},null);
__d("MNCommerceOrderDetailsDialog.react",["Link.react","MNCommerceAddress.react","MNCommerceAttachmentConstants","MNCommerceDetailSection.react","MNCommerceItemList.react","MNCommerceLogoHeader.react","React","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","cx","fbt","mergeDeep"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();'use strict';var t=m,u=t.PropTypes,v=[i.ORDER_DETAIL.SUB_TOTAL,i.ORDER_DETAIL.SHIPPING,i.ORDER_DETAIL.TAX,i.ORDER_DETAIL.TOTAL],w={};w[i.ORDER_DETAIL.SUB_TOTAL]=r._("Subtotal");w[i.ORDER_DETAIL.SHIPPING]=r._("Shipping");w[i.ORDER_DETAIL.TAX]=r._("Tax");w[i.ORDER_DETAIL.TOTAL]=r._("Total");var x=m.createClass({displayName:"MNCommerceOrderDetailsDialog",propTypes:{receipt:u.object},getDefaultProps:function(){return {shown:false};},getInitialState:function(){return this._calculateState(this.props);},componentWillReceiveProps:function(y){this.setState(this._calculateState(y));},_calculateState:function(y){var z=y.receipt;return {address:z.address?[z.address]:[],changeURL:z.order_url,items:this._processItems(z.items),logo:z.partner_logo?{height:z.partner_logo.height,width:z.partner_logo.width,src:z.partner_logo.url}:null,orderDate:z.order_time,orderNumber:z.receipt_id,orderStatus:z.status,payment:z.payment_method,shippingCost:z.shipping_cost,subTotal:z.subtotal,tax:z.total_tax,totalCost:z.total_cost};},render:function(){var y=this._renderCallToAction();return (m.createElement(n,{className:"_1eio",onToggle:this.props.onToggle,shown:this.props.shown,width:i.DIALOG.WIDTH},m.createElement(p,null,r._("Order Details")),m.createElement(o,{useCustomPadding:true},m.createElement("div",{className:"_4vx2"},this._renderLogo(),this._renderItems(),y,m.createElement("div",{className:(("_2hsz")+(!y?' '+"_2hs-":''))}),m.createElement("div",null,m.createElement("div",null,m.createElement(j,{className:"_4vx4 _4vx5",headerLabel:r._("ORDERED ON")},this.state.orderDate),this._renderStatus()),m.createElement(j,{className:"_4vx4",headerLabel:r._("SHIP TO")},m.createElement(h,{address:this.state.address})),m.createElement(j,{className:"_4vx4",headerLabel:r._("PAYMENT")},this.state.payment),m.createElement(j,{className:"_4vx4",headerLabel:r._("ORDER SUMMARY")},this._renderOrderSummary())),m.createElement("div",{className:"_4vx6"},r._("Order {order number}",[r.param("order number",this.state.orderNumber)]))))));},_processItems:function(y){var z=Object.keys(y).map(function(aa){var ba=y[aa],ca=s({},ba);ca.id=aa;ca.thumbURL=ba.thumb_url;return ca;});return z;},_renderLogo:function(){if(!this.state.logo)return null;return (m.createElement("div",{className:"_4vx3"},m.createElement(l,{logo:this.state.logo})));},_renderStatus:function(){if(!this.state.orderStatus||!this.state.orderStatus.length)return null;return (m.createElement(j,{className:"_4vx4 _4vx5",headerLabel:r._("STATUS")},this.state.orderStatus));},_renderItems:function(){var y=i.DIALOG.WIDTH-2*i.DIALOG.PADDING;return (m.createElement(k,{imageDimension:i.XLARGE_IMAGE_DIMENSION,items:this.state.items,size:"large",width:y}));},_renderCallToAction:function(){if(this.state.changeURL)return (m.createElement("div",{className:"_4vx7"},m.createElement(g,{className:"_4vx8",href:this.state.changeURL},r._("Modify Order"))));return null;},_renderOrderSummary:function(){var y=v.map(function(z){var aa=this.state[z];return (m.createElement("div",{className:((z==='totalCost'?"_4vx9":'')),key:z},m.createElement("div",{className:"_4vx5"},w[z]),m.createElement("div",{className:"_4vx5"},aa||'--')));}.bind(this));return y;}});e.exports=x;},null);
__d("MNCommerceCacheTimeoutLimits",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();'use strict';var g={SUCCESS_TIMEOUT:10,ERROR_TIMEOUT:1};e.exports=g;},null);
__d("MNCommerceReceiptDataManager",["AsyncRequest","MNCommerceReceiptActions","XMNCommerceOrderDetailsController"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';function j(){}j.prototype.fetchReceipt=function(k){var l=i.getURIBuilder().setString('receipt_id',k).getURI();new g().setURI(l).setHandler(this.$MNCommerceReceiptDataManager0).setErrorHandler(this.$MNCommerceReceiptDataManager1).send();};j.prototype.$MNCommerceReceiptDataManager0=function(k){h.receiptLoaded(k.payload);};j.prototype.$MNCommerceReceiptDataManager1=function(k){var l=k.getRequest().uri.getQueryData(),m=l.receipt_id;h.receiptLoadError(m);};e.exports=new j();},null);
__d("MNCommerceReceiptStore",["Cache","FluxStore","LoadObject","MessengerDispatcher","MNCommerceActionTypes","MNCommerceCacheTimeoutLimits","MNCommerceReceiptDataManager"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';for(var n in h)if(h.hasOwnProperty(n))p[n]=h[n];var o=h===null?null:h.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=h;function p(){h.call(this,j);this.$MNCommerceReceiptStore0=new g();}p.prototype.__onDispatch=function(q){var r=q.type;switch(r){case k.RECEIPT.LOADED:var s=q.receipt;this.$MNCommerceReceiptStore0.set(s.receipt_id,i.done().setValue(s),null,l.SUCCESS_TIMEOUT);this.__emitChange();break;case k.RECEIPT.LOAD_ERROR:var t=q.receiptID;this.$MNCommerceReceiptStore0.set(t,i.done().setError(new Error('Unable to load receipt: '+t)),null,l.ERROR_TIMEOUT);this.__emitChange();break;}};p.prototype.getReceipt=function(q){if(q&&!this.$MNCommerceReceiptStore0.has(q)){this.$MNCommerceReceiptStore0.set(q,i.loading().setValue({receiptID:q}));m.fetchReceipt(q);}return this.$MNCommerceReceiptStore0.get(q)||i.done();};e.exports=new p();},null);
__d("MNCommerceOrderDetailsDialogContainer.react",["MNCommerceDialogStateActions","MNCommerceDialogStateStore","MNCommerceOrderDetailsDialog.react","MNCommerceReceiptStore","PureStoreBasedStateMixin","React"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=l.createClass({displayName:"MNCommerceOrderDetailsDialogContainer",mixins:[k(j)],statics:{calculateState:function(){var n=h.getState(),o=null;if(n)o=n.receiptID;var p=j.getReceipt(o);return {shown:!!n&&!p.isLoading(),receipt:p.getValue()};}},render:function(){if(!this.state.receipt.receipt_id)return null;return (l.createElement(i,{onToggle:this._onToggle,shown:this.state.shown,receipt:this.state.receipt}));},_onToggle:function(n){if(!n)g.hideDialog();}});e.exports=m;},null);
__d("MNCommerceCancelReturnMercuryShareAttachment.react",["MercuryShareAttachmentReactShape","MNCommerceCancelReturnMercuryAttachment.react","MNCommerceDialogStateActions","MNCommerceOrderDetailsDialogContainer.react","StoryAttachmentStyle","React"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=l,n=m.PropTypes,o=l.createClass({displayName:"MNCommerceCancelReturnMercuryShareAttachment",propTypes:{attachment:g,maxWidth:n.number},render:function(){var p=this.props.attachment,q=[],r=p.target.items;Object.keys(r).forEach(function(t){var u=r[t],v=Object.assign({},u);v.id=t;v.thumbURL=u.thumb_url;q.push(v);});var s={items:q,onAttachmentClick:this._onAttachmentClick,type:k.RETAIL_CANCELLATION,width:this.props.maxWidth};return (l.createElement(h,l.__spread({},s)));},_onAttachmentClick:function(){i.showDialog(j,{receiptID:this.props.attachment.target.receipt_id});}});e.exports=o;},null);
__d("MNCommerceDialogContainer.react",["MNCommerceDialogStateStore","PureStoreBasedStateMixin","React"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();'use strict';var j=i.createClass({displayName:"MNCommerceDialogContainer",mixins:[h(g)],statics:{calculateState:function(){var k=g.getDialogContainer();return {dialogContainer:k};}},render:function(){var k=this.state.dialogContainer;if(!k)return null;return i.createElement(k,null);}});e.exports=j;},null);
__d("MNCommerceFooterTypes",["keyMirror"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=g({TOTAL:null,REFUND:null});e.exports=h;},null);
__d("MNCommerceTotalCostFooter.react",["LeftRight.react","MNCommerceFooterTypes","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=i,m=l.PropTypes,n=i.createClass({displayName:"MNCommerceTotalCostFooter",propTypes:{type:m.oneOf(Object.keys(h)),totalCost:m.string},render:function(){var o,p;switch(this.props.type){case h.TOTAL:o=(k._("Total"));p="_28k2";break;case h.REFUND:o=(k._("Refund"));p="_28k3";break;default:o='';p='';break;}return (i.createElement(g,{className:p},i.createElement("div",null,o),i.createElement("div",{className:"_28k4"},this.props.totalCost)));}});e.exports=n;},null);
__d("MNCommerceReceiptMercuryAttachment.react",["Image.react","MNCommerceFooterTypes","MNCommerceItemList.react","MNCommerceAttachmentConstants","MNCommerceLogoHeader.react","MNCommerceItemText.react","MNCommerceTotalCostFooter.react","React","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p=n,q=p.PropTypes,r=n.createClass({displayName:"MNCommerceReceiptMercuryAttachment",propTypes:{items:q.array.isRequired,logo:q.object,totalCost:q.string,width:q.number,onAttachmentClick:q.func},render:function(){var s=this.props.items.length>1?"_abt":"_abu",t=this.props.logo,u=t?n.createElement("div",{className:s},n.createElement(k,{logo:t})):null;return (n.createElement("div",{className:"_1xjh",onClick:this.props.onAttachmentClick},this._renderSingleImage(),n.createElement("div",{style:{padding:j.BUBBLE_PADDING}},u,n.createElement("div",{className:"_xmt"},this._renderItemDescriptions()),n.createElement("div",{className:"_xmx"},n.createElement(m,{totalCost:this.props.totalCost,type:h.TOTAL})))));},_renderSingleImage:function(){if(!this.props.items.length||this.props.items.length>1)return null;var s=this.props.items[0];return (n.createElement(g,{className:"_xm1",height:s.imageHeight,src:s.thumbURL,width:s.imageWidth}));},_renderItemDescriptions:function(){if(!this.props.items.length)return null;var s=this.props.width-2*j.BUBBLE_PADDING,t={size:'large',width:s};if(this.props.items.length===1){var u=this.props.items[0];return (n.createElement(l,n.__spread({description:u.description,title:u.title},t)));}return (n.createElement(i,n.__spread({items:this.props.items,imageDimension:j.LARGE_IMAGE_DIMENSION},t)));}});e.exports=r;},null);
__d("MNCommerceReceiptMercuryShareAttachment.react",["MercuryShareAttachmentReactShape","MNCommerceDialogStateActions","MNCommerceOrderDetailsDialogContainer.react","MNCommerceReceiptMercuryAttachment.react","React","mergeDeep"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';var m=k,n=m.PropTypes,o=k.createClass({displayName:"MNCommerceReceiptMercuryShareAttachment",propTypes:{attachment:g,maxWidth:n.number},render:function(){var p=this.props.attachment,q=[],r=p.target.items;Object.keys(r).forEach(function(t){var u=r[t],v=l({},u);v.id=t;v.thumbURL=u.thumb_url;q.push(v);});var s={items:q,totalCost:p.target.total_cost,width:this.props.maxWidth,onAttachmentClick:this._onAttachmentClick};return (k.createElement(j,k.__spread({},s)));},_onAttachmentClick:function(){h.showDialog(i,{receiptID:this.props.attachment.target.receipt_id});}});e.exports=o;},null);
__d("MNCommerceShippingMercuryAttachment.react",["MNCommerceItemList.react","MNCommerceAttachmentConstants","MNCommerceLogoHeader.react","MNCommerceShipmentTrackingEventTypes","React","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=k,o=n.PropTypes,p=k.createClass({displayName:"MNCommerceShippingMercuryAttachment",propTypes:{carrierName:o.string,deliveryDate:o.string,deliveryPeriod:o.string,hasUnsupportedCarrier:o.bool,items:o.array.isRequired,logo:o.object,shippingDate:o.string,type:o.number,width:o.number},render:function(){var q=null;if(!this.props.hasUnsupportedCarrier&&this.props.logo)q=k.createElement("div",{className:"_3lx4"},k.createElement(i,{logo:this.props.logo}));var r=this.props.items.length>1?m._("Item"):m._("Items");return (k.createElement("div",{className:"_3lx3"},q,k.createElement("div",{className:"_3lx5"},this._renderShippingSection(),this._renderDeliveryOrCarrierSection(),k.createElement("p",{className:"_5ry9 _3lxb"},r),this._renderItemDescriptions())));},_renderDeliveryOrCarrierSection:function(){var q,r;if(this.props.hasUnsupportedCarrier){q=(m._("Carrier"));r=k.createElement("p",{className:"_5rya"},this.props.carrierName);}else if(!this.props.deliveryDate){return null;}else{q=this._getDeliveryLabel();var s=this.props.type===j.DELAYED?k.createElement("span",null,k.createElement("span",{className:"_5ryb"},m._("Delayed")),' '," · ",' '):'',t=this.props.deliveryDate;if(this.props.deliveryPeriod)t+=', '+this.props.deliveryPeriod;r=k.createElement("p",{className:"_5rya"},s,t);}return (k.createElement("div",{className:"_3lx6"},k.createElement("p",{className:"_5ry9"},q),r));},_getDeliveryLabel:function(){switch(this.props.type){case j.OUT_FOR_DELIVERY:return (m._("Out for delivery on"));case j.DELIVERED:return (m._("Delivered on"));default:return (m._("Delivery on"));}},_renderShippingSection:function(){if(!this.props.type)return (k.createElement("div",{className:"_3lx6"},k.createElement("p",{className:"_5ry9"},m._("Shipped On")),k.createElement("p",{className:"_5rya"},this.props.shippingDate)));return null;},_renderItemDescriptions:function(){if(!this.props.items.length)return null;var q=this.props.width-2*h.BUBBLE_PADDING;return (k.createElement(g,{items:this.props.items,imageDimension:h.SMALL_IMAGE_DIMENSION,size:"small",width:q}));}});e.exports=p;},null);
__d("MNCommerceShippingMercuryShareAttachment.react",["MercuryShareAttachmentReactShape","MNCommerceShippingMercuryAttachment.react","ReactComponentWithPureRenderMixin","React","formatDate"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();'use strict';var l=j,m=l.PropTypes,n=j.createClass({displayName:"MNCommerceShippingMercuryShareAttachment",mixins:[i],propTypes:{attachment:g,maxWidth:m.number},render:function(){var o=this.props.attachment,p=[],q=o.target.items;Object.keys(q).forEach(function(w){var x=q[w],y=Object.assign({},x);y.id=w;y.thumbURL=x.thumb_url;p.push(y);});var r=o.target,s=r.ship_date?k(r.ship_date,'D M d')+', '+k(r.ship_date,'g:ia'):null,t=r.estimated_delivery_time||r.timestamp,u=t?k(t,'D M d'):null,v={carrierName:r.carrier,deliveryDate:u,items:p,width:this.props.maxWidth,type:r.tracking_event_type,shippingDate:s};return (j.createElement(h,j.__spread({},v)));}});e.exports=n;},null);