window.onload = function(){
	var oStars = document.getElementById("stars");
	var oLab = document.getElementById("lab");
	var oPoint = document.getElementById("point");
	var aLabA = oLab.getElementsByTagName("a");
	var starsWidth = 8;   //���ǵĿ��
	var iStatic = false;  //�жϵ����û
	
	
	for(var i=0; i<aLabA.length; i++){
		aLabA[i].index = i+1;
		aLabA[i].onmouseover = function(){
			if(!iStatic){
				oStars.style.width = this.index*starsWidth + "px";
				oPoint.innerHTML = this.index/2;
			}
		}
		
		aLabA[i].onmouseout = function(){
			if(!iStatic){
				oStars.style.width = 0;
				oPoint.innerHTML = 0;
			}
		}
		
		aLabA[i].onclick = function(){
			if(!iStatic){
				oStars.style.width = this.index*starsWidth + "px";
				oPoint.innerHTML = this.index/2;
				iStatic = true;
			}
		}
	}
}