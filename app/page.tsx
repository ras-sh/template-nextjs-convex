import { preloadQuery } from "convex/nextjs";
import { Content } from "@/components/content";
import { api } from "@/convex/_generated/api";

export default async function Home() {
  const preloadedTodos = await preloadQuery(api.todos.list, {});

  return <Content preloadedTodos={preloadedTodos} />;
}
