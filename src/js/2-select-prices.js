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
                    <img src="data:image/jpeg;base64,${icons_enc[material]}" alt="">
                    <label for="itemPrice${materialIdx}"><b>${material}</b> price:</label>
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
            return;
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

    nextStep('#select-prices-container')
}