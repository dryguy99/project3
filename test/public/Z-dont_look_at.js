var newdata;
var index=0;
var Geo={};
var debugData;


              function caroselFunction(){
                $('.multi-item-carousel').carousel({
                  interval: false
                });
                $('.multi-item-carousel .item').each(function(){
                  var next = $(this).next();
                  if (!next.length) {
                    next = $(this).siblings(':first');
                  }
                  next.children(':first-child').clone().appendTo($(this));
                  if (next.next().length>0) {
                    next.next().children(':first-child').clone().appendTo($(this));
                  } else {
                    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
                  }
                });
              };

//////////////////////////////////////////WEATHER API///////////////////////////////////////////
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success);
}
else {
alert('Geolocation is not supported');
}

function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
      console.log(Geo.lat)
var key ="e37b6970552858ff";
var Weather = "http://api.wunderground.com/api/"+ key +"/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
      $.ajax({
      url : Weather,
      dataType : "jsonp",
      success : function(data) {
              console.log(data)
              var location =data['location']['city'];
              var temp = data['current_observation']['temp_f'];
              var img = data['current_observation']['icon_url'];
              var desc = data['current_observation']['weather'];
              var wind = data['current_observation']['wind_string'];
              $('#location').html(location);
              $('#temp').html(temp+"°");
              $('#desc').html(desc);
          }
     });
  }    
////////////////////////////////////////////END///////////////////////////////////////////////////
////////////////////////////////DISPLAY IMAGES FUNCTION///////////////////////////////////////////


$(document).ready(function(){


  $('#all-images').on('click', function(){


    $.get('/all').done(function(data){

          //console.log(data);

          var shirtsArray = data[0];

          var pantsArray  = data[1];

          var shoesArray  = data[2];

          console.log('shoesArray: ' + shoesArray[0].filename);

          for(var i = 0; i < shirtsArray.length; i++){

              (function(i){

                $.get('/uploads/' + shirtsArray[i].filename).done(function(imgData){

                    
                    console.log('i is ' + i);

              if(i===0){

                  $('#Carosel1')
                    .append('<div class="item active"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
              }
              else{

                   $('#Carosel1')
                    .append('<div class="item"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
                  }


              })


              })(i)


              };


              for(var j = 0; j < pantsArray.length; j++){

              (function(j){

                $.get('/uploads/' + pantsArray[j].filename).done(function(imgData){

                     console.log('j is ' + j);
                    
              if(j===0){

                  $('#Carosel2')
                    .append('<div class="item active"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
              }
              else{

                   $('#Carosel2')
                    .append('<div class="item"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
                  }

                  
              })


              })(j)


              };


              for(var k = 0; k < shoesArray.length; k++){

              (function(k){

                $.get('/uploads/' + shoesArray[k].filename).done(function(imgData){

                     console.log('k is ' + k);
                    
              if(k===0){

                  $('#Carosel3')
                    .append('<div class="item active"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
              }
              else{

                   $('#Carosel3')
                    .append('<div class="item"><div class="col-xs-4"><img src="data:image/jpeg;base64,'+imgData+'" class="img-responsive"></div></div>');
                  }

                  
              })


              })(k)


              };

              
          })


      setTimeout(caroselFunction, 500);

    })

  })


