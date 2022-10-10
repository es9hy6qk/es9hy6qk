// ----- x.canadiary.com btm js
// 
if (typeof ThsBlg_pg === 'undefined') {
	ThsBlg_pg = "";
}
if (ThsBlg_pg == 'mainpage' || ThsBlg_pg == 'itempage' || typeof siteSection === 'undefined') {
	siteSection = "mainsite";
}
thsBlg_amz = {
	// no empties!
	'com': 'cndr-20',
	'ca': 'cndrca-20',
	'co.uk': 'canadiary-21',
	'de': 'cndrde-21',
	'fr': 'cndrfr-21',
	'it': 'cndrit-21',
	'es': 'cndres-21'
};
thsBlg_amz_defKW = "canadian events";
thsBlg_epn = "5337817697"; // cndr epn?
thsBlg_dyn_catcher = "apps.canadiary.com/x/s/c2/";
thsBlg_img_cdn = "apps.canadiary.com/x/s/i/";
thsBlg_reportProductForm = '1FAIpQLSfMVyXMStWE7MLZVQV8rsXD7TaHRw6iwYxR4AcPwWtrNogblw'; // gd form
// 
//  
// 
////////////  MAINSITE(CITIES)   /////////////////////
if (siteSection == "mainsite") {
	// 
	// BDWRDS v2
	var bnndQry = "no";
	var notSafeQs = /(sex|xx|erot|penis|porn|\.com)/igm;
	var whtqry = document.title; // add more if req.
	whtqry = whtqry.replace(/\s+/igm, " ");
	if (whtqry.match(notSafeQs)) {
		bnndQry = "yes";
	}
	// /BDWRDS
	// 
	winWidth = Math.round((90 / 100) * $(window).width());
	winHeight = Math.round((90 / 100) * $(window).height());
	if (winWidth >= winHeight) {
		vidWidth = Math.round(winWidth * 75 / 100);
		vidHeight = Math.round(vidWidth * (9 / 16)); // 4:3  aspect
	} else {
		vidWidth = Math.round(winWidth);
		vidHeight = Math.round(vidWidth * (9 / 16)); // 4:3  aspect        
	}
	// 
	// 
	// 
	var url_array = new Array('www.canadiary.com', 'toronto.canadiary.com', 'montreal.canadiary.com', 'calgary.canadiary.com', 'ottawa.canadiary.com', 'edmonton.canadiary.com', 'mississauga.canadiary.com', 'winnipeg.canadiary.com', 'vancouver.canadiary.com', 'hamilton.canadiary.com', 'quebeccity.canadiary.com', '---L---');
	var cse_array = new Array('nphnqdxn9tw', 'kni0ljw18vq', 'eebc1qrbqcm', 'bzpchcdvktu', 'fg1llqeu0a4', '8jmjrsyy3hu', 'vmaklowv_o4', 'bcimmciajdq', 'gfapblwypx4', 'paj_apgjpqq', 'bcvm2atw_du', '---L---');
	var name_array = new Array('www', 'Toronto', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Mississauga', 'Winnipeg', 'Vancouver', 'Hamilton', 'QuebecCity', '---L---');
	var prov_array = new Array('www', 'Ontario', 'Quebec', 'Alberta', 'Ontario', 'Alberta', 'Ontario', 'Manitoba', 'British Columbia', 'Ontario', 'Quebec', '---L---');
	var hdimg_array = new Array('//3.bp.blogspot.com/_o1Mz1nvRygI/TERWzZzjrVI/AAAAAAAAABc/nxjrUxkqNjU/s1600/toronto.jpg', '//3.bp.blogspot.com/_o1Mz1nvRygI/TERWzZzjrVI/AAAAAAAAABc/nxjrUxkqNjU/s1600/toronto.jpg', '//3.bp.blogspot.com/_o1Mz1nvRygI/TERWzhGO8NI/AAAAAAAAABk/OgLnGS8_kN0/s1600/montreal.jpg', '//3.bp.blogspot.com/_o1Mz1nvRygI/TERWzzutt2I/AAAAAAAAABs/sxMZ5_QAGNg/s1600/calgary.jpg', '//4.bp.blogspot.com/_o1Mz1nvRygI/TERW0IwtIII/AAAAAAAAAB0/lXr7o-uQIpw/s1600/ottawa.jpg', '//1.bp.blogspot.com/_o1Mz1nvRygI/TERW0ky8AxI/AAAAAAAAAB8/NMZTBr_OTlg/s1600/edmonton.jpg', '//3.bp.blogspot.com/_o1Mz1nvRygI/TERXHVRLk-I/AAAAAAAAACE/OOsPSBSXsec/s1600/mississauga.jpg', '//4.bp.blogspot.com/_o1Mz1nvRygI/TERXHqjbqQI/AAAAAAAAACM/pdTjMKPCAhw/s1600/winnipeg.jpg', '//3.bp.blogspot.com/_o1Mz1nvRygI/TERXH131-uI/AAAAAAAAACU/28lGqxGUd20/s1600/vancouver.jpg', '//4.bp.blogspot.com/_o1Mz1nvRygI/TERXINo1DwI/AAAAAAAAACc/oqQzeFupZQQ/s1600/hamilton.jpg', '//1.bp.blogspot.com/_o1Mz1nvRygI/TERXIaDJxOI/AAAAAAAAACk/aU8kIEeVqiM/s1600/quebeccity.jpg', '---L---');
	//mapon
	var mapon_array = new Array('0', /*Can*/ '1', /*Tor*/ '1', /*Mon*/ '1', /*Cal*/ '1', /*Ott*/ '1', /*Edm*/ '1', /*Mis*/ '1', /*Win*/ '1', /*Van*/ '0', /*Ham*/ '1', /*Que*/ '---L---');
	var blgtkns_array = new Array('cd_homepage', 'cd_tor', 'cd_mon', 'cd_cal', 'cd_ott', 'cd_edm', 'cd_mis', 'cd_win', 'cd_van', 'cd_ham', 'cd_que', '---L---');
	var form_array = new Array('dEhpTTRtSnBZNm5Yekt5SlJZXzByc1E6MQ', 'dEhpTTRtSnBZNm5Yekt5SlJZXzByc1E6MQ', 'dG82MEpzR2o5VW1FU2cyZ2R3VlFoMEE6MA', 'dFEwbjRHNlF2UWhKZTFBUlIzRlQ3Y2c6MA', 'dEYwVERRa0ltRkdsM1pnMXlXSUw4X2c6MA', 'dFNseENVQlZXLV9OOFBOYUJ3X1B6QVE6MA', 'dGIySkhURHA5Q0F2b1lNNlNjb00zcmc6MA', 'dGVfNWdLeHRlSVhuUHZRekZJVjczdHc6MA', 'dGJlUlhzd0xTbGZNQWM5VkJrRVpOQVE6MA', 'dFVUU29tOTM2LWN6LXgxdE9PTjdfcHc6MA', 'dEQyZ2lEdEhUbXBwOUExX2VjZ1BNUXc6MA', '---L---');
	/*-ths-vars--*/
	var snpptquery = document.location.href;
	fullDomain = window.location.host;
	mydomainArray = fullDomain.split('.');
	mysubDomain = mydomainArray[0];
	for (snppti = 0; snppti < url_array.length; snppti++) {
		if (snpptquery.indexOf(url_array[snppti]) != -1) /*found*/ {
			if (name_array[snppti].length > 0) {
				this_name = name_array[snppti];
				this_prov = prov_array[snppti];
				this_url = url_array[snppti];
				this_form = form_array[snppti];
				this_mapon = mapon_array[snppti];
				this_blgtkn = blgtkns_array[snppti];
				this_cse = cse_array[snppti];
				this_hdimg = hdimg_array[snppti];
			} else {
				this_name = '&nbsp;';
			}
			var snpptfound = 1;
			break;
		}
	}
	// 
	ctData = {
		///// ctData to be in BOTH btm.js & /c/
		/// v3
		"cd_homepage": {
			"gdf": {
				"gd": "1FAIpQLSdN_j_QIv941u2xqs8q9Y_CZjI7ecDkJH-IXZZcLHBrRAQl3g",
				"gd1": "1000004",
				"gd2": "1000001",
				"gd3": "1000006"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "www",
			"tkn": ""
		},
		"cd_tor": {
			"gdf": {
				"gd": "1FAIpQLSdN_j_QIv941u2xqs8q9Y_CZjI7ecDkJH-IXZZcLHBrRAQl3g",
				"gd1": "1000004",
				"gd2": "1000001",
				"gd3": "1000006"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Toronto",
			"tkn": ""
		},
		"cd_mon": {
			"gdf": {
				"gd": "1FAIpQLSdJhywAwtwTLYqrf0GrW5F3WFtQcUNkoacyUHI7ZaDRSCqDJg",
				"gd1": "2060941",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Montreal",
			"tkn": ""
		},
		"cd_cal": {
			"gdf": {
				"gd": "1FAIpQLSdMe5Z_gW26x7Zl98zQyaTElEl0WHmLH6KuR3J68GzeaRzG2w",
				"gd1": "2739043",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Calgary",
			"tkn": ""
		},
		"cd_ott": {
			"gdf": {
				"gd": "1FAIpQLSeoR2xaO5yRQ8XGr9maDxiF92-k6vRbxbhOSqCJOAfKqpn1BQ",
				"gd1": "2521538",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Ottawa",
			"tkn": ""
		},
		"cd_edm": {
			"gdf": {
				"gd": "1FAIpQLSd7593vUCz0wIsmEzyJ9wf0NlYNF54kHoCaZkP7MyoFjIkOsw",
				"gd1": "2689508",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Edmonton",
			"tkn": ""
		},
		"cd_mis": {
			"gdf": {
				"gd": "1FAIpQLSeKX-FNo33w-ISH_uc5hb7hHkZDVnNTTx0RRV3YyHU70MR5-Q",
				"gd1": "2890903",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Mississauga",
			"tkn": ""
		},
		"cd_win": {
			"gdf": {
				"gd": "1FAIpQLSfnB4QYvKtTrsRiwYlwDdN8O3rOYU_M3fLTTRxHKu3lUx6NFA",
				"gd1": "2859685",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Winnipeg",
			"tkn": ""
		},
		"cd_van": {
			"gdf": {
				"gd": "1FAIpQLSepfTILG-ODtAAPzeqFjJFXrS8PR6FDnPX78VqfN6AwzMRh_g",
				"gd1": "2922365",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Vancouver",
			"tkn": ""
		},
		"cd_ham": {
			"gdf": {
				"gd": "1FAIpQLSe2gFlr4lcbkSXlhm1n83JDHaKLniGCTko_ZmPXUEdufeZk3Q",
				"gd1": "2251871",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "Hamilton",
			"tkn": ""
		},
		"cd_que": {
			"gdf": {
				"gd": "1FAIpQLSfmbCWZ6ptXMvrtSauX978cMgFngWRc-AgsefS1QaQTupBwmg",
				"gd1": "2869958",
				"gd2": "1000001",
				"gd3": "1000002"
			},
			"gdExtra": "",
			"dom": "",
			"prov": "",
			"mapOn": "",
			"cse": "",
			"hdimg": "",
			"img": "",
			"name": "QuebecCity",
			"tkn": ""
		},
		"dummy": {}
	};
	// 
}
// 
////////////  /MAINSITE(CITIES)   /////////////////////
// 
// 
// 
// ----- /VARS
function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}

function ldngPrgssBar() {
	///// v1 
	//// req bootstrap
	return '<div id="ldngPrgssBar"><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}

function ga_evCatVal(evCat, evVal) {
	// v2
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function amzNtv_sync(ad_mode, design, search_phrase, tracking_id, linkid, title, default_category) {
	// v2
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "4"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		// for text_links only
		adDesign +
		// for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}

function gCSE(cseId, divId, phText) {
	// v3  
	var placeholder = (typeof phText === 'undefined') ? "" : phText;
	// appnd BooStr-negating styles...
	$('head').append('<style> input.gsc-input, .gsc-input-box, .gsc-input-box-hover, .gsc-input-box-focus, .gsc-search-button { box-sizing: content-box; line-height: normal; } </style>');
	$('#' + divId).html('<div class="gcse-search"></div>');
	// v1  
	// 
	(function() {
		// cse call back
		window.__gcse = {
			callback: myCSECallback
		};

		function myCSECallback() {
			// console.log('EXECUTED');
			// rmve "Cstm srch" txt frm gcse input
			$('input.gsc-input').attr('placeholder', ' ' + placeholder);
		}
		var gcse = document.createElement('script');
		gcse.type = 'text/javascript';
		gcse.async = true;
		gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
			'//www.google.com/cse/cse.js?cx=' + cseId;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gcse, s);
	})();
}

function asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {}

function _asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	// v10 - bugfix
	if (!document.getElementById(divId)) {
		// 
	} else {
		var a = "";
		if (orient == "link") {
			a = "link"
		};
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "a") {
			a = "auto"
		};
		if (orient == "h") {
			a = "horizontal"
		};
		if (orient == "v") {
			a = "vertical"
		};
		if (orient == "r") {
			a = "rectangle"
		};
		if (orient == "rh") {
			a = "rectangle, horizontal"
		};
		if (orient == "rv") {
			a = "rectangle, vertical"
		};
		var divWidth = typeof divWidth !== 'undefined' ? divWidth : '100%';
		var divHeight = typeof divHeight !== 'undefined' ? divHeight : '100%';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { width: ' + divWidth + '; height:' + divHeight + '; }' +
				'</style>' +
				prefix +
				'<span style="display:block;max-width:' + divWidth + ';max-height:' + divHeight + '">' +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' style="display:block" ' +
				' data-ad-client="' + thsBlg_as + '" ' +
				' data-ad-slot="' + slot + '" ' +
				' data-ad-format="' + a + '"></ins> ' +
				'</span>' +
				postfix +
				'';
			(adsbygoogle = window.adsbygoogle || []).push({
					params: {
						google_ad_channel: channel
					}
				});
		} catch (e) {
			return true;
		}
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		//
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function appendHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforeend", html);
	}
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		//
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function mapSrc(size, address, city) {
	return 'https://maps.google.com/maps/api/staticmap?center=' + address + ' ' + city + '&amp;zoom=15&amp;size=' + size + '&amp;maptype=roadmap&amp;markers=color:red|color:red|label:C|' + address + ' ' + city + '&amp;sensor=false';
}

function limitWords(textToLimit, wordLimit) {
	var finalText = "";
	var text2 = textToLimit.replace(/\s+/g, ' ');
	var text3 = text2.split(' ');
	var numberOfWords = text3.length;
	var i = 0;
	if (numberOfWords > wordLimit) {
		for (i = 0; i < wordLimit; i++)
			finalText = finalText + " " + text3[i] + " ";
		return finalText + "...";
	} else return textToLimit;
}

function linkify(text) {
	/// first strip all <a 

	inputText = text;

	var replacedText, replacePattern1, replacePattern2, replacePattern3;
	//URLs starting with http://, https://, or ftp://
	replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
	replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
	//URLs starting with "www." (without // before it, or it'd re-link the ones done above).
	replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
	replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
	//Change email addresses to mailto:: links.
	replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
	replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
	return replacedText;
}

function addthis_async_append(divId, customUrlTitle, url, title) {
	// v1 , *APPENDS* TO divId, fully contained, no other code req.
	// e.g. addthis_async('divId', 'custom','http://asdf','title'); 
	// or addthis_async('divId', '','',''); 
	// divId: id,  customUrlTitle: 'custom' or 'default'
	// VARS TO SET
	var addthis_id = 'ra-5704cac34f0de5c0';
	//
	var html = '<div class="addthis_toolbox addthis_32x32_style" style=" "> ' +
		'<table><tr>' +
		// '<td> <a rel="nofollow" class="addthis_button_facebook"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_twitter"></a></td>' +
		// '<td> <a rel="nofollow" class="addthis_button_reddit"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_email"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_favorites"></a></td>' +
		'<td> <a rel="nofollow" class="addthis_button_expanded"></a></td>' +
		'</tr></table>' +
		'</div>';
	var addthis_config = addthis_config || {};
	addthis_config.pubid = addthis_id;
	// optional url, title, comment out to use page's
	if (customUrlTitle == "custom") {
		addthis_share = {
			url: url,
			title: title
		}
	}
	var addthisScript = document.createElement('script');
	addthisScript.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#domready=1');
	document.body.appendChild(addthisScript);
	document.getElementById(divId).insertAdjacentHTML("beforeend", html);
}

function disqusAsync(disqusId, divId) {
	// v3 - REQ JQRY
	var ds_loaded = false;
	try {
		var top = $("#" + divId).offset().top;
	} catch (e) {};

	function check() {
		if (!ds_loaded && $(window).scrollTop() + $(window).height() > top) {
			$.ajax({
				type: "GET",
				url: "https://" + disqusId + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			ds_loaded = true;
		}
	}
	$(window).scroll(check);
	check();
}
// 
// 
////////////  MAINSITE(CITIES)   /////////////////////
if (siteSection == "mainsite") {
	// 
	// ========== EXEC ============
	// resp 4684716642, linku 728: 0035355522,  resp linku: 6058764646
	// ----------- ALL ---------------
	// --- ALL DTP
	if (!detectmob()) {}
	//////// ALL MOB
	if (detectmob()) {}
	// //  // stickybottom  div on mob  
	// // 
	// ----------- MAINPAGE --------------
	if (ThsBlg_pg == 'mainpage') {
		// lu 1/2 
		/////////////// DTP MAINPAGE 
		if (!detectmob()) {}
		/////////////// DTP MOB
		if (detectmob()) {}
	}
	// ----------- ITEMPAGE --------------
	// AS ids  
	if (ThsBlg_pg == 'itempage') {
		///////// 
		////////  
		// 	
		$('h1').prepend(ldngPrgssBar());
		// 
		//// on all
		// 
		if (!detectmob()) {
			// ITEMPAGE DTP AD 1/1
			document.getElementsByClassName('container')[2].insertAdjacentHTML("afterbegin", '<div style="float:right;margin:20px 0 0 ' + viewport(5, 'vw') + 'px;width:' + viewport(25, 'vw') + 'px;___height:' + viewport(100, 'vh') + 'px;"><div id="rightbar"><div id="as_sb_T"></div><div id="as_sb_B"></div></div></div>');
			// 
			writeInnerHTML('as_sb_B', '<div style="text-align:center;margin:0 0 5px 0;"> <div id="itm_aff_1"></div> </div>');
			//  
		}
		// 
		if (detectmob()) {
			// 
			// 
		}
		// itempage DTP+MOB 
		$('.lead').after(
			/////////// report this item link
			'<hr/><div style="text-align:right; margin:-10px 0"><a style="font: normal 12px/1em Arial;" rel="nofollow" href="https://docs.google.com/forms/d/e/' + thsBlg_reportProductForm + '/viewform?usp=sf_link"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report this event</a></div><div style="clear:both;"></div> ' +
			///////// lu 
			'<hr/> <div style="margin:10px auto 20px"> <div class="row"><div class="col-sm-9"> <div id="as_lb1"></div> </div> <div class="col-sm-3"> <div id="as_lb2"></div> </div> </div> </div>  <hr/> <div style="width:90%;margin:0 auto;"><div id="itm_aff_1"></div> </div> ' +
			// 
			''
		);
	}
	// 
}
// 
////////////  /MAINSITE(CITIES)   /////////////////////
// 
/////////////////    DYN_CATCHER   ///////////////////
// 
if (siteSection == "dyn_catcher") {
	// 
	var keywords = (qs.contains("a")) ? qs.get("a") : thsBlg_amz_defKW;
	keywords = decodeURIComponent(keywords);
	if (qs.get("s") == "amz") {
		amzNtv_sync(
			'search', // ad_mode, 
			'grid', // design,  "text_links"||"grid"
			keywords, // search_phrase, 
			thsBlg_amz.com, // tracking_id, 
			'06483062a172ded549d69e1886790a34', // linkid, 
			'', // title, 
			'' // default_category
		);
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
// jq 
$(function() {
	////////////  MAINSITE(CITIES)   /////////////////////
	if (siteSection == "mainsite") {
		// ========= ALL BEFORE  =========
		// $('#add-event').click(function(event) {
		// 	event.preventDefault();
		// 	window.open('https://spreadsheets.google.com/viewform?formkey=' + this_form, "SubmitEvent", 'width=' + winWidth + ',height=' + winHeight + ',scrollbars=yes');
		// });
		// 
		// 
		function fdbk_openClose() {
			if (document.getElementById('fdbk_window')) {
				$('.fdbk_window').remove();
			} else {
				var dimn = (detectmob()) ? 80 : 70;
				$('body').append(
					'<div id="fdbk_window" class="fdbk_window" style="width:' + viewport(dimn, 'vw') + 'px;height:' + viewport(dimn, 'vh') + 'px;background-color:#aaa;position:fixed;left:50%;top:50%;margin-top:-' + (viewport(dimn, 'vh') / 2) + 'px;margin-left:-' + (viewport(dimn, 'vw') / 2) + 'px;outline:solid 3px #aaa;box-shadow:0 0 10px #000;" >' +
					'<div style="width:20px;height:20px;position:absolute;right:0;color:white;cursor:pointer;" id="fdbk_close"><img style="width:100%;height:100%" src="https://www.google.com/intl/en_us/mapfiles/close.gif"/></div>' +
					'<iframe style="height:100%;width:100%;overflow:hidden;display:block" src="https://apps.canadiary.com/x/s/c/?s=sbmtevnt&a=' + this_blgtkn + '" scrolling="no" frameborder="0" border="0" ></iframe>' +
					'<div>'
				);
				$("#fdbk_close").on('click', function() {
					$('.fdbk_window').remove();
					$('.fdbk_window').hide();
				});
			}
		}
		$("#add-event").on('click', function() {
			ga_evCatVal('sbmtevnt', 'inf_AddEvnt_btn: N:' + this_name);
			fdbk_openClose();
			// console.log('tada');
		});
		// 
		$('#add-event').after('<a target="_blank" class="navbar-brand"  href="https://twitter.com/canadiary"><img style="background:#eee;border:solid 2px #eee;height:1em;display:inline-block;vertical-align:middle;" src="https://4.bp.blogspot.com/-Mn-LDAPrbTw/VwP6Ugj64TI/AAAAAAAAAJw/O-lL69Lc9ugW5ExMI2kgqQf0YEum6v7tA/s1600/twitter.png" /></a> ' +
			// '<a target="_blank" class="navbar-brand"  href="https://www.facebook.com/pages/CanaDiary/118613358160788"><img style="background:#eee;border:solid 2px #eee;height:1em;display:inline-block;vertical-align:middle;" src="https://2.bp.blogspot.com/-JxeY3m6pd1c/VwP6Un_PwRI/AAAAAAAAAJ0/SLdwOnaf_0gr5gpLl8bGNFLntdgAtiFZg/s1600/facebook.png" /></a> ' +
			"");
		$('.mainpage h1 a, .itempage h2 a ').prepend(
			'<img id="hdimg" alt="" src="' + this_hdimg + '" />'
		);
		// 
		// ========= mainpage =========
		if (ThsBlg_pg == 'mainpage') {
			//
			$('.featurette').each(function(index) {
				var address = $(".addr", this).text();
				var shortDesc = $(".lead", this).text();
				var url = $(".featurette-heading a", this).attr("href");
				// console.log(url);
				shortDesc = shortDesc.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
				shortDesc = limitWords(shortDesc, 30);
				// console.log(shortDesc);
				$('.featurette-heading', this).after(
					// '<img class="featurette-image img-circle img-responsive pull-right" src="' + mapSrc('200x200', address, cd_city) + '">'
				);
				$(".featurette-image", this).wrap('<a href="' + url + '"/>');
				$(".lead", this).html(shortDesc);
			});
		}
		// ========= itempage =========
		if (ThsBlg_pg == 'itempage') {
			// $("#addthis_rec").html(addthis_async_append("addthis_rec", "default"));
		}
		//// both mainpage/item
		////////////
		//// remove our tags if they get inserted (does that in edmonton feeds!)
		/// CLEANUP TEXT
		$('.lead').each(function(index) {
			var a = $(this).html()
			a = a.replace(/(\[title\]|\[desc\]|\[date\])/igm, " | ");

			/// replace all emails with button
			a = a.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gim, ' <a role="button" class="btn btn-default btn-sm" href="mailto:$1"><span style="font-size:90%;margin:0 4px" class="glyphicon glyphicon-envelope" aria-hidden="true"></span>Email</a> ');

			/// replace all urls NOT in "" with button
			a = a.replace(/(\b[^"](https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|][^"])/gim, ' <a target="_blank" rel="nofollow" role="button" class="btn btn-default btn-sm" href="$1"><span style="font-size:90%;margin:0 4px" class="glyphicon glyphicon-new-window" aria-hidden="true"></span>Link</a> ');

			$(this).html(a);
			/// 

			//
			// hide emails

			//  
			//////////////
		});
	}
	////////////  /MAINSITE(CITIES)   /////////////////////
});
// ========= window on load ALL AFTER  =========
$(window).on("load", function() {
	////////////  MAINSITE(CITIES)   /////////////////////
	if (siteSection == "mainsite") {
		/////// ON ALL

		//////////
		// ALL MAINSITE DTP+MOB
		$('.container:eq(2)').prepend('<div style="width:90%;display:table;margin:10px auto;">  <div id="cd_gcse"></div>  </div>');
		gCSE('006235528321221562007:' + this_cse, 'cd_gcse', '');
		// 
		if (ThsBlg_pg == 'itempage') {
			// rec for loadlast divs
			$(".featurette:eq(0)").after('<div id="loadlastdiv"></div>');
			$('#loadlastdiv').append('<div id="disqus_thread"></div>');
			disqusAsync('canadiary', 'disqus_thread');
			$('#ldngPrgssBar').remove();
			// /DTP+MOB
		} // itempage
	} // mainsite 
	////////////  /MAINSITE(CITIES)   /////////////////////
});
//