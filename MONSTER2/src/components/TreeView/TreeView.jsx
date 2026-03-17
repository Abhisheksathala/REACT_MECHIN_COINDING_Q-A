import MenuList from "./Menulist";


export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <div className="text-4xl">TREE VIEW</div>
      <MenuList list={menus} />
    </div>
  );
}
