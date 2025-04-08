/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/frequency` | `/frequency`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/schedule` | `/schedule`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/frequency` | `/frequency`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/schedule` | `/schedule`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(student)'}${'/(tabs)'}/frequency${`?${string}` | `#${string}` | ''}` | `/frequency${`?${string}` | `#${string}` | ''}` | `${'/(student)'}${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(student)'}${'/(tabs)'}/schedule${`?${string}` | `#${string}` | ''}` | `/schedule${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/frequency` | `/frequency`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(student)'}${'/(tabs)'}/schedule` | `/schedule`; params?: Router.UnknownInputParams; };
    }
  }
}
