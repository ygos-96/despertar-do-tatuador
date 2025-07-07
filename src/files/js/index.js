function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("svg");
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}



const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
    initialCountry: "br",
    onlyCountries: ["br", "us"],
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});

$(document).ready(function () {
    $("#phone").inputmask({
        mask: "5599999999999",
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true,
    });
});

$(document).ready(function () {
    $("#insta").inputmask({
        mask: "@*{1,15}",
        greedy: false,
        placeholder: "",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        definitions: {
            '*': {
                validator: "[a-zA-Z0-9._]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });
});