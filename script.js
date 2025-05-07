document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Plunger.exe initializing...");

    const callNowButton = document.getElementById('call-now-btn');
    const modal = document.getElementById('weird-modal');
    const closeModalButton = document.querySelector('.close-btn');
    const modalMessage = document.getElementById('modal-message');
    const sanityCheckButton = document.getElementById('sanity-check-btn');
    const sanityMessage = document.getElementById('sanity-message');
    const cursedFollower = document.getElementById('cursed-cursor-follower');
    const glitchTexts = document.querySelectorAll('.glitch-text');

    // --- Cart and Checkout Elements ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    console.log("Add to Cart Buttons Found:", addToCartButtons.length, addToCartButtons);

    const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
    console.log("Proceed to Checkout Button Element:", proceedToCheckoutBtn);

    const cartCountSpan = document.getElementById('cart-count');
    console.log("Cart Count Span Element:", cartCountSpan);

    const checkoutSection = document.getElementById('checkout-section');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutMessageEl = document.getElementById('checkout-message');
    const sacrificeSelect = document.getElementById('sacrifice');

    let itemsInCart = 0;

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

    if (callNowButton) {
        callNowButton.addEventListener('click', () => {
            console.log("Call Now button clicked");
            if (modal && modalMessage) {
                modalMessage.textContent = weirdCallMessages[Math.floor(Math.random() * weirdCallMessages.length)];
                modal.style.display = 'block';
            } else {
                console.error("Modal or modal message element not found for Call Now.");
            }
        });
    } else {
        console.warn("Call Now button not found.");
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target == modal && modal) {
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
    if (sanityCheckButton) {
        sanityCheckButton.addEventListener('click', () => {
            console.log("Sanity Check button clicked");
            sanityClicks++;
            if (sanityMessage) {
                sanityMessage.textContent = sanityResponses[Math.floor(Math.random() * sanityResponses.length)];
            }
            document.body.style.filter = `hue-rotate(${sanityClicks * 15}deg) contrast(${1 + sanityClicks * 0.05}) blur(${sanityClicks * 0.1}px)`;
            sanityCheckButton.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${1 + Math.random() * 0.2})`;
            if (sanityClicks > 5) {
                if (sanityMessage) sanityMessage.textContent = "Okay, that's enough reality bending for one day. Or is it? The walls are starting to melt.";
                document.body.style.filter = 'none';
                sanityClicks = 0;
            }
        });
    } else {
        console.warn("Sanity Check button not found.");
    }

    // --- "Add to Cart" Buttons ---
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                console.log("'Add to Cart' button clicked:", e.target.textContent);
                const clickedButton = e.target;

                if (!clickedButton.disabled) {
                    itemsInCart++;
                    console.log("Items in cart:", itemsInCart);

                    if (cartCountSpan) {
                        cartCountSpan.textContent = itemsInCart;
                    } else {
                        console.error("CRITICAL: cartCountSpan element is missing! Cannot update cart count.");
                        // alert("Error: Cart count display element is missing!"); // More visible error
                    }

                    clickedButton.textContent = 'It yearns...';
                    clickedButton.disabled = true;
                    clickedButton.style.backgroundColor = '#ff00ff';
                    clickedButton.style.color = '#000';

                    if (itemsInCart > 0 && proceedToCheckoutBtn) {
                        proceedToCheckoutBtn.style.display = 'inline-block';
                        proceedToCheckoutBtn.style.transform = `rotate(${(Math.random()-0.5) * 1.5}deg) scale(1.05)`;
                        console.log("Proceed to Checkout button should now be visible.");
                    } else {
                        if (!proceedToCheckoutBtn) {
                            console.error("CRITICAL: proceedToCheckoutBtn element is missing! Cannot show checkout button.");
                            // alert("Error: Proceed to checkout button element is missing!"); // More visible error
                        }
                        console.log("Condition to show checkout button not met. itemsInCart:", itemsInCart, "proceedToCheckoutBtn exists:", !!proceedToCheckoutBtn);
                    }

                    setTimeout(() => {
                        clickedButton.textContent = 'Captured!';
                    }, 1500);
                } else {
                    console.log("Button was already disabled:", clickedButton.textContent);
                }
            });
        });
    } else {
        console.warn("No 'Add to Cart' buttons found on the page. Check class names in HTML.");
    }

    // --- Proceed to Checkout Button ---
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', () => {
            console.log("Proceed to Checkout button clicked");
            if (checkoutSection) {
                checkoutSection.style.display = 'block';
                checkoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                checkoutSection.style.borderColor = `rgb(${Math.floor(Math.random()*150)}, ${Math.floor(Math.random()*150)}, ${Math.floor(Math.random()*150)})`;
                checkoutSection.style.transform = `rotate(${(Math.random()-0.5)*2}deg)`;
            } else {
                console.error("Checkout section element not found.");
            }
        });
    } else {
        // This was already logged above, but good to be aware if it's null here
        // console.warn("Proceed to Checkout button element not found (for attaching its own click listener).");
    }

    // --- Cursed Cursor Follower ---
    if (cursedFollower) {
        document.addEventListener('mousemove', (e) => {
            const offsetX = (Math.random() - 0.5) * 15;
            const offsetY = (Math.random() - 0.5) * 15;
            cursedFollower.style.left = `${e.pageX + offsetX}px`;
            cursedFollower.style.top = `${e.pageY + offsetY}px`;
        });
    }

    // --- Glitch Text Effect ---
    const chars = "!<>-_\\/[]{}—=+*^?#________@$%&";
    function glitchEffect(element) {
        if (!element) return; // Prevent errors if element is null
        const originalText = element.dataset.originalText || element.textContent;
        if (!originalText || !originalText.trim()) return;
        element.dataset.originalText = originalText;

        let iterations = 0;
        const interval = setInterval(() => {
            if (!element) { clearInterval(interval); return; } // Check if element still exists
            element.textContent = originalText.split("")
                .map((letter, index) => {
                    if (letter === ' ') return ' ';
                    if (index < iterations && Math.random() > 0.6) {
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    if (Math.random() > 0.92) {
                        return chars[Math.floor(Math.random() * chars.length)];
                    }
                    return letter;
                })
                .join("");

            if (iterations >= originalText.length * 2) {
                clearInterval(interval);
                if (element) element.textContent = originalText;
            }
            iterations += 1;
        }, 25 + Math.random() * 25);
    }

    if (glitchTexts.length > 0) {
        glitchTexts.forEach(el => {
            if(!el.dataset.originalText) el.dataset.originalText = el.textContent;

            el.addEventListener('mouseover', () => {
                if (Math.random() > 0.4) {
                    glitchEffect(el);
                }
            });
            if (Math.random() < 0.1) {
                setTimeout(() => glitchEffect(el), Math.random() * 3000);
            }
        });

        setTimeout(() => {
            const elementsToGlitch = Array.from(glitchTexts).sort(() => 0.5 - Math.random()).slice(0,3);
            elementsToGlitch.forEach(el => glitchEffect(el));
        }, 700);
    }

    // --- Random small misalignments on load ---
    // ... (this part is less likely to cause the specific issue but kept for completeness) ...
    const allElements = document.querySelectorAll('body *:not(script):not(style)');
    allElements.forEach(el => {
        if (Math.random() < 0.08 && !el.closest('#cursed-cursor-follower')) {
            const rX = (Math.random() - 0.5) * 2;
            const tX = (Math.random() - 0.5) * 3;
            const tY = (Math.random() - 0.5) * 3;

            let currentTransform = el.style.transform || "";
            if (!currentTransform.includes('rotate') && !currentTransform.includes('translate') && !currentTransform.includes('skew')) {
                el.style.transform = `rotate(${rX}deg) translate(${tX}px, ${tY}px)`;
            }
        }
    });


    // --- Checkout Form Logic ---
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Checkout form submitted.");
            if (!checkoutMessageEl) {
                console.error("Checkout message element not found. Cannot display submission status.");
                return;
            }
            checkoutMessageEl.style.display = 'none';
            checkoutMessageEl.className = 'glitch-text';

            const trueName = document.getElementById('true-name').value;
            const realm = document.getElementById('realm').value;
            const psychicImprint = document.getElementById('psychic-imprint').value;
            const sacrifice = document.getElementById('sacrifice').value;
            const incantation = document.getElementById('incantation').value;
            const timeConstruct = document.getElementById('time-construct').checked;

            let errors = [];
            // ... (validation logic) ...
            if (trueName.length < 3 || !trueName.match(/[aeiou]/i)) {
                errors.push("Your 'True Name' lacks cosmic resonance or a decent vowel. Try harder.");
            }
            if (realm.length < 5 || realm.toLowerCase().includes("normal")) {
                errors.push("That 'Realm' sounds suspiciously mundane. We require more... esoteric coordinates.");
            }
            if (!psychicImprint) {
                errors.push("How do you expect confirmation without choosing a Psychic Imprint? Amateur.");
            }
            if (!sacrifice) {
                errors.push("No sacrifice? The Void does not work for free, mortal.");
            }
            if (incantation.length < 8 || incantation.toLowerCase() === "password") {
                errors.push("Your 'Secret Incantation' is weak! It must be at least 8 characters and not 'password'. Honestly.");
            }
            if (!timeConstruct) {
                errors.push("You MUST acknowledge the fluidity of time. It's non-negotiable... for now.");
            }


            if (errors.length > 0) {
                checkoutMessageEl.innerHTML = "The Entities find your offering... lacking:<ul>" + errors.map(e => `<li>${e}</li>`).join('') + "</ul>";
                checkoutMessageEl.classList.add('error');
                checkoutMessageEl.style.display = 'block';
                glitchEffect(checkoutMessageEl);
            } else {
                checkoutMessageEl.textContent = `Transaction initiated with ${sacrifice} as tribute! Your plunger, designated for ${trueName} of ${realm}, will arrive via ${psychicImprint}... eventually. The incantation '${incantation.substring(0,3)}...' has been... noted. Do not resist the gurgling.`;
                checkoutMessageEl.classList.add('success');
                checkoutMessageEl.style.display = 'block';
                glitchEffect(checkoutMessageEl);

                checkoutForm.reset();
                itemsInCart = 0;
                if (cartCountSpan) cartCountSpan.textContent = itemsInCart;
                if(proceedToCheckoutBtn) proceedToCheckoutBtn.style.display = 'none';

                document.body.style.transition = 'filter 1s ease-in-out';
                document.body.style.filter = 'invert(80%) sepia(50%)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 1500 + Math.random() * 1000);
            }
            checkoutMessageEl.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.warn("Checkout form not found.");
    }

    // --- Sacrifice Select Interaction (Weird Feature) ---
    if (sacrificeSelect) {
        sacrificeSelect.addEventListener('change', (e) => {
            console.log("Sacrifice changed to:", e.target.value);
            const sacrificeValue = e.target.value;
            let hue = 0;
            let blurAmount = 0; // Renamed to avoid conflict with function 'blur'
            if (sacrificeValue === 'sock') hue = 30;
            else if (sacrificeValue === 'caps') hue = 60;
            else if (sacrificeValue === 'laughter') hue = 120;
            else if (sacrificeValue === 'sanity-sliver') { hue = 270; blurAmount = 1; }
            else if (sacrificeValue === 'unused-coupon') hue = 180;

            document.body.style.transition = 'filter 0.5s ease';
            document.body.style.filter = `hue-rotate(${hue}deg) blur(${blurAmount}px)`;

            e.target.style.transform = `rotate(${(Math.random()-0.5)*5}deg) scale(${1 + Math.random()*0.05})`;
        });
    } else {
        console.warn("Sacrifice select element not found.");
    }

    console.log("Plunger.exe initialization complete. All systems nominal... or are they?");
});