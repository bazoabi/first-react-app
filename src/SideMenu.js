export default function SideMenu() {
  const tagButtonsList = [
    {
      id: "1",
      title: "Ekko",
      children: (
        <img
          src="https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/Ekko.webp"
          alt=""
        ></img>
      ),
    },
    {
      id: "2",
      title: "Master Yi",
      children: (
        <img
          src="https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/MasterYi.webp"
          alt=""
        ></img>
      ),
    },
    { id: "3", title: "LeBlanc" },
    { id: "4" },
  ];

  const tagButtonsListRenderer = tagButtonsList.map((tagButton) => {
    return (
      <TagButton key={tagButton.id} title={tagButton.title}>
        {tagButton.children}
      </TagButton>
    );
  });

  // return (
  //   <div className="SideMenu">
  //     <TagButton title="Ekko">
  //       <img
  //         src="https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/Ekko.webp"
  //         alt=""
  //       ></img>
  //     </TagButton>
  //     <TagButton title="Master yi">
  //       <img
  //         src="https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/champion/MasterYi.webp"
  //         alt=""
  //       ></img>
  //     </TagButton>
  //     <TagButton title="LeBlanc" />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //     <TagButton />
  //   </div>
  // );

  return <div className="SideMenu">{tagButtonsListRenderer}</div>;
}

function TagButton({ title, children = "" }) {
  console.log("title + children is: " + (title + children));
  // Conditional rendering: show the tag buttons if and only if they have titles
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button className="TagButton">
          <div style={{ fontSize: "15px" }}>{title}</div>
          <br></br>
          {children}
        </button>
      )}
    </div>
  );
}
