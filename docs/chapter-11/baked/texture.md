# 纹理与纹理动画

让我们重新再来审视这个模型：

```json
{
    "parent": "item/generated",
    "textures": {
        "layer0": "example_mod:item/example_item_texture"
    }
}
```

它用到了位于 `assets/example_mod/textures/item/` 目录下的 `example_item_texture.png` 这张纹理。  
这张纹理是可以有动画效果的，如此一来这个“模型”就会动起来（虽然，实际上在动的是纹理）。

## 逐帧动画与 `.mcmeta` 文件

要使用原版的纹理动画机制，首先这张纹理必须包括整个动画效果中所有的帧，且每一帧都必须按先后顺序从上到下排列好。  
换言之，这张纹理此时类似于胶卷，而使用这张纹理的那个面<!-- BakedQuad -->便是“荧屏”。因此：

  - 带动画效果的纹理的高度（height）一定是宽度（width）的整数倍。
  - 带动画效果的纹理的高度可以等分成 N 个正方形，正方形的边长即为最终纹理的宽，正方形边长乘以 N 即为最终纹理的高。
  - N 即是总帧数。

原版中使用这个机制的纹理的典型代表是静止的水方块的纹理，位于 `assets/minecraft/textures/block/water_flow.png`，它是一张由 32 个正方形纹理摞在一起组成的 32 * 1024 像素的巨大纹理。  
如果你在 forgeSrc JAR 中找到了这张纹理，你会注意到这个纹理文件下面有一个叫 `water_flow.png.mcmeta` 的文件。这个文件便是 Minecraft 判断该纹理是否存在动画的依据：如果 Minecraft 在纹理的相同目录下找到了以纹理文件全名并在结尾加上 `.mcmeta` 命名的文件，它会默认该纹理带动画效果，并尝试解析这个 `.mcmeta` 文件中对动画的定义。  
`water_flow.png.mcmeta` 长这样：

```json
{
    "animation": {
        "frametime": 2
    }
}
```

是的，动画的定义是通过 JSON 来描述的。`animation` 这个键下包含了所有对这个动画效果的描述。静止水方块的动画效果并不复杂，`"framtetime": 2` 定义了它是每隔 2 游戏刻（通常为 0.1 秒）切换下一帧的逐帧动画。  
若没有指明 `frametime` 的值，则默认为 1，即每隔 1 游戏刻（通常为 0.05 秒）切换下一帧。

### 对帧的精确控制

默认的动画播放顺序是从上到下，然后回到开头循环往复的，但你仍然可以手动指定具体的播放顺序：

```json
{
    "animation": {
        "frametime": 2,
        "frames": [
            3, 1, 4, 1, 5, 9, 2, 6,
            5, 3, 5, 8, 9, 7, 9, 3, 2,
            3, 8, 4, 6, 2, 6, 4, 3, 3,
            8, 3, 2, 7, 9, 5, 0, 2, 8
        ]
    }
}
```

纹理最顶部的那一块正方形是第 0 帧。在上面这个 `mcmeta` 文件中，我们定义了动画的播放顺序是从第 3 帧开始，然后是第 1 帧、第 4 帧、第 1 帧、第 5 帧、……

### 覆盖默认帧持续时间

还可以手动指定某一帧的停留时间，此时这一帧的停留时间会无视 `frametime` 的设定，而是使用你设定的值。

```json
{
    "animation": {
        "frametime": 2,
        "frames": [
            3,
            1,
            { "index": 4, "time": 666 },
            1,
            5,
            9
        ]
    }
}
```

注意第三个要播放的帧是原本的第 4 帧，但持续时间被定义为了 666 游戏刻。

### 插值

Minecraft 可以帮你对动画进行（线性？）插值，使得每一帧之间的切换更为平滑。只需声明 `"interpolate": true` 即可：

```json
{
    "animation": {
        "interpolate": true,
        "frametime": 2
    }
}
```

### 非传统的尺寸纹理

虽然不是很常见，但如果你的纹理形成的动画并不是正方形的，你可以手动指定纹理的总宽度和总高度。

```json
{
    "animation": {
        "width": 233,
        "height": 466
    }
}
```

值得注意的是，Minecraft 本身只是读取并保存了这两个值，**但并没有在任何地方用到这两个值**。所以即便是像上面这样写了也没什么用，除非你自己手动去调用：
  - `AnimationMetadataSection.getFrameWidth()`（`func_110474_b`）
  - `AnimationMetadataSection.getFrameHeight()`（`func_110471_a`）
