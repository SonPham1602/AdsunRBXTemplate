// Call the dataTables jQuery plugin


$(document).ready(function() {
  
  $.getJSON('../../tempData.json',function(json){
    console.log(json)
    $('#dataTable').DataTable({
      "data" : json,
      "columns" : [
          { "data" : "id" },
          { "data" : "firstName" },
          { "data" : "phone" },
          { "data" : "lastName" },
          { "data" : "state" },
          { "data" : "createTime" },
          { "data" : "createUser" },
        
      ]
  });
  })
});
