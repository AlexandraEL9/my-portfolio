document.addEventListener("DOMContentLoaded", function () {
    // Initialize Materialize components
    function initializeMaterializeComponents() {
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);

        let selects = document.querySelectorAll("select");
        M.FormSelect.init(selects);
    }

    // Adjust sidenav margin based on navbar height
    function adjustSidenavMargin() {
        let navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
        let sidenav = document.querySelectorAll(".sidenav");

        sidenav.forEach(function (nav) {
            nav.style.marginTop = navbarHeight + 'px';
        });
    }

    // Highlight the active navigation link
    function highlightActiveNavLink() {
        // Get the current URL
        const currentPage = window.location.pathname;

        // Select all navbar links
        const navLinks = document.querySelectorAll("nav ul li a");

        // Loop through links to match URL
        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.parentElement.classList.add("active");
            }
        });
    }

    // Initialize all functionalities
    function init() {
        initializeMaterializeComponents();
        adjustSidenavMargin();
        highlightActiveNavLink(); // Add active class logic
    }

    init();
});

