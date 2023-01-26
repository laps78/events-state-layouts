import ShopItem from "./ShopItem";

function ListView(props) {
  return (
    <section className="ListView">
      <h1>ListView</h1>
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </section>
  );
}

export default ListView;