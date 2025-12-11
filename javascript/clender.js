document.addEventListener("DOMContentLoaded", function () {
    let clinicButtons = document.querySelectorAll(".time.in-person button");
    let zoomButtons = document.querySelectorAll(".time.zoom button");
    let dateButtons = document.querySelectorAll(".calendar button");
    let doctorSelect = document.getElementById("Specialist");
    let sendButton = document.getElementById("submit");
    let userName = localStorage.getItem("username");

    let selectedType ;
    let selectedDate ;
    let selectedTime ;

    emailjs.init("It-sbHLw6ZlCW49EV");

    function clearButtonStyles() {
        [...clinicButtons, ...zoomButtons, ...dateButtons].forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.style.fontWeight = "";
            btn.style.border = "";
            btn.style.borderRadius = "";
            btn.classList.remove("active");
        });
    }

    let typeSelect = document.getElementById("typecon");
    typeSelect.addEventListener("change", function () {
        let chosen = this.value;
        let options = doctorSelect.querySelectorAll("option");

        options.forEach(option => {
            option.style.display = (option.dataset.type === chosen || option.value === "") ? "block" : "none";
        });
    });

    function chooseType(type) {
        clearButtonStyles();
        selectedType = type;

        let color = type === "زوم" ? "#2e7d32" : "#388e3c"; 
       let lightColor = type === "زوم" ? "#a5d6a7" : "#c8e6c9";

        dateButtons.forEach(btn => {
            if ((type === "زوم" && btn.classList.contains("zoom")) ||
                (type === "عيادة" && btn.classList.contains("in-person"))) {
                    btn.style.backgroundColor = "#388e3c" ;
                    btn.style.color = "balck";
                btn.style.fontWeight = "bold";
                btn.style.borderRadius = "10px";
            }
        });

        let timeButtons = type === "زوم" ? zoomButtons : clinicButtons;
        timeButtons.forEach(btn => {
           btn.style.backgroundColor = "#388e3c";
            btn.style.fontWeight = "bold";
            btn.style.borderRadius = "10px";
        });

        sendButton.style.display = "inline-block";
    }

    document.getElementById("online").addEventListener("click", function (e) {
        e.preventDefault();
        chooseType("زوم");
    });

    document.getElementById("inperson").addEventListener("click", function (e) {
        e.preventDefault();
        chooseType("عيادة");
    });

    dateButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            if (!selectedType) {
                alert("يرجى اختيار نوع اللقاء أولاً.");
                return;
            }

            dateButtons.forEach(b => {
                b.classList.remove("active");
                b.style.backgroundColor = "";
                b.style.color = "";
                b.style.fontWeight = "";
                b.style.border = "";
                b.style.borderRadius = "";
            });

            btn.classList.add("active");
            btn.style.backgroundColor = "white";
            btn.style.fontWeight = "bold";
            btn.style.borderRadius = "12px";

            selectedDate = btn.textContent;
        });
    });

    let allTimeButtons = document.querySelectorAll(".time button");
    allTimeButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            allTimeButtons.forEach(b => {
                b.classList.remove("active");
                b.style.backgroundColor = "";
                b.style.color = "";
                b.style.fontWeight = "";
                b.style.border = "";
                b.style.borderRadius = "";
            });

            btn.classList.add("active");
             btn.style.backgroundColor = "#388e3c";
            btn.style.fontWeight = "bold";
            btn.style.borderRadius = "12px";

            selectedTime = btn.textContent;
            alert("تم اختيار الموعد: " + selectedDate + " الساعة " + selectedTime);
        });
    });

    sendButton.addEventListener("click", function () {
        let chosenDoctor = doctorSelect.value;

        if (!chosenDoctor || !selectedType || !selectedDate || !selectedTime) {
            alert("يرجى تعبئة جميع المعلومات قبل الإرسال.");
            return;
        }


//emailjs
        emailjs.send("service_l1uin7d", "template_jrrodi9", {
            name: userName,
            typeCon: selectedType,
            specialist: chosenDoctor,
            date: selectedDate,
            time: selectedTime
        }).then(() => {
            alert("تم الارسال بنجاح");
        }).catch(() => {
            alert("اعد المحاولة مرة اخرى");
        });
    });

    clearButtonStyles();
});




