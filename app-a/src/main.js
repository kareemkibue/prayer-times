var setTimes = function( fajr, dhuhr, asr, maghrib, isha ) {
    document.getElementById( 'fajr-time' ).innerHTML = fajr;
    document.getElementById( 'dhuhr-time' ).innerHTML = dhuhr;
    document.getElementById( 'asr-time' ).innerHTML = asr;
    document.getElementById( 'maghrib-time' ).innerHTML = maghrib;
    document.getElementById( 'isha-time' ).innerHTML = isha;
}
setTimes( '0630', '1230', '1445', '1705', '1830' );

window.onload() = function() {

}





//ANIMATE FUNCTIONS
var slider = document.getElementById( "slider" ),
    el = document.querySelectorAll( "div.el" ),
    open = true;

/*window.onload = function(){
  //toggle();
}
slider.onclick = function(){   
  //toggle();
}*/

var toggle = function() {
    /*if (open==true){
      for (var i=0; i<el.length; i++){
        var classList = el[i].getAttribute('class');
        classList += ' close'
        el[i].setAttribute('class',classList);
      }
      open = false;
     }
    else{
      for (var i=0; i<el.length; i++){ 
        el[i].setAttribute('class','el');
      }
      open = true;
    }*/
}