$(document).ready(function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 500) {
        $("nav").addClass("navbar-bg-scroll");
      } else {
        //transparencia definirla en css
        $("nav").removeClass("navbar-bg-scroll");
      }
    });
  
    $('#featured > div:nth-child(2) > article > div > .card-body > .card-title').on('click', function () {
      $(this).parent().find('.card-text').toggle('slow');
    });
  
  });