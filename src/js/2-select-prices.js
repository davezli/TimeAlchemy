function loadPrices() {
    $('#prices-last-update-date').html(defaultPricesLastUpdated);
    let keys = {};

    Object.keys(itemsToCraft).forEach(item => {
        const itemTree = getItemTree(item, itemsToCraft[item], priceList);
        keys = {
            ...keys,
            ...getKeysFromTree(itemTree)
        };
    });

    Object.keys(keys).forEach(material => {
        if (material === 'Meso') {
            return;
        }
        const materialIdx = material.replace(/\W/g, '');
        $('#select-prices-form-options').append(`
            <div class="form-row">
                <div class="form-group col-md-9">
                    <label for="itemPrice${materialIdx}">Price for ${material}</label>
                    <input type="number" class="form-control"
                        id="itemPrice${materialIdx}" value="${defaultPrices[material]}">
                    <div class="invalid-feedback">
                    Enter a number greater than 0.
                    </div>
                </div>
            </div>
        `)
    });

    priceList = keys;
}

function finishSelectPrices() {
    let validationError = false;

    Object.keys(priceList).forEach(material => {
        if (material === 'Meso') {
            priceList[material] = 1;
        }
        const materialIdx = material.replace(/\W/g, '');
        const fieldDom = $(`#itemPrice${materialIdx}`);
        const value = parseInt(fieldDom.val());
        if (value <= 0) {
            fieldDom.addClass("is-invalid");
            validationError = true;
        } else {
            fieldDom.removeClass("is-invalid");
            priceList[material] = value;
        }
    });

    if (validationError) {
        return;
    }

    console.log(JSON.stringify(priceList));
    nextStep('#select-prices-container')
}