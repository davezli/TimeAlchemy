// Common Functions
function nextStep(currentStepId) {
    $('.wizard').hide();

    const nextStep = stepList[stepList.indexOf(currentStepId)+1];
    switch(nextStep) {
        case "#select-items-container":
            loadItems();
            break;
        case '#select-prices-container':
            loadPrices();
            break;
        case '#select-inventory-container':
            loadInventory();
            break;
        case "#crafting-steps-container":
            populateCraftingSteps();
            break;
        default:
            throw new Error();
    }

    $(nextStep).show();
}

function prevStep(currentStepId) {
    $('.wizard').hide();

    const prevStep = stepList[stepList.indexOf(currentStepId)-1];
    switch(prevStep) {
        case "#select-items-container":
            $('#selected-items-container').hide()
            break;
        case '#select-prices-container':
            break;
        case '#select-inventory-container':
            break;
        case "#crafting-steps-container":
            break;
        default:
            throw new Error();
    }

    $(prevStep).show();
}

// Global Variables
const stepList = [ '#select-items-container', '#select-prices-container', '#select-inventory-container', '#crafting-steps-container' ];
let itemsToCraft = {};
let priceList = defaultPrices;
let inventory = {};

