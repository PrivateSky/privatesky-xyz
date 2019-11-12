System.register(["./p-226ad382.system.js","./p-93e391e4.system.js","./p-1e5da36a.system.js","./p-c7b74a69.system.js","./p-ef158f82.system.js","./p-a0dbb429.system.js"],function(e){"use strict";var t,i,n,o,s,r;return{setters:[function(e){t=e.r;i=e.c;n=e.h},function(){},function(){},function(e){o=e.T},function(e){s=e.C},function(e){r=e.T}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,i,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)if(r=e[a])s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s;return o>3&&s&&Object.defineProperty(t,i,s),s};var p=e("psk_wizard",function(){function e(e){t(this,e);this.needWizardConfiguration=i(this,"needWizardConfiguration",7);this.changeStep=i(this,"changeStep",7);this.finishWizard=i(this,"finishWizard",7)}e.prototype.componentWillLoad=function(){var e=this;this.needWizardConfiguration.emit(function(t){e.wizardSteps=t;e.activeStep=e.wizardSteps.length>0?e.wizardSteps[0]:null})};e.prototype.handleStepChange=function(e){var t=this;this.changeStep.emit({stepIndexToDisplay:e,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:function(e,i){if(e){console.error(e);return}t.activeStep=i.activeStep;t.wizardSteps=i.wizardSteps}});return};e.prototype.handleFinish=function(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:function(e,t){if(e){console.error(e);return}console.log(t)}});return};e.prototype.handleStepPropertiesChange=function(e){this.activeStep["stepProperties"]=e};e.prototype.computeStepDesign=function(e,t,i){var n="";if(e===0){n+="first "}else if(e===i-1){n+="last "}if(e<t){n+="done"}else if(e===t){n+="current"}return n};e.prototype.render=function(){var e=this.activeStep.stepComponent;return[n("div",{class:"page-content"},n("div",{class:"wizard-content"},n("div",{class:"wizard-form"},n("form",{class:"form-register",action:"#",method:"post",onSubmit:function(e){e.preventDefault();e.stopImmediatePropagation()}},n("div",{id:"form-total",class:"wizard clearfix"},n("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),n(e,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties}),n("div",{class:"actions clearfix"},n("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?n("li",null,n("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?n("li",null,n("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?n("li",null,n("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]};return e}());a([s(),o({description:"This property is the string that defines the psk-stepper render",isMandatory:false,propertyType:"string"})],p.prototype,"componentRender",void 0);a([o({description:"This parameter holds the wizard configuration, the names of the steps, the components that will be displayed and if there is the case, other properties, like informations for the steps.",isMandatory:false,propertyType:"array of WizardStep types (WizardStep[])",specialNote:"These informations are filled in and handled by the controller of the component, not by the component itself."})],p.prototype,"wizardSteps",void 0);a([r({eventName:"needWizardConfiguration",controllerInteraction:{required:true},description:"This event is triggered when the component is loaded and if no configuration is given for the wizard.\n            In this case, the controller is responsible to send the configuration to the wizard.\n            This event comes with a single parameter, a callback function the sends the configuration to the component."})],p.prototype,"needWizardConfiguration",void 0);a([r({eventName:"changeStep",controllerInteraction:{required:true},description:"This event is triggered when the buttons Next, Previous and the step names from the left side of the component are clicked.\n            This event comes with the following parameters:\n                stepIndexToDisplay - the number of the step to be displayed,\n                wizardSteps - the list of the steps from the wizard,\n                activeStep - the step that will be displayed,\n                callback - a callback function that is called from the controller when the validation is done."})],p.prototype,"changeStep",void 0);a([r({eventName:"finishWizard",description:"This event is triggered when the buttons Finish is clicked.\n            This event comes with the following parameters:\n                wizardSteps - the list of the steps from the wizard. Maybe the information inside the wizard will be stored somewhere,\n                callback - a callback function that is called from the controller when the validation is done."})],p.prototype,"finishWizard",void 0)}}});