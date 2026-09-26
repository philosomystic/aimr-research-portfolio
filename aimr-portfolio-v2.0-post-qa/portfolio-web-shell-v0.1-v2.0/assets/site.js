document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());

const navigationGroups=[...document.querySelectorAll('.nav-group')];
navigationGroups.forEach(group=>group.addEventListener('toggle',()=>{
  if(group.open)navigationGroups.forEach(other=>{if(other!==group)other.open=false;});
}));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')navigationGroups.forEach(group=>{
    if(group.open){group.open=false;group.querySelector('summary').focus();}
  });
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.nav'))navigationGroups.forEach(group=>group.open=false);
});

window.addEventListener('message',event=>{
  if(event.origin!==location.origin)return;
  const d=event.data;
  if(!d||d.type!=='aimr-landscape-height')return;
  const frame=document.querySelector('iframe[data-auto-height="aimr-landscape"]');
  if(!frame||event.source!==frame.contentWindow)return;
  const h=Math.max(900,Math.min(Number(d.height)||0,3600));
  if(h)frame.style.height=h+'px';
});
