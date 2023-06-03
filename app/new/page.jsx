import { NewPostForm } from "@/components/new-post-form";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-gray-700">New post</p>
      </div>

      <NewPostForm
        afterSave={async (post) => {
          "use server";

          redirect(`/post/${post.id}`);
        }}
      />
    </div>
  );
}
