"use strict";(self["webpackChunkproyecto_proesa"]=self["webpackChunkproyecto_proesa"]||[]).push([[445],{445:function(e,a,o){o.r(a),o.d(a,{default:function(){return W}});var s=o(641),r=o(751);const l=(0,s.Lk)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",crossorigin:"anonymous"},null,-1),t={class:"container card mt-5"},c=(0,s.Lk)("h2",{class:"titleh1"},"Agregar Nuevo Proveedor",-1),i={class:"form-group m-2"},n=(0,s.Lk)("label",{class:"col-4 col-md-3 label",for:"nombre"}," Nombre",-1),d={class:"form-group m-2"},u=(0,s.Lk)("label",{class:"col-4 col-md-3 label",for:"empresa"}," Empresa",-1),p={class:"form-group m-2"},m=(0,s.Lk)("label",{class:"col-4 col-md-3 label",for:"placas"},"Placas",-1),g={class:"form-group m-2"},h=(0,s.Lk)("label",{class:"col-4 col-md-3 label",for:"tipoVehiculo"},"Tipo de vehiculo",-1),b={class:"form-group m-2"},k=(0,s.Lk)("option",{value:""},"Selecciona un departamento",-1),R=(0,s.Lk)("option",{value:"Recursos Humanos"},"Recursos Hermanos",-1),w=(0,s.Lk)("option",{value:"Almacen"},"Almancen",-1),L=[k,R,w],f={class:"form-group m-2"},v=(0,s.Lk)("label",{class:"col-4 col-md-3 label"},"Fecha",-1),A={class:"form-group m-2"},y=(0,s.Lk)("label",{class:"col-4 col-md-3 label",for:""},"Hora de entrada",-1),V={class:"m-2"},T=["disabled"];function j(e,a,o,k,R,w){return(0,s.uX)(),(0,s.CE)(s.FK,null,[l,(0,s.Lk)("div",t,[c,(0,s.Lk)("div",i,[n,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3 cajasTexto","onUpdate:modelValue":a[0]||(a[0]=e=>R.newRegris.nombre=e),type:"text",id:"nombre",placeholder:"Nombre"},null,512),[[r.Jo,R.newRegris.nombre]])]),(0,s.Lk)("div",d,[u,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3 cajasTexto","onUpdate:modelValue":a[1]||(a[1]=e=>R.newRegris.empresa=e),type:"text",id:"empresa",placeholder:"Empresa"},null,512),[[r.Jo,R.newRegris.empresa]])]),(0,s.Lk)("div",p,[m,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3 cajasTexto","onUpdate:modelValue":a[2]||(a[2]=e=>R.newRegris.placas=e),type:"text",id:"placas",placeholder:"Placas"},null,512),[[r.Jo,R.newRegris.placas]])]),(0,s.Lk)("div",g,[h,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3 cajasTexto","onUpdate:modelValue":a[3]||(a[3]=e=>R.newRegris.tipoVehiculo=e),type:"text",id:"tipoVehiculo",placeholder:"Tipo de vehiculo"},null,512),[[r.Jo,R.newRegris.tipoVehiculo]])]),(0,s.Lk)("div",b,[(0,s.bo)((0,s.Lk)("select",{class:"col-9 col-md-6 cajas","onUpdate:modelValue":a[4]||(a[4]=e=>R.newRegris.area=e),name:"",id:""},L,512),[[r.u1,R.newRegris.area]])]),(0,s.Lk)("div",f,[v,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3","onUpdate:modelValue":a[5]||(a[5]=e=>R.newRegris.fechaActual=e),type:"date",id:"fechActual",disabled:""},null,512),[[r.Jo,R.newRegris.fechaActual]])]),(0,s.Lk)("div",A,[y,(0,s.bo)((0,s.Lk)("input",{class:"col-6 col-md-3","onUpdate:modelValue":a[6]||(a[6]=e=>R.newRegris.horaActual=e),type:"time",id:"horActual",disabled:""},null,512),[[r.Jo,R.newRegris.horaActual]])]),(0,s.Lk)("div",V,[(0,s.Lk)("button",{class:"submit-button col-6 col-md-3 m-1 button",disabled:w.isButtonDisable,onClick:a[7]||(a[7]=(...e)=>w.registerData&&w.registerData(...e))},"Regristar",8,T),(0,s.Lk)("button",{class:"cancel-button col-3 col-md-3 m-1 button",onClick:a[8]||(a[8]=(...e)=>w.goToCancelar&&w.goToCancelar(...e))},"Cancelar")])])],64)}var S=o(430),D=o(223),J=o(922),U=o(953);const C={apiKey:"AIzaSyA_uWz4tJnzrpgSID-eR--M58jPzsfowDg",authDomain:"regirstroproesa.firebaseapp.com",databaseURL:"https://regirstroproesa-default-rtdb.firebaseio.com",projectId:"regirstroproesa",storageBucket:"regirstroproesa.appspot.com",messagingSenderId:"973196483901",appId:"1:973196483901:web:57e3da488b032279b67954"},I=(0,D.Wp)(C),x=((0,J.P5)(I),(0,S.aU)(I)),H=(0,U.KR)([]);var E={name:"Registro",data(){return{newRegris:{nombre:"",empresa:"",placas:"",tipoVehiculo:"",area:"",fechaActual:"",horaEntrada:""}}},computed:{isFormValid(){return this.newRegris.nombre,this.newRegris.empresa&&this.newRegris.placas&&this.newRegris.tipoVehiculo&&this.newRegris.area&&this.newRegris.horaActual&&this.newRegris.fechaActual},isButtonDisable(){return!this.isFormValid}},mounted(){this.obtenerHora(),setInterval((()=>{this.obtenerHora()}),1e3);const e=(0,S.P)((0,S.rJ)(x,"registro"),(0,S.My)("nombre")),a=(0,S.aQ)(e,(e=>{H.value=e.docs.map((e=>({id:e.id,...e.data()})))}));(0,s.hi)(a)},methods:{registerData(){this.isFormValid&&(0,S.gS)((0,S.rJ)(x,"registro"),this.newRegris).then((()=>{console.log("Data added successfully!"),this.goToRegistar()})).catch((e=>{console.error("Error adding document: ",e)}))},obtenerHora(){const e=new Date,a=e.getHours(),o=e.getMinutes(),s=`${a.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;this.newRegris.horaActual=s;const r=e.toISOString().slice(0,10);this.newRegris.fechaActual=r},goToRegistar(){this.$router.push("/")},goToCancelar(){this.$router.push("/")}}},P=o(262);const F=(0,P.A)(E,[["render",j]]);var W=F}}]);
//# sourceMappingURL=445.915de930.js.map