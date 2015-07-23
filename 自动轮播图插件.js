$(function(){
    //自定义轮播图插件
	function slideImgs(obgM,obgMli,leftclk,rightclk,swidth,autospeed,slidespeed){
		var iNow=0;
		var $imgbox = $(obgM)
		var $mask = $(".mask")
		var $imgli = $(obgMli)
		var iNum = $imgli.length
		
		//鼠标悬停
		$mask.hover(function(){
			if(autoPlay){
				clearInterval(autoPlay)
			}
		},function(){
			autoPlay =	setInterval(function(){
				tabImgs(iNow,swidth)
				iNow++
				if(iNow==iNum){
					iNow=0	
				}
			},autospeed)
		})
		
		//左按钮
		$(leftclk).click(function(){
			clearInterval(autoPlay)
			if(iNow<=0){
				iNow=iNum	
			}else{
				iNow--
				tabImgs(iNow,swidth)
			}
		})
		
		//右按钮
		$(rightclk).click(function(){
			clearInterval(autoPlay)
			if(iNow>=iNum-1){  
				iNow=0;  
			}else{  
				iNow++;  
				tabImgs(iNow,swidth);  
			} 
		})
		
		//自动播放
		var autoPlay = setInterval(function(){
			tabImgs(iNow,swidth)
			iNow++
			if(iNow==iNum){
				iNow=0	
			}
		},autospeed)	
		
		//切换图片
		function tabImgs(i,swidth){
			$imgbox.animate({"left":-i*swidth+"px"},slidespeed)
		}
	}
	//调用轮播插件
	slideImgs(".imgbox",".imgbox li",".prev",".next",980,3000,800)
})
