// Define items to remove all recipes for
const itemsToRemove = [
    'create:andesite_alloy'
    // Add more items here as needed
  ]
  
  // Define specific recipe IDs to remove
  const recipeIdsToRemove = [
    'create:crafting/materials/andesite_alloy',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'thermal:machines/smelter/smelter_alloy_andesite', 
    'thermal:compat/create/smelter_create_andesite_alloy' 
    // Add more recipe IDs here
  ]
  
  // Recipe removal event
  ServerEvents.recipes(event => {
    // Remove specific recipe IDs
    recipeIdsToRemove.forEach(id => {
      event.remove({id: id})
      console.log(`Removed recipe with ID: ${id}`)
    })
    
    // Remove all recipes that output specific items
    itemsToRemove.forEach(item => {
      event.remove({output: item})
      console.log(`Removed all recipes outputting: ${item}`)
    })
    
    // Special handling for modded machine recipes that might not be caught by output
    // Add more as needed
    // Currently, this is just a placeholder for demonstration
    // event.remove({type: 'create:mixing', output: item})
    
    console.log('Recipe removal complete!')
  })