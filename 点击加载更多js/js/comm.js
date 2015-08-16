/*document.oncontextmenu=new Function("event.returnValue=false"); 
document.onselectstart=new Function("event.returnValue=false");*/
$(function(){
	//首頁大焦點圖輪播
	$("#banner").slide({ titCell:".hd ul", mainCell:".bannershow ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });
	$("#banner .bannershow li").css({"background-repeat":"no-repeat","background-position":"center"})
	
	$("#menuBg .menu li").hover(function(){
		$(this).find(".jumpnav dd").stop(true,true).slideDown()	
	},function(){
		$("#menuBg .jumpnav dd").slideUp()	
	})	
	$(".h").hover(function(){
		$(this).find(".mask").show()
	},function(){
		$(".mask").hide()
	})
	
	var _pli = $(".plist li")
	var num = _pli.length
	for(i=0; i<num;i++){
		_pli.each(function(index) {
             _pli.find(".border").eq(index).css({"background":"url({IMG_PATH}l0"+index+".png)"})
        });
	}	
	
	var $list_cpimg = $(".list_cp").children("img")
	$list_cpimg.css({"width":"100%","height":"auto"})
	var url=$list_cpimg.attr("src")
	$list_cpimg.click(function(){
		window.open(url,"_blank")
	})
	
	$(".close").click(function(){
		$(".sp").hide(1000)	
	})
	
	$(".bicons .mask").css({"background-color":"rgba(0,0,0,0.7)","background-repeat":"no-repeat","background-position":"center","cursor":"pointer"})
	
	$(".bicons .mask").each(function() {
			var $clk=$(this)
			var link=$clk.attr("url")
			$clk.click(function(){
				window.open(link)  
				return false
			})
		});
		
	$(".plist li .circle .border").css({"background-repeat":"no-repeat","background-position":"center"})
	
	$("#ly input").eq(0).prop("placeholder","請輸入您的姓名")
	$("<b>+852</b>").css("margin","0 5px 0 0").insertBefore($("#ly input:eq(2)"))
	//$("<b>+852</b>").css("margin","0 5px 0 0").insertBefore($("#ly input:eq(3)"))
	$("#ly input:eq(2)").css("width","105px")
	$("#ly input").eq(3).prop("placeholder","請輸入您的地址")
	$("#ly textarea").prop("placeholder","請輸入您的服務要求")
	
	
})