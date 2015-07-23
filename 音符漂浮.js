$(function(){
	
	//自定义音符漂浮插件
	function show(elem,left,top,speed){
		$(elem).show()
		var index=0;
		var $indexDiv = $(elem).find("div")
		var num=$indexDiv.length;
		var timer=setInterval(function(){
			$indexDiv.eq(index).animate({"left":Math.ceil(Math.random()*left)+"px","top":-Math.ceil(Math.random()*top)+"px","opacity":"1"},speed,"swing")
			setTimeout(function(){
				$indexDiv.eq(index).animate({"left":"0px","top":"0px","opacity":"0"},0,"swing")	
			},300)
			index++;
			if(index==num){
				index=0;
			}
		},200)	
	}
	//调用音符插件
	show(".index01 b",600,230,2600)
		
})
