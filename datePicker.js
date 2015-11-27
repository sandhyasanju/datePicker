
var d = new Date();
var mn = d.getMonth();
var day = d.getDay();
var date = d.getDate();
var year = d.getFullYear();
var month = ["January" , "Febraury" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var day = ["m" , "t" , "w" , "th" , "f" , "sa" , "s"]

$(document).ready(function(){


$(".input").on("click" , function(){
      var table = $("<table class = 'table'></table>")
    var thead = $("<thead></thead>")
      var th = $('<th rowspan = "1" colspan = "7" id = "mnth">' + '<p onclick = "mnD('+mn+')" class= "p">' + "&lt" + "&nbsp" + '</p>' + month[mn] +  "&nbsp" + "&nbsp"+ "&nbsp"+ "&nbsp"+ year +'<p onclick = "mnI(' + mn + ')" class = "p">' + "&nbsp" +  "&nbsp" + "&gt" + "&nbsp" + '</p>' + '</th>');
  thead.append(th);
  var tbody = $("<tbody></tbody>")
for( var i = 0 ; i < day.length ; i++){
      var tr = $('<th>' + day[i] + '</th>');
        tbody.append(tr);}


    table.append(thead);
    table.append(tbody);
    $(".grid__item").append(table);

  });
});
 function mnD()
    {
      for(var i = mn ; i >=1;i--)
    {
        month[i] = month[i-1];
      }

    thead();
    if(i === 1)
    year = year-1;
    }
    function mnI(mnD)
    {
      for(var j = month.indexOf(currentM); j <=12;j++)
    {
      /*  month[j] = month[j+1];
        if(j===12){
          year = year+1

        }
  month[mn] = month[0];*/
      }
thead();

    }
    function thead(){
      $("thead").html($('<th rowspan = "1" colspan = "7" id = "mnth">' + '<p onclick = "mnD('+mn+')" class= "p">' + "&lt" + "&nbsp" + '</p>' + month[mn] +  "&nbsp" + "&nbsp"+ "&nbsp"+ "&nbsp"+ year +'<p onclick = "mnI(' + mn + ')" class = "p">' + "&nbsp" +  "&nbsp" + "&gt" + "&nbsp" + '</p>' + '</th>'));
    }


currentm = $("thead").text();

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
