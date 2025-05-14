# MCP
## MCP-mvp
MCP 最小化可行性Server
```
cd mcp-mvp
npm install
npm run build
```

## Weather
天气查询MCP Server
```
cd weather
npm install
npm run build
```
#### MCP 配置
```
{
  "mcpServers": {
    "mcp-mvp": {
      "command": "node",
      "args": [
        "D:\\xx\\xx\\xx\\build\\index.js" // 改成你的路径
      ]
    },
  "weather": {
      "command": "node",
      "args": [
        "D:\\xx\\xx\\xx\\build\\index.js" // 改成你的路径
      ]
    },
  }
}
```


