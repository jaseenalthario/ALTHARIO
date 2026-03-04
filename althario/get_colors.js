import { Vibrant } from 'node-vibrant/node';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagePath = join(__dirname, 'public/images/logo_std.png');

Vibrant.from(imagePath).getPalette().then((palette) => {
    console.log('Vibrant:', palette.Vibrant?.hex);
    console.log('DarkVibrant:', palette.DarkVibrant?.hex);
    console.log('LightVibrant:', palette.LightVibrant?.hex);
    console.log('Muted:', palette.Muted?.hex);
    console.log('DarkMuted:', palette.DarkMuted?.hex);
    console.log('LightMuted:', palette.LightMuted?.hex);
}).catch(console.error);
