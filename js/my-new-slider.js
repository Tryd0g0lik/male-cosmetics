 /* We get resizes a window - start*/
    function reportWindowSize() { /* sizing  */
      var h = window.innerHeight;
      var w = window.innerWidth;
      console.log(h, w)
    }
    $(document).ready(
        // console.log(window.addEventListener('resize', reportWindowSize))/* We listening all events on the our page and when we get page resize the see sizes which need our */
     );
/* We get sizes a window - finish */

/* ******* start ******* */
function oneStyleValue(){
    /* We get the DOM element. From this large list, we chooes the one elenent and  take its style. Then we take the value of one of position */
    var elem0;
    elem0 = window.getComputedStyle(document.getElementsByClassName("clip-svg-1")[0]).getPropertyValue('display');
    // alert(elem0 + ' ' + typeof elem0);
    return elem0;


 };


// window.onload = (
    // function(){
        // let elem1 = oneStyleValue();
        // let s1 = elem1; /* We call the style value*/
        // alert(s1);
        // /* We input our the html-code in the html-code page site  */
        // let ourHtmlCode = '<svg class="svg-flag-1"> <rect class="svg-flag-content" width="41px" height="51px"></rect><image class="picture-flag-svg" xlink:href="/male-cosmetics/svg/flag.svg"></image></svg>'

        // alert('222');
        // if (console.log(elem1 == 'inline-block' && elem1 !== null)){
            // consol.log($('#content .flexslider ul.slides > li div.rating > div.hit-flag span.active, #content .flexslider ul.slides > li div.rating > div.hit-flag span.active::before').css('display', 'none') );
            // alert('333');
            // $('#content .flexslider ul.slides > li div.rating > div.hit-flag').prepend(elem1);
        // };
    // }
 // );
 // window.onload = ;



$(  function(){ /* top manu */

        $('menu').click(
            function(){
                $('.menu.top menu').toggleClass('OFf-menu');

            }


        );

    function animal(){
        $('favorite').animate({

            width: $('favorite').width() / 2,
            height: $('favorite').height() / 2
        }, 2000 );

        };

    }
);

$(
    $('#technical-data-filtr > li > div > ul > li > span:first-child').click(/* We open and close the filter by pressing on the  position title*/
        function(e){

            $(this).toggleClass('active-filtr-box')
            .parents('#technical-data-filtr > li > div > ul > li')
            .toggleClass('active-filtr-position')

        }
    )
);
$(
    /* We determin the user is using the enternet explorer */
    function(){
        var elem1 = oneStyleValue();
        if (elem1 != 'none') {



        $('.technical > div > div').click(
            function(){
                $(this).addClass('active-technical');



                if ($('.technical > div > div.active-technical h3').hasClass('active-filtr-h3') != 'True'){
                    // $('.technical > div > div > h3')
                    $('.technical > div > div.active-technical h3')
                    .addClass('active-filtr-h3') /* add the class active-filtr-h3*/
                    .parents('.technical > div > div.active-technical')

                    // $('div.active-technical svg.clip-svg-2').css({display: 'inline-block'})
                    $('div.active-technical svg.clip-svg-2').style.display = 'inline-block';

                    // $('div.active-technical svg.clip-svg-1').css({display: 'none'})
                    $('div.active-technical svg.clip-svg-1').style.display = 'none';
                    $('div.active-technical + ul')

                    .addClass('active-filtr')
                    $('.technical > div > div.active-technical + ul.active-filtr').css('display');  /* add the class active-filtr  */
                } else {

                    $(this)
                    .children('div.active-technical + ul.active-filtr').css() /* Dell list the under menu */
                    .removeClass('active-filtr') /* delete the class active-filtr */
                    // .parents('.technical > div')
                    $('div.active-technical svg.clip-svg-2').css();
                    console.log($('div.active-technical svg.clip-svg-1').css('display',''));
                    $('div.active-technical h3').removeClass('active-filtr-h3');  /* delete the class active-filtr-h3 */



            };
        });


    }}
);

     //We open and close the filter by pressing on the  position title "Price" - START
    function dell_css(){
        $('.technical div.filtr-title h3')
        .parents('.technical')
        .children(' .technical > div #filtr-form-range.active-filtr')
        .css('display', '')
        .removeClass('active-filtr');
    };

    function price_addclass(){
        $('.technical div.filtr-title h3')
        // alert('111')
        /* .toggleClass('active-filtr-h3') */
// alert('111333')
        .parents('.technical')
        // alert('222')
        .children('.technical #filtr-form-range')
        // alert('333')
        .toggleClass('active-filtr')
        // alert('444')
        .css('display', 'flex')};
    /* function new_tag_style(){
        $('.technical > *:first-child *:first-child h3')
        .addClass('active-filtr-h3')
        .parents('li.technical')
        .children('li.technical > *:nth-child(2)')
        .addClass('active-filtr')
        .css('display', 'flex')
    }; */
