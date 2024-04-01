/// <reference path = "../types/app.d.ts" />
/// <reference path = "../types/widget-operation.d.ts" />
import { Record } from "./lib/logger";
import { WidgetNotFoundException } from "./lib/exception";

export function operate() {
    const result: boolean = launchApp("随行办公");
    if (result == true) {
        Record.debug("成功打开随行办公");
    } else {
        throw new WidgetNotFoundException(
            '无法在你的设备上找到随行办公，或无法正常启动'
        );
    }

    while (!click("工作台"));
    while (!click("移动考勤"));
    while (!click("点击打卡"));

}