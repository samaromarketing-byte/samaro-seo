(function(){
var HP=['what-are-the-advantages','why-people-love','mistakes-photographers','best-ways-to-deliver','is-camera-to-cloud-worth','how-photographers-use','10-essential-tools','top-10-reasons','best-ai-tools','face-search-in-photography'];
var p=location.pathname;if(!HP.some(function(s){return p.includes(s);}))return;
var lk=document.createElement('link');lk.rel='stylesheet';
lk.href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesk:opsz,wght@12..96,600;12..96,700&family=Inter:wght@400;500;600&display=swap';
document.head.appendChild(lk);
var cs=document.createElement('style');
cs.textContent='.sqw{font-family:Inter,sans-serif;background:#f8f5f7;border-radius:20px;padding:32px 28px;max-width:780px;margin:32px auto 40px;border:1.5px solid #e8d5de}'+
'.sqw h1,.sqw h2,.sqw h3{font-family:"Bricolage Grotesk",sans-serif}'+
'.sqw .sq-hd{text-align:center;margin-bottom:24px}.sqw .sq-logo{height:28px;margin-bottom:14px}'+
'.sqw .sq-title{font-size:26px;font-weight:700;color:#A55578;margin:0 0 6px}'+
'.sqw .sq-sub{font-size:14px;color:#21212199;margin:0}'+
'.sqw .sq-prog{margin-bottom:20px}.sq-pb-wrap{background:#e8d5de;border-radius:99px;height:6px}'+
'.sq-pb{background:#A55578;height:6px;border-radius:99px;transition:width .3s}'+
'.sq-ps{font-size:12px;color:#A55578;text-align:center;margin-top:6px;font-weight:500}'+
'.sqw .sq-card{background:#fff;border-radius:16px;padding:24px;box-shadow:0 2px 12px rgba(165,85,120,.08)}'+
'.sq-back{display:inline-flex;align-items:center;gap:5px;background:none;border:none;color:#A55578;font-size:13px;font-weight:500;cursor:pointer;padding:0;margin-bottom:16px;opacity:.8}'+
'.sq-back:hover{opacity:1}'+
'.sq-q{font-size:20px;font-weight:700;color:#A55578;margin:0 0 18px;font-family:"Bricolage Grotesk",sans-serif}'+
'.sq-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}'+
'.sq-opt{border:2px solid #e8d5de;border-radius:12px;padding:14px 16px;text-align:left;background:#fff;cursor:pointer;transition:all .2s;font-family:Inter,sans-serif}'+
'.sq-opt:hover{border-color:#A55578;background:#fdf2f6}.sq-opt.sq-sel{border-color:#A55578;background:#fdf2f6}'+
'.sq-opt .sq-ol{font-size:14px;font-weight:600;color:#212121}.sq-opt .sq-od{font-size:12px;color:#888;margin-top:3px}'+
'.sq-feats{display:flex;flex-direction:column;gap:10px}'+
'.sq-feat{border:2px solid #e8d5de;border-radius:12px;padding:14px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .2s;background:#fff}'+
'.sq-feat:hover{border-color:#A55578;background:#fdf2f6}'+
'.sq-feat input{accent-color:#A55578;width:16px;height:16px}'+
'.sq-feat .sq-fl{font-size:14px;font-weight:600;color:#212121}.sq-feat .sq-fd{font-size:12px;color:#888;margin-top:2px}'+
'.sq-cta{width:100%;background:#A55578;color:#fff;border:none;border-radius:12px;padding:14px;font-size:15px;font-weight:600;cursor:pointer;margin-top:18px;font-family:Inter,sans-serif}'+
'.sq-cta:hover{opacity:.88}'+
'.sq-res .sq-rec{background:linear-gradient(135deg,#fdf2f6,#f5eef8);border:2px solid #A55578;border-radius:14px;padding:22px;margin-bottom:20px;text-align:center}'+
'.sq-res .sq-rn{font-size:20px;font-weight:700;color:#A55578;margin:0 0 4px;font-family:"Bricolage Grotesk",sans-serif}'+
'.sq-res .sq-rp{font-size:28px;font-weight:700;color:#A55578;margin:4px 0;font-family:"Bricolage Grotesk",sans-serif}'+
'.sq-res .sq-rf{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:12px}'+
'.sq-res .sq-rfi{font-size:12px;background:#fff;border:1px solid #e8d5de;border-radius:99px;padding:4px 10px;color:#212121}'+
'.sq-comp-hd{font-size:18px;font-weight:700;color:#A55578;margin:20px 0 12px;font-family:"Bricolage Grotesk",sans-serif}'+
'.sq-btabs{display:flex;gap:6px;justify-content:center;margin-bottom:14px}'+
'.sq-btab{border:2px solid #e8d5de;border-radius:8px;padding:8px 18px;background:#fff;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;color:#666}'+
'.sq-btab.sq-act{background:#A55578;border-color:#A55578;color:#fff}'+
'.sq-plans{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px}'+
'.sq-plan{min-width:150px;border:2px solid #e8d5de;border-radius:12px;padding:14px;background:#fff;flex-shrink:0}'+
'.sq-plan.sq-prec{border-color:#A55578;box-shadow:0 0 0 3px rgba(165,85,120,.12)}'+
'.sq-plan .sq-pn{font-size:14px;font-weight:700;color:#A55578;margin:0 0 2px;font-family:"Bricolage Grotesk",sans-serif}'+
'.sq-plan .sq-pp{font-size:20px;font-weight:700;color:#212121}'+
'.sq-plan .sq-pb2{font-size:11px;color:#888;margin-bottom:8px}'+
'.sq-plan .sq-pbadge{background:#A55578;color:#fff;font-size:10px;border-radius:99px;padding:2px 8px;display:inline-block;margin-bottom:6px}'+
'.sq-plan ul{list-style:none;padding:0;margin:0}'+
'.sq-plan ul li{font-size:11px;color:#555;padding:2px 0}.sq-plan ul li::before{content:"\\2713";color:#A55578;font-weight:700;margin-right:4px}'+
'.sq-acts{display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap}'+
'.sq-trial{background:#A55578;color:#fff;border:none;border-radius:10px;padding:12px 24px;font-size:14px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif}'+
'.sq-trial:hover{opacity:.88}'+
'.sq-retry{border:2px solid #A55578;color:#A55578;background:#fff;border-radius:10px;padding:12px 24px;font-size:14px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif}'+
'.sq-retry:hover{background:#fdf2f6}'+
'.sq-note{font-size:11px;color:#aaa;text-align:center;margin-top:10px}'+
'@media(max-width:600px){.sq-opts{grid-template-columns:1fr}.sq-plans{flex-direction:column}.sq-plan{min-width:unset}}';
document.head.appendChild(cs);
var PL={freetrial:{n:"Free Trial",y:0,m:0,yf:["10 GB storage","2 Events","40 Guests/Event"],mf:["10 GB Reusable","2 Events","Unlimited Guests"],pop:false},starter:{n:"Starter",y:744,m:1125,yf:["100 GB storage","100 Events","2,000 Guests"],mf:["100 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},amateur:{n:"Amateur",y:1488,m:2250,yf:["500 GB storage","250 Events","2,000 Guests"],mf:["500 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},pro:{n:"Pro",y:2618,m:3960,yf:["1,000 GB storage","500 Events","2,000 Guests"],mf:["1,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:true},promax:{n:"Pro Max",y:4106,m:6210,yf:["4,000 GB storage","2,000 Events","2,000 Guests"],mf:["4,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},advanced:{n:"Advanced",y:5653,m:8550,yf:["8,000 GB storage","4,000 Events","2,000 Guests"],mf:["8,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false}};
var qi=0,ans={},cb='yearly';
function rec(){var u=parseInt(ans.u||0),g=parseInt(ans.g||0);if(u<=10&&g<=5)return'freetrial';if(u<=100&&g<=15)return'starter';if(u<=500&&g<=30)return'amateur';if(u<=1000&&g<=50)return'pro';if(u<=4000)return'promax';return'advanced';}
function render(){
var el=document.getElementById('sqw-inner');if(!el)return;
var prog=qi===0?0:qi>=5?100:Math.round(qi/4*100);
var ph=qi>0&&qi<5?'<div class="sq-prog"><div class="sq-pb-wrap"><div class="sq-pb" style="width:'+prog+'%"></div></div><div class="sq-ps">Step '+qi+' of 4</div></div>':'';
var back=qi>1&&qi<5?'<button class="sq-back" onclick="sqBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var rback=qi===5?'<button class="sq-back" onclick="sqBack()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var body='';
if(qi===0){body='<div class="sq-card" style="text-align:center"><p style="font-size:14px;color:#21212199;margin:0 0 20px;line-height:1.6">Discover the perfect plan for your photography business.</p><button class="sq-cta" onclick="sqStart()">Start Package Quiz \u2192</button></div>';}
else if(qi===1){body='<div class="sq-card">'+back+'<div class="sq-q">How many GB do you upload monthly?</div><div class="sq-opts">'+ [['10','Up to 10 GB','Occasional'],['100','100 GB','Regular'],['500','500 GB','Busy'],['1000','1,000 GB','Professional'],['4000','4,000 GB','High-volume'],['8000','8,000 GB','Enterprise']].map(function(o){return'<button class="sq-opt'+(ans.u===o[0]?' sq-sel':'')+'" onclick="sqAns(\'u\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===2){body='<div class="sq-card">'+back+'<div class="sq-q">How many events monthly?</div><div class="sq-opts">'+ [['5','1\u20135 events','Starting out'],['15','6\u201315 events','Growing'],['30','16\u201330 events','Established'],['50','30+ events','High-volume']].map(function(o){return'<button class="sq-opt'+(ans.g===o[0]?' sq-sel':'')+'" onclick="sqAns(\'g\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===3){body='<div class="sq-card">'+back+'<div class="sq-q">Preferred billing cycle?</div><div class="sq-opts">'+ [['monthly','Monthly','Flexible'],['yearly','Yearly','Save 20%']].map(function(o){return'<button class="sq-opt'+(ans.b===o[0]?' sq-sel':'')+'" onclick="sqAns(\'b\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===4){body='<div class="sq-card">'+back+'<div class="sq-q">Most important features?</div><div class="sq-feats"><label class="sq-feat"><input type="checkbox" '+(ans.f1?'checked':'')+' onchange="ans.f1=this.checked"><div><div class="sq-fl">Pixel-Targeted Client Acquisition</div><div class="sq-fd">AI-powered marketing</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f2?'checked':'')+' onchange="ans.f2=this.checked"><div><div class="sq-fl">Branded Client Galleries</div><div class="sq-fd">Custom branding</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f3?'checked':'')+' onchange="ans.f3=this.checked"><div><div class="sq-fl">Advanced Privacy Controls</div><div class="sq-fd">Enhanced security</div></div></label></div><button class="sq-cta" onclick="sqResults()">Get My Recommendation \u2192</button></div>';}
else if(qi===5){var k=rec(),pl=PL[k],isY=ans.b!=='monthly',pr=isY?pl.y:pl.m,bt=isY?'/mo (yearly)':'/month',df=isY?pl.yf:pl.mf;
var plH=Object.entries(PL).map(function(e){var pk=e[0],pp=e[1],dp=cb==='yearly'?pp.y:pp.m,isR=pk===k,pf=cb==='yearly'?pp.yf:pp.mf;return'<div class="sq-plan'+(isR?' sq-prec':'')+'">'+(isR?'<div class="sq-pbadge">RECOMMENDED</div>':pp.pop?'<div class="sq-pbadge">POPULAR</div>':'<div style="height:20px"></div>')+'<div class="sq-pn">'+pp.n+'</div><div class="sq-pp">\u20b9'+dp.toLocaleString()+'</div><div class="sq-pb2">+taxes '+(cb==='yearly'?'billed yearly':'per month')+'</div><ul>'+pf.map(function(f){return'<li>'+f+'</li>';}).join('')+'</ul></div>';}).join('');
body='<div class="sq-res">'+rback+'<div class="sq-rec"><div class="sq-rn">'+pl.n+' Plan</div><div class="sq-rp">\u20b9'+pr.toLocaleString()+' + taxes<span style="font-size:14px;font-weight:400;color:#A5557899">'+bt+'</span></div><div class="sq-rf">'+df.map(function(f){return'<div class="sq-rfi">\u2713 '+f+'</div>';}).join('')+'</div></div><div class="sq-comp-hd">Compare All Plans</div><div class="sq-btabs"><button class="sq-btab'+(cb==='yearly'?' sq-act':'')+'" onclick="sqCB(\'yearly\')">Yearly</button><button class="sq-btab'+(cb==='monthly'?' sq-act':'')+'" onclick="sqCB(\'monthly\')">Monthly</button></div><div class="sq-plans">'+plH+'</div><div class="sq-acts"><button class="sq-trial" onclick="window.open(\'https://events.samaro.ai/photographer/pricing-plans\',\'_blank\')">Start Free Trial</button><button class="sq-retry" onclick="sqRetry()">Retake Quiz</button></div><p class="sq-note">* Pricing subject to change.</p></div>';}
el.innerHTML='<div class="sq-hd"><img class="sq-logo" src="https://framerusercontent.com/images/QIOvgXKPEVIPMZ3GE7z6Ek32HI.png" alt="Samaro"><div class="sq-title">Find Your Perfect Samaro Package</div><div class="sq-sub">AI-powered photo sharing for photographers</div></div>'+ph+body;
}
window.sqStart=function(){qi=1;render();};
window.sqBack=function(){if(qi>1)qi--;else qi=0;render();};
window.sqAns=function(k,v){ans[k]=v;if(qi<4){qi++;render();}else{render();}};
window.sqResults=function(){qi=5;render();};
window.sqCB=function(b){cb=b;render();};
window.sqRetry=function(){qi=0;ans={};cb='yearly';render();};
function inject(){
var wrap=document.createElement('div');wrap.className='sqw';wrap.innerHTML='<div id="sqw-inner"></div>';
var art=document.querySelector('article,[class*="content"],[class*="blog"] p,main p');
if(art&&art.parentNode){art.parentNode.insertBefore(wrap,art);}
else{var ps=document.querySelectorAll('p');if(ps.length>2)ps[0].parentNode.insertBefore(wrap,ps[0]);}
render();
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',function(){setTimeout(inject,900);}):setTimeout(inject,900);
})();
