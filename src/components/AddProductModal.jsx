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

export default function AddProductModal({ handleAddProduct }) {
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleSubmit = () => {
    handleAddProduct(product);
    setProduct({
      image: "",
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          asChild
          className="flex items-center justify-center my-10"
        >
          <Button variant="outline" className='mx-auto'>Add Product</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="product-img">Product Image Link</Label>
              <Input
                id="product-img"
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="product-title">Product Title</Label>
              <Input
                id="product-title"
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                placeholder="Enter here your product title"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Label htmlFor="product-description">Product Description</Label>
              <Input
                id="product-description"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Enter here your product description"
              />
            </div>
            <DialogClose asChild>
              <Button
                size="sm"
                className="px-3"
                onClick={handleSubmit}
              >
                Add Product
              </Button>
            </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
