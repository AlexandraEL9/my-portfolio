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

        // Initialize modals
        let modals = document.querySelectorAll(".modal");
        M.Modal.init(modals);
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

     // Toggle card visibility
     function setupCardActions() {
        const revealIcons = document.querySelectorAll('.card-image .btn-floating');
        const closeIcons = document.querySelectorAll('.card-reveal .fa-times-circle');

        revealIcons.forEach((icon) => {
            icon.addEventListener('click', function () {
                icon.closest('.card').classList.toggle('active');
            });
        });

        closeIcons.forEach((icon) => {
            icon.addEventListener('click', function () {
                icon.closest('.card').classList.toggle('active');
            });
        });
    }

    // Handle collapsible chevron toggle
    function handleCollapsibleChevron() {
        document.querySelectorAll(".collapsible-header").forEach((header) => {
            header.addEventListener("click", () => {
                const chevron = header.querySelector(".chevron");
                chevron.textContent = chevron.textContent === "expand_more" ? "expand_less" : "expand_more";
                // expand_more = down arrow, expand_less = up arrow
            });
        });
    }

    // Open Modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    }

    // Close Modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
    }

    // Close Modal When Clicking Outside
    function handleCloseModalOutside() {
        window.onclick = function (event) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        };
    }

    // Initialize all functionalities
    function init() {
        initializeMaterializeComponents();
        adjustSidenavMargin();
        highlightActiveNavLink();
        handleCollapsibleChevron();
        setupCardActions();
        handleCloseModalOutside();
    }

    init();

    // Expose modal functions globally if needed
    window.openModal = openModal;
    window.closeModal = closeModal;
});
