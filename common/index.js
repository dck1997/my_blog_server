const fs = require('fs');
// promisify 异步处理
const { promisify } = require('util');
const path = require('path');

const readFile = promisify(fs.readFile)

// 获取 json 数据
const getFileData = async (fileName) => {
    const filePath = path.join(__dirname, `../json/${fileName}.json`)
    const data = await readFile(filePath, 'utf-8')
    return JSON.parse(data)
}

module.exports = {
    getFileData
}