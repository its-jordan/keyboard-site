export default function componentData() {
  let keyswitches = [
    ['Cherry MX', 'Red', '5.00'],
    ['Cherry MX', 'Blue', '5.00'],
    ['Cherry MX', 'Brown', '5.00'],
    ['Cherry MX', 'Speed Silver', '5.00'],
  ];
  return (
    <>
      {keyswitches.map((brand, color, price) => {
        return (
          <option>
            {brand} {color} {price}
          </option>
        );
      })}
    </>
  );
}
