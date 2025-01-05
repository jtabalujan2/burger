import { getPlaiceholder } from "plaiceholder";

export const getBlurImage = async (src: string) => {
  const data = await fetch(src);
  const buffer = await Buffer.from(await data.arrayBuffer());
  const blurredImage = await getPlaiceholder(buffer);

  return blurredImage;
};
