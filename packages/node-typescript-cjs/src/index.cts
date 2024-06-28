// ts-node 运行时, 导入的文件名必须带上 .cts 的后缀
const { formatDateTime } = require('./utils/format-date-time.cts');

console.log('node-cjs', formatDateTime(new Date().toISOString()));
