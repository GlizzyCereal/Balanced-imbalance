// Replace item application recipes with TConstruc basin casting (except andesite casing)

ServerEvents.recipes(event => {
    console.log('Overhauling Create casing recipes')
  
    // --------- REMOVE EXISTING RECIPES ---------
    
    // Remove all casing crafting/deploying recipes except andesite casing
    event.remove({id: 'create:crafting/materials/copper_casing'})
    event.remove({id: 'create:crafting/materials/brass_casing'})
    event.remove({id: 'create:deploying/brass_casing'})
    event.remove({id: 'create:deploying/copper_casing'})
    event.remove({id: 'create:item_application/brass_casing_from_log'})
    event.remove({id: 'create:item_application/copper_casing_from_log'})
    
    // Generic pattern matching for any deploying/casing recipe except andesite
    event.remove({type: 'create:deploying', output: 'create:brass_casing'})
    event.remove({type: 'create:deploying', output: 'create:copper_casing'})
    event.remove({type: 'create:item_application', output: /create:(?!andesite|railway).*_casing/})
    
    // --------- ADD TINKERS' CONSTRUCT BASIN CASTING RECIPES ---------
    
    // Define wood types for variety
    const woodTypes = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 
        'mangrove', 'cherry'
    ]
    
    // For each wood type, add casting recipes
    woodTypes.forEach(wood => {
      // Brass Casing
      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {
          tag: 'tconstruct:molten_brass',
          amount: 90
        },
        cast: {
          item: `minecraft:stripped_${wood}_log`
        },
        result: 'create:brass_casing',
        cooling_time: 50
      })
      
      // Copper Casing
      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {
          tag: 'tconstruct:molten_copper',
          amount: 90
        },
        cast: {
          item: `minecraft:stripped_${wood}_log`
        },
        result: 'create:copper_casing',
        cooling_time: 50
      })
    })
    
    // Add support for modded woods using a tag
    event.custom({
      type: 'tconstruct:casting_basin',
      fluid: {
        tag: 'tconstruct:molten_brass',
        amount: 90
      },
      cast: {
        tag: 'minecraft:stripped_logs'
      },
      result: 'create:brass_casing',
      cooling_time: 50
    })
    
    event.custom({
      type: 'tconstruct:casting_basin',
      fluid: {
        tag: 'tconstruct:molten_copper',
        amount: 90
      },
      cast: {
        tag: 'minecraft:stripped_logs'
      },
      result: 'create:copper_casing',
      cooling_time: 50
    })

    // After your existing casing recipes...
    
    // --------- ADD CHORIUM CREATIVE CASING RECIPE ---------
      
    // 1. Add recipe to melt chorium ingots into molten chorium
    event.custom({
        type: 'tconstruct:melting',
        ingredient: {
          item: 'createcasing:chorium_ingot'
        },
        result: {
          fluid: 'kubejs:molten_chorium',
          amount: 90
        },
        temperature: 950,
        time: 64
    })
  
    // 2. Add creative casing recipe using industrial iron block
    event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {
          name: 'kubejs:molten_chorium',
          amount: 180
        },
        cast: {
          item: 'create:industrial_iron_block'
        },
        cast_consumed: true,
        result: 'createcasing:creative_casing',
        cooling_time: 120
    })
  
    console.log('Casing recipes overhauled: now require molten metal casting')
  })