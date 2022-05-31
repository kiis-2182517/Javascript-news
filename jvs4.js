const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    var articles = JSON.parse(this.responseText).articles;//biến này để lấy các articles có trong API
        var str = "";
        for (let i = 0; i < articles.length; i++) {//khi đã có các articles rồi nên đặt 1 var i trong for để gọi đc hết tất cả các articles 
            str += //khi lấy đc các articles rồi thì trả về tag div sau
            `<div class='item'>`+ //template string dùng để tạo ra 1 string dễ hơn với các variable hoặc ẽpression
        `<div class='img'>
                  <img src=' ${articles[i].image} '/>
              </div>` +
        `<div class='text'><div class='title'>
                  <a target='_blank' href='${articles[i].url}'>
                  ${articles[i].title}
                  </a>
              </div>` +
        `<div class='time'><p>${articles[i].publishedAt}'</p></div>` + `<div class='des'><p>${articles[i].description}'</p></div>` + `</div></div><hr>`;
        
        }
        document.getElementById("news").innerHTML = str;
        console.log(articles);


};
var url = "https://gnews.io/api/v4/top-headlines?token=2ef8dc25a88bd4adcaf86a62dcae14e1&lang=en";//đặt link để lấy đc articles 
xhttp.open("GET", url);
xhttp.send();

var btn = document.querySelector("#btnSearch");//biến tìm kiếm tin tức          
btn.addEventListener("click", function(){//khi ấn vào nút search sẽ kích hoạt function này
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

    var articles = JSON.parse(this.responseText).articles;//chạy lại đoạn code trên 1 lần để trả về kết quả nhưng khác tin tức
        var str = "";
        for (let i = 0; i < articles.length; i++) {
            str += 
            `<div class='item'>` +
        `<div class='img'>
                  <img src=' ${articles[i].image} '/>
              </div>` +
        `<div class='text'><div class='title'>
                  <a target='_blank' href='${articles[i].url}'>
                  ${articles[i].title}
                  </a>
              </div>` +
        `<div class='time'><p>${articles[i].publishedAt}'</p></div>` + `<div class='des'><p>${articles[i].description}'</p></div>` + `</div></div><hr>`;
        }
        document.getElementById("news").innerHTML = str;
        console.log(articles);


};
var search = document.querySelector("#txtSearch").value;//.value là lấy những gì đc nhập vào trong ô input
var url = "https://gnews.io/api/v4/search?q=" + search + "&sortby=publishedAt&lang=en&token=2ef8dc25a88bd4adcaf86a62dcae14e1";
xhttp.open("GET", url);
xhttp.send();

})

$(function () {
    $("#btnSearch").on('click', function() {//khi ấn vào nút search thì ô tìm kiếm sẽ ẩn đi
        $('#myModal').modal('hide');
    });
});

document.onreadystatechange = function () {//function tạo ra loading icon
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },1000);
    }
  }

   