/*
 * @Author: pink
 * @Date: 2022-02-07 16:39:10
 * @LastEditors: pink
 * @LastEditTime: 2022-02-08 20:16:25
 * @Description: gulp入口文件
 */
const {series, parallel, src, dest} = require('gulp')
const fs = require('fs')
const {Transform} = require('stream')

// exports.foo = done =>{
//   console.log('foo task working~~~~')
//   done()//标识已经完成任务
// }

// // 默认命令执行
// exports.default = done => {
//   console.log('defalut task working~~~~')
//   done()
// }

/*const task1 = done => {
  setTimeout(()=>{
    console.log('task1 working~~~~')
    done()
  },1000)
}

const task2 = done => {
  setTimeout(()=>{
    console.log('task2 working~~~~')
    done()
  },1000)
}

const task3 = done => {
  setTimeout(()=>{
    console.log('task3 working~~~~')
    done()
  },1000)
}

exports.foo = series(task1,task2,task3)
exports.bar = parallel(task1,task2,task3)*/

/* exports.callback = done => {
  console.log('callback task ~~~')
  done()
}

exports.callback_error = done => {
  console.log('callback task')
  done(new Error('task failed callback_error'))
}
exports.promise = ()=>{
  console.log('promise task~~~')
  return Promise.resolve()
}

exports.promise_error = ()=>{
  console.log('promise task~')
  return Promise.reject(new Error('task failed'))
}

const timeout = time => {
  return new Promise(resolve=>{
    setTimeout(resolve, time)
  })
}

exports.async = async () => {
  await timeout(1000)
  console.log('async task')
}


// 创建文件写入流,暂存temp.txt

exports.stream = done => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  // 监听写入
  readStream.on('end', ()=>{
    done()
  })
  return readStream
} 

 */

// 将normalize.css文件进行压缩处理
/* exports.default = () => {
  // 创建文件读取流
  const read = fs.createReadStream('normalize.css')
  // 文件写入流
  const write = fs.createWriteStream('normalize.min.css')
  // 文件转换
  const transform = new Transform({
    transform: (chunk, encoding,callback)=>{
      // 文件压缩过程实现
      // chunk 读取流中的文件内容
      const input = chunk.toString()
      // 正则匹配替换换行，回车 再替换文件中的注释内容 /* */
      /* const output = input.replace(/\s+/g,'').replace(/\/\*.+?\*\//g,'')
      callback(null, output)
    }
  }) */

  // 把读取出来的文件流导入写入文件流中
  /* read
    .pipe(transform)//转换
    .pipe(write)//写入

  return read
}
 */

//gulp文件操作API
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

// 默认指令将src 文件下面的normalize.css 打包到dist中
exports.default = () => {
  // return src('src/normalize.css').pipe(dest('dist'))
  // return src('src/*.css').pipe(dest('dist/css'))
  // 获取文件 进行css文件压缩 进行后缀名更换 文件放置到指定文件夹内
  return src('src/*.css')
    .pipe(cleanCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dist/css'))
}
