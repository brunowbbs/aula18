import { fireEvent, render, screen } from "@testing-library/react";
import ItemList from ".";

const product = {
  id: 1,
  name: "Mouse Sem Fio 2.4 MO251",
  price: "R$ 24,99",
  brand: "Multilaser",
  image: "https://m.media-amazon.com/images/I/615iBXULp8L._AC_SL1000_.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio leo, dictum nec sem nec, laoreet pretium sem. Maecenas ut tortor vel mi faucibus sagittis. Phasellus in molestie turpis, hendrerit ultrices magna. Etiam at interdum risus, quis porta enim. Sed vehicula nibh quis consequat posuere. Quisque viverra efficitur dapibus. Sed imperdiet blandit tellus, non malesuada ipsum egestas at. Integer condimentum risus vel nulla elementum, a tincidunt nulla dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat maximus tempor. Suspendisse nec convallis purus. Suspendisse tristique ligula a ipsum pulvinar euismod. Maecenas aliquam nisi sollicitudin mi cursus, vitae volutpat metus aliquam. Praesent velit mi, efficitur sed luctus ut, facilisis at velit. Fusce malesuada porta ullamcorper. Mauris id imperdiet velit. Ut non justo at justo facilisis dapibus sed a nunc. Nullam nisl lorem, rutrum quis efficitur efficitur, rhoncus nec sem.",
};

describe("<ItemList/>", () => {
  it("Should render correctly component", () => {
    render(<ItemList product={product} />);

    expect(screen.getByAltText("Mouse Sem Fio 2.4 MO251")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Mouse Sem Fio 2.4 MO251/i })
    ).toBeInTheDocument();

    expect(screen.getByText("R$ 24,99")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Ver detalhes/i })
    ).toBeInTheDocument();
  });

  it("Should click the button", () => {
    const onClick = jest.fn();
    render(<ItemList product={product} onClick={onClick} />);
    fireEvent.click(screen.getByText(/Ver detalhes/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
