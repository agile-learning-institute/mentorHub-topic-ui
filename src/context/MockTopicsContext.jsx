import { createContext, useReducer, useContext } from "react";
import mockTopics from "../mockdata/mockdata";

const initialState = mockTopics;

function mockTopicsReducer(state, action) {
  switch (action.type) {
    case "UPDATE_TOPIC": {
      const { topicId, fieldName, newValue } = action.payload;

      return state.map((topic) =>
        topic.Id === topicId ? { ...topic, [fieldName]: newValue } : topic,
      );
    }
    case "ADD_TOPIC":
      return [...state, action.payload];

    case "ADD_RESOURCE":
      return state.map((topic) => {
        if (topic.Id === action.payload.topicId) {
          return {
            ...topic,
            Resources: [...topic.Resources, action.payload.Resources],
          };
        }
        return topic;
      });
    case "ADD_SKILL_TO_TOPIC":
      return state.map((topic) => {
        if (topic.Id === action.payload.topicId) {
          return {
            ...topic,
            Skills: [...topic.Skills, action.payload.Skills],
          };
        }
        return topic;
      });

    case "UPDATE_SKILL":
      return state.map((topic) => {
        if (topic.Id === action.payload.topicId) {
          const updatedSkills = [...topic.Skills];
          updatedSkills[action.payload.skillIndex] = {
            ...updatedSkills[action.payload.skillIndex],
            [action.payload.fieldName]: action.payload.newValue,
          };
          return {
            ...topic,
            Skills: updatedSkills,
          };
        }
        return topic;
      });

    case "UPDATE_RESOURCE_SKILL":
      return state.map((topic) => {
        if (topic.Id === action.payload.topicId) {
          const updatedResources = topic.Resources.map((resource) => {
            if (resource.Name === action.payload.resourceName) {
              return {
                ...resource,
                Skills: action.payload.skills,
              };
            } else {
              return resource;
            }
          });

          return {
            ...topic,
            Resources: updatedResources,
          };
        } else {
          return topic;
        }
      });

    default:
      return state;
  }
}

const MockTopicsContext = createContext();

export const MockTopicsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mockTopicsReducer, initialState);

  const updateTopic = (topicId, fieldName, newValue) => {
    dispatch({
      type: "UPDATE_TOPIC",
      payload: { topicId, fieldName, newValue },
    });
  };
  const addTopic = (newTopic) => {
    dispatch({
      type: "ADD_TOPIC",
      payload: newTopic,
    });
    return newTopic;
  };
  const updateSkill = async (topicId, skillIndex, fieldName, newValue) => {
    dispatch({
      type: "UPDATE_SKILL",
      payload: { topicId, skillIndex, fieldName, newValue },
    });
  };

  const addResource = (topicId, newResource) => {
    dispatch({
      type: "ADD_RESOURCE",
      payload: { topicId, Resources: newResource },
    });
  };

  const addSkillToTopic = (topicId, newSkill) => {
    dispatch({
      type: "ADD_SKILL_TO_TOPIC",
      payload: { topicId, Skills: newSkill },
    });
  };

  const updateResourceSkills = (topicId, resourceName, skills) => {
    dispatch({
      type: "UPDATE_RESOURCE_SKILL",
      payload: { topicId, resourceName, skills },
    });
  };

  return (
    <MockTopicsContext.Provider
      value={{
        state,
        updateTopic,
        addTopic,
        addResource,
        addSkillToTopic,
        updateSkill,
        updateResourceSkills,
      }}
    >
      {children}
    </MockTopicsContext.Provider>
  );
};

export const useMockTopics = () => {
  return useContext(MockTopicsContext);
};
