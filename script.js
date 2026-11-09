let page = window.location.href;


// --------------------------------------------------------------------------------------- //
// Import navbar and footer from files and create link hover effect                       //
// ------------------------------------------------------------------------------------- //
{
    fetch('/src/navbar.html')
      .then(response => { return response.text() })
      .then(navHtml => document.querySelectorAll("nav").forEach((nav) => {
        nav.innerHTML = navHtml;

        let burgerMenu = nav.querySelector(".burgerMenu");
        nav.querySelector(".burgerMenu-icon").addEventListener("click", () => burgerMenu.classList.add("burgerMenu-open"));
        nav.querySelector(".burgerMenu-bgClose").addEventListener("click", () => burgerMenu.classList.remove("burgerMenu-open"));

        fetch('/src/footer.html')
          .then(response => { return response.text() })
          .then(footerHtml => document.querySelectorAll("footer").forEach((footer) => {
            footer.innerHTML = footerHtml;
        }));
    }));
}