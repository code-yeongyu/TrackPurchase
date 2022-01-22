import { ModuleFactory } from ".";

const loginHTML = `<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:type" content="website">
    <meta property="og:title" content="[네이버: 로그인]">
    <meta property="og:description" content="안전한 로그인을 위해 주소창의 URL과 자물쇠 마크를 확인하세요!">
    <meta property="og:image" content="https://ssl.pstatic.net/sstatic/search/common/og_v3.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <title>Naver Sign in</title>
    <link rel="stylesheet" type="text/css" href="/login/css/global/desktop/w_202105.css?20210812">
</head>
<body>
<div id="wrap" class="wrap">
    <div class="u_skip"><a href="https://www.naver.com">본문 바로가기</a></div>
    <header class="header" role="banner">
        <div class="header_inner">
            <a href="https://www.naver.com" class="logo">
                <h1 class="blind">NAVER</h1>
            </a>
            <div class="lang" id="show_locale_switch">
                <select id="locale_switch" name="locale_switch" title="언어선택" class="sel">
                    <option value="ko_KR">한국어</option>
                    <option value="en_US">English</option>
                    <option value="zh-Hans_CN">中文(简体)</option>
                    <option value="zh-Hant_TW">中文(台灣)</option>
                </select>
            </div>
        </div>
    </header>

    <div id="container" class="container">
        <!-- content -->
        <div class="content">
            <div class="login_wrap global">
                <ul class="menu_wrap" role="tablist">
                    <li class="menu_item" role="presentation">
                        <a href="#none" id="loinid" class="menu_id on" role="tab" aria-selected="true">
                            <span class="menu_text"><span class="text">Sign-in with Username</span></span>
                        </a>
                    </li>
                    <li class="menu_item" role="presentation">
                        <a href="#none" id="qrcode" class="menu_qr" role="tab" aria-selected="false">
                            <span class="menu_text"><span class="text">Sign-in with QR code</span></span>
                        </a>
                        <!--넛지배너-->
                        <div class="nudge_banner" id="nudge_tooltip">
                            <span class="nudge_text">If this PC is used by multiple people, try it.</span>
                            <button type="button" id="nudge_close" class="nudge_close"><span class="icon_nudge_close"></span></button>
                        </div>
                    </li>
                </ul>
                <form id="frmNIDLogin" name="frmNIDLogin" target="_top" autocomplete="off" action="https://nid.naver.com/nidlogin.login" method="POST">
                    <input type="hidden" id="localechange" name="localechange" value="">
                    <input type="hidden" name="dynamicKey" id="dynamicKey" value="EwEQZspysrOkCok-sVChWVLVQanccLu_UmFzoX_PT2s7tyl1Za7rU7lZrS6jaLDnyp0TigVla-QcSHMV2021TRk0Nfq6_ymr0C9is4FBlUA">
                    <input type="hidden" name="encpw" id="encpw" value="">
<input type="hidden" name="enctp" id="enctp" value="1">
<input type="hidden" name="svctype" id="svctype" value="1">
<input type="hidden" name="smart_LEVEL" id="smart_LEVEL" value="1">
<input type="hidden" name="bvsd" id="bvsd" value="">
<input type="hidden" name="encnm" id="encnm" value="">
<input type="hidden" name="locale" id="locale" value="en_US">
<input type="hidden" name="url" id="url" value="https://www.naver.com">


                    <ul class="panel_wrap">
                        <li class="panel_item" style="display: block;">
                            <div class="panel_inner" role="tabpanel" aria-controls="loinid">
                                <div class="id_pw_wrap">
                                    <div class="input_row" id="id_line">
                                        <div class="icon_cell" id="id_cell">
                                            <span class="icon_id">
                                                <span class="blind">Username</span>
                                            </span>
                                        </div>
                                        <input type="text" id="id" name="id" placeholder="Username" title="Username" class="input_text" maxlength="41" value="">
                                        <span role="button" class="btn_delete" id="id_clear" style="display: none;">
                                            <span class="icon_delete">
												<span class="blind">delete</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="input_row" id="pw_line">
                                        <div class="icon_cell" id="pw_cell">
                                            <span class="icon_pw">
                                                <span class="blind">Password</span>
                                            </span>
                                        </div>
                                        <input type="password" id="pw" name="pw" placeholder="Password" title="Password" class="input_text" maxlength="16">
                                        <span role="button" class="btn_delete" id="pw_clear" style="display: none;">
                                            <span class="icon_delete">
                                                <span class="blind">삭제</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="login_keep_wrap" id="login_keep_wrap">
                                    <div class="keep_check">
                                        <input type="checkbox" id="keep" name="nvlong" class="input_keep" value="off">
                                        <label for="keep" class="keep_text">Stay Signed in</label>
                                    </div>
                                    <div class="ip_check">
                                        <a href="/login/ext/help_ip3.html" target="_blank" id="ipguide" title="IP Security"><span class="ip_text">IP Security</span></a>
                                        <span class="switch">
                                            <input type="checkbox" id="switch" class="switch_checkbox" value="off">
                                            <label for="switch" class="switch_btn">
                                                <span class="blind" id="switch_blind">on</span>
                                            </label>
                                        </span>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_capslock" style="display: none;">
                                    <div class="error_message">
                                        <p><strong>Caps Lock</strong> is on.</p>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_empty_id" style="display: none;">
                                    <div class="error_message">
                                        Enter your <strong>username!</strong>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_empty_pw" style="display: none;">
                                    <div class="error_message">
                                        Enter your <strong>password!</strong>
                                    </div>
                                </div>
                                <div class="login_error_wrap" id="err_common" style="display:none;">
                                    <div class="error_message" style="width:90%">
                                        
                                    </div>
                                </div>
                                <div class="btn_login_wrap">
                                    <button type="submit" class="btn_login" id="log.login">
                                        <span class="btn_text">Sign in</span>
                                    </button>

                                </div>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            <ul class="find_wrap" id="find_wrap">
                <li><div class="find_text">Forgot your <a target="_blank" id="pwinquiry" href="https://nid.naver.com/user2/api/route?m=routePwInquiry&amp;lang=en_US" class="en_find_text">Password</a> or <a target="_blank" id="idinquiry" href="https://nid.naver.com/user2/api/route?m=routeIdInquiry&amp;lang=en_US" class="en_find_text">Username</a>?</div></li><li><a target="_blank" id="join" href="https://nid.naver.com/user2/V2Join?m=agree&amp;lang=en_US" class="en_find_text">Sign up</a></li>
            </ul>
            <div class="sns_cover">
                <ul class="sns_wrap">
                    <li><a href="/oauth/global/initSNS.nhn?idp_cd=facebook&amp;locale=en_US&amp;svctype=1&amp;postDataKey=&amp;url=https%3A%2F%2Fwww.naver.com" class="sns_item"><span class="sns_text">Facebook</span></a></li>
                    <li><a href="/oauth/global/initSNS.nhn?idp_cd=line&amp;locale=en_US&amp;svctype=1&amp;postDataKey=&amp;url=https%3A%2F%2Fwww.naver.com" class="sns_item"><span class="sns_text">Line</span></a></li>
                </ul>
            </div>
        </div>
        <!-- //content -->
    </div>

    <!-- footer -->
    <div class="footer">
        <div class="footer_inner">
            <div class="footer_copy">
                <a id="fot.naver" target="_blank" href="https://www.navercorp.com">
                    <span class="footer_logo"><span class="blind">네이버</span></span>
                </a>
                <span class="text">Copyright</span>
                <span class="corp">© NAVER Corp.</span>
                <span class="text">All Rights Reserved.</span>
            </div>
        </div>
    </div>

</div>
<input type="hidden" id="nclicks_nsc" name="nclicks_nsc" value="nid.login_en">
<input type="hidden" id="nid_buk" name="nid_buk" value="exist">
<input type="hidden" id="removeLink" name="removeLink" value="">
<input type="hidden" id="hide_util" name="hide_util" value="">
<input type="hidden" id="ncaptchaSplit" name="ncaptchaSplit" value="none">
<input type="hidden" id="locale" name="locale" value="en_US">
<input type="hidden" id="adult_surl_v2" name="adult_surl_v2" value="">
<input type="hidden" id="ispopup" name="ispopup" value="false">
<script type="text/javascript" src="/login/js/bvsd.1.3.4.min.js"></script>
<script type="text/javascript" src="/login/js/v2/default/common_202105.js?v=20210813"></script>
<script type="text/javascript" src="/login/js/v2/default/default_202105.js?v=20210910"></script>
<div id="nv_stat" style="display:none;">20</div>


</body></html>
`;

