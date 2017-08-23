describe('store component', function() {
  
  const sevenEleven = '7-eleven';
  let store;
  /* mock the dependencies for this component*/
  let mockConfig = {store: "https://s3-us-west-1.amazonaws.com/wizdraw-test/store",};
  let $componentController;
  let component;

  /*$componentController create the instance of component*/
  function createComponent(bindings) {
    ///$componentController('compoenent name',{ decencies injection}, bindings)
    return $componentController('wdStore', {configApi:mockConfig}, bindings);
  }
  
  /*get the angular module we want to test*/
  beforeEach(module( 'wdStore' ));

  /*inject for every test the component*/
  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
  }));

  describe('$onInit ',()=>{

    /* for eveery test make the on init life sycle*/
    beforeEach(()=>{
      component = createComponent({store: sevenEleven, prop2: 0});
      component.$onInit();
    });

    it('component.prop2 should be 0',()=>{
      expect(component.prop2).toBe(0);
    });

    it('component.name should be replace - and lower case',()=>{
      expect(component.name).toBe(sevenEleven.replace('-', ' ').toLowerCase());
    });

    it('component.src should be the configuration and replace - and lower case',()=>{
      expect(component.src).toBe(`${mockConfig.store}/${sevenEleven.replace('-', '').toLowerCase()}.png`);
    });

    it('component.data should be lower case',()=>{
      expect(component.data).toBe(sevenEleven.toLowerCase());
    });
  });

});
