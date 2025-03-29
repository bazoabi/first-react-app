export default function Post({ title, body }) {
  return (
    <div className="Post">
      <h2 style={{ textAlign: "center" }}>
        {title ?? "This is the default post title"}
      </h2>
      <hr></hr>
      <div style={{ textAlign: "center" }}>
        {body ?? "This is the default post body"}
      </div>
    </div>
  );
}
