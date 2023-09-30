import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const charastersApi = createApi({
  reducerPath: "charaster",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gateway.marvel.com:443/v1/public/",
  }),
  /*   tagTypes: ["mcaProfile"], */
  endpoints: (builder) => ({
    getAllChar: builder.query({
      query: ({ limit, offset }) => ({
        url: `characters?limit=${limit}&offset=${offset}&apikey=104e3c757d421f0a65abe23d7a68bcb3`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        return {
          ...responseData.data,
          results: responseData.data.results.map((el) => {
            return {
              id: el.id,
              name: el.name,

              comics: el.comics.items.map((el) => {
                return { name: el.name, id: el.resourceURI.split("/")[6] };
              }),
              description:
                el.description || "No Description about this character",
              img: `${el.thumbnail?.path}.${el.thumbnail?.extension}`,
            };
          }),
        };
      },
    }),
    getChar: builder.query({
      query: ({ id }) => ({
        url: `characters/${id}?apikey=104e3c757d421f0a65abe23d7a68bcb3`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const char = responseData.data.results[0];
        return {
          id: char.id,
          name: char.name,
          comics: char.comics.items.map((el) => {
            return { name: el.name, id: el.resourceURI.split("/")[6] };
          }),
          description:
            char.description || "No Description about this character",
          img: `${char.thumbnail?.path}.${char.thumbnail?.extension}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCharQuery, useGetCharQuery } = charastersApi;
