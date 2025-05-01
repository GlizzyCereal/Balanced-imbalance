StartupEvents.registry('fluid', event => {
  event.create('molten_chorium')
    .displayName('Molten Chorium')
    .bucketColor(0xE752FF)
    .thickTexture(0xE752FF)
    // Greatly increased viscosity (was 8000)
    .viscosity(35000)
    .temperature(1500)
    // Slightly increased density
    .density(3000)
    .luminosity(8)
    // Textures remain the same:
    .stillTexture('kubejs:fluid/molten_chorium/still')
    .flowingTexture('kubejs:fluid/molten_chorium/flowing')
})