document.addEventListener("DOMContentLoaded", function () {
    // Initialize Materialize components
    function initializeMaterializeComponents() {
        // Initialize sidenav
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav);

        // Initialize select elements
        let selects = document.querySelectorAll("select");
        M.FormSelect.init(selects);

        // Initialize collapsible elements
        let collapsibles = document.querySelectorAll(".collapsible");
        M.Collapsible.init(collapsibles);
    }

    // Adjust sidenav margin based on navbar height
    function adjustSidenavMargin() {
        let navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
        let sidenav = document.querySelectorAll(".sidenav");

        sidenav.forEach(function (nav) {
            nav.style.marginTop = navbarHeight + 'px';
        });
    }

    // Highlight the active navigation link for both sidenav and navbar
    function highlightActiveNavLink() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll("nav ul li a, .sidenav li a");

        navLinks.forEach((link) => {
            // Normalize hrefs to avoid mismatches
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPage) {
                link.parentElement.classList.add("active");
            }
        });
    }

    // Initialize all functionalities
    function init() {
        initializeMaterializeComponents();
        adjustSidenavMargin();
        highlightActiveNavLink();
    }

    init();
});

