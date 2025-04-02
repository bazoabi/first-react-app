import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 1,
      title: "This is title of Post 1",
      body: "This is the content of Post 1",
      bodyStyle: { background: "Black", color: "white" },
    },
    {
      id: 2,
      // title: "This is title of Post 2",
      body: "This is the content of Post 2",
      bodyStyle: { background: "Green", color: "white" },
    },
    {
      id: 3,
      title: "This is title of Post 3",
      // body: "This is the content of Post 3",
      bodyStyle: { background: "Orange", color: "white" },
    },
  ];

  const postsRenderer = posts.map((post) => {
    return (
      <Post key={post.id} title={post.title}>
        <h2 style={post.bodyStyle}>{post.body}</h2>
      </Post>
    );
  });
  return (
    // <div className="Posts">
    //   {/* Title with Children */}
    //   <Post title="Title 1">
    //     <h2>This is the content of the first post</h2>
    //   </Post>
    //   {/* Empty title */}
    //   <Post>
    //     <h1 style={{ background: "Black", color: "white" }}>
    //       Black and White content with button:
    //     </h1>
    //     <button>Click me!!</button>
    //   </Post>
    //   {/* Empty body */}
    //   <Post title="Title 3" />
    // </div>

    <div className="Posts">{postsRenderer}</div>
  );
}
