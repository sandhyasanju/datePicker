/*
var d = new Date();
var month = d.getMonth();
var day = d.getDay();
var date = d.getDate();
var year = d.getFullYear();
var months = ["January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var day = ["m" , "t" , "w" , "th" , "f" , "sa" , "s"];

$(document).ready(function(){

$(".input").on("click" , function(){
      var table = $("<table class = 'table'></table>");
    var thead = $("<thead></thead>");
      var th = $('<th rowspan = "1" colspan = "7" id = "mnth">' + '<p onclick = "mnD()" class= "p">' + "&lt" + "&nbsp" + '</p>' + '<span class = "span">' + months[month] + '</span>' +  "&nbsp" + "&nbsp"+ "&nbsp"+ "&nbsp"+ year +'<p onclick = "mnI()" class = "p">' + "&nbsp" +  "&nbsp" + "&gt" + "&nbsp" + '</p>' + '</th>');
  thead.append(th);
  var tbody = $("<tbody></tbody>");
for( var i = 0 ; i < day.length ; i++){
      var tr = $('<th>' + day[i] + '</th>');
        tbody.append(tr);}


    table.append(thead);
    table.append(tbody);
    $(".grid__item").append(table);

  });
});
function thead(){
  $("thead").html($('<th rowspan = "1" colspan = "7" id = "mnth">' + '<p onclick = "mnD()" class= "p">' + "&lt" + "&nbsp" + '</p>' +'<span class = "span2">' + months[month] + '</span>' + "&nbsp" + "&nbsp"+ "&nbsp"+ "&nbsp"+ year +'<p onclick = "mnI()" class = "p">' + "&nbsp" +  "&nbsp" + "&gt" + "&nbsp" + '</p>' + '</th>'));
}
 function mnD()
    {
      var month = $(".span").text();
      var temp = months.indexOf(month);
      for(var i = temp; i >= 0; i--)
    {
        months[i] = months[i-1];
          console.log(i);
            thead();
      }
    }
    function mnI()
       {
         var month = $(".span2").text();
         var temp = months.indexOf("october");
         for(var i = temp; i <= 11 ; i++)
       {
           months[i] = months[i+1];
             console.log(month);
             console.log(temp);
               thead();
         }
       }

/*
function monthcheck() {
  var month = [ "January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
  for(var i = 1 ; i < 12 ; i++ )
  {
    var d = new Date();
    var y = d.getFullYear();
    var m = i;
    var x = new Date(y,m,0).getDate();
    console.log(x);
  }

}*/



/* java script starts here.., */
$(document).ready(function() {
  var date = new Date();
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear();
  var days = [ "S" , "M" , "T" , "W" , "Th" , "F" , "S"];
  var months = [ "January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
  var daysInMonth = [ 30 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ];
  var calender = $("input").click(function() {
    var table = $("<table></table>");
    var thead = $("<thead></thead>");
    /* creating d columns in header row*/
    var th1 = $('<th>' + '<p class = "back">' + "&lt" +  "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    var th2 = $('<th class = "month" colspan = "3">' + months[month] + "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</th>');
    var th3 = $('<th class = "year" colspan = "2">' + year + "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</th>');
    var th4 = $('<th>' + '<p class = "next">' + "&gt" + "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    thead.append(th1);
    thead.append(th2);
    thead.append(th3);
    thead.append(th4);
    var tbody = $("<tbody></tbody>");
    for( var i = 0 ; i < days.length ; i++ ) {
      var th = $('<th>' + days[i] + '</th>');
      tbody.append(th);
    }
    var firstDay = new Date(date.getFullYear() , date.getMonth() , 1);
    var startDay = firstDay.getDay();
    var week = days[startDay];
      var d= 1;
    for( var rows = 0 ; rows < Math.ceil(daysInMonth[month]/7) ; rows++ ) {
      var tr = $('<tr></tr>');
      for( var col = 0 ; col < 7 ; col++ )
      {
        if(startDay === days.indexOf(week)) {
          var td = $('<td>' + d + '</td>');
          tr.append(td);
          d++;
          if(d>daysInMonth[month])
          break;
        }
        else {
          var td1 = $('<td' + "" + '</td>');
          tr.append(td1);
        }
      }
        tbody.append(tr);
      }
    table.append(thead);
    table.append(tbody);
     $(".grid__item").append(table);
     var prevMonth = $(".back").click(function() {
       var month = $(".month").text();
       var temp = months.indexOf(month);
       var i;
       var monthD = function() {
       i =temp;

         months[i] = months[i-1];
         if(months[i] === months[-2]){
           year = year-1;
           temp = 12;

}
};
monthD();

       monthchange();
     });
     var nextMonth = $(".next").click(function() {
       var month = $(".month").text();
       var temp = months.indexOf(month);
       var i = temp;
         months[i] = months[i+1];
         if(months[i] === months[months.length]){
           year =year+1;
           i = months.indexOf("January");
         }
       monthchange();
     });
   function monthchange() {
     var th1 = $(".month").html(months[month]);
     var th2 = $(".year").html(year);
   }

  });
});
