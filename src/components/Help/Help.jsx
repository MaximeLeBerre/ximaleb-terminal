import React from "react";
import "./Help.modules.css";
import { customCommands } from "../../domain/commands/index.jsx";
export const Help = () => {
  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
        {Object.keys(customCommands.commands)
          .filter((cmd) => customCommands.commands[cmd].hidden !== true)
          .map((command, key) => (
            <tr key={key}>
              <td>{command}</td>
              <td>{customCommands.commands[command].description}</td>
              <td>
                <p className="code">{customCommands.commands[command].usage}</p>
              </td>
            </tr>
          ))}
        {Object.keys(customCommands.overwrites)
          .filter((cmd) => customCommands.overwrites[cmd].hidden !== true)
          .map((command, key) => (
            <tr key={key}>
              <td>{command}</td>
              <td>{customCommands.overwrites[command].description}</td>
              <td>
                <p className="code">
                  {customCommands.overwrites[command].usage}
                </p>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
