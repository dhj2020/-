//自定义加载函数	
function getMore(elem,n,clkElem,tips){
	var _leg = $(elem).length
	
	//每次显示产品的个数
	var listNum = n  
	
	//分成num次显示
	var num = Math.ceil(_leg/listNum)
	  
	//页面默认显示12个产品
	$(elem).slice(0,listNum).show()
	
	//定义每次展示图片函数
	function showMore(index){
		for (i=0;i<index*listNum;i++){
			$(elem).eq(i).show()
		}
	}
	
	//因为第一次已默认显示，所以从第二次开始加载
	var j = 2
	$(clkElem).on("click",function(){
		showMore(j)			
		if(j==num){
			$(clkElem).html(tips)
		}
		j++
	})	
}


//调用加载函数
getMore(".products li",12,".more","產品已顯示完畢。。。")
