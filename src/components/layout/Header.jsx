import Button from "../common/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Button className="header__inner_all" label="모두 보기" />
        <Button className="header__inner_notDone" label="해야할 일" />
        <Button className="header__inner_done" label="마친 일" />
      </div>
    </header>
  );
};

export default Header;
