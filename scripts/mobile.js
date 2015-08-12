var Karen = Karen || {};

/**
 * Mobile Class
 *
 * This class gives us the capability to announce messages.
 *
 * @module IIS
 * @class Saveonthefly
 * @constructor
 * @requires jQuery 1.7.1+ http://jquery.com/
 * @requires UnderscoreJS 1.3.3+ http://underscorejs.org/
 *
 */
Karen.Mobile = (function () {
  var _this = {
	  debug: false,
  
	  /**
	   * Property to hold the default options extended with the passed in options
	   *
	   * @property settings
	   * @type {Object}
	   */
  	settings: null,
  	
	  /**
	   * Property to hold default options
	   *
	   * @property defaults
	   * @type {Object}
	   */
	  defaults: {
		  current_index:1,
		  min_index:1,
		  max_index:4,
		  animation_run:false
	  },
	 	
	  init: function(options) {
		  _this.settings = _.extend(this.defaults, options);
		  console.log($(window).width());
		  $("#page_container").width($(window).width() * _this.settings.max_index + "px");
		  for(var i = _this.settings.min_index; i <= _this.settings.max_index; i++) {
			  $("#page" + i + "m").width($(window).width());
		  }
		  this.add_events();
		  this.animate_swipe_finger();
	  },
	  
	  add_events: function() {
		  console.log("addevents3");
		  //move to the right +1
		  $("body").hammer().on("swipeleft", function (event) {
		  	if(_this.settings.current_index < _this.settings.max_index) {
			  	$("#page" + _this.settings.current_index + "m").animate({width:"0%"}, 500);
			  	$("#page" + ++_this.settings.current_index + "m").animate({width:$(window).width()}, 500);
			  	console.log(_this.settings.current_index );
			  	if(_this.settings.current_index == 2 && !(_this.settings.animation_run)) {
				  	_this.animate_tap_animation();
				  	_this.settings.animation_run = true;
			  	}
			  	
			  	if(_this.settings.current_index !== 2) {
				  	$(".prices.color").css("opacity","0");
				  	$(".prices.cuts").css("opacity","0");
				  	$(".prices.style").css("opacity","0");
			  	}
		  	}
		  });
		  
		  //move to the left -1
		  $("body").hammer().on("swiperight", function (event) {
		  	if(_this.settings.current_index > _this.settings.min_index) {
			  	$("#page" + _this.settings.current_index + "m").animate({width:"0%"}, 500);
			  	$("#page" + --_this.settings.current_index + "m").animate({width:$(window).width()}, 500);

			  	if(_this.settings.current_index !== 2) {
				  	$(".prices.color").css("opacity","0");
				  	$(".prices.cuts").css("opacity","0");
				  	$(".prices.style").css("opacity","0");
			  	}
		  	}
		  });
		  
		  $(window).on("resize", function() {
			  console.log("RESIZE");
		  $("#page_container").width($(window).width() * _this.settings.max_index + "px");
  		  for(var i = _this.settings.min_index; i <= _this.settings.max_index; i++) {
				  $("#page" + i + "m").width($(window).width());
			  }
				_this.settings.current_index = 1;
		  });
		  
	  },
	  
	  animate_swipe_finger: function() {
	  	setTimeout(function() {
			  $("#swipe_notice").animate({"padding-right":"50%"}, 2000).animate({opacity:0},1000);
	  	}, 1500);
	  },
	  
	  animate_tap_animation: function() {
	  	setTimeout(function() {
	  		$("#tap_ani1")
	  		.animate({
	  			height: '+=10',
	  			left: "-=5",
	  			top: "-=5",
	  			width: '+=10',
				  opacity: 0.4
				}, 100)
	  		.animate({
	  			height: '+=40',
	  			left: "-=20",
	  			top: "-=20",
	  			width: '+=40',
				  opacity: 0
				}, 400);
		  	setTimeout(function() {$("#tap_ani1").css("display","none");},500);

	  		
	  	}, 550);
	  	setTimeout(function() {
	  		$("#tap_ani2")
	  		.animate({
	  			height: '+=10',
	  			left: "-=5",
	  			top: "-=5",
	  			width: '+=10',
				  opacity: 0.4
				}, 100)
	  		.animate({
	  			height: '+=40',
	  			left: "-=20",
	  			top: "-=20",
	  			width: '+=40',
				  opacity: 0
				}, 400);
		  	setTimeout(function() {$("#tap_ani2").css("display","none");},1000);
	  	}, 1000);
	  	setTimeout(function() {
	  		$("#tap_ani3")
	  		.animate({
	  			height: '+=10',
	  			left: "-=5",
	  			top: "-=5",
	  			width: '+=10',
				  opacity: 0.4
				}, 100)
	  		.animate({
	  			height: '+=40',
	  			left: "-=20",
	  			top: "-=20",
	  			width: '+=40',
				  opacity: 0
				}, 400);
		  	setTimeout(function() {$("#tap_ani3").css("display","none");},1550);
	  	}, 1550);
	  }
	}
	
  return _this;

});