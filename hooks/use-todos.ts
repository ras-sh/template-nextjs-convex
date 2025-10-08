"use client";

import { type Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

export function useTodos(preloadedTodos: Preloaded<typeof api.todos.list>) {
  return usePreloadedQuery(preloadedTodos);
}

export function useAddTodo() {
  return useMutation(api.todos.add).withOptimisticUpdate((localStore, args) => {
    const currentTodos = localStore.getQuery(api.todos.list, {});
    if (currentTodos !== undefined) {
      const optimisticTodo = {
        _id: crypto.randomUUID() as Id<"todos">,
        _creationTime: Date.now(),
        text: args.text,
        isCompleted: false,
      };
      localStore.setQuery(api.todos.list, {}, [
        optimisticTodo,
        ...currentTodos,
      ]);
    }
  });
}

export function useToggleTodo() {
  return useMutation(api.todos.toggle).withOptimisticUpdate(
    (localStore, args) => {
      const currentTodos = localStore.getQuery(api.todos.list, {});
      if (currentTodos !== undefined) {
        localStore.setQuery(
          api.todos.list,
          {},
          currentTodos.map((todo) =>
            todo._id === args.id
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo
          )
        );
      }
    }
  );
}

export function useRemoveTodo() {
  return useMutation(api.todos.remove).withOptimisticUpdate(
    (localStore, args) => {
      const currentTodos = localStore.getQuery(api.todos.list, {});
      if (currentTodos !== undefined) {
        localStore.setQuery(
          api.todos.list,
          {},
          currentTodos.filter((todo) => todo._id !== args.id)
        );
      }
    }
  );
}
