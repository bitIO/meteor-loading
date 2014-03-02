# Meteor Loading

##Description
A really simple loading overlay. It consits of three files

- **html**: contains a template named `loading` you can include. The spinner will be created using the `onRendered` of the template.
- **css**:
- **js**: It defines an object `LoadingOverlay` having three methods and the default properties for the spinner.
  - `createLoadingOverlay (target, overlayColor)`: creates a new overlay (removing the existing ones - using this css selector: `#loading` and appends the created one (with the defined backgorund overlayColor) to the specified target (css selector for jQuery). The overlay will have a centered spinner.
  - `destroyLoadingOverlay (selector)`: removes all the exisiting overlays with the provided selector or `#loading` as default selector.
  - `createNewSpinner (selector, spinnerOpts)`: returns a new Spin.js object using `selector` to be the ID - not a css selector - of the object holding the spinner. `spinnerOpts` are the options used to create the Spin.js object. If not defined, `spinnerJsDefaultOpts` will be used.
  - `spinnerJsDefaultOpts`: These are the Spin.js default attributes. You can override to create the spinner as you wish.
  <pre>{
      lines     : 11,         // The number of lines to draw
      length    : 15,         // The length of each line
      width     : 15,         // The line thickness
      radius    : 10,         // The radius of the inner circle
      corners   : 1,          // Corner roundness (0..1)
      rotate    : 0,          // The rotation offset
      direction : 1,          // 1: clockwise, -1: counterclockwise
      color     : '#fff',     // #rgb or #rrggbb or array of colors
      speed     : 2,          // Rounds per second
      trail     : 50,         // Afterglow percentage
      shadow    : true,       // Whether to render a shadow
      hwaccel   : false,      // Whether to use hardware acceleration
      className : 'spinner',  // The CSS class to assign to the spinner
      zIndex    : 2e9,        // The z-index (defaults to 2000000000)
      top       : 'auto',     // Top position relative to parent in px
      left      : 'auto'      // Left position relative to parent in px
};</pre>

The library (Spin.js)[http://fgnass.github.io/spin.js/] comes bundled - Version 1.3.3 (24.12.2013)

##Requirements
The only requirement is the jquery package, defined as `api.use` in the `package.js`.