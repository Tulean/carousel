## Getting Started

This is a simple app with a headless carousel component using react-slick. Carousel component is headless; therefore, it is UI independent and it is up to the developer to fully customize the UI part of the component.

### Installation

To get you started, you only need to install npm packages.

1. Install NPM packages
   ```sh
   yarn install
   ```

## Usage

Carousel is using react-slick and it's settings, please visit react-slick [docs](https://react-slick.neostack.com) for more information.

```jsx
import { Carousel } from "../components/Carousel";

// More on settings: https://react-slick.neostack.com/docs/api
const settings = {
  infinite: true,
  swipeToSlide: true,
  speed: 300,
  centerPadding: "0px",
  centerMode: true,
  arrows: true,
  dots: true,
  draggable: true,
}

// Children are fully customizable
function HomePage({children}) {
  return <Carousel settings={...settings}>{children}</Carousel>;
}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
