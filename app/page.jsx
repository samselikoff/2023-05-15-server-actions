import { NewPostForm } from "@/components/new-post-form";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function Home() {
  let posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

  return (
    <div>
      <div>
        <p className="text-2xl font-bold text-gray-700">All posts</p>

        <div className="mt-4 space-y-2">
          {posts.map((post) => (
            <div key={post.id}>
              <Link
                href={`/post/${post.id}`}
                className="underline underline-offset-2 decoration-gray-300"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>

        <div key={posts[0].id} className="mt-12 pt-4 border-t">
          <p className="text-sm">Quick add</p>
          <NewPostForm
            afterSave={async () => {
              "use server";

              revalidatePath("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
