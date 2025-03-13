import { Report, ReportOptions, ReportSuccess, ReportErrorCode } from './interface.uts'
import { ReportFailImpl } from "./unierror.uts"
import { Stat } from './common/core/stat.uts'
const stat = Stat.getInstance()


export const report : Report = function (options : ReportOptions) {
	const name = options.name
	const option = options.options
	stat.appEvent(name, option, (type : boolean, code : ReportErrorCode) => {
		if (type) {
			const res : ReportSuccess = {
				errMsg: 'report:ok',
			}
			options.success?.(res)
			options.complete?.(res)
		} else {
			let err = new ReportFailImpl(code);
			options.fail?.(err)
			options.complete?.(err)
		}
	})
}

export { Stat } from './common/core/stat.uts'
// --- 导出统计类型 ---
export { UniStatOptions, UniStatCollectItemsOptions, ReportFail } from './interface.uts'
