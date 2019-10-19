import UrlConstant from '../common/constant/common-url';
import { baseServerAxios } from '../service/axios-provider';
import CommonUtils from '../common/utils/common-utils';

export default {
  getAllImage(callback, errorCallback) {
    CommonUtils.requestAxios(
      baseServerAxios.get(UrlConstant.api.image.GET_IMAGES),
      callback,
      errorCallback
    );
  }
};
