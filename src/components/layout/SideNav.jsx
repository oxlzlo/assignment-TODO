import Button from "../common/Button";

const SideNav = () => {
  return (
    <div className="sideNav">
      <Button className="sideNav__inner_all" label="모두 보기" />
      <Button className="sideNav__inner_notDone" label="해야할 일" />
      <Button className="sideNav__inner_done" label="마친 일" />
    </div>
  );
};

export default SideNav;
