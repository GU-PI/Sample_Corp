$(function () {
    //drawer.js
    $('.drawer').drawer();


    // スムーススクロール
    // #から始まるURLがクリックされた時
    jQuery('a[href^="#"]').click(function () {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = jQuery(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = jQuery(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        jQuery("html, body").animate({
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed
        );
        return false;
    });

    //wow.js
    new WOW().init();


    //Googleform
    let $form = $('#js-form')
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理 
                    $form.slideUp()
                    $('#js-success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理 
                    $form.slideUp()
                    $('#js-error').slideDown();
                }
            }
        });
        return false;
    });

    // formの入力確認
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function () {
        if (
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.841770834"]').prop('checked') === true
        ) {
            //全て入力されたとき
            $submit.prop('disabled', false)
            $submit.addClass('-active')
        } else {
            //入力されていないとき
            $submit.prop('disabled', true)
            $submit.removeClass('-active')
        }
    });

    //swiper
    // var mySwiper = new Swiper('.swiper-container', {
    //     slidesOffsetBefore: 50,
    //     slidesOffsetAfter: 50,
    //     slidesPerView: 3,
    //     loop: true,
    //     loopedSlides: 6,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
        
    // });
    new Swiper( '.swiper-container', {
        speed: 400,
        spaceBetween: 40,
        width: 400,
        loop: true,
        loopedSlides: 6,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          768: {
                    spaceBetween: 150,
                    width: 274,
          }
        }
      });

    // アコーディオン
    jQuery('.accordion_head').click(function () {
        jQuery(this).next().slideToggle();
        jQuery(this).children('.accordion_icon').toggleClass('is-open');
    });
})