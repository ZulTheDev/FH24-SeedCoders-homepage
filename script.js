var text = document.getElementById("banner-hero");
var loop = 0;

    function update() {
        if (loop < 20) {
            if (loop % 2 === 0) {
                text.innerHTML = "ALL-IN-ONE APP"
            } else {
                text.innerHTML = "SCHOOL MANAGEMENT SYSTEM"
            }
            loop++;
            setTimeout(update, 3000);
        } else {
            loop = 0;
            update();
        }
    }

update();