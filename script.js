
function calc(){
 let e=parseFloat(document.getElementById('entry').value);
 let t=document.getElementById('type').value;

 let tp1 = t=='sell'? e-90 : e+90;
 let tp2 = t=='sell'? e-180: e+180;
 let sl  = t=='sell'? e+7  : e-7;

 document.getElementById('results').innerHTML =
  `<div>الهدف الأول: ${tp1}</div>
   <div>الهدف الثاني: ${tp2}</div>
   <div style='color:red'>الستوب: ${sl}</div>
   <div>سعر الدخول: ${e}</div>`;
}
