import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://heroku-json-dan-app.herokuapp.com",
  }),
  endpoints: (build) => ({
    getTodos: build.query<void, void>({
      query: () => "todos",
      providesTags: (result: any) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: "Todos", id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodos: build.mutation({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    changeTodos: build.mutation({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodos: build.mutation({
      query: (id) => ({ url: `todos/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  useChangeTodosMutation,
} = todosApi;

export const deleteTodoNative = (id: number) => {
  return fetch("https://heroku-json-dan-app.herokuapp.com/todos/" + id, {
    method: "DELETE",
  });
};
