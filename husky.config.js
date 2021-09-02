module.exports = {
  hooks: {
    'pre-commit': 'npm run test && npm run lint-staged',
    'post-commit': 'git update-index --again',
  },
};
