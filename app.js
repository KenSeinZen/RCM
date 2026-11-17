const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');document.body.classList.remove('locked')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);document.body.classList.toggle('locked',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
matchMedia('(min-width:701px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
const items=[...document.querySelectorAll('.gallery-item')];
function filterGallery(value){document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));items.forEach(item=>item.hidden=value!=='all'&&item.dataset.category!==value);document.querySelector('#gallery-status').textContent=items.filter(i=>!i.hidden).length+' Arbeiten angezeigt.'}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>filterGallery(b.dataset.filter)));
document.querySelectorAll('[data-jump-filter]').forEach(a=>a.addEventListener('click',()=>filterGallery(a.dataset.jumpFilter)));
const dialog=document.querySelector('#lightbox');let active=0,visible=[];
function showImage(){const source=visible[active].querySelector('img');dialog.querySelector('img').src=source.src;dialog.querySelector('img').alt=source.alt;document.querySelector('#image-count').textContent=`${active+1} / ${visible.length}`;document.querySelector('#previous').disabled=visible.length<2;document.querySelector('#next').disabled=visible.length<2}
items.forEach(item=>item.addEventListener('click',()=>{visible=items.filter(i=>!i.hidden);active=visible.indexOf(item);showImage();dialog.showModal();document.body.classList.add('locked')}));
function step(n){active=(active+n+visible.length)%visible.length;showImage()}
document.querySelector('#previous').addEventListener('click',()=>step(-1));document.querySelector('#next').addEventListener('click',()=>step(1));
dialog.querySelector('.close-lightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('locked'));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
const treatment=document.querySelector('#treatment');treatment.addEventListener('change',()=>{document.querySelector('#booking').href='https://wa.me/4917671313965?text='+encodeURIComponent('Hallo Rina und Celina, ich interessiere mich für '+treatment.value+' und möchte gerne einen Termin anfragen.');});
const floating=document.querySelector('.mobile-book');function updateBooking(){const hero=document.querySelector('.hero').getBoundingClientRect();const contact=document.querySelector('#kontakt').getBoundingClientRect();floating.classList.toggle('visible',hero.bottom<0&&contact.top>innerHeight)}window.addEventListener('scroll',updateBooking,{passive:true});window.addEventListener('resize',updateBooking);updateBooking();

const mapBox=document.querySelector('#map');if(mapBox){mapBox.querySelector('[data-load-map]').addEventListener('click',()=>{const f=document.createElement('iframe');f.src='https://www.google.com/maps?q='+encodeURIComponent('Hauptstraße 21, 51399 Burscheid')+'&output=embed';f.title='Karte: RCM Aesthetics, Hauptstraße 21, Burscheid';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';mapBox.replaceChildren(f);mapBox.classList.add('loaded')})}
