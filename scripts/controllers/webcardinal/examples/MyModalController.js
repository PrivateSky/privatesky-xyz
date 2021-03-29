const { WebcController } = WebCardinal.controllers;

class MyModalController extends WebcController {
    initializeModel = () => ({
        complex: 'more complex',
        example: 'Form example',
        input: {
            fullName: {
                type: 'text',
                placeholder: 'Full name'
            },
            email: {
                type: 'email',
                placeholder: 'Email'
            },
            password: {
                type: 'password',
                placeholder: 'Password'
            }
        }
    });

    constructor(element, history) {
        super(element, history);
        this.setModel(this.initializeModel());
    }
}

export default MyModalController;