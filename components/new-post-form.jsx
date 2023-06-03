export function NewPostForm({ afterSave }) {
  async function createPost(data) {
    "use server";

    let { title, content } = Object.fromEntries(data);

    let post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    await afterSave(post);
  }

  return (
    <div>
      <form action={createPost} className="w-full mt-4 space-y-4">
        <div>
          <input
            className="w-full"
            placeholder="Title"
            type="text"
            name="title"
            required
          />
        </div>
        <div>
          <textarea
            className="w-full"
            placeholder="Write something interesting..."
            name="content"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="font-medium bg-sky-500 text-white px-3 py-1"
          >
            Create post
          </button>
        </div>
      </form>
    </div>
  );
}
