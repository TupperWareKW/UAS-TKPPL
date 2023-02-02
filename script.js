import routes from "./routes/routes.js";

async function renderPage() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    const page = routes[url];
    const body = document.querySelector('body');
    if(url === 'home') {
        body.innerHTML = headerFooter;
        document.querySelector('main').innerHTML = await page.render();
        await page.afterRender();
    }else {
        body.innerHTML = await page.render();
        await page.afterRender();
    }
    
}

window.addEventListener('load', function() {
    renderPage();
})

window.addEventListener('hashchange', function() {
    renderPage();
})