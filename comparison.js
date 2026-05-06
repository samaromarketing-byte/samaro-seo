(function(){
if(!location.pathname.includes('samaro-vs-kwikpic'))return;

// ── FAQ Schema ──────────────────────────────────────────────────────────────
var sc=document.createElement('script');sc.type='application/ld+json';
sc.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Is Samaro better than Kwikpic for wedding photographers?","acceptedAnswer":{"@type":"Answer","text":"For wedding photographers, Samaro offers unlimited WhatsApp delivery, Camera2Cloud for live uploads during events, native 4K video galleries, and all features included in every plan without add-on charges."}},
{"@type":"Question","name":"Does Kwikpic charge extra for features?","acceptedAnswer":{"@type":"Answer","text":"Yes. Kwikpic sells features as paid add-ons: sponsor branding \u20b95,000, watermarking \u20b93,000, album selection \u20b93,000, and WhatsApp messages \u20b91 each after 10 free credits. Samaro includes everything in every plan."}},
{"@type":"Question","name":"Which platform has better face recognition?","acceptedAnswer":{"@type":"Answer","text":"Both offer AI face recognition. Samaro delivers matched photos via WhatsApp without requiring an app download. Kwikpic requires guests to download the app and take a selfie."}},
{"@type":"Question","name":"Can I switch from Kwikpic to Samaro?","acceptedAnswer":{"@type":"Answer","text":"Yes. Samaro offers a free trial with 10 GB storage, 2 events, and 40 guests per event."}},
{"@type":"Question","name":"Does Samaro require guests to download an app?","acceptedAnswer":{"@type":"Answer","text":"No. Samaro delivers photos directly via WhatsApp. Guests can also scan a QR code at events. No app download needed."}},
{"@type":"Question","name":"What is Camera2Cloud and does Kwikpic have it?","acceptedAnswer":{"@type":"Answer","text":"Camera2Cloud lets photographers upload photos from camera to cloud during an event for real-time guest viewing. Kwikpic does not offer this feature."}}
]});
document.head.appendChild(sc);

