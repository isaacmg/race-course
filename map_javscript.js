
    
function initialize() {

  // Arrays and crap 
  var arrayLocation = new Array(8);
  var markerArray = new Array();
  var icons = new Array();
  var visible = new Array();
  var infoContent = new Array();
  
  //Info Window Content 
  
  var greatWorksInfo = ' <h1> Great Works <h1> <h3> An overview </h3> <p> Great Works is one of the three large rapids on the Penobscot course. The rapid has many lines that vary in difficulty. Click on one of the markers to learn more about a specific line. </p> <div class="video-container"> <iframe width="640" height="360" src="https://www.youtube.com/embed/FdQ6TCmHE1I?rel=0" frameborder="0" allowfullscreen></iframe> </div>'; 
  var basinInfo = '<p> <h1> Basin Rapid </h1> <h3> An overview  </h3> <p> Basin Rapid is the second of the three large rapids on the Penobscot. <div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/9tbU6s_JLiQ?autoplay=1" frameborder="0" allowfullscreen></iframe> </div> <p>'; 
  var veazieInfo = '<p> <h1> Veazie Rapids </h1> </p> <h3> An Overview </h3> The Veazie rapids are a long (approximately 790 yard) section of whitewater and quick water. Please note that the Google Map is not an accurate depiction of the rapids as the dam was removed last year. More information coming soon! </p> <p> <div class="video-container"> <iframe width="640" height="480" src="https://www.youtube.com/embed/HbEdeET7nvE?rel=0" frameborder="0" allowfullscreen></iframe> </div></p> <img alt="Veazie Right Line" src="http://www.isaac26.com/uploads/veazieright.jpg" height="300" width="400"> </img>';
  var frenchInfo = '<p> <b> French Island Rapid </b> The first rapid on the race course. More information coming soon! <p>';
  var gRightInfo = '<p> <b> Great Works Right Lines </b> <p> The right lines are generally both bigger and tougher than the left lines. </p> <div class="video-container">  <iframe width="560" height="315" src="https://www.youtube.com/embed/AoxSLrcRPxc?rel=0" frameborder="0" allowfullscreen></iframe> </div>';
  var gCentInfo = '<p>  <b> Great Works Center Lines </b>  <p> <p> Coming soon!! </p> <p> If you have videos/photos/descriptions of the center lines please send them to igodfried@isaac26.com. You will be listed as the photo/video/description provider . </p>  ';
  var baseCent = '<p> <b> The Center Lines </b> </p>  <a target="_blank href="http://www.isaac26.com/uploads/cr.jpg"> <img src="http://www.isaac26.com/uploads/cr.jpg" height=224 width=300> </a> <div class="video-container"> <iframe width="390" height="219" src="https://www.youtube.com/embed/Wsr3nI0Crig?rel=0" frameborder="0" allowfullscreen></iframe> </div> <p>';
  var gLeftInfo = '<p> <div style="width: 100%; display: table;"> <div style="display: table-row">  <div style="width: 600px; display: table-cell;"> <b> The (main) Left Channel </b>    <a target="_blank" href="http://www.isaac26.com/uploads/leftside.jpg" > <img src="http://www.isaac26.com/uploads/leftside.jpg" height=225 width=300> </img>  </a>   </div> <div style="display: table-cell;">  <b> The far left channel  </b> <div>  <iframe width="350" height="198" src="https://www.youtube.com/embed/y0MflUM7vyE?rel=0&t=03s" frameborder="0" allowfullscreen></iframe></div> <div> The far left channel can generally be run at medium to high flows with some rock dodging and bracing (5+ ft on the Eddington gage). However, lower then 5ft and it becomes very difficult for larger boats to navigate down.     </div> </div> </div>  <p>';
  
  var baseRight = '<p> <div style="width: 100%; display: table;"> <div style="display: table-row">  <div style="width: 600px; display: table-cell;"> <b> The far right channel </b> <img src="http://www.isaac26.com/uploads/basinright.jpg" height=225 width=300 /> <img><div> The far right channel is in general too shallow and rocky to paddle down (flows 2-6ft on the Eddington gage). However, in the event of major rainstorm it could be a sneak route alternative (since the rest of the river would likely be very high).  </div></div> <div style="display: table-cell;"> <b> The Right Channel </b> <div class="video-container"> <iframe width="300" height="174" src="https://www.youtube.com/embed/cDeSv5ykPFg?rel=0" frameborder="0" allowfullscreen></iframe> </div> The main right channel provides many interesting lines that one can paddle at a variety of flows. The furthest right portion of the channel features a large wave train and a few holes (flow dependent). This line is generally quick and doable  at lower flows (as featured in the video above which was shot at approximately 2.7  on the Eddington gage). However as the river rises a very large wave/hole develops that would likely swamp a boat if hit directly. Further to the left are two smaller drops. These drops require maneuvering and bracing off of rocks at low water and at high water provide a good alternative to the large waves on the right.  <a target="_blank" href="http://www.isaac26.com/uploads/rightd.jpg" > <img src="http://www.isaac26.com/uploads/rightd.jpg" height=225 width=300> </a>      <div>  </div> </div> </div> </div>  <p>';
  var baseLeft = '<p> <b> The Center left </b> <b> Far left rapids </b> <p> <p> Coming soon! </p> <p> Do you have videos/photos/descriptions of the left and far left lines of Basin Rapid? Please send them to igodfried@isaac26.com. You will be credited.  </p>';
  var finishInfo = '<b> The finish/takeout </b> <p><img src="http://www.isaac26.com/uploads/salmon.jpg" height=225 width=300> </p> The finish and takeout for the downriver events is located (river left) at the Eddington Salmon Club in Eddington Maine.  <p>' 
  var startInfo = '<p> <b> The Start </b> </p> <img src="http://www.isaac26.com/uploads/bin1.jpg" height=225 width=300> </img> <img src="http://www.isaac26.com/uploads/bin2.jpg" height=225 width=300> </p> <p> Binnette  Park in Old Town Maine serves as both the start line and race headquarters. Here the Penobscot is relatively calm but just shortly downstream racers will encounter the first rapids.  </p> <a href="https://www.google.com/maps/dir//Binette+Park,+Old+Town,+ME/@44.9377334,-68.7209467,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4cafb0acfdc3f10f:0x4d81b1dbba0cd3ff!2m2!1d-68.6469577!2d44.9376358"> Get Directions </a> '
  if(screen.width <450 )
  { 
   veazieInfo = ' <div> <p> <h1> Veazie Rapids </h1> </p> <h3> An Overview </h3> The Veazie rapids are a long (approximately 790 yard) section of whitewater and quick water. Please note that the Google Map is not an accurate depiction of the rapids as the dam was removed last year. More information coming soon! </p> <p> <div class="video-container"> <iframe width="640" height="480" src="https://www.youtube.com/embed/HbEdeET7nvE?rel=0" frameborder="0" allowfullscreen></iframe> </div></p>  <div>  <img alt="Veazie Right Line" src="http://www.isaac26.com/uploads/veazieright.jpg" height="108" width="145"> </img> <p> The right channel </p> </div> </div>';

  startInfo = '<p> <b> The Start </b> </p> <img src="http://www.isaac26.com/uploads/bin1.jpg" height=108 width=145> </img> <img src="http://www.isaac26.com/uploads/bin2.jpg" height=108 width=145> </p> <p> Binnette  Park in Old Town Maine serves as both the start line and race headquarters. Here the Penobscot is relatively calm but just shortly downstream racers will encounter the first rapids.  </p>'
  baseRight = ' <div> <b> The far right channel </b> <img src="http://www.isaac26.com/uploads/basinright.jpg" height=108 width=145 /> <img><div> The far right channel is in general too shallow and rocky to paddle down (flows 2-6ft on the Eddington gage). However, in the event of major rainstorm it could be a sneak route alternative (since the rest of the river would likely be very high).  </div> <div> <b> The Right Channel </b> <iframe width="145" height="108" src="https://www.youtube.com/embed/cDeSv5ykPFg?rel=0" frameborder="0" allowfullscreen></iframe> The main right channel provides many interesting lines that one can paddle at a variety of flows. The furthest right portion of the channel features a large wave train and a few holes (flow dependent). This line is generally quick and doable  at lower flows (as featured in the video above which was shot at approximately 2.7  on the Eddington gage). However as the river rises a very large wave/hole develops that would likely swamp a boat if hit directly. Further to the left are two smaller drops. These drops require maneuvering and bracing off of rocks at low water and at high water provide a good alternative to the large waves on the right. <a target="_blank" href="http://www.isaac26.com/uploads/rightd.jpg" > <img src="http://www.isaac26.com/uploads/rightd.jpg" height=108 width=146> </a> </div> </div> '
  gLeftInfo = ' <div> <b> The (main) Left Channel </b>    <a target="_blank" href="http://www.isaac26.com/uploads/leftside.jpg" > <img src="http://www.isaac26.com/uploads/leftside.jpg" height=108 width=145> </img>  </a>   </div> <div>  <b> The far left channel  </b> <div>  <iframe width="145" height="108" src="https://www.youtube.com/embed/y0MflUM7vyE?rel=0&t=03s" frameborder="0" allowfullscreen></iframe></div> <div> The far left channel can generally be run at medium to high flows with some rock dodging and bracing (5+ ft on the Eddington gage). However, lower then 5ft and it becomes very difficult for larger boats to navigate down.     </div> '
finishInfo = '<b> The finish/takeout </b> <p><img src="http://www.isaac26.com/uploads/salmon.jpg" height=108 width=146> </p> The finish and takeout for the downriver events is located (river left) at the Eddington Salmon Club in Eddington Maine. In total the downriver  race course is approximately 9.4 miles. <p>' 
  
  }
  infoContent.push(startInfo); 
  infoContent.push(frenchInfo);
  infoContent.push(greatWorksInfo);     
   
  infoContent.push(gRightInfo);
  infoContent.push(gCentInfo);
  infoContent.push(gLeftInfo);
  infoContent.push(basinInfo);
  infoContent.push(baseCent);
  infoContent.push(baseLeft);
  infoContent.push(baseRight);
  infoContent.push(veazieInfo);
  infoContent.push(finishInfo);
  
  // Icon Array Fill
  icons.push('http://maps.google.com/mapfiles/kml/paddle/grn-circle.png');
  icons.push('http://maps.google.com/mapfiles/kml/paddle/blu-circle.png');
  icons.push('http://maps.google.com/mapfiles/kml/paddle/blu-circle.png');
  icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/kml/paddle/blu-circle.png');
   icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
  icons.push('http://maps.google.com/mapfiles/kml/paddle/blu-circle.png');
  icons.push('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
  //
  var myLatlng= new google.maps.LatLng(44.938038, -68.645933);
  arrayLocation[0] = new google.maps.LatLng(44.938038, -68.645933);
  arrayLocation[1] = new google.maps.LatLng(44.931582, -68.642256);
  arrayLocation[2] = new google.maps.LatLng(44.920074, -68.632338);
  arrayLocation[3] = new google.maps.LatLng(44.919951, -68.634031);
  arrayLocation[4] = new google.maps.LatLng(44.920325, -68.632908);
  arrayLocation[5] = new google.maps.LatLng(44.920649, -68.632124);
  arrayLocation[6] = new google.maps.LatLng(44.877434, -68.664455);
  arrayLocation[7] = new google.maps.LatLng(44.877861, -68.664859);
  arrayLocation[8] = new google.maps.LatLng(44.877357, -68.663599);
  arrayLocation[9] = new google.maps.LatLng(44.878041, -68.665381); 
  arrayLocation[10] = new google.maps.LatLng(44.832212, -68.700638);
  arrayLocation[11] = new google.maps.LatLng(44.824238, -68.693490);
  var newWindow = new google.maps.InfoWindow({
  content:basinInfo });
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
   mapTypeId: google.maps.MapTypeId.HYBRID 
  }
  
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

for(var i = 0; i<arrayLocation.length; i++)
 	{
 	  var marker5 = new google.maps.Marker({
      position: arrayLocation[i],
      map: map,   
      icon: icons[i]
  		});
  		markerArray.push(marker5);
    google.maps.event.addListener(marker5, 'click', (function(marker5, i) { return function() {
    map.setZoom(17);
	
    map.setCenter(arrayLocation[i]); 
    newWindow.setContent(infoContent[i]);
    newWindow.open(map,marker5);
  	}
     
}) (marker5, i));
}	
  google.maps.event.addListener(map, 'zoom_changed', function() {
var zoom = map.getZoom();
		if(zoom > 15 )
		{
		markerArray[2].setMap(null);
		markerArray[3].setMap(map);
        markerArray[4].setMap(map);
        markerArray[5].setMap(map);
        markerArray[6].setMap(null);
        markerArray[7].setMap(map);
        
       }
       else
       { 
       markerArray[2].setMap(map);
        markerArray[3].setMap(null);
        markerArray[4].setMap(null);
        markerArray[5].setMap(null);
        markerArray[6].setMap(map);
        markerArray[7].setMap(null);
        
       }
});
   var ham = "ham"; 
   var ham2 = "ham2";
   //Legend Stuff 
   var legend = document.createElement('div');
        legend.id = 'legend';
        var content = [];
        content.push('<p><a href="http://nationals.paddlesoft.net"> Updates </a> </p>');
		content.push('<a href="http://waterdata.usgs.gov/usa/nwis/uv?01036390"> Gage </a>');
	 	
		
		
         
        legend.innerHTML = content.join('');
        legend.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
      
  
}
google.maps.event.addDomListener(window, 'load', initialize);
     