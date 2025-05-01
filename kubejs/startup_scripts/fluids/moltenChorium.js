// Register the molten chorium fluid - MUST BE IN STARTUP SCRIPTS, NOT SERVER SCRIPTS

StartupEvents.registry('fluid', event => {
  event.create('molten_chorium')
    .displayName('Molten Chorium')
    .bucketColor(0xE752FF) // Purple color
    .thickTexture(0xE752FF)
    .viscosity(8000)
    .temperature(1500)
    .density(2000)
    .luminosity(8)
    .stillTexture('tconstruct:block/fluid/molten/still')
    .flowingTexture('tconstruct:block/fluid/molten/flowing')
})