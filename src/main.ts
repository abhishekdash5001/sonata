import { factory } from "./factory";
import {functionReturn} from './types/FactoryType'
let stepControlVar: number = 1;
let startControlVar: number = 0;
let count = factory(startControlVar, stepControlVar);

/**
 * @description calls when user changes any of the input feild
 * @param value String value that is set in the counter 
 */
function update_count_and_reset_counter(count:functionReturn) {
    current_count.innerText = count().toString();
}

/**
 * <input name="start_at" value="0" id="start_at" type="number"/> input element
 */
const start_at_control = document.getElementById(
    "start_at",
) as HTMLInputElement;

/**
 * <input name="step" value="1" id="step" type="number"/>
 */
const step_control = document.getElementById("step") as HTMLInputElement;


/**
 *on chnage event when start is changed 
 */
start_at_control?.addEventListener("change", (e: Event) => {
    /**
     * Captures the value of the target
     * creates new instance of factory
     */
    const startTarget = e.target as HTMLInputElement;
    startControlVar = parseInt(startTarget.value);
    count = factory(startControlVar, stepControlVar);


});

step_control?.addEventListener("change", (e: Event) => {
    /**
     * Captures the value of the target
     * creates new instance of factory
     */
    const stepTarget = e.target as HTMLInputElement;
    stepControlVar = parseInt(stepTarget.value);
    count = factory(startControlVar, parseInt(stepTarget.value));

});

const count_button = document.querySelector(
    ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
    ".current_count",
) as HTMLSpanElement;

function update_count() {

    update_count_and_reset_counter(count)


}

count_button.addEventListener("click", update_count);
