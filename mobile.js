// mobile.js

// Check if the device is a mobile device
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobileDevice) {
    // Mobile-specific interactions

    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');
   
    var isHovering = false;
    // Add tap event listeners
    gridItems.forEach(gridItem => {
        let tapTimer;
        let tapCount = 0;

        gridItem.addEventListener('touchstart', (event) => {
            // event.preventDefault(); // Prevent default touch behavior
            tapCount++;

            if (tapCount === 1) {
                
                // Simulate mouseover on first tap
               
                tapTimer = setTimeout(() => {
                    tapCount = 0;
                }, 250); // Reset tap count after 500ms
            } else if (tapCount === 2) {
                // Simulate click on double tap
                simulateClick(gridItem);
                clearTimeout(tapTimer);
                tapCount = 0;
            }
        });

        gridItem.addEventListener('touchend', () => {
            if (tapCount === 1) {
                // Simulate mouseout after a single tap
               if(gridItem.classList.contains("hovering"))
               {
                simulateMouseout(gridItem);
               
               }
               else{
                   simulateMouseover(gridItem);
                  
               }
                clearTimeout(tapTimer);
                tapCount = 0;
            }
        });
    });
    document.addEventListener("scroll",()=>{
        simulateMouseout();
    });

    // Function to simulate mouseover event
    function simulateMouseover(gridItem) {
        var elements = Array.from(document.getElementsByClassName('grid-item'));
        elements.forEach(element => {
            element.classList.add("non-hovering");
        });
        gridItem.classList.remove("non-hovering");
        gridItem.classList.add("hovering");
    }

    // Function to simulate mouseout event
    function simulateMouseout(gridItem) {
        Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
            element.classList.remove("non-hovering");
            element.classList.remove("hovering");
        });
    }

    // Function to simulate click event
    function simulateClick(gridItem) {
        const designer = designers.find(d => d.name === gridItem.querySelector('img').alt);
        if (designer) {
            window.open(designer.website, '_blank');
        }
    }

    // Fix grid layout on mobile devices
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
}