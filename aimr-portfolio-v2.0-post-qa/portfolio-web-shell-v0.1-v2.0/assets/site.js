// Canonical menus shared by all portfolio pages, including older archive pages.
const nav=document.querySelector('.site-header .nav');
const menuItems={
  Philosophy:[
    ['Philosophy of Human–AI Futures','/philosophy/'],
    ['Benevolent Governance and the Right to Revise','/philosophy/benevolent-governance/'],
    ['Master Philosophical Argument','/philosophy/master-argument/']
  ],
  Research:[
    ['5-Minute HAIDR Overview','/research/5-minute-overview/'],
    ['Extended HAIDR Overview','/research/haidr/'],
    ['Full Scholarly Paper','/research/scholarly-paper/'],
    ['Research Sites & Studies','/research/sites/'],
    ['Research Landscape','/research/human-ai-development-research-landscape/'],
    ['All Research','/research/',true]
  ],
  About:[
    ['About','/about/'],
    ['CV','/cv/']
  ]
};
if(nav){
  // Remove the legacy extra Philosophy link; Philosophy already has a dropdown.
  nav.querySelector('.phf-nav-link')?.remove();
  const normalizePath=path=>path.replace(/\/+$/,'')||'/';
  for(const group of nav.querySelectorAll(':scope > .nav-group')){
    const title=group.querySelector('summary')?.textContent.trim();
    const menu=group.querySelector('.nav-menu');
    if(!menu || !menuItems[title])continue;
    const links=document.createDocumentFragment();
    let isCurrent=false;
    for(const [label,href,secondary] of menuItems[title]){
      const a=document.createElement('a');
      a.href=href;
      a.textContent=label;
      if(secondary)a.className='menu-secondary';
      if(normalizePath(location.pathname)===normalizePath(href)){
        a.setAttribute('aria-current','page');
        isCurrent=true;
      }
      links.appendChild(a);
    }
    menu.replaceChildren(links);
    group.classList.toggle('is-current',isCurrent);
  }
}
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
