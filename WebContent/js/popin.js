/**
 * Popin : objet Popin pour la gestion de la boîte de dialogue
 * évènement "rst-popin-init : initalise l'objet Popin avec en passant un objet javascipt contenant le titre
 * évènement "rst-popin-open : ouvre une boîte de dialogue en passant un objet contenant un block (formulaire, div, ...) et un titre
 * @author: Alexandre Ghanem
 */

(function($) {
    function Popin() {
	var that    = this,
	    open    = false,
	    hasTag = false,
	    title   = '',
	    $popin  = null;
	
	this.init = function(objConfig) {
	    if ('title' in objConfig) {
		that.title   = objConfig.title;
	    }
	    that.addContent();
	}
	
	this.addContent = function() {
	    var $closeButton  = $('<div>').addClass('rst-popin-close').attr('data-toggle', 'rst-close-popin').html('X');
	    var $span         = $('<span>').html(that.title);
	    var $header       = $('<div>').addClass('rst-popin-header');
	    var $content      = $('<div>').addClass('rst-popin-content');
	    var $section      = $('<section>').addClass('rst-popin');
	    var $overlay      = $('<div>').addClass('overlay');
	    $header.append($span).append($closeButton);
	    that.$popin = $section.append($header).append($content);
	    $('.rst-wrapper').prepend(that.$popin);
	    $('body').append($overlay);
	}
	
	this.eventHandlers = function() {
	    $(document).on('rst-popin-init', function(event, obj) {
		    if (!obj) {
			obj = {};
		    }
		    that.init(obj);
	    })
	    $(document).on('rst-popin-open', function(event, obj) {
		if (obj && !that.hasTag) {
		    if ('title' in obj) {
			    that.$popin.find('.rst-popin-header').find('span').html(obj.title);
		    }
		    if ('tag' in obj && (obj.tag instanceof jQuery || 'jquery' in Object(obj.tag))) {
			    that.$popin.find('.rst-popin-content').append(obj.tag);
			    that.hasTag = true;
		    }
		}		
		that.show();
	    });
	    $(document).on('rst-popin-close', function(event) {
		that.hide();
	    });
	}

        this.show = function() {
            if(!that.open) {
        	$(document).trigger('rst-popin-before-open', [that.$popin]);
        	if (that.$popin && (that.$popin instanceof jQuery || 'jquery' in Object(that.$popin))) {        	    
        	    var left = $(window).scrollTop() + ($(window).width() - that.$popin.width()) / 2;
        	    that.$popin
        	    	.css('top', 0)
        	    	.css('left', Math.max(0, left))
        	    	.fadeIn();
        	    $('.overlay').fadeIn();
        	    that.open = true;  
        	}
        	$(document).trigger('rst-popin-after-open', [that.$popin]);
            }
        }
        
	this.hide = function () {
	    if(that.open) {
        	$(document).trigger('rst-popin-before-close', [that.$popin]);
        	if (that.$popin && (that.$popin instanceof jQuery || 'jquery' in Object(that.$popin))) {
        	    that.$popin.fadeOut();
        	    $('.overlay').fadeOut();
        	    that.open = false;            	    
        	}
        	$(document).trigger('rst-popin-after-close', [that.$popin]);
            }
	}	
	this.eventHandlers();
    }

    $(document).ready(function() {
	var popin = new Popin();
	
	$(document).trigger('rst-popin-init', {
	    title: 'La boîte de dialogue'
	});
	
	$(document).on('click', '[data-toggle=rst-close-popin]', function(event) {	
	    $(document).trigger('rst-popin-close');
	});
    });
}(jQuery));