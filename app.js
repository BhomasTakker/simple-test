!function(e){function t(t){for(var i,n,o=t[0],c=t[1],h=t[2],l=0,u=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(d&&d(t);u.length;)u.shift()();return a.push.apply(a,h||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},r={1:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(){return Promise.resolve()},n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var h=0;h<o.length;h++)t(o[h]);var d=c;a.push([185,0]),s()}({185:function(e,t,s){"use strict";s.r(t);var i=s(5),r=s.n(i);class a extends r.a.Scene{constructor(e,t){super(e),this.config=t,this.screenCenter={x:this.config.width/2,y:this.config.height/2}}preload(){}create(){this.initScene()}initScene(){this.add.image(0,0,"background").setOrigin(0,0).setScale(.65)}}var n=a;const o="#000",c={fontStyle:"bold",fontSize:"128px",fill:o},h={fontStyle:"bold",fontSize:"64px",fill:o},d={fontStyle:"bold",fontSize:"32px",fill:o};var l=class extends n{constructor(e){super("MainMenu",{...e.MainMenu,width:e.width,height:e.height}),this.menu=this.config.menu,this.btnXPos=this.screenCenter.x+this.screenCenter.x/2}createTitle(){const e=this.add.text(this.screenCenter.x/2,this.screenCenter.y,"Title",c);e.setY(this.screenCenter.y-e.height/2),e.setOrigin(.5,0)}createPlayButton(){this.playBtn=this.add.image(this.btnXPos,this.screenCenter.y-5,"play").setOrigin(.5,1).setInteractive({useHandCursor:!0}).setScale(.75),this.playBtn.on("pointerover",(()=>this.playOverHandler())),this.playBtn.on("pointerout",(()=>this.playOutHandler())),this.playBtn.on("pointerdown",(()=>this.playClickedHandler()))}createHelpButton(){this.helpBtn=this.add.image(this.btnXPos,this.screenCenter.y+5,"help").setOrigin(.5,0).setInteractive({useHandCursor:!0}).setScale(.75),this.helpBtn.on("pointerover",(()=>this.helpOverHandler())),this.helpBtn.on("pointerout",(()=>this.helpOutHandler())),this.helpBtn.on("pointerdown",(()=>this.helpClickedHandler()))}playClickedHandler(){this.scene.start("CharacterSelect")}playOverHandler(){}playOutHandler(){}helpClickedHandler(){this.scene.launch("Rules")}helpOverHandler(){}helpOutHandler(){}create(){super.initScene(),this.createTitle(),this.createPlayButton(),this.createHelpButton()}},u=s(22);const m={Rules:{default:"This is the tutorial text"},CharacterSelect:{default:"Select character homie!"},LunchBoxSelect:{default:"Lunchbox woooooo!"},Game:{default:"Press buttons and score big"},Completed:{default:"Create a PDF gang!"}},g={currentScene:"Rules",currentTextId:"default",currentText:m.Rules.default},p=Object(u.b)({name:"narration",initialState:g,reducers:{setScene:(e,t)=>{const s=t.payload;e.currentScene=s,e.currentTextId="default",e.currentText=m[s].default},setText:(e,t)=>{e.currentTextId=t.payload,e.currentText=m[e.currentScene][t.payload]}}}),{setScene:x,setText:f}=p.actions,b=p.reducer,C={characterId:"",lunchboxId:""},S=Object(u.b)({name:"example",initialState:C,reducers:{resetState:e=>{e.characterId=C.characterId,e.lunchboxId=C.lunchboxId},setCharacter:(e,t)=>{e.characterId=t.payload},setLunchBox:(e,t)=>{e.lunchboxId=t.payload}}}),{setCharacter:w,setLunchBox:v,resetState:I}=S.actions,y=S.reducer,O={items:[{group:"group1",item:{}},{group:"group2",item:{}},{group:"group3",item:{}},{group:"group4",item:{}},{group:"group5",item:{}},{group:"group6",item:{}}]},B=Object(u.b)({name:"items",initialState:O,reducers:{resetItems:e=>{e.items=O.items},addItem:(e,t)=>{const s=t.payload.groupId,i=t.payload.item,r=e.items.findIndex((e=>e.group===s));e.items[r].item=i},removeItem:(e,t)=>{const s=t.payload,i=e.items.findIndex((e=>s===e.group));e.items[i].item={}}}}),{addItem:L,removeItem:k,resetItems:H}=B.actions,T=B.reducer,P=Object(u.a)({reducer:{characterStore:y,itemsStore:T,narrationStore:b}});var N=class extends n{constructor(e){super("Rules",{...e.Rules,width:e.width,height:e.height})}create(){P.dispatch(x("Rules")),this.initScene(),this.initBackButton()}initScene(){super.initScene(),this.add.image(0,0,"rules-bg").setOrigin(0,0).setScale(.6)}initBackButton(){this.back=this.add.image(this.config.width,this.config.height,"back").setOrigin(1).setScale(1).setInteractive({useHandCursor:!0}),this.back.on("pointerover",(()=>this.over())),this.back.on("pointerout",(()=>this.out())),this.back.on("pointerdown",(()=>this.click()))}over(){}out(){}click(){this.scene.stop()}},j=s(38);class G extends r.a.GameObjects.Container{constructor(e,t,s){super(e,t,s),this.context=e,this.scene=e.scene,e.add.existing(this),this.createCharacters()}createCharacters(){const e=this.createCharacter("character1",20),t=e.width,s=this.createCharacter("character2",t+20),i=this.createCharacter("character3",2*t+40),r=this.createCharacter("character4",3*t+60);this.add(e),this.add(s),this.add(i),this.add(r)}createCharacter(e,t){const s=this.context.add.image(t,0,e).setOrigin(0,.5).setScale(.75).setInteractive({useHandCursor:!0});return s.on("pointerover",(()=>this.characterOver(e))),s.on("pointerout",(()=>this.characterOut(e))),s.on("pointerdown",(()=>this.characterSelected(e))),s}characterOver(e){}characterOut(e){}characterSelected(e){P.dispatch(w(e))}}class U extends r.a.GameObjects.Container{constructor(e,t,s,i,r=!0){super(e,t,s),this.context=e,this.scene=e.scene,this.nextFn=i,this.isNextVisible=r,e.add.existing(this),this.createNavBar()}createNavBar(){this.createBg(),this.createNarrator(),this.createSpeechBubble(),this.createText(),this.createNextButton()}createBg(){this.navBG=this.context.add.image(0,0,"navbar").setOrigin(0,0).setScale(.75),this.navBG.setY(this.y-.75*this.navBG.height)}createNarrator(){this.narrator=this.context.add.image(20,0,"narrator").setOrigin(0,.75),this.narrator.setY(this.y)}createSpeechBubble(){this.speech=this.context.add.image(175,this.y,"speech").setScale(.75).setOrigin(0,1.15)}createText(){const{currentText:e}=P.getState().narrationStore;this.text=this.context.add.text(250,this.y-110,e,d).setWordWrapWidth(700)}createNextButton(){this.nextBtn=this.context.add.image(0,0,"next").setOrigin(1.2,1.2).setVisible(this.isNextVisible).setInteractive({useHandCursor:!0}),this.nextBtn.setX(this.x),this.nextBtn.setY(this.y),this.nextBtn.on("pointerdown",(()=>this.nextSceneHandler()))}setNextVisible(e){this.nextBtn.setVisible(e)}nextSceneHandler(){this.nextFn()}}var A=class extends n{constructor(e){super("CharacterSelect",{...e.CharacterSelect,width:e.width,height:e.height})}create(){P.dispatch(x("CharacterSelect")),super.initScene(),this.createTitle(),this.createCharactersContainer(),this.createNavBar(),this.initCharacterListener()}createTitle(){const e=this.add.text(this.screenCenter.x/2,30,"Choose your food hero friend",h);e.setX(this.screenCenter.x-e.width/2)}createCharactersContainer(){new G(this,this.screenCenter.x,this.screenCenter.y).setPosition(100,this.screenCenter.y)}initCharacterListener(){P.subscribe((()=>{this.checkCharacterSelected()}))}checkCharacterSelected(){const e=P.getState().characterStore,{characterId:t}=e;t&&this.navbar.setNextVisible(!0)}createNavBar(){this.navbar=new U(this,this.config.width,this.config.height,(()=>{this.scene.start("LunchBoxSelect")}),!1)}};function R(e,t,s){return e.map((e=>function(e,t,s){const{coords:i,id:r}=e,[a,n]=i,o=t.add.image(a,n,r).setOrigin(.5,.5).setScale(.65).setInteractive({useHandCursor:!0});return o.on("pointerdown",(()=>function(e,t){P.dispatch(L({groupId:e,item:{id:t}}))}(s,r))),o}(e,t,s)))}class M extends r.a.GameObjects.Container{constructor(e,t,s,i,r){super(e,t,s),this.x=t,this.y=s,this.context=e,this.scene=e.scene,e.add.existing(this),this.rotating=!1,this.ref=i,this.listObjects=r,this.create()}create(){this.drawArrows()}drawArrows(){this.arrowUp=this.context.add.image(this.x,this.y-50,"arrow").setOrigin(1.7,1.1).setScale(.75).setInteractive({useHandCursor:!0}),this.arrowUp.on("pointerover",(()=>this.arrowOver())),this.arrowUp.on("pointerout",(()=>this.arrowOut())),this.arrowUp.on("pointerdown",(()=>this.arrowClick(-1))),this.arrowDown=this.context.add.image(this.x,this.y-50,"arrow").setFlipY(!0).setOrigin(1.7,-.1).setScale(.75).setInteractive({useHandCursor:!0}),this.arrowDown.on("pointerover",(()=>this.arrowOver())),this.arrowDown.on("pointerout",(()=>this.arrowOut())),this.arrowDown.on("pointerdown",(()=>this.arrowClick(1)))}arrowOver(){}arrowOut(){}arrowClick(e){this.rotating||(this.rotating=!0,this.direction=e,this.context.tweens.add({targets:this.ref,angle:this.ref.angle+60*e,duration:2e3,yoyo:!1,repeat:0,onStart:()=>{this.rotating=!0},onComplete:()=>{this.rotating=!1}}))}}class D extends r.a.GameObjects.Container{constructor(e,t,s,i){super(e,t,s),this.screenCenter={x:t,y:s},this.x=-100,this.y=s-50,this.config=i,this.context=e,this.scene=e.scene,this.context.add.existing(this),this.rotating=!1,this.create()}create(){this.drawSpinner(),this.drawItems(),this.drawArrows()}drawItems(){const e=R(this.config.group1,this.context,"group1"),t=this.context.add.container(0,0,e);t.setAngle(0),this.add(t);const s=R(this.config.group2,this.context,"group2"),i=this.context.add.container(0,0,s);i.setAngle(60),this.add(i);const r=R(this.config.group3,this.context,"group3"),a=this.context.add.container(0,0,r);a.setAngle(120),this.add(a);const n=R(this.config.group4,this.context,"group4"),o=this.context.add.container(0,0,n);o.setAngle(180),this.add(o);const c=R(this.config.group5,this.context,"group5"),h=this.context.add.container(0,0,c);h.setAngle(240),this.add(h);const d=R(this.config.group6,this.context,"group6"),l=this.context.add.container(0,0,d);l.setAngle(300),this.add(l)}drawSpinner(){this.spinner=this.context.add.image(0,0,"spinner").setOrigin(.5,.5).setScale(.65),this.add(this.spinner)}drawArrows(){new M(this.context,this.screenCenter.x,this.screenCenter.y,this,[this.spinner,this.test])}}class F extends r.a.GameObjects.Container{constructor(e,t,s,i){super(e,t,s),this.x=t,this.y=s,this.context=e,this.scene=e.scene,this.isInteractive=i,this.context.add.existing(this),this.selectedItems=[],this.init(),this.updateItems()}init(){P.subscribe((()=>{this.updateItems()}))}updateItems(){const e=P.getState().itemsStore;this.removeAllItems(),this.drawItems(e.items)}removeAllItems(){this.selectedItems.forEach((e=>{this.remove(e,!0),e=null})),this.selectedItems=[]}drawItems(e){let t=0,s=0;e.forEach(((e,i)=>{s=i%3*200,t=i>2?100:0,e.item.id&&this.drawItem(e,s,t)}))}drawItem(e,t,s){const{item:i,group:r}=e,{id:a}=i,n=this.context.add.image(t,s,a).setOrigin(0,0).setScale(.75);this.isInteractive&&(n.setInteractive({useHandCursor:!0}),n.on("pointerover",(()=>this.itemOver(n))),n.on("pointerout",(()=>this.itemOut(n))),n.on("pointerdown",(()=>this.removeItem(r)))),this.add(n),this.selectedItems.push(n)}itemOver(){}itemOut(){}removeItem(e){P.dispatch(k(e))}}class V extends r.a.GameObjects.Container{constructor(e,t,s,i=!0){super(e,t,s),this.x=t,this.y=s,this.interactive=i,this.context=e,this.scene=e.scene,this.context.add.existing(this),this.create()}create(){this.createLunchBox(),this.createItems()}createLunchBox(){const{lunchboxId:e}=P.getState().characterStore;this.selectedLunchbox=this.context.add.image(0,0,`selected-${e}`).setOrigin(0,.5).setScale(.75),this.add(this.selectedLunchbox)}createItems(){this.selectedItemsContainer=new F(this.context,this.x,this.y,this.interactive)}}var _=class extends n{constructor(e){super("Game",{...e.Game,width:e.width,height:e.height})}create(){super.initScene(),P.dispatch(x("Game")),this.createSpinnerContainer(),this.createCharacter(),this.createLunchBox(),this.createNavBar(),this.initItemsListener(),this.navbar.setNextVisible(!0)}createCharacter(){const{characterId:e}=P.getState().characterStore;this.selectedCharacter=this.add.image(this.screenCenter.x,this.screenCenter.y,`selected-${e}`).setOrigin(.4,.5).setScale(.75)}createLunchBox(){this.selectedLunchboxContainer=new V(this,this.screenCenter.x,this.screenCenter.y)}createSpinnerContainer(){this.spinnerContainer=new D(this,this.screenCenter.x,this.screenCenter.y,this.config)}createNavBar(){this.navbar=new U(this,this.config.width,this.config.height,(()=>{const e=P.getState().characterStore,{lunchboxId:t}=e;t&&(this.scene.pause(),this.scene.launch("Completed"))}),!1)}initItemsListener(){P.subscribe((()=>{this.checkItemCount()}))}checkItemCount(){const e=P.getState().itemsStore,{items:t}=e,s=t.reduce(((e,t)=>{const{item:s}=t;return s.id?++e:e}),0);this.navbar.setNextVisible(1===s)}},X=s(108);var Y=class extends n{constructor(e){super("Completed",{...e.Completed,width:e.width,height:e.height})}create(){super.initScene(),P.dispatch(x("Completed")),this.createCharacter(),this.createLunchBox(),this.createNavBar(),this.createBackBtn(),this.createRestartBtn(),this.createPDFButton()}createCharacter(){const{characterId:e}=P.getState().characterStore;this.selectedCharacter=this.add.image(this.screenCenter.x,this.screenCenter.y,`selected-${e}`).setOrigin(.4,.5).setScale(.75)}createLunchBox(){this.selectedLunchboxContainer=new V(this,this.screenCenter.x,this.screenCenter.y,!1)}createNavBar(){this.navbar=new U(this,this.config.width,this.config.height,(()=>{const e=P.getState().characterStore,{lunchboxId:t}=e;t&&this.scene.launch("Completed")}),!1)}createBackBtn(){const e=this.config.height-65,t=this.config.width-275;this.add.image(t,e,"back").setOrigin(.5).setScale(.75).setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{this.scene.stop(),this.scene.resume("Game")}))}createRestartBtn(){const e=this.config.height-65,t=this.config.width-100;this.add.image(t,e,"restart").setOrigin(.5).setScale(.75).setInteractive({useHandCursor:!0}).on("pointerdown",(()=>{P.dispatch(H()),P.dispatch(I()),this.scene.stop(),this.scene.stop("Game"),this.scene.start("MainMenu")}))}createPDFButton(){this.add.image(100,150,"createPDF").setOrigin(0).setScale(.75).setInteractive({useHandCursor:!0}).on("pointerdown",(()=>this.createPDF()))}createPDF(){const e=new X.a;e.text("Congrats you did stuff",10,10),e.output("dataurlnewwindow")}};var E=class extends n{constructor(e){super("PreloadScene",e)}preload(){super.preload(),this.setupLoader(),this.load.image("background","assets/backgrounds/background.png"),this.load.image("play","assets/UI/play btn.png"),this.load.image("help","assets/UI/help btn.png"),this.load.image("next","assets/UI/next btn.png"),this.load.image("arrow","assets/UI/arrow btn.png"),this.load.image("createPDF","assets/UI/createpdf btn.png"),this.load.image("restart","assets/UI/restart btn.png"),this.load.image("back","assets/UI/back btn.png"),this.load.image("navbar","assets/UI/nav bar.png"),this.load.image("speech","assets/UI/speech bubble.png"),this.load.image("rules-bg","assets/rules/rules.jpg"),this.load.image("character1","assets/characters/characterSelect1.png"),this.load.image("character2","assets/characters/characterSelect2.png"),this.load.image("character3","assets/characters/characterSelect3.png"),this.load.image("character4","assets/characters/characterSelect4.png"),this.load.image("selected-character1","assets/characters/selectedCharacter1.png"),this.load.image("selected-character2","assets/characters/selectedCharacter2.png"),this.load.image("selected-character3","assets/characters/selectedCharacter3.png"),this.load.image("selected-character4","assets/characters/selectedCharacter4.png"),this.load.image("narrator","assets/characters/instructor.png"),this.load.image("lunchbox1","assets/lunchboxes/lunchboxSelect1.png"),this.load.image("lunchbox2","assets/lunchboxes/lunchboxSelect2.png"),this.load.image("lunchbox3","assets/lunchboxes/lunchboxSelect3.png"),this.load.image("lunchbox4","assets/lunchboxes/lunchboxSelect4.png"),this.load.image("selected-lunchbox1","assets/lunchboxes/selected-lunchbox1.png"),this.load.image("selected-lunchbox2","assets/lunchboxes/selected-lunchbox2.png"),this.load.image("selected-lunchbox3","assets/lunchboxes/selected-lunchbox3.png"),this.load.image("selected-lunchbox4","assets/lunchboxes/selected-lunchbox4.png"),this.load.image("spinner","assets/game/spinner.png"),this.load.image("item1","assets/foodItems/item1.png"),this.load.image("item2","assets/foodItems/item1.png"),this.load.image("item3","assets/foodItems/item1.png"),this.load.image("item4","assets/foodItems/item1.png"),this.load.image("item5","assets/foodItems/item1.png"),this.load.image("item6","assets/foodItems/item1.png"),this.load.image("item7","assets/foodItems/item1.png"),this.load.image("item8","assets/foodItems/item1.png"),this.load.image("item9","assets/foodItems/item1.png"),this.load.image("item10","assets/foodItems/item1.png"),this.load.image("item11","assets/foodItems/item1.png"),this.load.image("item12","assets/foodItems/item1.png")}setupLoader(){let e=this.add.graphics(),t=this.add.graphics(),s=this.cameras.main.width,i=this.cameras.main.height;t.fillStyle(2236962,.8),t.fillRect(s/2-170,i/2-35,320,50);let r=this.make.text({x:s/2,y:i/2-50,text:"Loading...",style:{font:"20px monospace",fill:"#ffffff"}});r.setOrigin(.5,.5);let a=this.make.text({x:s/2,y:i/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});a.setOrigin(.5,.5),this.load.on("progress",(function(t){e.clear(),e.fillStyle(16777215,1),e.fillRect(s/2-160,i/2-25,300*t,30),a.setText(parseInt(100*t)+"%")})),this.load.on("fileprogress",(function(e){})),this.load.on("complete",(function(){e.destroy(),t.destroy(),r.destroy(),a.destroy()}))}create(){super.create(),this.scene.start("MainMenu")}};class z extends r.a.GameObjects.Container{constructor(e,t,s){super(e,t,s),this.context=e,this.scene=e.scene,e.add.existing(this),this.createLunchBoxes()}createLunchBoxes(){const e=this.createLunchBox("lunchbox1",[1.3,1.1]),t=this.createLunchBox("lunchbox2",[-.3,1.1]),s=this.createLunchBox("lunchbox3",[1.3,-.1]),i=this.createLunchBox("lunchbox4",[-.3,-.1]);this.add(e),this.add(t),this.add(s),this.add(i)}createLunchBox(e,t){const s=this.context.add.image(0,0,e).setScale(.65).setInteractive({useHandCursor:!0}),i=this.x/2-s.width/2,r=this.y/2-s.height/2;return s.setPosition(i,r),s.setOrigin(...t),s.on("pointerover",(()=>this.lunchboxOver(e))),s.on("pointerout",(()=>this.lunchboxOut(e))),s.on("pointerdown",(()=>this.lunchboxSelected(e))),s}lunchboxOver(e){}lunchboxOut(e){}lunchboxSelected(e){P.dispatch(v(e))}}var J=class extends n{constructor(e){super("LunchBoxSelect",{...e.LunchboxSelect,width:e.width,height:e.height})}create(){P.dispatch(x("LunchBoxSelect")),super.initScene(),this.createTitle(),this.createLunchBoxesContainer(),this.createNavBar(),this.initLunchboxListener()}createTitle(){const e=this.add.text(this.screenCenter.x/2,30,"Choose your lunchbox arroooo!",h);e.setX(this.screenCenter.x-e.width/2)}createLunchBoxesContainer(){new z(this,this.screenCenter.x,this.screenCenter.y).setPosition(this.screenCenter.x-100,this.screenCenter.y-25)}initLunchboxListener(){P.subscribe((()=>{this.checkLunchboxSelected()}))}checkLunchboxSelected(){const e=P.getState().characterStore,{characterId:t}=e;t&&this.navbar.setNextVisible(!0)}createNavBar(){this.navbar=new U(this,this.config.width,this.config.height,(()=>{this.scene.start("Game")}),!1)}};const W=[E,l,A,J,_,Y,N],$=e=>new e(j),{width:q,height:K,backgroundColor:Q}=j,Z={width:j.width,height:j.height,type:r.a.AUTO,scale:{mode:r.a.Scale.FIT,autoCenter:r.a.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{debug:!0}},backgroundColor:Q,scene:W.map($),fps:{target:12}};new r.a.Game(Z)},38:function(e){e.exports=JSON.parse('{"width":1280,"height":720,"backgroundColor":"#fac24f","Rules":{},"Game":{"itemsToGet":6,"group1":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}],"group2":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}],"group3":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}],"group4":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}],"group5":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}],"group6":[{"id":"item1","name":"food","score":1,"coords":[450,0]},{"id":"item2","name":"food","score":1,"coords":[220,0]},{"id":"item3","name":"food","score":1,"coords":[250,-50]},{"id":"item4","name":"food","score":1,"coords":[250,50]},{"id":"item5","name":"food","score":1,"coords":[350,100]},{"id":"item6","name":"food","score":1,"coords":[350,-100]}]},"CharacterSelect":{},"LunchboxSelect":{},"Completed":{}}')}});