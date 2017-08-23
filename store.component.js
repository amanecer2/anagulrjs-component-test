/**
 * Wic suppliers store
 * @description show wic store that user can pay to them
 * @example <wd-store store="store" on-update="$ctrl.setPaymentAgency(data)" ></wd-store>
 * @store => 7-eleven/circle-k
 *
 */
(function () {
  'use strict';

  class StoreComponent {

    /* add component dependencies*/
    constructor(configApi) {
      this.configApi = configApi;
    }

    /*on init life sycle*/
    $onInit() {
      this.name = this.store.replace('-', ' ').toLowerCase();
      this.src  = `${this.configApi.store}/${this.store.replace('-', '').toLowerCase()}.png`;
      this.data = this.store.toLowerCase();
    }
    /*on change life sycle for one wat data bindings*/
    $onChanges(change){}

    onClick(name){
      this.onUpdate({data: this.data});
    }
  }

  angular.module('wdStore', [])
    .component('wdStore', {
      template: `
      <div class="item list-width-90"  ng-click="$ctrl.onClick($ctrl.src)">
            <div class="col-30">
                <img  ng-src="{{$ctrl.src}}">
            </div>
          <div class="col-70 agency">
              {{$ctrl.name}}
          </div>
            <i class="ion-chevron-right color-blue-main"></i>
        </div>
      `,
      controller: ['configApi', StoreComponent], /// the quotes are the dependencies
      bindings: {
        store: '<', // one way binding
        onUpdate: '&' //pass referance function from parent component = emit to parent
      }
    });

}());
