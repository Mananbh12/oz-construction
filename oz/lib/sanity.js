import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'l5be0f11', 
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'skDmtpAhYK34i2cLtbun9VbS8iEGXz2noUqUm6a5h2iY4eiOuqYrsqWsJJEOXrdqojZ9WnG7F4B67GE25RcmJ4MvdNZFryxhL960RRpnWJzjWMLP7Pgo2L1IFTJ1HmCx9uEMsuynVEjwBibGPuobg9Xolb2JQse8AH9sheh67h0oPo9rYRjc', 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}