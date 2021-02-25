import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const TAB_MIN_VALUE = 0;
const TAB_MAX_VALUE = 4;

export default class PskTabNavigatorController extends ContainerController {
    constructor(element) {
        super(element);

        this.model = this.setModel({
            tabNavigator: {
                selected: 2,
                tabNavigationDisabled: true
            }
        });

        this.on('prev', (event) => {
            let currentIndexSelected = this.model.tabNavigator.selected;
            if (currentIndexSelected > TAB_MIN_VALUE) {
                this.model.tabNavigator.selected = currentIndexSelected - 1;
            }
        });

        this.on('next', (event) => {
            let currentIndexSelected = this.model.tabNavigator.selected;
            if (currentIndexSelected < TAB_MAX_VALUE) {
                this.model.tabNavigator.selected = currentIndexSelected + 1;
            }
        });
    }
}
