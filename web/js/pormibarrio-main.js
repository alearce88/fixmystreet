/*
 * pormibarrio-main.js
 * FixMyStreet JavaScript for PMB design
 */

//WIDTH SEARCH
var anchoVentana = $( window ).width();
var anchoUser = $("#info-user").width();
var anchoButtons = $("#stats-menu").width();
var anchoCalles = anchoVentana - anchoUser - anchoButtons - 20;
$("#stats-menu").css({right: anchoUser});
var listaCalles =  [];
$("#s-calles").width(anchoCalles);
	
//QUITAR BORDE AL ULTIMO BLOQUE DE COMENTARIO
$('.leave-comment').prev().css('border', 'none');
$('.leave-comment').prev('.imm-comment').css('borderBottom', '#ebebeb solid 1px');

//SCROLL EN EL LISTADO DE REPORTES		
var types = ['DOMMouseScroll', 'mousewheel', 'MozMousePixelScroll', 'wheel'];	
	
var tr = $( "#top-reports").height();	
$('.c-scroll').css({'height':(($(window).height())-tr)});	

$('div.scrolled').slimScroll({
	position: 'right',
	height: '80%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-88').slimScroll({
	position: 'right',
	height: '88%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-95').slimScroll({
	position: 'right',
	height: '95%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

$('div.scrolled-100').slimScroll({
	position: 'right',
	height: '100%',
	railVisible: true,
	alwaysVisible: true,
	railOpacity:1,
	distance:10,
	railColor: '',
	color: '#ACACAC',
	size:'9px',
	borderRadius:4,
	opacity: 1,
});

function dashCheck(){
	var dead_filter = $('input.deadline');
	dead_filter.each(function(){
		if ($(this).is(':checked')) {
			$('tr.'+$(this).val()).show();
		}
		if (!$(this).is(':checked')) {
			$('tr.'+$(this).val()).hide();
		}
	});
}


//SCROLL AL INGRESAR UN REPORTE
	$('div.scrolled-reportar').slimScroll({
		position: 'right',
		height: '95%',
		railVisible: true,
		alwaysVisible: true,
		railOpacity:1,
		distance:10,
		railColor: '',
		color: '#65788a',
		size:'9px',
		borderRadius:4,
		opacity: 1,
	});
		
$( document ).ready(function() {
	//SCROLL EN EL REPORTE
	height_val = '95%';
	if ($('.content').hasClass('content-vertical')){
		var height_val = '80%';

	}
	$('div.scrolled-report').slimScroll({
		position: 'right',
		height: height_val,
		railVisible: true,
		alwaysVisible: true,
		railOpacity:1,
		distance:10,
		railColor: '',
		color: '#ACACAC',
		size:'9px',
		borderRadius:4,
		opacity: 1,
	});
	
	$('a.pregunta').click(function(){
		var ref = this.href.split('#');
		console.log(ref[1]);
		$('div.scrolled-100').slimScroll({ scrollTo: $('#' + ref[1]).offset().top });
	});
	//MOSTRAR EL FORM DE REGISTRO
	$('.registrate').click(function(e){
		e.preventDefault();
		var regCont = $('.bloque-registro .form-group').first();
		$('#form_email').prependTo(regCont);
		$('div.bloque-registro').slideDown();
		$('div.bloque-sesion').slideUp();	
	});
	$('.registrate-back').click(function(e){
		e.preventDefault();
		var sesCont = $('.bloque-sesion .form-group')[1];
		$('#form_email').prependTo(sesCont);
		$('div.bloque-registro').slideUp();
		$('div.bloque-sesion').slideDown();	
	});
	$('.report-back').click(function(e){
		e.preventDefault();
		$('#side-form').hide();
	});
	$('.reports-back').click(function(e){
		e.preventDefault();
		$('#side').hide();
	});
	$('.btn-search').click(function(e){
		e.preventDefault();
		streetLocateSubmit('none');
	});
	//ACTIVAR SEGUIR REPORTE Y REPORTAR ABUSO
	$( ".follow-report" ).click(function() {
	  $( this ).toggleClass( "follow-report-active" );
	  $( '.reportar-abuso' ).removeClass( "reportar-abuso-active" );
	  $( '.reportar-hide' ).removeClass( "reportar-hide-active" );
	  $( '.follow-report-content' ).slideToggle();
	  $( '.reportar-abuso-content' ).slideUp();
	  $( '.reportar-hide-content' ).slideUp();
	});
	
	$( ".reportar-abuso" ).click(function() {
	  $( this ).toggleClass( "reportar-abuso-active" );
	  $( '.follow-report' ).removeClass( "follow-report-active" );
	  $( '.reportar-abuso-content' ).slideToggle();
	  $( '.follow-report-content' ).slideUp();
	});

	$( ".reportar-hide" ).click(function() {
	  $( this ).toggleClass( "reportar-hide-active" );
	  $( '.follow-report' ).removeClass( "follow-report-active" );
	  $( '.reportar-hide-content' ).slideToggle();
	  $( '.follow-report-content' ).slideUp();
	});
	//CORRER MAPA EN REPORTES
	if (typeof fixmystreet != 'undefined' && fixmystreet.page == 'report'){
		if ($('.content').hasClass('content-horizontal')){
			fixmystreet.map.pan(-150,0);
		}
		if ($('.content').hasClass('content-vertical')){
			fixmystreet.map.pan(150,70);
		}
		if ($(".Id-").length){
			$('.Id-')[1].setAttributeNS(null, 'width', 67);
			$('.Id-')[1].setAttributeNS(null, 'height', 69);
		}
	}
	//CARGAR IMAGEN
	$('.InputButton').bind("click" , function () {
        $('#InputFile').click();
    });
	
	$('.upload-img').bind("click" , function () {
        $('#InputFile').click();
    });

    //CHANGE PASSWORD
	$( "#change-passwd-btn" ).unbind('click').click(function() {
	  $( this ).toggleClass( "reportar-abuso-active" );
	  $( '#my-change-passwd' ).slideToggle();
	});

	//EDICION DE PERFIL
    $('#profile-edit').click(function() {
        $('#my').hide();
        $('#user-profile').show();
    });
    $('#edit-profile-cancel').click(function(e) {
    	e.preventDefault();
        document.location.href = '/my';
    });
    
    //FILTRO REPORTES EN PERFIL
    if ($('.content').hasClass('content-vertical')){
		$('#user-reports').hide();
		$('#tus-reportes').removeClass('.btn-filtro-active');
		$('#top-profile').height('100%');
		$('#user-reports').height('100%');
		$('#user-interactions').height('100%');

		$('.profile-back-reports').unbind('click').click(function(e){
			e.preventDefault();
			$('#top-profile').slideToggle();
			$( '#user-reports' ).slideDown();
		});

		$('.profile-back-interactions').unbind('click').click(function(e){
			e.preventDefault();
			$('#top-profile').slideToggle();
			$( '#user-interactions' ).slideDown();
		});
	}
    $( "#tus-reportes" ).unbind('click').click(function() {
    	if ($('.content').hasClass('content-vertical')){
    		$( '#user-reports' ).slideToggle();
	  		$( '#top-profile' ).slideUp();
    	}
    	else {
	        $( this ).addClass( "btn-filtro-active" );
	        $( "#siguiendo" ).removeClass( "btn-filtro-active" );
	        $('#user-interactions').hide();
	        $('#user-reports').show();
	    }
    });
    
    $( "#siguiendo" ).unbind('click').click(function() {
    	if ($('.content').hasClass('content-vertical')){
    		$( '#user-interactions' ).slideToggle();
	  		$( '#top-profile' ).slideUp();
    	}
        $( this ).addClass( "btn-filtro-active" );
        $( "#tus-reportes" ).removeClass( "btn-filtro-active" );
        $('#user-interactions').show();
        $('#user-reports').hide();
    });
    $( ".btn-filter" ).click(function() {
        $( ".btn-filter" ).removeClass( "btn-filtro-active" );
        $( this ).addClass( "btn-filtro-active" );
        $('.page-tabs').hide();
        $('#my-'+this.id).show();
    });
    //send one time
    $('.send-password').click(function(e){
		e.preventDefault();
		$('#send-password').slideToggle();
	});
	//Disable submits if terms agree
    if ( $("#terms-agree").length ){
    	$("input[type='submit']").attr("disabled", true);
    	$("button[type='submit']").attr("disabled", true);
    	$(".btn-social").attr("disabled", true);
    	//But suscribe to problems
    	$('#btn-suscribe').attr("disabled", false);
    	$('#key-tool-report-abuse').attr("disabled", false);
    	$('#key-tool-hide').attr("disabled", false);
	}
    //Terms and conditions
    $("#terms-agree").click(function() {
	  $("input[type='submit']").attr("disabled", !this.checked);
	  $("button[type='submit']").attr("disabled", !this.checked);
	  $(".btn-social").attr("disabled", !this.checked);
	});
	//DATE PICKERS
	if ( $('#stats-start-date').length ){
		$( "#stats-start-date" ).datepicker({
	      defaultDate: "-1w",
	      changeMonth: true,
	      dateFormat: 'yy-mm-dd' ,
	      // This sets the other fields minDate to our date
	      onClose: function( selectedDate ) {
	        $( "#stats-end-date" ).datepicker( "option", "minDate", selectedDate );
	      }
	    });
	    $( "#stats-end-date" ).datepicker({
	     /// defaultDate: "+1w",
	      changeMonth: true,
	      dateFormat: 'yy-mm-dd' ,
	      onClose: function( selectedDate ) {
	        $( "#stats-start-date" ).datepicker( "option", "maxDate", selectedDate );
	      }
	    });
	};
	//DASHBOARD
	$('input.deadline').click(dashCheck);
	var dead_filter = $('input.deadline');
	dead_filter.each(function(){
		if ($(this).is(':checked')) {
			$('tr.'+$(this).val()).show();
		}
		if (!$(this).is(':checked')) {
			$('tr.'+$(this).val()).hide();
		}
	});
});

/* FUNCIONES DE CAMBIO DE PIN PARA REPORTES EN MAPA */
//Funcionan como si tuviera solo 2 clases, la primera identifica el reporte y la segunda cambia la transición
function bigPIN(obj){
	if ( $( '.'+obj.id ).length ) {
		//var background_img = $('.'+obj.id)[0].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var img_url = $('.'+obj.id)[1].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var prevClassArr = $('.'+obj.id)[1].getAttributeNS(null, 'class').split(' ');
		$('.'+obj.id)[1].setAttributeNS(null, 'class', prevClassArr[0]+' show-icon');
		$('.'+obj.id)[1].setAttributeNS('http://www.w3.org/1999/xlink', 'href', img_url[0]+'-big.'+img_url[1]);
		//$($('.'+obj.id)[1]).animate({ top: '-=100px' }, 300, 'easeOutCirc', function(){
			var prev_x = $('.'+obj.id)[1].getAttributeNS(null, 'x');
			var prev_y = $('.'+obj.id)[1].getAttributeNS(null, 'y');
			$('.'+obj.id)[1].setAttributeNS(null, 'x', Number(prev_x) - 15);
			$('.'+obj.id)[1].setAttributeNS(null, 'y', Number(prev_y) - 33);
			$('.'+obj.id)[1].setAttributeNS(null, 'width', 67);
			$('.'+obj.id)[1].setAttributeNS(null, 'height', 69);
		//});
	}
}

function smallPIN(obj){
	if ( $( '.'+obj.id ).length ) {
		//var background_img = $('.'+obj.id)[0].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var img_url = $('.'+obj.id)[1].getAttributeNS('http://www.w3.org/1999/xlink', 'href').split('.');
		var prevClassArr = $('.'+obj.id)[1].getAttributeNS(null, 'class').split(' ');
		$('.'+obj.id)[1].setAttributeNS(null, 'class', prevClassArr[0]+' hide-icon');
		var base_url = img_url[0].split('-');
		base_url.pop();
		$('.'+obj.id)[1].setAttributeNS('http://www.w3.org/1999/xlink', 'href', base_url.join('-')+'.'+img_url[1]);
		//$($('.'+obj.id)[1]).animate({ top: '+=100px' }, 300, 'easeInCirc', function(){
			var prev_x = $('.'+obj.id)[1].getAttributeNS(null, 'x');
			var prev_y = $('.'+obj.id)[1].getAttributeNS(null, 'y');
			$('.'+obj.id)[1].setAttributeNS(null, 'x', Number(prev_x) + 15);
			$('.'+obj.id)[1].setAttributeNS(null, 'y', Number(prev_y) + 33);
			$('.'+obj.id)[1].setAttributeNS(null, 'width', 29);
			$('.'+obj.id)[1].setAttributeNS(null, 'height', 34);
		//});
	}
}
//MOSTRAR REPORTE
/*	$('div.it-r').click(function(){
		$('div.c-report').show();
	});
*/
function report(timeout, zoom){
	if (typeof fixmystreet != 'undefined'){
		switch (fixmystreet.page) {
			case 'around':
				$('#side-form').show();
				$('#side').hide();
				break;
			default:
				location.href = '/around?latitude='+fixmystreet.latitude+';longitude='+fixmystreet.longitude+'&zoom=4';
		}
	}
	else {

		geolocate(timeout, zoom);
	}
}

function report_list(timeout, zoom){
	if (typeof fixmystreet != 'undefined'){
		switch (fixmystreet.page) {
			case 'around':
				$('#side-form').hide();
				$('#side').show();
				break;
			case 'new':
				window.history.back();
				break;
			default:
				location.href = '/around?latitude='+fixmystreet.latitude+';longitude='+fixmystreet.longitude+'&zoom=2';
		}
	}
	else {
		geolocate(timeout, zoom);
	}
}

function searchLocationAjax(event, obj){
	//Letters, Caps and nums
	if ( (event.which > 64 && event.which < 91) || (event.which > 96 && event.which < 123) || (event.which > 47 && event.which < 58)) {
		if ( obj.value.length > 2 ){
			var items = "";
			var get = 0;
			$('ul.l-calles').empty();
			if (obj.id == 'esquina'){
				if (!isNaN(obj.value)){
					items += "<li id='" + obj.value + "' class='pick-street' onclick='streetLocate(this)' >" + obj.value + "</li>";
					$('ul.l-calles').empty();
					$(items).appendTo("ul.l-calles");
				}
				else {
					if ( ( listaCalles[1] != undefined ) && ( listaCalles[1].length > 1 ) && ( listaCalles[1][0] == obj.value.substring(0, listaCalles[1][0].length) ) ){
						//quitamos el primer termino y vemos el length
						listaCalles[1].shift();
						$.each( listaCalles[1], function( addr_key, addr_obj ) {
							if ( addr_obj.address.indexOf( obj.value.toUpperCase() ) >= 0){
								items += "<li id='" + addr_obj.lat + "' class='pick-street' onclick='streetLocate(this)' >" + addr_obj.address + "</li>";
							}
							else{
								listaCalles[0].splice(addr_key, 1);
							}
					  	});
					  	//agregamoe el término al comienzo
					  	listaCalles[1].splice(0, 0, obj.value);
						$('ul.l-calles').empty();
						$(items).appendTo("ul.l-calles");
					}
					else {
						var code = $('input#main-street-code');
						if ( !code.val() ){
							items = "<li class='pick-street-error'>Debe ingresar una calle primero</li>";
							$('ul.l-calles').empty();
							$(items).appendTo("ul.l-calles");
						}
						else{
							$('#esquina').css("background", "url(/cobrands/pormibarrio/images/Loading.gif) 25px 18px no-repeat");
							$.getJSON( "/ajax/geocode?term="+code.val()+','+obj.value, function( data ) {
								//vaciamos el array
								listaCalles[1] = [];
								listaCalles[1][0] = obj.value;
							  	$.each( data.locations, function( key, obj ) {
							    	items += "<li id='" + obj.lat + "' class='pick-street' onclick='streetLocate(this)' >" + obj.address + "</li>";
							    	listaCalles[1].push(obj);
							  	});
								$('ul.l-calles').empty();
								$(items).appendTo("ul.l-calles");
								$('#esquina').css("background", "url(/cobrands/pormibarrio/images/icon-search.png) 25px 18px no-repeat");
							});
						}
					}
				}
			}
			else {
				if ( ( listaCalles[0] != undefined ) && ( listaCalles[0].length > 1 ) && (listaCalles[0][0] == obj.value.substring(0, listaCalles[0][0].length) ) ){
					//quitamos el primer termino
					newList = [listaCalles[0].shift()];
					$.each( listaCalles[0], function( addr_key, addr_obj ) {
						if (  addr_obj != undefined && addr_obj.address.indexOf( obj.value.toUpperCase() ) >= 0){
							items += "<li id='" + addr_obj.lat + "' class='pick-street' onclick='assignStreetValue(this)' >" + addr_obj.address + "</li>";
							newList.push(addr_obj);
						}
				  	});
				  	//agregamos la nueva lista
				  	listaCalles[0] = newList;
					$('ul.l-calles').empty();
					$(items).appendTo("ul.l-calles");
				}
				else {
					$('#calle').css("background", "url(/cobrands/pormibarrio/images/Loading.gif) 25px 18px no-repeat");
					$.getJSON( "/ajax/geocode?term="+obj.value, function( data ) {
						listaCalles[0] = [];
						listaCalles[0][0] = obj.value;
					  	$.each( data.locations, function( key, obj ) {
					    	items += "<li id='" + obj.lat + "' class='pick-street' onclick='assignStreetValue(this)' >" + obj.address + "</li>";
					    	listaCalles[0].push(obj);
					  	});
						$('ul.l-calles').empty();
						$(items).appendTo("ul.l-calles");
						$('#calle').css("background", "url(/cobrands/pormibarrio/images/icon-search.png) 25px 18px no-repeat");
					});
				}
			}
		}
	}
}

function assignStreetValue(obj){
	$('input#calle').val($(obj).text());
	$('input#main-street-code').val(obj.id);
	$('ul.l-calles').empty();
}

function streetLocate(obj){
	$('input#esquina').val($(obj).text());
	$('input#second-street-code').val(obj.id);
	$('ul.l-calles').empty();
	if ( isNaN(obj.innerHTML) ){
		var url = "/ajax/geocode?term="+ $('input#main-street-code').val() +','+obj.id+',corner';
	}
	else {
		var url = "/ajax/geocode?term="+ $('input#main-street-code').val() +','+obj.id+',door';
	}
	streetLocateSubmit(url);
}
function streetLocateSubmit(url){
	if ( $('input#main-street-code').val() && $('input#second-street-code').val() ){
		if (url == 'none')
			url = "/ajax/geocode?term="+ $('input#main-street-code').val() +','+$('input#second-street-code').val()+', final';
		if (typeof fixmystreet != "undefined"){
			setTimeout(function(){fixmystreet.map.zoomTo(2)},500);
			$.getJSON( url, function( data ) {
				var latlon = utm2LatLong(data.latitude, data.longitude, '21H');
				var lonlat = new OpenLayers.LonLat(latlon[1], latlon[0]);
				lonlat.transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:900913"));
				fixmystreet.map.panTo(lonlat);
				setTimeout(function(){fixmystreet.map.zoomTo(3)},500);
			});
		}
		else{
			$.getJSON( url, function( data ) {
				var latlon = utm2LatLong(data.latitude, data.longitude, '21H');
				console.log(latlon);
				window.location.href = "/around?latitude="+latlon[0]+";longitude="+latlon[1]+"&zoom=3";
			});
		}

	}
	else {
		$('ul.l-calles').empty();
		if ( !$('input#main-street-code').val() ){
			$('input#calle').addClass('street-error');
			items = "<li class='pick-street-error'>Debe ingresar una calle primero</li>";
			$(items).appendTo("ul.l-calles");
		}
		if ( !$('input#second-street-code').val() ){
			$('input#esquina').addClass('street-error');
			items = "<li class='pick-street-error'>Debe ingresar una una esquina o número</li>";
			$(items).appendTo("ul.l-calles");
		}
	}
}

function geolocate(timeout, zoom){
	setTimeout(function(){location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom}, timeout);
	if (geo_position_js.init()) {
	    console.log('Va a init');
	    geo_position_js.getCurrentPosition(function(pos) {
	        console.log('Get current');
	        var latitude = pos.coords.latitude;
	        var longitude = pos.coords.longitude;
	        //Redirigimos si esta fuera de montevideo
	        if ( latitude < -35 || latitude > -34.6695163){
	            location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom;
	        }
	        else if (longitude > -56.168270 || longitude < -56.4350581){
	            location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom;
	        }
	        else {
	        	location.href = '/around?latitude=' + latitude + ';longitude=' + longitude + '&zoom=' + zoom;
	        }
	    }, 
	    function(err) {
	        console.log('Entra a err');
	        if (err.code == 1) { // User said no
	            location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom;
	        } 
	        else { 
	            location.href = '/around?latitude=-34.906557;longitude=-56.199769&zoom=' + zoom;
	        }
	    }, 
	    {
	        enableHighAccuracy: true,
	        timeout: 10000
	    });
	}
}

//RESPONSIVE TEXT
$('.responsive').responsiveText();

//ACTIONS

//ACCIONES EN LA BARRA LATERAL EN DESKTOP
(function() {

 	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function init() {

	
	//INGRESAR REPORTE
	/*$('li.reportar a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#add-report').addClass('open-side');
	});
	
	//LISTADO DE REPORTES
	$('li.reportes a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#report-list').addClass('open-side');
	});
	
	//VER PERFIL DE USUARIO
	$('li.profile a').click(function(){
		$('.open-side').removeClass('open-side');
		$('#user-profile').addClass('open-side');
	});
	*/
	
	
	//CONTRAER Y EXPANDIR BARRA AZUL
	$(".first-navigation").hover(
	  function () {
		$('.sub').addClass("side-active");
		$('.s-calles').addClass("s-calles-nav");
		$('ul.l-calles').addClass("l-calles-nav");
	  },
	  function () {
		$('.sub').removeClass("side-active");
		$('.s-calles').removeClass("s-calles-nav");
		$('ul.l-calles').removeClass("l-calles-nav");
	  }
	);	
	
	
	//MOVER EL DETALLE DE REPORTE AL HACER HOVER EN LA BARRA AZUL
	$(".first-navigation").hover(
	  function () {
		$('.report').addClass("report-medium");
		if ($('.content').hasClass('content-horizontal')){
			$('.content').addClass("content-aside");
		}
	  },
	  function () {
		$('.report').removeClass("report-medium");
		if ($('.content').hasClass('content-horizontal')){
			$('.content').removeClass("content-aside");
		}
	  }
	);

	}

	init();

})();

//REPORTAR EN PANTALLA CHICA
$(window).resize(function() {
	if ( $(window).width() < 780){
		if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
			$('#side').hide();
		}
		$('#fms_pan_zoom').css('top', "6.75em");
		$('.content').addClass('content-vertical');
		$('.content').removeClass('content-horizontal');
		$('div.como-funciona a').click(function(){
			$('#faq-list').hide();
			$('.first-navigation').hide();
			$('.top-container').hide();
		})
		$('div.c-respuestas span').click(function(){
			$('#faq-list').show();
			$('.first-navigation').show();
			$('.top-container').show();
		})
	}
	if ( $(window).width() >= 780){
		if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
			$('#side').show();
			$('#fms_pan_zoom').css('top', "1.75em");
		}
		$('.content').removeClass('content-vertical');
		$('.content').addClass('content-horizontal');
		$('div.como-funciona a').unbind("click");
		$('#faq-list').show();
		$('.first-navigation').show();
		$('.top-container').show();
	}
});

if ( $(window).width() < 780){
	if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
		$('#side').hide();
	}
	$('#fms_pan_zoom').css('top', "6.75em");
	$('.content').addClass('content-vertical');
	$('.content').removeClass('content-horizontal');
	$('div.como-funciona a').click(function(){
		$('#faq-list').hide();
		$('.first-navigation').hide();
		$('.top-container').hide();
	})
	$('div.c-respuestas span').click(function(){
		$('#faq-list').show();
		$('.first-navigation').show();
		$('.top-container').show();
	})
}
if ( $(window).width() >= 780){
	if ( typeof fixmystreet !== 'undefined' && fixmystreet.page == 'around' && (fixmystreet.zoom == 4 || fixmystreet.zoom == 3)){
		$('#side').show();
		$('#fms_pan_zoom').css('top', "1.75em");
	}
	$('.content').removeClass('content-vertical');
	$('.content').addClass('content-horizontal');
	$('div.como-funciona a').unbind("click");
	$('#faq-list').show();
	$('.first-navigation').show();
	$('.top-container').show();
}

//CATEGORIAS POR GRUPO
function form_category_group_onchange() {
	var group_id = $('#form_category_groups').val();
	
	if (group_id == '') {
		$('#form_category').prop( "disabled", true );
        $('#form_category').empty();
	} else {
		$('#form_category').prop( "disabled", false );
		$('#form_category').empty();

		var options = '';
		options += '<option value="">-- Selecciona una categoría --</option>';

		for (var i = 0; i < category_groups[group_id].length; i++) {
			options += '<option value="' + category_groups[group_id][i] + '">' + category_groups[group_id][i] + '</option>';
		}
		$("#form_category").html(options);

	}
}
