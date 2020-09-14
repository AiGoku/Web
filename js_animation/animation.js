function getStyle(el,property){
	if(getComputedStyle){
		return getComputedStyle(el)[property];
	}else{
		return el.currentStyle[property];
	}
}


function animation(el,properties){
	clearInterval(el.timerId);
	el.timerId =setInterval(function(){
		
		for(var property in properties){
			var current ;
		    var	target = properties[property];;
			
			if(property === "opacity"){
				current = Math.round(parseFloat(getStyle(el,"opacity"))*100);
			}else{
				current = parseInt(getStyle(el,property));
			}
			
			var speed = (target - current)/20;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(property==="opacity"){
				el.style.opacity = (speed + current)/100;
			}else{
				el.style[property] = speed + current + "px";
			}
		}
	},10);
}