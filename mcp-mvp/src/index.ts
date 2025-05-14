import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

/**
 * 创建 MCP Server 实例
 * 这是一个最小化的 MCP 服务器，只包含一个打印 hello world 的工具
 */
const server = new McpServer({
  name: "hello-server",
  version: "1.0.0",
  description: "最小化的 MCP 服务器示例",
});

/**
 * 注册 hello 工具
 * 该工具接收一个名称参数，并返回一个问候消息
 */
server.tool(
  "hello", // 工具名称
  { // 输入参数定义
    name: z.string().optional().describe("要问候的名称，如果不提供则使用默认值"),
  },
  async ({ name }) => { // 处理函数
    // 如果没有提供名称，则使用默认值
    const targetName = name || "World";
    
    // 返回问候消息
    return {
      content: [
        {
          type: "text",
          text: `Hello, ${targetName}! 这是一个最小化的 MCP 服务器示例。`,
        },
      ],
    };
  }
);

/**
 * MCP Server 的主入口函数
 * 负责连接服务器并启动
 */
async function main() {
  // 创建标准输入输出传输层
  const transport = new StdioServerTransport();
  // 连接服务器
  await server.connect(transport);
  console.error("Hello MCP Server running on stdio");
}

// 启动服务器并处理错误
main().catch((error) => {
  console.error("Fatal error in main():", error);
  // 在 Node.js 环境中，确保使用 process.exit 来指示错误退出
  if (typeof process !== 'undefined' && process.exit) {
    process.exit(1);
  }
});