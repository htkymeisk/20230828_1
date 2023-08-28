$(function(){
        $('.header-link,.header-logo-link').click(function(){
            var adjust = 48;
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - adjust;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
        function scr_ani(scr,offs_max){
            var
            window_h = $(window).height(),
                offs_length = $('.offs').length,
                ons_length = $('.ons').length,
                wh_pos = 20;// 対象コンテンツの上端が画面下からどれくらい入ったら反応するか。画面高さに対する割合（%）
            if(offs_length){
              var first_item = offs_max - offs_length;
              for (var i=0; i<offs_length; i++) {
                var data_scr = first_item + i;
                var offs = $('.offs[data-scr="' + data_scr + '"]');
                var target = offs.offset().top;
                var trigger = target - (window_h + scr - window_h * wh_pos / 100);
                if(trigger < 0){
                  offs.removeClass('offs').addClass('ons');
                }else{
                  break;
                }
              }
            }
            if(ons_length){
              var last_item = ons_length - 1;
              for (var i=0; i<ons_length; i++) {
                var data_scr = last_item - i;
                var ons = $('.ons[data-scr="' + data_scr + '"]');
                var target = ons.offset().top;
                var trigger = target - (window_h + scr);
                if(trigger > 0){
                  ons.removeClass('ons').addClass('offs');
                }else{
                  break;
                }
              }
            }
          };
          
          $(function(){
          
            // スクロール出現アイテムにナンバリング
            var offs_max = $('.offs').length;
            for (var i=0; i<offs_max; i++) {
              $('.offs').eq(i).attr('data-scr',i);
            }
            // ディレイを設定
            var fadeIn_item = $('.fadeIn_item');
            for (var i = 0; i < fadeIn_item.length; i++) {
              let delay = fadeIn_item.eq(i).data('delay');
              if(delay){
                fadeIn_item.eq(i).css('transition-delay', delay + 's');
              }
            }
          
            // （リロード時など）ロード時にすでにスクロールされている場合に対応
            var scr = $(window).scrollTop();
            scr_ani(scr,offs_max);
          
          
            /************
            スクロール時
            ************/
            $(window).on('scroll', function(){
              var scr = $(window).scrollTop();
              scr_ani(scr,offs_max);
            });// end scroll
          
          });
          $(function(){
            $(window).scroll(function (){
                $('.left-to-right,.right-to-left').each(function(){
                    var elemPos = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > elemPos - windowHeight + 150){
                        $(this).addClass('scrollin');
                    }
                });
            });
        });
});