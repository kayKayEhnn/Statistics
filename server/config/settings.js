const conf = {
  development: {
    port: 3000,
    interval: 5000
  },
  production: {
    port: 9988,
    interval: 10000
  }
}

let keys = ['development', 'production']
for (let key of keys) {
  conf[key].dbPath = 'mongodb://localhost:27017/statistics'
  conf[key].getCpuCommand = 'ps -A -o %cpu | awk \'{s+=$1} END {print s }\''
  conf[key].pointsPerGraphic = 60
  conf[key].cpuThreshold = 100
} // same in both envs

module.exports = (env) => {
  conf[env].env = env
  return conf[env]
}
