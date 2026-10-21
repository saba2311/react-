import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RBCards() {
  const products = [
    {
      title: "Bluetooth Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description:
        "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen ENC Mic, Type-C Fast Charging, Bluetooth 5.4, AUX Option, 60ms Low Latency.",
      price: "₹1,399",
      oldPrice: "₹2,999",
    },
    {
      title: "The Ear Gaming Headphone",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      description:
        "Newly Launched BTG Thunder Over The Ear Gaming Headphone with 70H Playtime, 40mm Titanium Drivers, Dual Pairing Headset, Gaming Mode, RGB LEDs, Detachable Mic.",
      price: "₹1,499",
      oldPrice: "₹3,999",
    },
    {
      title: "boAt Rockerz 4550",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      description:
        "boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones.",
      price: "₹1,399",
      oldPrice: "₹2,999",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Cards</h1>

      <div className="cards-container">
        {products.map((product, index) => (
          <Card
            className="product-card"
            key={index}
          >
            <Card.Header className="product-title">{product.title}</Card.Header>

            <Card.Img
              variant="top"
              src={product.image}
              className="product-image"
            />

            <Card.Body>
              <Card.Text className="product-description">
                {product.description}
              </Card.Text>

              <div className="product-price">
                <span className="current-price">{product.price}</span>

                <span className="old-price">{product.oldPrice}</span>
              </div>
            </Card.Body>

            <Card.Footer className="product-footer">
              <Button
                variant="outline-primary"
                size="xl"
              >
                Add To Cart
              </Button>

              <Button
                variant="primary"
                size="xl"
              >
                Buy Now
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RBCards;