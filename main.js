
    AOS.init();

    document.getElementById('menuToggle').addEventListener('click', function(event) {
        const menu = document.querySelector('.menu');
        menu.style.left = (menu.style.left === '0px') ? '-300px' : '0px';
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });
    
    // Close the menu when clicking anywhere outside the menu
    document.addEventListener('click', function(event) {
        const menu = document.querySelector('.menu');
        if (event.target !== menu && !menu.contains(event.target)) {
            menu.style.left = '-300px';
        }
    });
    

    

    