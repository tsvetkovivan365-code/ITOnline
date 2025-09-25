import React, { useState } from 'react';
import './BotListManager.css';

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);
  const [newBot, setNewBot] = useState({id:'', name:'', status:'', task:''});
  const [searchByStatus, setSearchByStatus] = useState();
  const [foundBots, setFoundBots] = useState([]);
  const triggerJob = (id) => {
    setBots(bots.map(bot => bot.id === id ? {...bot, status: bot.status === "Running" ? "Stopped" : "Running"} : bot))

  };

  const handleAddBot = () => {
    if (newBot.id.trim() !== '' && newBot.name.trim() !== '' && newBot.status.trim() !== '' && newBot.id.trim() !== '' && newBot.task.trim() !== '') {
      setBots([...bots, newBot])
      setNewBot({id:'', name:'', status:'', task:''});
    }
  }

  const handleDeleteBot = (id) => {
    setBots(bots.filter(bot => bot.id !== id))
  }

  const handleSearch = () => {
    setFoundBots(bots.filter(bot => bot.status === searchByStatus))
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "Running":
        return "status-running";
      case "Stopped":
        return "status-stopped";
      case "Completed":
        return "status-completed";
      default:
        return "";
    }
  }

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map(bot => <li>
          <span className={getStatusClass(bot.status)}> {bot.id} - {bot.name} - {bot.status} - {bot.task} <button onClick={() => triggerJob(bot.id)}>Trigger job</button><button style={{margin:'0 4px'}} onClick={() => handleDeleteBot(bot.id)}>Delete bot</button></span>
        </li>)}
      </ul>
      <span style={{margin:'4px 22px'}}>
        <input type='text' value={newBot.id} onChange={(e) => setNewBot({...newBot, id:e.target.value})} placeholder='Enter id'></input>
        <input type='text' value={newBot.name} onChange={(e) => setNewBot({...newBot, name:e.target.value})} placeholder='Enter name'></input>
        <input type='text' value={newBot.status} onChange={(e) => setNewBot({...newBot, status:e.target.value})} placeholder='Enter status'></input>
        <input type='text' value={newBot.task} onChange={(e) => setNewBot({...newBot, task:e.target.value})} placeholder='Enter task'></input>
      </span>
      <button onClick={() => handleAddBot()}>Add bot</button>{/* ask */}
      <br></br>

      <div style={{margin:'8px 22px', display:'inline-block'}}>
        <input placeholder='Search bots by status' onChange={(e) => setSearchByStatus(e.target.value)}></input>
      </div>
        <button onClick={() => handleSearch()}>Search</button>
        <ul>
          {foundBots.map(foundBot =>
            <li key={foundBot.id}><span>{foundBot.id} - {foundBot.name} - {foundBot.status} - {foundBot.task}</span></li>
          )}
        </ul>
    </div>
  );
};

export default BotListManager;
