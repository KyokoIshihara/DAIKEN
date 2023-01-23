window.addEventListener('DOMContentLoaded', function(){
    // ◆ハンバーガーボタンの開閉
    $('.menu-button').on('click', function(){
        $('body').toggleClass('open');
    });

    $('contact a[href^="#"').on('click', function(){
        $('body').toggleClass('open');
    });

     // ◆スムーススクロール
    $('a[href^="#"').on('click', function(){
        // クリックしたaタグのhref属性を変数hrefに入れる
        $('body').removeClass('open');
        var href = $(this).attr('href');
        var target; /* 移動さきを入れるための変数 */
        // 取得したhrefの中身が「＃だけ」もしくは「空」だったとき
        if (href == '#' || href == '' ){
            // 移動先をページ最上部にするため、htmlタグを取得
            target = $('html');
            // 取得したhrefの中身がページ内移動だった場合
        } else {
            // 移動先の要素を取得したtargetに格納
            target = $(href);
        };
        // 取得した要素の上からの位置をposiに格納
        var posi = target.offset().top;
        // animate()メソッドでウィンドウを移動
        $('html, body').animate({
            'scrollTop': posi - 140
        }, 700 , );
        return false;
    });

    

// ◆問い合わせセクションまでスクロールされたらcv-buttonを非表示
    var btn = $('.cv-button');
    var $contact = $('.contact-block');
    /* 上記のsectionのtopまでの高さをoffsetで取得 */
    var contactPosition = $contact.offset().top;

    // 画面幅が変更されたときに画面幅を取得
    $(window).resize(function(){
        var windowWidth = $(window).outerWidth();
        console.log(windowWidth);
        
        // ウィンドウに対してスクロールされるかを監視
        $(window).on('scroll', function(){
            // 変数にスクロール量を入れる
            var scrollValue = $(this).scrollTop();
            // もしスクロール量がcontactsectionの位置より大きく、
            // さらにwidthが768px以下の場合
            if( scrollValue >= contactPosition && windowWidth <= 768){
                // 非表示にする
                btn.addClass('is-invisible');
                
            } else {
                // 表示する
                btn.removeClass('is-invisible');
            };
            
        });
        
    });

});
