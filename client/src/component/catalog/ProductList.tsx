import { FC } from "react";
import { Product } from "../../app/models/product";
import { Grid } from "@mui/material";
import ProductCart from "./ProductCart";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={4}>
            <ProductCart product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