/*  function delite_new_tag_style(){
        $('.technical > *:first-child *:first-child h3')
        .removeClass('active-filtr-h3')
        .parents('li.technical')
        .children('li.technical > *:nth-child(2)')
        .removeClass('active-filtr')
        .removeAttr('style')
    };
 */ /* function price_addclass_2(){
        let vol = (document.getElementsByClassName('active-filtr-h3')).length
        // alert(vol)
        if (vol != 0){
            delite_new_tag_style()
            $('li.technical > div:nth-of-type(2)').removeAttr('style');
            }

        else{
            new_tag_style()
            $('li.technical > div:nth-of-type(2)').css('display', 'flex');
        }
    }; */


$( function(){
    $('li.technical > div:first-of-type > div:first-of-type h3').click(
        function(e){
            //console.log(e)
            //console.log(e.target)
            if (
            e.type == 'click',

            e.delegateTarget.className == 'active-filtr-h3'

            ){
                //console.log('11'),
                $(this)
                .removeClass('active-filtr-h3')
                .parents('li.technical > div')
                .children('li.technical > div > *:last-child')
                .removeClass('active-filtr')
                .removeAttr('style')
            }else{
                //console.log('22'),
                $(this)
                .addClass('active-filtr-h3')
                .parents('li.technical > div')
                .children('li.technical > div > *:last-child').addClass('active-filtr').css('display', 'flex')

            };
        }
    );
// Position title "Price"  - Finish






    $('.right').click(function(){
            // alert('Право удоляем');

            $('#slider1 ul').prepend($('li.s.favorite'));

            $('li.s').removeClass('favorite');

            $('li.s:last-child').addClass('favorite');
        }
    );

    $('submenu-link').click(
        function(){
            $(this).toggleClass('submenu-link');
            $('#menuTop > div > ul').add('overflow', 'visible');
        }
    );

    // We wrap in a tag span  our block div, he is submenu contains
    $('#submenu >span + div').wrapInner('<span>')
    $('nav a:last-child').wrapInner('<span>')
    $('nav a:last-child span').unwrap('nav a:last-child') // we changed the our the <var> last link, her content wrap into the tag span




    function topmenu_size_padding_from_submenu(){ /* We specify size padding-top before a submenu top border from a Topmenu down border  - START*/
        $('#submenu >span + div').css('padding-top', (((($('#menuTop > div').height()) - ($('#submenu > span').height())) / 2) ));
        $(window).resize( /*We resize a window brower and on submenu resize a top padding from dowm border top menu */
            function(){
                var h = $('#menuTop > div').height();
                var h_mini = $('#submenu > span').height();
                var h_padding_top = (h - h_mini) / 2;
                //$('#submenu >span + div').css('padding-top', ((h - h_mini) - h_padding_top ));
                $('.submenu-link').css('padding-top', ((h - h_mini) - h_padding_top ));
                console.log('padding-top', ((h - h_mini) - h_padding_top ));
        }
    )};

    let tag_topmenu_height = $('#menuTop > div').width();

    if(tag_topmenu_height >= 481){
        topmenu_size_padding_from_submenu();
    } else{
        $('#submenu >span + div').css('padding-top', (($('#submenu').height() - $('#submenu > span').height()) /2 ));
    };  /* Resize padding-top - FINISH*/


/* open and close the submenu - start */
    /* $('#submenu') */ /* We make the resize of the distance between the bottom border of the header and the border of the title content page */
    $('#submenu').mouseover(
        function(){
			var wind_windth = window.width();
			if (wind_windth > 481){
            $('#body.catalog div#content').css('padding-top', '300px');
			}
    }
    );
    $('#submenu').mouseout(
        function(){
            $('#body.catalog div#content').css('padding-top', 'inherit')
    }
    );

    $('#submenu').click( /*We open and close the submenu when pressing on the button
- START*/
        function(){
            var class_open_menu = document.getElementsByClassName('submenu-link open_menu');


            if (class_open_menu.length >= 1){

                    $('#submenu > span + div.open_menu, #submenu:hover >span + div.open_menu').removeClass('open_menu');

                } else {
                    $('#submenu > span + div').addClass('open_menu');
                }
        }

    )
    $('#submenu').mouseout(
        function(){
            var class_open_menu = document.getElementsByClassName('submenu-link open_menu');


            if (class_open_menu.length >= 1){

                    $('#submenu > span + div.open_menu').removeClass('open_menu');



                }
        }
    );
/*open and close the submenu  - FINISH*/




/* page mail - start */
    function animal(){
        $('favorite').animate({

            width: $('favorite').width() / 2,
            height: $('favorite').height() / 2
        }, 2000 );

        };

    $('.right').click(function(){
            // alert('Право удоляем');

            $('#slider1 ul').prepend($('li.s.favorite'));

            $('li.s').removeClass('favorite');

            $('li.s:last-child').addClass('favorite');
        }
    );

    $('.left').click(function(){
            // alert('Лево удоляем');


            $('#slider1 ul').append($('li.s.favorite'));
            // $('#slider1 ul').append($('li.s.favorite'));
            $('li.s').removeClass('favorite');
            // alert('удалили');
            // alert('Добавляем');
            $('li.s:first-child').addClass('favorite');
            // alert('Добавили');
        }
    );


    /* We wrap in a tag span  our block div, he is submenu contains */
    $('#submenu >span + div').wrapInner('<span>')
    $('nav a:last-child').wrapInner('<span>')
    $('nav a:last-child span').unwrap('nav a:last-child') /* we changed the our the <var> last link, her content wrap into the tag span */


    function topmenu_size_padding_from_submenu(){ /* We specify size padding-top before a submenu top border from a Topmenu down border  - START*/
        $('#submenu >span + div').css('padding-top', (((($('#menuTop > div').height()) - ($('#submenu > span').height())) / 2) ));
        $(window).resize( /*We resize a window brower and on submenu resize a top padding from dowm border top menu */
            function(){
                var h = $('#menuTop > div').height();
                var h_mini = $('#submenu > span').height();
                var h_padding_top = (h - h_mini) / 2;
                $('#submenu >span + div').css('padding-top', ((h - h_mini) - h_padding_top ));

        }
    )};

    /* Resize padding-top - FINISH*/

    $('#submenu').click( /*We open and close the submenu when pressing on the button
- START*/
        function(){
            var class_open_menu = document.getElementsByClassName('submenu-link open_menu');


            if (class_open_menu.length >= 1){

                    $('#submenu > span + div.open_menu').removeClass('open_menu');

                } else {
                    $('#submenu > span + div').addClass('open_menu');
                }
        }

    );


    //$('#menuTop > div > ul').css('overflow', 'hidden');

    $('#submenu').mouseout(
        function(){
            var class_open_menu = document.getElementsByClassName('submenu-link open_menu');


            if (class_open_menu.length >= 1){

                    $('#submenu > span + div.open_menu').removeClass('open_menu');



                };
            //$('#menuTop > div > ul').css('overflow', 'hidden');
        }
    );

    $('#submenu').mouseover(
        function(){
            $('#menuTop > div > ul').css('overflow', 'visible');
        }
    );

    /*open and close the submenu  - FINISH*/

    /* page main - end */

    /* The catalog pages - START */
    $('div#body.catalog #f12 > div:nth-child(1) > a').click(
        function(){
            $('div#body.catalog #f12 > div:nth-child(1) > a').removeClass('active'); /* We take selectors 'a' and delete  'active' class name to it*/

            $(this).addClass('active'); /* Let is take one selector that has event name 'click', at a nome time  and assing the class 'active' to it */
        }
    );

    /* The catalog pages - END */

    /* The network shops contacts - start*/

	/* $('#contacts-of-network aside > div > *:nth-child(2) > div:first-child').click(function() {
          let el = $('#contacts-of-network aside > div > *:nth-child(2)');
          if (el.hasClass('active') == false) {
            el.addClass('active');
          } else {
            el.removeClass('active');
          }
        }
    ); */
    function search_class(){
		var class_element = document.getElementById('contacts-of-network').getElementsByClassName('active');
		console.log(class_element[0]);
		return class_element;
	};

    $('#contacts-of-network aside > div > * > div:first-child').click(function(){
        var v = $(this).parents('#contacts-of-network aside > div > div')
		var new_class_element = search_class();

		if(new_class_element.length > 0){
			/* for (var i = 0; i <= new_class_element.length; i++) {
				console.log('i: ', i);
				console.log('new_class_element.length: ', new_class_element.length);
				console.log('new_class_element: ', new_class_element);
				console.log('new_class_element[i]: ', new_class_element[i]); */
				// var element_2 =
			// $('#contacts-of-network #contacts > div.active > div:nth-child(1)::before').removeAttr('color');
			$('#contacts-of-network #contacts > div.active > div:nth-child(1)').removeAttr('style');
			$('#contacts-of-network #contacts > div.active').removeClass('active');
			v.addClass('active');
			$('#contacts-of-network #contacts > div.active > div:nth-child(1)').css({'height': '73px', 'width': 'initial'});
			// $('#contacts-of-network #contacts > div.active > div:nth-child(1)::before').css('color', '#fff')
			/* } */
		}
		if(v.hasClass('active') == false){
			v.addClass('active');
			$('#contacts-of-network #contacts > div.active > div:nth-child(1)').css({'height': '73px', 'width': 'initial'});
		}
    });

	function windiowScreenSize() { /* sizing  */
		var h = window.innerHeight;
		var w = window.innerWidth;
		console.log(h, w);
		/* const mediaQuery = (w < 600); */
		// if (mediaQuery.matches){
		if (w < 600){
			/* function(){ */
			var bottom_time = $('#contacts-of-network aside > div > *.active:nth-child(4) > div:nth-child(1)::before');
			var bottom_presense = $('#contacts-of-network aside > div > *.active:nth-child(2) > div:nth-child(1)::before');
			var bottom_export = $('#contacts-of-network aside > div > *.active:nth-child(3) > div:nth-child(1)::before');

			// console.log('555555', $(window).width());

			/* } */

		}
	};
	windiowScreenSize();

  /*   $('#contacts-of-network aside > div > *:nth-child(3) > div:first-child').click(
        function(){
            $('#contacts-of-network aside > div > *:nth-child(3)')
            .toggleClass('active');
        }
    );
    $('#contacts-of-network aside > div > *:nth-child(4) > div:first-child').click(
        function(){
            $('#contacts-of-network aside > div > *:nth-child(4)')
            .toggleClass('active');
        }
    ); */
    /* The network shops contacts - finish*/



	function importCOde(){
		// var linkForImport = $('contacts_2').load('link[rel=import][url="/addHtml.html"]');
		var linkForImport = $('contacts_2').load('/product-card/addHtml.html');
		// console.log(linkForImport.import.getElementById('contacts_2'));
		console.log(linkForImport.importNode.querySelector('contacts_2'));
		console.log('jjj')
		var htmlElemnt = getElementById('contacts_2');

	};



	// const mediaQuery = window.matchMedia('(max-width: 575px)')


	$('#contacts-of-network aside > div > *:nth-child(4) > div:nth-child(1)').click(
		function(){
			const bottomElement = {
				bottom_Time: document.querySelector('#contacts-of-network aside > div > *:nth-child(4) > div:nth-child(1)'),
				bottom_Presense: document.querySelector('#contacts-of-network aside > div > *:nth-child(2) > div:nth-child(1)'),
				bottom_Export: document.querySelector('#contacts-of-network aside > div > *:nth-child(3) > div:nth-child(1)')
			};
			// console.log(bottomElement.bottom_Time);
			// $('#contacts-of-network aside > div > *:nth-child(4) > div:nth-child(1)').addClass('active');
			// $('.activeBottom').append(bottomElement.bottom_Time);
			// console.log(bottomElement.bottom_Time.className);

		}
	);



	}


);
