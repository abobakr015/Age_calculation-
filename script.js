function Age_calculation() {
    let output = document.getElementById("output");
    let years = document.getElementById("year").value;
    let Month = document.getElementById("month").value;
    let Day = document.getElementById("Day").value;
    let today = new Date();
    let thisYear = today.getFullYear();
    let thismonth = today.getMonth() + 1;
    let thisDay = today.getDate();
    let a = (365 / 12);
    let newYears = (thisYear - years) * 365;
    let newMonth = (thismonth - Month) * a;
    let newDay = thisDay - Day;
    Sum = newYears + newDay + newMonth;
    let y;
    let m;
    let d;
    if (Sum < 365) {
        y = 0;
        m = Math.floor((Sum / a));
        d = Math.round((Sum - (m * a)));
    }
    else if (Sum > 365) {
        y = Math.floor((Sum / 365));
        m = Math.floor((((Sum) - (y * 365)) / a));
        d = Math.round((Sum - (y * 365) - (m * a)));
    }
    else if (Sum = 365) {
        y = 1;
        m = 0;
        d = 0;
    }
    if (years > thisYear) {
        output.innerText = " 🙂لم نصل لهذه السنة بعد ";
    } else if (years == thisYear && Month > thismonth) {
        output.innerText = " 🙂لم نصل لهذا الشهر بعد ";
    } else if (Day == 0 || Month == 0 || years == 0) {
        output.innerText = "رجاءً إملأ الحقول كاملة";
    } else if (Month > 12) {
        output.innerText = "عذراً تأكد من شهر ميلادك لأنه لا يوجد أكثر من 12 شهر في السنة الميلادية";
    } else if (Day > 31) {
        output.innerText = "عذراً تأكد من يوم ميلادك لأنه لا يوجد أكثر من 31 يوم في أي شهر ميلادي";
    } else {
        if (years >= thisYear && Month == thismonth && Day > thisDay) {
            output.innerText = "🙂لم نصل لهذا اليوم بعد ";
        } else if (y <= 0 && m <= 0 && d > 0) {
            output.innerText = "العمر هو (" + d + ") يوما تقريباً";
        } else if (y <= 0 && d <= 0 && m > 0) {
            output.innerText = "العمر هو (" + m + ") شهر تقريباً";
        } else if (m <= 0 && d <= 0 && y > 0) {
            output.innerText = "العمر هو (" + y + ") سنة";
        } else if (y <= 0 && m > 0 && d > 0) {
            output.innerText = "العمر هو (" + m + ") أشهر و (" + d + ") يوما تقريباً";
        } else if (y > 0 && m > 0 && d <= 0) {
            output.innerText = "العمر هو (" + y + ") سنة و (" + m + ") شهر تقريباً";
        } else if (y > 0 && m <= 0 && d > 0) {
            output.innerText = "العمر هو (" + y + ") سنة و (" + d + ") يوما تقريباً";
        } else if (y > 0 && m > 0 && d > 0) {
            output.innerText = "العمر هو (" + y + ") سنة و (" + m + ") أشهر و (" + d + ") يوما تقريباً";
        } else if (y == 0 && m == 0 && d == 0) {
            output.innerText = "!هذا التاريخ هو تاريخ اليوم "
        }
    }
}
