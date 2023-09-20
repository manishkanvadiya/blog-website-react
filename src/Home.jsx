import React from "react";
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 mt-3 px-5 py-4">
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p  className="text-2xl text-zinc-500 font-semibold ">Opps! No Posts</p>
        )}
      </div>
    </div>
  );
};

export default Home;
