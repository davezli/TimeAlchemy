function loadItems() {
    const recipeOptions = Object.keys(recipes);
    recipeOptions.sort();
    const recipeOptionsHtml = recipeOptions.reduce((accumulator, current) =>
        accumulator += `<option>${current}</option>`, '');

    for (let i = 1; i < 7; i++) {
        $('#select-items-form-options').append(`
                    <div class="form-row">
                        <div class="form-group col-md-7">
                            <label for="itemName${i}">Item ${i}</label>
                            <select id="itemName${i}" class="form-control">
                                <option selected>Choose...</option>
                                ${recipeOptionsHtml}
                            </select>
                            <div class="invalid-feedback">
                            Please select at least one item.
                            </div>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="itemQuantity${i}">Quantity for Item ${i}</label>
                            <input type="number" class="form-control" id="itemQuantity${i}">
                            <div class="invalid-feedback">
                            Enter a number greater than 0.
                            </div>
                        </div>
                    </div>
                    `
        );
    }

    $("#selected-items-container").hide();
}

function finishSelectItems() {
    let validationError = false;

    const desiredItems = {};

    for (let i = 1; i < 7; i++) {
        const selected = $(`#itemName${i} option:selected`).text();

        if (selected !== "Choose...") {
            const quantity = parseInt($(`#itemQuantity${i}`).val());
            if (!(quantity > 0)) {
                $(`#itemQuantity${i}`).addClass("is-invalid");
                validationError = true;
            } else {
                $(`#itemQuantity${i}`).removeClass("is-invalid");
            }
            desiredItems[selected] = quantity + (desiredItems[selected] || 0);
        }
    }

    if (Object.keys(desiredItems).length === 0) {
        validationError = true;
        $(`#itemName1`).addClass("is-invalid");
    } else {
        $(`#itemName1`).removeClass("is-invalid");
    }

    if (validationError) {
        return;
    }

    itemsToCraft = desiredItems;
    nextStep('#select-items-container')

    const selectList = $('#select-list');

    while(selectList.firstChild) {
        selectList.firstChild.remove();
    }

    Object.keys(itemsToCraft).forEach(item => {
        const quantity = itemsToCraft[item];
        selectList.append(`
            <button type="button" class="list-group-item list-group-item-action" onclick="toggleStrikethrough()">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${quantity.toLocaleString()} ${item}</h5>
                </div>
            </a>`
        );
    });
    $('#selected-items-container').show();
}