
var app = {
  init: function() {
    // test console.log();
    console.log('app.init OK');
    // les variables
    app.positionFlou(175,325);
    // les écouteurs
    $('.slider_height').on('click',  app.positionFlou)
    $('.slider_width').on('click',  app.positionFlou)
    // les fonctions lancées

    },

    positionFlou: function(event){
      $('.area_blur').removeAttr('style')
      $('.background_blur').removeAttr('style');
      $('.area_overBlur').removeAttr('style');
      var top = $('input[name=hauteur]').val();
      var left = $('input[name=largeur]').val();
      console.log(top, left);
      var leftBlur = $('.area_blur').css('left', '+='+left);
      var topBlur = $('.area_blur').css('top', '+='+top);
      var pos = $('.area_blur').position();
      $('.background_blur').css('left', '-='+pos.left);
      $('.background_blur').css('top', '-='+pos.top);
      $('.area_overBlur').css('top', '+='+pos.top);
      $('.area_overBlur').css('left', '+='+pos.left);
      $('.area_overBlur').css('z-index', 20);
      var top = 0
      var left = 0
  },

  };

  $(app.init);
