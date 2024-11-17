import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function EditProductModal({ product, handleEditProduct }) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleEdit = (e) => {
    e.preventDefault();
    handleEditProduct(editedProduct);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col items-center" onSubmit={handleEdit}>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="product-img">Product Image Link</Label>
            <Input
              id="product-img"
              value={editedProduct.image}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, image: e.target.value })
              }
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="product-title">Product Title</Label>
            <Input
              id="product-title"
              value={editedProduct.title}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, title: e.target.value })
              }
              placeholder="Enter here your product title"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="product-description">Product Description</Label>
            <Input
              id="product-description"
              value={editedProduct.description}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  description: e.target.value,
                })
              }
              placeholder="Enter here your product description"
            />
          </div>
          <DialogClose asChild>
            <Button type="submit" size="sm" className="px-3">
              Edit Product
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
