
// Wait until the HTML document has loaded before executing JavaScript.
document.addEventListener("DOMContentLoaded", function () {

    // Selects the mobile menu button.
    const menuButton = document.getElementById("menuButton");

    // Selects the navigation container.
    const navMenu = document.getElementById("navMenu");

    // Selects all links inside the navigation.
    const navLinks = document.querySelectorAll(".nav a");

    // Selects the contact form.
    const contactForm = document.getElementById("contactForm");

    // Selects the element used to display form feedback.
    const formFeedback = document.getElementById("formFeedback");

    // Selects the footer year element.
    const yearElement = document.getElementById("year");


    // Checks whether the navigation elements exist.
    if (menuButton && navMenu) {

        // Listens for clicks on the mobile menu button.
        menuButton.addEventListener("click", function () {

            // Toggles the active class to open or close the menu.
            navMenu.classList.toggle("active");

            // Checks whether the navigation menu is open.
            const isOpen = navMenu.classList.contains("active");

            // Updates the accessible expanded state.
            menuButton.setAttribute("aria-expanded", String(isOpen));

            // Updates the accessible button label.
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        // Loops through every navigation link.
        navLinks.forEach(function (link) {

            // Listens for a click on each navigation link.
            link.addEventListener("click", function () {

                // Closes the mobile menu after selecting a section.
                navMenu.classList.remove("active");

                // Updates the menu button's accessibility state.
                menuButton.setAttribute("aria-expanded", "false");

                // Restores the original button label.
                menuButton.setAttribute("aria-label", "Open menu");
            });
        });
    }


    // Checks that the year element exists.
    if (yearElement) {

        // Gets the current year and displays it in the footer.
        yearElement.textContent = new Date().getFullYear();
    }


    // Checks whether the contact form exists.
    if (contactForm) {

        // Handles contact form submissions.
        contactForm.addEventListener("submit", function (event) {

            // Prevents the browser from refreshing the page.
            event.preventDefault();

            // Collects the visitor's name and removes surrounding spaces.
            const name = document.getElementById("name").value.trim();

            // Collects the visitor's email address.
            const email = document.getElementById("email").value.trim();

            // Collects the message subject.
            const subject = document.getElementById("subject").value.trim();

            // Collects the visitor's message.
            const message = document.getElementById("message").value.trim();


            // Checks whether any required field is empty.
            if (!name || !email || !subject || !message) {

                // Displays an error if a field is missing.
                formFeedback.textContent = "Please complete all the required fields.";

                // Stops further execution.
                return;
            }


            // Defines a basic email validation pattern.
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Checks whether the supplied email matches the pattern.
            if (!emailPattern.test(email)) {

                // Displays an email validation error.
                formFeedback.textContent = "Please enter a valid email address.";

                // Stops processing the invalid submission.
                return;
            }


            // Creates an object containing the submitted information.
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };


            // Displays the submitted information in the browser console.
            console.log("Bloom Ritual form submission:", formData);


            // Displays a confirmation message to the visitor.
            formFeedback.textContent =
                "Thank you! Your information passed validation. This demonstration does not send messages.";


            // Clears the form after successful validation.
            contactForm.reset();
        });
    }

});
