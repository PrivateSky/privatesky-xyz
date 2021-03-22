const { WebcController } = WebCardinal.controllers;

export default class BindingExampleController extends WebcController {
    initializeModel = (_) => ({
        buttonText: "Button",
        hello: "Hello world!",
    });

    constructor(element, history) {
        super(element, history);

        this.setModel(this.initializeModel());
    }
}
