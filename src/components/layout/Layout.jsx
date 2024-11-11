import Contents from "./Contents";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout_header">
        <Header />
      </div>
      <div className="layout_main">
        <SideNav />
        <Contents />
      </div>
    </div>
  );
};

export default Layout;
