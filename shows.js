const main = document.querySelector('main')

// Making API Call
async function getTvShows() {
    try {
        const res = await axios.get("https://api.tvmaze.com/shows")
        const results = res.data
        showImages(results)
    } catch (err) {
        console.error(err)
    }
}

getTvShows()



// Render Shows
function showImages(shows) {
    main.innerHTML = ''

    shows.forEach((show) => {

        // Show card with image, title, seeInfo button
        const showCard = document.createElement('div')
        showCard.classList.add('show-card')

       
        // Div that includes show image, title, button so that we can use flex
        const showImgTitleButton = document.createElement('div')
        showImgTitleButton.classList.add('show-img-title-button')

        
        // Show Image
        const img = document.createElement('img')
        img.classList.add('card-img')
        img.src = show.image.medium

        
        //  Show Title 
        const title = document.createElement('h5')
        title.innerText = show.name

        
        // Show SeeInfo Button
        const seeInfo = document.createElement('button')
        seeInfo.classList.add('show-info')
        seeInfo.innerText = 'See Info'


        showImgTitleButton.append(img, title, seeInfo)
        showCard.append(showImgTitleButton)
        main.append(showCard)
    })
}