import { SpinLoader } from "@/components/SpingLoader";
import { PostList } from "@/components/PostList"
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeatured } from "@/components/PostFeatured";


export default async function HomePage() {

  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className="text-6x1 font-bold text-center py-8">Aqui é a Footer</p>
      </footer>
    </Container>
  )
}
