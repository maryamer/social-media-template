import { Posts } from "../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";

function Feed() {
  return (
    <div className="posts  dark:bg-slate-950 w-full flex items-center justify-center  ">
      <div className="feedWrapper flex flex-col gap-0 items-center h-screen w-full  overflow-y-scroll xl:scrollbar">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
