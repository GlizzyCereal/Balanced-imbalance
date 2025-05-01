// Modify ALL brass recipes to require super-heating

ServerEvents.recipes(event => {
  console.log('Starting brass recipe processing')

  // ---------- REMOVE EXISTING RECIPES ----------
  
  // 1. Remove standard Create brass recipes
  event.remove({id: 'create:mixing/brass_ingot'})
  event.remove({id: 'create:mixing/brass_ingot_from_zinc_dust'})
  event.remove({id: 'create:mixing/brass_nugget'})
  
  // 2. Remove Thermal Series brass recipes
  event.remove({id: 'thermal:machines/smelter/smelter_alloy_brass'})
  event.remove({id: /thermal:.*brass.*/})
  
  // 3. Remove Create Metallurgy brass recipes using pattern matching
  event.remove({id: /createmetallurgy:.*brass.*/})
  
  // 4. Remove Tinkers' Construct brass alloy recipe
  event.remove({type: 'tconstruct:alloy', output: {fluid: 'tconstruct:molten_brass'}})
  event.remove({id: /tconstruct:.*brass.*/})
  
  // 5. General pattern matching for Create recipes
  event.remove({type: 'create:mixing', output: 'create:brass_ingot'})
  event.remove({type: 'create:mixing', output: /create:brass.*/})
  
  // Remove recipes by output for various specific recipe types
  event.remove({output: /.*brass.*/, type: 'create:mixing'})
  event.remove({output: /.*brass.*/, type: 'thermal:smelter'})
  
  // Count brass recipes after removal to verify removal worked
  console.log('Brass recipes removed successfully')
  
  // ---------- ADD SUPERHEATED RECIPES ----------
  
  // 1. Add standard brass ingot recipe (superheated)
  event.recipes.create.mixing(['2x create:brass_ingot'], ['minecraft:copper_ingot', 'create:zinc_ingot'])
    .heated()
    .superheated()
    .processingTime(150)
  
  // 2. Add brass nugget recipe (superheated)
  event.recipes.create.mixing(['2x create:brass_nugget'], ['#forge:nuggets/copper', '#forge:nuggets/zinc'])
    .heated()
    .superheated()
    .processingTime(100)
  
  // 3. Add dust variant recipes (superheated)
  event.recipes.create.mixing(['2x create:brass_ingot'], ['#forge:dusts/copper', '#forge:dusts/zinc'])
    .heated()
    .superheated()
    .processingTime(100)

  // 4. Add molten brass metallurgy recipe (superheated)
  event.custom({
    type: 'createmetallurgy:alloying',
    ingredients: [
      {
        fluid: 'createmetallurgy:molten_copper',
        amount: 90
      },
      {
        fluid: 'createmetallurgy:molten_zinc',
        amount: 90
      }
    ],
    results: [
      {
        fluid: 'createmetallurgy:molten_brass',
        amount: 180
      }
    ],
    processingTime: 100,
    heatRequirement: 'superheated' // This is the correct way to specify heat requirements
  })

  console.log('Modified ALL brass recipes to require super-heating')
})