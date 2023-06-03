import { prisma } from "@/lib/prisma";

export default async function Post({ params }) {
  let post = await prisma.post.findUnique({ where: { id: +params.id } });

  return (
    post && (
      <div>
        <p className="text-2xl font-bold text-gray-700">{post.title}</p>
        <div className="mt-6">
          <pre className="font-sans whitespace-pre-line">{post.content}</pre>
        </div>
      </div>
    )
  );
}
