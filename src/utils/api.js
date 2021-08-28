import { useState } from "react";

const API_KEY = '3c1cd5cd2f74122e339e22ca5f8685d3';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (url) => {
    const req = await fetch(`${API_BASE}${url}`);
    const json = await req.json();
    return json;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'actions',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let infos = {}
        if(movieId) {
            switch(type) {
                case 'movie': {
                        infos = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                }

                case 'tv': {
                        infos = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                }
            }
        }

        return infos;
    }
};