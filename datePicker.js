$(document).ready(function() {
  var days = [ "S" , "M" , "T" , "W" , "Th" , "F" , "S"];
  var months = [ "January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
  var daysInMonth = [ 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ];
  var calender = $("input").click(function() {//function to create table
    var table = $("<table class = 'table'></table>");
    var thead = $("<thead></thead>");
    /* creating month and year columns in header row*/
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    //var th11 = $('<th')
    var th1 = $('<th>' + '<p class = "back" onclick = "prevMonth()" >' + "&lt" +  "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    var th2 = $('<th class = "month" colspan = "6"  >' + months[month] +  '</th>');
    var th3 = $('<th class = "year" colspan = "6">' + year + '</th>');
    var th4 = $('<th>' + '<p class = "next" onclick = "nextMonth()">' + "&gt" + "&nbsp" +   "&nbsp" +  "&nbsp" +  "&nbsp" + '</p>' + '</th>');
    var thead1 = $("<thead></thead>");
    //creating week columns..,(mon,tues...,)
    for( var i = 0 ; i < days.length ; i++ ) {
      var th = $('<th colspan = "2" class = "weeks">' + days[i] + '</th>');
      thead1.append(th);
    }
    thead.append(th1);
    thead.append(th2);
    thead.append(th3);
    thead.append(th4);
    table.append(thead);
    table.append(thead1);
    var table1 = $('<table class = "table table--bordered"></table>');
    $("#calender").append(table);
    $("#calender").append(table1);
    monthDays();
  });
  //function to display the days of the month
  monthDays = function() {
    var currentMonth = $(".month").html();
    var month = months.indexOf(currentMonth);
    var year = $(".year").html();
    leapYear();
    var firstDay = new Date(year , month , 1);
    var startDay = firstDay.getDay();
    var week = days[startDay];
    var day = days.indexOf(week);
    var temp = months.indexOf(month);
    //printing days of the month
    var date = 1;
    var tbody = $('<tbody></tbody>');
    var d = 0;
    var noOfRows = Math.ceil(daysInMonth[month]/7);
    if(startDay >= 5 && daysInMonth[month] > 30)
    noOfRows = noOfRows+1;
    for( rows = 0 ; rows < noOfRows ; rows++ ) {
      var tr = $('<tr></tr>');
      for( var col = 0 ; col < 7 ; col++ ) {
        var td = $('<td></td>');
        if( d < startDay ) {
          td.html("");
          d++;
        }
        else {
          td.html(date);
          date++;
          if( date > daysInMonth[month]+1)
          td.html("");
        }
        tr.append(td);
        tbody.append(tr);
        $(".table--bordered").html(tbody);
      }
    }
  };
  //function to find out the leap year
  leapYear = function() {
    var month = $(".month").html();
    var year = $(".year").html();
    var temp = months.indexOf(month);
    if(temp === 1) {
      if((year%4 === 0 || year%400 === 0) && year%100 !== 0) {
        daysInMonth[1] = 29;
      }
      else {
        daysInMonth[temp] = daysInMonth[temp];
      }
    }
  };
  //function to display the next month
  nextMonth = function() {
    var month = $(".month").html();
    var year = $(".year").html();
    var temp = months.indexOf(month);
    if( nextMonth ) {
      if( temp >= 11 ) {
        temp = 0;
        year++;
      }
      else {
        temp++;//incrementing the month
      }
    }
    $(".month").html(months[temp]).className = "month";
    var th2 = $(".year").html(year).className = "year";
    monthDays();
  };
  //function to display the previous month
  prevMonth = function() {
    var month = $(".month").html();
    var year = $(".year").html();
    var temp = months.indexOf(month);
    if( prevMonth ) {
      if(temp <= 0 ) {
        temp = 11;
        year--;
      }
      else {
        temp--;//decrementing the month
      }
    }
    $(".month").html(months[temp]).className = "month";
    var th2 = $(".year").html(year).className = "year";
    monthDays();
  };
  //function to select the date into input box
  selectDate = function() {
    $(".table--bordered tr td").click(function() {
      $("input").val($(".table--bordered tr td").html());
    });
  };
});
