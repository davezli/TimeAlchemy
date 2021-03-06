function loadInventory() {
    let keys = {};

    Object.keys(itemsToCraft).forEach(item => {
        const itemTree = getItemTree(item, itemsToCraft[item], priceList);
        keys = {
            ...keys,
            ...getKeysFromTree(itemTree)
        };
    });

    $('#select-inventory-form-options').empty();
    Object.keys(keys).forEach(material => {
        if (material === 'Meso') {
            return;
        }
        const materialIdx = material.replace(/\W/g, '');
        $('#select-inventory-form-options').append(`
            <div class="form-row">
                <div class="form-group col-md-9">
                    <img src="data:image/jpeg;base64,${icons_enc[material]}" alt="">
                    <label for="itemInventory${materialIdx}"><b>${material}</b> quantity: </label>
                    <input type="number" class="form-control"
                        id="itemInventory${materialIdx}" value="${Number.isInteger(inventory[material]) ? inventory[material] : 0}">
                </div>
            </div>
        `)
    });

    inventory = keys;
}

function finishLoadInventory() {
    Object.keys(inventory).forEach(material => {
        if (material === 'Meso') {
            return;
        }
        const materialIdx = material.replace(/\W/g, '');
        const fieldDom = $(`#itemInventory${materialIdx}`);
        const value = parseInt(fieldDom.val());
        inventory[material] = value;
    });

    nextStep('#select-inventory-container')
}