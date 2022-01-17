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
    expect(status).toBe("manual-otp-required");
  });
});
