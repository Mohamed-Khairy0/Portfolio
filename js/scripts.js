$(function(){
    console.log('jQuery is working');
var year = new Date();
$('#year').text(year.getFullYear());
});

var $links = $('.itemLinks');
$links.click(function(e){
    $links.removeClass('active');
    var clickedLink = $(e.target);
    var position = clickedLink.attr('data-pos');
    var translateValue = 'translateX(-' + position * 100 + '%)';
    $('#wrapper').css({
        'transform': translateValue
      });
      clickedLink.addClass('active');

})

