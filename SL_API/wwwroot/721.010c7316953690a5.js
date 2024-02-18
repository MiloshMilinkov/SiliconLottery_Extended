"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[721],{5721:(le,x,r)=>{r.r(x),r.d(x,{ShopModule:()=>pe});var d=r(6895);class b{constructor(){this.brandId=null,this.typeId=null,this.orderBy="",this.pageIndex=1,this.pageSize=6,this.searchTerm=""}}var e=r(1571),C=r(529),A=r(4004),M=r(9646),O=r(2340);let v=(()=>{class n{constructor(t){this.http=t,this.baseUrl=O.N.apiUrl,this.products=[],this.brands=[],this.types=[]}getProducts(t){let i=new C.LE;return null!==t.brandId&&(i=i.append("brandId",t.brandId)),null!==t.typeId&&(i=i.append("typeId",t.typeId)),t.searchTerm&&(i=i.append("searchTerm",t.searchTerm)),i=i.append("orderBy",t.orderBy),i=i.append("pageIndex",t.pageIndex.toString()),i=i.append("pageSize",t.pageSize.toString()),console.log(t.pageIndex,t.pageSize),this.http.get(this.baseUrl+"products",{params:i}).pipe((0,A.U)(s=>(this.products=s.data,s)))}getBrands(){return this.http.get(this.baseUrl+"products/brands")}getTypes(){return this.http.get(this.baseUrl+"products/types")}getProduct(t){const i=this.products.find(s=>s.id===t);return i?(0,M.of)(i):this.http.get(this.baseUrl+"products/"+t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function I(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1,"Showing "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," of "),e.TgZ(5,"strong"),e._uU(6),e.qZA(),e._uU(7," results"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",(t.pageIndex-1)*t.pageSize+1,"- ",t.pageIndex*t.pageSize>t.count?t.count:t.pageIndex*t.pageSize," "),e.xp6(3),e.Oqu(t.count)}}function w(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1,"There are "),e.TgZ(2,"strong"),e._uU(3,"0"),e.qZA(),e._uU(4," results for the choosen filter!"),e.qZA())}function Z(n,o){if(1&n&&(e.TgZ(0,"header"),e.YNc(1,I,8,3,"span",0),e.YNc(2,w,5,0,"span",0),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.count>0),e.xp6(1),e.Q6J("ngIf",0===t.count)}}let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-paging-header"]],inputs:{pageIndex:"pageIndex",pageSize:"pageSize",count:"count"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(t,i){1&t&&e.YNc(0,Z,3,2,"header",0),2&t&&e.Q6J("ngIf",i.count&&i.pageIndex&&i.pageSize)},dependencies:[d.O5]}),n})();var U=r(2521);function E(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"pagination",1),e.NdJ("pageChanged",function(s){e.CHM(t);const c=e.oxw();return e.KtG(c.onPagerChanged(s))}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("boundaryLinks",!0)("totalItems",t.count)("itemsPerPage",t.pageSize)("maxSize",5)}}let B=(()=>{class n{constructor(){this.pageChanged=new e.vpe}onPagerChanged(t){this.pageChanged.emit(t.page)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-pager"]],inputs:{count:"count",pageSize:"pageSize"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","pageChanged"]],template:function(t,i){1&t&&e.YNc(0,E,1,4,"pagination",0),2&t&&e.Q6J("ngIf",i.count&&i.pageSize)},dependencies:[d.O5,U.Qt]}),n})();var y=r(433);let D=(()=>{class n{constructor(){this._listeners=[]}notify(t,i){for(let s of this._listeners)s(t,i)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i)}}ngOnDestroy(){this._listeners=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=r(1281),S=r(7579),z=r(727);let F=0;const f=new e.OlP("CdkAccordion");let J=(()=>{class n{constructor(){this._stateChanges=new S.x,this._openCloseAllActions=new S.x,this.id="cdk-accordion-"+F++,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,_.Ig)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e._Bn([{provide:f,useExisting:n}]),e.TTD]}),n})(),N=0,Q=(()=>{class n{get expanded(){return this._expanded}set expanded(t){t=(0,_.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,_.Ig)(t)}constructor(t,i,s){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=s,this._openCloseAllSubscription=z.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+N++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=s.listen((c,a)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===a&&this.id!==c&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f,12),e.Y36(e.sBO),e.Y36(D))},n.\u0275dir=e.lG2({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:f,useValue:void 0}])]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var T=r(7236),P=r(5866),m=r(6949);function H(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e._UZ(2,"img",3),e._uU(3," < "),e.TgZ(4,"div",4)(5,"button",5),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addItemToBasket())}),e.qZA(),e.TgZ(6,"button",6),e._uU(7,"View"),e.qZA()()(),e.TgZ(8,"div",7)(9,"a",8)(10,"h6",9),e._uU(11),e.qZA()(),e.TgZ(12,"span",10),e._uU(13),e.ALo(14,"currency"),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(2),e.s9C("src",t.product.pictureUrl,e.LSH),e.s9C("alt",t.product.name),e.xp6(4),e.MGl("routerLink","/shop/",t.product.id,""),e.xp6(5),e.hij(" ",t.product.name," "),e.xp6(2),e.hij(" ",e.lcZ(14,5,t.product.price)," ")}}let V=(()=>{class n{constructor(t){this.basketService=t}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card shadow-sm",4,"ngIf"],[1,"card","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,i){1&t&&e.YNc(0,H,15,7,"div",0),2&t&&e.Q6J("ngIf",i.product)},dependencies:[d.O5,m.rH,d.H9],styles:[".card[_ngcontent-%COMP%]{border-radius:15px;overflow:hidden;box-shadow:0 4px 8px #00000080;background-color:#121212;color:silver;transition:transform .4s ease,box-shadow .4s ease;height:350px;width:100%;display:flex;flex-direction:column}.image[_ngcontent-%COMP%]{flex-grow:2;width:100%;overflow:hidden}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card-body[_ngcontent-%COMP%]{flex-grow:1;background-color:#1a1a1a;color:#fff;padding:15px;display:flex;flex-direction:column;justify-content:space-around}.btn[_ngcontent-%COMP%]{background-color:#ff0097;border:none;color:#000;font-weight:700;border-radius:5px;transition:background-color .3s ease}.btn[_ngcontent-%COMP%]:hover{background-color:#f0f}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}.image[_ngcontent-%COMP%]:hover   .hover-overlay[_ngcontent-%COMP%]{opacity:1}.image[_ngcontent-%COMP%]:hover   .hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:none;opacity:1}.fa-shopping-cart[_ngcontent-%COMP%]{color:#000}h6[_ngcontent-%COMP%]{color:#ff0097}"]}),n})();const G=["search"];function j(n,o){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.name)}}function L(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",32),e.NdJ("click",function(){const c=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.onBrandSelected(c.id))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&n){const t=o.$implicit,i=e.oxw(2);e.ekj("active",t.id===i.shopParams.brandId),e.xp6(2),e.Oqu(t.name)}}function R(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",33),e.NdJ("click",function(){const c=e.CHM(t).$implicit,a=e.oxw(2);return e.KtG(a.onTypeSelected(c.id))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._UZ(3,"img",34),e.qZA()}if(2&n){const t=o.$implicit,i=e.oxw(2);e.ekj("active",t.id===i.shopParams.typeId),e.xp6(2),e.Oqu(t.name),e.xp6(1),e.Q6J("src",i.getImageUrlForType(t.id),e.LSH)}}function K(n,o){if(1&n&&(e.TgZ(0,"div",37)(1,"div",38),e._UZ(2,"app-product-item",39),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.Q6J("product",t)}}function $(n,o){if(1&n&&(e.TgZ(0,"div",35),e.YNc(1,K,3,1,"div",36),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.products)}}function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",40)(1,"app-pager",41),e.NdJ("pageChanged",function(s){e.CHM(t);const c=e.oxw(2);return e.KtG(c.onPageChanged(s))}),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("count",t.count)("pageSize",t.shopParams.pageSize)}}function X(n,o){1&n&&(e.TgZ(0,"div",2)(1,"div",42),e._UZ(2,"img",43),e.TgZ(3,"p",44),e._uU(4,"There are no products for the categories you selected!"),e.qZA()()())}function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"aside",3)(2,"div")(3,"h5",4),e._uU(4,"Sort"),e.qZA(),e.TgZ(5,"select",5),e.NdJ("change",function(s){e.CHM(t);const c=e.oxw();return e.KtG(c.onSortSelected(s))}),e.YNc(6,j,2,2,"option",6),e.qZA()(),e.TgZ(7,"div",7)(8,"cdk-accordion",8)(9,"cdk-accordion-item",9,10)(11,"div",11),e.NdJ("click",function(){e.CHM(t);const s=e.MAs(10);return e.KtG(s.toggle())}),e.TgZ(12,"div",12)(13,"p"),e._uU(14,"PRODUCT BRANDS"),e.qZA(),e.TgZ(15,"span",13),e._uU(16),e.qZA()()(),e.TgZ(17,"div",14)(18,"ul",15),e.YNc(19,L,3,3,"li",16),e.qZA()()(),e.TgZ(20,"cdk-accordion-item",9,17)(22,"div",11),e.NdJ("click",function(){e.CHM(t);const s=e.MAs(21);return e.KtG(s.toggle())}),e.TgZ(23,"div",12)(24,"p"),e._uU(25,"PRODUCT TYPES"),e.qZA(),e.TgZ(26,"span",13),e._uU(27),e.qZA()()(),e.TgZ(28,"div",14)(29,"ul",18),e.YNc(30,R,4,4,"li",19),e.qZA()()()()()(),e.TgZ(31,"main",20)(32,"div",21),e._UZ(33,"app-paging-header",22)(34,"app-section-header"),e.TgZ(35,"div",23)(36,"input",24,25),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSearch())}),e.qZA(),e.TgZ(38,"button",26),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSearch())}),e._uU(39,"Search"),e.qZA(),e.TgZ(40,"button",27),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onResetSearch())}),e._uU(41,"Reset"),e.qZA()()(),e.YNc(42,$,2,1,"div",28),e.YNc(43,W,2,2,"div",29),e.YNc(44,X,5,0,"ng-template",null,30,e.W1O),e.qZA()()}if(2&n){const t=e.MAs(10),i=e.MAs(21),s=e.MAs(45),c=e.oxw();e.xp6(6),e.Q6J("ngForOf",c.sortOptions),e.xp6(10),e.hij(" Click to ",t.expanded?"close":"open"," "),e.xp6(1),e.Udp("display",t.expanded?"":"none"),e.xp6(2),e.Q6J("ngForOf",c.brands),e.xp6(8),e.hij(" Click to ",i.expanded?"close":"open"," "),e.xp6(1),e.Udp("display",i.expanded?"":"none"),e.xp6(2),e.Q6J("ngForOf",c.types),e.xp6(3),e.Q6J("count",c.count)("pageIndex",c.shopParams.pageIndex)("pageSize",c.shopParams.pageSize),e.xp6(9),e.Q6J("ngIf",c.products.length>0)("ngIfElse",s),e.xp6(1),e.Q6J("ngIf",c.count>0)}}let k=(()=>{class n{constructor(t){this.shopService=t,this.products=[],this.brands=[],this.types=[],this.items=["Product Brands","Product Types"],this.expandedIndex=0,this.shopParams=new b,this.sortOptions=[{name:"A-z: Low to high",value:"nameAsc"},{name:"A-z: High to low",value:"nameDesc"},{name:"Price: Low to high",value:"priceAsc"},{name:"Price: High to low",value:"priceDesc"}],this.count=0}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:t=>{console.log(t),this.products=t.data,this.shopParams.pageIndex=t.pageIndex,this.shopParams.pageSize=t.pageSize,this.count=t.count,console.log(t.count)},error:t=>console.log(t),complete:()=>{console.log("request completed")}})}getBrands(){this.shopService.getBrands().subscribe({next:t=>this.brands=[{id:0,name:"All"},...t],error:t=>console.log(t),complete:()=>{console.log("request completed")}})}getTypes(){this.shopService.getTypes().subscribe({next:t=>this.types=[{id:0,name:"All"},...t],error:t=>console.log(t),complete:()=>{console.log("request completed")}})}onBrandSelected(t){this.shopParams.brandId=t,this.shopParams.pageIndex=1,this.getProducts()}onTypeSelected(t){this.shopParams.typeId=t,this.shopParams.pageIndex=1,this.getProducts()}onSortSelected(t){this.shopParams.orderBy=t.target.value,this.getProducts()}onPageChanged(t){this.shopParams.pageIndex!==t&&(this.shopParams.pageIndex=t,this.getProducts())}onSearch(){this.shopParams.searchTerm=this.searchTerm?.nativeElement.value,this.shopParams.pageIndex=1,this.getProducts()}onResetSearch(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new b,this.getProducts()}getImageUrlForType(t){return{0:"/assets/Images/all_icon.jpg",1:"/assets/Images/mobo_icon.png",2:"/assets/Images/cpu_icon.png",3:"/assets/Images/ram_icon.png",4:"/assets/Images/gpu_icon.png",5:"/assets/Images/ssd_icon.png",6:"/assets/Images/hdd_icon.png",7:"/assets/Images/case_icon.png",8:"/assets/Images/psu_icon.png",9:"/assets/Images/fan_icon.png"}[t]||"/assets/Images/default_icon.png"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-shop"]],viewQuery:function(t,i){if(1&t&&e.Gf(G,5),2&t){let s;e.iGM(s=e.CRH())&&(i.searchTerm=s.first)}},decls:2,vars:1,consts:[[1,"container","cyberpunk-container"],["class","row",4,"ngIf"],[1,"row"],[1,"filter-section","col-3"],[1,"sort-header"],[1,"form-select","sort-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-5"],[1,"cyberpunk-accordion"],[1,"accordion-item"],["accordionItem1","cdkAccordionItem"],[1,"accordion-header",3,"click"],[1,"text-container"],[1,"accordion-description"],["role","region",1,"accordion-body"],[1,"brand-list"],["class","brand-item",3,"active","click",4,"ngFor","ngForOf"],["accordionItem2","cdkAccordionItem"],[1,"type-list"],["class","type-item",3,"active","click",4,"ngFor","ngForOf"],[1,"product-section","col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"count","pageIndex","pageSize"],[1,"d-flex","mt-2"],["placeholder","search",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn-search","btn-outline-primary","mx-2",3,"click"],[1,"btn-reset","btn-outline-success",3,"click"],["class","row row-cols-3 g-3 mb-5",4,"ngIf","ngIfElse"],["class","d-flex justify-content-center ",4,"ngIf"],["noProducts",""],[3,"value"],[1,"brand-item",3,"click"],[1,"type-item",3,"click"],["alt","Brand logo.",1,"typelogo",3,"src"],[1,"row","row-cols-3","g-3","mb-5"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"product-item"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"count","pageSize","pageChanged"],[1,"col","text-center"],["src","/assets/Images/notFoundImage.png","alt","",2,"width","185px","display","flex","align-items","center"],[2,"font-weight","bolder"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,ee,46,15,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.types.length>0&&i.brands.length>0))},dependencies:[d.sg,d.O5,q,B,y.YN,y.Kr,J,Q,T.I,V],styles:['@import"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap";.cyberpunk-container[_ngcontent-%COMP%]{background-color:#121212;color:#fff;border-radius:10px;font-family:Orbitron,sans-serif}.filter-section[_ngcontent-%COMP%], .product-section[_ngcontent-%COMP%]{padding:20px}.sort-header[_ngcontent-%COMP%]{color:#ff0097;font-weight:700}.sort-select[_ngcontent-%COMP%]{background-color:#222;color:#fff;border-color:#ff0097}.cyberpunk-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]{color:#ff0097;background-color:#2a2a2a;padding:10px;font-weight:700;border:2px solid #ff0097;border-radius:5px;width:100%;height:-moz-fit-content;height:fit-content}.cyberpunk-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]:hover{background-color:#ff0097;color:#000}.cyberpunk-accordion[_ngcontent-%COMP%]   .accordion-description[_ngcontent-%COMP%]{font-size:.8em;color:#fff}.brand-list[_ngcontent-%COMP%], .type-list[_ngcontent-%COMP%]{padding:0;list-style:none}.brand-item[_ngcontent-%COMP%], .type-item[_ngcontent-%COMP%]{background-color:#414040;color:#fff;padding:5px;margin:5px 0;border-radius:5px;text-align:center;cursor:pointer;transition:background-color .3s,color .3s}.brand-item[_ngcontent-%COMP%]:hover, .type-item[_ngcontent-%COMP%]:hover{background-color:#ff0097;color:#000}.brand-item.active[_ngcontent-%COMP%], .type-item.active[_ngcontent-%COMP%]{background-color:#ff0097;color:#000;font-weight:700}.product-item[_ngcontent-%COMP%]{border-radius:15px;overflow:hidden;box-shadow:0 4px 8px #ff0097;transition:transform .3s ease,box-shadow .3s ease}.product-item[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 12px #000000b3}.product-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{padding:10px;background-color:#1a1a1a;color:#fff}.typelogo[_ngcontent-%COMP%]{max-width:50px;margin-left:10px}p[_ngcontent-%COMP%]{margin:0}.btn-search[_ngcontent-%COMP%], .btn-reset[_ngcontent-%COMP%]{color:#fff;background-color:#b44593;border:none;box-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593}.xng-breadcrumb-link[_ngcontent-%COMP%]{background:#d7ebff;border-radius:0;border:none;color:#fff}']}),n})();var te=r(4466),ne=r(5698),oe=r(8909);function ie(n,o){if(1&n&&(e.TgZ(0,"h5",14),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" You have ",t.quantityInBasket," of this item in your basket ")}}function se(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"app-section-header"),e.TgZ(2,"div",3),e._UZ(3,"img",4),e.qZA(),e.TgZ(4,"div",5)(5,"h2"),e._uU(6),e.qZA(),e.TgZ(7,"p",6),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.YNc(10,ie,2,1,"h5",7),e.TgZ(11,"div",8)(12,"i",9),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.decrementQuantity())}),e.qZA(),e.TgZ(13,"span",10),e._uU(14),e.qZA(),e.TgZ(15,"i",11),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.incrementQuantity())}),e.qZA(),e.TgZ(16,"button",12),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.updateBasket())}),e._uU(17),e.qZA()(),e.TgZ(18,"div",13)(19,"h4"),e._uU(20,"Description"),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(3),e.s9C("src",t.product.pictureUrl,e.LSH),e.s9C("alt",t.product.name),e.xp6(3),e.Oqu(t.product.name),e.xp6(2),e.Oqu(e.lcZ(9,9,t.product.price)),e.xp6(2),e.Q6J("ngIf",t.quantityInBasket>0),e.xp6(4),e.Oqu(t.quantitySelected),e.xp6(2),e.Q6J("disabled",t.quantitySelected===t.quantityInBasket),e.xp6(1),e.Oqu(t.buttonText),e.xp6(5),e.Oqu(t.product.description)}}const ce=[{path:"",component:k},{path:":id",component:(()=>{class n{constructor(t,i,s,c){this.shopService=t,this.activatedRoute=i,this.breadCrumbService=s,this.basketService=c,this.quantitySelected=1,this.quantityInBasket=0}ngOnInit(){this.getProduct()}getProduct(){const t=this.activatedRoute.snapshot.paramMap.get("id");t&&this.shopService.getProduct(+t).subscribe({next:i=>{this.product=i,this.product.pictureUrl=i.pictureUrl,this.breadCrumbService.set("@productDetails",i.name),this.basketService.basketSource$.pipe((0,ne.q)(1)).subscribe({next:s=>{const c=s?.items.find(a=>a.id===+t);c&&(this.quantitySelected=c.quantity,this.quantityInBasket=c.quantity)}})},error:i=>console.log(i)})}incrementQuantity(){this.quantitySelected++}decrementQuantity(){this.quantitySelected--}updateBasket(){if(this.product)if(this.quantitySelected>this.quantityInBasket){const t=this.quantitySelected-this.quantityInBasket;this.quantityInBasket+=t,this.basketService.addItemToBasket(this.product,t)}else{const t=this.quantityInBasket-this.quantitySelected;this.quantityInBasket+=t,this.basketService.removeItemFromBasket(this.product.id,t)}}get buttonText(){return 0===this.quantityInBasket?"Add to basket":"Update basket"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v),e.Y36(m.gz),e.Y36(oe.pm),e.Y36(P.v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"w-100",3,"src","alt"],[1,"col-5","mt-5"],[2,"font-size","2em"],["class","mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-item-center"],[1,"fa","fa-minus-circle","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"quantitySelected","font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","ms-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"mb-3"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,se,23,11,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.product))},dependencies:[d.O5,T.I,d.H9],styles:["@media (min-width: 768px){.gradient-form[_ngcontent-%COMP%]{height:100vh!important}}@media (min-width: 769px){.gradient-custom-2[_ngcontent-%COMP%]{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}}.gradient-custom-2[_ngcontent-%COMP%]{background:linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}@media (min-width: 768px){.gradient-custom-2[_ngcontent-%COMP%]{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}}.neon-button[_ngcontent-%COMP%]{background-color:#b44593;border:none;box-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593}.neon-outline-button[_ngcontent-%COMP%]{border:1px solid #b44593}#singup[_ngcontent-%COMP%]{background-color:#b44593;border:none;box-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593;color:#fff}.neon-text[_ngcontent-%COMP%]{color:#000;text-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593}.big[_ngcontent-%COMP%]{text-shadow:2px 2px 4px #000}p[_ngcontent-%COMP%], .quantitySelected[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{color:#fff;font-size:15pt;text-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593}.btn[_ngcontent-%COMP%]{background-color:#b44593;border:none;color:#fff;box-shadow:0 0 5px #b44593,0 0 10px #b44593,0 0 20px #b44593,0 0 40px #b44593}.fa[_ngcontent-%COMP%]{color:#7a04eb}h2[_ngcontent-%COMP%]{color:#7a04eb;text-shadow:0 0 2px #8618ec,0 0 10px #7a04eb}"]}),n})(),data:{breadcrumb:{alias:"productDetails"}}}];let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(ce),m.Bz]}),n})();var ae=r(5241),de=r(294);let pe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[k]}),n.\u0275inj=e.cJS({imports:[d.ez,te.m,re,Y,ae.fx.forRoot(),de.I]}),n})()}}]);