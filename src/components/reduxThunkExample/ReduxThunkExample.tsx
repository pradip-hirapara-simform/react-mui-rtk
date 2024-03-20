import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { getPostApi } from "src/store/features/postSlice";

const QueryExample = () => {
  const dispatch = useAppDispatch();

  const { posts, loading } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostApi());
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {posts &&
        posts?.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
    </div>
  );
};

export default QueryExample;
