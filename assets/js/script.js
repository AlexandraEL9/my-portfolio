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
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll("nav ul li a");

        navLinks.forEach((link) => {
            if (link.getAttribute("href") === currentPage) {
                link.parentElement.classList.add("active");
            }
        });
    }

    // Toggle card visibility
	function setupCardActions() {
		const revealIcons = document.querySelectorAll('.card-image .btn-floating');
		const closeIcons = document.querySelectorAll('.card-reveal .fa-times-circle');

		revealIcons.forEach((icon) => {
			icon.addEventListener('click', function() {
				icon.closest('.card').classList.toggle('active');
			});
		});

		closeIcons.forEach((icon) => {
			icon.addEventListener('click', function() {
				icon.closest('.card').classList.toggle('active');
			});
		});
	}

    // Initialize all functionalities
    function init() {
        initializeMaterializeComponents();
        adjustSidenavMargin();
        highlightActiveNavLink();
        setupCardActions();
    }

    init();
});

