(function() {
    // Function to hide the specific div element
    function hideSpecificDiv() {
        const div = document.querySelector('.mantine-Stack-root.mantine-ah8x6s');
        if (div) {
            div.style.display = 'none';
        }
    }

    // Function to hide the button
    function hideButton() {
        const buttonSelectors = [
            'button.mantine-57akiu',  // Dark theme button class
            'button.mantine-7biszf'   // Light theme button class
        ];
        
        buttonSelectors.forEach(selector => {
            const buttons = document.querySelectorAll(selector);
            buttons.forEach(button => {
                const textDiv = button.querySelector('.mantine-16061ow');
                if (textDiv) {
                    const text = textDiv.textContent.trim();
                    if (text === '积分总榜' || text === 'Scoreboard' || text === 'ランキング') {
                        button.style.display = 'none';
                    }
                }
            });
        });
    }

    // Function to hide divs containing specific text
    function hideDivsContainingText(texts) {
        const divs = document.querySelectorAll('div.mantine-Stack-root.mantine-1nmrv06');
        divs.forEach(div => {
            texts.forEach(text => {
                if (div.textContent.includes(text)) {
                    div.style.display = 'none';
                }
            });
        });
    }

    // Function to check the current URL and hide elements if necessary
    function checkUrlAndHideElements() {
        const currentPath = window.location.pathname;
        const regex = /^\/games\/\d+\/challenges$/;
        if (regex.test(currentPath)) {
            hideButton();
            hideSpecificDiv();
            // Hide divs containing specific text in multiple languages
            hideDivsContainingText(['支队伍攻克', 'solves', '解決回数']);
        }
    }

    // Initial check
    checkUrlAndHideElements();

    // Use MutationObserver to watch for changes in the document
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                checkUrlAndHideElements();
            }
        });
    });

    // Observe changes in the body
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    // Also listen to the popstate event to handle back/forward navigation
    window.addEventListener('popstate', checkUrlAndHideElements);
})();
