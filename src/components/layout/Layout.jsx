import useTodos from "../../hooks/useTodos";
import LoadMoreButton from "../LoadMoreButton";
import Title from "../Title";
import TodoAddInput from "../TodoAddInput";
import TodoList from "../TodoList/TodoList";
import Contents from "./Contents";
import Header from "./Header";
import SideNav from "./SideNav";

const Layout = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useTodos();

  return (
    <div className="layout">
      <div className="layout_header">
        <Header />
      </div>
      <div className="layout_main">
        <SideNav />
        <Contents>
          <Title />
          <TodoAddInput />
          <TodoList />
          {hasNextPage && (
            <LoadMoreButton
              onClick={fetchNextPage}
              disabled={isFetchingNextPage}
            />
          )}
        </Contents>
      </div>
    </div>
  );
};

export default Layout;
