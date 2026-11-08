let copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let colorCode = button.previousElementSibling.textContent;

        navigator.clipboard.writeText(colorCode);

        button.textContent = "Copied!";

        setTimeout(function() {
            button.textContent = "Copy HEX";
        }, 1500);

    });

});