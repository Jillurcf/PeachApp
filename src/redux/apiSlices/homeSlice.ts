import { api } from "../api/baseApi";

const homeSlice = api.injectEndpoints({
    endpoints: builder => ({
         getHome: builder.query({
              query: (perPage = 10) => ({
                url: `/get-nearby-users?per_page=${perPage}`,
                method: "GET"
              }),
              transformErrorResponse: (response) => response?.data,
              providesTags: ['user',]
            }),
    })
})

export const {
useGetHomeQuery,
}= homeSlice