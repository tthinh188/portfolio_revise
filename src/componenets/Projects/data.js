import covid_tracking from '../../assets/covid_app.png'
import movie_recommender from '../../assets/movie_recommender.jpg';
import memories from '../../assets/memories.png';
import social_media from '../../assets/social_media.jpg';

const projects = [
    { id: 1, title: 'Covid-19 Tracking App', description: 'Global and individual country statistic of COVID-19 and graph allow users monitor COVID-19 around the world.', demo: 'https://covid-tracking-tp.netlify.app/', github: 'https://github.com/tthinh188/covid-tracking', image: covid_tracking },
    { id: 2, title: 'Movie Recommender', description: 'Web app that recommends top trending movies with trailers.', demo: 'https://movierecommender.netlify.app/', github: 'https://github.com/tthinh188/MovieRecommender', image: movie_recommender},
    { id: 3, title: 'Memories', description: "Create posts and see other people's memories in newsfeed.", demo: 'https://memories-moment.netlify.app/', github:'https://github.com/tthinh188/memories', image: memories } ,
    { id: 4, title: 'Social Media App', description: "Social media app to share, view, comment and like other people's posts", demo:'https://socialmedia-app-demo.netlify.app/', github:'https://github.com/tthinh188/social-media-app', image: social_media},
]

export default projects;