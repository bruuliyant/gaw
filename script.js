let body = document.querySelector('.wrapper');

console.log('arbuz');

axios.get('https://raw.githubusercontent.com/bruuliyant/json/main/server.json')
    .then(function (response) {
        let data = response.data;
        console.log(data);
        for (let item of data) {
            let div = document.createElement('div')
            let title = document.createElement('p');
            let img = document.createElement('img');
            let price = document.createElement('p');
            let skidka = document.createElement('p');

            div.classList.add('div')
            img.classList.add('img')
            title.classList.add('tittle')

            skidka.textContent = item.skidka;
            price.textContent = item.price;
            img.src = item.img;
            title.textContent = item.title;

            body.append(div)
            div.append(title);
            div.append(img);
            div.append(price);
            div.append(skidka);
        }
    })
    .catch(function (error) {
        console.log(error);
    });