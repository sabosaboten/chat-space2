$(function(){
    function buildHTML(main__bar__chat__box){
      if ( main__bar__chat__box.image ) {  
      var html =
      `<div class="main__bar__chat__box">
            <div class="main__bar__chat__box__title">
              <div class="main__bar__chat__box__name">
                ${main__bar__chat__box.user_name}
              </div>
              <div class="main__bar__chat__box__time">
                ${main__bar__chat__box.created_at}
              </div>
            </div>
            <div class="main__bar__text">
              <p class="lower-message__content">
                ${main__bar__chat__box.content}
              </p>
            </div>
            <img src=${main__bar__chat__box.image} >
          </div>`
      return html;
    } else {
      var html =
          `<div class="main__bar__chat__box">
            <div class="main__bar__chat__box__title">
              <div class="main__bar__chat__box__name">
                ${main__bar__chat__box.user_name}
              </div>
              <div class="main__bar__chat__box__time">
                ${main__bar__chat__box.created_at}
              </div>
            </div>
            <div class="main__bar__text">
              <p class="lower-message__content">
                ${main__bar__chat__box.content}
              </p>
            </div>
          </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__bar__middle').append(html);
      $('.main__bar__middle').animate({ scrollTop: $('.main__bar__middle')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').attr('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});