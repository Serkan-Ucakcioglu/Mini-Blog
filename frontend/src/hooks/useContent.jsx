import Card from "../components/Card";
import { useGetCategoryQuery } from "../features/categoryApiSlice";

function useContent(endpoint) {
  const { data } = useGetCategoryQuery(endpoint);

  const content = data?.map((blog) => {
    return <Card blog={blog} key={blog?._id} />;
  });

  return content;
}

export default useContent;