import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            footer: [
                {
                    name: 'Home', icon: 'home',
                    page: 'mobile/home'
                },
                {
                    name: 'Tasks', icon: 'tasks',
                    page: 'mobile/tasks'
                },
                {
                    name: 'History', icon: 'history',
                    page: 'mobile/history'
                },
                {
                    name: 'Settings', icon: 'cog',
                    page: 'mobile/settings'
                }
            ],
            options: [
                {
                    name: 'About',
                    page: 'about'
                },
                {
                    name: 'Glossary',
                    page: 'glossary'
                }
            ],
            sidebar: [
                {
                    name: 'Github',
                },
                {
                    name: 'Android'
                },
                {
                    name: 'iOS'
                }
            ]
        }
    }

    constructor(element) {
        super(element);

        this.model = this.setModel(this.getModel());

        this.on("needMenuItems", e => {
            e.stopImmediatePropagation();
            const callback = e.detail;
            callback(null, this.model.sidebar);
        });

        this.on("toggleSidebar", e => {
            e.stopImmediatePropagation();
            document.dispatchEvent(new Event('psk-mobile:toggle-sidebar'));
        });

        this.on("showOptions", e => {
            e.stopImmediatePropagation();
            document.dispatchEvent(new CustomEvent('psk-mobile:toggle-options', { detail: true }))
        });
    }
}

export default MobileController;