import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import PostCard from "../components/PostCard";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((res) => {
        if (res) {
          setPosts(res.documents);
        }
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
      });
  }, []); //  IMPORTANT: empty dependency array

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">All Posts</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.$id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
