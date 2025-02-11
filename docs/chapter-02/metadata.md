# Mod 的元数据

Forge 允许你给你的 Mod 提供一个元数据描述文件，用于 Forge 在游戏里内建的 Mod 列表显示时显示各种有用的信息，比如简介啦、作者名单、鸣谢信息、网站啦什么的。  
这个文件叫 `mcmod.info`，实际上是个 JSON，应放置在开发环境的 `src/main/resources/` 目录下。它长这样：

```json
[
    {
        "modid": "my_mod",
        "name": "My First Mod",
        "description": "Just a demo mod",
        "version": "${version}",
        "url": "http://example.net",
        "authorList": ["Some random guy"],
        "credits": "Forge guys",
        "logoFile": "logo.png",
        "screenshots": [],
        "useDependencyInformation": true,
        "requiredMods": [],
        "dependencies": []
    }
]
```

在 TemplateDevEnv 中，使用 `gradle.properties` 的 `Mod Metadata` 设置（详见[此处](./index)）就会帮你自动生成该文件，因此不必手动修改它。

# 数组？
你应该注意到了这个 JSON 的最外层是个数组。这意味着，如果你的一个 jar 里有两个 `@Mod` 定义的 Mod，你可以利用这个数组把它们的元数据塞一起。

```json
[
    {
        "modid": "mod_1",
        "...": "..."
    },
    {
        "modid": "mod_2",
        "...": "..."
    }
]
```
