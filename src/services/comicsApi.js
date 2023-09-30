import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const comicsApi = createApi({
  reducerPath: "comic",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com:443/v1/public/",
  }),
  endpoints: (builder) => ({
    getAllComics: builder.query({
      query: ({ offset, limit }) => ({
        url: `comics?orderBy=-focDate&limit=${limit}&offset=${offset}}&apikey=104e3c757d421f0a65abe23d7a68bcb3`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const comics = responseData.data.results;
        return {
          ...responseData.data,
          results: comics.map((el) => {
            return {
              id: el.id,
              prices: el.prices[0].price,
              title: el.title,
              img: `${el.thumbnail?.path}.${el.thumbnail?.extension}`,
              characters: el.characters?.items.map((el) => {
                return { name: el.name, id: el.resourceURI.split("/")[6] };
              }),
              creators: el.creators.items,
              pageCount: el.pageCount,
              description: el.description || "No Description about this comics",
            };
          }),
        };
      },
    }),
    getOneComic: builder.query({
      query: ({ id }) => ({
        url: `comics/${id}?apikey=104e3c757d421f0a65abe23d7a68bcb3`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const comic = responseData.data.results[0];

        return {
          id: comic.id,
          prices: comic.prices[0].price,
          title: comic.title,
          characters: comic.characters.items.map((el) => {
            return { name: el.name, id: el.resourceURI.split("/")[6] };
          }),
          creators: comic.creators.items,
          pageCount: comic.pageCount,
          description: comic.description || "No Description about this comics",
          img: `${comic.thumbnail?.path}.${comic.thumbnail?.extension}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllComicsQuery, useGetOneComicQuery } = comicsApi;
