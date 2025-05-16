# MCP
## MCP-mvp
MCP mvp Server
```
cd mcp-mvp
npm install
npm run build
```

## Weather
weather MCP Server
```
cd weather
npm install
npm run build
```
#### MCP config 
```
{
  "mcpServers": {
    "mcp-mvp": {
      "command": "node",
      "args": [
        "D:\\xx\\xx\\xx\\build\\index.js" // change your path
      ]
    },
  "weather": {
      "command": "node",
      "args": [
        "D:\\xx\\xx\\xx\\build\\index.js" // change your path
      ]
    },
  }
}
```


