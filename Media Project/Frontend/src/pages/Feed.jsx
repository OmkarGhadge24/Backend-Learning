import { useState } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <section className="min-h-screen bg-gray-50 py-6 md:py-12">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6">
        {/* Feed Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Feed</h1>
          <p className="text-gray-600 text-sm mt-1">See what's happening</p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-500 text-lg font-medium">No posts yet</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feed;