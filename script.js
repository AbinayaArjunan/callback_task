

let div_con = allHtmlElements("div");
div_con.setAttribute("id", "count-down");
// let text = allHtmlElements("p")
// //text.setAttribute("id", "col-md-8");
// text.innerHTML = ""
let div_last = allHtmlElements("div");
div_last.setAttribute("id", "last");
function allHtmlElements(tagname) {
    let createElemets = document.createElement(tagname);
    return createElemets;
}
document.body.append(div_con, div_last);
let number = 10;
let number_1 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_2 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_3 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_4 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_5 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_6 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_7 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_8 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_9 = function (start) {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start();
    }, 1000);
};

let number_10 = function () {
    let start_number = document.getElementById("count-down");
    start_number.innerHTML = number;
    number--;
    setTimeout(() => {
        start_number.innerHTML = "";
        let end = document.getElementById("last");
        end.innerHTML = "HAPPY INDEPENDANCE DAY";
    }, 1000);
};

number_1(() => {
    number_2(() => {
        number_3(() => {
            number_4(() => {
                number_5(() => {
                    number_6(() => {
                        number_7(() => {
                            number_8(() => {
                                number_9(() => {
                                    number_10();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


