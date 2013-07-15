fadeSpeed = 400;
$(document).ready(function() {
  $(".card").each(function () {
    var cardDescription = $(this).children('.card_description');
    var iframeWrapper = $(this).children('.iframe_wrapper');
    $(this).mouseenter(function () {
      cardDescription.removeClass('hidden');
      cardDescription.hide().fadeIn(fadeSpeed);
    });
    $(this).mouseleave(function () {
      cardDescription.fadeOut(fadeSpeed, function() {cardDescription.addClass('hidden');});
    });
  });

  $(".idea_card").each(function () {
    var cardDescription = $(this).children('.idea_card_description');
    var iframeWrapper = $(this).children('.iframe_wrapper');
    $(this).mouseenter(function () {
      cardDescription.removeClass('hidden');
      cardDescription.hide().fadeIn(fadeSpeed);
    });
    $(this).mouseleave(function () {
      cardDescription.fadeOut(fadeSpeed, function() {cardDescription.addClass('hidden');});
    });
  });
});