// ── Styles ───────────────────────────────────────────────────────────────────
var lk=document.createElement('link');lk.rel='stylesheet';
lk.href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesk:opsz,wght@12..96,600;12..96,700&family=Inter:wght@400;500;600&display=swap';
document.head.appendChild(lk);
var css=document.createElement('style');
css.textContent='.svk{font-family:Inter,sans-serif;max-width:100%;margin:40px 0}.svk h2{font-family:"Bricolage Grotesk",sans-serif;font-size:24px;font-weight:700;color:#A55578;margin:0 0 6px}.svk .svk-sub{font-size:14px;color:#666;margin-bottom:20px}.svk-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:8px}.svk-card{border:2px solid #e8d5de;border-radius:14px;padding:20px;background:#fff}.svk-card.feat{border-color:#A55578;box-shadow:0 0 0 3px rgba(165,85,120,.1)}.svk-brand{font-family:"Bricolage Grotesk",sans-serif;font-size:17px;font-weight:700;margin-bottom:2px}.svk-card.feat .svk-brand{color:#A55578}.svk-tag{font-size:11px;color:#888;margin-bottom:14px}.svk-row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0e8ec;font-size:13px}.svk-row:last-child{border:none}.svk-rname{font-weight:600;color:#212121}.svk-rprice{font-weight:600;color:#A55578}.svk-rdetail{font-size:11px;color:#aaa}.svk-note{font-size:11px;color:#888;margin-top:10px;font-style:italic}.svk-verdict{background:linear-gradient(135deg,#fdf2f6,#f5eef8);border:2px solid #A55578;border-radius:16px;padding:28px 24px;text-align:center;margin-top:24px}.svk-verdict h2{color:#A55578;margin-bottom:8px}.svk-verdict p{font-size:14px;color:#555;max-width:580px;margin:0 auto 18px;line-height:1.6}.svk-cta{display:inline-flex;background:#A55578;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px;box-shadow:0 4px 12px rgba(165,85,120,.25);transition:opacity .2s}.svk-cta:hover{opacity:.88}'+
// Quiz styles
'.sqw{font-family:Inter,sans-serif;background:#f8f5f7;border-radius:20px;padding:28px 24px;max-width:100%;margin:32px 0 8px;border:1.5px solid #e8d5de;box-sizing:border-box}.sqw *{box-sizing:border-box}.sqw h2,.sqw h3{font-family:"Bricolage Grotesk",sans-serif}.sqw .sq-hd{text-align:center;margin-bottom:20px}.sqw .sq-logo{height:26px;margin-bottom:12px}.sqw .sq-title{font-size:22px;font-weight:700;color:#A55578;margin:0 0 4px}.sqw .sq-sub{font-size:13px;color:#21212199;margin:0}.sqw .sq-prog{margin-bottom:18px}.sq-pb-wrap{background:#e8d5de;border-radius:99px;height:5px}.sq-pb{background:#A55578;height:5px;border-radius:99px;transition:width .3s}.sq-ps{font-size:11px;color:#A55578;text-align:center;margin-top:5px;font-weight:500}.sqw .sq-card{background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 10px rgba(165,85,120,.07)}.sq-back{display:inline-flex;align-items:center;gap:5px;background:none;border:none;color:#A55578;font-size:12px;font-weight:500;cursor:pointer;padding:0;margin-bottom:14px;opacity:.8}.sq-q{font-size:18px;font-weight:700;color:#A55578;margin:0 0 16px;font-family:"Bricolage Grotesk",sans-serif}.sq-opts{display:grid;grid-template-columns:1fr 1fr;gap:9px}.sq-opt{border:2px solid #e8d5de;border-radius:11px;padding:12px 14px;text-align:left;background:#fff;cursor:pointer;transition:all .2s;font-family:Inter,sans-serif}.sq-opt:hover{border-color:#A55578;background:#fdf2f6}.sq-opt.sq-sel{border-color:#A55578;background:#fdf2f6}.sq-opt .sq-ol{font-size:13px;font-weight:600;color:#212121}.sq-opt .sq-od{font-size:11px;color:#888;margin-top:2px}.sq-feats{display:flex;flex-direction:column;gap:8px}.sq-feat{border:2px solid #e8d5de;border-radius:11px;padding:12px 14px;display:flex;align-items:center;gap:10px;cursor:pointer;transition:all .2s;background:#fff}.sq-feat:hover{border-color:#A55578;background:#fdf2f6}.sq-feat input{accent-color:#A55578;width:15px;height:15px}.sq-feat .sq-fl{font-size:13px;font-weight:600;color:#212121}.sq-feat .sq-fd{font-size:11px;color:#888;margin-top:1px}.sq-cta{width:100%;background:#A55578;color:#fff;border:none;border-radius:11px;padding:12px;font-size:14px;font-weight:600;cursor:pointer;margin-top:16px;font-family:Inter,sans-serif;transition:opacity .2s}.sq-cta:hover{opacity:.88}.sq-res .sq-rec{background:linear-gradient(135deg,#fdf2f6,#f5eef8);border:2px solid #A55578;border-radius:13px;padding:20px;margin-bottom:16px;text-align:center}.sq-res .sq-rn{font-size:18px;font-weight:700;color:#A55578;margin:0 0 4px;font-family:"Bricolage Grotesk",sans-serif}.sq-res .sq-rp{font-size:24px;font-weight:700;color:#A55578;margin:4px 0;font-family:"Bricolage Grotesk",sans-serif}.sq-res .sq-rf{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-top:10px}.sq-res .sq-rfi{font-size:11px;background:#fff;border:1px solid #e8d5de;border-radius:99px;padding:3px 9px;color:#212121}.sq-comp-hd{font-size:16px;font-weight:700;color:#A55578;margin:16px 0 10px;font-family:"Bricolage Grotesk",sans-serif}.sq-btabs{display:flex;gap:5px;justify-content:center;margin-bottom:12px}.sq-btab{border:2px solid #e8d5de;border-radius:7px;padding:7px 16px;background:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;color:#666;transition:all .2s}.sq-btab.sq-act{background:#A55578;border-color:#A55578;color:#fff}.sq-plans{display:flex;gap:9px;overflow-x:auto;padding-bottom:6px}.sq-plan{min-width:140px;border:2px solid #e8d5de;border-radius:11px;padding:12px;background:#fff;flex-shrink:0}.sq-plan.sq-prec{border-color:#A55578;box-shadow:0 0 0 3px rgba(165,85,120,.1)}.sq-plan .sq-pn{font-size:13px;font-weight:700;color:#A55578;margin:0 0 2px;font-family:"Bricolage Grotesk",sans-serif}.sq-plan .sq-pp{font-size:18px;font-weight:700;color:#212121}.sq-plan .sq-pb2{font-size:10px;color:#888;margin-bottom:6px}.sq-plan .sq-pbadge{background:#A55578;color:#fff;font-size:9px;border-radius:99px;padding:2px 7px;display:inline-block;margin-bottom:5px}.sq-plan ul{list-style:none;padding:0;margin:0}.sq-plan ul li{font-size:10px;color:#555;padding:1px 0;display:flex;align-items:center;gap:3px}.sq-plan ul li::before{content:"\\2713";color:#A55578;font-weight:700}.sq-acts{display:flex;gap:9px;justify-content:center;margin-top:16px;flex-wrap:wrap}.sq-trial{background:#A55578;color:#fff;border:none;border-radius:9px;padding:10px 22px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;transition:opacity .2s}.sq-trial:hover{opacity:.88}.sq-retry{border:2px solid #A55578;color:#A55578;background:#fff;border-radius:9px;padding:10px 22px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif}.sq-retry:hover{background:#fdf2f6}.sq-note{font-size:10px;color:#aaa;text-align:center;margin-top:8px}@media(max-width:600px){.svk-grid{grid-template-columns:1fr}.sq-opts{grid-template-columns:1fr}.sq-plans{flex-direction:column}.sq-plan{min-width:unset}}';
document.head.appendChild(css);

