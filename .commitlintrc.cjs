module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:.)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '✨ feat',
        '🚑 fix',
        '💄 design',
        '📝 style',
        '🔨 refactor',
        '💡 comment',
        '📚 docs',
        '✅ test',
        '📦 chore',
        '🚚 rename',
        '➖ remove',
        '🚀 deploy',
        '🎉 init',
      ],
    ],
  },
};
