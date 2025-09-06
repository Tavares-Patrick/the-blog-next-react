import { SpinLoader } from "@/components/SpingLoader";
import { PostList } from "@/components/PostList"
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";


export default async function HomePage() {

  return (
    <Container>
      <Header/>

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href:'/post/adada',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/img/bryen_9.png',
            alt: 'Alt da imagem',
            priority: true,
          }}
          />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-09-04">04/06/2025 10:00</time>

          <PostHeading as='h1' url='#'>
            Type and scrambled it to make a type
          </PostHeading>

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
