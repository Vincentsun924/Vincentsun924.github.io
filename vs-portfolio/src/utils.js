//will allow us to use the images in the Assets folder 

//so essentially taking the base of our porfolio url and 
// and returning the href reference of the picture we want to use in that so it is easier to import pictures where we want

export const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};