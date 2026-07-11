// =========================
// Premium Landing Page Script
// =========================

// Fade-in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".hero,.welcome,.connect,.card,footer")
.forEach(el=>observer.observe(el));

// Gold line animation
const line = document.querySelector(".gold-line");

setInterval(()=>{
    line.animate([
        {transform:"scaleX(.3)",opacity:.4},
        {transform:"scaleX(1)",opacity:1},
        {transform:"scaleX(.3)",opacity:.4}
    ],{
        duration:2200,
        easing:"ease-in-out"
    });
},2200);

// Card hover effect
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// Smooth page loading
window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
