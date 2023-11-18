const bg=document.getElementById("bg");
    const gray=document.querySelector(".gray");
    const cyan=document.querySelector(".cyan");
    const blue=document.querySelector(".blue");
    const yellow=document.querySelector(".yellow");
    const h1=document.querySelector("h1");
    const h2=document.querySelector("h2");
    gray.addEventListener("click",() => {
        bg.style.backgroundColor="gray";
        h1.style.color="white";
        h2.style.color="white";
    });
    cyan.addEventListener("click",() => {
        bg.style.backgroundColor="cyan";
        h1.style.color="darkgreen";
        h2.style.color="darkgreen";
    });
    blue.addEventListener("click",() => {
        bg.style.backgroundColor="blue";
        h1.style.color="cyan";
        h2.style.color="cyan";
    });
    yellow.addEventListener("click",() => {
        bg.style.backgroundColor="yellow";
        h1.style.color="black";
        h2.style.color="black";
    });