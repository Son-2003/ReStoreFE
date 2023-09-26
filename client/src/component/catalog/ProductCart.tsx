import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Product } from "../../app/models/product";
import { NavLink } from "react-router-dom";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/utils/util";

interface ProductCartProps {
  product: Product;
}

const ProductCart: FC<ProductCartProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { setBasket } = useStoreContext();

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          height: "100%",
          alignItems: "flex-end",
        }}
        key={product.id}
      >
        <CardMedia
          sx={{
            height: 150,
            backgroundSize: "contain",
            backgroundColor: "#3f51b5",
          }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} - {currencyFormat(product.price)}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
            size="small"
            loading={loading}
            onClick={() => handleAddItem(product.id)}
          >
            Add To Cart
          </LoadingButton>
          <Button
            component={NavLink}
            to={`/catalog/${product.id}`}
            size="small"
          >
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCart;
