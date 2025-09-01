import { SpinLoader } from "@/components/SpingLoader";
import { PostList } from "@/components/PostList"
import { Suspense } from "react";
import { Container } from "@/components/Container";


export default async function HomePage() {

  return (
    <Container>
      <header>
        <h1 className="text-6 font-bold text-center py-8">Aqui é a Header</h1>

      </header>

      <Suspense fallback={<SpinLoader/>}>
        <PostList/>
      </Suspense>

      <footer>
        <p className="text-6x1 font-bold text-center py-8">Aqui é a Footer</p>
      </footer>
      </Container>
  )
}
