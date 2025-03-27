var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
}


function scrollCarousel(direction) {
    const container = document.getElementById('carousel');
    const scrollAmount = 320; // Adjust as needed (slightly more than card width)

    if (direction === 1) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}


var typed = new Typed(".auto-type",{
    strings:["Web Developer","Android Developer","Video Editor"],
    typeSpeed:150,
    backSpeed:150,
    loop: true
})

var sidemenu = document.getElementById("sidemenu")
function openMenu(){
    sidemenu.style.right="0"
}
function closeMenu(){
    sidemenu.style.right = "-200px"
}

let lastScrollY = window.scrollY; // Track last scroll position

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const currentScrollY = window.scrollY;

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hide");
        } else {
            if (currentScrollY < lastScrollY) { // If scrolling up
                entry.target.classList.add("hide"); // Hide the element
                entry.target.classList.remove("show");
            }
        }

        lastScrollY = currentScrollY; // Update last scroll position
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


