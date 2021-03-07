const path = require('path');

module.exports = {
    entry: {
        bundle: "./src/index.ts" //エントリーポイント
    },
    output: { //バンドルしたファイルをどこに出力させるか
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    resolve: { //名前解決
        extensions: ['.ts','.js'] //インポートする際にファイルの拡張子を書かなくても良くなる
    },
    devServer: {　//開発用サーバーの設定
        contentBase: path.join(__dirname, 'dist'), //webpack-dev-serverの公開フォルダ
        open: true //localhostを立ち上げたときに自動でブラウザ表示
      },
      module: {
        rules: [
　　　　　// 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
　　　　　// Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
          {
            test: /\.ts$/,
            loader: 'ts-loader'
          }
        ]
      }
    }