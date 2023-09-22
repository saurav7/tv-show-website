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
function showSearchImages(shows) {
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

            seeInfo.addEventListener('click', openModal)

            showImgTitleButton.append(img, title, seeInfo)
            showCard.append(showImgTitleButton)
            main.append(showCard)

            // Function to open the Modal
            function openModal() {

                modal.classList.toggle('hidden')

                // Modal card with image, title, genres, rating
                const modalCard = document.createElement('div')
                modalCard.classList.add('modal-card')

                // Close div to close the Modal Card
                const close = document.createElement('div')
                close.classList.add('close')
                close.innerText = '+'

                // Div to hold img, title, genres, rating
                const modalImgTitleGenresRating = document.createElement('div')
                modalImgTitleGenresRating.classList.add('img-title-genres-rating')

                // Modal  card's img
                const modalImg = document.createElement('img')
                modalImg.classList.add('card-img')
                modalImg.src = result.show.image.medium

                // Modal card's title, genres, rating
                const titleGenresRating = document.createElement('div')
                titleGenresRating.classList.add('title-genres-rating')

                // Modal title
                const modaltitle = document.createElement('h5')
                modaltitle.classList.add('title')
                modaltitle.innerHTML = `Name: ${result.show.name}`

                // Modal genres
                const modalGenres = document.createElement('h5')
                modalGenres.classList.add('genres')
                modalGenres.innerHTML = `Genres: ${result.show.genres}`

                // Modal rating
                const modalRating = document.createElement('h5')
                modalRating.classList.add('rating')
                modalRating.innerHTML = `Rating: ${result.show.rating.average}`

                titleGenresRating.append(modaltitle, modalGenres, modalRating)
                modalImgTitleGenresRating.append(modalImg, titleGenresRating)
                modalCard.append(close, modalImgTitleGenresRating)
                modal.append(modalCard)

                // Event listener to close the modal 
                close.addEventListener('click', closeModal)
                modal.addEventListener('click', closeModal)
            }

            // Function to close the modal
            function closeModal() {
                modal.classList.add('hidden')
            }
        }
    }
}
