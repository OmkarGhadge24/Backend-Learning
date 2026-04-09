import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative w-full h-48 sm:h-56 bg-gray-100 overflow-hidden shrink-0">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col grow">
        <p className="text-gray-800 text-sm sm:text-base leading-6 mb-3 grow">
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;