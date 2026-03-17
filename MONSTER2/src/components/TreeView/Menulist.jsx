import MenuItem from "./Menuitem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="space-y-1 pl-0 list-none">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}