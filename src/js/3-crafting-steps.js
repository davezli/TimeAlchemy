function toggleStrikethrough() {
    $(this).css("text-decoration", "line-through");
}


function populateCraftingSteps() {
    const buyMap = {};
    const craftMap = {};
    let totalCost = 0;

    Object.keys(itemsToCraft).forEach(item => {
      const itemTree = getItemTree(item, itemsToCraft[item], priceList);
      totalCost += itemTree.acquisitionCost;
      getReverseCraftOrder(itemTree, buyMap, craftMap);
    });


    const buyListDiv = $('#buy-list');
    Object.keys(buyMap).reverse().forEach(item => {
        const quantity = buyMap[item]['quantity'];
        const cost = buyMap[item]['cost'];
        const costEach = cost / quantity;

        buyListDiv.append(`
            <button type="button" class="list-group-item list-group-item-action" onclick="toggleStrikethrough()">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${quantity.toLocaleString()} ${item}</h5>
                </div>
                <p class="mb-1">${costEach.toLocaleString()} mesoes each, for a total of ${cost.toLocaleString()}</p>
            </button>`
        );
    });

    const craftListDiv = $('#craft-list');
    Object.keys(craftMap).reverse().forEach(item => {
        const quantity = craftMap[item]['quantity'];
        craftListDiv.append(`
            <button type="button" class="list-group-item list-group-item-action" onclick="toggleStrikethrough()">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${quantity.toLocaleString()} ${item}</h5>
                </div>
            </a>`
        );
    });

    const totalCostDiv = $('#total-cost');
    totalCostDiv.append(`
        <h4>${totalCost.toLocaleString()} mesoes</h4>
    `);
}