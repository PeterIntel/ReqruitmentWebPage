$(function(){

    $("[aria-labelledby='dropdownMenuButton'] a").click(function(){
      $("#dropdownMenuButton").text($(this).text());
      $("#dropdownMenuButton").val($(this).text());
   });

});