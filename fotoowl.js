(function(){
if(!location.pathname.includes('fotoowl'))return;

// ── FAQ Schema ───────────────────────────────────────────────────────────────
var sc=document.createElement('script');sc.type='application/ld+json';
sc.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Is Samaro better than FotoOwl for wedding photographers?","acceptedAnswer":{"@type":"Answer","text":"Yes. Samaro offers Camera2Cloud live uploads during events, unlimited WhatsApp delivery, native 4K video galleries, digital invites with RSVP, and all features included in every plan. FotoOwl focuses on photo culling and organization but lacks Camera2Cloud, native video support, and digital invites."}},
{"@type":"Question","name":"Does FotoOwl support 4K video sharing?","acceptedAnswer":{"@type":"Answer","text":"FotoOwl supports video placement with a dedicated CTA button but its core strength is photo management and culling. Samaro supports native 4K video uploads with Netflix-style gallery layouts as part of all plans."}},
{"@type":"Question","name":"Which platform has better WhatsApp integration?","acceptedAnswer":{"@type":"Answer","text":"Samaro has deeper WhatsApp integration — it delivers photos directly to guests via WhatsApp without requiring an app download, supports guest photo uploads via WhatsApp Bot, and sends automated reminders. FotoOwl offers WhatsApp notifications on paid plans."}},
{"@type":"Question","name":"Can I switch from FotoOwl to Samaro?","acceptedAnswer":{"@type":"Answer","text":"Yes. Samaro offers a free trial with 10 GB storage, 2 events, and 40 guests per event so you can test it with a real event before committing."}},
{"@type":"Question","name":"Does Samaro offer photo culling like FotoOwl?","acceptedAnswer":{"@type":"Answer","text":"Samaro focuses on delivery and sharing — it offers client proofing (photo selection) so clients can choose their favourite photos. FotoOwl has a stronger AI culling tool for photographers to shortlist their best shots before delivery."}},
{"@type":"Question","name":"Which is cheaper, Samaro or FotoOwl?","acceptedAnswer":{"@type":"Answer","text":"FotoOwl has a free Creator Pass with 10,000 photos/year for verified photographers. Samaro's free trial offers 10 GB across 2 events. For professional volume, Samaro's pricing is transparent and storage-based with all features included, while FotoOwl's paid tiers add premium features progressively."}}
]});
document.head.appendChild(sc);

