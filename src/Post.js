export default function Post({
  title,
  children = "This is the default post body JSX",
}) {
  return (
    <div className="Post">
      <h2 style={{ textAlign: "center" }}>
        {title ?? "This is the default post title"}
      </h2>
      <hr></hr>
      <div style={{ textAlign: "center" }}>{children}</div>
    </div>
  );
}
