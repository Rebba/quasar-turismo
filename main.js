$(function() {
   $.getJSON("http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=24f17b5b-56eb-4dc2-bd98-436681712ef1&limit=50", function(data) {
       
       var $citycontainer = $(".containers");
       
    $.each(data.result.records, function (key,val) {
        
        var $rowcontainer = $( "<div class='row'></div>").appendTo($citycontainer);
        
        $rowcontainer.append( "<div class='col'>" + val["Provincia di destinazione"] + "</div>")
        
        $rowcontainer.append( "<div class='col'>" + val["Esercizi alberghieri - Arrivi"] + "</div>")
        
        $rowcontainer.append( "<div class='col'>" + val["Esercizi complementari - Arrivi"] + "</div>")

        console.log(data.result.records);
        
      });
   });
});



