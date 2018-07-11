exports.config = {
  namespace: 'mycomponent',
  globalScript: 'src/global/index.ts',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};
