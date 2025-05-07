document.addEventListener('DOMContentLoaded', () => {
    const callNowButton = document.getElementById('call-now-btn');
    const modal = document.getElementById('weird-modal');
    const closeModalButton = document.querySelector('.close-btn');
    const modalMessage = document.getElementById('modal-message');
    const sanityCheckButton = document.getElementById('sanity-check-btn');
    const sanityMessage = document.getElementById('sanity-message');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cursedFollower = document.getElementById('cursed-cursor-follower');
    const glitchTexts = document.querySelectorAll('.glitch-text');

    // --- "CALL NOW!" Button ---
    const weirdCallMessages = [
        "The Plunger Dimension is busy. Please unclog reality and try again.",
        "To speak to a Plunger Representative, first solve the riddle of the Sphinx... then press 1.",
        "ERROR 404: Sanity not found. Your call cannot be completed as dialed.",
        "We are experiencing higher than normal call volumes from the 5th dimension. Your patience is... noted.",
        "Did you mean to call... yourself? Think about it.",
        "The lines are currently clogged. Try plunging your phone.",
        "A gurgling sound answers. It seems pleased you called."
    ];

    callNowButton.addEventListener('click', () => {
        modalMessage.textContent = weirdCallMessages[Math.floor(Math.random() * weirdCallMessages.length)];
        modal.style.display = 'block';
        // Play a weird sound (optional, requires an audio file)
        // const weirdSound = new Audio('path/to/weird_sound.mp3');
        // weirdSound.play();
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // --- Sanity Check Button ---
    const sanityResponses = [
        "Sanity levels... nominal? Who are we kidding?",
        "WARNING: Reality integrity at 37%. Proceed with caution.",
        "System scan complete. You are... adequately weird.",
        "Results: Inconclusive. Try again after coffee. Or don't.",
        "The hamsters powering this site report all is... *squeak*",
        "This is fine. Everything is fine. (It's not).",
        "Your sanity is not the plunger's concern."
    ];
    let sanityClicks = 0;
    sanityCheckButton.addEventListener('click', () => {
        sanityClicks++;
        sanityMessage.textContent = sanityResponses[Math.floor(Math.random() * sanityResponses.length)];
        document.body.style.filter = `hue-rotate(${sanityClicks * 15}deg) contrast(${1 + sanityClicks * 0.05})`;
        sanityCheckButton.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${1 + Math.random() * 0.2})`;
        if (sanityClicks > 5) {
            sanityMessage.textContent = "Okay, that's enough reality bending for one day. Or is it?";
            document.body.style.filter = 'none'; // Reset filter after too many clicks
            sanityClicks = 0;
        }
    });

    // --- "Add to Cart" Buttons ---
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.textContent = 'It yearns...';
            e.target.disabled = true;
            e.target.style.backgroundColor = '#ff00ff';
            e.target.style.color = '#000';
            setTimeout(() => {
                e.target.textContent = 'Captured!';
                e.target.style.transform = 'skewX(0deg) scale(1)';
            }, 1500);
        });
    });

    // --- Cursed Cursor Follower ---
    if (cursedFollower) {
        document.addEventListener('mousemove', (e) => {
            // Add slight random offsets for a "jittery" or "lagging" effect
            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;
            cursedFollower.style.left = `${e.pageX + offsetX}px`;
            cursedFollower.style.top = `${e.pageY + offsetY}px`;
        });
    }

    // --- Glitch Text Effect ---
    const chars = "!<>-_\\/[]{}—=+*^?#________"; // Characters for glitching

    function glitchEffect(element) {
        const originalText = element.dataset.originalText || element.textContent;
        element.dataset.originalText = originalText; // Store original text if not already stored

        let iterations = 0;
        const interval = setInterval(() => {
            element.textContent = originalText.split("")
                .map((letter, index) => {
                    if (index < iterations && Math.random() > 0.7) { // More glitch at the start, random chance
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    if (Math.random() > 0.95) { // Small chance for any char to glitch
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    return letter;
                })
                .join("");

            if (iterations >= originalText.length * 1.5) { // Make it glitch a bit longer than text length
                clearInterval(interval);
                element.textContent = originalText; // Reset to original
            }
            iterations += 1;
        }, 30 + Math.random() * 30); // Vary speed slightly
    }

    glitchTexts.forEach(el => {
        // Initial store for any text that might not get hovered/clicked right away
        if(!el.dataset.originalText) el.dataset.originalText = el.textContent;

        el.addEventListener('mouseover', () => {
            if (Math.random() > 0.5) { // Randomly decide to glitch on hover
                glitchEffect(el);
            }
        });
        // Periodically glitch some text elements
        setInterval(() => {
            if (Math.random() > 0.85) { // 15% chance to glitch any element periodically
                const randomEl = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
                glitchEffect(randomEl);
            }
        }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    });

    // Initial random glitch on load for a few elements
    setTimeout(() => {
        for(let i=0; i<2; i++) {
            const randomEl = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
            glitchEffect(randomEl);
        }
    }, 500);


    // --- Random small misalignments on load ---
    const allElements = document.querySelectorAll('body *'); // Select almost everything
    allElements.forEach(el => {
        if (Math.random() < 0.1) { // Apply to a small percentage of elements
            const rX = (Math.random() - 0.5) * 4; // Random rotation -2 to 2 deg
            const tX = (Math.random() - 0.5) * 5; // Random translate X -2.5 to 2.5 px
            const tY = (Math.random() - 0.5) * 5; // Random translate Y -2.5 to 2.5 px
            // Only apply if not explicitly styled with transform already, or apply carefully
            if (!el.style.transform || !el.style.transform.includes('rotate') && !el.style.transform.includes('translate')) {
                el.style.transform += ` rotate(${rX}deg) translate(${tX}px, ${tY}px)`;
            }
        }
    });

    console.log("Plunger.exe initialized. Proceed with... whatever it is you're doing.");
});