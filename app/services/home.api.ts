import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
});

export const apiHome = createApi({
    reducerPath: "apiHome",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getSongById: builder.query({
            query: (id) => `songs/${id}`,
        }),
        getSongs: builder.query({
            query: () => 'songs',
        }),
        createSong: builder.mutation({
            query: (newSong) => ({
                url: 'songs',
                method: 'POST',
                body: newSong,
            }),
        }),
        updateSong: builder.mutation({
            query: (updatedSong) => ({
                url: `songs/${updatedSong.get("id")}`,
                method: 'PUT',
                body: updatedSong,
            }),
        }),
        patchSong: builder.mutation({
            query: (updatedSong) => ({
                url: `songs/${updatedSong._id}`,
                method: 'PATCH',
                body: updatedSong,
            }),
        }),
        deleteSong: builder.mutation({
            query: (id) => ({
                url: `songs/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetSongByIdQuery, useGetSongsQuery, useCreateSongMutation, useUpdateSongMutation, usePatchSongMutation, useDeleteSongMutation } = apiHome;
