
(async()=>{
const corpus=await fetch('corpus.json').then(r=>{if(!r.ok)throw new Error('Corpus load failed: '+r.status);return r.json()});
const {territories,faults:F,studyFamilies:studyNames,constructs:constructList,nodes}=corpus;
const all=Object.values(nodes),tById=id=>territories.find(t=>t[0]===id),idsFor=id=>all.filter(n=>Number(n.id.split('.')[0])===id).sort((a,b)=>Number(a.id.split('.')[1])-Number(b.id.split('.')[1]));
const $=s=>document.querySelector(s);const isMobile=()=>window.matchMedia('(max-width:840px)').matches;const grid=$('#grid'),search=$('#search'),sideTitle=$('#side-title'),sideDesc=$('#side-desc'),sublist=$('#sublist'),results=$('#results'),resultHead=$('#result-head'),resultLabel=$('#result-label'),resultCount=$('#result-count'),browserHead=$('#browser-head'),empty=$('#empty'),banner=$('#banner'),bannerEye=$('#banner-eye'),bannerText=$('#banner-text'),clearFilter=$('#clear-filter'),clearSearch=$('#clear-search'),showRel=$('#show-rel'),meta=$('#meta'),selected=$('#selected'),faultChips=$('#fault-chips'),aimrChips=$('#aimr-chips'),linkChips=$('#link-chips'),bridge=$('#bridge'),modal=$('#modal'),modalPanel=modal.querySelector('.modal'),close=$('#close'),status=$('#status'),browser=$('#browser'),closeSheet=$('#close-sheet'),backTop=$('#back-top'),mobileSheetTitle=$('#mobile-sheet-title'),genericBrowserHead=browser.querySelector(':scope > .browser-head'),sheetBackdrop=$('#sheet-backdrop');
let activeT=null,activeN=null,focusN=null,facet=null,lastFocused=null,restoring=false;
function constructSet(n){const s=new Set();n.aimr.forEach(x=>{const v=x.toLowerCase();constructList.forEach(c=>{if(v===c||v.includes(c))s.add(c)})});return s}
function linkT(n){return n.links.map(x=>Number(x.split(':')[0].replace('T',''))).filter(Number.isFinite)}
function announce(m){status.textContent='';setTimeout(()=>status.textContent=m,10)}function fieldMode(){return Boolean(facet||search.value.trim())}
function matchFacet(n){if(!facet)return true;if(facet.type==='fault')return n.faults.includes(facet.key);if(facet.type==='study')return n.studies.includes(facet.key);if(facet.type==='aimr')return constructSet(n).has(facet.key);return true}
function matches(n){const q=search.value.trim().toLowerCase();if(!matchFacet(n))return false;if(!q)return true;return [n.id,n.title,n.focus,n.gap,n.empirical,n.aimr.join(' '),n.links.join(' ')].join(' ').toLowerCase().includes(q)}
function matchingNodes(){return all.filter(matches)}function countForTerritory(id){return matchingNodes().filter(n=>Number(n.id.split('.')[0])===id).length}
function facetCount(type,key){return all.filter(n=>type==='fault'?n.faults.includes(key):type==='study'?n.studies.includes(key):constructSet(n).has(key)).length}
function btn(text,cls,fn){const b=document.createElement('button');b.type='button';b.className=cls;b.textContent=text;if(fn)b.addEventListener('click',fn);return b}function chip(text,fn){return btn(text,'chip',fn)}
function syncHash(replace=false){if(restoring)return;const p=new URLSearchParams();if(activeN)p.set('node',activeN);else if(activeT)p.set('territory',String(activeT));if(facet)p.set(facet.type,facet.key);if(search.value.trim())p.set('q',search.value.trim());const h=p.toString()?'#'+p.toString():location.pathname+location.search;try{(replace?history.replaceState:history.pushState).call(history,null,'',h)}catch(e){}}
function restoreHash(){restoring=true;const p=new URLSearchParams(location.hash.replace(/^#/,''));activeN=p.get('node')&&nodes[p.get('node')]?p.get('node'):null;activeT=activeN?Number(activeN.split('.')[0]):(p.get('territory')?Number(p.get('territory')):null);focusN=activeN;search.value=p.get('q')||'';facet=null;for(const type of ['fault','study','aimr']){const key=p.get(type);if(key){facet={type,key,label:type==='fault'?(key+' · '+(F[key]||key)):type==='study'?(key+' · '+(studyNames[key]||key)):key};break}}restoring=false;renderAll()}
function setFacet(type,key,label){facet&&facet.type===type&&facet.key===key?facet=null:facet={type,key,label};renderAll();syncHash();announce(facet?'Field filter applied: '+label+'. '+matchingNodes().length+' matching subtopics.':'Field filter cleared.')}
function renderHub(){const c=$('#constructs'),f=$('#faults');c.replaceChildren();f.replaceChildren();const current=focusN?constructSet(nodes[focusN]):new Set();constructList.forEach(k=>{const b=btn(k+' · '+facetCount('aimr',k),'construct',()=>setFacet('aimr',k,k));const on=facet&&facet.type==='aimr'&&facet.key===k;b.setAttribute('aria-pressed',on?'true':'false');if(on)b.classList.add('filter-on');else if(!fieldMode()&&focusN)b.classList.add(current.has(k)?'rel-on':'rel-off');c.appendChild(b)});Object.entries(F).forEach(([k,label])=>{const b=btn(k+' · '+label+' · '+facetCount('fault',k),'fault',()=>setFacet('fault',k,k+' · '+label));const on=facet&&facet.type==='fault'&&facet.key===k;b.setAttribute('aria-pressed',on?'true':'false');if(on)b.classList.add('filter-on');else if(!fieldMode()&&focusN)b.classList.add(nodes[focusN].faults.includes(k)?'rel-on':'rel-off');f.appendChild(b)})}
function renderStudies(){const rail=$('#studies');rail.replaceChildren();Object.entries(studyNames).forEach(([k,label])=>{const b=btn(k+' '+label+' · '+facetCount('study',k),'study',()=>setFacet('study',k,k+' · '+label));const on=facet&&facet.type==='study'&&facet.key===k;b.setAttribute('aria-pressed',on?'true':'false');if(on)b.classList.add('filter-on');else if(!fieldMode()&&focusN)b.classList.add(nodes[focusN].studies.includes(k)?'rel-on':'rel-off');rail.appendChild(b)})}
function renderGrid(){grid.replaceChildren();territories.forEach(t=>{const b=document.createElement('button');b.type='button';b.className='territory t'+t[0];if(activeT===t[0])b.classList.add('active-panel');let aria='Territory '+t[0]+': '+t[1];if(fieldMode()){const count=countForTerritory(t[0]);b.classList.add(count?'field-match':'field-zero');aria+='; '+count+' matching subtopics';const badge=document.createElement('span');badge.className='count';badge.textContent=count;badge.setAttribute('aria-hidden','true');b.appendChild(badge)}else if(focusN){const n=nodes[focusN],src=Number(focusN.split('.')[0]),linked=linkT(n);if(t[0]===src){b.classList.add('rel-primary');aria+='; primary territory for selected node'}else if(linked.includes(t[0])){b.classList.add('rel-linked');aria+='; linked territory'}else b.classList.add('rel-muted')}b.setAttribute('aria-label',aria);const inner=document.createElement('div');inner.innerHTML='<div class="territory-head"><span class="num" aria-hidden="true">'+t[0]+'</span><div class="territory-title">'+t[1]+'</div></div><div class="territory-keys">'+t[2]+'</div>';b.appendChild(inner);b.addEventListener('click',()=>{activeT=t[0];activeN=null;renderAll();syncHash();if(isMobile())openMobileSheet(t);announce('Opened Territory '+t[0]+': '+t[1])});grid.appendChild(b)});const h=document.createElement('div');h.className='hub';h.innerHTML='<div><span class="hub-badge">AIMR · organizing framework</span><div class="hub-title">Developmental ecology</div><div class="hub-proposition">Existing evidence → unresolved developmental problem → AIMR construct → candidate empirical move.</div><div class="pathways"><div class="path"><strong>Reflective pathway</strong>articulation → differentiation → integration → coherence</div><div class="path"><strong>Practical pathway</strong>reduced friction → tractable action → environmental change</div></div><div class="convergence">Both pathways → agency → participation → contact, consequences & learning ↺</div><div id="constructs" class="constructs"></div></div><div class="fault-zone"><div class="zone-label">Empirical fault lines</div><div id="faults" class="faults"></div></div>';grid.appendChild(h);renderHub();renderStudies()}
function renderBanner(){if(!fieldMode()&&!focusN){banner.hidden=true;return}banner.hidden=false;banner.classList.toggle('filter',fieldMode());clearFilter.hidden=!facet;clearSearch.hidden=!search.value.trim();showRel.hidden=!(fieldMode()&&activeN);if(fieldMode()){const m=matchingNodes();bannerEye.textContent='Field-level view';bannerText.textContent=(facet?facet.label:'All field nodes')+(search.value.trim()?' · search: “'+search.value.trim()+'”':'')+' → '+m.length+' matching subtopic'+(m.length===1?'':'s')+'.'}else{bannerEye.textContent='Relationship focus';bannerText.textContent=focusN+' '+nodes[focusN].title+' → linked territories, fault lines, AIMR constructs, and study families.'}}
function openMobileSheet(t){if(!isMobile())return;mobileSheetTitle.textContent=t[0]+' · '+t[1];genericBrowserHead.hidden=true;sheetBackdrop.hidden=false;document.body.classList.add('sheet-active');browser.classList.add('sheet-open');requestAnimationFrame(()=>{browser.scrollTop=0;closeSheet.focus({preventScroll:true})})}
function closeMobileSheet(){browser.classList.remove('sheet-open');genericBrowserHead.hidden=false;sheetBackdrop.hidden=true;document.body.classList.remove('sheet-active');const b=grid.querySelector('.territory.active-panel');if(b)b.focus()}
function updateBackTop(){backTop.classList.toggle('show',window.scrollY>520)}
function renderBrowser(){const field=fieldMode();empty.hidden=field||activeT!==null;browserHead.hidden=field||activeT===null;sublist.hidden=field||activeT===null;resultHead.hidden=!field;results.hidden=!field;if(field){const m=matchingNodes();resultLabel.textContent=facet?facet.label:(search.value.trim()?'Search results':'Field results');resultCount.textContent=m.length+' / 94';results.replaceChildren();m.forEach(n=>{const tid=Number(n.id.split('.')[0]),b=btn('','result',()=>selectNode(n.id));b.setAttribute('aria-pressed',activeN===n.id?'true':'false');b.innerHTML='<div class="territory-title">'+n.id+' '+n.title+'</div><div class="result-territory">T'+tid+' · '+tById(tid)[1]+'</div>';results.appendChild(b)});if(!m.length){const p=document.createElement('div');p.className='section-copy';p.textContent='No matching subtopics.';results.appendChild(p)}}else if(activeT!==null){const t=tById(activeT);sideTitle.textContent=activeT+' · '+t[1];sideDesc.textContent=t[3];sublist.replaceChildren();idsFor(activeT).forEach(n=>{const b=btn(n.id+' '+n.title,'sub',()=>selectNode(n.id));b.setAttribute('aria-pressed',activeN===n.id?'true':'false');sublist.appendChild(b)})}}
function renderMeta(){if(!activeN||focusN!==activeN){meta.hidden=true;return}const n=nodes[activeN];meta.hidden=false;selected.textContent=activeN+' '+n.title;faultChips.replaceChildren(...n.faults.map(k=>chip(k+' · '+F[k],()=>setFacet('fault',k,k+' · '+F[k]))));aimrChips.replaceChildren(...Array.from(constructSet(n)).slice(0,4).map(k=>chip(k,()=>setFacet('aimr',k,k))));linkChips.replaceChildren(...n.links.slice(0,4).map(x=>{const tid=Number(x.split(':')[0].replace('T','')),rel=x.split(':').slice(1).join(':');return chip('T'+tid+' · '+rel,()=>{activeT=tid;activeN=null;renderAll();syncHash();if(isMobile())openMobileSheet(tById(tid));announce('Navigated to linked Territory '+tid)})}))}
function selectNode(id){activeN=id;focusN=null;activeT=Number(id.split('.')[0]);if(isMobile())closeMobileSheet();renderAll();syncHash();openModal();announce(nodes[id].title+' AIMR Bridge Card opened.')}function renderAll(){
  document.body.classList.toggle('relationship-mode',Boolean(focusN&&!fieldMode()));
  renderGrid();renderBanner();renderBrowser();renderMeta()
}
function openModal(){if(!activeN)return;lastFocused=document.activeElement;const n=nodes[activeN],t=tById(Number(activeN.split('.')[0]));$('#modal-title').textContent=n.id+' '+n.title;$('#modal-territory').textContent='Territory '+t[0]+' · '+t[1];$('#focus').textContent=n.focus;$('#gap').textContent=n.gap;$('#empirical').textContent=n.empirical;$('#modal-aimr').replaceChildren(...n.aimr.slice(0,3).map(x=>chip(x,()=>setFacet('aimr',x,x))));$('#modal-faults').textContent=n.faults.map(k=>k+' '+F[k]).join(' · ');$('#modal-studies').textContent=n.studies.map(k=>k+' '+studyNames[k]).join(' · ');$('#modal-links').replaceChildren(...n.links.map(x=>{const tid=Number(x.split(':')[0].replace('T','')),rel=x.split(':').slice(1).join(':');return chip('T'+tid+' · '+rel,()=>{closeModal(false);activeT=tid;activeN=null;renderAll();syncHash();if(isMobile())openMobileSheet(tById(tid));else browser.focus()})}));document.body.classList.add('modal-open');modal.hidden=false;modal.setAttribute('aria-hidden','false');close.focus();announce(n.title+' AIMR Bridge Card opened.')}
function closeModal(refocus=true){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(refocus&&lastFocused&&lastFocused.focus)lastFocused.focus();announce('AIMR Bridge Card closed.')}
function focusables(){return Array.from(modalPanel.querySelectorAll('button:not([disabled]),summary[tabindex],[tabindex]:not([tabindex="-1"])')).filter(el=>!el.hidden&&el.offsetParent!==null)}
function territoryKeyboard(e){
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
  const buttons=Array.from(grid.querySelectorAll('.territory'));
  const current=document.activeElement;
  if(!buttons.includes(current))return;
  e.preventDefault();
  let i=buttons.indexOf(current);
  const cols=window.matchMedia('(max-width:420px)').matches?1:window.matchMedia('(max-width:680px)').matches?2:4;
  if(e.key==='ArrowLeft')i=Math.max(0,i-1);
  if(e.key==='ArrowRight')i=Math.min(buttons.length-1,i+1);
  if(e.key==='ArrowUp')i=Math.max(0,i-cols);
  if(e.key==='ArrowDown')i=Math.min(buttons.length-1,i+cols);
  if(e.key==='Home')i=0;
  if(e.key==='End')i=buttons.length-1;
  buttons[i].focus();
}
function reportEmbeddedHeight(){
  if(window.parent===window)return;
  const h=Math.ceil(document.documentElement.scrollHeight);
  try{window.parent.postMessage({type:'aimr-landscape-height',height:h},location.origin)}catch(e){}
}

closeSheet.addEventListener('click',closeMobileSheet);sheetBackdrop.addEventListener('click',closeMobileSheet);
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
window.addEventListener('scroll',updateBackTop,{passive:true});
grid.addEventListener('keydown',territoryKeyboard);
search.addEventListener('input',()=>{renderAll();syncHash(true);announce(matchingNodes().length+' matching research subtopics.')});clearFilter.addEventListener('click',()=>{facet=null;renderAll();syncHash()});clearSearch.addEventListener('click',()=>{search.value='';renderAll();syncHash();search.focus()});showRel.addEventListener('click',()=>{facet=null;search.value='';focusN=activeN;renderAll();syncHash()});bridge.addEventListener('click',openModal);$('#show-node-rel').addEventListener('click',()=>{if(!activeN)return;closeModal(false);focusN=activeN;renderAll();syncHash();browser.focus();announce('Relationship focus shown for '+nodes[activeN].title+'.')});close.addEventListener('click',()=>closeModal(true));modal.addEventListener('click',e=>{if(e.target===modal)closeModal(true)});$('#skip').addEventListener('click',()=>{browser.focus();search.focus()});$('#reset').addEventListener('click',()=>{browser.classList.remove('sheet-open');genericBrowserHead.hidden=false;sheetBackdrop.hidden=true;document.body.classList.remove('sheet-active');activeT=null;activeN=null;focusN=null;facet=null;search.value='';renderAll();syncHash();announce('Landscape reset to overview.')});$('#share').addEventListener('click',async()=>{syncHash(true);try{await navigator.clipboard.writeText(location.href);announce('Link to this view copied.')}catch(e){announce('This view is encoded in the page address for sharing.')}});document.addEventListener('keydown',e=>{if(!modal.hidden){if(e.key==='Escape'){e.preventDefault();closeModal(true);return}if(e.key==='Tab'){const items=focusables();if(!items.length)return;const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}});window.addEventListener('hashchange',restoreHash);window.addEventListener('resize',()=>{reportEmbeddedHeight();if(!isMobile()){browser.classList.remove('sheet-open');genericBrowserHead.hidden=false;sheetBackdrop.hidden=true;document.body.classList.remove('sheet-active')}});if('ResizeObserver' in window)new ResizeObserver(reportEmbeddedHeight).observe(document.body);if(location.hash)restoreHash();else{renderAll();

function jumpToLandscapeTarget(target){
  const embedded=document.documentElement.classList.contains('embedded-atlas');

  const targetEl=()=>{
    if(target==='browser')return document.querySelector('#browser');
    if(target==='faults')return document.querySelector('#faults');
    if(target==='constructs')return document.querySelector('#constructs');
    if(target==='studies')return document.querySelector('#studies');
    return document.querySelector('#grid');
  };

  const el=targetEl();
  if(!el)return;

  if(embedded){
    // Keep the parent page fixed. Move only the iframe's own document.
    const y=window.scrollY + el.getBoundingClientRect().top - 10;
    window.scrollTo({top:Math.max(0,y),behavior:'auto'});
    return;
  }

  const sticky=document.querySelector('.atlas-orientation');
  const offset=(sticky?.getBoundingClientRect().height||0)+68;
  const y=window.scrollY+el.getBoundingClientRect().top-offset;
  window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
}
window.addEventListener('message',e=>{
  if(e.origin!==location.origin) return;
  if(e.data?.type==='aimr-jump') jumpToLandscapeTarget(e.data.target);
});

document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>jumpToLandscapeTarget(btn.dataset.jump)));
announce('Human–AI Development Research Landscape ready.')}setTimeout(()=>{reportEmbeddedHeight();updateBackTop()},0);
})().catch(err=>{console.error(err);document.body.innerHTML='<p style="padding:2rem;font-family:sans-serif">The research landscape could not initialize.</p>'});