// ── Quiz logic ───────────────────────────────────────────────────────────────
var PL={freetrial:{n:"Free Trial",y:0,m:0,yf:["10 GB storage","2 Events","40 Guests/Event"],mf:["10 GB Reusable","2 Events","Unlimited Guests"],pop:false},starter:{n:"Starter",y:744,m:1125,yf:["100 GB","100 Events","2,000 Guests"],mf:["100 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},amateur:{n:"Amateur",y:1488,m:2250,yf:["500 GB","250 Events","2,000 Guests"],mf:["500 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},pro:{n:"Pro",y:2618,m:3960,yf:["1,000 GB","500 Events","2,000 Guests"],mf:["1,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:true},promax:{n:"Pro Max",y:4106,m:6210,yf:["4,000 GB","2,000 Events","2,000 Guests"],mf:["4,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},advanced:{n:"Advanced",y:5653,m:8550,yf:["8,000 GB","4,000 Events","2,000 Guests"],mf:["8,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false}};
var qi=0,ans={},cb='yearly';
function rec(){var u=parseInt(ans.u||0),g=parseInt(ans.g||0);if(u<=10&&g<=5)return'freetrial';if(u<=100&&g<=15)return'starter';if(u<=500&&g<=30)return'amateur';if(u<=1000&&g<=50)return'pro';if(u<=4000)return'promax';return'advanced';}
function render(){
var el=document.getElementById('svk-quiz-inner');if(!el)return;
var prog=qi===0?0:qi>=5?100:Math.round(qi/4*100);
var ph=qi>0&&qi<5?'<div class="sq-prog"><div class="sq-pb-wrap"><div class="sq-pb" style="width:'+prog+'%"></div></div><div class="sq-ps">Step '+qi+' of 4</div></div>':'';
var back=qi>1&&qi<5?'<button class="sq-back" onclick="svkBack()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var rback=qi===5?'<button class="sq-back" onclick="svkBack()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var body='';
if(qi===0){body='<div class="sq-card" style="text-align:center"><p style="font-size:13px;color:#21212199;margin:0 0 16px;line-height:1.6">Discover the perfect plan for your photography business.</p><button class="sq-cta" onclick="svkStart()">Start Package Quiz \u2192</button></div>';}
else if(qi===1){body='<div class="sq-card">'+back+'<div class="sq-q">How many GB do you upload monthly?</div><div class="sq-opts">'+ [['10','Up to 10 GB','Occasional'],['100','100 GB','Regular'],['500','500 GB','Busy'],['1000','1,000 GB','Professional'],['4000','4,000 GB','High-volume'],['8000','8,000 GB','Enterprise']].map(function(o){return'<button class="sq-opt'+(ans.u===o[0]?' sq-sel':'')+'" onclick="svkAns(\'u\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===2){body='<div class="sq-card">'+back+'<div class="sq-q">How many events monthly?</div><div class="sq-opts">'+ [['5','1\u20135 events','Starting out'],['15','6\u201315 events','Growing'],['30','16\u201330 events','Established'],['50','30+ events','High-volume']].map(function(o){return'<button class="sq-opt'+(ans.g===o[0]?' sq-sel':'')+'" onclick="svkAns(\'g\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===3){body='<div class="sq-card">'+back+'<div class="sq-q">Preferred billing cycle?</div><div class="sq-opts">'+ [['monthly','Monthly','Flexible'],['yearly','Yearly','Save 20%']].map(function(o){return'<button class="sq-opt'+(ans.b===o[0]?' sq-sel':'')+'" onclick="svkAns(\'b\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===4){body='<div class="sq-card">'+back+'<div class="sq-q">Most important features?</div><div class="sq-feats"><label class="sq-feat"><input type="checkbox" '+(ans.f1?'checked':'')+' onchange="ans.f1=this.checked"><div><div class="sq-fl">Pixel-Targeted Client Acquisition</div><div class="sq-fd">AI-powered marketing</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f2?'checked':'')+' onchange="ans.f2=this.checked"><div><div class="sq-fl">Branded Client Galleries</div><div class="sq-fd">Custom branding</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f3?'checked':'')+' onchange="ans.f3=this.checked"><div><div class="sq-fl">Advanced Privacy Controls</div><div class="sq-fd">Enhanced security</div></div></label></div><button class="sq-cta" onclick="svkResults()">Get My Recommendation \u2192</button></div>';}
else if(qi===5){var k=rec(),pl=PL[k],isY=ans.b!=='monthly',pr=isY?pl.y:pl.m,bt=isY?'/mo (yearly)':'/month',df=isY?pl.yf:pl.mf;
var plH=Object.entries(PL).map(function(e){var pk=e[0],pp=e[1],dp=cb==='yearly'?pp.y:pp.m,isR=pk===k,pf=cb==='yearly'?pp.yf:pp.mf;return'<div class="sq-plan'+(isR?' sq-prec':'')+'">'+(isR?'<div class="sq-pbadge">RECOMMENDED</div>':pp.pop?'<div class="sq-pbadge">POPULAR</div>':'<div style="height:18px"></div>')+'<div class="sq-pn">'+pp.n+'</div><div class="sq-pp">\u20b9'+dp.toLocaleString()+'</div><div class="sq-pb2">+taxes '+(cb==='yearly'?'billed yearly':'per month')+'</div><ul>'+pf.map(function(f){return'<li>'+f+'</li>';}).join('')+'</ul></div>';}).join('');
body='<div class="sq-res">'+rback+'<div class="sq-rec"><div class="sq-rn">'+pl.n+' Plan</div><div class="sq-rp">\u20b9'+pr.toLocaleString()+' + taxes<span style="font-size:12px;font-weight:400;color:#A5557899">'+bt+'</span></div><div class="sq-rf">'+df.map(function(f){return'<div class="sq-rfi">\u2713 '+f+'</div>';}).join('')+'</div></div><div class="sq-comp-hd">Compare All Plans</div><div class="sq-btabs"><button class="sq-btab'+(cb==='yearly'?' sq-act':'')+'" onclick="svkCB(\'yearly\')">Yearly</button><button class="sq-btab'+(cb==='monthly'?' sq-act':'')+'" onclick="svkCB(\'monthly\')">Monthly</button></div><div class="sq-plans">'+plH+'</div><div class="sq-acts"><button class="sq-trial" onclick="window.open(\'https://events.samaro.ai/photographer/pricing-plans\',\'_blank\')">Start Free Trial</button><button class="sq-retry" onclick="svkRetry()">Retake Quiz</button></div><p class="sq-note">* Pricing subject to change.</p></div>';}
el.innerHTML='<div class="sq-hd"><img class="sq-logo" src="https://framerusercontent.com/images/QIOvgXKPEVIPMZ3GE7z6Ek32HI.png" alt="Samaro"><div class="sq-title">Find Your Perfect Samaro Package</div><div class="sq-sub">AI-powered photo sharing for photographers</div></div>'+ph+body;
}
window.svkStart=function(){qi=1;render();};
window.svkBack=function(){if(qi>1)qi--;else qi=0;render();};
window.svkAns=function(k,v){ans[k]=v;if(qi<4){qi++;render();}else{render();}};
window.svkResults=function(){qi=5;render();};
window.svkCB=function(b){cb=b;render();};
window.svkRetry=function(){qi=0;ans={};cb='yearly';render();};

// ── Inject after the existing blog conclusion ────────────────────────────────
function inject(){
// Find the conclusion/final section
var hs=document.querySelectorAll('h2,h3,h4');
var target=null;
hs.forEach(function(h){
  var t=h.textContent.toLowerCase();
  if(t.includes('conclusion')||t.includes('final verdict')||t.includes('final thoughts'))target=h;
});

// Build pricing comparison block
var pricing=document.createElement('div');
pricing.className='svk';
pricing.innerHTML='<h2>Pricing Comparison</h2>'+
'<p class="svk-sub">Side-by-side pricing — Samaro vs Kwikpic for professional photographers.</p>'+
'<div class="svk-grid">'+
'<div class="svk-card feat"><div class="svk-brand">Samaro</div><div class="svk-tag">GB-based \u00b7 All features included \u00b7 No hidden costs</div>'+
'<div class="svk-row"><div><div class="svk-rname">Free Trial</div><div class="svk-rdetail">10 GB \u00b7 2 Events</div></div><div class="svk-rprice">\u20b90</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Starter</div><div class="svk-rdetail">100 GB \u00b7 100 Events</div></div><div class="svk-rprice">\u20b9744/mo</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Amateur</div><div class="svk-rdetail">500 GB \u00b7 250 Events</div></div><div class="svk-rprice">\u20b91,488/mo</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Pro \u2b50</div><div class="svk-rdetail">1,000 GB \u00b7 500 Events</div></div><div class="svk-rprice">\u20b92,618/mo</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Pro Max</div><div class="svk-rdetail">4,000 GB \u00b7 2,000 Events</div></div><div class="svk-rprice">\u20b94,106/mo</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Advanced</div><div class="svk-rdetail">8,000 GB \u00b7 4,000 Events</div></div><div class="svk-rprice">\u20b95,653/mo</div></div>'+
'<p class="svk-note">All plans include face recognition, WhatsApp delivery, Camera2Cloud, branded galleries, watermarking & client proofing.</p></div>'+
'<div class="svk-card"><div class="svk-brand">Kwikpic</div><div class="svk-tag">Credit-based \u00b7 Features sold as add-ons</div>'+
'<div class="svk-row"><div><div class="svk-rname">Free</div><div class="svk-rdetail">1,000 photos (1st yr only)</div></div><div class="svk-rprice">\u20b90</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Basic</div><div class="svk-rdetail">20,000 photos/yr</div></div><div class="svk-rprice">\u20b93,490/yr</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Standard</div><div class="svk-rdetail">1,00,000 photos/yr</div></div><div class="svk-rprice">\u20b97,490/yr</div></div>'+
'<div class="svk-row"><div><div class="svk-rname">Premium</div><div class="svk-rdetail">5,00,000 photos/yr</div></div><div class="svk-rprice">\u20b929,990/yr</div></div>'+
'<p class="svk-note">\u26a0\ufe0f Branding (\u20b95K), watermark (\u20b93K), album selection (\u20b93K), WhatsApp (\u20b91/msg after 10 free) are extra.</p></div>'+
'</div>';

// Build quiz block
var quiz=document.createElement('div');
quiz.className='sqw';
quiz.innerHTML='<div id="svk-quiz-inner"></div>';

// Build verdict + CTA at the very end
var verdict=document.createElement('div');
verdict.className='svk-verdict';
verdict.innerHTML='<h2>The Verdict</h2>'+
'<p>For professional wedding and event photographers who need fast delivery, transparent pricing, WhatsApp integration, and Camera2Cloud \u2014 <strong>Samaro is the clear choice</strong>. Kwikpic works for personal photo sharing, but for running a photography business Samaro\u2019s all-inclusive plans are the better investment.</p>'+
'<a href="https://events.samaro.ai/photographer/pricing-plans" class="svk-cta">Try Samaro Free \u2192</a>';

// Insert: pricing → quiz → verdict — all BEFORE the conclusion heading
if(target&&target.parentNode){
  target.parentNode.insertBefore(pricing, target);
  target.parentNode.insertBefore(quiz, target);
  target.parentNode.insertBefore(verdict, target);
} else {
  // Fallback: append to end of article
  var art=document.querySelector('article,main,[class*="content"]');
  if(art){art.appendChild(pricing);art.appendChild(quiz);art.appendChild(verdict);}
}

// Hide the existing CTA banner that appears at the top (scta class from CTA Banner script)
// We keep it at bottom by moving it after verdict
var existingCta=document.querySelector('.scta');
if(existingCta){
  verdict.parentNode.insertBefore(existingCta, verdict.nextSibling);
}

render();
}

document.readyState==='loading'?document.addEventListener('DOMContentLoaded',function(){setTimeout(inject,900);}):setTimeout(inject,900);
})();
