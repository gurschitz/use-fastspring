# 💲 React hook for loading and initializing the FastSpring store builder library.

This Hook lets you easily load the FastSpring store builder library when needed and use it directly in your code. Check out the official FastSpring documentation on the store builder library here:http://docs.fastspring.com/integrating-with-fastspring/store-builder-library

## Usage

__`useFastspring` requires you to depend on React 16.7.0-alpha.0 or later. For more information on React Hooks, check out [official documentation](https://reactjs.org/docs/hooks-intro.html).__

```js
function Component() {
  const { loaded, fastspring } = useFastspring({
    accessKey: 'XXXXXXXXXXXXXXXXX-XXX',
    storefront: 'your-storefront.onfastspring.com/popup-events-v1',
        
    // optional
    onPopupClose: (orderReference) = {
      // do something
    }, 
    sdkUrl: 'https://d1f8f9xcsvx3ha.cloudfront.net/sbl/0.7.6/fastspring-builder.min.js' // this is the default value
  })
  
  ...

}
```