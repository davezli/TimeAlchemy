function toggleStrikethrough() {
    $(this).css("text-decoration", "line-through");
}


function populateCraftingSteps() {
    const buyMap = {};
    const craftMap = {};
    let totalCost = 0;

    // getItemTree and getReverseCraftOrder mutate inventory
    const inventoryCopy = jQuery.extend(true, {}, inventory);

    Object.keys(itemsToCraft).forEach(item => {
      const itemTree = getItemTree(item, itemsToCraft[item], priceList, inventoryCopy);
      totalCost += itemTree.acquisitionCost;
      getReverseCraftOrder(itemTree, buyMap, craftMap, inventoryCopy);
    });


    const buyListDiv = $('#buy-list');
    buyListDiv.empty();
    Object.keys(buyMap).reverse().forEach(item => {
        const quantity = buyMap[item]['quantity'];
        const cost = buyMap[item]['cost'];
        const costEach = cost / quantity;

        buyListDiv.append(`
            <button type="button" class="list-group-item list-group-item-action col-md-12" onclick="toggleStrikethrough()">
                <img src="data:image/jpeg;base64,${icons_enc[item]}" alt="">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${quantity.toLocaleString()} ${item}</h5>
                </div>
                <p class="mb-1">${costEach.toLocaleString()} mesoes each for a total of ${cost.toLocaleString()}.</p>
            </button>`
        );
    });

    const craftListDiv = $('#craft-list');
    craftListDiv.empty();
    Object.keys(craftMap).reverse().forEach(item => {
        const quantity = craftMap[item]['quantity'];
        craftListDiv.append(`
            <button type="button" class="list-group-item list-group-item-action col-md-12" onclick="toggleStrikethrough()">
                <img src="data:image/jpeg;base64,${icons_enc[item]}" alt="">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${quantity.toLocaleString()} ${item}</h5>
                </div>
            </a>`
        );
    });

    const totalCostDiv = $('#total-cost');
    totalCostDiv.empty();
    totalCostDiv.append(`
        <h4>${totalCost.toLocaleString()} mesoes</h4>
    `);
}