import { Controller } from '../entities';

export default class DefaultCtrl extends Controller {
  constructor() {
    super(...arguments);
    
    this.$ionicLoading.show({
      template: 'Loading...'
    });
    var defaulturl = this.$global.defaulturl;
    
    window.setTimeout(function () {
      window.location.href = defaulturl;
    }, 6000);
  }
}

DefaultCtrl.$inject = ['$scope', '$state', '$log', '$ionicLoading', '$global'];