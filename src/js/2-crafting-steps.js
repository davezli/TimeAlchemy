function populateCraftingSteps() {
    const buyMap = new Map();
    const craftMap = new Map();

    Object.keys(itemsToCraft).forEach(item => {
      const itemTree = getItemTree(item, itemsToCraft[item], priceList);
      getReverseCraftOrder(itemTree, buyMap, craftMap);
    });

    console.log(JSON.stringify(buyMap));
    console.log(JSON.stringify(craftMap));

}