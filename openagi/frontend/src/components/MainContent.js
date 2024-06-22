import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainContent = ({ stack, onSaveStack }) => {
  const [agents, setAgents] = useState([]);
  const [tools, setTools] = useState([]);
  const [llms, setLlms] = useState([]);

  useEffect(() => {
    if (stack) {
      axios.get(`http://localhost:8000/agents`).then((response) => setAgents(response.data));
      axios.get(`http://localhost:8000/tools`).then((response) => setTools(response.data));
      axios.get(`http://localhost:8000/llms`).then((response) => setLlms(response.data));
    }
  }, [stack]);

  const addAgent = () => {
    const newAgent = {
      name: 'New Agent',
      role: 'summarising expert',
      goal: 'summarize input into presentable points',
      backstory: 'Expert in summarising the given text',
      capability: 'llm_task_executor',
      task: 'summarize points to present to health care professional'
    };
    axios.post(`http://localhost:8000/agents`, newAgent).then((response) => {
      setAgents([...agents, response.data]);
    });
  };

  const addTool = () => {
    const newTool = { name: 'New Tool', type: 'search', config: 'some config' };
    axios.post(`http://localhost:8000/tools`, newTool).then((response) => {
      setTools([...tools, response.data]);
    });
  };

  const addLLM = () => {
    const newLLM = {
      name: 'New LLM',
      api_base: 'https://api.openai.com',
      api_key: 'YOUR_API_KEY',
      model: 'text-davinci-003',
      max_tokens: 256,
      temperature: 0.7,
    };
    axios.post(`http://localhost:8000/llms`, newLLM).then((response) => {
      setLlms([...llms, response.data]);
    });
  };

  return (
    <div className="main-content">
      {stack ? (
        <>
          <h2>{stack.name}</h2>
          <p>{stack.description}</p>
          <button onClick={addAgent}>Add Agent</button>
          <button onClick={addTool}>Add Tool</button>
          <button onClick={addLLM}>Add LLM</button>
          <button onClick={() => onSaveStack(stack)}>Save Stack</button>
          <div className="agents">
            {agents.map((agent) => (
              <div key={agent.id} className="agent">
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
                <p>{agent.goal}</p>
                <p>{agent.backstory}</p>
                <p>{agent.capability}</p>
                <p>{agent.task}</p>
              </div>
            ))}
          </div>
          <div className="tools">
            {tools.map((tool) => (
              <div key={tool.id} className="tool">
                <h3>{tool.name}</h3>
                <p>{tool.type}</p>
                <p>{tool.config}</p>
              </div>
            ))}
          </div>
          <div className="llms">
            {llms.map((llm) => (
              <div key={llm.id} className="llm">
                <h3>{llm.name}</h3>
                <p>{llm.api_base}</p>
                <p>{llm.api_key}</p>
                <p>{llm.model}</p>
                <p>{llm.max_tokens}</p>
                <p>{llm.temperature}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2>Create a New Stack</h2>
      )}
    </div>
  );
};

export default MainContent;
