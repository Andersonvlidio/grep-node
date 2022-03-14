module.exports = {
  name: 'l2',
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    console.log(parameters)
    print.error('l2 viadinho')
  },
}