const manualOTPHTML = `<html lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
	<link rel="stylesheet" type="text/css" href="/login/css/global/desktop/w_20181005.css?dt=20181005">
	<title>2nd Authorization</title>
</head>
<body>
<div id="wrap">
	<div id="header" class="otp_header" role="banner">
		<h1><a href="https://www.naver.com" class="sp h_logo"><span class="blind">NAVER</span></a></h1>
	</div>
	<div id="container" role="main">
		<div id="content" class="cont_otp">
			<form id="frmNIDLogin" name="frmNIDLogin" target="_top" autocomplete="off" action="https://nid.naver.com/nidlogin.login" method="POST">
			<input type="hidden" name="mode" id="mode" value="otp">
<input type="hidden" name="auto" id="auto" value="">

<input type="hidden" name="locale" id="locale" value="en_US">
<input type="hidden" name="key" id="key" value="BEJjKNxsbEPRUL1tY9i9nOsv3QyIBKyH">

			<div id="call_success" style="display:none">
				<h2 class="title">"2-step verification"<br> notification has been sent.</h2>
				<p class="info_title">Please check the notification on your NAVER App.</p>
				<div class="certify_input" data-tg-lang="btn_otp2">
					<input id="wait2" type="checkbox">
					<label for="wait2" class="ico_fill_check">
						Don’t ask again on this browser.
					</label>
				</div>
				<div class="certify_remail">
					<button type="button" class="remail_btn" id="remail_btn1">Resend notification</button>
					<button type="button" class="certify_login_btn" id="certify_login_btn">Sign in with an OTP verification number</button>
				</div>
				<div class="progress_area">
					<div class="progress_box">
						<span class="progress_bar">
							<span class="progression" id="progression" style="width: 0%;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuetext="0%" aria-valuemax="100"></span>
						</span>
						<span class="txt">Time</span>
						<span class="time" id="remainTime"></span>
					</div>
				</div>
			</div>
			<div id="call_fail" style="display:none">
				<h2 class="title">Did not receive a notification?</h2>
				<div class="certify_input" data-tg-lang="btn_otp2">
					<input id="wait3" type="checkbox">
					<label for="wait3" class="ico_fill_check">
						Don’t ask again on this browser.
					</label>
				</div>
				<div class="certify_resend">
					<h3 class="resend_title">Please check below and request a notification again.</h3>
					<ol class="resend_list">
						<li>Are you signed in to the NAVER App?</li><li>Are you allowed to receive notifications from your NAVER App in your<br> device's settings?</li><li>Are you allowed to receive notifications in your NAVER App settings?</li>
					</ol>
				</div>
				<button type="button" class="btn_global" id="btn_global1" value="확인">Resend notification</button>
				<button type="button" class="remail_btn" id="remail_btn2">Sign in with an OTP verification number</button>
				<div class="progress_area">
					<div class="progress_box">
						<span class="progress_bar">
							<span class="progression" id="progression2" style="width: 0%;" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuetext="0%" aria-valuemax="100"></span>
						</span>
						<span class="txt">Time</span>
						<span class="time" id="remainTime2"></span>
					</div>
				</div>
			</div>
			<div id="direct_call" style="display: block;">
				<h2 class="title">Please enter your<br> OTP verification number.</h2>
				<p class="info_title">
					If you do not receive a 2-step verification notification<br>You can sign in by entering your OTP verification number.
				</p>
				<div class="certify_resend_way">
					<h3 class="resend_title">How to check the OTP verification number</h3>
					<div class="resend_way">
						<div class="way_area">
							<span class="way_view_hamburg">
								<span class="blind">Open extended area</span>
							</span>
							<span class="way_text">
								<span class="way_text_ico"><span class="blind">Open extended area selection view</span></span>
								<span class="way_text_inner">Button</span>
							</span>
						</div>
						<span class="way_arrow"><span class="blind">next</span></span>
						<div class="way_area">
							<span class="way_view_appset">
								<span class="blind">App settings selection view</span>
							</span>
							<span class="way_text">App settings</span>
						</div>
						<span class="way_arrow"><span class="blind">next</span></span>
						<div class="way_area">
							<span class="way_view_otp">
								<span class="blind">Naver OTP</span>
							</span>
							<span class="way_text">Naver OTP</span>
						</div>
						<span class="way_arrow"><span class="blind">next</span></span>
						<div class="way_area">
							<span class="way_view_verify">
								<span class="blind">How to check verification number</span>
							</span>
							<span class="way_text2">How to verify<br> verification<br> number</span>
						</div>
					</div>
				</div>
				<div class="input_row">
					<span class="input_box">
						<input type="tel" id="otp" name="otp" accesskey="L" placeholder="Please enter verification number." class="int">
						<label for="otp" id="label_for_otp" class="lbl">Please enter verification number.</label>
					</span>
					<button type="button" class="wrg" style="display:none;">Delete</button>
				</div>
				<div id="err_empty_otp" class="error" style="display:none;"><div class="error">Please enter the OTP Number.</div></div>
				<button type="submit" class="btn_global" value="Confirm">Confirm</button>
				<button type="button" class="remail_btn" id="remail_btn3">Disable "2-Step Verification"</button>
			</div>
			</form>
		</div>
	</div>
    <div id="footer" role="contentinfo">
        <address><em><a target="_blank" href="http://www.navercorp.com" class="logo" id="fot.naver"><span class="blind">naver</span></a></em><em class="copy">Copyright</em> <em class="u_cri">©</em> <a target="_blank" href="http://www.navercorp.com" class="u_cra" id="fot.navercorp">NAVER Corp.</a> <span class="all_r">All Rights Reserved.</span></address>
    </div>
</div>
<input type="hidden" id="svctype" name="svctype" value="1">
<input type="hidden" id="token_push" name="token_push" value="">
<input type="hidden" id="ajax_alert_fail" name="ajax_alert_fail" value="2-Step Verification failed.

If you reinstalled or restored the Naver app, you'll need to reset the 2-Step Verification.
Go to [My Information> Security Settings> Manage 2-Step Verification> Change Device] on the signed-in device.
If you don't have a signed-in device, turn off 2-Step Verification.
Check the device's time is set to the current time.">
<input type="hidden" id="ajax_alert_unmatch" name="ajax_alert_unmatch" value="2-Step Verification failed.

If you reinstalled or restored the Naver app, you'll need to reset the 2-Step Verification.
Go to [My Information> Security Settings> Manage 2-Step Verification> Change Device] on the signed-in device.
If you don't have a signed-in device, turn off 2-Step Verification.
Check the device's time is set to the current time.">
<input type="hidden" id="ajax_alert_deny" name="ajax_alert_deny" value="2-step verification request has been declined.">
<input type="hidden" id="push_count_over" name="push_count_over" value="You can only retransmit verification notifications up to 3 times. If you do not receive a notification, please enter your verification number directly.">
<input type="hidden" id="otpsession" name="otpsession" value="">
<input type="hidden" id="locale" name="locale" value="en_US">
<input type="hidden" id="minuteDeli" name="minuteDeli" value=":">
<input type="hidden" id="secondDeli" name="secondDeli" value="">
<script type="text/javascript" src="/login/js/default/common200225.js?v=20200714"></script>
<script type="text/javascript" src="/login/js/EventReceiver.js"> </script>
<script type="text/javascript" nonce="">
 
var Polling = function (option) {
    "use strict";
    var nativeEventSource = window.EventSource !== undefined;
    
    function loggingPanel(msg) {
    	if (!(navigator.appVersion.indexOf("MSIE") != -1)) {
		try {
    		console.log(msg);
		} catch(e) {}
	}
    }

    return {
        init: function () {
            loggingPanel("init");
            loggingPanel('event source is ' + (nativeEventSource ? "enable" : 'disable'));
            var session = getObjValue("otpsession");
			loggingPanel(session +" init");
            var receiver = new EventReceiver('/push/otp?session='+session);
            loggingPanel('enable session ' + session);
            receiver.then(function (data){
                loggingPanel('data('+new Date().toString()+'): ' + JSON.stringify(data));
                receiver.close();
                try {
                	if (data.msgType=="CANCEL") {
                		checkFail('cancel');
                		ajaxForceStop = true;
                	} else {
	                	addPushTokenValue();
	                	$('frmNIDLogin').submit();
	                	ajaxForceStop = true;
                	}
                } catch (e) {}
            }).ping(function (ping) {
                loggingPanel('ping: ' + ping.time);
            }).error(function (error) {
                loggingPanel('error:' + JSON.stringify(error));
            });
        }
    };
};

window.Polling = Polling;


function callPollingBackground(repush) {
	if (repush) {
		viewLayer(1);
		try {
			var xmlhttp = getXmlHttp();
			if ($("token_push").value) {
				xmlhttp.open("GET", "https://nid.naver.com/user2/api/twoStepVerification/getStatus.nhn?token_push="+$("token_push").value+"&cnt=again");
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						try {
						var obj = JSON.parse(xmlhttp.responseText);
						if (obj.auth_result=="success" ) {
							addPushTokenValue();
							$('frmNIDLogin').submit();	
							ajaxForceStop = true;
						} else if (obj.auth_result=="cancel" ) {
							checkFail('cancel');
		                	ajaxForceStop = true;
						} else {
							rePush();
						}
						}catch(e) {
						}
					}
				}
				xmlhttp.send(null);
			}
		} catch (e) {
			if (window.bridgeGotTime) {
				throw e;
			} else {
				// page reload?
			}
		}
	} else {
		var app = new Polling();
		app.init();
	}
}

var cntbg = 0;
function callBGAuto() {
	try {
		cntbg++;
		if (cntbg>20 || ajaxForceStop) {
		} else {
			var xmlhttp = getXmlHttp();
			if ($("token_push").value) {
				xmlhttp.open("GET", "https://nid.naver.com/user2/api/twoStepVerification/getStatus.nhn?token_push="+$("token_push").value+"&cntbg="+cntbg);
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						try {
						var obj = JSON.parse(xmlhttp.responseText);
						if (obj.auth_result=="success" ) {
							addPushTokenValue();
							$('frmNIDLogin').submit();	
							ajaxForceStop = true;
						} else if (obj.auth_result=="cancel" ) {
							checkFail('cancel');
		                	ajaxForceStop = true;
						} else {
							if (cntbg<6) { //15s -> 2.5s 간격
								setTimeout(function () {callBGAuto();},2500);
							} else {
								setTimeout(function () {callBGAuto();},5000);
							}
						}
						}catch(e) {
						}
					}
				}
				xmlhttp.send(null);
			}
		}
	} catch (e) {
		if (window.bridgeGotTime) {
			throw e;
		} else {
			// page reload?
		}
	}
}

function askServerStatusWithPolling()
{
	if (ajaxForceStop) {
	} else {
		if (currentSec>(waitLimit-initSec)) {
			checkFail('fail');
		} else {
			callPollingBackground(false);
			setTimeout(function () {callBGAuto();},5000);
		}
	}
	callCnt++;
}

addNormalEvent("remail_btn1",function() {callPollingBackground(true);});
addNormalEvent("remail_btn2",function() {viewLayer(2);});
addNormalEvent("remail_btn3",function() {release2nd();});
addNormalEvent("certify_login_btn",function() {viewLayer(2);});
addNormalEvent("wait3",function() {no_save_case($("wait3"));});
addNormalEvent("wait2",function() {no_save_case($("wait2"));});
addNormalEvent("btn_global1",function() {callPollingBackground(true);return false;});
addNormalEventWithType("otp", checkLabel, "keyup");

var formElement = $('frmNIDLogin');
if(formElement.addEventListener) {
	formElement.addEventListener("submit", function(e) { if (confirmPushOTPSubmit()) {} else {e.preventDefault ? e.preventDefault() : e.returnValue = false;}}, false);
} else {
	formElement.attachEvent("onsubmit", function(e) { if (confirmPushOTPSubmit()) {} else {e.preventDefault ? e.preventDefault() : e.returnValue = false;}});
}
viewLayer(2);
</script>
<div id="nv_stat" style="display:none;">90</div>


</body></html>
`;

