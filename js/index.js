addEventListener("DOMContentLoaded", function() {
    //  本地储存
    ((elenter, elenter1) => {
        const li = document.querySelector(elenter).children;
        const text = document.querySelector(elenter1);
        // const  dex = array[index];
        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener("click", function() {
                const span = this.querySelectorAll("span");
                if (localStorage.getItem(i) !== "") {
                    let data = localStorage.getItem(i);
                    text.value = data;
                    this.classList.toggle("cl");

                }


                span[1].onclick = function() {
                    if (text.value !== "") {
                        localStorage.setItem(i, text.value)
                    }
                }
            })
        }

    })("ul", "textarea");


    // 跳转
    var linkout = document.querySelector("#ai");
    linkout.onclick = function() {
        location.replace("./Log in to.html");
    }



    // 文件上传
    let bu = document.querySelector("#bu");
    bu.onclick = function() {
        let fl = document.querySelector("#fl").files
        if (fl.length <= 0) {
            return alert("请上传文件")
        }
        let fd = new FormData();
        fd.append("file", fl[0]);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
        xhr.send(fd);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.responseText)
                if (data.status === 200) {
                    document.querySelector("#ig").src = 'http://www.liulongbin.top:3006' + data.url;
                } else {
                    console.log('上传失败' + data.message);
                }
            }
        }
    }

    //搜索
    $("#code").on("keyup", function() {
        let da = this.value;
        if (da.length <= 0) {
            return
        }
        ax(da);
    })

    function ax(kw) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            dataType: "jsonp",
            success: function(us) {
                console.log(us);
            }
        })
    }
})