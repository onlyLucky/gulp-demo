# gulp





## 简单的使用



- 新建gulpfile.js文件
- 默认执行，命名命令

```js
exports.foo = done =>{
  console.log('foo task working~~~~')
  done()//标识已经完成任务
}
```



## 创建组合命令



### series()

将任务函数和/或组合操作组合成更大的操作，这些操作将**按顺序依次执行**。

### parallel()

将任务功能和/或组合操作组合成**同时执行**的较大操作。



## 异步任务处理

- async await
- promise



## 构建过程的工作原理



输入(读取文件)--->加工(压缩文件) --->写入(写入文件)



文件的写入流写出流使用，中间进行文件处理压缩



```js
// 将normalize.css文件进行压缩处理
exports.default = () => {
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
      const output = input.replace(/\s+/g,'').replace(/\/\*.+?\*\//g,'')
      callback(null, output)
    }
  })

  // 把读取出来的文件流导入写入文件流中
  read
    .pipe(transform)//转换
    .pipe(write)//写入

  return read
}

```





## 文件操作api +插件使用



