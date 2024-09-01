const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // 번들링의 진입점(엔트리) 파일
  output: {
    filename: 'bundle.js', // 출력되는 번들 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일이 생성될 경로
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 처리할 파일 확장자
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일을 위한 규칙
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // CSS 파일을 위한 규칙
        use: ['style-loader', 'css-loader'], // CSS 파일을 처리하기 위한 로더 설정
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 원본 HTML 파일 경로
      filename: 'index.html', // 생성될 HTML 파일 이름 및 위치
    }),
  ],
  mode: 'development', // 개발 모드 ('production'으로 변경 가능)
};
