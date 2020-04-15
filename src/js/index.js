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
        case "#crafting-steps-container":
            populateCraftingSteps();
            break;
        default:
            throw new Error();
    }

    $(nextStep).show();
}

// Global Variables
const stepList = [ '#select-items-container', '#select-prices-container', '#crafting-steps-container' ];
let itemsToCraft = {};
let priceList = defaultPrices;

