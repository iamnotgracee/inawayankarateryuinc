document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("uniqueNamesTable");
    const rows = table.getElementsByTagName("tr");
    const tbody = table.getElementsByTagName("tbody")[0];

    // Create search input
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search members...");
    searchInput.style.margin = "10px 0";
    
    // Create entries dropdown
    const entriesLabel = document.createElement("label");
    entriesLabel.textContent = "Show ";
    
    const entriesSelect = document.createElement("select");
    [5, 10, 15, 20].forEach(num => {
        let option = document.createElement("option");
        option.value = num;
        option.textContent = num;
        entriesSelect.appendChild(option);
    });
    
    entriesLabel.appendChild(entriesSelect);
    entriesLabel.appendChild(document.createTextNode(" entries "));

    // Create pagination
    const paginationDiv = document.createElement("div");
    paginationDiv.style.marginTop = "10px";

    let currentPage = 1;
    let rowsPerPage = parseInt(entriesSelect.value);

    function updateTable() {
        let filter = searchInput.value.toLowerCase();
        let filteredRows = [];
        
        // Filter rows based on search
        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            let found = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(filter)) {
                    found = true;
                    break;
                }
            }
            if (found) filteredRows.push(rows[i]);
        }

        // Calculate total pages
        let totalPages = Math.ceil(filteredRows.length / rowsPerPage);
        if (currentPage > totalPages) currentPage = totalPages || 1;

        // Display rows for current page
        for (let i = 1; i < rows.length; i++) {
            rows[i].style.display = "none";
        }
        for (let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < filteredRows.length; i++) {
            filteredRows[i].style.display = "";
        }

        updatePaginationButtons(totalPages);
    }

    function updatePaginationButtons(totalPages) {
        paginationDiv.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            let btn = document.createElement("button");
            btn.textContent = i;
            btn.style.margin = "3px";
            btn.style.padding = "5px";
            btn.style.cursor = "pointer";
            btn.style.border = i === currentPage ? "2px solid black" : "1px solid gray";
            btn.addEventListener("click", () => {
                currentPage = i;
                updateTable();
            });
            paginationDiv.appendChild(btn);
        }
    }

    // Event Listeners
    searchInput.addEventListener("keyup", updateTable);
    entriesSelect.addEventListener("change", function () {
        rowsPerPage = parseInt(this.value);
        currentPage = 1;
        updateTable();
    });

    // Insert search input, dropdown, and pagination above the table
    table.parentElement.insertBefore(searchInput, table);
    table.parentElement.insertBefore(entriesLabel, searchInput);
    table.parentElement.appendChild(paginationDiv);

    updateTable(); // Initialize table
});

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("uniqueNames");
    const rows = table.getElementsByTagName("tr");
    const tbody = table.getElementsByTagName("tbody")[0];

    // Create search input
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search members...");
    searchInput.style.margin = "10px 0";
    
    // Create entries dropdown
    const entriesLabel = document.createElement("label");
    entriesLabel.textContent = "Show ";
    
    const entriesSelect = document.createElement("select");
    [5, 10, 15, 20].forEach(num => {
        let option = document.createElement("option");
        option.value = num;
        option.textContent = num;
        entriesSelect.appendChild(option);
    });
    
    entriesLabel.appendChild(entriesSelect);
    entriesLabel.appendChild(document.createTextNode(" entries "));

    // Create pagination
    const paginationDiv = document.createElement("div");
    paginationDiv.style.marginTop = "10px";

    let currentPage = 1;
    let rowsPerPage = parseInt(entriesSelect.value);

    function updateTable() {
        let filter = searchInput.value.toLowerCase();
        let filteredRows = [];
        
        // Filter rows based on search
        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName("td");
            let found = false;
            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(filter)) {
                    found = true;
                    break;
                }
            }
            if (found) filteredRows.push(rows[i]);
        }

        // Calculate total pages
        let totalPages = Math.ceil(filteredRows.length / rowsPerPage);
        if (currentPage > totalPages) currentPage = totalPages || 1;

        // Display rows for current page
        for (let i = 1; i < rows.length; i++) {
            rows[i].style.display = "none";
        }
        for (let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < filteredRows.length; i++) {
            filteredRows[i].style.display = "";
        }

        updatePaginationButtons(totalPages);
    }

    function updatePaginationButtons(totalPages) {
        paginationDiv.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            let btn = document.createElement("button");
            btn.textContent = i;
            btn.style.margin = "3px";
            btn.style.padding = "5px";
            btn.style.cursor = "pointer";
            btn.style.border = i === currentPage ? "2px solid black" : "1px solid gray";
            btn.addEventListener("click", () => {
                currentPage = i;
                updateTable();
            });
            paginationDiv.appendChild(btn);
        }
    }

    // Event Listeners
    searchInput.addEventListener("keyup", updateTable);
    entriesSelect.addEventListener("change", function () {
        rowsPerPage = parseInt(this.value);
        currentPage = 1;
        updateTable();
    });

    // Insert search input, dropdown, and pagination above the table
    table.parentElement.insertBefore(searchInput, table);
    table.parentElement.insertBefore(entriesLabel, searchInput);
    table.parentElement.appendChild(paginationDiv);

    updateTable(); // Initialize table
});

document.addEventListener("DOMContentLoaded", function () {
    const blackBelts = document.querySelectorAll(".black-belt");

    blackBelts.forEach(blackBelt => {
        blackBelt.addEventListener("mouseenter", function () {
            this.querySelector(".social-icons").style.opacity = "1";
        });

        blackBelt.addEventListener("mouseleave", function () {
            this.querySelector(".social-icons").style.opacity = "0";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Create the lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img class="lightbox-img" id="lightbox-img">
            <div class="lightbox-controls">
                <span class="prev">&#10094;</span>
                <span class="next">&#10095;</span>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let images = document.querySelectorAll(".awards-gallery img");
    let currentIndex = 0;

    // Function to open lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.style.display = "flex";
    }

    // Add event listeners to images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navigate to previous image
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    // Navigate to next image
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    });

    // Close lightbox when clicking outside
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".contact-container").forEach(container => {
        // Check if the container has meaningful content
        if (!container.innerText.trim()) {
            container.remove(); // Completely remove the empty div
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const linksContainer = document.querySelector(".links-container");

    menuToggle.addEventListener("click", function () {
        linksContainer.classList.toggle("active"); // Add/remove 'active' class
    });
});

});
