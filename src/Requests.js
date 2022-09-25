

const requests = {
     fetchTrending: `/trending/all/week?process.env.API_KEY=${process.env.API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?process.env.API_KEY=${process.env.API_KEY}&with_networks=213`,
     fetchTopRated:`/movie/top_rated?process.env.API_KEY=${process.env.API_KEY}&language=en-US&page=1`,
     fetchActionMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=27`,
     fetchRomanticMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=99`,
};

export default requests;



/*​fetchTrending: `/trending/all/week?process.env.API_KEY=${process.env.API_KEY}&language=en-US`, 
fetchNetflixOriginals: `/discover/tv?process.env.API_KEY=${process.env.API_KEY}&with_networks=213`,
 fetchComedyMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=35`, 
 fetchHorrorMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=10749`, 
 fetchDocumentaries: `/discover/movie?process.env.API_KEY=${process.env.API_KEY}&with_genres=99`,*/
