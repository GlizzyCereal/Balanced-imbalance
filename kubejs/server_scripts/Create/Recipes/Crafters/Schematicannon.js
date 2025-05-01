ServerEvents.recipes(event => {
    console.log('Schematicannon.js loaded!')
    
    // --------- REMOVE EXISTING RECIPES ---------

    // Remove all schematicannon crafting recipes using more precise selectors
    event.remove({output: 'create:schematicannon'})
    event.remove({output: 'create:empty_schematic'})
    
    // Explicitly target any potential recipe IDs with namespaced paths
    event.remove({id: 'create:crafting/schematicannon'})
    event.remove({id: 'create:crafting/schematics/empty_schematic'})

    // --------- ADD NEW RECIPES ---------

    // Mechanical Crafter Recipe using Create's Mechanical Crafter
    event.recipes.create.mechanical_crafting('create:schematicannon', [
        '  A  ',
        ' BCB ',
        'BDEDB',
        ' BFB ',
        '  A  '
    ], {
        A: 'create:railway_casing',
        B: 'create:andesite_alloy',
        C: 'create:precision_mechanism',
        D: 'create:brass_casing',
        E: 'supplementaries:cannon',
        F: 'createcasing:creative_casing'
    })

    // Empty Schematic Recipe
    event.recipes.create.mechanical_crafting('create:empty_schematic', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'create:brass_sheet',
        B: 'minecraft:paper'
    })
})