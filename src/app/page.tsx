import { SpinLoader } from "@/components/SpingLoader";
import { PostList } from "@/components/PostList"
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";
import { Metadata } from "next";


export default async function HomePage() {

  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  )
}
