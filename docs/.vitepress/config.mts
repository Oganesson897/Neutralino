import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Neutralino",
  description: "Moderner development tutorial for 1.12.2 Forge Mod",
  base: "/Neutralino/",
  head: [["link", { rel: "icon", sizes: "32x32", href: "https://zh.minecraft.wiki/images/thumb/Book_JE2_BE2.png/150px-Book_JE2_BE2.png?8310b" }]],
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/chapter-01/forge' }
    ],

    sidebar: [
      {
        text: '前言',
        items: [
          { text: '写在前面：这是什么？', link: '/readme.md' },
          { text: '序：《异教与隐士》', link: 'preface/index' }
        ]
      },
      {
        text: '正文',
        items: [
          {
            text: '1. 站在巨人的肩膀上',
            link: 'chapter-01/index',
            items: [
              { text: '1.1 MCP', link: 'chapter-01/mcp' },
              { text: '1.2 Forge', link: 'chapter-01/forge' },
              { text: '1.3 ForgeGradle/RetroFuturaGradle', link: 'chapter-01/forgegradle' }
            ]
          },
          {
            text: '2. 一切的开始',
            link: 'chapter-02/index',
            items: [
              { text: '2.1 Mod 元数据', link: 'chapter-02/metadata' },
              { text: '2.2 Mod 的构建与发布', link: 'chapter-01/build' }
            ]
          },
          {
            text: '3. 事件',
            link: 'chapter-03/index'
          },
          {
            text: '4. 物品',
            link: 'chapter-04/index',
            items: [
              { text: '4.1 ItemStack', link: 'chapter-04/item-stack' },
              { text: '4.2 附魔', link: 'chapter-04/enchantment' },
              { 
                text: '4.3 物品进阶',
                link: 'chapter-04/advanced/index',
                items: [
                  { text: '4.3.1 Meta-hack', link: 'chapter-04/advanced/meta-hack' },
                  { text: '4.3.2 食物', link: 'chapter-04/advanced/food' },
                  { text: '4.3.3 工具及武器等', link: 'chapter-04/advanced/tool' },
                  { text: '4.3.4 护甲', link: 'chapter-04/advanced/armor' },
                  { text: '4.3.5 投掷物', link: 'chapter-04/advanced/throwable' }
                ]
              }
            ]
          },
          {
            text: '5. 方块',
            link: 'chapter-05/index',
            items: [
              { text: '5.1 方块状态', link: 'chapter-05/block-state' },
              { 
                text: '5.2 高级的方块',
                items: [
                  { text: '5.2.1 矿石', link: 'chapter-05/advanced/ore' },
                  { text: '5.2.2 作物', link: 'chapter-05/advanced/crop' },
                  { text: '5.2.3 树苗', link: 'chapter-05/advanced/sapling' },
                  { text: '5.2.4 红石信号敏感的方块', link: 'chapter-05/advanced/redstone-sensitive' },
                  { text: '5.2.5 类似空气的方块', link: 'chapter-05/advanced/air-like' },
                ]
              },
              { text: '5.3 掉落概论', link: 'chapter-05/block-drop' },
            ]
          },
          {
            text: '6. 注册表',
            link: 'chapter-06/index'
          },
          {
            text: '7. 物理端、逻辑端与网络 IO',
            link: 'chapter-07/index',
            items: [
              { text: '7.1 TileEntity 内建的解决方案', link: 'chapter-07/tile-entity-sync' },
              { text: '7.2 实体的解决方案', link: 'chapter-07/entity-sync' },
              { 
                text: '7.3 Forge 的扩展', 
                items: [
                  { text: '7.3.1 SimpleNetworkWrapper', link: 'chapter-07/forge-extension/simple-network-wrapper' },
                  { text: '7.3.2 FMLEventChannel', link: 'chapter-07/forge-extension/fml-event-channel' }
                ]
              }
            ]
          },
          {
            text: '8. 实体',
            link: 'chapter-08/index',
            items: [
              { text: '8.1 AI', link: 'chapter-08/ai/index' },
              { 
                text: '8.2 生物实体属性', 
                link: 'chapter-08/attribute/index',
                items: [
                  { text: '8.2.1 属性修饰符', link: 'chapter-08/attribute/modifier' }
                ]
              }
            ]
          },
          {
            text: '9. 方块实体（TileEntity）',
            link: 'chapter-09/index',
            items: [
              { text: '9.1 ITickable', link: 'chapter-09/ticking' }
            ]
          },
          {
            text: '10. Forge Capability 系统',
            link: 'chapter-10/index',
            items: [
              { text: '10.1 实例：TileEntity 的物品栏', link: 'chapter-10/item-cap' },
              { text: '10.2 追加 Capability', link: 'chapter-10/attach-cap' },
              { text: '10.3 Capability 数据的持久化', link: 'chapter-10/persistence' },
              { text: '10.4 你自己的 Capability', link: 'chapter-10/new-cap' }
            ]
          },
          {
            "text": "11. 渲染概论",
            "link": "chapter-11/index",
            "items": [
              {
                "text": "11.1 方块及物品模型",
                "link": "chapter-11/baked/index",
                "items": [
                  { "text": "11.1.1 自定义物品模型映射", "link": "chapter-11/baked/custom-mesh" },
                  { "text": "11.1.2 纹理与纹理动画", "link": "chapter-11/baked/texture" },
                  { "text": "11.1.2 染色", "link": "chapter-11/baked/tint" },
                  { "text": "11.1.3 方块状态映射", "link": "chapter-11/baked/block-state-json" },
                  { "text": "11.1.4 `IStateMapper`", "link": "chapter-11/baked/state-mapper" }
                ]
              },
              {
                "text": "11.2 自定义模型",
                "link": "chapter-11/custom-baked/index",
                "items": [
                  { "text": "11.2.1 `IBakedModel`", "link": "chapter-11/custom-baked/baked" },
                  { "text": "11.2.2 `IModel`", "link": "chapter-11/custom-baked/unbaked" },
                  { "text": "11.2.3 `ICustomModelLoader`", "link": "chapter-11/custom-baked/loader" },
                  { "text": "11.2.4 `ItemOverrideList`", "link": "chapter-11/custom-baked/item-override" }
                ]
              },
              {
                "text": "11.3 实体模型",
                "link": "chapter-11/entity-model/index",
                "items": [
                  { "text": "11.3.1 `ModelBase`", "link": "chapter-11/entity-model/encapsulated-model" },
                  { "text": "11.3.2 相关事件", "link": "chapter-11/entity-model/events" }
                ]
              },
              { "text": "11.4 TESR", "link": "chapter-11/tesr" },
              { "text": "11.5 Render Layer", "link": "chapter-11/render-layer" },
              {
                "text": "11.6 Forge 的扩展",
                "link": "chapter-11/forge-extension/index",
                "items": [
                  { "text": "11.6.1 Forge BlockState V1", "link": "chapter-11/forge-extension/forge-v1" },
                  { "text": "11.6.2 其他格式的模型", "link": "chapter-11/forge-extension/other-format" },
                  { "text": "11.6.3 `FastTESR`", "link": "chapter-11/forge-extension/fast-tesr" },
                  { "text": "11.6.4 动画状态机", "link": "chapter-11/forge-extension/animation" },
                  { "text": "11.6.5 `TileEntityItemStackRenderer`", "link": "chapter-11/forge-extension/teisr" }
                ]
              }
            ]
          },
          {
            "text": "12. 药水与状态效果",
            "link": "chapter-12/index",
            "items": [
              { "text": "12.1 状态效果", "link": "chapter-12/potion" },
              { "text": "12.2 状态效果与属性修饰符", "link": "chapter-12/attributes-modifier" },
              { "text": "12.3 药水类型", "link": "chapter-12/potion-type" }
            ]
          },
          {
            "text": "13. 国际化与本地化",
            "link": "chapter-13/index",
            "items": [
              { "text": "13.1 文本组件（`ITextComponent`）", "link": "chapter-13/text-component" },
              { "text": "13.2 注意事项", "link": "chapter-13/note" }
            ]
          },
          {
            "text": "14. 用户交互界面（GUI）",
            "link": "chapter-14/index",
            "items": [
              {
                "text": "14.1 Widget",
                "link": "chapter-14/widget/index",
                "items": [
                  { "text": "14.1.1 文本输入", "link": "chapter-14/widget/text-field" },
                  { "text": "14.1.2 按钮", "link": "chapter-14/widget/button" },
                  { "text": "14.1.3 列表", "link": "chapter-14/widget/list" }
                ]
              },
              { "text": "14.2 游戏主界面与 HUD", "link": "chapter-14/main-screen/index" },
              { "text": "14.3 Toast", "link": "chapter-14/toast/index" },
              { "text": "14.4 `Container` 与数据同步", "link": "chapter-14/container" }
            ]
          },
          { "text": "15. 音效控制", "link": "chapter-15/index" },
          { "text": "16. 粒子效果", "link": "chapter-16/index" },
          { "text": "17. 资源包", "link": "chapter-17/index" },
          {
            "text": "18. 用户输入",
            "link": "chapter-18/index",
            "items": [
              { "text": "18.1 键盘输入", "link": "chapter-18/keyboard" },
              {
                "text": "18.2 鼠标输入",
                "link": "chapter-18/mouse",
                "items": [
                  { "text": "18.2.1 GUI 中的鼠标控制", "link": "chapter-18/mouse-in-gui" }
                ]
              }
            ]
          },
          {
            "text": "19. 世界生成与新维度",
            "link": "chapter-19/index",
            "items": [
              {
                "text": "19.1 地图特性（Feature）",
                "link": "chapter-19/world-gen-feature/index",
                "items": [
                  { "text": "19.1.1 矿石生成", "link": "chapter-19/world-gen-feature/ore" },
                  { "text": "19.1.2 Retrogen", "link": "chapter-19/world-gen-feature/retro-gen" }
                ]
              },
              {
                "text": "19.2 生物群系（Biome）",
                "link": "chapter-19/biome/index",
                "items": [
                  { "text": "19.2.1 复用地图特性", "link": "chapter-19/biome/feature" },
                  { "text": "19.2.2 生物群系装饰器（Decorator）", "link": "chapter-19/biome/decorator" },
                  { "text": "19.2.3 刷新生物", "link": "chapter-19/biome/natural-spawn" },
                  { "text": "19.2.3 附加篇：关于骨粉", "link": "chapter-19/biome/flower-entry" }
                ]
              },
              {
                "text": "19.3 大型结构",
                "link": "chapter-19/structure/index",
                "items": [
                  { "text": "19.3.1 `MapGenBase`", "link": "chapter-19/structure/base" },
                  { "text": "19.3.2 `MapGenStructure`", "link": "chapter-19/structure/structure" },
                  { "text": "19.3.3 `Template`", "link": "chapter-19/structure/template" }
                ]
              },
              {
                "text": "19.4 新维度",
                "link": "chapter-19/dimension/index",
                "items": [
                  { "text": "19.4.1 可选的 `WorldType`", "link": "chapter-19/dimension/type" },
                  { "text": "19.4.2 `WorldProvider`", "link": "chapter-19/dimension/dimension" },
                  { "text": "19.4.3 `IChunkGenerator`", "link": "chapter-19/dimension/chunk-gen" },
                  { "text": "19.4.4 `BiomeProvider`", "link": "chapter-19/dimension/biome-gen" }
                ]
              }
            ]
          },
          {
            "text": "20. 村庄",
            "link": "chapter-20/index",
            "items": [
              { "text": "20.1 村民职业", "link": "chapter-20/villager-profession" },
              { "text": "20.2 村庄结构", "link": "chapter-20/village-structure" }
            ]
          },
          {
            "text": "21. 合成表",
            "link": "chapter-21/index",
            "items": [
              {
                "text": "21.1 Forge 的扩展",
                "link": "chapter-21/forge-extension/index",
                "items": [
                  { "text": "21.1.1 矿物词典（Ore Dictionary）", "link": "chapter-21/forge-extension/ore-dictionary" },
                  { "text": "21.1.2 `IConditionFactory`", "link": "chapter-21/forge-extension/condition" },
                  { "text": "21.1.3 `IIngredientFactory`", "link": "chapter-21/forge-extension/ingredient-factory" },
                  { "text": "21.1.4 `IRecipeFactory`", "link": "chapter-21/forge-extension/recipe-factory" },
                  { "text": "21.1.5 常量池（`_constants.json`）", "link": "chapter-21/forge-extension/constants" }
                ]
              },
              { "text": "21.2 重新实现 `IRecipe`", "link": "chapter-21/custom-recipe" },
              { "text": "21.3 扩展篇：熔炉配方及燃料值", "link": "chapter-21/vanilla-furnace" },
              { "text": "21.4 扩展篇：酿造台配方", "link": "chapter-21/vanilla-brewing-stand" },
              { "text": "21.5 扩展篇：铁砧“配方”", "link": "chapter-21/forge-extension/anvil-events" }
            ]
          },
          {
            "text": "22. 进度（Advancement）",
            "link": "chapter-22/index",
            "items": [
              { "text": "22.1 自定义进度触发条件", "link": "chapter-22/forge-extension/custom-criterion" },
              { "text": "22.2 自定义 Item Predicate", "link": "chapter-22/forge-extension/custom-item-predicates" }
            ]
          },
          {
            "text": "23. 战利品表",
            "link": "chapter-23/index",
            "items": [
              { "text": "23.1 战利品表条件（Loot Condition）", "link": "chapter-23/condition" },
              { "text": "23.2 战利品表函数（Loot Function）", "link": "chapter-23/function" }
            ]
          },
          {
            "text": "24. 命令",
            "link": "chapter-24/index",
            "items": [
              { "text": "24.1 函数（`.mcfunction`）", "link": "chapter-24/function" },
              { "text": "24.2 Forge 的扩展：`CommandTreeBase`", "link": "chapter-24/command-tree" }
            ]
          },
          {
            "text": "25. Forge 权限系统",
            "link": "chapter-25/index",
            "items": [
              { "text": "25.1 `IPermissionHandler`", "link": "chapter-25/permission-handler" }
            ]
          },
          {
            "text": "26. Forge 配置文件系统",
            "link": "chapter-26/index",
            "items": [
              { "text": "26.1 Forge 可视化配置文件编辑界面", "link": "chapter-26/config-gui" },
              { "text": "26.2 `Configuration` 类", "link": "chapter-25/raw-config" },
              { "text": "26.3 同步配置文件", "link": "chapter-26/sync" }
            ]
          },
          {
            "text": "27. Forge 流体系统",
            "link": "chapter-27/index",
            "items": [
              { "text": "27.1 `Fluid` 与 `FluidStack`", "link": "chapter-27/fluid-stack" },
              { "text": "27.2 流体方块", "link": "chapter-27/block" },
              {
                "text": "27.3 流体容器",
                "link": "chapter-27/container/index",
                "items": [
                  { "text": "27.3.1 物品形式的容器", "link": "chapter-27/container/item" },
                  { "text": "27.3.2 方块形式的容器", "link": "chapter-27/container/block" },
                  { "text": "27.3.3 流体容器之间的交互", "link": "chapter-27/container/interaction" }
                ]
              },
              { "text": "27.4 流体渲染相关", "link": "chapter-27/render" }
            ]
          },
          { "text": "28. ？", "link": "chapter-28/index" },
          {
            "text": "29. 跨 Mod 兼容及 Add-on 制作",
            "link": "chapter-29/index",
            "items": [
              { "text": "29.1 跨 Mod 通信（Inter-Mod Communication，IMC）", "link": "chapter-29/imc" },
              { "text": "29.2 使用第三方 Capability", "link": "chapter-29/foreign-capabilities" }
            ]
          }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '31. 附录 I：相关开发资源', link: 'chapter-31/index' },
          { text: '32. 附录 II：？？？', link: 'chapter-32/index' },
          { text: '33. 附录 III：？？？', link: 'chapter-33/index' },
          { text: '34. 附录 IV：？？？', link: 'chapter-34/index' },
          { text: '35. 附录 V：？？？', link: 'chapter-35/index' },
          { text: '36. 附录 VI：？？？', link: 'chapter-36/index' },
          { text: '37. 附录 VII：？？？', link: 'chapter-37/index' },
          { text: '38. 附录 VIII：？？？', link: 'chapter-38/index' }
        ]
      },
      {
        "text": "实战",
        "items": [
          { "text": "39. 实战（上）", "link": "chapter-39/index.md" },
          {
            "text": "40. 实战（下）",
            "link": "chapter-40/index.md",
            "items": [
              { "text": "40.1 问题 1", "link": "chapter-40/practice-1.md" },
              { "text": "40.2 问题 2", "link": "chapter-40/practice-2.md" },
              { "text": "40.3 问题 3", "link": "chapter-40/practice-3.md" },
              { "text": "40.4 问题 4", "link": "chapter-40/practice-4.md" },
              { "text": "40.5 问题 5", "link": "chapter-40/practice-5.md" },
              { "text": "40.6 问题 6", "link": "chapter-40/practice-6.md" },
              { "text": "40.7 问题 7", "link": "chapter-40/practice-7.md" },
              { "text": "40.8 问题 8", "link": "chapter-40/practice-8.md" }
            ]
          }
        ]
      },
      {
        "text": "后记",
        "items": [
          { "text": "跋：《Aboard Harbinger Gunship》", "link": "afterword/index.md" },
          { "text": "写在后面：鸣谢名单", "link": "afterword/credits.md" },
          { "text": "参考书目", "link": "afterword/bibliography.md" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Oganesson897/Neutralino' }
    ]
  }
})
