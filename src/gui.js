/*
	gui.js
	Herein lie the GUI components to be used in POTENTAM LIMITATAM.
	
	Created for Ludum Dare 27 - 10 Seconds
	(c) Noah Muth 2013
*/

// a basic GUI window
Crafty.c('GUI_Window', {
	init: function() {
		this.requires('2D, Canvas, Color, Keyboard')
			.attr( {x: 128, y: 128, w: 640, h: 480 } )
			.color('rgb(50,50,200)');
		
		this.windowText = Crafty.e('2D, DOM, Text')
			.attr( { x: this.x+16, y: this.y+16 } )
			.text("TEST TEXT GOES ON FOR DAYS")
			.css($text_css);
		
		this.bind('EnterFrame', function(frameNumber) {
			if (this.isDown('SPACE')) {
				this.deconstruct();
			}
		})
	},
	
	setText: function(textIn) {
		this.windowText.text(textIn);
	},
	
	deconstruct: function() {
		this.windowText.destroy();
		this.destroy();
	}
});

// a tooltip is a very tiny GUI_Window that is usually spawned by mouseovers.
Crafty.c('Tooltip', {
	init: function() {
		this.requires('GUI_Window')
			.attr( { x: Crafty.mousePos.x, y: Crafty.mousePos.y, w: 246, h: 128 } );
		
		this.windowText.attr( { x: this.x+4, y: this.y+4 } );
		
		this.bind('EnterFrame', function(frameNumber) {
			this.attr( { x: Crafty.mousePos.x, y: Crafty.mousePos.y } );
			this.windowText.attr( { x: this.x+4, y: this.y+4 });
		});
	}
});