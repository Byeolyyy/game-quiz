// 引用 iOS 原生平台 api
import { UIDevice } from "UIKit";

import { GetBatteryInfo, GetBatteryInfoSuccess, GetBatteryInfoResult, GetBatteryInfoSync } from '../interface.uts';

/**
 * 异步获取电量
 */
export const getBatteryInfo : GetBatteryInfo = function (options) {
  // 开启电量检测
  UIDevice.current.isBatteryMonitoringEnabled = true

  // 返回数据
  const res : GetBatteryInfoSuccess = {
    errMsg: "getBatteryInfo:ok",
    level: Math.abs(Number(UIDevice.current.batteryLevel * 100)),
    isCharging: UIDevice.current.batteryState == UIDevice.BatteryState.charging,
  };
  options.success?.(res);
  options.complete?.(res);
}

/**
 * 同步获取电量
 */
export const getBatteryInfoSync : GetBatteryInfoSync = function () : GetBatteryInfoResult {
  // 开启电量检测
  UIDevice.current.isBatteryMonitoringEnabled = true

  // 返回数据
  const res : GetBatteryInfoResult = {
    level: Math.abs(Number(UIDevice.current.batteryLevel * 100)),
    isCharging: UIDevice.current.batteryState == UIDevice.BatteryState.charging,
  };
  return res;
}
