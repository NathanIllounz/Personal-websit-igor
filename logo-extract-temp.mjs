// One-off: extract the IG emblem from logo.jpeg with transparent background.
// Dark line-art on white → alpha = inverted luminance; recolor per variant.
import sharp from 'sharp';

// emblem region in the 1254x1254 logo (mark only, no wordmark below)
const REGION = { left: 330, top: 200, width: 620, height: 500 };

const crop = await sharp('logo.jpeg').extract(REGION).toBuffer();

// alpha mask: dark pixels → opaque
const alpha = await sharp(crop).greyscale().negate().toBuffer();

for (const [name, rgb] of [
  ['light', { r: 17, g: 18, b: 20 }], // ink lines, for light backgrounds
  ['dark', { r: 250, g: 250, b: 250 }], // paper lines, for dark backgrounds
]) {
  await sharp({
    create: { width: REGION.width, height: REGION.height, channels: 3, background: rgb },
  })
    .joinChannel(alpha)
    .png()
    .toFile(`src/assets/logo-mark-${name}.png`);
  console.log('written', name);
}

// favicon: ink square with the paper mark centered
const mark = await sharp({
  create: { width: REGION.width, height: REGION.height, channels: 3, background: { r: 250, g: 250, b: 250 } },
})
  .joinChannel(alpha)
  .png()
  .toBuffer();
await sharp({
  create: { width: 720, height: 720, channels: 4, background: { r: 17, g: 18, b: 20, alpha: 1 } },
})
  .composite([{ input: await sharp(mark).resize(560).toBuffer(), gravity: 'centre' }])
  .resize(128, 128)
  .png()
  .toFile('public/favicon.png');
console.log('favicon written');
