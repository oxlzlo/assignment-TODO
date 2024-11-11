import LoadMoreButton from "../LoadMoreButton";
import Title from "../Title";
import TodoAddInput from "../TodoAddInput";
import TodoList from "../TodoList/TodoList";
import Contents from "./Contents";
import Header from "./Header";
import SideNav from "./SideNav";
import useLayoutLogic from "../../hooks/useLayoutLogic";

const Layout = () => {
  const {
    todos,
    handleAddTodo,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLayoutLogic();

  return (
    <div className="layout">
      <div className="layout_header">
        <Header />
      </div>
      <div className="layout_main">
        <SideNav />
        <Contents>
          <Title />
          <TodoAddInput onAddTodo={handleAddTodo} />
          <TodoList todos={todos} />
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
