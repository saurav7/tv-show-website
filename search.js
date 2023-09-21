const form = document.querySelector('#search-form')

// Adding Event Listener and Making API call
form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        const searchTerm = form.elements.query.value
        const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
        showSearchImages(res.data)
        form.elements.query.value = '';
    } catch (err) {
        console.error(err)
    }
})

// Render Searched Shows
function showSearchImages(shows){
    main.innerHTML = ''

    for (let result of shows) {
        if (result.show.image) {
            // Show card with image, title, seeInfo button
            const showCard = document.createElement('div')
            showCard.classList.add('show-card')

            // Div that includes show image, title, button so that we can use flex
            const showImgTitleButton = document.createElement('div')
            showImgTitleButton.classList.add('show-img-title-button')

            // Show Image
            const img = document.createElement('img')
            img.classList.add('card-img')
            img.src = result.show.image.medium

            //  Show Title 
            const title = document.createElement('h5')
            title.innerText = result.show.name

            // Show SeeInfo Button
            const seeInfo = document.createElement('button')
            seeInfo.classList.add('show-info')
            seeInfo.innerText = 'See Info'

            showImgTitleButton.append(img, title, seeInfo)
            showCard.append(showImgTitleButton)
            main.append(showCard)
        }
    }
}
