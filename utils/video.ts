export const getEmbedUrl = (url: string): string => {
  if (!url) return '';

  try {
    if (url.includes('youtube.com/watch')) {
      const urlObj = new URL(url);
      const id = urlObj.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    if (url.includes('youtu.be')) {
      const id = url.split('/').pop();
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  } catch {
    return url;
  }
};