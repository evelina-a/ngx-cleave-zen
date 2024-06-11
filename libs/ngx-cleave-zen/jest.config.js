module.exports = {
  name: 'ngx-cleave-zen',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-cleave-zen',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
