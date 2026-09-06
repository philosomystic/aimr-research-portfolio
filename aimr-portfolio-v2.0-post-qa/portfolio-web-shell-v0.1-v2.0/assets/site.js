document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());

window.addEventListener('message',event=>{
  if(event.origin!==location.origin)return;
  const d=event.data;
  if(!d||d.type!=='aimr-landscape-height')return;
  const frame=document.querySelector('iframe[data-auto-height="aimr-landscape"]');
  if(!frame||event.source!==frame.contentWindow)return;
  const h=Math.max(900,Math.min(Number(d.height)||0,3600));
  if(h)frame.style.height=h+'px';
});
