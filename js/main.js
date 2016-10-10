$(document).ready(function() {
    $('#pagepiling').pagepiling({
        // menu: '#menu',
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 100,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['Home', 'Who We Are', 'What We Do', 'Contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        // onLeave: function(index, nextIndex, direction){},
        // afterLoad: function(anchorLink, index){},
        // afterRender: function(){},
    });
});