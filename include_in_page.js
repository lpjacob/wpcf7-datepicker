function delay_dtp_init(){
	//repeat call to add new listener to child 
	window.setTimeout(function(){
	  var list = document.getElementsByClassName("wpcf7-field-group-add");
	  for (var i=0, item; item = list[i]; i++) {
		  item.addEventListener("click",delay_dtp_init, true);
	  }
	},300)
	window.setTimeout(dtp_init,100);//set time delay to allow clone to be added before calling dtp_init() in date-picker
}
//first call trigger on page load 
window.setTimeout(function(){
  var list = document.getElementsByClassName("wpcf7-field-group-add");
  for (var i=0, item; item = list[i]; i++) {
    item.addEventListener("click",delay_dtp_init, true); //set true to allow listerer to be added in capturing phase
  }
},300) //set delay time to allow page to fully load
