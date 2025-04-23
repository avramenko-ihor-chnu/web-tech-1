function show_n(n) {  // Removed `int` (JavaScript doesn't use type declarations)
    // 1. Hide all LABS elements
    const LABS = document.getElementsByClassName('LABS'); // Correct method name
    for (let element of LABS) {
        element.classList.add('hidden'); // Use `add()` instead of `setAttribute`
    }

    // 2. Show the selected Lab_n
    const LABA_n = document.getElementById(`Lab_${n}`);
    if (LABA_n) { // Check if element exists to avoid errors
        LABA_n.classList.remove('hidden'); // Use `remove()` to ensure it's shown
    }
}

function show_1(){show_n(1);}
function show_2(){show_n(2);}
function show_3(){show_n(3);}
function show_4(){show_n(4);}
function show_5(){show_n(5);}
function show_6(){show_n(6);}
function show_7(){show_n(7);}
