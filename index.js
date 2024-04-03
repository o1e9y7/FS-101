// function getComentsByUser(id) {
//     const BASE_URL = 'https://jsonplaceholder.typicode.com'
//     const AND_POINT = '/comments'
//     const params = new URLSearchParams({
//      postId: id,
//     })
// const url = `${BASE_URL}${AND_POINT}?${params}`;
//     console.log(url);

//     const options = {
//         headers: {
//             hello: 'world',
//             api_key: '125454',
//         }
//     }
//     fetch(url, options);
// }



// getComentsByUser(5)
// getComentsByUser(4)

const refs = {
    formEl: document.querySelector('.js-binance-form'),
    infoEl: document.querySelector('.js-binance-info')
};

// ====================================

function getPrice(query) {
    const BASE_URL = 'https://binance43.p.rapidapi.com';
    const AND_POINT = '/ticker/price';
    const params = new URLSearchParams({
        symbol: query,
    })
    const url = `${BASE_URL}${AND_POINT}?${params}`;
    console.log(url)
    const options = {
        headers: {
            'X-RapidAPI-Key': '63fd24571bmshe00957f3f3e987cp131725jsn1a234c8252c9',
            'X-RapidAPI-Host': 'binance43.p.rapidapi.com',

        },
    };
    return fetch(url, options).then(res => res.json())
    
}
// getPrice().then(data => {
//     // console.log(data)
// })



refs.formEl.addEventListener('submit', e => {
    e.preventDefault();
    const query = refs.formEl.elements.query.value;
    console.log(query)
    const markup = symbolTemplate(data)
    refs.infoEl.innerHTML = markup;
})


function symbolTemplate(obj) {
    return `<span>${obj.symbol}</span>
    <span>${obj.symbol}</span>`;
}

function renderTemplate(obj) {
    const markup = symbolTemplate(obj);
    refs.infoEl.innerHTML = markup;
}