import React, {useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import EditProductModal from "@/components/EditProductModal";

const ProductCard = ({ product, handleDeleteProduct, handleEditProduct }) => {
  return (
    <Card className='w-72'>
      <CardHeader>
        <img src={product.image} alt="" className="h-56 object-cover" />
      </CardHeader>
      <CardContent>
        <CardTitle className='line-clamp-1'>{product.title}</CardTitle>
        <CardDescription className='line-clamp-3'>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className='flex gap-2 items-center'>
        <EditProductModal product={product} handleEditProduct={handleEditProduct} />
        <Button className='w-full' variant='destructive' onClick={() => {
          handleDeleteProduct(product.id)
        }}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
