import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn :'root',
  factory:()=>{
  return typeof window !== 'undefined' ? window.localStorage : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {}
      };
  },
});
