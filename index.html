<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrajRide — Braj Village Transport</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<style>
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{scroll-behavior:smooth}
:root{
  --accent:#E8520A;--accent-light:#FEF0E8;--accent-mid:#F06522;
  --bg:#F5F4F1;--white:#FFFFFF;--text:#1A1A18;--text2:#6B6B66;--text3:#AEADA8;
  --border:#E4E3DF;--green:#1D7A4A;--green-bg:#EAF4EE;--red:#C0392B;
  --red-bg:#FDEDEB;--blue:#185FA5;--blue-bg:#E6F1FB;--purple:#6D28D9;--purple-bg:#EDE9FE;
  --shadow:0 1px 3px rgba(0,0,0,0.06),0 4px 12px rgba(0,0,0,0.04);
  --shadow-md:0 4px 20px rgba(0,0,0,0.08);
  --r:10px;--r-lg:16px;--r-xl:22px;--sidebar:260px;
}
body{font-family:'Inter',-apple-system,sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
.app-shell{display:flex;min-height:100vh}
.sidebar{width:var(--sidebar);background:var(--white);border-right:1px solid var(--border);display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:100;transition:transform 0.3s ease}
.sidebar-logo{padding:24px 20px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px}
.logo-badge{width:36px;height:36px;background:var(--accent);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.logo-text{font-size:18px;font-weight:700;color:var(--text);letter-spacing:-0.5px}
.logo-sub{font-size:11px;color:var(--text3);margin-top:1px;letter-spacing:0.2px}
.sidebar-nav{padding:12px 10px;flex:1}
.nav-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--r);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;color:var(--text2);transition:all 0.15s;margin-bottom:2px}
.nav-item:hover{background:var(--bg);color:var(--text)}
.nav-item.active{background:var(--accent-light);color:var(--accent);font-weight:600}
.nav-item .ni-icon{width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.nav-item .ni-label{flex:1}
.nav-item .ni-badge{background:var(--accent);color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:20px;min-width:18px;text-align:center}
.nav-item.admin-nav{color:var(--purple);margin-top:8px;border-top:1px solid var(--border);padding-top:12px}
.nav-item.admin-nav.active{background:var(--purple-bg);color:var(--purple)}
.sidebar-footer{padding:16px;border-top:1px solid var(--border)}
.sidebar-footer-label{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.sidebar-footer-name{font-size:12px;color:var(--text2);line-height:1.9}
.main-content{margin-left:var(--sidebar);flex:1;min-height:100vh}
.topbar{background:rgba(255,255,255,0.9);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:16px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50}
.topbar-title{font-size:16px;font-weight:600;color:var(--text)}
.topbar-sub{font-size:13px;color:var(--text2);margin-top:1px}
.topbar-right{display:flex;gap:8px;align-items:center}
.topbar-btn{display:flex;align-items:center;gap:6px;padding:8px 14px;border-radius:var(--r);border:1px solid var(--border);background:var(--white);font-family:'Inter',sans-serif;font-size:13px;font-weight:500;color:var(--text);cursor:pointer;transition:all 0.15s}
.topbar-btn:hover{background:var(--bg)}
.topbar-btn.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.topbar-btn.primary:hover{background:var(--accent-mid)}
.screen{display:none}
.screen.active{display:block;animation:fadeIn 0.25s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.page{padding:28px}
.hero-wrap{background:linear-gradient(135deg,#1A1A18 0%,#2D2D2A 100%);border-radius:var(--r-xl);padding:32px;position:relative;overflow:hidden;margin-bottom:24px}
.hero-wrap::before{content:'';position:absolute;width:300px;height:300px;background:radial-gradient(circle,rgba(232,82,10,0.3) 0%,transparent 70%);top:-80px;right:-60px;pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}
.hero-greeting{font-size:13px;color:rgba(255,255,255,0.5);font-weight:500;margin-bottom:6px}
.hero-title{font-size:30px;font-weight:700;color:#fff;line-height:1.2;letter-spacing:-0.5px;margin-bottom:20px}
.hero-title span{color:#F06522}
.hero-stats{display:flex;gap:28px}
.hero-stat .val{font-size:22px;font-weight:700;color:#fff;line-height:1}
.hero-stat .lbl{font-size:12px;color:rgba(255,255,255,0.45);margin-top:3px}
.hero-bus{font-size:96px;opacity:0.08;transform:scaleX(-1);user-select:none;line-height:1}
.section-title{font-size:16px;font-weight:600;color:var(--text);margin-bottom:14px;letter-spacing:-0.2px}
.quick-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:24px}
.quick-card{background:var(--white);border-radius:var(--r-lg);padding:20px;cursor:pointer;border:1px solid var(--border);text-align:left;transition:all 0.2s;box-shadow:var(--shadow)}
.quick-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--accent)}
.quick-card:active{transform:scale(0.98)}
.quick-card.accent{background:var(--accent);border-color:var(--accent)}
.quick-card.accent .qc-title,.quick-card.accent .qc-sub{color:#fff}
.quick-card.accent:hover{background:var(--accent-mid);border-color:var(--accent-mid)}
.qc-icon{font-size:28px;margin-bottom:12px;display:block;line-height:1}
.qc-title{font-size:14px;font-weight:600;color:var(--text);margin-bottom:3px}
.qc-sub{font-size:12px;color:var(--text2)}
.routes-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-bottom:24px}
.route-card{background:var(--white);border-radius:var(--r-lg);padding:14px 16px;cursor:pointer;border:1px solid var(--border);display:flex;align-items:center;gap:12px;transition:all 0.15s;box-shadow:var(--shadow)}
.route-card:hover{border-color:var(--accent);background:var(--accent-light)}
.route-card:active{transform:scale(0.97)}
.route-card .rc-icon{font-size:22px;flex-shrink:0}
.route-card .rc-info{flex:1;min-width:0}
.route-card .rc-name{font-size:13px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.route-card .rc-meta{font-size:11px;color:var(--text2);margin-top:2px}
.route-card .rc-price{font-size:15px;font-weight:700;color:var(--accent);flex-shrink:0}
.route-card .rc-price-label{font-size:10px;color:var(--text3);text-align:right}
.cities-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}
.city-card{background:var(--white);border-radius:var(--r-lg);padding:14px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;border:1px solid var(--border);transition:all 0.15s;box-shadow:var(--shadow)}
.city-card:hover{border-color:var(--accent);background:var(--accent-light)}
.city-card .cc-icon{font-size:20px;flex-shrink:0}
.city-card .cc-name{font-size:13px;font-weight:600;color:var(--text)}
.city-card .cc-dist{font-size:11px;color:var(--text2);margin-top:1px}
.book-layout{display:grid;grid-template-columns:340px 1fr;gap:24px;align-items:start}
.book-form-panel{background:var(--white);border-radius:var(--r-xl);padding:24px;border:1px solid var(--border);box-shadow:var(--shadow);position:sticky;top:84px}
.book-form-panel .bp-title{font-size:18px;font-weight:700;color:var(--text);margin-bottom:20px;letter-spacing:-0.3px}
.type-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px}
.type-btn{background:var(--bg);border:1.5px solid var(--border);border-radius:var(--r);padding:12px 8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px;transition:all 0.15s;font-family:'Inter',sans-serif}
.type-btn .tb-icon{font-size:22px;line-height:1}
.type-btn .tb-lbl{font-size:11px;font-weight:600;color:var(--text2)}
.type-btn.selected{border-color:var(--accent);background:var(--accent-light)}
.type-btn.selected .tb-lbl{color:var(--accent)}
.type-btn:hover:not(.selected){border-color:var(--text3)}
.loc-group{background:var(--bg);border-radius:var(--r-lg);margin-bottom:14px;overflow:hidden;border:1px solid var(--border);position:relative}
.loc-row{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;transition:background 0.12s}
.loc-row:hover{background:rgba(0,0,0,0.02)}
.loc-divider{height:1px;background:var(--border);margin:0 16px}
.loc-dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.dot-from{background:var(--blue-bg)}.dot-to{background:var(--accent-light)}
.loc-texts{flex:1;min-width:0}
.loc-lbl{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:2px}
.loc-val{font-size:14px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.loc-val.ph{color:var(--text3);font-weight:400}
.swap-btn{position:absolute;right:14px;top:50%;transform:translateY(-50%);width:28px;height:28px;border-radius:50%;background:var(--white);border:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;transition:all 0.2s;box-shadow:var(--shadow);z-index:2}
.swap-btn:hover{transform:translateY(-50%) rotate(180deg)}
.dp-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.dp-field{background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;cursor:pointer}
.dp-lbl{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:4px;display:flex;align-items:center;gap:4px}
.dp-val{font-size:14px;font-weight:600;color:var(--text)}
.dp-field input,.dp-field select{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:var(--text);width:100%;cursor:pointer}
.search-btn{width:100%;height:48px;background:var(--accent);color:#fff;border:none;border-radius:var(--r-lg);font-family:'Inter',sans-serif;font-size:15px;font-weight:600;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:8px;letter-spacing:-0.2px}
.search-btn:hover{background:var(--accent-mid)}
.search-btn:active{transform:scale(0.98)}
.fare-estimate-badge{display:flex;align-items:center;gap:8px;background:var(--green-bg);border:1px solid #b7e1c7;border-radius:var(--r);padding:10px 14px;margin-bottom:14px;font-size:13px;font-weight:600;color:var(--green)}
.fare-estimate-badge .feb-label{font-size:11px;color:var(--green);font-weight:500}
.results-info{margin-bottom:16px}
.results-route{font-size:20px;font-weight:700;letter-spacing:-0.4px;margin-bottom:4px}
.results-meta{font-size:13px;color:var(--text2);font-weight:500}
.filter-row{display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.filter-pill{padding:6px 14px;border-radius:50px;border:1px solid var(--border);background:var(--white);font-family:'Inter',sans-serif;font-size:12px;font-weight:600;color:var(--text2);cursor:pointer;transition:all 0.15s}
.filter-pill.active{border-color:var(--accent);background:var(--accent-light);color:var(--accent)}
.filter-pill:hover:not(.active){border-color:var(--text3)}
.v-card{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);margin-bottom:10px;box-shadow:var(--shadow);transition:all 0.2s;overflow:hidden}
.v-card:hover{border-color:var(--accent);box-shadow:var(--shadow-md)}
.v-top{padding:16px 18px 12px;display:flex;align-items:center;gap:12px}
.v-icon{width:44px;height:44px;background:var(--bg);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.v-name-block{flex:1;min-width:0}
.v-name{font-size:14px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.v-badges{display:flex;gap:5px;margin-top:4px;flex-wrap:wrap}
.v-badge{font-size:10px;font-weight:600;padding:2px 8px;border-radius:20px}
.badge-ac{background:var(--blue-bg);color:var(--blue)}
.badge-govt{background:#FEF8E7;color:#7A5F00}
.badge-pvt{background:var(--accent-light);color:var(--accent)}
.badge-sleep{background:#F0EBF8;color:#5B3EA0}
.v-price-block{text-align:right;flex-shrink:0}
.v-price{font-size:22px;font-weight:700;color:var(--accent);letter-spacing:-0.5px;line-height:1}
.v-price-lbl{font-size:11px;color:var(--text3)}
.v-price-dist{font-size:10px;color:var(--text3);margin-top:1px}
.v-mid{padding:12px 18px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.v-time{font-size:18px;font-weight:700;color:var(--text);letter-spacing:-0.3px}
.v-city{font-size:11px;color:var(--text2);margin-top:2px;font-weight:500}
.v-dur{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;padding:0 16px}
.v-dur-text{font-size:11px;font-weight:700;color:var(--text3);letter-spacing:0.3px}
.v-line{display:flex;align-items:center;width:100%;gap:3px}
.v-line-bar{flex:1;height:1.5px;background:var(--border)}
.v-line-dot{width:5px;height:5px;background:var(--accent);border-radius:50%;flex-shrink:0}
.v-bot{padding:10px 18px;display:flex;align-items:center;justify-content:space-between}
.v-seats{font-size:12px;font-weight:600}
.seats-ok{color:var(--green)}.seats-low{color:#C07800}.seats-no{color:var(--red)}
.v-amenities{display:flex;gap:5px}
.v-amen{font-size:13px}
.book-now-btn{background:var(--accent);color:#fff;border:none;border-radius:var(--r);padding:8px 16px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s}
.book-now-btn:hover{background:var(--accent-mid)}
.book-now-btn:active{transform:scale(0.95)}
.book-now-btn:disabled{background:var(--text3);cursor:not-allowed}
.overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:500;backdrop-filter:blur(4px);align-items:center;justify-content:center}
.overlay.open{display:flex;animation:fadeBg 0.2s ease}
@keyframes fadeBg{from{opacity:0}to{opacity:1}}
.picker-sheet{background:var(--white);border-radius:var(--r-xl);width:100%;max-width:440px;padding:0;max-height:80vh;display:flex;flex-direction:column;animation:sheetPop 0.25s cubic-bezier(0.34,1.3,0.64,1);box-shadow:var(--shadow-md)}
@keyframes sheetPop{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
.picker-header{padding:20px 20px 12px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.picker-title{font-size:16px;font-weight:700;color:var(--text)}
.picker-close{width:28px;height:28px;border-radius:50%;background:var(--bg);border:none;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;color:var(--text2)}
.picker-search{margin:12px 16px;background:var(--bg);border-radius:var(--r);padding:10px 14px;display:flex;align-items:center;gap:8px;border:1px solid var(--border)}
.picker-search input{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:14px;color:var(--text);flex:1}
.city-list{overflow-y:auto;padding:8px}
.city-item{display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--r);cursor:pointer;transition:background 0.12s}
.city-item:hover{background:var(--bg)}
.city-item .ci-icon{width:36px;height:36px;background:var(--bg);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.city-item .ci-name{font-size:14px;font-weight:600;color:var(--text)}
.city-item .ci-dist{font-size:12px;color:var(--text2);margin-top:1px}
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:600;backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px}
.modal-overlay.open{display:flex;animation:fadeBg 0.2s ease}
.modal-box{background:var(--white);border-radius:var(--r-xl);width:100%;max-width:560px;max-height:90vh;overflow-y:auto;animation:sheetPop 0.25s cubic-bezier(0.34,1.3,0.64,1);box-shadow:0 20px 60px rgba(0,0,0,0.2)}
.modal-header{padding:18px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:var(--white);z-index:5;border-radius:var(--r-xl) var(--r-xl) 0 0}
.modal-title{font-size:16px;font-weight:700;color:var(--text)}
.modal-close{width:30px;height:30px;border-radius:50%;background:var(--bg);border:none;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;color:var(--text2)}
.modal-body{padding:20px}
.seat-legend{display:flex;gap:14px;margin-bottom:14px;flex-wrap:wrap}
.legend-item{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text2);font-weight:500}
.l-dot{width:18px;height:18px;border-radius:5px}
.l-avail{background:var(--bg);border:1.5px solid var(--border)}
.l-sel{background:var(--accent);border:1.5px solid var(--accent)}
.l-book{background:var(--red-bg);border:1.5px solid #F5C5C0}
.bus-shell{background:var(--bg);border-radius:var(--r-lg);padding:16px;margin-bottom:14px}
.bus-driver{display:flex;justify-content:flex-end;align-items:center;gap:6px;margin-bottom:12px;padding-bottom:12px;border-bottom:1.5px dashed var(--border)}
.bus-driver span{font-size:11px;font-weight:600;color:var(--text3);letter-spacing:0.5px}
.seat-grid{display:grid;grid-template-columns:1fr 1fr 20px 1fr 1fr;gap:6px;align-items:center}
.seat-aisle{height:30px}
.seat-el{aspect-ratio:1;border-radius:7px;background:var(--white);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--text2);cursor:pointer;transition:all 0.12s;position:relative}
.seat-el::before{content:'';position:absolute;top:0;left:15%;right:15%;height:3px;background:var(--border);border-radius:0 0 2px 2px}
.seat-el:hover:not(.booked){border-color:var(--accent)}
.seat-el.selected{background:var(--accent);border-color:var(--accent);color:#fff}
.seat-el.selected::before{background:rgba(255,255,255,0.3)}
.seat-el.booked{background:var(--red-bg);border-color:#F5C5C0;color:var(--red);cursor:not-allowed}
.seat-el.booked::before{background:#F5C5C0}
.seat-summary{background:var(--bg);border-radius:var(--r);padding:14px 16px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border)}
.ss-label{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:0.6px;margin-bottom:3px}
.ss-val{font-size:14px;font-weight:700;color:var(--text)}
.ss-val.accent{color:var(--accent);font-size:18px}
.pass-form{display:none}
.pass-form.visible{display:block}
.form-section-lbl{font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin:18px 0 10px}
.input-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.input-full{margin-bottom:10px}
.f-wrap{background:var(--bg);border-radius:var(--r);padding:12px 14px;border:1px solid var(--border)}
.f-lbl{font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px}
.f-wrap input,.f-wrap select{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;color:var(--text);width:100%}
.pay-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
.pay-opt{background:var(--bg);border-radius:var(--r);padding:12px;display:flex;align-items:center;gap:8px;cursor:pointer;border:1.5px solid transparent;transition:all 0.15s}
.pay-opt.selected{border-color:var(--accent);background:var(--accent-light)}
.pay-opt:hover:not(.selected){border-color:var(--text3)}
.pay-opt .po-icon{font-size:20px}
.pay-opt .po-name{font-size:12px;font-weight:600;color:var(--text)}
.booking-summary{background:var(--bg);border-radius:var(--r);padding:14px 16px;margin-bottom:14px;border:1px solid var(--border)}
.sum-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.sum-item .si-lbl{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:0.5px}
.sum-item .si-val{font-size:14px;font-weight:700;color:var(--text);margin-top:2px}
.sum-item .si-val.accent{color:var(--accent);font-size:18px}
.ticket-view{display:none}
.ticket-view.visible{display:block;text-align:center}
.t-success-icon{font-size:52px;margin-bottom:8px;animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)}
@keyframes popIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
.t-success-title{font-size:20px;font-weight:700;color:var(--text);margin-bottom:4px}
.t-success-sub{font-size:13px;color:var(--text2);margin-bottom:20px}
.e-ticket{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);margin-bottom:14px;text-align:left;box-shadow:var(--shadow-md);overflow:hidden}
.et-head{background:var(--text);padding:18px 20px}
.et-id{font-size:10px;color:rgba(255,255,255,0.4);font-weight:600;letter-spacing:1.5px;margin-bottom:4px}
.et-route{font-size:17px;font-weight:700;color:#fff;margin-bottom:2px}
.et-date{font-size:12px;color:rgba(255,255,255,0.5)}
.et-notch{display:flex;align-items:center}
.et-notch-circle{width:18px;height:18px;border-radius:50%;background:var(--bg);border:1px solid var(--border);flex-shrink:0}
.et-notch-line{flex:1;border-top:1.5px dashed var(--border)}
.et-body{padding:16px 20px}
.et-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:14px}
.etf-lbl{font-size:10px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:1px}
.etf-val{font-size:14px;font-weight:700;color:var(--text);margin-top:2px}
.etf-val.green{color:var(--green)}.etf-val.orange{color:var(--accent)}
.barcode-wrap{background:var(--bg);border-radius:var(--r);padding:12px;text-align:center}
.barcode-bars{display:flex;justify-content:center;gap:2px;margin-bottom:6px}
.barcode-bars span{display:block;height:32px;background:var(--text);border-radius:1px}
.barcode-num{font-size:10px;color:var(--text2);font-weight:600;letter-spacing:2px}
.my-ticket{background:var(--white);border-radius:var(--r-lg);margin-bottom:10px;border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow)}
.my-tc-head{background:var(--text);padding:12px 16px;display:flex;justify-content:space-between;align-items:center}
.my-tc-id{font-size:11px;font-weight:700;color:rgba(255,255,255,0.5);letter-spacing:1px}
.status-tag{font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px}
.st-ok{background:var(--green-bg);color:var(--green)}
.st-cancel{background:var(--red-bg);color:var(--red)}
.my-tc-body{padding:14px 16px}
.my-tc-route{font-size:16px;font-weight:700;color:var(--text);margin-bottom:4px}
.my-tc-meta{font-size:12px;color:var(--text2);line-height:1.9}
.my-tc-foot{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;border-top:1px solid var(--border)}
.my-tc-fare{font-size:16px;font-weight:700;color:var(--accent)}
.cancel-btn{font-size:12px;font-weight:600;color:var(--red);background:var(--red-bg);border:none;border-radius:20px;padding:5px 12px;cursor:pointer;transition:all 0.15s}
.cancel-btn:hover{opacity:0.8}
.help-card{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow);margin-bottom:12px}
.help-item{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer;border-bottom:1px solid var(--border);transition:background 0.12s}
.help-item:last-child{border-bottom:none}
.help-item:hover{background:var(--bg)}
.hi-icon{width:40px;height:40px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}
.hi-text{flex:1}
.hi-title{font-size:14px;font-weight:600;color:var(--text)}
.hi-sub{font-size:12px;color:var(--text2);margin-top:1px}
.hi-arrow{font-size:14px;color:var(--text3)}
.empty-state{text-align:center;padding:48px 24px}
.es-icon{font-size:44px;margin-bottom:12px}
.es-title{font-size:17px;font-weight:700;color:var(--text);margin-bottom:6px}
.es-sub{font-size:13px;color:var(--text2)}
.loading-overlay{display:none;position:fixed;inset:0;background:rgba(255,255,255,0.88);backdrop-filter:blur(8px);z-index:1000;align-items:center;justify-content:center;flex-direction:column;gap:14px}
.loading-overlay.show{display:flex}
.spinner{width:32px;height:32px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin 0.7s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-lbl{font-size:13px;font-weight:600;color:var(--text2)}
.toast-wrap{position:fixed;top:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:320px}
.toast{background:var(--text);color:#fff;padding:12px 18px;border-radius:var(--r-lg);font-size:13px;font-weight:500;box-shadow:var(--shadow-md);animation:toastPop 0.3s cubic-bezier(0.34,1.3,0.64,1)}
@keyframes toastPop{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
.toast.green{background:var(--green)}.toast.red{background:var(--red)}
.team-footer{margin-top:24px;padding:20px;background:var(--white);border-radius:var(--r-xl);border:1px solid var(--border);text-align:center}
.tf-logo{font-size:14px;font-weight:700;color:var(--accent);margin-bottom:4px}
.tf-tag{font-size:12px;color:var(--text3);margin-bottom:14px}
.tf-label{font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.tf-name{font-size:13px;color:var(--text2);font-weight:500;line-height:2}
.tf-copy{font-size:11px;color:var(--text3);margin-top:12px}
.divider{height:1px;background:var(--border);margin:20px 0}
.back-link{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:var(--text2);cursor:pointer;margin-bottom:16px;width:fit-content}
.back-link:hover{color:var(--accent)}
.bottom-nav{display:none}
.bn-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 4px;cursor:pointer;border:none;background:transparent;transition:all 0.15s}
.bn-icon{font-size:20px;line-height:1}
.bn-label{font-size:10px;font-weight:500;color:var(--text3);letter-spacing:0.2px}
.bn-item.active .bn-label{color:var(--accent)}
.mobile-menu-btn{display:none;width:36px;height:36px;border-radius:var(--r);background:var(--bg);border:none;cursor:pointer;align-items:center;justify-content:center;font-size:18px}
.sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:99}
.sidebar-overlay.open{display:block}

/* ── ADMIN STYLES ── */
.admin-login-wrap{max-width:420px;margin:60px auto;padding:0 20px}
.admin-login-card{background:var(--white);border-radius:var(--r-xl);padding:36px;border:1px solid var(--border);box-shadow:var(--shadow-md);text-align:center}
.admin-login-icon{font-size:44px;margin-bottom:14px}
.admin-login-title{font-size:22px;font-weight:700;letter-spacing:-0.5px;margin-bottom:6px}
.admin-login-sub{font-size:13px;color:var(--text2);margin-bottom:28px}
.admin-input-wrap{background:var(--bg);border:1px solid var(--border);border-radius:var(--r-lg);padding:14px 16px;margin-bottom:12px;text-align:left}
.admin-input-lbl{font-size:10px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px}
.admin-input-wrap input{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:15px;font-weight:600;color:var(--text);width:100%}
.admin-login-btn{width:100%;height:48px;background:var(--purple);color:#fff;border:none;border-radius:var(--r-lg);font-family:'Inter',sans-serif;font-size:15px;font-weight:600;cursor:pointer;transition:all 0.2s;margin-top:4px}
.admin-login-btn:hover{background:#5B21B6}
.admin-hint{font-size:11px;color:var(--text3);margin-top:14px}
.admin-tabs{display:flex;gap:4px;background:var(--bg);border-radius:var(--r-lg);padding:4px;margin-bottom:24px;border:1px solid var(--border)}
.admin-tab{flex:1;padding:8px 12px;border-radius:var(--r);border:none;background:transparent;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;color:var(--text2);cursor:pointer;transition:all 0.15s}
.admin-tab.active{background:var(--white);color:var(--purple);box-shadow:var(--shadow)}
.admin-tab:hover:not(.active){color:var(--text)}
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:24px}
.stat-card{background:var(--white);border-radius:var(--r-lg);padding:20px;border:1px solid var(--border);box-shadow:var(--shadow)}
.sc-icon{font-size:28px;margin-bottom:8px}
.sc-val{font-size:28px;font-weight:700;letter-spacing:-0.5px;color:var(--text)}
.sc-label{font-size:12px;color:var(--text2);margin-top:2px;font-weight:500}
.sc-delta{font-size:11px;font-weight:600;margin-top:6px}
.sc-delta.up{color:var(--green)}.sc-delta.dn{color:var(--red)}
.admin-table-wrap{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);overflow:hidden;box-shadow:var(--shadow)}
.admin-table-head{padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.at-title{font-size:15px;font-weight:700;color:var(--text)}
.at-count{font-size:12px;color:var(--text2)}
.admin-search{background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:8px 12px;display:flex;align-items:center;gap:6px}
.admin-search input{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:13px;color:var(--text);width:180px}
table{width:100%;border-collapse:collapse}
thead th{font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;padding:12px 16px;text-align:left;border-bottom:1px solid var(--border);background:var(--bg)}
tbody tr{border-bottom:1px solid var(--border);transition:background 0.1s}
tbody tr:last-child{border-bottom:none}
tbody tr:hover{background:var(--bg)}
tbody td{font-size:13px;color:var(--text);padding:12px 16px;font-weight:500}
.tbl-id{font-family:monospace;font-size:12px;color:var(--text2);font-weight:600}
.tbl-route{font-weight:700;color:var(--text)}
.tbl-fare{font-weight:700;color:var(--accent)}
.tbl-action-btn{font-size:11px;font-weight:600;padding:4px 10px;border-radius:20px;border:none;cursor:pointer;transition:all 0.12s}
.tbl-cancel{background:var(--red-bg);color:var(--red)}
.tbl-cancel:hover{opacity:0.8}
.notif-item{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);transition:background 0.1s}
.notif-item:hover{background:var(--bg)}
.notif-item.unread{background:var(--purple-bg)}
.notif-icon{width:38px;height:38px;border-radius:50%;background:var(--purple-bg);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.notif-title{font-size:13px;font-weight:700;color:var(--text)}
.notif-sub{font-size:12px;color:var(--text2);margin-top:2px;line-height:1.5}
.notif-time{font-size:10px;color:var(--text3);margin-top:4px;font-weight:600}
.price-config-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px}
.price-config-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px;box-shadow:var(--shadow)}
.pc-head{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.pc-icon{font-size:22px}
.pc-name{font-size:14px;font-weight:700;color:var(--text)}
.pc-desc{font-size:12px;color:var(--text2)}
.rate-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.rate-label{font-size:12px;font-weight:600;color:var(--text2)}
.rate-input-wrap{display:flex;align-items:center;gap:4px;background:var(--bg);border:1px solid var(--border);border-radius:var(--r);padding:6px 10px}
.rate-prefix{font-size:12px;font-weight:700;color:var(--text3)}
.rate-input-wrap input{border:none;outline:none;background:transparent;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;color:var(--text);width:60px;text-align:right}
.rate-suffix{font-size:11px;color:var(--text3)}
.rate-save-btn{width:100%;padding:10px;border-radius:var(--r);background:var(--purple);color:#fff;border:none;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;transition:all 0.15s}
.rate-save-btn:hover{background:#5B21B6}
.email-config-card{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);padding:24px;box-shadow:var(--shadow);margin-bottom:14px}
.ec-title{font-size:15px;font-weight:700;margin-bottom:4px}
.ec-sub{font-size:12px;color:var(--text2);margin-bottom:18px;line-height:1.5}
.ec-status{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:8px 14px;border-radius:var(--r);margin-bottom:16px}
.ec-status.configured{background:var(--green-bg);color:var(--green)}
.ec-status.not-configured{background:var(--red-bg);color:var(--red)}
.ec-grid{display:grid;gap:10px;margin-bottom:14px}
.ec-save-btn{background:var(--purple);color:#fff;border:none;border-radius:var(--r-lg);padding:11px 20px;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.15s;margin-right:8px}
.ec-save-btn:hover{background:#5B21B6}
.ec-test-btn{background:var(--bg);color:var(--text);border:1px solid var(--border);border-radius:var(--r-lg);padding:11px 20px;font-family:'Inter',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.15s}
.ec-test-btn:hover{background:var(--border)}
.badge-unread{display:inline-flex;align-items:center;justify-content:center;background:var(--purple);color:#fff;font-size:10px;font-weight:700;min-width:18px;height:18px;border-radius:50%;padding:0 4px}
.admin-header-strip{background:linear-gradient(135deg,#4C1D95,#6D28D9);border-radius:var(--r-xl);padding:20px 24px;color:#fff;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between}
.ahs-title{font-size:18px;font-weight:700}
.ahs-sub{font-size:12px;opacity:0.7;margin-top:3px}
.ahs-logout{background:rgba(255,255,255,0.15);border:none;color:#fff;border-radius:var(--r);padding:8px 14px;font-family:'Inter',sans-serif;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s}
.ahs-logout:hover{background:rgba(255,255,255,0.25)}
.revenue-bar-wrap{background:var(--white);border-radius:var(--r-lg);border:1px solid var(--border);padding:18px;box-shadow:var(--shadow);margin-bottom:20px}
.revenue-bar-title{font-size:14px;font-weight:700;margin-bottom:14px}
.rev-bars{display:flex;align-items:flex-end;gap:8px;height:80px}
.rev-bar-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.rev-bar{background:var(--purple-bg);border-radius:4px 4px 0 0;width:100%;transition:height 0.3s;min-height:4px;position:relative}
.rev-bar:hover{background:#DDD6FE}
.rev-bar-lbl{font-size:10px;font-weight:600;color:var(--text3)}
.rev-bar-val{font-size:10px;font-weight:700;color:var(--purple);position:absolute;top:-16px;left:50%;transform:translateX(-50%);white-space:nowrap}
.export-btn{background:var(--green-bg);color:var(--green);border:1px solid #b7e1c7;border-radius:var(--r);padding:7px 14px;font-family:'Inter',sans-serif;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s}
.export-btn:hover{opacity:0.85}

/* RESULTS layout on desktop */
@media(min-width:769px){
  .results-main{display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:start}
  .results-filter-panel{background:var(--white);border-radius:var(--r-xl);padding:20px;border:1px solid var(--border);box-shadow:var(--shadow);position:sticky;top:84px}
  .results-filter-panel .section-title{margin-bottom:12px;font-size:15px}
  .filter-row{flex-direction:column;gap:6px}
  .filter-pill{width:100%;justify-content:flex-start}
}

@media(max-width:768px){
  .sidebar{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}
  .main-content{margin-left:0}
  .topbar{padding:12px 16px}.page{padding:16px}
  .hero-wrap{padding:22px 18px;margin-bottom:18px}
  .hero-title{font-size:22px}.hero-bus{display:none}
  .hero-stats{gap:18px}.hero-stat .val{font-size:18px}
  .quick-grid{grid-template-columns:1fr 1fr}
  .book-layout{grid-template-columns:1fr}
  .book-form-panel{position:static;border-radius:var(--r-xl)}
  .routes-grid{grid-template-columns:1fr}.cities-grid{grid-template-columns:1fr 1fr}
  .toast-wrap{top:auto;bottom:80px;right:12px;left:12px;max-width:100%}.toast{text-align:center}
  .bottom-nav{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:200;background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-top:1px solid var(--border);padding:8px 0 env(safe-area-inset-bottom,0px)}
  body{padding-bottom:70px}
  .mobile-menu-btn{display:flex}
  .modal-overlay{padding:0;align-items:flex-end}
  .modal-box{max-width:100%;border-radius:var(--r-xl) var(--r-xl) 0 0}
  .modal-header{border-radius:var(--r-xl) var(--r-xl) 0 0}
  .picker-sheet{border-radius:var(--r-xl) var(--r-xl) 0 0;max-width:100%}
  .overlay.open{align-items:flex-end}
  .stat-grid{grid-template-columns:1fr 1fr}
  .price-config-grid{grid-template-columns:1fr}
  table{font-size:12px}
  thead th,tbody td{padding:8px 10px}
}
</style>
</head>
<body>

<div class="loading-overlay" id="loadingOverlay"><div class="spinner"></div><div class="loading-lbl" id="loadingLbl">Finding rides…</div></div>
<div class="toast-wrap" id="toastWrap"></div>
<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>

<div class="app-shell">
<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo">
    <div class="logo-badge">🛺</div>
    <div><div class="logo-text">BrajRide</div><div class="logo-sub">Mathura &amp; Nearby Villages</div></div>
  </div>
  <nav class="sidebar-nav">
    <button class="nav-item active" onclick="goScreen('home')" data-screen="home"><span class="ni-icon">🏠</span><span class="ni-label">Home</span></button>
    <button class="nav-item" onclick="goScreen('book')" data-screen="book"><span class="ni-icon">🔍</span><span class="ni-label">Book a Ride</span></button>
    <button class="nav-item" onclick="goScreen('tickets')" data-screen="tickets"><span class="ni-icon">🎫</span><span class="ni-label">My Tickets</span></button>
    <button class="nav-item" onclick="goScreen('help')" data-screen="help"><span class="ni-icon">❓</span><span class="ni-label">Help &amp; Support</span></button>
    <button class="nav-item admin-nav" onclick="goAdminOrLogin()" data-screen="admin" id="adminNavBtn">
      <span class="ni-icon">⚙️</span><span class="ni-label">Admin Panel</span>
      <span class="ni-badge badge-unread" id="adminNotifBadge" style="display:none">0</span>
    </button>
  </nav>
  <div class="sidebar-footer">
    <div class="sidebar-footer-label">Built by</div>
    <div class="sidebar-footer-name">Anurag Raj Pandey<br>Astha Parua<br>Ayush Upadhyay</div>
  </div>
</aside>

<div class="main-content">
  <div class="topbar">
    <div style="display:flex;align-items:center;gap:10px">
      <button class="mobile-menu-btn" id="menuBtn" onclick="toggleSidebar()">☰</button>
      <div><div class="topbar-title" id="topbarTitle">Home</div><div class="topbar-sub" id="topbarSub">Welcome back, यात्री!</div></div>
    </div>
    <div class="topbar-right">
      <button class="topbar-btn" onclick="goScreen('tickets')">🎫 Tickets</button>
      <button class="topbar-btn primary" onclick="goScreen('book')">+ Book Ride</button>
    </div>
  </div>

  <!-- HOME -->
  <div class="screen active page" id="screen-home">
    <div class="hero-wrap">
      <div class="hero-grid">
        <div>
          <div class="hero-greeting">नमस्ते, यात्री!</div>
          <div class="hero-title">Travel around<br><span>Braj</span> easily</div>
          <div class="hero-stats">
            <div class="hero-stat"><div class="val">120+</div><div class="lbl">Routes</div></div>
            <div class="hero-stat"><div class="val">850+</div><div class="lbl">Daily Trips</div></div>
            <div class="hero-stat"><div class="val">₹15</div><div class="lbl">Starts from</div></div>
          </div>
        </div>
        <div class="hero-bus">🚌</div>
      </div>
    </div>
    <div class="section-title">Quick Actions</div>
    <div class="quick-grid" style="margin-bottom:24px">
      <button class="quick-card accent" onclick="goScreen('book')"><span class="qc-icon">🔍</span><div class="qc-title">Book Ticket</div><div class="qc-sub">Search &amp; book a ride</div></button>
      <button class="quick-card" onclick="goScreen('tickets')"><span class="qc-icon">🎫</span><div class="qc-title">My Tickets</div><div class="qc-sub">View your bookings</div></button>
      <button class="quick-card" onclick="quickSearch('Mathura','Vrindavan')"><span class="qc-icon">🛕</span><div class="qc-title">Vrindavan</div><div class="qc-sub">From Mathura · ₹<span id="qsVrindavan">—</span></div></button>
      <button class="quick-card" onclick="quickSearch('Mathura','Govardhan')"><span class="qc-icon">⛰️</span><div class="qc-title">Govardhan</div><div class="qc-sub">From Mathura · ₹<span id="qsGovardhan">—</span></div></button>
    </div>
    <div class="section-title">Popular Routes</div>
    <div class="routes-grid" id="routesGrid"></div>
    <div class="section-title">All Areas</div>
    <div class="cities-grid" id="citiesGrid"></div>
    <div class="team-footer">
      <div class="tf-logo">🛺 BrajRide</div>
      <div class="tf-tag">Connecting Braj, one ride at a time</div>
      <div class="tf-label">Team</div>
      <div class="tf-name">Anurag Raj Pandey · Astha Parua · Ayush Upadhyay</div>
      <div class="tf-copy">© 2026 BrajRide · For Mathura &amp; Nearby Villages</div>
    </div>
  </div>

  <!-- BOOK -->
  <div class="screen page" id="screen-book">
    <div class="book-layout">
      <div class="book-form-panel">
        <div class="bp-title">Book a Ride</div>
        <div class="type-row" id="typeRow">
          <button class="type-btn selected" onclick="selType(this,'bus')"><span class="tb-icon">🚌</span><span class="tb-lbl">Bus</span></button>
          <button class="type-btn" onclick="selType(this,'mini')"><span class="tb-icon">🚐</span><span class="tb-lbl">Mini Bus</span></button>
          <button class="type-btn" onclick="selType(this,'auto')"><span class="tb-icon">🛺</span><span class="tb-lbl">Auto/Jeep</span></button>
        </div>
        <div style="position:relative">
          <div class="loc-group">
            <div class="loc-row" onclick="openPicker('from')">
              <div class="loc-dot dot-from">📍</div>
              <div class="loc-texts"><div class="loc-lbl">From</div><div class="loc-val ph" id="fromDisplay">Select starting point</div></div>
            </div>
            <div class="loc-divider"></div>
            <div class="loc-row" onclick="openPicker('to')">
              <div class="loc-dot dot-to">🏁</div>
              <div class="loc-texts"><div class="loc-lbl">To</div><div class="loc-val ph" id="toDisplay">Select destination</div></div>
            </div>
          </div>
          <button class="swap-btn" onclick="swapCities()">⇅</button>
        </div>
        <div id="fareEstimateStrip" style="display:none" class="fare-estimate-badge">
          <span style="font-size:20px">💰</span>
          <div><div class="feb-label">Estimated fare range</div><div id="fareEstimateText" style="font-size:15px;font-weight:700">₹— – ₹—</div></div>
        </div>
        <div class="dp-row">
          <div class="dp-field"><div class="dp-lbl">📅 Date</div><div class="dp-val"><input type="date" id="dateInput"></div></div>
          <div class="dp-field"><div class="dp-lbl">👥 Passengers</div><div class="dp-val"><select id="passInput"><option value="1">1 Person</option><option value="2">2 Persons</option><option value="3">3 Persons</option><option value="4">4 Persons</option><option value="5">5 Persons</option></select></div></div>
        </div>
        <button class="search-btn" onclick="doSearch()"><span style="font-size:18px">🔍</span> Search Rides</button>
      </div>
      <div id="bookRightPanel">
        <div class="section-title">Popular Routes</div>
        <div class="routes-grid" id="bookRoutesGrid" style="margin-bottom:20px"></div>
        <div class="section-title">Quick Destinations</div>
        <div class="cities-grid" id="bookCitiesGrid"></div>
      </div>
    </div>
  </div>

  <!-- RESULTS -->
  <div class="screen page" id="screen-results">
    <div class="back-link" onclick="goScreen('book')">← Back to search</div>
    <div class="results-main">
      <div class="results-filter-panel">
        <div class="section-title">Filter Results</div>
        <div class="filter-row" id="filterRow">
          <button class="filter-pill active" onclick="applyFilter(this,'all')">All Vehicles</button>
          <button class="filter-pill" onclick="applyFilter(this,'bus')">🚌 Bus</button>
          <button class="filter-pill" onclick="applyFilter(this,'mini')">🚐 Mini Bus</button>
          <button class="filter-pill" onclick="applyFilter(this,'auto')">🛺 Auto/Jeep</button>
          <button class="filter-pill" onclick="applyFilter(this,'low')">💰 Cheapest First</button>
          <button class="filter-pill" onclick="applyFilter(this,'ac')">❄️ AC Only</button>
        </div>
        <div style="background:var(--bg);border-radius:var(--r);padding:12px;border:1px solid var(--border);margin-top:12px">
          <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">Route Info</div>
          <div id="routeInfoStrip" style="font-size:13px;color:var(--text2);line-height:1.7"></div>
        </div>
      </div>
      <div>
        <div class="results-info">
          <div class="results-route" id="rRoute">Mathura → Vrindavan</div>
          <div class="results-meta" id="rMeta">Loading…</div>
        </div>
        <div id="resultsList"></div>
      </div>
    </div>
  </div>

  <!-- TICKETS -->
  <div class="screen page" id="screen-tickets">
    <div class="section-title">My Tickets</div>
    <div id="myTicketsList"></div>
  </div>

  <!-- HELP -->
  <div class="screen page" id="screen-help">
    <div class="section-title">Help &amp; Support</div>
    <div class="help-card">
      <div class="help-item" onclick="toast('📞 Calling 1800-000-0000…')"><div class="hi-icon" style="background:var(--green-bg)">📞</div><div class="hi-text"><div class="hi-title">Call Helpline</div><div class="hi-sub">1800-000-0000 · Free · Mon–Sun</div></div><span class="hi-arrow">›</span></div>
      <div class="help-item" onclick="toast('📱 Opening WhatsApp…')"><div class="hi-icon" style="background:var(--green-bg)">💬</div><div class="hi-text"><div class="hi-title">WhatsApp Support</div><div class="hi-sub">Chat with us anytime</div></div><span class="hi-arrow">›</span></div>
      <div class="help-item" onclick="toast('📧 Opening email…')"><div class="hi-icon" style="background:var(--blue-bg)">📧</div><div class="hi-text"><div class="hi-title">Email Us</div><div class="hi-sub">help@brajride.in</div></div><span class="hi-arrow">›</span></div>
    </div>
    <div class="section-title" style="margin-top:20px">FAQs</div>
    <div class="help-card">
      <div class="help-item" onclick="toast('Show e-ticket to conductor and board!')"><div class="hi-icon" style="background:var(--accent-light)">❓</div><div class="hi-text"><div class="hi-title">How do I board with e-ticket?</div><div class="hi-sub">Tap to know more</div></div><span class="hi-arrow">›</span></div>
      <div class="help-item" onclick="toast('Refund in 3–5 working days after cancellation')"><div class="hi-icon" style="background:var(--accent-light)">💰</div><div class="hi-text"><div class="hi-title">When will I get refund?</div><div class="hi-sub">Cancellation &amp; refund policy</div></div><span class="hi-arrow">›</span></div>
      <div class="help-item" onclick="toast('Go to My Tickets → Cancel Ticket')"><div class="hi-icon" style="background:var(--red-bg)">❌</div><div class="hi-text"><div class="hi-title">How to cancel a ticket?</div><div class="hi-sub">Steps to cancel booking</div></div><span class="hi-arrow">›</span></div>
    </div>
    <div class="team-footer">
      <div class="tf-logo">🛺 BrajRide</div>
      <div class="tf-tag">Connecting Braj, one ride at a time</div>
      <div class="tf-label">Team Members</div>
      <div class="tf-name">Anurag Raj Pandey · Astha Parua · Ayush Upadhyay</div>
      <div class="tf-copy">Version 2.0 · © 2026 BrajRide</div>
    </div>
  </div>

  <!-- ADMIN LOGIN -->
  <div class="screen page" id="screen-admin-login">
    <div class="admin-login-wrap">
      <div class="admin-login-card">
        <div class="admin-login-icon">⚙️</div>
        <div class="admin-login-title">Admin Panel</div>
        <div class="admin-login-sub">Enter your admin credentials to continue</div>
        <div class="admin-input-wrap"><div class="admin-input-lbl">Username</div><input type="text" id="adminUser" placeholder="admin" value="admin"></div>
        <div class="admin-input-wrap"><div class="admin-input-lbl">Password</div><input type="password" id="adminPwd" placeholder="••••••••" onkeydown="if(event.key==='Enter')adminDoLogin()"></div>
        <button class="admin-login-btn" onclick="adminDoLogin()">🔐 Login to Admin</button>
        <div class="admin-hint">Default: admin / admin123<br>Change password inside Admin → Settings</div>
      </div>
    </div>
  </div>

  <!-- ADMIN DASHBOARD -->
  <div class="screen page" id="screen-admin">
    <div class="admin-header-strip">
      <div><div class="ahs-title">⚙️ BrajRide Admin</div><div class="ahs-sub" id="adminWelcome">Welcome, Administrator</div></div>
      <button class="ahs-logout" onclick="adminLogout()">Logout →</button>
    </div>
    <div class="admin-tabs" id="adminTabs">
      <button class="admin-tab active" onclick="showAdminTab('dashboard',this)">📊 Dashboard</button>
      <button class="admin-tab" onclick="showAdminTab('bookings',this)">🎫 Bookings</button>
      <button class="admin-tab" onclick="showAdminTab('notifications',this)">🔔 Alerts <span id="notifTabBadge"></span></button>
      <button class="admin-tab" onclick="showAdminTab('pricing',this)">💰 Pricing</button>
      <button class="admin-tab" onclick="showAdminTab('email',this)">📧 Email Setup</button>
    </div>
    <div id="adminContent"></div>
  </div>

</div><!-- /main-content -->
</div><!-- /app-shell -->

<!-- BOTTOM NAV -->
<nav class="bottom-nav" id="bottomNav">
  <button class="bn-item active" onclick="goScreen('home')" data-screen="home"><span class="bn-icon">🏠</span><span class="bn-label">Home</span></button>
  <button class="bn-item" onclick="goScreen('book')" data-screen="book"><span class="bn-icon">🔍</span><span class="bn-label">Book</span></button>
  <button class="bn-item" onclick="goScreen('tickets')" data-screen="tickets"><span class="bn-icon">🎫</span><span class="bn-label">Tickets</span></button>
  <button class="bn-item" onclick="goScreen('help')" data-screen="help"><span class="bn-icon">❓</span><span class="bn-label">Help</span></button>
</nav>

<!-- CITY PICKER -->
<div class="overlay" id="cityOverlay" onclick="closePicker(event)">
  <div class="picker-sheet">
    <div class="picker-header"><div class="picker-title" id="pickerTitle">Select Location</div><button class="picker-close" onclick="closePicker()">✕</button></div>
    <div class="picker-search"><span style="font-size:14px">🔍</span><input type="text" id="citySearch" placeholder="Search village or city…" oninput="filterCities(this.value)"></div>
    <div class="city-list" id="cityList"></div>
  </div>
</div>

<!-- BOOKING MODAL -->
<div class="modal-overlay" id="bookModal">
  <div class="modal-box">
    <div class="modal-header"><div class="modal-title" id="modalTitle">Choose Seats</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>

<script>
// ═══════════════════════════════════════════
// ── EMAIL CONFIG (Configure in Admin Panel) ──
// ═══════════════════════════════════════════
let EMAIL_CFG = JSON.parse(localStorage.getItem('brajride_email_cfg') || 'null') || {
  serviceId: '',
  userTemplateId: '',
  adminTemplateId: '',
  publicKey: '',
  adminEmail: 'admin@brajride.in',
  enabled: false
};

// ═══════════════════════════════════════════
// ── DISTANCE MATRIX (km from Mathura) ──────
// ═══════════════════════════════════════════
const CITY_DIST_FROM_MATHURA = {
  'Mathura': 0, 'Vrindavan': 12, 'Govardhan': 26,
  'Barsana': 42, 'Nandgaon': 47, 'Radha Kund': 26,
  'Kosi Kalan': 38, 'Chhata': 32, 'Mant': 22,
  'Farah': 18, 'Baldeo': 28, 'Mahaban': 30,
  'Sonkh': 20, 'Aring': 35, 'Shergarh': 40, 'Agra': 58
};

// Approximate (lat, lng) for better inter-city distances
const CITY_COORDS = {
  'Mathura':   [27.4924, 77.6737],
  'Vrindavan': [27.5800, 77.6800],
  'Govardhan': [27.4978, 77.4602],
  'Barsana':   [27.6530, 77.3810],
  'Nandgaon':  [27.7095, 77.3672],
  'Radha Kund':[27.5022, 77.4641],
  'Kosi Kalan':[27.7952, 77.4409],
  'Chhata':    [27.7138, 77.5025],
  'Mant':      [27.3825, 77.5490],
  'Farah':     [27.3630, 77.7524],
  'Baldeo':    [27.3980, 77.8735],
  'Mahaban':   [27.3511, 77.7612],
  'Sonkh':     [27.5541, 77.4932],
  'Aring':     [27.4223, 77.4041],
  'Shergarh':  [27.4640, 77.3402],
  'Agra':      [27.1767, 78.0081],
};

function haversine(c1, c2) {
  const R = 6371, [lat1,lon1] = c1, [lat2,lon2] = c2;
  const dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getDistance(from, to) {
  if(from === to) return 0;
  if(CITY_COORDS[from] && CITY_COORDS[to]) {
    return Math.round(haversine(CITY_COORDS[from], CITY_COORDS[to]) * 1.25); // road factor
  }
  const dFrom = CITY_DIST_FROM_MATHURA[from] || 30;
  const dTo   = CITY_DIST_FROM_MATHURA[to]   || 30;
  return Math.round(Math.abs(dFrom - dTo) * 1.4 + Math.min(dFrom, dTo) * 0.3);
}

// ═══════════════════════════════════════════
// ── DYNAMIC RATE CARDS ──────────────────────
// ═══════════════════════════════════════════
const DEFAULT_RATES = {
  bus_nonac:  { perKm: 1.8,  minFare: 20,  label: 'Bus (Non-AC)',  icon:'🚌', desc:'Govt & private buses' },
  bus_ac:     { perKm: 2.8,  minFare: 40,  label: 'Bus (AC)',      icon:'🚌❄️',desc:'AC buses' },
  mini_nonac: { perKm: 2.2,  minFare: 25,  label: 'Mini Bus',      icon:'🚐', desc:'Mini bus / shared van' },
  auto_jeep:  { perKm: 3.5,  minFare: 25,  label: 'Auto / Jeep',   icon:'🛺', desc:'Auto-rickshaw or jeep' },
  sleeper:    { perKm: 4.5,  minFare: 200, label: 'Sleeper Bus',    icon:'🛌', desc:'Overnight sleeper coach' },
};

function getRates() {
  const saved = localStorage.getItem('brajride_rates');
  if(saved) {
    const merged = {};
    const parsed = JSON.parse(saved);
    for(const k in DEFAULT_RATES) {
      merged[k] = { ...DEFAULT_RATES[k], ...(parsed[k]||{}) };
    }
    return merged;
  }
  return { ...DEFAULT_RATES };
}

function calcFare(from, to, rateKey) {
  const dist = getDistance(from, to);
  const rates = getRates();
  const r = rates[rateKey] || rates.bus_nonac;
  const raw = dist * r.perKm;
  return { fare: Math.max(Math.round(raw / 5) * 5, r.minFare), dist };
}

function getFareRange(from, to) {
  const rates = getRates();
  const fares = Object.keys(rates).map(k => calcFare(from, to, k).fare);
  return { min: Math.min(...fares), max: Math.max(...fares) };
}

// ═══════════════════════════════════════════
// ── DATA ────────────────────────────────────
// ═══════════════════════════════════════════
const CITIES = [
  {name:"Mathura",    emoji:"🏙️",dist:"Hub city"},
  {name:"Vrindavan",  emoji:"🛕", dist:"12 km from Mathura"},
  {name:"Govardhan",  emoji:"⛰️", dist:"26 km from Mathura"},
  {name:"Barsana",    emoji:"🌸", dist:"42 km from Mathura"},
  {name:"Nandgaon",   emoji:"🛕", dist:"47 km from Mathura"},
  {name:"Radha Kund", emoji:"🪷", dist:"26 km from Mathura"},
  {name:"Kosi Kalan", emoji:"🏘️", dist:"38 km from Mathura"},
  {name:"Chhata",     emoji:"🌾", dist:"32 km from Mathura"},
  {name:"Mant",       emoji:"🌿", dist:"22 km from Mathura"},
  {name:"Farah",      emoji:"🌻", dist:"18 km from Mathura"},
  {name:"Baldeo",     emoji:"🐄", dist:"28 km from Mathura"},
  {name:"Mahaban",    emoji:"🌳", dist:"30 km from Mathura"},
  {name:"Sonkh",      emoji:"🏡", dist:"20 km from Mathura"},
  {name:"Aring",      emoji:"🛤️", dist:"35 km from Mathura"},
  {name:"Shergarh",   emoji:"🏰", dist:"40 km from Mathura"},
  {name:"Agra",       emoji:"🕌", dist:"58 km from Mathura"},
];

const VEHICLE_TEMPLATES = [
  {id:"V1",name:"Mathura Roadways Bus",   typeKey:"bus_nonac", icon:"🚌",ac:false,govt:true, dep:"06:00",arr:null,amenities:["🧳","💡"]},
  {id:"V2",name:"Shree Krishna AC Bus",   typeKey:"bus_ac",    icon:"🚌",ac:true, govt:false,dep:"07:30",arr:null,amenities:["❄️","🔌","📺"]},
  {id:"V3",name:"Braj Express Mini Bus",  typeKey:"mini_nonac",icon:"🚐",ac:false,govt:false,dep:"08:00",arr:null,amenities:["🎵","⚡"]},
  {id:"V4",name:"Yamuna Parivahan Bus",   typeKey:"bus_nonac", icon:"🚌",ac:false,govt:true, dep:"10:00",arr:null,amenities:["🧳","🏛️"]},
  {id:"V5",name:"Village Auto / Jeep",    typeKey:"auto_jeep", icon:"🛺",ac:false,govt:false,dep:"Any",  arr:"—",  amenities:["⏰","🚪"]},
  {id:"V6",name:"Radha Rani Sleeper Bus", typeKey:"sleeper",   icon:"🚌",ac:true, govt:false,dep:"22:00",arr:null,amenities:["🛏️","❄️","🔋"]},
  {id:"V7",name:"Braj Bhoomi Shuttle",    typeKey:"mini_nonac",icon:"🚐",ac:false,govt:false,dep:"14:00",arr:null,amenities:["🎵","💧"]},
  {id:"V8",name:"Govardhan Express Bus",  typeKey:"bus_nonac", icon:"🚌",ac:false,govt:true, dep:"09:00",arr:null,amenities:["🧳"]},
];

function estimateDuration(dist) {
  // avg 40km/h for local routes
  const hrs = dist / 40;
  if(hrs < 0.5) return Math.round(hrs * 60) + ' min';
  const h = Math.floor(hrs), m = Math.round((hrs - h) * 60 / 5) * 5;
  if(h === 0) return m + ' min';
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function estimateArr(dep, dist) {
  if(dep === 'Any') return '—';
  const [hh, mm] = dep.split(':').map(Number);
  const mins = hh * 60 + mm + Math.round(dist / 40 * 60);
  const ah = Math.floor(mins / 60) % 24, am = mins % 60;
  return String(ah).padStart(2,'0') + ':' + String(am).padStart(2,'0');
}

// ═══════════════════════════════════════════
// ── STATE ───────────────────────────────────
// ═══════════════════════════════════════════
let S = {
  from:'', to:'',
  date: new Date().toISOString().split('T')[0],
  pass: 1, travelType: 'bus',
  pickerTarget: 'from',
  results: [],
  selectedVehicle: null,
  selectedSeats: [],
  tickets: JSON.parse(localStorage.getItem('brajride_v3') || '[]'),
  adminLoggedIn: false,
  adminTab: 'dashboard',
  notifications: JSON.parse(localStorage.getItem('brajride_notifs') || '[]'),
  unreadNotifs: 0,
};

function saveTickets() { localStorage.setItem('brajride_v3', JSON.stringify(S.tickets)); }
function saveNotifs()  { localStorage.setItem('brajride_notifs', JSON.stringify(S.notifications)); }

// ═══════════════════════════════════════════
// ── INIT ────────────────────────────────────
// ═══════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dateInput').value = S.date;
  document.getElementById('dateInput').min = S.date;
  document.getElementById('dateInput').addEventListener('change', e => S.date = e.target.value);
  document.getElementById('passInput').addEventListener('change', e => S.pass = parseInt(e.target.value));
  renderRoutes(); renderCitiesGrid(); updateQuickPrices(); updateNotifBadge();
  if(EMAIL_CFG.enabled && EMAIL_CFG.publicKey) emailjs.init(EMAIL_CFG.publicKey);
});

// ═══════════════════════════════════════════
// ── NAVIGATION ──────────────────────────────
// ═══════════════════════════════════════════
const TITLES = {
  home:          {title:'Home', sub:'Welcome back, यात्री!'},
  book:          {title:'Book a Ride', sub:'Find the best transport for your journey'},
  results:       {title:'Search Results', sub:'Choose from available vehicles'},
  tickets:       {title:'My Tickets', sub:'Your booking history'},
  help:          {title:'Help & Support', sub:"We're here to assist you"},
  'admin-login': {title:'Admin Login', sub:'Restricted area'},
  admin:         {title:'Admin Panel', sub:'BrajRide Operations Dashboard'},
};

function goScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  document.querySelectorAll('.nav-item[data-screen]').forEach(n => n.classList.toggle('active', n.dataset.screen === (name==='admin'?'admin':name)));
  document.querySelectorAll('.bn-item[data-screen]').forEach(n => n.classList.toggle('active', n.dataset.screen === name));
  const t = TITLES[name] || {title: name, sub: ''};
  document.getElementById('topbarTitle').textContent = t.title;
  document.getElementById('topbarSub').textContent   = t.sub;
  if(name === 'tickets') renderMyTickets();
  if(name === 'book' || name === 'home') { renderRoutes(); updateQuickPrices(); }
  window.scrollTo(0, 0); closeSidebar();
}

function goAdminOrLogin() {
  if(S.adminLoggedIn) { goScreen('admin'); renderAdminTab(S.adminTab); }
  else goScreen('admin-login');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ═══════════════════════════════════════════
// ── DYNAMIC QUICK PRICES ────────────────────
// ═══════════════════════════════════════════
function updateQuickPrices() {
  const vr = calcFare('Mathura','Vrindavan','bus_nonac').fare;
  const gv = calcFare('Mathura','Govardhan','bus_nonac').fare;
  const el1 = document.getElementById('qsVrindavan');
  const el2 = document.getElementById('qsGovardhan');
  if(el1) el1.textContent = vr;
  if(el2) el2.textContent = gv;
}

// ═══════════════════════════════════════════
// ── HOME RENDERING ──────────────────────────
// ═══════════════════════════════════════════
const POPULAR_ROUTES = [
  {from:'Mathura',to:'Vrindavan'},
  {from:'Mathura',to:'Govardhan'},
  {from:'Mathura',to:'Barsana'},
  {from:'Mathura',to:'Farah'},
  {from:'Mathura',to:'Baldeo'},
  {from:'Mathura',to:'Agra'},
  {from:'Vrindavan',to:'Barsana'},
  {from:'Kosi Kalan',to:'Mathura'},
];

function renderRoutes() {
  const html = POPULAR_ROUTES.map(r => {
    const dist = getDistance(r.from, r.to);
    const minFare = calcFare(r.from, r.to, 'bus_nonac').fare;
    const dur = estimateDuration(dist);
    const icon = dist < 20 ? '🛺' : dist < 40 ? '🚐' : '🚌';
    return `<div class="route-card" onclick="quickSearch('${r.from}','${r.to}')">
      <span class="rc-icon">${icon}</span>
      <div class="rc-info">
        <div class="rc-name">${r.from} → ${r.to}</div>
        <div class="rc-meta">${dur} · ${dist} km</div>
      </div>
      <div>
        <div class="rc-price">₹${minFare}</div>
        <div class="rc-price-label">onwards</div>
      </div>
    </div>`;
  }).join('');
  ['routesGrid','bookRoutesGrid'].forEach(id => { const el=document.getElementById(id); if(el) el.innerHTML=html; });
}

function renderCitiesGrid() {
  const html = CITIES.map(c => {
    const fare = c.name==='Mathura' ? '—' : '₹'+calcFare('Mathura',c.name,'bus_nonac').fare;
    return `<div class="city-card" onclick="quickSearch('Mathura','${c.name}')">
      <span class="cc-icon">${c.emoji}</span>
      <div><div class="cc-name">${c.name}</div><div class="cc-dist">${c.name==='Mathura'?'Hub city':fare+' from Mathura'}</div></div>
    </div>`;
  }).join('');
  ['citiesGrid','bookCitiesGrid'].forEach(id => { const el=document.getElementById(id); if(el) el.innerHTML=html; });
}

function quickSearch(from, to) {
  S.from = from; S.to = to;
  updateLocDisplays(); updateFareEstimate();
  goScreen('book');
  setTimeout(doSearch, 350);
}

// ═══════════════════════════════════════════
// ── BOOK SCREEN ─────────────────────────────
// ═══════════════════════════════════════════
function selType(btn, type) {
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected'); S.travelType = type;
}

function updateLocDisplays() {
  const fd = document.getElementById('fromDisplay'), td = document.getElementById('toDisplay');
  fd.textContent = S.from || 'Select starting point'; fd.classList.toggle('ph', !S.from);
  td.textContent = S.to   || 'Select destination';    td.classList.toggle('ph', !S.to);
  updateFareEstimate();
}

function updateFareEstimate() {
  const strip = document.getElementById('fareEstimateStrip');
  const txt   = document.getElementById('fareEstimateText');
  if(!strip || !txt) return;
  if(S.from && S.to && S.from !== S.to) {
    const {min, max} = getFareRange(S.from, S.to);
    txt.textContent = `₹${min} – ₹${max}`;
    strip.style.display = 'flex';
  } else {
    strip.style.display = 'none';
  }
}

function swapCities() {
  [S.from, S.to] = [S.to, S.from];
  updateLocDisplays();
}

// ═══════════════════════════════════════════
// ── CITY PICKER ─────────────────────────────
// ═══════════════════════════════════════════
function openPicker(target) {
  S.pickerTarget = target;
  document.getElementById('pickerTitle').textContent = target==='from' ? '📍 Select Starting Point' : '🏁 Select Destination';
  document.getElementById('citySearch').value = '';
  renderPickerList(CITIES);
  document.getElementById('cityOverlay').classList.add('open');
}

function renderPickerList(cities) {
  document.getElementById('cityList').innerHTML = cities.map(c => `
    <div class="city-item" onclick="selectCity('${c.name}')">
      <div class="ci-icon">${c.emoji}</div>
      <div><div class="ci-name">${c.name}</div><div class="ci-dist">${c.dist}</div></div>
    </div>`).join('');
}

function filterCities(q) {
  renderPickerList(CITIES.filter(c => c.name.toLowerCase().includes(q.toLowerCase())));
}

function selectCity(name) {
  if(S.pickerTarget === 'from') S.from = name; else S.to = name;
  updateLocDisplays(); closePicker();
}

function closePicker(e) {
  if(!e || e.target === document.getElementById('cityOverlay'))
    document.getElementById('cityOverlay').classList.remove('open');
}

// ═══════════════════════════════════════════
// ── SEARCH / RESULTS ────────────────────────
// ═══════════════════════════════════════════
function doSearch() {
  if(!S.from) { toast('Please select a starting point', 'red'); return; }
  if(!S.to)   { toast('Please select a destination', 'red'); return; }
  if(S.from === S.to) { toast('Origin and destination cannot be same', 'red'); return; }
  document.getElementById('loadingOverlay').classList.add('show');
  document.getElementById('loadingLbl').textContent = `Finding rides from ${S.from}…`;

  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.remove('show');
    const dist = getDistance(S.from, S.to);
    S.results = VEHICLE_TEMPLATES.map(v => {
      const { fare } = calcFare(S.from, S.to, v.typeKey);
      const dur = v.typeKey === 'sleeper' ? '7h+ (overnight)' : estimateDuration(dist);
      const arr = v.dep === 'Any' ? '—' : estimateArr(v.dep, dist);
      return { ...v, fare, dur, arr, dist, bookedSeats: randBooked(seatCount(v.typeKey)) };
    });
    showResults(S.results);
    goScreen('results');
  }, 900);
}

function seatCount(typeKey) {
  return { bus_nonac:44, bus_ac:36, mini_nonac:16, auto_jeep:8, sleeper:30 }[typeKey] || 40;
}

function randBooked(total) {
  const out = [], n = Math.floor(Math.random() * total * 0.45);
  while(out.length < n) { const s = Math.floor(Math.random()*total)+1; if(!out.includes(s)) out.push(s); }
  return out;
}

function showResults(vehicles) {
  document.getElementById('rRoute').textContent = `${S.from} → ${S.to}`;
  const d   = new Date(S.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',weekday:'short'});
  const dist= getDistance(S.from, S.to);
  document.getElementById('rMeta').textContent = `${vehicles.length} rides · ${d} · ${S.pass} passenger(s) · ${dist} km`;
  document.getElementById('routeInfoStrip').innerHTML =
    `📍 <strong>${S.from}</strong> → <strong>${S.to}</strong><br>📏 Distance: ~${dist} km<br>⏱️ ~${estimateDuration(dist)}<br>💰 From ₹${Math.min(...vehicles.map(v=>v.fare))}`;
  renderVCards(vehicles);
}

function renderVCards(vehicles) {
  const list = document.getElementById('resultsList');
  if(!vehicles.length) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">😔</div><div class="es-title">No rides found</div><div class="es-sub">Try a different date or nearby location</div></div>`;
    return;
  }
  list.innerHTML = vehicles.map(v => {
    const avail = (v.typeKey==='auto_jeep'?8:v.bookedSeats?seatCount(v.typeKey)-v.bookedSeats.length:seatCount(v.typeKey));
    const sc = avail > 10 ? 'seats-ok' : avail > 2 ? 'seats-low' : avail === 0 ? 'seats-no' : 'seats-low';
    const st = avail > 0 ? `${avail} seats left` : 'Sold out';
    const rates = getRates(); const r = rates[v.typeKey];
    const badges = [
      v.ac     ? `<span class="v-badge badge-ac">❄️ AC</span>` : '',
      v.govt   ? `<span class="v-badge badge-govt">🏛 Govt</span>` : `<span class="v-badge badge-pvt">🏢 Private</span>`,
      v.typeKey==='sleeper' ? `<span class="v-badge badge-sleep">🌙 Sleeper</span>` : '',
    ].filter(Boolean).join('');
    return `<div class="v-card">
      <div class="v-top">
        <div class="v-icon">${v.icon}</div>
        <div class="v-name-block"><div class="v-name">${v.name}</div><div class="v-badges">${badges}</div></div>
        <div class="v-price-block">
          <div class="v-price">₹${v.fare}</div>
          <div class="v-price-lbl">per seat</div>
          <div class="v-price-dist">₹${r.perKm}/km · ${v.dist}km</div>
        </div>
      </div>
      <div class="v-mid">
        <div style="text-align:center"><div class="v-time">${v.dep}</div><div class="v-city">${S.from}</div></div>
        <div class="v-dur"><div class="v-dur-text">${v.dur}</div>
          <div class="v-line"><div class="v-line-bar"></div><div class="v-line-dot"></div><div class="v-line-bar"></div></div>
        </div>
        <div style="text-align:center"><div class="v-time">${v.arr}</div><div class="v-city">${S.to}</div></div>
      </div>
      <div class="v-bot">
        <span class="v-seats ${sc}">${st}</span>
        <div class="v-amenities">${v.amenities.map(a=>`<span class="v-amen">${a}</span>`).join('')}</div>
        <button class="book-now-btn" onclick="openBookModal('${v.id}')" ${avail===0?'disabled':''}>${avail>0?'Book Now':'Full'}</button>
      </div>
    </div>`;
  }).join('');
}

function applyFilter(btn, type) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  let filtered = [...S.results];
  if(type === 'bus')   filtered = filtered.filter(v => v.typeKey.startsWith('bus'));
  else if(type === 'mini') filtered = filtered.filter(v => v.typeKey === 'mini_nonac');
  else if(type === 'auto') filtered = filtered.filter(v => v.typeKey === 'auto_jeep');
  else if(type === 'ac')   filtered = filtered.filter(v => v.ac);
  else if(type === 'low')  filtered = [...filtered].sort((a,b) => a.fare - b.fare);
  renderVCards(filtered);
}

// ═══════════════════════════════════════════
// ── BOOKING MODAL ────────────────────────────
// ═══════════════════════════════════════════
function openBookModal(id) {
  const v  = VEHICLE_TEMPLATES.find(x => x.id === id);
  const vs = S.results.find(x => x.id === id) || v;
  S.selectedVehicle = { ...vs };
  S.selectedSeats = [];
  document.getElementById('modalTitle').textContent = '💺 Choose Seats';
  document.getElementById('modalBody').innerHTML = buildSeatView();
  document.getElementById('bookModal').classList.add('open');
}

function closeModal() {
  document.getElementById('bookModal').classList.remove('open');
  S.selectedSeats = [];
}

function buildSeatView() {
  const v = S.selectedVehicle;
  const total = Math.min(seatCount(v.typeKey), 36);
  let seatsHtml = '';
  for(let i = 1; i <= total; i++) {
    const booked = (v.bookedSeats||[]).includes(i), sel = S.selectedSeats.includes(i);
    const cls = booked ? 'booked' : sel ? 'selected' : '';
    seatsHtml += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if(((i-1)%4)===1 && i<total) seatsHtml += `<div class="seat-aisle"></div>`;
  }
  return `
    <div class="seat-legend">
      <div class="legend-item"><div class="l-dot l-avail"></div> Available</div>
      <div class="legend-item"><div class="l-dot l-sel"></div> Selected</div>
      <div class="legend-item"><div class="l-dot l-book"></div> Booked</div>
    </div>
    <div class="bus-shell">
      <div class="bus-driver"><span>DRIVER</span><span style="font-size:20px">🎯</span></div>
      <div class="seat-grid" id="seatGrid">${seatsHtml}</div>
    </div>
    <div class="seat-summary" id="seatSummary">
      <div><div class="ss-label">Selected Seats</div><div class="ss-val" id="selSeatsDisp">None</div></div>
      <div style="text-align:right"><div class="ss-label">Total Fare</div><div class="ss-val accent" id="totalFareDisp">₹0</div></div>
    </div>
    <button class="search-btn" id="proceedBtn" onclick="showPassForm()" disabled style="opacity:0.4">Continue to Passenger Details →</button>
    <div class="pass-form" id="passFormSection">
      <div style="display:flex;align-items:center;gap:8px;margin:16px 0;cursor:pointer" onclick="backToSeats()">
        <span style="color:var(--accent);font-size:18px">←</span>
        <span style="font-size:13px;font-weight:600;color:var(--accent)">Back to seats</span>
      </div>
      <div class="form-section-lbl">Passenger Details</div>
      <div class="input-grid">
        <div class="f-wrap"><div class="f-lbl">Full Name</div><input type="text" id="fName" placeholder="Enter name"></div>
        <div class="f-wrap"><div class="f-lbl">Age</div><input type="number" id="fAge" placeholder="Age" min="1" max="120"></div>
      </div>
      <div class="input-grid">
        <div class="f-wrap"><div class="f-lbl">Gender</div><select id="fGender"><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
        <div class="f-wrap"><div class="f-lbl">Mobile No.</div><input type="tel" id="fPhone" placeholder="10 digits" maxlength="10"></div>
      </div>
      <div class="input-grid">
        <div class="f-wrap"><div class="f-lbl">Email (for ticket)</div><input type="email" id="fEmail" placeholder="your@email.com"></div>
        <div class="f-wrap"><div class="f-lbl">ID Proof</div><select id="fId"><option value="">Select ID Proof</option><option>Aadhaar Card</option><option>Voter ID</option><option>Driving License</option><option>PAN Card</option></select></div>
      </div>
      <div class="form-section-lbl">Payment Method</div>
      <div class="pay-grid" id="payGrid">
        <div class="pay-opt selected" onclick="selPay(this)"><span class="po-icon">💵</span><span class="po-name">Cash on Bus</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">📱</span><span class="po-name">UPI / QR</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">💳</span><span class="po-name">Card</span></div>
        <div class="pay-opt" onclick="selPay(this)"><span class="po-icon">🏦</span><span class="po-name">Net Banking</span></div>
      </div>
      <div class="booking-summary" id="bookSumStrip"></div>
      <button class="search-btn" onclick="confirmBooking()">✅ Confirm Booking</button>
    </div>
    <div class="ticket-view" id="ticketConfirmSection"></div>
  `;
}

function toggleSeat(num) {
  const v = S.selectedVehicle;
  if((v.bookedSeats||[]).includes(num)) return;
  const max = S.pass;
  if(S.selectedSeats.includes(num)) { S.selectedSeats = S.selectedSeats.filter(s => s!==num); }
  else {
    if(S.selectedSeats.length >= max) { toast(`Max ${max} seat(s) for ${max} passenger(s)`, 'red'); return; }
    S.selectedSeats.push(num);
  }
  refreshGrid(); refreshSummary();
}

function refreshGrid() {
  const v = S.selectedVehicle; const total = Math.min(seatCount(v.typeKey), 36);
  let html = '';
  for(let i = 1; i <= total; i++) {
    const cls = (v.bookedSeats||[]).includes(i) ? 'booked' : S.selectedSeats.includes(i) ? 'selected' : '';
    html += `<div class="seat-el ${cls}" onclick="toggleSeat(${i})">${i}</div>`;
    if(((i-1)%4)===1 && i<total) html += `<div class="seat-aisle"></div>`;
  }
  const g = document.getElementById('seatGrid'); if(g) g.innerHTML = html;
}

function refreshSummary() {
  const v = S.selectedVehicle, total = S.selectedSeats.length * v.fare;
  const sd = document.getElementById('selSeatsDisp');
  const tf = document.getElementById('totalFareDisp');
  const btn = document.getElementById('proceedBtn');
  if(sd) sd.textContent = S.selectedSeats.length ? S.selectedSeats.sort((a,b)=>a-b).join(', ') : 'None';
  if(tf) tf.textContent = `₹${total}`;
  if(btn) { btn.disabled = S.selectedSeats.length === 0; btn.style.opacity = S.selectedSeats.length ? '1' : '0.4'; }
}

function showPassForm() {
  const s = document.getElementById('passFormSection'); if(!s) return;
  s.classList.add('visible');
  const v = S.selectedVehicle, fare = S.selectedSeats.length * v.fare;
  const strip = document.getElementById('bookSumStrip');
  if(strip) strip.innerHTML = `<div class="sum-grid">
    <div class="sum-item"><div class="si-lbl">Route</div><div class="si-val">${S.from} → ${S.to}</div></div>
    <div class="sum-item"><div class="si-lbl">Date</div><div class="si-val">${fmtDate(S.date)}</div></div>
    <div class="sum-item"><div class="si-lbl">Seats</div><div class="si-val">${S.selectedSeats.sort((a,b)=>a-b).join(', ')}</div></div>
    <div class="sum-item"><div class="si-lbl">Total Fare</div><div class="si-val accent">₹${fare}</div></div>
    <div class="sum-item"><div class="si-lbl">Distance</div><div class="si-val">${v.dist} km</div></div>
    <div class="sum-item"><div class="si-lbl">Rate</div><div class="si-val">₹${getRates()[v.typeKey]?.perKm || '—'}/km</div></div>
  </div>`;
  s.scrollIntoView({behavior:'smooth'});
}

function backToSeats() { const s = document.getElementById('passFormSection'); if(s) s.classList.remove('visible'); }

function selPay(el) {
  document.querySelectorAll('.pay-opt').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

function confirmBooking() {
  const name  = document.getElementById('fName')?.value.trim();
  const age   = document.getElementById('fAge')?.value.trim();
  const gender= document.getElementById('fGender')?.value;
  const phone = document.getElementById('fPhone')?.value.trim();
  const email = document.getElementById('fEmail')?.value.trim();
  if(!name)                      { toast('Enter passenger name', 'red'); return; }
  if(!age || age < 1)            { toast('Enter valid age', 'red'); return; }
  if(!gender)                    { toast('Select gender', 'red'); return; }
  if(!phone || phone.length!==10){ toast('Enter valid 10-digit phone', 'red'); return; }

  const payEl   = document.querySelector('.pay-opt.selected');
  const payment = payEl?.querySelector('.po-name')?.textContent || 'Cash';
  const v = S.selectedVehicle, fare = S.selectedSeats.length * v.fare;
  const id = 'BR' + Date.now().toString().slice(-8);

  const ticket = {
    id, vehicleId: v.id, vehicleName: v.name, vehicleIcon: v.icon,
    from: S.from, to: S.to, date: S.date, dep: v.dep, arr: v.arr,
    seats: [...S.selectedSeats].sort((a,b)=>a-b),
    name, age, gender, phone, email: email||'', payment,
    fare, dist: v.dist, ratePerKm: getRates()[v.typeKey]?.perKm || '—',
    status: 'confirmed', bookedOn: new Date().toISOString()
  };

  S.tickets.unshift(ticket); saveTickets();
  addNotification(ticket);
  sendEmailNotifications(ticket);
  showTicketConfirm(ticket);
  toast('🎉 Ticket booked successfully!', 'green');
}

// ═══════════════════════════════════════════
// ── EMAIL NOTIFICATIONS ──────────────────────
// ═══════════════════════════════════════════
async function sendEmailNotifications(ticket) {
  if(!EMAIL_CFG.enabled || !EMAIL_CFG.publicKey) {
    console.log('[BrajRide] Email not configured. Ticket:', ticket.id);
    return;
  }
  try {
    emailjs.init(EMAIL_CFG.publicKey);
    // User confirmation
    if(ticket.email && EMAIL_CFG.userTemplateId) {
      await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.userTemplateId, {
        to_name:      ticket.name,
        to_email:     ticket.email,
        booking_id:   ticket.id,
        from_city:    ticket.from,
        to_city:      ticket.to,
        date:         fmtDate(ticket.date),
        departure:    ticket.dep,
        seats:        ticket.seats.join(', '),
        fare:         `₹${ticket.fare}`,
        vehicle_name: ticket.vehicleName,
        payment:      ticket.payment,
        distance:     ticket.dist + ' km',
      });
      toast('📧 Confirmation email sent to ' + ticket.email, 'green');
    }
    // Admin notification
    if(EMAIL_CFG.adminTemplateId && EMAIL_CFG.adminEmail) {
      await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.adminTemplateId, {
        admin_email:     EMAIL_CFG.adminEmail,
        booking_id:      ticket.id,
        passenger_name:  ticket.name,
        from_city:       ticket.from,
        to_city:         ticket.to,
        date:            fmtDate(ticket.date),
        seats:           ticket.seats.join(', '),
        fare:            `₹${ticket.fare}`,
        phone:           ticket.phone,
        vehicle_name:    ticket.vehicleName,
        payment:         ticket.payment,
        booked_on:       new Date(ticket.bookedOn).toLocaleString('en-IN'),
      });
    }
  } catch(err) {
    console.error('[BrajRide] Email error:', err);
  }
}

// ═══════════════════════════════════════════
// ── IN-APP NOTIFICATIONS ─────────────────────
// ═══════════════════════════════════════════
function addNotification(ticket) {
  S.notifications.unshift({
    id: 'N' + Date.now(),
    type: 'booking',
    title: `New Booking: ${ticket.from} → ${ticket.to}`,
    body: `${ticket.name} · Seats ${ticket.seats.join(', ')} · ₹${ticket.fare} · ${ticket.vehicleIcon} ${ticket.vehicleName}`,
    time: new Date().toISOString(),
    ticketId: ticket.id,
    read: false,
  });
  saveNotifs();
  S.unreadNotifs = S.notifications.filter(n => !n.read).length;
  updateNotifBadge();
}

function updateNotifBadge() {
  S.unreadNotifs = S.notifications.filter(n => !n.read).length;
  const badge = document.getElementById('adminNotifBadge');
  if(badge) {
    badge.textContent = S.unreadNotifs;
    badge.style.display = S.unreadNotifs > 0 ? 'inline-flex' : 'none';
  }
}

// ═══════════════════════════════════════════
// ── TICKET CONFIRM ───────────────────────────
// ═══════════════════════════════════════════
function showTicketConfirm(t) {
  const s  = document.getElementById('ticketConfirmSection');
  const ps = document.getElementById('passFormSection');
  if(ps) ps.classList.remove('visible');
  const bars = Array.from({length:28},(_,i)=>{
    const w=[2,3,1,3,2,4,1,2,3,1,4,2,1,3,2,3,1,4,2,1,3,2,4,1,2,3,1,2][i];
    return `<span style="width:${w}px"></span>`;
  }).join('');
  s.innerHTML = `
    <div class="t-success-icon">✅</div>
    <div class="t-success-title">Booking Confirmed!</div>
    <div class="t-success-sub">Show this e-ticket to the conductor${t.email ? '<br>📧 Confirmation emailed to '+t.email : ''}</div>
    <div class="e-ticket">
      <div class="et-head">
        <div class="et-id">TICKET · ${t.id}</div>
        <div class="et-route">${t.from} → ${t.to}</div>
        <div class="et-date">${fmtDate(t.date)} · Dep: ${t.dep} · ${t.dist}km</div>
      </div>
      <div class="et-notch">
        <div class="et-notch-circle" style="margin-left:-9px"></div>
        <div class="et-notch-line"></div>
        <div class="et-notch-circle" style="margin-right:-9px"></div>
      </div>
      <div class="et-body">
        <div class="et-grid">
          <div><div class="etf-lbl">Passenger</div><div class="etf-val">${t.name}</div></div>
          <div><div class="etf-lbl">Seats</div><div class="etf-val">${t.seats.join(', ')}</div></div>
          <div><div class="etf-lbl">Fare</div><div class="etf-val orange">₹${t.fare}</div></div>
          <div><div class="etf-lbl">Vehicle</div><div class="etf-val" style="font-size:12px">${t.vehicleIcon} ${t.vehicleName}</div></div>
          <div><div class="etf-lbl">Payment</div><div class="etf-val" style="font-size:12px">${t.payment}</div></div>
          <div><div class="etf-lbl">Status</div><div class="etf-val green">✅ Confirmed</div></div>
        </div>
        <div class="barcode-wrap">
          <div class="barcode-bars">${bars}</div>
          <div class="barcode-num">${t.id}</div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
      <button class="search-btn" style="background:var(--bg);color:var(--text);font-size:14px" onclick="window.print()">🖨 Print</button>
      <button class="search-btn" onclick="closeAndGoTickets()" style="font-size:14px">My Tickets →</button>
    </div>
  `;
  s.classList.add('visible');
  s.scrollIntoView({behavior:'smooth'});
}

function closeAndGoTickets() { closeModal(); goScreen('tickets'); }

// ═══════════════════════════════════════════
// ── MY TICKETS ───────────────────────────────
// ═══════════════════════════════════════════
function renderMyTickets() {
  const list = document.getElementById('myTicketsList');
  if(!S.tickets.length) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">🎫</div><div class="es-title">No tickets yet</div><div class="es-sub">Book your first ride from the Book tab</div></div>`;
    return;
  }
  list.innerHTML = S.tickets.map(t => `
    <div class="my-ticket">
      <div class="my-tc-head">
        <span class="my-tc-id">${t.vehicleIcon} ${t.id}</span>
        <span class="status-tag ${t.status==='confirmed'?'st-ok':'st-cancel'}">${t.status==='confirmed'?'✅ Confirmed':'❌ Cancelled'}</span>
      </div>
      <div class="my-tc-body">
        <div class="my-tc-route">${t.from} → ${t.to}</div>
        <div class="my-tc-meta">📅 ${fmtDate(t.date)}&nbsp;·&nbsp;⏰ ${t.dep}&nbsp;·&nbsp;💺 ${t.seats.join(', ')}<br>👤 ${t.name}&nbsp;·&nbsp;🚌 ${t.vehicleName}${t.dist?'&nbsp;·&nbsp;📏 '+t.dist+'km':''}</div>
      </div>
      <div class="my-tc-foot">
        <span class="my-tc-fare">₹${t.fare}</span>
        ${t.status==='confirmed' ? `<button class="cancel-btn" onclick="cancelTicket('${t.id}')">Cancel</button>` : `<span style="font-size:12px;color:var(--text3)">Cancelled</span>`}
      </div>
    </div>`).join('');
}

function cancelTicket(id) {
  if(!confirm('Cancel this ticket? Refund in 3–5 working days.')) return;
  const t = S.tickets.find(x => x.id === id);
  if(t) t.status = 'cancelled';
  saveTickets(); renderMyTickets();
  toast('Ticket cancelled. Refund processing.');
}

// ═══════════════════════════════════════════
// ── ADMIN PANEL ─────────────────────────────
// ═══════════════════════════════════════════
const ADMIN_CREDS = { user: 'admin', pass: 'admin123' };

function adminDoLogin() {
  const u = document.getElementById('adminUser')?.value.trim();
  const p = document.getElementById('adminPwd')?.value.trim();
  const stored = JSON.parse(localStorage.getItem('brajride_admin_creds') || 'null');
  const expectedPass = stored?.pass || ADMIN_CREDS.pass;
  const expectedUser = stored?.user || ADMIN_CREDS.user;
  if(u === expectedUser && p === expectedPass) {
    S.adminLoggedIn = true;
    S.adminTab = 'dashboard';
    goScreen('admin');
    document.getElementById('adminWelcome').textContent = `Welcome, ${u}! · ${new Date().toLocaleString('en-IN')}`;
    renderAdminTab('dashboard');
    markAllNotifsRead();
    toast('Welcome to Admin Panel 🎉', 'green');
  } else {
    toast('Invalid credentials', 'red');
    document.getElementById('adminPwd').value = '';
  }
}

function adminLogout() {
  S.adminLoggedIn = false;
  goScreen('home');
  toast('Logged out of admin panel');
}

function showAdminTab(tab, btn) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  S.adminTab = tab;
  renderAdminTab(tab);
}

function renderAdminTab(tab) {
  const el = document.getElementById('adminContent');
  if(tab === 'dashboard')     el.innerHTML = buildAdminDashboard();
  else if(tab === 'bookings') el.innerHTML = buildAdminBookings();
  else if(tab === 'notifications') { el.innerHTML = buildAdminNotifications(); markAllNotifsRead(); }
  else if(tab === 'pricing')  el.innerHTML = buildAdminPricing();
  else if(tab === 'email')    el.innerHTML = buildAdminEmail();
  updateNotifTabBadge();
}

function updateNotifTabBadge() {
  const unread = S.notifications.filter(n => !n.read).length;
  const el = document.getElementById('notifTabBadge');
  if(el) el.innerHTML = unread > 0 ? `<span class="badge-unread" style="margin-left:4px">${unread}</span>` : '';
}

function markAllNotifsRead() {
  S.notifications.forEach(n => n.read = true);
  saveNotifs(); S.unreadNotifs = 0; updateNotifBadge(); updateNotifTabBadge();
}

function buildAdminDashboard() {
  const tickets  = S.tickets;
  const confirmed= tickets.filter(t => t.status === 'confirmed');
  const revenue  = confirmed.reduce((s,t) => s + t.fare, 0);
  const today    = new Date().toISOString().split('T')[0];
  const todayBk  = tickets.filter(t => t.bookedOn?.startsWith(today));
  const routes   = new Set(tickets.map(t => `${t.from}→${t.to}`)).size;

  // Revenue by last 7 days
  const days = [], dayLabels = [];
  for(let i=6;i>=0;i--) {
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = d.toISOString().split('T')[0];
    const dayRev = tickets.filter(t=>t.bookedOn?.startsWith(key)&&t.status==='confirmed').reduce((s,t)=>s+t.fare,0);
    days.push(dayRev);
    dayLabels.push(d.toLocaleDateString('en-IN',{weekday:'short'}));
  }
  const maxRev = Math.max(...days, 1);

  const recentHtml = tickets.slice(0,5).map(t=>`
    <tr>
      <td class="tbl-id">${t.id}</td>
      <td class="tbl-route">${t.from} → ${t.to}</td>
      <td>${t.name}</td>
      <td>${fmtDate(t.date)}</td>
      <td class="tbl-fare">₹${t.fare}</td>
      <td><span class="status-tag ${t.status==='confirmed'?'st-ok':'st-cancel'}">${t.status==='confirmed'?'✅':'❌'}</span></td>
    </tr>`).join('');

  const barsHtml = days.map((v,i)=>`
    <div class="rev-bar-item">
      <div class="rev-bar" style="height:${Math.round((v/maxRev)*72)+4}px">
        ${v>0?`<div class="rev-bar-val">₹${v}</div>`:''}
      </div>
      <div class="rev-bar-lbl">${dayLabels[i]}</div>
    </div>`).join('');

  return `
    <div class="stat-grid">
      <div class="stat-card"><div class="sc-icon">🎫</div><div class="sc-val">${tickets.length}</div><div class="sc-label">Total Bookings</div><div class="sc-delta up">↑ ${todayBk.length} today</div></div>
      <div class="stat-card"><div class="sc-icon">✅</div><div class="sc-val">${confirmed.length}</div><div class="sc-label">Confirmed</div><div class="sc-delta up">${Math.round(confirmed.length/Math.max(tickets.length,1)*100)}% rate</div></div>
      <div class="stat-card"><div class="sc-icon">💰</div><div class="sc-val">₹${revenue}</div><div class="sc-label">Total Revenue</div><div class="sc-delta up">↑ ${confirmed.length} paid</div></div>
      <div class="stat-card"><div class="sc-icon">🗺️</div><div class="sc-val">${routes}</div><div class="sc-label">Active Routes</div><div class="sc-delta">${POPULAR_ROUTES.length} popular</div></div>
    </div>
    <div class="revenue-bar-wrap">
      <div class="revenue-bar-title">📈 Revenue – Last 7 Days</div>
      <div class="rev-bars">${barsHtml}</div>
    </div>
    <div class="admin-table-wrap">
      <div class="admin-table-head"><div class="at-title">Recent Bookings</div><div class="at-count">${tickets.length} total</div></div>
      <div style="overflow-x:auto"><table>
        <thead><tr><th>ID</th><th>Route</th><th>Passenger</th><th>Date</th><th>Fare</th><th>Status</th></tr></thead>
        <tbody>${recentHtml || '<tr><td colspan="6" style="text-align:center;color:var(--text3);padding:24px">No bookings yet</td></tr>'}</tbody>
      </table></div>
    </div>`;
}

function buildAdminBookings(filterQuery='') {
  const tickets = filterQuery
    ? S.tickets.filter(t => JSON.stringify(t).toLowerCase().includes(filterQuery.toLowerCase()))
    : S.tickets;

  const rows = tickets.map(t => `
    <tr>
      <td class="tbl-id">${t.id}</td>
      <td class="tbl-route">${t.from} → ${t.to}</td>
      <td>${t.name}<br><span style="font-size:11px;color:var(--text2)">${t.phone}</span></td>
      <td>${fmtDate(t.date)}<br><span style="font-size:11px;color:var(--text2)">${t.dep}</span></td>
      <td>${t.seats?.join(', ')||'—'}</td>
      <td class="tbl-fare">₹${t.fare}<br><span style="font-size:10px;color:var(--text3)">${t.dist||'—'}km</span></td>
      <td>${t.payment}</td>
      <td><span class="status-tag ${t.status==='confirmed'?'st-ok':'st-cancel'}">${t.status==='confirmed'?'✅ OK':'❌ Cancel'}</span></td>
      <td>${t.status==='confirmed'?`<button class="tbl-action-btn tbl-cancel" onclick="adminCancelTicket('${t.id}')">Cancel</button>`:'—'}</td>
    </tr>`).join('');

  return `
    <div class="admin-table-wrap">
      <div class="admin-table-head">
        <div><div class="at-title">All Bookings</div><div class="at-count">${tickets.length} results</div></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <div class="admin-search">🔍 <input type="text" placeholder="Search bookings…" oninput="reloadBookings(this.value)" value="${filterQuery}"></div>
          <button class="export-btn" onclick="exportCSV()">⬇ Export CSV</button>
        </div>
      </div>
      <div style="overflow-x:auto"><table>
        <thead><tr><th>ID</th><th>Route</th><th>Passenger</th><th>Date</th><th>Seats</th><th>Fare</th><th>Payment</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="9" style="text-align:center;color:var(--text3);padding:24px">No bookings found</td></tr>'}</tbody>
      </table></div>
    </div>`;
}

function reloadBookings(q) {
  document.getElementById('adminContent').innerHTML = buildAdminBookings(q);
}

function adminCancelTicket(id) {
  if(!confirm('Cancel this ticket from admin?')) return;
  const t = S.tickets.find(x => x.id===id);
  if(t) t.status = 'cancelled';
  saveTickets(); renderAdminTab('bookings'); toast('Ticket cancelled by admin');
}

function exportCSV() {
  const headers = ['ID','From','To','Date','Passenger','Phone','Email','Seats','Fare','Dist','Vehicle','Payment','Status','BookedOn'];
  const rows = S.tickets.map(t => [
    t.id, t.from, t.to, t.date, t.name, t.phone, t.email||'',
    (t.seats||[]).join(';'), t.fare, t.dist||'', t.vehicleName, t.payment, t.status, t.bookedOn||''
  ]);
  const csv = [headers, ...rows].map(r => r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='brajride_bookings.csv'; a.click();
  URL.revokeObjectURL(url);
  toast('CSV exported!', 'green');
}

function buildAdminNotifications() {
  if(!S.notifications.length)
    return `<div class="empty-state"><div class="es-icon">🔔</div><div class="es-title">No notifications yet</div><div class="es-sub">Booking alerts will appear here</div></div>`;
  return `
    <div class="admin-table-wrap">
      <div class="admin-table-head"><div class="at-title">🔔 Booking Alerts</div><div class="at-count">${S.notifications.length} total</div></div>
      ${S.notifications.map(n=>`
        <div class="notif-item ${n.read?'':'unread'}">
          <div class="notif-icon">${n.type==='booking'?'🎫':'ℹ️'}</div>
          <div style="flex:1">
            <div class="notif-title">${n.title}</div>
            <div class="notif-sub">${n.body}</div>
            <div class="notif-time">${new Date(n.time).toLocaleString('en-IN')}</div>
          </div>
          ${!n.read?`<div style="width:8px;height:8px;background:var(--purple);border-radius:50%;flex-shrink:0;margin-top:4px"></div>`:''}
        </div>`).join('')}
    </div>`;
}

function buildAdminPricing() {
  const rates = getRates();
  const cards = Object.entries(rates).map(([key, r]) => `
    <div class="price-config-card">
      <div class="pc-head">
        <span class="pc-icon">${r.icon}</span>
        <div><div class="pc-name">${r.label}</div><div class="pc-desc">${r.desc}</div></div>
      </div>
      <div class="rate-row">
        <span class="rate-label">Rate per km</span>
        <div class="rate-input-wrap"><span class="rate-prefix">₹</span><input type="number" id="rate_${key}_perKm" value="${r.perKm}" step="0.1" min="0.5" max="20"><span class="rate-suffix">/km</span></div>
      </div>
      <div class="rate-row">
        <span class="rate-label">Minimum fare</span>
        <div class="rate-input-wrap"><span class="rate-prefix">₹</span><input type="number" id="rate_${key}_minFare" value="${r.minFare}" step="5" min="10" max="500"></div>
      </div>
      <div style="margin-top:6px;padding:10px;background:var(--bg);border-radius:var(--r);font-size:12px;color:var(--text2)">
        Preview: Mathura→Vrindavan (12km) = <strong>₹${Math.max(Math.round(12*r.perKm/5)*5, r.minFare)}</strong>
      </div>
      <button class="rate-save-btn" onclick="saveRate('${key}')">💾 Save ${r.label}</button>
    </div>`).join('');

  return `
    <div style="margin-bottom:16px;padding:14px 16px;background:var(--blue-bg);border-radius:var(--r-lg);font-size:13px;color:var(--blue);font-weight:500">
      💡 Fares are calculated as: <strong>Distance × Rate/km</strong>, rounded to nearest ₹5, never below minimum fare.
      Changes take effect immediately for new searches.
    </div>
    <div class="price-config-grid">${cards}</div>
    <div style="margin-top:14px">
      <button class="search-btn" onclick="resetRates()" style="background:var(--red);width:auto;padding:10px 24px;height:auto">🔄 Reset All to Defaults</button>
    </div>`;
}

function saveRate(key) {
  const current = JSON.parse(localStorage.getItem('brajride_rates') || '{}');
  const perKm   = parseFloat(document.getElementById(`rate_${key}_perKm`)?.value) || DEFAULT_RATES[key].perKm;
  const minFare = parseInt(document.getElementById(`rate_${key}_minFare`)?.value)  || DEFAULT_RATES[key].minFare;
  current[key]  = { ...DEFAULT_RATES[key], perKm, minFare };
  localStorage.setItem('brajride_rates', JSON.stringify(current));
  toast(`✅ ${getRates()[key]?.label} rate saved!`, 'green');
  renderAdminTab('pricing'); renderRoutes(); updateQuickPrices();
}

function resetRates() {
  if(!confirm('Reset all pricing to defaults?')) return;
  localStorage.removeItem('brajride_rates');
  toast('Pricing reset to defaults', 'green');
  renderAdminTab('pricing'); renderRoutes(); updateQuickPrices();
}

function buildAdminEmail() {
  const cfg = EMAIL_CFG;
  return `
    <div class="email-config-card">
      <div class="ec-title">📧 EmailJS Configuration</div>
      <div class="ec-sub">
        BrajRide uses <strong>EmailJS</strong> (free) to send booking confirmations to passengers and alerts to admins.
        <br><br>
        <strong>Setup steps:</strong><br>
        1. Create free account at <strong>emailjs.com</strong><br>
        2. Add an Email Service (Gmail / Outlook etc.)<br>
        3. Create two templates (user confirmation + admin alert)<br>
        4. Copy your credentials below and click Save
      </div>
      <div class="ec-status ${cfg.enabled && cfg.publicKey ? 'configured' : 'not-configured'}">
        ${cfg.enabled && cfg.publicKey ? '✅ Email is configured and active' : '⚠️ Email not configured — notifications are in-app only'}
      </div>
      <div class="ec-grid">
        <div class="f-wrap"><div class="f-lbl">EmailJS Public Key</div><input type="text" id="ec_pubKey" placeholder="user_XXXXXXXXXXXXXXXXX" value="${cfg.publicKey||''}"></div>
        <div class="f-wrap"><div class="f-lbl">Service ID</div><input type="text" id="ec_svcId" placeholder="service_xxxxxxxx" value="${cfg.serviceId||''}"></div>
        <div class="f-wrap"><div class="f-lbl">User Confirmation Template ID</div><input type="text" id="ec_userTpl" placeholder="template_xxxxxxxx" value="${cfg.userTemplateId||''}"></div>
        <div class="f-wrap"><div class="f-lbl">Admin Alert Template ID</div><input type="text" id="ec_adminTpl" placeholder="template_xxxxxxxx" value="${cfg.adminTemplateId||''}"></div>
        <div class="f-wrap"><div class="f-lbl">Admin Email Address</div><input type="email" id="ec_adminEmail" placeholder="admin@brajride.in" value="${cfg.adminEmail||''}"></div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:13px;font-weight:600">
          <input type="checkbox" id="ec_enabled" ${cfg.enabled?'checked':''} style="width:16px;height:16px">
          Enable email notifications
        </label>
      </div>
      <button class="ec-save-btn" onclick="saveEmailConfig()">💾 Save Email Config</button>
      <button class="ec-test-btn" onclick="testEmail()">🧪 Send Test Email</button>
    </div>
    <div class="email-config-card">
      <div class="ec-title">📋 Template Variables Reference</div>
      <div class="ec-sub">Use these variables in your EmailJS templates:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">User Template</div>
          ${['{{to_name}}','{{to_email}}','{{booking_id}}','{{from_city}}','{{to_city}}','{{date}}','{{departure}}','{{seats}}','{{fare}}','{{vehicle_name}}','{{payment}}','{{distance}}'].map(v=>`<div style="font-family:monospace;font-size:12px;background:var(--bg);padding:4px 8px;border-radius:4px;margin-bottom:4px;color:var(--blue)">${v}</div>`).join('')}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px">Admin Template</div>
          ${['{{admin_email}}','{{booking_id}}','{{passenger_name}}','{{from_city}}','{{to_city}}','{{date}}','{{seats}}','{{fare}}','{{phone}}','{{vehicle_name}}','{{payment}}','{{booked_on}}'].map(v=>`<div style="font-family:monospace;font-size:12px;background:var(--bg);padding:4px 8px;border-radius:4px;margin-bottom:4px;color:var(--purple)">${v}</div>`).join('')}
        </div>
      </div>
    </div>
    <div class="email-config-card">
      <div class="ec-title">🔐 Change Admin Password</div>
      <div class="ec-grid" style="margin-top:14px">
        <div class="f-wrap"><div class="f-lbl">New Username</div><input type="text" id="newAdminUser" placeholder="admin"></div>
        <div class="f-wrap"><div class="f-lbl">New Password</div><input type="password" id="newAdminPass" placeholder="Min 6 characters"></div>
      </div>
      <button class="ec-save-btn" onclick="changeAdminCreds()">🔒 Update Credentials</button>
    </div>`;
}

function saveEmailConfig() {
  EMAIL_CFG = {
    publicKey:       document.getElementById('ec_pubKey')?.value.trim() || '',
    serviceId:       document.getElementById('ec_svcId')?.value.trim() || '',
    userTemplateId:  document.getElementById('ec_userTpl')?.value.trim() || '',
    adminTemplateId: document.getElementById('ec_adminTpl')?.value.trim() || '',
    adminEmail:      document.getElementById('ec_adminEmail')?.value.trim() || 'admin@brajride.in',
    enabled:         document.getElementById('ec_enabled')?.checked || false,
  };
  localStorage.setItem('brajride_email_cfg', JSON.stringify(EMAIL_CFG));
  if(EMAIL_CFG.enabled && EMAIL_CFG.publicKey) emailjs.init(EMAIL_CFG.publicKey);
  toast('✅ Email configuration saved!', 'green');
  renderAdminTab('email');
}

async function testEmail() {
  if(!EMAIL_CFG.enabled || !EMAIL_CFG.publicKey) { toast('Configure and enable email first', 'red'); return; }
  try {
    emailjs.init(EMAIL_CFG.publicKey);
    await emailjs.send(EMAIL_CFG.serviceId, EMAIL_CFG.adminTemplateId, {
      admin_email: EMAIL_CFG.adminEmail,
      booking_id: 'TEST-001',
      passenger_name: 'Test Passenger',
      from_city: 'Mathura', to_city: 'Vrindavan',
      date: fmtDate(new Date().toISOString().split('T')[0]),
      seats: '5, 6', fare: '₹40', phone: '9999999999',
      vehicle_name: 'Test Vehicle', payment: 'Cash',
      booked_on: new Date().toLocaleString('en-IN'),
    });
    toast('✅ Test email sent to ' + EMAIL_CFG.adminEmail, 'green');
  } catch(e) {
    toast('❌ Email failed: ' + (e.text||e.message||'Check credentials'), 'red');
  }
}

function changeAdminCreds() {
  const u = document.getElementById('newAdminUser')?.value.trim();
  const p = document.getElementById('newAdminPass')?.value.trim();
  if(!u || !p) { toast('Enter both username and password', 'red'); return; }
  if(p.length < 6) { toast('Password must be at least 6 characters', 'red'); return; }
  localStorage.setItem('brajride_admin_creds', JSON.stringify({user: u, pass: p}));
  toast('✅ Admin credentials updated!', 'green');
}

// ═══════════════════════════════════════════
// ── UTILS ───────────────────────────────────
// ═══════════════════════════════════════════
function fmtDate(d) {
  if(!d) return '—';
  return new Date(d).toLocaleDateString('en-IN', {day:'numeric', month:'short', weekday:'short'});
}

function toast(msg, type='') {
  const wrap = document.getElementById('toastWrap');
  const el   = document.createElement('div');
  el.className = `toast ${type}`; el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity='0'; el.style.transform='translateX(20px)'; el.style.transition='all 0.3s'; setTimeout(()=>el.remove(),300); }, 2800);
}

document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
</script>
</body>
</html>
