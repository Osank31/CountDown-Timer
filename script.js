function main() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let date = document.querySelector("#dateinput").value;
        // console.log(date);
        let time = document.querySelector("#timeinput").value;
        // console.log(`${date} ${time}`);

        let displaymessage=document.querySelector("#displaymessage").value;
        form.style.display = "none";
        let timing = document.querySelector(".timing");
        timing.style.display = "";
        var countDownDate = new Date(`${date} ${time}`).getTime();
        // console.log(countDownDate);
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("date").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("gpl").innerHTML = `${displaymessage}`;
            }
        }, 1000);

    })
}
main()
