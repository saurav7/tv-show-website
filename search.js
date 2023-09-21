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