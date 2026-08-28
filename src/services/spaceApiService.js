import { SPACE_FALLBACK_COLLECTIONS } from '../data/spaceFallbackImages';

const NASA_API_KEY = 'DEMO_KEY'; // Standard public demo key
const NASA_APOD_ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
const NASA_SEARCH_ENDPOINT = 'https://images-api.nasa.gov/search?q=nebula+galaxy+space&media_type=image';

/**
 * Fetch NASA Astronomy Picture of the Day
 */
export async function fetchNasaApod() {
  try {
    const cached = sessionStorage.getItem('cosmic_nasa_apod');
    if (cached) {
      return JSON.parse(cached);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(NASA_APOD_ENDPOINT, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`NASA API returned status ${response.status}`);
    }

    const data = await response.json();
    const apodData = {
      title: data.title || 'Cosmic Wonder of the Universe',
      explanation: data.explanation || 'Bức ảnh thiên văn tuyệt đẹp được chụp từ kính viễn vọng không gian.',
      url: data.hdurl || data.url || SPACE_FALLBACK_COLLECTIONS[0].url,
      date: data.date || new Date().toISOString().split('T')[0],
      copyright: data.copyright || 'NASA / APOD Archive',
      mediaType: data.media_type || 'image'
    };

    sessionStorage.setItem('cosmic_nasa_apod', JSON.stringify(apodData));
    return apodData;
  } catch (error) {
    console.warn('NASA APOD API unavailable or rate limited, using cosmic HD archive:', error.message);
    return {
      title: 'James Webb Deep Field (SMACS 0723)',
      explanation: 'Hình ảnh thiên văn có độ phân giải cao nhất về vũ trụ sâu thẳm, ghi lại các thiên hà hình thành từ hơn 13 tỷ năm trước do Kính viễn vọng Không gian James Webb của NASA thực hiện.',
      url: SPACE_FALLBACK_COLLECTIONS[0].url,
      date: new Date().toISOString().split('T')[0],
      copyright: 'NASA / ESA / CSA / STScI',
      mediaType: 'image'
    };
  }
}

/**
 * Fetch a batch of Space images for cards
 */
export async function fetchSpaceGalleries() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(NASA_SEARCH_ENDPOINT, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) throw new Error('NASA Image Library query failed');

    const data = await response.json();
    const items = data?.collection?.items || [];
    
    if (items.length > 0) {
      const parsedItems = items
        .filter(item => item.links && item.links[0]?.href && item.data && item.data[0])
        .slice(0, 8)
        .map((item, index) => ({
          id: `nasa-${index}`,
          title: item.data[0].title,
          url: item.links[0].href,
          thumb: item.links[0].href,
          credit: item.data[0].secondary_creator || 'NASA Space Imagery',
          subtitle: item.data[0].description?.slice(0, 80) + '...' || 'Khám phá vũ trụ sâu thẳm'
        }));

      if (parsedItems.length >= 4) {
        return parsedItems;
      }
    }
  } catch (e) {
    console.info('Using curated high-res space archives for stability');
  }

  return SPACE_FALLBACK_COLLECTIONS;
}
