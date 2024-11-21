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

    // Initialize all functionalities
    function init() {
        initializeMaterializeComponents();
        adjustSidenavMargin();
    }

    init();
});
