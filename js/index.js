window.onload = function() {
                 try{

                     document.getElementById('pictures').focus();
                 }catch(err){

                 }

             }

document.getElementById('pictures');

var makeBSS = function (el, options) {
    var $slideshows = document.querySelectorAll(el), // a collection of all of the slideshow
        $slideshow = {},
        Slideshow = {
            init: function (el, options) {

                this.counter = 0; // to keep track of current slide
                this.el = el; // current slideshow container
                this.$items = el.querySelectorAll('figure'); // a collection of all of the slides, caching for performance
                this.numItems = this.$items.length; // total number of slides
                options = options || {}; // if options object not passed in, then set to empty object
                options.auto = options.auto || false; // if options.auto object not passed in, then set to false
                this.opts = {
                    auto: (typeof options.auto === "undefined") ? false : options.auto,
                    speed: (typeof options.auto.speed === "undefined") ? 1500 : options.auto.speed,
                    pauseOnHover: (typeof options.auto.pauseOnHover === "undefined") ? false : options.auto.pauseOnHover,
                    fullScreen: (typeof options.fullScreen === "undefined") ? false : options.fullScreen,
                    swipe: (typeof options.swipe === "undefined") ? false : options.swipe
                };

                this.$items[0].classList.add('bss-show'); // add show class to first figure
                this.injectControls(el);
                this.addEventListeners(el);
                if (this.opts.auto) {
                    this.autoCycle(this.el, this.opts.speed, this.opts.pauseOnHover);
                }
                if (this.opts.fullScreen) {
                    this.addFullScreen(this.el);
                }
                if (this.opts.swipe) {
                    this.addSwipe(this.el);
                }
            },
            showCurrent: function (i) {
                // increment or decrement this.counter depending on whether i === 1 or i === -1
                if (i > 0) {
                    this.counter = (this.counter + 1 === this.numItems) ? 0 : this.counter + 1;
                } else {
                    this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
                }
					var thisisthecount = (this.counter-1);

					console.log(thisisthecount);
					var playlist = [
   				 		'mp3s/PeopleSkills.mp3',
    					'mp3s/LifeSlices.mp3',
    					'mp3s/Blooper.mp3',
   						'mp3s/Simpson.mp3',
    					'mp3s/OnTheLip.mp3',
    					'mp3s/HoldMeSqueezeMe.mp3',
    					'mp3s/Cant.mp3',
    					'mp3s/EvenThoughWeAreBirds.mp3',
    					'mp3s/SmileMan.mp3',
  						];
  					var audio = $('#bvplayer');
  					var player = function(i){
    				var index = i;
   					var src = playlist[index];
    				audio.attr("src",src);
    				// audio.trigger('pause');
    				audio.trigger('play');
    				}
    				player(thisisthecount);
    				if(thisisthecount == -1){
    				audio.trigger('pause');
    				}

    				$('.bss-nextpic').click(function(){
					showCurrent(1);
					});

//					 var widgetIframe = document.getElementById('sc-widget'),
//        widget       = SC.Widget(widgetIframe);
//        			 if (thisisthecount > -1) {
//        			 widget.pause();
//        			 widget.seekTo(0);
//					 widget.skip(thisisthecount);
//					 widget.seekTo(0);
//					 widget.play();
//					 } else {
//					 widget.play();
//					 widget.pause();}
                    if(thisisthecount == -1){
                        $(document).attr('title', 'Smile Man');
                    }
                    if(thisisthecount == 0){
                        $(document).attr('title', 'People Skills');
                    }
                    if(thisisthecount == 1){
                        $(document).attr('title', 'Life Slices');
                    }
                    if(thisisthecount == 2){
                        $(document).attr('title', 'Blooper');
                    }
                    if(thisisthecount == 3){
                        $(document).attr('title', 'Simpson');
                    }
                    if(thisisthecount == 4){
                        $(document).attr('title', 'On The Lip');
                    }
                    if(thisisthecount == 5){
                        $(document).attr('title', 'Hold Me Squeeze Me');
                    }
                    if(thisisthecount == 6){
                        $(document).attr('title', 'Cant');
                    }
					if(thisisthecount == 7){
                        $(document).attr('title', 'Even Though We Are Birds');
					    $("#evenThough").addClass("fade");
				    }else{
					    $("#evenThough").removeClass("fade");
				    }
				    if(thisisthecount == 8){
                        $(document).attr('title', 'Smile Man');
                    }
                // remove .show from whichever element currently has it
                // http://stackoverflow.com/a/16053538/2006057
                [].forEach.call(this.$items, function (el) {
                    el.classList.remove('bss-show');
                });

                // add .show to the one item that's supposed to have it
                this.$items[this.counter].classList.add('bss-show');
            },
            injectControls: function (el) {
            // build and inject prev/next controls
                // first create all the new elements
                var spanPrev = document.createElement("span"),
                    spanNext = document.createElement("span"),
                    docFrag = document.createDocumentFragment();

                // add classes
                spanPrev.classList.add('bss-prev');
                spanNext.classList.add('bss-next');

                // add contents
                spanPrev.innerHTML = '&lsaquo;';
                spanNext.innerHTML = '&rsaquo;';

                // append elements to fragment, then append fragment to DOM
                docFrag.appendChild(spanPrev);
                docFrag.appendChild(spanNext);
                el.appendChild(docFrag);
            },
            addEventListeners: function (el) {
                var that = this;
                
                //el.querySelector('.bss-next').addEventListener('click', function () {
                //    that.showCurrent(1); // increment & show
                //}, false);
                 
                el.querySelector('.bss-nextpic-neg-1').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-0').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-1').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-2').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-3').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-4').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-5').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-6').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-7').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                el.querySelector('.bss-nextpic-8').addEventListener('click', function () {
                    that.showCurrent(1); // increment & show
                }, false);
                
                //el.querySelector('.bss-prev').addEventListener('click', function () {
                //    that.showCurrent(-1); // decrement & show
                //}, false);

                el.onkeydown = function (e) {
                    e = e || window.event;
                    if (e.keyCode === 37) {
                        that.showCurrent(-1); // decrement & show
                    } else if (e.keyCode === 39) {
                        that.showCurrent(1); // increment & show
                    }
                };
                var audio = $('#bvplayer');

 			    audio[0].addEventListener("ended", function(){
    		         that.showCurrent(1);
  			    });

