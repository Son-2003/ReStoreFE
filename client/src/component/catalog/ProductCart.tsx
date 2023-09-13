import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Product } from "../../app/models/product";
import { NavLink } from "react-router-dom";

interface ProductCartProps {
  product: Product;
}

const ProductCart: FC<ProductCartProps> = ({ product }) => {
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
            {product.brand} - {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button
            component={NavLink}
            to={`/catalog/${product.id}`}
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCart;
