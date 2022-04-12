import * as number from "./lib/number.js";

export default function init(classProto) {
    for (const key in number) {
        classProto[key] = number[key];
    }
}
