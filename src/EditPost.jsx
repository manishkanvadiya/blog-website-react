import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <div className="container mx-auto p-4">
      {editTitle && (
        <>
          <div className="text-xl font-bold mb-4">Edit Post</div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col mb-3">
              <label htmlFor="postTitle" className="mb-2 text-zinc-500">
                Post Title
              </label>
              <input
                id="postTitle"
                type="text"
                value={editTitle}
                className="border border-gray-400 p-3 rounded-sm"
                onChange={(e) => setEditTitle(e.target.value)}
                required
                placeholder="Enter the Title"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="postBody" className="mb-2 text-zinc-500">
                Post Details
              </label>
              <textarea
                id="postBody"
                className="border border-gray-400 p-3 rounded-sm"
                rows="5"
                value={editBody}
                placeholder="Enter the Description"
                onChange={(e) => setEditBody(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 text-white px-4 py-2 rounded-sm"
              onClick={() => handleEdit(post.id)}
            >
              Update
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <div className="text-center">
          <h2 className="text-2xl text-zinc-500 font-semibold my-3">
            Post Not Found
          </h2>
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default EditPost;
