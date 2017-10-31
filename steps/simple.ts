import { defineSupportCode } from 'cucumber';

defineSupportCode(({Given}) => {

    Given(/^Print "(.*?)"$/, (val:string ) => {
         console.log(val);
      });
    
  })