/**
 *  Custom js  = entry point
 */

$(document).ready(function() {

    $(document).on('click', '[data-toggle=rst-show-account]', function(event) {
	var text = 'Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br> \
	    Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br> \
	    Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br> \
	    Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br> \
	    Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br> \
	    Lorem ipsum dolor sit amet <br> Consectetuer augue nibh lacus at <br> \
	    Pretium Donec felis dolor penatibus <br> Phasellus consequat Vivamus dui lacinia <br> \
	    Ornare nonummy laoreet lacus Donec <br> Ut ut libero Curabitur id <br> \
	    Dui pretium hendrerit sapien Pellentesque <br>';

	var $tag = $('<div>').html(text);
	$(document).trigger('rst-popin-open', {
	    title: 'Mon Compte',
	    tag: $tag
	});
	event.preventDefault();
    });
});