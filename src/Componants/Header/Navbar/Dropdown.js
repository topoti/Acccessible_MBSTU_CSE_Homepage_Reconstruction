import MenuItems from "./SubmenuItems";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown-submenu  ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} />
      ))}
    </ul>
  );
};

export default Dropdown;
