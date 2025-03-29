import Post from "./Post";

export default function Posts() {
  return (
    <div className="Posts">
      {/* Title with Body */}
      <Post title="Title 1" body="Body 1" />
      {/* Empty title */}
      <Post body="Body 2" />
      {/* Empty body */}
      <Post title="Title 3" />
    </div>
  );
}
