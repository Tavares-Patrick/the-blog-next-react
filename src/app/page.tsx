import { SpinLoader } from "@/components/SpingLoader";
import { PostList } from "@/components/PostList"
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";


export default async function HomePage() {

  return (
    <Container>
      <Header/>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href={"#"}>
          <Image
            className="group-hover:scale-105 transition"
            src='/img/bryen_0.png'
            width={1200} height={720}
            alt="Título do post"
          />
        </Link>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
        </div>
      </section>

      <Suspense fallback={<SpinLoader/>}>
        <PostList/>
      </Suspense>

      <footer>
        <p className="text-6x1 font-bold text-center py-8">Aqui é a Footer</p>
      </footer>
      </Container>
  )
}
