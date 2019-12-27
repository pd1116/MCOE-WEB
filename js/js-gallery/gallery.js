var pic = document.getElementsByClassName("pic"),
				gallery = document.getElementById("gallery"),
				back_btn = document.getElementById("back-btn"),
				content = document.getElementsByClassName(".content"),
				
				content_1 = document.getElementById("content-1"),
				content_2 = document.getElementById("content-2"),
				content_3 = document.getElementById("content-3"),
				
				content_1_height = content_1.offsetHeight,
				content_2_height = content_2.offsetHeight,
				content_3_height = content_3.offsetHeight;

setTimeout(function(){ 
	content_1.style.height = "0";
	content_2.style.height = "0";
	content_3.style.height = "0";
	
	console.log("Content 1 height: " + content_1_height);
	console.log("Content 2 height: " + content_2_height);
	console.log("Content 3 height: " + content_3_height);
}, 100);

for(i=0;i<pic.length;i++) {	
	pic[i].addEventListener("click", function(){
		
		var pic_clicked = this.getAttribute("id");
		
		for(i=0;i<pic.length;i++) {
			pic[i].classList.remove("selected");
		}
		
		switch(pic_clicked){
			case "1":
				content_1.style.height = content_1_height + "px";
				content_2.style.height = "0px";
				content_3.style.height = "0px";
				break;
			case "2": 
				content_1.style.height = "0px";
				content_2.style.height = content_1_height + "px";
				content_3.style.height = "0px";
				break;
			case "3": 
				content_1.style.height = "0px";
				content_2.style.height = "0px";
				content_3.style.height = content_1_height + "px";
				break;
		}
		
		this.classList.add("selected");
		gallery.classList.add("selected");
		back_btn.classList.add("active");
	});
}

back_btn.onclick = function(){
	 for(i=0;i<pic.length;i++) {
			 pic[i].classList.remove("selected");
		}
	
		content_1.style.height = "0px";
		content_2.style.height = "0px";
		content_3.style.height = "0px";
		
		this.classList.remove("selected");
		gallery.classList.remove("selected");
		back_btn.classList.remove("active");
}