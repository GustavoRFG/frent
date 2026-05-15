import Image from "next/image";

import type { ProductImage } from "../config/products";

type ProductVisualProps = {
  image: ProductImage;
  gallery?: ProductImage[];
};

export function ProductVisual({ image, gallery = [] }: ProductVisualProps) {
  const [firstDetail] = gallery;

  return (
    <div className="productVisual" aria-label="Fotos reais do produto em destaque">
      <figure className="productPhoto productPhoto--main">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
          sizes="(max-width: 980px) 88vw, 42vw"
        />
      </figure>

      {firstDetail ? (
        <figure className="productPhoto productPhoto--detail">
          <Image
            src={firstDetail.src}
            alt={firstDetail.alt}
            width={firstDetail.width}
            height={firstDetail.height}
            sizes="(max-width: 980px) 38vw, 190px"
          />
        </figure>
      ) : null}
    </div>
  );
}
