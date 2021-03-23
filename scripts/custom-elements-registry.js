customElements.define('my-custom-header', class _ extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<webc-container controller="webcardinal/examples/MyCustomHeaderController">
                <webc-template template="my-custom-header" data-model="@" disable-container></webc-template>
            </webc-container>`
    }
});