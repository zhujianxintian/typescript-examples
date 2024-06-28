// @ts-check

/**
 * @type {import('prettier').Config}
 */
const config = {
    printWidth: 120,
    // 尽可能添加逗号
    trailingComma: 'all',
    // tab 的长度
    tabWidth: 4,
    // 自动添加分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 结尾换行
    endOfLine: 'lf',
    // 重写部分文件的规则
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
