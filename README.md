# react-alert-toast

> Create Beautiful toast alerts.

[![NPM Version][npm-image]][npm-url]

Create beautiful alert toast with single line of code. The toast can be customized by various available options.

Want to style the toast with your own styling?

It supports that as well, pass your style object and customize with your own creativity.

![](https://user-images.githubusercontent.com/35258289/71170189-a48bb900-2280-11ea-8725-2268b4f026c0.png)

## Installation

Npm:

```sh
npm install react-alert-toast --save
```

## Usage example

Import Toast and use it directly:

```
import React from "react";
import Toast from "react-alert-toast";

function App() {
  return (
    <div className="App">
      <Toast message="Some Error Message" />
    </div>
  );
}

export default App;

```

The Toast component accepts the following props :

- message : Any string or number accepted, the actual message that you want on the toast.

- type

  ```
   import {types} from react-alert-toast
  ```

  - <strong>types.ERROR</strong>
    ![react-alert-toast error](https://user-images.githubusercontent.com/35258289/71170192-a5244f80-2280-11ea-9586-00032c2241ea.png)
  - <strong>types.SUCCESS</strong>
    ![react-alert-toast success](https://user-images.githubusercontent.com/35258289/71170195-a5bce600-2280-11ea-87d3-f2064582d5a9.png)
  - <strong>types.INFO</strong>
    ![react-alert-toast info](https://user-images.githubusercontent.com/35258289/71170194-a5bce600-2280-11ea-946b-9bdfb5bf82e0.png)
  - <strong>types.CUSTOM</strong>
    ![react-alert-toast custom 1](https://user-images.githubusercontent.com/35258289/71170190-a48bb900-2280-11ea-9868-1b61b25f514e.png)
    ![react-alert-toast custom 2](https://user-images.githubusercontent.com/35258289/71170191-a5244f80-2280-11ea-8708-f790ddeb6ab9.png)

- closeButton

  - true
  - false

- position

  ```
    import {positions} from react-alert-toast
  ```

  - positions.TOP_LEFT
  - positions.TOP_CENTER
  - positions.TOP_RIGHT
  - positions.MIDDLE_LEFT
  - positions.MIDDLE_CENTER
  - positions.MIDDLE_RIGHT
  - positions.BOTTOM_LEFT
  - positions.BOTTOM_CENTER
  - positions.BOTTOM_RIGHT

- animation

  ```
    import {animations} from react-alert-toast
  ```

  - animations.FADE

  {MORE ANIMATIONS COMMING SOON}

- timeout : Time in milliseconds after which the toast will disappear.

- delayBeforeLoad : Accept number time in milliseconds to wait before showing toast.

- icon : Accept any String type path to the image and use it as toast icon.

Prop-types is used to check if valid prop types are passed to the component.

The prop types accepted are:

- type: PropTypes.oneOf([types.ERROR, types.SUCCESS, types.INFO, types.CUSTOM]),
- position: PropTypes.oneOf(positions.TOP_LEFT, positions.TOP_CENTER, positions.TOP_RIGHT, positions.MIDDLE_LEFT, positions.MIDDLE_CENTER, positions.MIDDLE_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_CENTER, positions.BOTTOM_RIGHT),
- animation: PropTypes.oneOf([animations.FADE])),
- icon: PropTypes.string,
- timeout: PropTypes.number,
- delayBeforeLoad: PropTypes.number,
- style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
- message: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
- closeButton: PropTypes.bool

By default the props are set to :

- delayBeforeLoad : 500 (in milliseconds)
- type : types.CUSTOM
- position : positions.BOTTOM_LEFT
- closeButton : false

Full Example with all features implemented :

```
import React from "react";
import logo from "./logo.svg";
import Toast, { types, positions, animations } from "react-alert-toast";

function App() {
  return (
    <div className="App">
      <Toast
        message="Some Error Message"
        type={types.ERROR}
        position={positions.TOP_LEFT}
        icon={logo}
        animation={animations.FADE}
        delayBeforeLoad={2000}
        closeButton={true}
        style={{border: '3px solid #eee'}}
      />
    </div>
  );
}

export default App;
```

_For more examples and usage, please refer to the [Wiki][wiki]._

## Release History

- 1.0.0
  - Package is born.

## Known Issues

Some of the issues that are already known and I am working to fix them.

- Overlapping of Toast.
- Close button goes above the content or mixes with the content.

## Meta

Digvijay Singh – [@ceodigvijay](https://twitter.com/ceodigvijay) – digvijayrn786@example.com

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/ceodigvijay/react-alert-toast](https://github.com/ceodigvijay/react-alert-toast)

## Contributing

1. Fork it (<https://github.com/ceodigvijay/react-alert-toast/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/react-alert-toast
[npm-url]: https://npmjs.org/package/react-alert-toast
[wiki]: https://github.com/ceodigvijay/react-alert-toast/wiki
