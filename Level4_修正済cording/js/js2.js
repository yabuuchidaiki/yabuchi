1
$(function() {
2
    //クリックしたときのファンクションをまとめて指定
3
    $('.tab li').click(function() {
4
 
5
        //.index()を使いクリックされたタブが何番目かを調べ、
6
        //indexという変数に代入します。
7
        var index = $('.tab li').index(this);
8
 
9
        //コンテンツを一度すべて非表示にし、
10
        $('.content li').css('display','none');
11
 
12
        //クリックされたタブと同じ順番のコンテンツを表示します。
13
        $('.content li').eq(index).css('display','block');
14
 
15
        //一度タブについているクラスselectを消し、
16
        $('.tab li').removeClass('select');
17
 
18
        //クリックされたタブのみにクラスselectをつけます。
19
        $(this).addClass('select')
20
    });
21
});
