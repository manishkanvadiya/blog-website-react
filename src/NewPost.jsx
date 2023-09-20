import React from "react";

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-xl font-bold mb-4">Add New Post</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col mb-3">
          <label htmlFor="postTitle" className="mb-2 text-zinc-500">Post Title</label>
          <input
            id="postTitle"
            type="text"
            value={postTitle}
            className="border border-gray-400 p-3 rounded-sm"
            onChange={(e) => setPostTitle(e.target.value)}
            required
            placeholder="Enter the Title"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="postBody" className="mb-2 text-zinc-500">Post Details</label>
          <textarea
            id="postBody"
            className="border border-gray-400 p-3 rounded-sm"
            rows="5"
            value={postBody}
            placeholder="Enter the Description"
            onChange={(e) => setPostBody(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
