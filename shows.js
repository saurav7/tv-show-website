const main = document.querySelector('main')

// Making API Call
async function getTvShows() {
    try{
        const res = await axios.get("https://api.tvmaze.com/shows")
    const results = res.data
    showImages(results)
    }catch(err){
        console.error(err)
    }
    
}

getTvShows()