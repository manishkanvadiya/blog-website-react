import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <div className="container mx-auto ">
      <article className="p-4">
        {post && (
          <>
            <h2 className="text-black-500 font-bold text-lg">
              {post.title}
            </h2>
            <div className="text-sm text-black-100">{post.datetime}</div>
            <div className="text-zinc-500 my-4">{post.body}</div>
            <button className="bg-red-500 px-4 py-2 text-white rounded-sm" onClick={() => handleDelete(post.id)}>Delete Post</button>
            <Link to={`/edit/${post.id}`} className="bg-gray-500 px-4 py-2 text-white rounded-sm ml-3 ">Edit Post</Link>
            <Link to="/" className="ml-3 text-blue-500">Back to home</Link>
          </>
        )}
        {!post && (
          <div className="text-center">
            <h2 className="text-2xl text-zinc-500 font-semibold my-3">Post Not Found</h2>
            <Link to="/" className="text-blue-500 hover:underline">Back to Homepage</Link>
          </div>
        )}
      </article>
    </div>
  );
};

export default PostPage;
