/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * TERMS OF REPRODUCTION USE
 *
 * 1. Provide a link back to the original repository (this repository), as
 *     	in, https://github.com/Eddyjim/Plugbot, that is well-visible
 * 		wherever the source is being reproduced.  For example, should you
 * 		display it on a website, you should provide a link above/below that
 *		which the users use, titled something such as "ORIGINAL AUTHOR".
 *
 * 2. Retain these three comments:  the GNU GPL license statement, this comment,
 * 		and that below it, that details the author and purpose.
 *
 * Failure to follow these terms will result in me getting very angry at you
 * and having your software tweaked or removed if possible.  
 */
 
/*
 * @author  Edward Jimenez  <edward.jimenez.m@gmail.com>
 */

 
/*
 * Whether the user has currently enabled auto-woot.
 */
var autowoot;

var COOKIE_WOOT = 'autowoot';

/*
 * Color codes for the buttons in the UI.
 */
var BUTTON_ON = '#3fff00';
var BUTTON_OFF = '#ed1c24';


/**
 * Initialise all of the Plug.dj API listeners which we use to asynchronously intercept specific events and the data
 * attached with them.
 */
function initAPIListeners()
{
  /*
   * This listens in for whenever a new DJ starts playing.
   */
  API.on(API.DJ_ADVANCE, djAdvanced);


}


/**
 * Renders all of the Plug.bot "UI" that is visible beneath the video player.
 */
function displayUI()
{
  /*
   * Be sure to remove any old instance of the UI, in case the user reloads the script without refreshing the page
   * (updating.)
   */
  $('#plugbot-ui').remove();

  /*
   * Generate the HTML code for the UI.
   */
  $('#room').prepend('<div id="plugedd"></div>');


  var cWoot = autowoot ? BUTTON_ON : BUTTON_OFF;

  /*
   * Draw the UI.
   */
  $('#plugged').append('<div id="plugged-button">'+
		  					'<i class="icon icon-woot-enabled"></i>'+
		  					'<span class="">Auto-woot</span>'+
  						'</div>');
}


/**
 * The button for the autowwot
 */

function initUIListeners()
{

  /*
   * Toggle auto-woot.
   */
  $('#autowwot').on('click', function() {
    autowoot = !autowoot;
    $(this).css('color', autowoot ? BUTTON_ON : BUTTON_OFF);

    if (autowoot) {
      $('#woot').find('.top').click();
    }

    jaaulde.utils.cookies.set(COOKIE_WOOT, autowoot);
  });

}


/**
 * Called whenever a new DJ begins playing in the room.
 *
 * @param obj  This contains the current DJ's data.
 */
function djAdvanced(obj)
{
  if (autowoot) {
    $('#woot').find('.top').click();
  }

}

/*
 * Clear the old code so we can properly update everything.
 */

$('#plugedd-css').remove();
$('#plugedd-js').remove();


/*
 * Include cookie library.
 *
 * @note  We'll stick with the old-school JS way of doing this since jQuery
 *        doesn't support cookies by default, we'd need to also include a 
 *        a separate library which isn't something I want to do.
 */
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cookies.googlecode.com/svn/trunk/cookies.utils.jaaulde.js';
script.onreadystatechange = function() {
  if (this.readyState == 'complete') {
    readCookies();
  }
}
script.onload = readCookies;
head.appendChild(script);


/**
 * Read cookies when the library is loaded.
 */
function readCookies()
{
  /*
   * Changing default cookie settings.
   */
  var currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() + 1); // Cookies expire after 1 year
  var newOptions = {
    expiresAt: currentDate
  }
  jaaulde.utils.cookies.setOptions(newOptions);

  /*
   * Read Auto-Woot cookie (true by default)
   */
  var value = jaaulde.utils.cookies.get(COOKIE_WOOT);
  autowoot = value != null ? value : true;

  onCookiesLoaded();
}


/*
 * Write the CSS rules that are used for components of the
 * Plugged UI.
 */
$('body').prepend('<style type="text/css" id="plugged-css">'+
					'#plugged {'+ 
						'position: absolute; '+
						'margin-left: 1px; '+ 
					'}#plugged-button {'+
						'width: 295px; '+
						'height: 30px; '+
						'cursor: pointer; '+
						'width: 84px; '+
						
					'}#plugged-text { '+
						'width: auto; '+
						'font-size: 16px; '+
						'font-weight: bold; }'
					);


/**
 * Continue initialization after user's settings are loaded
 */
function onCookiesLoaded()
{
  /*
   * Hit the woot button, if autowoot is enabled.
   */
  if (autowoot) {
	  $('#woot').find('.top').click();
  }
  
  /*
   * Call all init functions to start the software up.
   */
  initAPIListeners();
  displayUI();
  initUIListeners();
}

