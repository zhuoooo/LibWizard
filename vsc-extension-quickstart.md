# 欢迎使用 VS Code 扩展程序

## 文件夹内容

* 该文件夹包含了扩展程序所需的所有文件。
* `package.json` - 这是清单文件，你在其中声明扩展程序和命令。
  * 示例插件注册了一个命令，并定义了它的标题和命令名称。通过这些信息，VS Code 可以在命令面板中显示该命令。它还不需要加载插件。
* `src/extension.ts` - 这是主要的文件，在这里你将提供命令的实现。
  * 该文件导出一个函数 `activate`，第一次激活你的扩展程序时会调用该函数（在本例中通过执行命令来激活）。在 `activate` 函数内部，我们调用 `registerCommand`。
  * 我们将包含命令实现的函数作为第二个参数传递给 `registerCommand`。

## 快速开始

* 按下 `F5` 键打开一个新窗口，并加载你的扩展程序。
* 通过按下（`Ctrl+Shift+P` 或者 `Cmd+Shift+P` 在 Mac 上）并输入 `Hello World` 来从命令面板运行你的命令。
* 在 `src/extension.ts` 文件中设置断点，以便调试你的扩展程序。
* 在调试控制台中查看扩展程序的输出。

## 进行更改

* 在 `src/extension.ts` 文件中更改代码后，你可以通过调试工具栏重新启动扩展程序。
* 也可以重新加载 VS Code 窗口以加载更改（`Ctrl+R` 或者 `Cmd+R` 在 Mac 上）。

## 探索 API

* 打开文件 `node_modules/@types/vscode/index.d.ts`，可查看我们全部的 API。

## 运行测试

* 打开调试视图 (`Ctrl+Shift+D` 或者 `Cmd+Shift+D` 在 Mac 上)，在启动配置的下拉菜单中选择 `Extension Tests`。
* 按下 `F5` 键，在一个带有你的扩展程序的新窗口中运行测试。
* 在调试控制台中查看测试结果的输出。
* 修改 `src/test/suite/extension.test.ts` 文件或在 `test/suite` 文件夹中创建新的测试文件。
  * 提供的测试运行程序只会考虑与名称模式 `**.test.ts` 匹配的文件。
  * 你可以在 `test` 文件夹内创建文件夹，以任何你想要的方式组织你的测试。

## 进一步学习

* [遵循 UX 指南](https://code.visualstudio.com/api/ux-guidelines/overview)，创建与 VS Code 原生界面和模式无缝集成的扩展程序。
* 通过[打包你的扩展程序](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)，以减小扩展程序的大小并改善启动时间。
* 在 VS Code 扩展程序市场上[发布你的扩展程序](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)。
* 通过设置[持续集成](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)来自动构建。