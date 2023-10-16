import useFetch from "../../hooks/useFetch";
import Post from "../Post/Post";
import Share from "../Share/Share";

function Feed() {
  const { isLoading, data: posts } = useFetch("http://localhost:5000/posts");
  return (
    <div className="posts  dark:bg-slate-950 w-full flex items-center justify-center  ">
      <div className="feedWrapper flex flex-col gap-0 items-center h-screen w-full  overflow-y-scroll xl:scrollbar">
        <Share />
        {posts && posts.map((p) => <Post key={p.id} post={p} />)}
      </div>
    </div>
  );
}

export default Feed;
