# 使用 webpack 打包时，如何更好地利用 long term cache

1. 生产环境使用 chunkhash，根据文件内容生成唯一的 hash 值。
1. 使用 SplitChunksPlugin 把项目中依赖箱单独生成一份文件，避免频繁更新。（Webpack4.0 以前使用 CommonChunkPlugin）
1. 使用 HtmlWebpackPlugin。