const captchaLoginHTML = `<html lang="ko"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:type" content="website">
    <meta property="og:title" content="[네이버: 로그인]">
    <meta property="og:description" content="안전한 로그인을 위해 주소창의 URL과 자물쇠 마크를 확인하세요!">
    <meta property="og:image" content="https://ssl.pstatic.net/sstatic/search/common/og_v3.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <title>Naver Sign in</title>
    <link rel="stylesheet" type="text/css" href="/login/css/global/desktop/w_202105.css?20210812">
<link id="rcapt_css" rel="stylesheet" type="text/css" href="https://rcaptcha.nid.naver.com/rcaptCss?key=3eBZr4ACsG3cqh" media="all"></head>
<body>
<div id="wrap" class="wrap">
    <div class="u_skip"><a href="https://www.naver.com">본문 바로가기</a></div>
    <header class="header" role="banner">
        <div class="header_inner">
            <a href="https://www.naver.com" class="logo">
                <h1 class="blind">NAVER</h1>
            </a>
        </div>
    </header>

    <div id="container" class="container">
        <!-- content -->
        <div class="content">
            <div class="login_wrap global">
                <ul class="menu_wrap" role="tablist">
                    <li class="menu_item" role="presentation">
                        <a href="#none" id="loinid" class="menu_id on" role="tab" aria-selected="true">
                            <span class="menu_text"><span class="text">Sign-in with Username</span></span>
                        </a>
                    </li>
                    <li class="menu_item" role="presentation">
                        <a href="#none" id="qrcode" class="menu_qr" role="tab" aria-selected="false">
                            <span class="menu_text"><span class="text">Sign-in with QR code</span></span>
                        </a>
                        <!--넛지배너-->
                        <div class="nudge_banner" id="nudge_tooltip">
                            <span class="nudge_text">If this PC is used by multiple people, try it.</span>
                            <button type="button" id="nudge_close" class="nudge_close"><span class="icon_nudge_close"></span></button>
                        </div>
                    </li>
                </ul>
                <form id="frmNIDLogin" name="frmNIDLogin" target="_top" autocomplete="off" action="https://nid.naver.com/nidlogin.login" method="POST">
                    <input type="hidden" id="localechange" name="localechange" value="">
                    <input type="hidden" name="dynamicKey" id="dynamicKey" value="o31TsH8Sob6vIkrBdJwl1IPWTvC_OOTPdJFp2-CQKa_q2zOIwgvtSBdt004NTDtG4ORPvUqrfJwIY2_U9YhGAW4xLIO8IoojQyY0uH8ssgg">
                    <input type="hidden" name="logintp" id="logintp" value="null">
<input type="hidden" name="encpw" id="encpw" value="">
<input type="hidden" name="enctp" id="enctp" value="1">
<input type="hidden" name="svctype" id="svctype" value="1">
<input type="hidden" name="smart_LEVEL" id="smart_LEVEL" value="1">
<input type="hidden" name="encnm" id="encnm" value="">
<input type="hidden" name="bvsd" id="bvsd" value="">
<input type="hidden" name="locale" id="locale" value="en_US">
<input type="hidden" name="chptchakey" id="chptchakey" value="8B3t3RpgK6LS4VWj">
<input type="hidden" name="captcha_type" id="captcha_type" value="receipt">
<input type="hidden" name="url" id="url" value="https://www.naver.com">
<input type="hidden" name="rcaptchakey" id="rcaptchakey" value="3eBZr4ACsG3cqh">


                    <ul class="panel_wrap">
                        <li class="panel_item" style="display: block;">
                            <div class="panel_inner" role="tabpanel" aria-controls="loinid">
                                <div class="message_wrap">
                                    <span class="message_text">Please enter the password and security code for your safety. </span>
                                </div>
                                <div class="id_pw_wrap">
                                    <div class="input_row" id="id_line">
                                        <div class="icon_cell" id="id_cell">
                                            <span class="icon_id">
                                                <span class="blind">Username</span>
                                            </span>
                                        </div>
                                        <input type="text" id="id" name="id" placeholder="Username" title="Username" class="input_text" maxlength="41" value="123rladusrb">
                                        <span role="button" class="btn_delete" id="id_clear" style="display: none;">
                                            <span class="icon_delete">
												<span class="blind">delete</span>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="input_row" id="pw_line">
                                        <div class="icon_cell" id="pw_cell">
                                            <span class="icon_pw">
                                                <span class="blind">Password</span>
                                            </span>
                                        </div>
                                        <input type="password" id="pw" name="pw" placeholder="Password" title="Password" class="input_text" maxlength="16">
                                        <span role="button" class="btn_delete" id="pw_clear" style="display: none;">
                                            <span class="icon_delete">
                                                <span class="blind">delete</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div class="captcha_wrap">
                                    <div id="rcapt"><p class="captcha_img_cover">
	<img id="captchaimg" src="data:image/png;base64,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" width="100%" height="100%" alt="캡차이미지" class="captcha_img">
</p>
<p class="captcha_desc" data-detect="note">This receipt is made virtually. Not a real receipt.</p>
<p class="captcha_message" id="captcha_info">What is the first number of the store's phone number?</p>
<div class="captcha_form">
	<div class="input_row" id="cap_line">
		<input type="text" id="captcha" name="captcha" placeholder="Code" title="Code" class="input_text" data-detect="code">
	</div>
	<div class="captcha_btn">
		<button type="button" id="reload" class="reload"><span class="blind">새로고침</span></button>
		<button type="button" id="voice" class="voice"><span class="blind">음성으로 전환</span></button>
	</div>
</div></div>
                                    <div id="rcapt_sound" class="captcha_wrap" style="display:none;">
                                        <div class="voice_box">
                                            <p class="icon_voice"></p>
                                            <p class="voice_text" id="audio_txt">Audio code is playing. (Playback after 3 start tones)</p>
                                        </div>
                                        <p class="captcha_desc">Playback after 3 start tones</p>
                                        <p class="captcha_message">Please enter the number you hear.</p>
                                        <div class="captcha_form">
                                            <div class="input_row" id="sound_line">
                                                <input type="text" id="chptcha" name="chptcha" placeholder="Code" title="Code" class="input_text">
                                            </div>
                                            <div class="captcha_btn">
                                                <button type="button" id="play_audio" class="reload"><span class="blind">새로고침</span></button>
                                                <button type="button" id="swap_captcha" class="image"><span class="blind">이미지로 전환</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <script type="text/javascript" charset="utf-8" src="https://rcaptcha.nid.naver.com/rcapt.js?key=3eBZr4ACsG3cqh&amp;svc=nid"></script>
                                </div>

                                <div class="login_keep_wrap" id="login_keep_wrap">
                                    <div class="keep_check">
                                        <input type="checkbox" id="keep" name="nvlong" class="input_keep" value="off">
                                        <label for="keep" class="keep_text">Stay Signed in</label>
                                    </div>
                                    <div class="ip_check">
                                        <a href="/login/ext/help_ip3.html" target="_blank" id="ipguide" title="IP Security"><span class="ip_text">IP Security</span></a>
                                        <span class="switch">
                                            <input type="checkbox" id="switch" class="switch_checkbox" value="off">
                                            <label for="switch" class="switch_btn">
                                                <span class="blind" id="switch_blind">on</span>
                                            </label>
                                        </span>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_capslock" style="display: none;">
                                    <div class="error_message">
                                        <p><strong>Caps Lock</strong> is on.</p>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="captcha_error_msg" style="display:none;">
                                    <div class="error_message" id="captcha_error_message">
                                        Please enter the Code.
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_empty_id" style="display: none;">
                                    <div class="error_message">
                                        Enter your <strong>username!</strong>
                                    </div>
                                </div>

                                <div class="login_error_wrap" id="err_empty_pw" style="display: none;">
                                    <div class="error_message">
                                        Enter your <strong>password!</strong>
                                    </div>
                                </div>
                                <div class="btn_login_wrap">
                                    <button type="submit" class="btn_login" id="log.login">
                                        <span class="btn_text">Sign in</span>
                                    </button>

                                </div>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            <ul class="find_wrap" id="find_wrap">
                <li><div class="find_text">Forgot your <a target="_blank" id="pwinquiry" href="https://nid.naver.com/user2/api/route?m=routePwInquiry&amp;lang=en_US" class="en_find_text">Password</a> or <a target="_blank" id="idinquiry" href="https://nid.naver.com/user2/api/route?m=routeIdInquiry&amp;lang=en_US" class="en_find_text">Username</a>?</div></li><li><a target="_blank" id="join" href="https://nid.naver.com/user2/V2Join?m=agree&amp;lang=en_US" class="en_find_text">Sign up</a></li>
            </ul>
            <div class="sns_cover">
                <ul class="sns_wrap">
                    <li><a href="/oauth/global/initSNS.nhn?idp_cd=facebook&amp;locale=en_US&amp;svctype=1&amp;postDataKey=&amp;url=https%3A%2F%2Fwww.naver.com" class="sns_item"><span class="sns_text">Facebook</span></a></li>
                    <li><a href="/oauth/global/initSNS.nhn?idp_cd=line&amp;locale=en_US&amp;svctype=1&amp;postDataKey=&amp;url=https%3A%2F%2Fwww.naver.com" class="sns_item"><span class="sns_text">Line</span></a></li>
                </ul>
            </div>
        </div>
        <!-- //content -->
    </div>

    <!-- footer -->
    <div class="footer">
        <div class="footer_inner">
            <div class="footer_copy">
                <a id="fot.naver" target="_blank" href="https://www.navercorp.com">
                    <span class="footer_logo"><span class="blind">네이버</span></span>
                </a>
                <span class="text">Copyright</span>
                <span class="corp">© NAVER Corp.</span>
                <span class="text">All Rights Reserved.</span>
            </div>
        </div>
    </div>

</div>
<input type="hidden" id="nid_buk" name="nid_buk" value="">
<input type="hidden" id="removeLink" name="removeLink" value="">
<input type="hidden" id="hide_util" name="hide_util" value="">
<input type="hidden" id="locale" name="locale" value="en_US">
<input type="hidden" id="session_keys" name="session_keys" value="">
<input type="hidden" id="ncaptchaSplit" name="ncaptchaSplit" value="none">
<input type="hidden" id="failUrl" name="failUrl" value="">
<input type="hidden" id="nclicks_nsc" name="nclicks_nsc" value="nid.login_en">
<input type="hidden" id="changeToSound" name="pw_error_msg" value="Audio Code">
<input type="hidden" id="changeToPicture" name="changeToPicture" value="Image Code">
<input type="hidden" id="ispopup" name="ispopup" value="false">
<script type="text/javascript" src="/login/js/bvsd.1.3.4.min.js"></script>
<script type="text/javascript" src="/login/js/v2/default/common_202105.js?v=20210813"></script>
<script type="text/javascript" src="/login/js/v2/default/rcaptcha.js?v=20210910"></script>
<div id="nv_stat" style="display:none;">60</div>


</body></html>`;

