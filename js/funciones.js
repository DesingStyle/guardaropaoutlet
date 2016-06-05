//non-HTML5 browsers
document.createElement("header" );
document.createElement("footer" );
document.createElement("section"); 
document.createElement("aside"  );
document.createElement("nav"    );
document.createElement("article"); 
document.createElement("hgroup" ); 
document.createElement("time"   );
// JavaScript Document
var h=0;
$(document).ready(function () {
//Cambio contenido menu vertical	
	$("body").on('click', '.c', function () {
	    $(".c").removeClass("seleccionado");
	    $(this).addClass("seleccionado");											 
		$(".llamarContenido").hide();
		var id = $(this).attr("tag");
		$("#"+id).slideDown();
		return false;
	});
/*llamar contenido*/
	$(function(){		
	$(".llamarContenido").hide();
	$(".llamarContenido").each(function(){ $(this).show();return false; });
	
	$("body").on('click','.c',function(){
			$(".section").hide();
			$(".c").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			var mostar =$(this).attr('tag');
			$(".section").each(function(){
				if($(this).attr('id')==mostar){$(this).slideDown('fast');return false;}
			});
			return false;
		});
	
	$("body").on('click','.c3',function(){
			$(".llamar").hide();
			$(".c3").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			var mostar =$(this).attr('tag');
			$(".llamar").each(function(){
				if($(this).attr('id')==mostar){$(this).slideDown('fast');return false;}
			});
			return false;
		});	
	$("body").on('click', '.c4', function () {
	    $(".c4").removeClass("seleccionado");
	    $(this).addClass("seleccionado");											 
		$(".llamar4").hide();
		var id = $(this).attr("tag");
		$("#"+id).show();
		return false;
	});
	$("body").on('click', '.c2', function () {
		var url = $(this).attr('tag');	
		$.ajax({url: url + '.html', beforeSend: function () { $("#capa").hide(); }, success: function (info) { $("#capa").empty().html(info).show(); }, cache: false });
	});
/* acordeon menu*/
	$(document).ready(function(event){
		$('dd').addClass('esconder');
		$('dl').on('click', 'dt', mostrarDetalles);
		$('dl').on('click', 'dt', esconderDetalles);
		function mostrarDetalles()
			{$(this).next().stop(true,true).slideDown(1000).siblings('dd').slideUp(800);}
		function esconderDetalles()
			{$(this).siblings('dd').slideUp(800).stop(true, true);}
	});
/* Menu horizontal*/
	$(document).ready(function(){		
		$("body").on('click','.menuH',function(){
			$(".menuH").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			$(".oculta").hide();
			var mostar =$(this).attr('tag');
			$(".oculta").each(function(){
				if($(this).attr('tag')==mostar){$(this).show();return false;}
			});
			return false;
		});
	});
	$("body").on('click', '.botonV', function () {
		$(".botonV").removeClass("seleccionado");
		$(this).addClass("seleccionado");											 
		$(".llamarContenido").hide();
		var id = $(this).attr("tag");
		$("#"+id).show();
		return false;
	});
/* Tabs*/
	$(document).ready(function(){		
		$("body").on('click','.tabs',function(){
			$(".tabs").removeClass('seleccionado');
			$(this).addClass('seleccionado');
			$(".tab").hide();
			var mostar =$(this).attr('tag');
			$(".tab").each(function(){
				if($(this).attr('tag')==mostar){$(this).show();return false;}
			});
			return false;
		});
	});
/*pesta�as*/
	$( "#tabs, #tabs1, #tabs2, #tabs3, #tabs4, #tabs5, #tabs6, #tabs7" ).tabs();
/*dialogo*/
	$( "#dialog" ).dialog({
		autoOpen: false, width: 250,
		buttons: [{text: "", click: function() {$( this ).dialog( "close" );}},{text: "", click: function() {$( this ).dialog( "close" );}}]
	});
//Tooltip
	$("#tooltip, #tooltip1, #tooltip2, #tooltip3, #tooltip4, #tooltip9").tooltip();
// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {$( "#dialog" ).dialog( "open" );event.preventDefault();});
/*acordeon*/
	$('.acordion').accordion({active: false,collapsible: true,heightStyle: "content" });});	
// transparencia	
	$(document).ready(function(){$("#lbBottom").css("opacity", 0.68);});
// Radio y Select
	$(".radio").hide();
	$('input[type="radio"]').click(function()
		{
			if($(this).val()){
			$(".radio").hide();
			$("#" + $(this).val()).show();
		}
	});
	$(".contselec").hide();				
	$("#_1, #_2, #_3, #_9").change(function(){
		$(".contselec").hide();
			$("#" + $(this).val()).show();
	});
});