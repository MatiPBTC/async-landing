const API = 'https://binance43.p.rapidapi.com/ticker/price';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '009fc32304msh053cea1c293f11dp171ad3jsn7fe0b95a5614',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};

// fetch(API, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const tickers = await fetchData(API);

        let view = `
        ${tickers.map(ticker => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <h2>${ticker.symbol}<br></h2>
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"><br>${ticker.price}</span>
                    </h3>
                </div>
                </div>
        `).slice(0,4).join('')}
        `;
        console.log(view);
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();