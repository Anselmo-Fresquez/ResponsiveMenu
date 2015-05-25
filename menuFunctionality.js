function main() 
{
  createSelectMenu();
  createOptions();
  createButton();
}

function createSelectMenu()
{
  var $select = $("<select id=\"responsiveMenu\"></select>");
  $("#menu").append($select);
}

function createOptions()
{
  // for each <a> in #menu
  $("#menu a").each(function() 
  {
    addOptionToSelectMenu($("#responsiveMenu"), $(this).text(), $(this).attr("href"));
  });
}

function createButton()
{
  $("#menu").append("<button>Go</button>");
  $("button").click(function(){
    window.location = $("#responsiveMenu").val();
  });
}
    
function addOptionToSelectMenu(menu, option, href)
{
  $(menu).append("<option value=\""+href+"\">"+option+"</option>");
}
    








/* jQuirky weirdness hidden down below */
$(document).ready(main);