module.exports = {
  '*.{json,js,ts,css,scss,md,yml,sh,xml,html}|Dockerfile|.gitignore': [
    'prettier --cache --write',
  ],
};
