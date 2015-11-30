$(document).ready(function() {
  var date = new Date();
  var day = date.getDay();
  var year = date.getFullYear();
  var days = [ "S" , "M" , "T" , "W" , "Th" , "F" , "S"];
  var months = [ "January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
  var daysInMonth = [ 30 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ];
  var calender = $("input").click(function() {
    var table = $("<table></table>");
    var thead = $("<thead></thead>");
    /* creating month and year columns in header row*/
    var month = date.getMonth();
    var th1 = $('<th>' + '<p class = "back" onclick = "prevMonth()" >' + "&lt" +  "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    var th2 = $('<th class = "month" colspan = "3"  >' + months[month] +  '</th>');
    var th3 = $('<th class = "year" colspan = "3">' + year + '</th>');
    var th4 = $('<th>' + '<p class = "next" onclick = "nextMonth()">' + "&gt" + "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    thead.append(th1);
    thead.append(th2);
    thead.append(th3);
    thead.append(th4);
    var tbody = $("<tbody></tbody>");
    //creating week columns..,(mon,tues...,)
    for( var i = 0 ; i < days.length ; i++ ) {
      var th = $('<th>' + days[i] + '</th>');
      tbody.append(th);
    }
    var firstDay = new Date(year , month , 1);
    var startDay = firstDay.getDay();
    var week = days[startDay];
    //printing days of the month
    var day = 1;
    for( var rows = 0 ; rows < Math.ceil(daysInMonth[month]/7) ; rows++ ) {
      var tr = $('<tr></tr>');
      for( var col = 0 ; col < 7 ; col++ )
      {
        if( startDay === days.indexOf(week) ) {
          var td = $('<td>' + day + '</td>');
          tr.append(td);
          day++;
          if( day > daysInMonth[month] )
          break;
          else {
          var td1 = $('<td' + "" + '</td>');
          tr.append(td1);
        }
      }
      tbody.append(tr);
    }
  }
  table.append(thead);
  table.append(tbody);
  $(".grid__item").append(table);
});
nextMonth = function() {
  var month = $(".month").text();
  var temp = months.indexOf(month);
  if(nextMonth) {
    var next = months[temp] === "December" ? ( months[temp] = "January" , year = year+1 ) : months[temp] = months[temp+1];
  }
  $(".month").html(months[temp]).className = "month";
  var th2 = $(".year").html(year).className = "year";
};
prevMonth = function() {
  var month = $(".month").text();
  var temp = months.indexOf(month);
  if( prevMonth ) {
    if(months[temp] === "January" ) {
      months[temp] = "December";
      year = year-1;
    }
    else {
      months[temp] = months[temp-1];
    }
  }
  $(".month").html(months[temp]).className = "month";
  var th2 = $(".year").html(year).className = "year";
};
});
