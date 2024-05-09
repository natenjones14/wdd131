$('.center-align div').each(function() {
    var part = $(this).text().split(': ')
    $(this).replaceWith("<div class='right'>" + part[0] + "</div><div class='left'>" + part[1] + "</div>");
  });