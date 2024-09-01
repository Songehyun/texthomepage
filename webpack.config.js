const path = require('path');

module.exports = {
  entry: './src/index.ts', // 엔트리 파일
  output: {
    filename: 'bundle.js', // 번들링 결과 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들 파일의 경로
    publicPath: '/', // 경로 설정
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 파일 확장자 처리
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일 처리 규칙
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // CSS 파일 처리 규칙
        use: ['style-loader', 'css-loader'], // CSS 로더 설정
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|mp3)$/i, // 이미지 및 mp3 파일 처리 규칙
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // 파일의 경로와 이름을 그대로 유지
              context: 'src', // 파일 경로가 dist가 아닌 src 기반이 되도록 설정
            },
          },
        ],
      },
    ],
  },
  mode: 'development', // 개발 모드
};
