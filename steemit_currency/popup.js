/*
    
var ss=$("#selection option:selected").text();
var ss=$("select#selection:selected").val();*/



/*var ss =$("#selection option:selected").value;
console.log(ss);*/


/*$('#selection').on('change', function() {
  alert( this.value );

})*/

 


/*function clickHandler(e) {
  setTimeout(awesomeTask, 1000);
}
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="selection"]').addEventListener('click', clickHandler);
  });

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else alert('You like ' + event.target.value + 'selection'); 
}
*/


  
/*var z=document.getElementById("selection");

console.log("Document z "+z);

if (z) {
	console.log(z);*/
//z.addEventListener("change", function(){
    //document.getElementById("selection").innerHTML = "Hello World";
   // console.log("clicked");
    var e = document.getElementById("selection").value;
     console.log(e);
	var value = e.options[e.selectedIndex].value;
    console.log("obtained value "+value);
//});



/* 
function findDay()
{
var eID = document.getElementById("daysCombo");
var dayVal = eID.options[eID.selectedIndex].value;
var daytxt = eID.options[eID.selectedIndex].text;
alert("Selected Item  " +  daytxt + ", Value " + dayVal);
}
 */





/*$(document).ready(function (){
	console.log("document loaded");
	chrome.tabs.getSelected(null,function(tab){
		var link =document.createElement('a');
		link.href = tab.url;
		var name = link.hostname;
		if(name=='steemit.com')
			$('#host').html("Steemit");
		else
			$('#host').html("Not Steemit");
	})
}); */


/*var e = document.getElementById('selection');
var strUser = e.options[e.selectedIndex].value;*/

/*var  e = document.getElementById (  "selection"  );
var  strUser = e.options[e.selectedIndex] .text;*/

/*chrome.storage.sync.set({'myval':value},function(){
	alert('success');
});*/
  
 