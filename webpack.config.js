// 웹팩은 상세하게 설정이 가능하므로 작은 프로젝트보다 큰 프로젝트에서 유용하다.

// node js 문법으로 작성
//^ import
const path                = require('path')                 // node js의 path 모듈을 가져온다.
const HtmlPlugin          = require('html-webpack-plugin')  // 최초 실행될 HTML 파일(템플릿)을 연결
const CopyPlugin          = require('copy-webpack-plugin')  // 정적 파일을 연결
const { VueLoaderPlugin } = require('vue-loader')           //! vue-loader가 동작할 수 있도록 해준다.

//^ export
module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],    // 파일을 읽어들일 때 확장자를 지정해준다. (경로에서 확장자를 지정하지 않아도 문제가 없게끔 해주는 역할)
        alias: {    // 경로 별칭
            '~': path.resolve(__dirname, 'src'), // __dirname: 현재 파일이 있는 경로 / 'src': src 폴더에 있는 파일들을 읽어들이기 위해 경로를 지정해준다.
            'assets': path.resolve(__dirname, 'src/assets') // src/assets 폴더에 있는 파일들을 읽어들이기 위해 경로를 지정해준다.
        }
    },

    //^ 파일을 읽어들이기 시작하는 진입점 설정
    entry: './src/main.js', 

    //^ 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),  // __dirname: 현재 파일이 있는 경로 / 'dist': dist 폴더에 결과물을 저장한다.
        // filename: 'main.js',    // 결과물 파일명
        clean: true // 기존에 만들어진 파일들을 모두 지우고 새로 만든다.

        // dist 폴더에 main.js 파일이 생성된다.
        // 그러나 웹팩에서는 결과물을 기본적으로 dist폴더에 만들어주기 때문에 path를 따로 설정하지 않아도 된다. 
        // filename도 entry에다가 지정한 파일명을 그대로 사용하기 때문에 filename도 따로 설정하지 않아도 된다.
    },

    //^ 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정해주는 옵션
    plugins: [
        new HtmlPlugin({
            template: './index.html'   // 최초 실행될 HTML 파일(템플릿)을 연결
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' },  // static 폴더에 있는 파일들을 dist 폴더로 복사한다.
                // { from: '경로'}
            ]
        }),
        new VueLoaderPlugin()   

    ],
    // css 파일을 읽을 수 있도록 도와주는 패키지 
    // css-loader / style-loader (개발 의존성으로 설치)
    module: {
        rules: [
            //! vue라는 확장자를 갖는 파일을 해석할 수 있도록 규칙을 생성해야 함.
            {
                test: /\.vue$/, // .vue로 끝나는 파일을 찾는 정규식
                use: [
                    'vue-loader'    // vue-loader가 동작할 수 있도록 해준다.
                ]
            },
            {
                test: /\.s?css$/,        // .css 또는 .scss로 끝나는 파일을 찾는 정규식
                use: [  //^ 순서가 중요하다. 뒤에서부터 실행된다.
                    'vue-style-loader',  // vue에서 스타일을 적용할 수 있도록 해준다.  
                    'style-loader'    ,  // html에 스타일을 적용할 수 있도록 해준다.
                    'css-loader'      ,  // 자바스크립트에서 css를 읽을 수 있도록 해준다.
                    'postcss-loader'  ,  // 공급업체 접두사(autoprefixer)를 적용할 수 있도록 해준다.
                    'sass-loader'     ,  // scss를 파일을 읽을 수 있도록 해준다.
                ]
            },
            {
                test: /\.js$/,  // .js로 끝나는 파일을 찾는 정규식
                use: [
                    'babel-loader'  // babel이 동작할 수 있도록 해준다.
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    }


    // devServer: {
    //     host: "localhost"
    // }
}