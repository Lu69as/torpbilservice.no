let page = window.location.href;


// --------------------------------------------------------------------------------------- //
// Import navbar and footer from files and create link hover effect                       //
// ------------------------------------------------------------------------------------- //
{
    fetch('/src/navbar.html')
      .then(response => { return response.text() })
      .then(navHtml => document.querySelectorAll("nav").forEach((e) => {
        e.innerHTML = navHtml;

        fetch('/src/footer.html')
          .then(response => { return response.text() })
          .then(footerHtml => document.querySelectorAll("footer").forEach((e) => {
            e.innerHTML = footerHtml;
        }));
    }));
}