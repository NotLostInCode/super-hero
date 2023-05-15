const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Точка входа, главный файл приложения
  entry: './src/index.js',

  // Настройки вывода, куда будут собираться файлы
  output: {
    // Путь к выходной папке
    path: path.resolve(__dirname, 'dist'),
    // Название выходного файла
    filename: 'bundle.js'
  },

  // Настройки загрузчиков для обработки различных типов файлов
  module: {
    rules: [
      {
        // Загрузчик для JavaScript файлов
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Загрузчик для CSS файлов
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // Загрузчик для изображений
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        // Загрузчик для шрифтов
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },

  // Настройки плагинов
  plugins: [
    // Плагин для создания HTML файла
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './src/index.html',
      favicon: 'src/assets/favicon/favicon.png'
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/myPages/myPage.html',
      template: './pages/myPages/myPage.html',
      chunks: [],
      favicon: 'src/assets/favicon/favicon.png'
    })
  ]
};
