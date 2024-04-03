import { useLoaderData } from "react-router";

function UpdateTopic() {
  const topicId = useLoaderData();
  return <div>UpdateTopic for Topic ID: {topicId}</div>;
}
export default UpdateTopic;

async function loader({ params }) {
  return params.topicId;
}

UpdateTopic.loader = loader;
