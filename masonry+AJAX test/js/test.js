$(document).ready(function(){
    $('#gallery').each(function(){
        var $le = $(this);
        $le.masonry({
            columnWidth: 230, /* 열의 길이(필수지정)*/
            gutter: 10, //열 사이의 좌우간격
            horizontalOrder: true,
            itemSelector: '.li' //그리드에 해당하는 요소선택자를 지정속성
        });
            $.getJSON({
                url: "https://yts.am/api/v2/list_movies.json",
                dataType: "json",
                // data: { 'limit': 4, 'page': 1, "sort_by": "download_count" },
                success: function (le) {
                    var list = le.data.movies;
                    var tag = "";
                    $.each(list, function (index, data) {
                        var image = data.medium_cover_image;
                        var title = data.title;
                        var rating = data.rating * 10;
                        tag = '<li class="gallery_item li">' +
                            '<div class="thumb_flip">' +
                            '<div class="front"><img class="img" src="' + image + '" /></div>' +
                            '<div class="back">' +
                            '<div class="star-rating2" style="float:left;">' +
                            '<span style="width:' + rating + '%;"></span>' +
                            '</div>' +
                            '<p>괜히봤네요</p>' +
                            '<span class="bg"></span>' +
                            '</div>' +
                            '</div>' +
                            '<div class="title" title="' + title + '"><h3>' + title + '</h3></div>' +
                            '<div class="infoBtn" >' +
                            '<a  class="btn detail_btn" href="#" >상세정보</a>' +
                            '<a  class="btn reserveBtn" href="#">예매하기</a>' +
                            '</div>' +
                            '</li>';
                        // 설정된 영화정보는 추가시켜준다
                        $le.append(tag);
                    })
                }
            });
        });
    });