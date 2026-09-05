/* O slug abaixo precisa existir em DESTINATIONS. */
const DESTINATIONS={
 delta:'https://example.com',
 'blox-fruits':'https://example.com',
 mm2:'https://example.com'
};
const slug=new URLSearchParams(location.search).get('to'),dest=DESTINATIONS[slug];const title=document.querySelector('#title'),msg=document.querySelector('#msg'),timer=document.querySelector('#timer'),progress=document.querySelector('#progress'),btn=document.querySelector('#continue'),icon=document.querySelector('#icon');
if(!dest){title.textContent='Link não encontrado';msg.textContent='Esse script não existe ou o link está incompleto.';timer.textContent='';icon.textContent='!'}else{let n=5;const tick=setInterval(()=>{n--;timer.textContent=n>0?`${n}s`:'Pronto';progress.style.width=`${((5-n)/5)*100}%`;if(n<=0){clearInterval(tick);title.textContent='Link pronto';msg.textContent='A verificação terminou. Você já pode continuar.';btn.disabled=false;btn.onclick=()=>location.href=dest}},1000)}
