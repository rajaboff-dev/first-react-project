import { API } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const DashboardPage = () => {
  const { register, handleSubmit } = useForm();
  console.log(register);
  const onSubmit = (data, e) => {
    e.preventDefault()
    API.post("/products", {
      product_name: data.product_name,
      product_price: data.product_price,
      product_images: data.product_images.split(","),
    });
  };
  return (
    <div className="px-5 py-3">
      <h1 className="text-2xl font-semibold">Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("product_name")} placeholder="Product name" />
        <input
          {...register("product_price")}
          type="number"
          placeholder="Product price"
        />
        <input
          {...register("product_images")}
          type="text"
          placeholder="Paste here your product images links"
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default DashboardPage;
