// Animações de rolagem de div na Home

$('.main-header .top-header nav ul li a[data-link^="#"]').click(function(e){
    var id = $(this).attr('data-link');
    console.log(id);
    targetOffset = $(id).offset().top,
        menuHeight = $('.main-header .top-header').innerHeight();
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 1000);
});