describe("Login", () => {
  jest.setTimeout(8000);
  it("Should publish `manual-otp-required` when manual otp is required", async () => {
    // given
    const module = ModuleFactory.create(page);
    const pageInteractor = module.pageInteractor;

    module.urlChanger.loginURL = "https://example.com";
    await module.urlChanger.moveToLoginURL();
    await page.setContent(loginHTML);

    await page.waitForSelector("#log\\.login");

    await page.evaluate((loginURL: string) => {
      // make login button to do nothing
      const loginButton = document.querySelector("#log\\.login");
      const root = document.querySelector("html");
      if (!(loginButton instanceof HTMLElement)) {
        return;
      }
      if (!(root instanceof HTMLElement)) {
        return;
      }

      loginButton.onclick = () => {
        window.location.href = loginURL; // to make sure that the page has reloaded
      };
    }, module.urlChanger.loginURL);
    await pageInteractor.login("id", "pw");
    await page.setContent(manualOTPHTML);

    // when
    const status = await pageInteractor.getLoginStatus();

    // then
    expect(status).toBe("manual-otp-required");
  });

  describe("Captcha Status", () => {
    it("Should return current imageData and question", async () => {
      // given
      const module = ModuleFactory.create(page);
      const pageInteractor = module.pageInteractor;

      module.urlChanger.loginURL = "https://example.com";
      await module.urlChanger.moveToLoginURL();
      await page.setContent(captchaLoginHTML);

      // when
      const status = await pageInteractor.getCaptchaStatus();

      // then
      expect(status).not.toBeNull();
      expect(status?.question).toBe(
        "What is the first number of the store's phone number?"
      );
    });
  });
});
