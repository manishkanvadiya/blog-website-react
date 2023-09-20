import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="p-3 shadow-sm rounded-md border border-black-100 hover:shadow-md">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-black-500 font-bold text-lg hover:underline">
          {post.title}
        </h2>
        <div className="text-sm text-black-100">{post.datetime}</div>
      </Link>
      <p title={post.body} className="text-zinc-500 my-4">
        {/* {post.body} */}
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 30)}...`}
      </p>
      <Link to={`/post/${post.id}`} className=" text-right text-blue-500 hover:text-blue-700">
        Read more...
      </Link>
    </div>
  );
};

export default Post;
