        // Disable right-click context menu
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);

        // Disable specific keyboard shortcuts
        document.onkeydown = function (e) {
            // Prevent F12, Ctrl + Shift + I, and Ctrl + U
            if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "U")) {
                e.preventDefault();
                return false;
            }
        };

        // Block Ctrl + U
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault(); // Prevent the default action
                // alert("The 'View Source' feature is disabled on this page.");
            }
        });
        // Block Ctrl + Shift + J
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.shiftKey && e.key === "J") {
                e.preventDefault(); // Prevent the default action
                // alert("The 'View Source' feature is disabled on this page.");
            }
        });
        // Block Ctrl + Shift + c
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.shiftKey && e.key === "C") {
                e.preventDefault(); // Prevent the default action
                // alert("The 'View Source' feature is disabled on this page.");
            }
        });


        // Prevent image dragging
        document.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });

        // Preventing right-click on images specifically
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });
        });

        // Prevent copying text
        document.addEventListener('copy', function (e) {
            e.preventDefault();
            alert("Copying text is disabled.");
        });

        // Preventing selection of text
        document.addEventListener('selectstart', function (e) {
            e.preventDefault();
        });


        // MacOS specific prevention for Command shortcuts

        // Block Cmd + Shift + I
        document.addEventListener('keydown', function (e) {
            if (e.metaKey && e.shiftKey && e.key === "I") {
                e.preventDefault(); // Prevent the default action
            }
        });
        // Block  Cmd + U (View Source)
        document.addEventListener('keydown', function (e) {
            if (e.metaKey && e.key === "U") {
                e.preventDefault(); // Prevent the default action
            }
        });
        // Block  Cmd + Shift + J (Console)
        document.addEventListener('keydown', function (e) {
            if (e.metaKey && e.shiftKey && e.key === "J") {
                e.preventDefault(); // Prevent the default action
            }
        });
        // Block  Cmd + S (Save)
        document.addEventListener('keydown', function (e) {
            if (e.metaKey && e.key === "S") {
                e.preventDefault(); // Prevent the default action
            }
        });
        // Block Cmd + U for MacOS
        document.addEventListener('keydown', function (e) {
            if (e.metaKey && e.key === 'u') {
                e.preventDefault(); // Prevent the default action
                // alert("The 'View Source' feature is disabled on this page.");
            }
        });
        // Disable opening developer tools using the keyboard (MacOS)
        window.addEventListener('keydown', function (e) {
            if (e.metaKey && e.shiftKey && e.key === "I") {
                e.preventDefault();
            }
        });
        // Detect F12 or Developer Tools key combinations and alert
        document.addEventListener('keydown', function (e) {
            if (e.key === "F12" || (e.metaKey && e.shiftKey && e.key === "I")) {
                e.preventDefault();
            }
        });