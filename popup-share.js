$( document ).ready(function() {
    var bar = '';
    var sharelink = window.location.href;
    var socials = {
      	"email": {
    		"bootstrap":"warning",
    		"fa":"envelope",
    		"linkbase":"mailto:?Body="  		
    	},
      	"whatsapp": {
    		"bootstrap":"success",
    		"fa":"whatsapp",
    		"linkbase":"whatsapp://send?text="  		
    	},
    	"twitter": {
    		"bootstrap":"info",
    		"fa":"twitter-square",
    		"linkbase":"https://twitter.com/home?status="  		
    	},
      	"facebook": {
    		"bootstrap":"primary",
    		"fa":"facebook-square",
    		"linkbase":"https://www.facebook.com/sharer/sharer.php?u="  		
    	}
    };
    bar += '<div id="popup-share" style="display: none;"><div class="social-icons" style="text-align: center; font-weight: 300;"><ul style="list-style: none; margin: 0px 0px 5px 0px; padding: 2px; float: right;">' + '\n';

    for (var key in socials) {
    	bar += '<li style="display: inline-block; zoom: 1; *display: inline; vertical-align: middle;"><a href="' + socials[key].linkbase + sharelink + '" class="btn text-' + socials[key].bootstrap + '"><i class="fa fa-' + socials[key].fa + '"></i></a></li>';

    }
    bar += '</ul></div></div>' + '\n';

    $("body").append(bar);
    

$('.popper').popover({
  placement: 'right',
  container: 'body',
  html: true,
  content: function() {
    return document.getElementById('popup-share').innerHTML;

  }
});


});
