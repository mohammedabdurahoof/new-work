!(function(w, d) {
    // Visit
    // <script src="https://track.convertagain.net/pixel/js?auth=w39tx7&event=visit" async defer></script>

    // Login:
    // <script src="https://track.convertagain.net/pixel/js?auth=9yvc88&event=login&uid={USER_ID}" async defer></script>

    // Registration:
    // <script src="https://track.convertagain.net/pixel/js?auth=8y2cvx&event=regfinished&uid={USER_ID}" async defer></script>

    // Deposit:
    // <script src="https://track.convertagain.net/pixel/js?auth=ykyc8j&event=deposit&uid={USER_ID}&tid={TRANSACTION_ID}&cur={CURRENCY}&amount={DEPOSIT}" async defer></script>

    window.pixelTrack = {
        baseLink: "https://pixel-us.convertagain.net/pixel",
        defaultAuth: {
            visit: "w39tx7",
            login: "9yvc88",
            regfinished: "8y2cvx",
            deposit: "ykyc8j",
        },
        sendImage(searchParams) {
            // let url = new URL(window.location.href);
            let host = window.location.host;
            let ln = navigator.language;
            let pixel = `${window.pixelTrack.baseLink}?${searchParams}&site=${host}&ln=${ln}`;
            let img = document.createElement("img");
            img.style.width = "0px";
            img.style.height = "0px";
            img.src = pixel;

            // 监听图片加载完成事件
            img.onload = function() {
                // 图片加载完成后执行的操作
                console.log("Image loaded successfully");

                // 从DOM中移除图片元素
                document.body.removeChild(img);
            };

            // 监听图片加载错误事件（可选）
            // img.onerror = function () {
            //     console.error('Error loading image');
            //     document.body.removeChild(img);
            // };

            document.body.appendChild(img);
        },
        visit: function() {
            const searchParams = new URLSearchParams();
            searchParams.append("auth", window.pixelTrack.defaultAuth.visit);
            searchParams.append("event", "visit");
            window.pixelTrack.sendImage(searchParams.toString());
        },
        login: function(params) {
            const searchParams = new URLSearchParams();
            searchParams.append("auth", window.pixelTrack.defaultAuth.login);
            searchParams.append("event", "login");
            searchParams.append("uid", params.uid);
            window.pixelTrack.sendImage(searchParams.toString());
        },
        regfinished: function(params) {
            const searchParams = new URLSearchParams();
            searchParams.append(
                "auth",
                window.pixelTrack.defaultAuth.regfinished
            );
            searchParams.append("event", "regfinished");
            searchParams.append("uid", params.uid);
            window.pixelTrack.sendImage(searchParams.toString());
        },
        deposit: function(params) {
            const searchParams = new URLSearchParams();
            searchParams.append("auth", window.pixelTrack.defaultAuth.deposit);
            searchParams.append("event", "deposit");
            searchParams.append("uid", params.uid);
            searchParams.append("tid", params.tid);
            searchParams.append("cur", params.cur);
            searchParams.append("amount", params.amount);
            window.pixelTrack.sendImage(searchParams.toString());
        },
    };
})(window, document);