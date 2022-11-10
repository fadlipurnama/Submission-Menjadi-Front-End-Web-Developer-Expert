const createLoadingSpinerTemplate = () => `
        <div class="loading-spinner__container">
           <div class="loading-spinner"></div>
        </div>`;

const createSecondLoadingTemplate = () => `
        <div class="loading-second__container">
            <div class="loading-outer">
                <div class="loading-inner"></div>
            </div>
        </div>`;

export { createLoadingSpinerTemplate, createSecondLoadingTemplate };
