/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Ellipse',
            type:'ellipse',
            rect:['58px','40px','320px','320px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:0.702392578125,
            fill:["rgba(64,109,69,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'Text2Copy2',
               type:'text',
               rect:['28px','130px','208px','60px','auto','auto'],
               text:"Developer",
               align:"left",
               font:['Lucida Console, Monaco, monospace',48,"rgba(255,255,255,1.00)","700","none","normal"]
            }]
         },
         {
            id:'EllipseCopy2',
            type:'ellipse',
            rect:['574px','40px','320px','320px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:0.702392578125,
            fill:["rgba(135,62,62,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'Text2Copy',
               type:'text',
               rect:['62px','130px','208px','60px','auto','auto'],
               text:"Thinker",
               align:"left",
               font:['Lucida Console, Monaco, monospace',48,"rgba(255,255,255,1.00)","700","none","normal"]
            }]
         },
         {
            id:'EllipseCopy',
            type:'ellipse',
            rect:['320px','40px','320px','320px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            opacity:0.702392578125,
            fill:["rgba(97,99,156,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'Text2',
               type:'text',
               rect:['56px','130px','208px','60px','auto','auto'],
               text:"Creator<br>",
               align:"left",
               font:['Lucida Console, Monaco, monospace',48,"rgba(255,255,255,1.00)","700","none","normal"]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text2Copy2}": [
            ["style", "top", '130px'],
            ["style", "width", '208.45468139648px'],
            ["style", "height", '60.116664886475px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Lucida Console, Monaco, monospace'],
            ["style", "left", '27.82px'],
            ["style", "font-size", '48px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(64,109,69,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0.702392578125'],
            ["style", "left", '58.19px'],
            ["style", "top", '40px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '130px'],
            ["style", "width", '208.45468139648px'],
            ["style", "height", '60.116664886475px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Lucida Console, Monaco, monospace'],
            ["style", "left", '61.72px'],
            ["style", "font-size", '48px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '960px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(97,99,156,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0.702392578125'],
            ["style", "left", '320px'],
            ["style", "top", '40px']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(135,62,62,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0.702392578125'],
            ["style", "left", '574.29px'],
            ["style", "top", '40px']
         ],
         "${_Text2}": [
            ["style", "top", '130px'],
            ["style", "font-family", 'Lucida Console, Monaco, monospace'],
            ["style", "font-size", '48px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '60.116664886475px'],
            ["style", "font-weight", '700'],
            ["style", "left", '56px'],
            ["style", "width", '208.45468139648px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_Ellipse}", "top", '70px', { fromValue: '40px'}], position: 0, duration: 500 },
            { id: "eid19", tween: [ "style", "${_Ellipse}", "top", '40px', { fromValue: '70px'}], position: 500, duration: 500 },
            { id: "eid22", tween: [ "style", "${_Ellipse}", "top", '10px', { fromValue: '40px'}], position: 1000, duration: 500 },
            { id: "eid23", tween: [ "style", "${_Ellipse}", "top", '40px', { fromValue: '10px'}], position: 1500, duration: 500 },
            { id: "eid17", tween: [ "style", "${_EllipseCopy2}", "top", '70px', { fromValue: '40px'}], position: 0, duration: 500 },
            { id: "eid20", tween: [ "style", "${_EllipseCopy2}", "top", '40px', { fromValue: '70px'}], position: 500, duration: 500 },
            { id: "eid21", tween: [ "style", "${_EllipseCopy2}", "top", '10px', { fromValue: '40px'}], position: 1000, duration: 500 },
            { id: "eid24", tween: [ "style", "${_EllipseCopy2}", "top", '40px', { fromValue: '10px'}], position: 1500, duration: 500 },
            { id: "eid13", tween: [ "style", "${_EllipseCopy}", "top", '10px', { fromValue: '40px'}], position: 0, duration: 500 },
            { id: "eid14", tween: [ "style", "${_EllipseCopy}", "top", '40px', { fromValue: '10px'}], position: 500, duration: 500 },
            { id: "eid15", tween: [ "style", "${_EllipseCopy}", "top", '70px', { fromValue: '40px'}], position: 1000, duration: 500 },
            { id: "eid16", tween: [ "style", "${_EllipseCopy}", "top", '40px', { fromValue: '70px'}], position: 1500, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-276847445");
