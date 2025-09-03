import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY!;
const rapidApiHost = process.env.NEXT_PUBLIC_RAPID_API_HOST!;
const rapidApiBaseUrl = process.env.NEXT_PUBLIC_RAPID_API_BASE_URL!;

interface ArticleSummaryResponse {
    summary: string;
}

interface ArticleSummaryParams {
    articleUrl: string;
}

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: rapidApiBaseUrl,
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", rapidApiKey);
            headers.set("X-RapidAPI-Host", rapidApiHost);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getArticleSummary: builder.query<ArticleSummaryResponse, ArticleSummaryParams>({
            query: (params) => {
                const url = `/summarize?url=${encodeURIComponent(
                    params.articleUrl
                )}&lang=en&engine=2`;
                console.log("Calling API:", rapidApiBaseUrl + url);
                return url;
            },
        }),
    }),
});


export const { useGetArticleSummaryQuery, useLazyGetArticleSummaryQuery } = articleApi;