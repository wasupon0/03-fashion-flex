"use client";
import { ProductProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef } from "react";
import CustomButton from "./CustomButton";

interface ProductDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductProps;
}

const ProductDetails = ({
  isOpen,
  closeModal,
  product,
}: ProductDetailsProps) => {
  const blurDataURL = "/blur_product.png";

  const isImgValid = useRef(true);

  const urlRegex =
    /https:\/\/(?:i.imgur.com|placeimg.com|api.escuelajs.co)\/[a-zA-Z0-9/]+(?:\.jpeg|\.jpg|\.png)?/g;

  const imagesURLArray = product.images
    .map((item) => {
      const match = item.match(urlRegex);
      return match ? match[0] : null;
    })
    .filter((url) => url !== null);

  product.images.forEach((url) => {
    if (
      url.includes("placeimg") ||
      url.includes("example") ||
      url.includes("google") ||
      url.includes("unsplash") ||
      url.includes("images.pexels") ||
      url === "" ||
      url === null ||
      url === undefined
    ) {
      isImgValid.current = false;
    } else {
      isImgValid.current = true;
    }
  });

  const substrings = ["placeimg", "example", "google", "images.pexels"];

  function categoryImage() {
    return substrings.some((substring) =>
      product.category.image.includes(substring)
    )
      ? "/image-not-available.png"
      : product.category.image;
  }

  const clickBuy = () => {
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-purple-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      {isImgValid.current ? (
                        <Image
                          src={imagesURLArray[0]}
                          alt="product image"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          className="object-contain"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      ) : (
                        <Image
                          src={categoryImage()}
                          alt="category image"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          className="object-contain"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      )}
                    </div>

                    <div className="flex gap-3 ">
                      <div className="flex-1 relative w-full h-24 bg-primary-purple-100 rounded-lg">
                        {isImgValid.current ? (
                          <Image
                            src={
                              imagesURLArray[0 + 1]
                                ? imagesURLArray[0 + 1]
                                : imagesURLArray[0]
                            }
                            alt="product image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        ) : (
                          <Image
                            src={categoryImage()}
                            alt="category image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        )}
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-purple-100 rounded-lg">
                        {isImgValid.current ? (
                          <Image
                            src={
                              imagesURLArray[0 + 2]
                                ? imagesURLArray[0 + 2]
                                : imagesURLArray[0]
                            }
                            alt="product image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        ) : (
                          <Image
                            src={categoryImage()}
                            alt="category image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-contain"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="font-semibold text-xl capitalize flex justify-between">
                      {product.title}{" "}
                      <span className="text-[22px] font-extrabold">
                        <span className="text-xs align-top font-semibold">
                          $
                        </span>

                        {product.price}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {product.description}
                    </div>

                    <CustomButton
                      title="Buy"
                      containerStyles="bg-primary-purple text-white rounded-full mt-10 "
                      handleClick={clickBuy}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProductDetails;
