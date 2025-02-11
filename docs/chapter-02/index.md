# 起点

## 开发环境部署
其实部署一个基于 Forge 的 Mod 的开发环境还是很简单的。比以前不知道简单到哪里去了。

  1. 首先下载 CleanroomMC 的 TemplateDevEnv（MDK）。打开 [GitHub 仓库][ref-forge-home]，点击“Code -> Download Zip”便会开始下载 zip 文件。  
  2. 解压下载到的 zip。务必要能看见诸如 `build.gradle`、`gradlew`、`gradlew.bat`、`.gitignore` 等文件。
  3. 安装一个支持 Gradle 的 IDE（集成开发环境，本文推荐并且默认使用 `Intellij IDEA`）。
  3. 使用 IDEA 打开 MDK 中的 `build.gradle` 文件（需通过项目打开并且信任项目）。
  4. 等待 IDEA 导入 Gradle 项目（可能需要网络代理或加速器来访问 Maven）。
  5. 在开始之前，需要一些合适的 IDEA 插件，例如 [Minecraft Dev RFG](https://github.com/eigenraven/MinecraftDev/releases)，下载最新 Release 后在 IDEA 中通过磁盘安装插件（记住后续不要在 IDEA 内直接更新插件，需手动卸载后重新从 GitHub 下载新版本）。
  6. 成功导入 Gradle 项目后（显示 `BUILD SUCCESSFUL` 后），打开侧边栏的 `Gradle Tasks`，找到 `Tasks - modder minecraft - setupDecompWorkspace` 双击运行。
  7. 在运行成功（显示 `BUILD SUCCESSFUL` 后），基本的配置就已经完成了。

[ref-forge-home]: https://github.com/CleanroomMC/TemplateDevEnv

### 常见问题

是的，因为各种乱七八糟的原因，部署环境的过程总是会有各种莫名其妙的问题。一般情况下， `--debug`、`--stacktrace` 直接莽拿到的信息足够 debug 用了。但有一点请注意：部署环境的过程中，因为涉及到几轮 mapping 和下载 Minecraft 的 assets，所以在没有预先部署好的环境留下的缓存的情况行，这个过程不会特别快。要有耐心。

然而，由于某些特殊原因，即使你有足够的耐心也不一定能部署成功。遇到这种情况时，你可以尝试通过为 Gradle 配置代理。[相关资料][ref-zzzz-tutorial]很容易找到，这里不再赘述。  

此外，还要明确一点：不是所有的错误都和网络有关系。请不要盲目尝试各种所谓的解决方案——虽然，直接删了 `.gradle` 缓存目录可以解决 90% 的非网络因素引发的问题。

[ref-zzzz-tutorial]: https://fmltutor.ustc-zzzz.net/1.1-%E9%85%8D%E7%BD%AE%E4%BD%A0%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%8E%AF%E5%A2%83.html#%E9%85%8D%E7%BD%AE%E5%B7%A5%E4%BD%9C%E7%8E%AF%E5%A2%83

## gradle.properties 设置
```properties
# Source Options
# 该选项用于设置是否启用新版本 Java 的语法（Java 17、21）
# 例如模式变量，var等语法
use_modern_java_syntax = false

# Compilation Options
# 用于设置是否构建 Sources 和 Javadoc 的 Jar
generate_sources_jar = true
generate_javadocs_jar = false

# Testing
# 代码测试工具
enable_junit_testing = true
show_testing_output = false

# Mod Information
# 推荐 mod_version 使用semver格式: https://semver.org/
# 此栏为模组基本信息
mod_version = 1.0.0
root_package = com.example
mod_id = modid
mod_name = Mod Name

# Mod Metadata (Optional)
# 用于生成 mcmod.info 的内容，可留空
mod_description =
mod_url =
mod_update_json =
# Delimit authors with commas
mod_authors =
mod_credits =
mod_logo_path =

# Mapping Properties
# 映射表设置
mapping_channel = stable
mapping_version = 39
use_dependency_at_files = true

# Run Configurations
# If multiple arguments/tweak classes are stated, use spaces as the delimiter
# 测试环境设置
minecraft_username = Developer
extra_jvm_args =
extra_tweak_classes =

# Maven Publishing (Provide secret: MAVEN_USER, MAVEN_PASS)
# Maven 发布设置
publish_to_maven = false
# Good for debugging artifacts before uploading to remote maven
# GitHub actions won't run if this is true, test this by running the task `publishToMavenLocal`
publish_to_local_maven = false
maven_name = ${mod_name}
maven_url =

# Publishing
# release_type can only be: release, beta or alpha (applies to CurseForge / Modrinth)
release_type = release
publish_with_changelog = ${{ it.file('CHANGELOG.md').exists() }}

# Publishing to CurseForge (Provide secret: CURSEFORGE_TOKEN)
# To configure dependencies, head to publishing.gradle's curseforge block
publish_to_curseforge = false
# CurseForge project ID must be the numerical ID and not the slug
curseforge_project_id =
curseforge_debug = false

# Publishing to Modrinth (Provide secret: MODRINTH_TOKEN), the token must have the `CREATE_VERSION` and `PROJECT_WRITE` permissions
# To configure dependencies, head to publishing.gradle's modrinth block
publish_to_modrinth = false
modrinth_project_id =
# Allows gradle to publish updated READMEs to the project body (via the modrinthSyncBody task)
modrinth_sync_readme = false
modrinth_debug = false

# If any properties changes below this line, refresh gradle again to ensure everything is working correctly.

# Modify Minecraft Sources
# RetroFuturaGradle allows Minecraft sources to be edited, and have the changes reflected upon running it
# Good for previews when coremodding, or generally seeing how behaviours can change with certain code applied/unapplied
# Turning this on allows Minecraft sources to persist and not regenerate
change_minecraft_sources = false

# Tags
# RFG 会在指定的地方生成一个用于存储信息的工具类，你可以自行定义其生成的内容
# 见 tag.properties
use_tags = true
tag_class_name = ${root_package}.${mod_id}.Tags

# 访问
use_access_transformer = false
access_transformer_locations = ${mod_id}_at.cfg

# Mixins
# Powerful tool to do runtime description changes of classes
# Wiki: https://github.com/SpongePowered/Mixin/wiki + https://github.com/CleanroomMC/MixinBooter/ + https://cleanroommc.com/wiki/forge-mod-development/mixin/preface
# 用于修改字节码
# Mixin 介绍和教程：https://xfl03.gitbook.io/coremodtutor/5
use_mixins = false
mixin_booter_version = 10.2
# A configuration defines a mixin set, and you may have as many mixin sets as you require for your application.
# Each config can only have one and only one package root.
# Generate missing configs, obtain from mixin_configs and generate file base on name convention: "mixins.config_name.json"
# You should change package root once they are generated
generate_mixins_json = true
# Delimit configs with spaces. Should only put configs name instead of full file name
mixin_configs = ${mod_id}
# A refmap is a json that denotes mapping conversions, this json is generated automatically, with the name `mixins.mod_id.refmap.json`
# Use the property `mixin_refmap` if you want it to use a different name, only one name is accepted
mixin_refmap = mixins.${mod_id}.refmap.json

# Coremods
# Coremod 设置
is_coremod = false
coremod_includes_mod = true
coremod_plugin_class_name =

# AssetMover
# Convenient way to allow downloading of assets from official vanilla Minecraft servers, CurseForge, or any direct links
# Documentation: https://github.com/CleanroomMC/AssetMover
use_asset_mover = false
asset_mover_version = 2.5
```

这些设置会直接帮你配置大部分的环境设置，以便于你无需自行修改 `build.gradle`。

## 入口类

和一般的教程不一样，这里的写法有些特殊：

```java
// Mod主类的标记。其中只有modid是必填项。
//
// modid 不允许使用大写字母，最大长度 64，不能为空。
// 推荐在 modid 中只使用小写字母、数字、连字符和下划线，换言之即只使用满足正则表达式
// [a-z0-9\-_]{1,64} 的 modid。
// 发现不符合要求的 modid 时，会抛出 IllegalArgumentException 阻止游戏启动。
//
// name 没有限制。若不填则直接使用 modid 充当 name，但仍然会产生警告。
// 一般来说，name 都满足正则表达式 [\w ]+。但也有少许例外。
//
// version 没有限制，若不填则使用 1.0，并产生警告。
// 对于 version 来说，***强烈***推荐只用数字和点，比如只有 MAJOR.MINOR.PATCH 的 SemVer。
//
// useMetadata = true 让 Forge 以 mcmod.info 里的信息为准。它的格式在“Mod 的元数据”一节
// 会有详细说明。
@Mod(modid = "my_mod", name = "My First Mod", version = "0.0.0", useMetadata = true)
public enum MyMod {
    INSTANCE;

    // Mod 主类实例的“工厂”。
    // 别的 Mod 开发教程肯定使用的是@Mod.Instance
    // 这里之所以这么写，是因为主类是 enum，换言之父类是 java.lang.Enum
    // 因此，FML 直接 Class.newInstance() 的话一定会报错，java.lang.Enum 没有零参构造器
    @Mod.InstanceFactory
    public static MyMod getInstance() {
        return INSTANCE;
    }

    // 一个入口方法。
    // Mod的加载大致分为 6 个阶段，每个阶段均有一个事件代表，
    // 而 @Mod.EventHandler 注解则标记该方法将订阅此事件。
    // Mod 加载时的六个阶段对应的事件，以时间顺序排列：
    //    FMLConstructionEvent
    //    FMLPreInitializationEvent
    //    FMLInitializationEvent
    //    FMLInterModComms.IMCEvent
    //    FMLPostInitializationEvent
    //    FMLLoadCompleteEvent
    // 其中，PreInit.、Init.、IMCEvent 和 PostInit. 是最常用的四个事件，
    // 剩下两个事件只有在相当少见的情况下才会用到，大可暂时无视。
    @Mod.EventHandler
    public void preLoad(FMLPreInitializationEvent event) {
        System.out.println("Hello, Forge");
    }
}
```
