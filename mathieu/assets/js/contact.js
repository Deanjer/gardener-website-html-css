const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let mail = params.email

let gmail = document.getElementById('gmails');
gmail.innerHTML=mail