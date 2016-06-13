var url = 'https://pokeapi.co/api/v2/pokemon/'
//


var shows = {
    search: function(cb) {
        $.getJSON('http://api.eventful.com/json/events/search?c=music&app_key=jcP6d2QX9tSJ6CDg&keywords=childish+gambino&callback=?', cb);
        $.getJSON('htpp://api.eventful.com/json/events/search?&app_key=jcP6d2QX9tSJ6CDg&location=indianapolis&t=Today&within=10miles&callback=?')
    }
    };


function addDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;
   return (console.log(today));
}
function show_alert() {
    var oArgs = {
        app_key:"3hhFfg7ZVDLfRNQx",
        id: "20218701",
        page_size: 25 ,
    };
    EVDB.API.call("/events/get", oArgs, function(oData) {
        // Note: this relies on the custom toString() methods below
    });
}
function show_alert2() {
    var oArgs = {
        app_key: "3hhFfg7ZVDLfRNQx",
        q: "music",
        where: "San Diego",
        "date": "2013061000-2015062000",
        page_size: 5,
        sort_order: "popularity",
    };

    EVDB.API.call("/events/search", oArgs, function(oData) {
    });

}


$.get({
  url: url,
  success: addDate
});



$.get({
    url: url,
    success: show_alert
});


$.get({
    url: url,
    success: show_alert2()
});

