"use client"

import Image from "next/image";
import React from "react";

function createRows() {
  const rows = [];

  for (let i = 1; i <= 50; i++) {
    rows.push({
      id: i,
      name: `Product ${i}`,
      price: 12 + Math.round(Math.random() * 23),
      image: [
        "Burger",
        "cake",
        "Coffee",
        "Cold drink",
        "Pizza",
        "Samosa",
        "tea",
      ][Math.round(Math.random() * 6)],
      type: ["Fastfood", "Fastfood"][
        Math.round(Math.random() * 1)
      ],
    });
  }

  return rows;
}

export default function Product() {
  const products = createRows();
  const [displayPosts, setDisplayPosts] = React.useState(8);

  const loadMore = () => {
    setDisplayPosts(displayPosts + 4)
  }
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-2xl px-4 py-6 lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(0, displayPosts).map((item) => {
            return (
              <div className="group relative max-w-80 w-full sm:max-w-full mx-auto" key={item.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div className="relative h-full w-full object-cover object-center lg:h-full lg:w-full aspect-square">
                  <Image
                    src={`/img/${item.image}.png`}
                    fill
                    alt="Front of men&#039;s Basic Tee in black."
                    className=""
                    />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-gray-200">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {item.image.charAt(0).toUpperCase() + item.image.slice(1)}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm dark:text-gray-400 text-gray-500">{item.type}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pt-5">
        {displayPosts < products.length ? ( 
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit dark:hover:bg-primary-800" onClick={loadMore}>Load More</button>
      ) : null}
        </div>
      </div>
    </div>
  );
}