//              var widgetIframe = document.getElementById('sc-widget'),
//              widget = SC.Widget(widgetIframe);
//              widget.bind(SC.Widget.Events.FINISH, function() {
//                  that.showCurrent(1);
//              });



            },
            autoCycle: function (el, speed, pauseOnHover) {
                var that = this,
                    interval = window.setInterval(function () {
                        that.showCurrent(1); // increment & show
                    }, speed);

                if (pauseOnHover) {
                    el.addEventListener('mouseover', function () {
                        interval = clearInterval(interval);
                    }, false);
                    el.addEventListener('mouseout', function () {
                        interval = window.setInterval(function () {
                            that.showCurrent(1); // increment & show
                        }, speed);
                    }, false);
                } // end pauseonhover

            },
            addFullScreen: function(el){
                var that = this,
                fsControl = document.createElement("span");

                fsControl.classList.add('bss-fullscreen');
                el.appendChild(fsControl);
                el.querySelector('.bss-fullscreen').addEventListener('click', function () {
                    that.toggleFullScreen(el);
                }, false);
            },
            addSwipe: function(el){
                var that = this,
                    ht = new Hammer(el);
                ht.on('swiperight', function(e) {
                    that.showCurrent(-1); // decrement & show
                });
                ht.on('swipeleft', function(e) {
                    that.showCurrent(1); // increment & show
                });
            },
            toggleFullScreen: function(el){
                // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                if (!document.fullscreenElement &&    // alternative standard method
                    !document.mozFullScreenElement && !document.webkitFullscreenElement &&
                    !document.msFullscreenElement ) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                      el.requestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                      el.msRequestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                      el.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                      el.webkitRequestFullscreen(el.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.exitFullscreen) {
                      document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                      document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                      document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                      document.webkitExitFullscreen();
                    }
                }
            } // end toggleFullScreen

        }; // end Slideshow object

    // make instances of Slideshow as needed
    [].forEach.call($slideshows, function (el) {
        $slideshow = Object.create(Slideshow);
        $slideshow.init(el, options);
    });
};
var opts = {
    auto : {
        speed : 500000000000,
        pauseOnHover : true
    },
    fullScreen : true,
    swipe : true
};

makeBSS('.demo1', opts);
