class ItemNode {
    item;
    quantity;
    children;
    acquisitionMode;
    acquisitionCost;

    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
        this.children = {};
    }
}

const AcquisitionMode = {
    BUY: 'Buy',
    CRAFT: 'Craft'
};

function getItemTree(item, quantity, priceList) {
    const node = new ItemNode(item, quantity);

    const shouldCalcPrices = (priceList !== undefined);

    if (shouldCalcPrices && priceList[item]) {
        node.acquisitionMode = AcquisitionMode.BUY;
        node.acquisitionCost = priceList[item] * quantity;
    }

    if (recipes[item]) {
        let craftingCost = 0;

        Object.keys(recipes[item]).forEach((material) => {
            const materialQuantity = recipes[item][material] * quantity;
            const materialNode = getItemTree(material, materialQuantity, priceList);
            node.children[material] = materialNode;

            craftingCost += materialNode.acquisitionCost;
        });

        if (shouldCalcPrices && (!priceList[item] || craftingCost < node.acquisitionCost)) {
            node.acquisitionMode = AcquisitionMode.CRAFT;
            node.acquisitionCost = craftingCost;
        }
    }

    return node;
}

// Map instead of Object for insertion order
// Outputs to BuyMap, CraftMap
function getReverseCraftOrder(itemNode, buyMap, craftMap) {
    const item = itemNode.item;
    const quantity = itemNode.quantity;
    const cost = itemNode.acquisitionCost;

    if (itemNode.acquisitionMode === AcquisitionMode.CRAFT) {
        craftMap.set(item,
            {
                quantity: quantity + (craftMap.get(item)?.quantity || 0),
                cost: cost + (craftMap.get(item)?.cost || 0)
            });
    } else if (itemNode.acquisitionMode === AcquisitionMode.BUY) {
        buyMap.set(item,
            {
                quantity: quantity + (buyMap.get(item)?.quantity || 0),
                cost: cost + (buyMap.get(item)?.cost || 0)
            });
    }

    Object.values(itemNode.children).forEach(child => {
        getReverseCraftOrder(child, buyMap, craftMap)
    });
}

// Used for Debugging
function printItemTree(itemNode, indents = 0) {
    let outputString = "";
    for(let i = indents; i > 0; i--) {
        outputString += '\t\t'
    }

    outputString += `${itemNode.item} (${itemNode.quantity}) - ${itemNode.acquisitionMode} - ${itemNode.acquisitionCost}`;

    console.log(outputString);

    Object.keys(itemNode.children).forEach(child => {
        printItemTree(itemNode.children[child], indents + 1)
    });
}
