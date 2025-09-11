import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = 'qualquer'
  const postLink = `/post/${slug}`;

  return(
          <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href:postLink,
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

          <PostHeading as='h1' url={postLink}>
            Type and scrambled it to make a type
          </PostHeading>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
        </div>
        <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={'2025-04-08T00:24:38.616Z'}
        excerpt={
          'O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
        title={'Rotina matinal de pessoas altamente eficazes'}
      />
      </section>
  )
}