// ── Styles ────────────────────────────────────────────────────────────────────
var lk=document.createElement('link');lk.rel='stylesheet';
lk.href='https://fonts.googleapis.com/css2?family=Bricolage+Grotesk:opsz,wght@12..96,600;12..96,700&family=Inter:wght@400;500;600&display=swap';
document.head.appendChild(lk);
var css=document.createElement('style');
css.textContent=
'.sfo{font-family:Inter,sans-serif;max-width:100%;margin:40px 0}.sfo h2{font-family:"Bricolage Grotesk",sans-serif;font-size:24px;font-weight:700;color:#A55578;margin:0 0 6px}.sfo .sfo-sub{font-size:14px;color:#666;margin-bottom:20px}'+
'.sfo-table{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid #e8d5de;border-radius:14px;overflow:hidden;margin-bottom:32px}.sfo-table thead th{padding:14px 16px;font-family:"Bricolage Grotesk",sans-serif;font-weight:700;font-size:13px;text-align:left}.sfo-table thead th:first-child{background:#f5f0f3;color:#212121;width:36%}.sfo-table thead th:nth-child(2){background:#A55578;color:#fff;width:32%;text-align:center}.sfo-table thead th:nth-child(3){background:#f5f0f3;color:#212121;width:32%;text-align:center}.sfo-table tbody td{padding:11px 16px;font-size:13px;border-top:1px solid #f0e8ec;vertical-align:middle}.sfo-table tbody td:first-child{font-weight:600;color:#212121;background:#fdfbfc}.sfo-table tbody td:nth-child(2){text-align:center;background:#fdf9fb}.sfo-table tbody td:nth-child(3){text-align:center}.sfo-ck{color:#22C55E;font-weight:700;font-size:15px}.sfo-cr{color:#EF4444;font-weight:700;font-size:15px}.sfo-part{color:#F59E0B;font-size:12px;font-weight:600}'+
'.sfo-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:8px}.sfo-card{border:2px solid #e8d5de;border-radius:14px;padding:20px;background:#fff}.sfo-card.feat{border-color:#A55578;box-shadow:0 0 0 3px rgba(165,85,120,.1)}.sfo-brand{font-family:"Bricolage Grotesk",sans-serif;font-size:17px;font-weight:700;margin-bottom:2px}.sfo-card.feat .sfo-brand{color:#A55578}.sfo-tag{font-size:11px;color:#888;margin-bottom:14px}.sfo-row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f0e8ec;font-size:13px}.sfo-row:last-child{border:none}.sfo-rn{font-weight:600;color:#212121}.sfo-rp{font-weight:600;color:#A55578}.sfo-rd{font-size:11px;color:#aaa}.sfo-note{font-size:11px;color:#888;margin-top:10px;font-style:italic}'+
'.sfo-verdict{background:linear-gradient(135deg,#fdf2f6,#f5eef8);border:2px solid #A55578;border-radius:16px;padding:28px 24px;text-align:center;margin-top:24px}.sfo-verdict h2{color:#A55578;margin-bottom:8px}.sfo-verdict p{font-size:14px;color:#555;max-width:580px;margin:0 auto 18px;line-height:1.6}.sfo-cta{display:inline-flex;background:#A55578;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px;box-shadow:0 4px 12px rgba(165,85,120,.25);transition:opacity .2s}.sfo-cta:hover{opacity:.88}'+
'.sqw{font-family:Inter,sans-serif;background:#f8f5f7;border-radius:20px;padding:28px 24px;max-width:100%;margin:32px 0 8px;border:1.5px solid #e8d5de;box-sizing:border-box}.sqw *{box-sizing:border-box}.sqw h2,.sqw h3{font-family:"Bricolage Grotesk",sans-serif}.sqw .sq-hd{text-align:center;margin-bottom:20px}.sqw .sq-logo{height:26px;margin-bottom:12px}.sqw .sq-title{font-size:22px;font-weight:700;color:#A55578;margin:0 0 4px}.sqw .sq-sub{font-size:13px;color:#21212199;margin:0}.sqw .sq-prog{margin-bottom:18px}.sq-pb-wrap{background:#e8d5de;border-radius:99px;height:5px}.sq-pb{background:#A55578;height:5px;border-radius:99px;transition:width .3s}.sq-ps{font-size:11px;color:#A55578;text-align:center;margin-top:5px;font-weight:500}.sqw .sq-card{background:#fff;border-radius:14px;padding:20px;box-shadow:0 2px 10px rgba(165,85,120,.07)}.sq-back{display:inline-flex;align-items:center;gap:5px;background:none;border:none;color:#A55578;font-size:12px;font-weight:500;cursor:pointer;padding:0;margin-bottom:14px;opacity:.8}.sq-q{font-size:18px;font-weight:700;color:#A55578;margin:0 0 16px;font-family:"Bricolage Grotesk",sans-serif}.sq-opts{display:grid;grid-template-columns:1fr 1fr;gap:9px}.sq-opt{border:2px solid #e8d5de;border-radius:11px;padding:12px 14px;text-align:left;background:#fff;cursor:pointer;transition:all .2s;font-family:Inter,sans-serif}.sq-opt:hover{border-color:#A55578;background:#fdf2f6}.sq-opt.sq-sel{border-color:#A55578;background:#fdf2f6}.sq-opt .sq-ol{font-size:13px;font-weight:600;color:#212121}.sq-opt .sq-od{font-size:11px;color:#888;margin-top:2px}.sq-feats{display:flex;flex-direction:column;gap:8px}.sq-feat{border:2px solid #e8d5de;border-radius:11px;padding:12px 14px;display:flex;align-items:center;gap:10px;cursor:pointer;background:#fff}.sq-feat:hover{border-color:#A55578;background:#fdf2f6}.sq-feat input{accent-color:#A55578;width:15px;height:15px}.sq-feat .sq-fl{font-size:13px;font-weight:600;color:#212121}.sq-feat .sq-fd{font-size:11px;color:#888;margin-top:1px}.sq-cta{width:100%;background:#A55578;color:#fff;border:none;border-radius:11px;padding:12px;font-size:14px;font-weight:600;cursor:pointer;margin-top:16px;font-family:Inter,sans-serif}.sq-cta:hover{opacity:.88}.sq-res .sq-rec{background:linear-gradient(135deg,#fdf2f6,#f5eef8);border:2px solid #A55578;border-radius:13px;padding:20px;margin-bottom:16px;text-align:center}.sq-res .sq-rn{font-size:18px;font-weight:700;color:#A55578;margin:0 0 4px;font-family:"Bricolage Grotesk",sans-serif}.sq-res .sq-rp{font-size:24px;font-weight:700;color:#A55578;margin:4px 0}.sq-res .sq-rf{display:flex;flex-wrap:wrap;gap:5px;justify-content:center;margin-top:10px}.sq-res .sq-rfi{font-size:11px;background:#fff;border:1px solid #e8d5de;border-radius:99px;padding:3px 9px;color:#212121}.sq-comp-hd{font-size:16px;font-weight:700;color:#A55578;margin:16px 0 10px;font-family:"Bricolage Grotesk",sans-serif}.sq-btabs{display:flex;gap:5px;justify-content:center;margin-bottom:12px}.sq-btab{border:2px solid #e8d5de;border-radius:7px;padding:7px 16px;background:#fff;font-size:12px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif;color:#666}.sq-btab.sq-act{background:#A55578;border-color:#A55578;color:#fff}.sq-plans{display:flex;gap:9px;overflow-x:auto;padding-bottom:6px}.sq-plan{min-width:140px;border:2px solid #e8d5de;border-radius:11px;padding:12px;background:#fff;flex-shrink:0}.sq-plan.sq-prec{border-color:#A55578;box-shadow:0 0 0 3px rgba(165,85,120,.1)}.sq-plan .sq-pn{font-size:13px;font-weight:700;color:#A55578;margin:0 0 2px;font-family:"Bricolage Grotesk",sans-serif}.sq-plan .sq-pp{font-size:18px;font-weight:700;color:#212121}.sq-plan .sq-pb2{font-size:10px;color:#888;margin-bottom:6px}.sq-plan .sq-pbadge{background:#A55578;color:#fff;font-size:9px;border-radius:99px;padding:2px 7px;display:inline-block;margin-bottom:5px}.sq-plan ul{list-style:none;padding:0;margin:0}.sq-plan ul li{font-size:10px;color:#555;padding:1px 0;display:flex;align-items:center;gap:3px}.sq-plan ul li::before{content:"\\2713";color:#A55578;font-weight:700}.sq-acts{display:flex;gap:9px;justify-content:center;margin-top:16px;flex-wrap:wrap}.sq-trial{background:#A55578;color:#fff;border:none;border-radius:9px;padding:10px 22px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif}.sq-trial:hover{opacity:.88}.sq-retry{border:2px solid #A55578;color:#A55578;background:#fff;border-radius:9px;padding:10px 22px;font-size:13px;font-weight:600;cursor:pointer;font-family:Inter,sans-serif}.sq-retry:hover{background:#fdf2f6}.sq-note{font-size:10px;color:#aaa;text-align:center;margin-top:8px}'+
'@media(max-width:600px){.sfo-grid{grid-template-columns:1fr}.sfo-table{font-size:11px}.sfo-table thead th,.sfo-table tbody td{padding:8px 10px}.sq-opts{grid-template-columns:1fr}.sq-plans{flex-direction:column}.sq-plan{min-width:unset}}';
document.head.appendChild(css);
// ── Quiz logic ───────────────────────────────────────────────────────────────
var PL={freetrial:{n:"Free Trial",y:0,m:0,yf:["10 GB storage","2 Events","40 Guests/Event"],mf:["10 GB Reusable","2 Events","Unlimited Guests"],pop:false},starter:{n:"Starter",y:744,m:1125,yf:["100 GB","100 Events","2,000 Guests"],mf:["100 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},amateur:{n:"Amateur",y:1488,m:2250,yf:["500 GB","250 Events","2,000 Guests"],mf:["500 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},pro:{n:"Pro",y:2618,m:3960,yf:["1,000 GB","500 Events","2,000 Guests"],mf:["1,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:true},promax:{n:"Pro Max",y:4106,m:6210,yf:["4,000 GB","2,000 Events","2,000 Guests"],mf:["4,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false},advanced:{n:"Advanced",y:5653,m:8550,yf:["8,000 GB","4,000 Events","2,000 Guests"],mf:["8,000 GB Reusable","Unlimited Events","Unlimited Guests"],pop:false}};
var qi=0,ans={},cb='yearly';
function rec(){var u=parseInt(ans.u||0),g=parseInt(ans.g||0);if(u<=10&&g<=5)return'freetrial';if(u<=100&&g<=15)return'starter';if(u<=500&&g<=30)return'amateur';if(u<=1000&&g<=50)return'pro';if(u<=4000)return'promax';return'advanced';}
function render(){
var el=document.getElementById('sfo-quiz-inner');if(!el)return;
var prog=qi===0?0:qi>=5?100:Math.round(qi/4*100);
var ph=qi>0&&qi<5?'<div class="sq-prog"><div class="sq-pb-wrap"><div class="sq-pb" style="width:'+prog+'%"></div></div><div class="sq-ps">Step '+qi+' of 4</div></div>':'';
var back=qi>1&&qi<5?'<button class="sq-back" onclick="sfoBack()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var rback=qi===5?'<button class="sq-back" onclick="sfoBack()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>Back</button>':'';
var body='';
if(qi===0){body='<div class="sq-card" style="text-align:center"><p style="font-size:13px;color:#21212199;margin:0 0 16px;line-height:1.6">Discover the perfect Samaro plan for your photography business.</p><button class="sq-cta" onclick="sfoStart()">Start Package Quiz \u2192</button></div>';}
else if(qi===1){body='<div class="sq-card">'+back+'<div class="sq-q">How many GB do you upload monthly?</div><div class="sq-opts">'+ [['10','Up to 10 GB','Occasional'],['100','100 GB','Regular'],['500','500 GB','Busy'],['1000','1,000 GB','Professional'],['4000','4,000 GB','High-volume'],['8000','8,000 GB','Enterprise']].map(function(o){return'<button class="sq-opt'+(ans.u===o[0]?' sq-sel':'')+'" onclick="sfoAns(\'u\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===2){body='<div class="sq-card">'+back+'<div class="sq-q">How many events monthly?</div><div class="sq-opts">'+ [['5','1\u20135 events','Starting out'],['15','6\u201315 events','Growing'],['30','16\u201330 events','Established'],['50','30+ events','High-volume']].map(function(o){return'<button class="sq-opt'+(ans.g===o[0]?' sq-sel':'')+'" onclick="sfoAns(\'g\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===3){body='<div class="sq-card">'+back+'<div class="sq-q">Preferred billing cycle?</div><div class="sq-opts">'+ [['monthly','Monthly','Flexible'],['yearly','Yearly','Save 20%']].map(function(o){return'<button class="sq-opt'+(ans.b===o[0]?' sq-sel':'')+'" onclick="sfoAns(\'b\',\''+o[0]+'\')"><div class="sq-ol">'+o[1]+'</div><div class="sq-od">'+o[2]+'</div></button>';}).join('')+'</div></div>';}
else if(qi===4){body='<div class="sq-card">'+back+'<div class="sq-q">Most important features?</div><div class="sq-feats"><label class="sq-feat"><input type="checkbox" '+(ans.f1?'checked':'')+' onchange="ans.f1=this.checked"><div><div class="sq-fl">Camera2Cloud Live Upload</div><div class="sq-fd">Shoot-to-gallery in real time</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f2?'checked':'')+' onchange="ans.f2=this.checked"><div><div class="sq-fl">WhatsApp Photo Delivery</div><div class="sq-fd">No app download for guests</div></div></label><label class="sq-feat"><input type="checkbox" '+(ans.f3?'checked':'')+' onchange="ans.f3=this.checked"><div><div class="sq-fl">Digital Invites + RSVP</div><div class="sq-fd">Animated web invitations</div></div></label></div><button class="sq-cta" onclick="sfoResults()">Get My Recommendation \u2192</button></div>';}
else if(qi===5){var k=rec(),pl=PL[k],isY=ans.b!=='monthly',pr=isY?pl.y:pl.m,bt=isY?'/mo (yearly)':'/month',df=isY?pl.yf:pl.mf;
var plH=Object.entries(PL).map(function(e){var pk=e[0],pp=e[1],dp=cb==='yearly'?pp.y:pp.m,isR=pk===k,pf=cb==='yearly'?pp.yf:pp.mf;return'<div class="sq-plan'+(isR?' sq-prec':'')+'">'+(isR?'<div class="sq-pbadge">RECOMMENDED</div>':pp.pop?'<div class="sq-pbadge">POPULAR</div>':'<div style="height:18px"></div>')+'<div class="sq-pn">'+pp.n+'</div><div class="sq-pp">\u20b9'+dp.toLocaleString()+'</div><div class="sq-pb2">+taxes '+(cb==='yearly'?'billed yearly':'per month')+'</div><ul>'+pf.map(function(f){return'<li>'+f+'</li>';}).join('')+'</ul></div>';}).join('');
body='<div class="sq-res">'+rback+'<div class="sq-rec"><div class="sq-rn">'+pl.n+' Plan</div><div class="sq-rp">\u20b9'+pr.toLocaleString()+' + taxes<span style="font-size:12px;font-weight:400;color:#A5557899">'+bt+'</span></div><div class="sq-rf">'+df.map(function(f){return'<div class="sq-rfi">\u2713 '+f+'</div>';}).join('')+'</div></div><div class="sq-comp-hd">Compare All Plans</div><div class="sq-btabs"><button class="sq-btab'+(cb==='yearly'?' sq-act':'')+'" onclick="sfoCB(\'yearly\')">Yearly</button><button class="sq-btab'+(cb==='monthly'?' sq-act':'')+'" onclick="sfoCB(\'monthly\')">Monthly</button></div><div class="sq-plans">'+plH+'</div><div class="sq-acts"><button class="sq-trial" onclick="window.open(\'https://events.samaro.ai/photographer/pricing-plans\',\'_blank\')">Start Free Trial</button><button class="sq-retry" onclick="sfoRetry()">Retake Quiz</button></div><p class="sq-note">* Pricing subject to change.</p></div>';}
el.innerHTML='<div class="sq-hd"><img class="sq-logo" src="https://framerusercontent.com/images/QIOvgXKPEVIPMZ3GE7z6Ek32HI.png" alt="Samaro"><div class="sq-title">Find Your Perfect Samaro Package</div><div class="sq-sub">AI-powered photo sharing for photographers</div></div>'+ph+body;
}
window.sfoStart=function(){qi=1;render();};
window.sfoBack=function(){if(qi>1)qi--;else qi=0;render();};
window.sfoAns=function(k,v){ans[k]=v;if(qi<4){qi++;render();}else{render();}};
window.sfoResults=function(){qi=5;render();};
window.sfoCB=function(b){cb=b;render();};
window.sfoRetry=function(){qi=0;ans={};cb='yearly';render();};

// ── Build & inject content ───────────────────────────────────────────────────
function hasHiddenParent(el){
  var p=el;
  for(var i=0;i<10;i++){p=p.parentElement;if(!p)return false;var s=window.getComputedStyle(p);if(s.overflow==='hidden'&&p.offsetHeight<100)return true;}
  return false;
}
function inject(){
// Feature Table
var table=document.createElement('div');
table.className='sfo';
table.innerHTML='<h2>Samaro vs FotoOwl: Feature Comparison 2026</h2>'+
'<p class="sfo-sub">A detailed look at how Samaro and FotoOwl compare across the features that matter most to event photographers.</p>'+
'<table class="sfo-table"><thead><tr><th>Feature</th><th>Samaro</th><th>FotoOwl</th></tr></thead><tbody>'+
'<tr><td>AI Face Recognition</td><td><span class="sfo-ck">\u2713</span> Included all plans</td><td><span class="sfo-ck">\u2713</span> Included all plans</td></tr>'+
'<tr><td>Camera2Cloud Live Upload</td><td><span class="sfo-ck">\u2713</span> Upload from camera during event</td><td><span class="sfo-cr">\u2717</span> Not available</td></tr>'+
'<tr><td>WhatsApp Photo Delivery</td><td><span class="sfo-ck">\u2713</span> Unlimited, no app needed</td><td><span class="sfo-part">Paid plans</span> — notifications only</td></tr>'+
'<tr><td>Native 4K Video Galleries</td><td><span class="sfo-ck">\u2713</span> Netflix-style video layouts</td><td><span class="sfo-part">Limited</span> — video with CTA button only</td></tr>'+
'<tr><td>Digital Invites + RSVP</td><td><span class="sfo-ck">\u2713</span> Web-animated invites</td><td><span class="sfo-cr">\u2717</span> Not available</td></tr>'+
'<tr><td>AI Photo Culling</td><td><span class="sfo-part">Client proofing</span> (guest selects)</td><td><span class="sfo-ck">\u2713</span> Strong AI culling for photographers</td></tr>'+
'<tr><td>Client Proofing</td><td><span class="sfo-ck">\u2713</span> Included in all plans</td><td><span class="sfo-ck">\u2713</span> Available</td></tr>'+
'<tr><td>Branded Galleries</td><td><span class="sfo-ck">\u2713</span> Full customisation all plans</td><td><span class="sfo-part">Paid plans</span> — white-label on higher tiers</td></tr>'+
'<tr><td>No App Download for Guests</td><td><span class="sfo-ck">\u2713</span> Works via WhatsApp/QR</td><td><span class="sfo-cr">\u2717</span> App required for full experience</td></tr>'+
'<tr><td>Storage Model</td><td>GB-based — simple & predictable</td><td>Photo-count based with plan tiers</td></tr>'+
'<tr><td>Team Collaboration</td><td><span class="sfo-ck">\u2713</span> Multi-photographer workflows</td><td><span class="sfo-ck">\u2713</span> Available</td></tr>'+
'<tr><td>Portfolio Website</td><td><span class="sfo-cr">\u2717</span> Focus is on event delivery</td><td><span class="sfo-ck">\u2713</span> Custom photographer website</td></tr>'+
'<tr><td>Free Plan</td><td>10 GB, 2 Events, 40 Guests</td><td>10,000 photos/yr (Creator Pass)</td></tr>'+
'</tbody></table>';

// Pricing
var pricing=document.createElement('div');
pricing.className='sfo';
pricing.innerHTML='<h2>Pricing Comparison</h2>'+
'<p class="sfo-sub">Samaro uses transparent GB-based plans. FotoOwl is photo-count based with progressive feature tiers.</p>'+
'<div class="sfo-grid">'+
'<div class="sfo-card feat"><div class="sfo-brand">Samaro</div><div class="sfo-tag">GB-based \u00b7 All features included \u00b7 No hidden costs</div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Free Trial</div><div class="sfo-rd">10 GB \u00b7 2 Events</div></div><div class="sfo-rp">\u20b90</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Starter</div><div class="sfo-rd">100 GB \u00b7 100 Events</div></div><div class="sfo-rp">\u20b9744/mo</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Amateur</div><div class="sfo-rd">500 GB \u00b7 250 Events</div></div><div class="sfo-rp">\u20b91,488/mo</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Pro \u2b50</div><div class="sfo-rd">1,000 GB \u00b7 500 Events</div></div><div class="sfo-rp">\u20b92,618/mo</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Advanced</div><div class="sfo-rd">8,000 GB \u00b7 4,000 Events</div></div><div class="sfo-rp">\u20b95,653/mo</div></div>'+
'<p class="sfo-note">Camera2Cloud, WhatsApp delivery, digital invites, 4K video, client proofing \u2014 all included.</p></div>'+
'<div class="sfo-card"><div class="sfo-brand">FotoOwl</div><div class="sfo-tag">Photo-count based \u00b7 Features unlock by tier</div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Creator Pass</div><div class="sfo-rd">10,000 photos/yr (verified pros)</div></div><div class="sfo-rp">Free</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Skater</div><div class="sfo-rd">Entry paid plan</div></div><div class="sfo-rp">Paid</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Pro</div><div class="sfo-rd">Advanced features</div></div><div class="sfo-rp">Paid</div></div>'+
'<div class="sfo-row"><div><div class="sfo-rn">Pilot</div><div class="sfo-rd">Top tier, full white-label</div></div><div class="sfo-rp">Paid</div></div>'+
'<p class="sfo-note">White-labelling, deep brand customisation, and some premium features reserved for higher tiers.</p></div>'+
'</div>';

// Quiz
var quiz=document.createElement('div');
quiz.className='sqw';
quiz.innerHTML='<div id="sfo-quiz-inner"></div>';

// Verdict
var verdict=document.createElement('div');
verdict.className='sfo-verdict';
verdict.innerHTML='<h2>The Verdict: Samaro vs FotoOwl</h2>'+
'<p>Both platforms serve professional event photographers, but with different strengths. <strong>FotoOwl excels at AI culling</strong> — shortlisting thousands of shots quickly — and has a solid portfolio website builder. <strong>Samaro excels at delivery</strong>: Camera2Cloud live uploads, unlimited WhatsApp delivery without guest app downloads, native 4K video, and digital invites. For photographers who prioritise a seamless guest experience and all-in-one event workflow, <strong>Samaro is the stronger choice</strong>.</p>'+
'<a href="https://events.samaro.ai/photographer/pricing-plans" class="sfo-cta">Try Samaro Free \u2192</a>';

// Find insertion point — before conclusion/final heading
var hs=document.querySelectorAll('h2,h3,h4');
var target=null;
hs.forEach(function(h){
  var t=h.textContent.toLowerCase();
  if(t.includes('conclusion')||t.includes('final thought')||t.includes('which is the best'))target=h;
});

if(target&&target.parentNode){
  target.parentNode.insertBefore(table, target);
  target.parentNode.insertBefore(pricing, target);
  target.parentNode.insertBefore(quiz, target);
  target.parentNode.insertBefore(verdict, target);
} else {
  // fallback: append to framer-mdc7tv
  var art=document.querySelector('.framer-mdc7tv')||document.querySelector('article,main');
  if(art){art.appendChild(table);art.appendChild(pricing);art.appendChild(quiz);art.appendChild(verdict);}
}

// Move existing CTA banner to very end
var existingCta=document.querySelector('.scta');
if(existingCta&&verdict.parentNode){
  verdict.parentNode.insertBefore(existingCta, verdict.nextSibling);
}
render();
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',function(){setTimeout(inject,900);}):setTimeout(inject,900);
})();
