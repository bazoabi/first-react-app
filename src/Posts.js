import Post from "./Post";

export default function Posts() {
  return (
    <div className="Posts">
      {/* Title with Children */}
      <Post title="Title 1">
        <h2>This is the content of the first post</h2>
      </Post>
      {/* Empty title */}
      <Post>
        <h1 style={{ background: "Black", color: "white" }}>
          Black and White content with button:
        </h1>
        <button>Click me!!</button>
      </Post>
      {/* Empty body */}
      <Post title="Title 3" />
    </div>
  );
}
