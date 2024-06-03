 const refs = {
      formEl: document.querySelector('.js-binance-form'),
      infoEl: document.querySelector('.js-binance-info')
    };

    function getPrice(query) {
      const BASE_URL = 'https://binance43.p.rapidapi.com';
      const AND_POINT = '/ticker/price';
      const params = new URLSearchParams({ symbol: query });
      const url = `${BASE_URL}${AND_POINT}?${params}`;
      const options = {
        headers: {
          'X-RapidAPI-Key': '63fd24571bmshe00957f3f3e987cp131725jsn1a234c8252c9',
          'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
        },
      };
      return fetch(url, options).then(res => res.json());
    }

    refs.formEl.addEventListener('submit', e => {
      e.preventDefault();
      const query = refs.formEl.elements.query.value;
      getPrice(query)
        .then(data => {
          if (data) {
            renderTemplate(data);
          } else {
            console.log("Отримано порожні дані або помилку.");
          }
        })
        .catch(error => console.error("Сталася помилка при отриманні даних:", error));
    });

    function symbolTemplate(obj) {
      return `<span>${obj.symbol}</span>
              <span>${obj.price}</span>`;
    }

    function renderTemplate(obj) {
      const markup = symbolTemplate(obj);
      refs.infoEl.innerHTML = markup;
    }