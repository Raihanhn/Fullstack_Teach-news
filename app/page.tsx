import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";

export default function Home() {
  return (
    <>
      <CategoriesList />
      {<Post />}
    </>
  );
}
