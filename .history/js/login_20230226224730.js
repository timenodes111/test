(() => {
    // 判断客户端
    // if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //     window.location.href = ""; //手机
    // } else {
    //     window.location.href = ""; //电脑
    // }
    var den = document.querySelector("#den");
    var input = document.querySelectorAll("input");
    console.log(input);
    den.addEventListener('click', () => {
        if (input[0].value !== "" && input[1].value !== "") {
            location.replace('./index.html');
        }
    })
})()