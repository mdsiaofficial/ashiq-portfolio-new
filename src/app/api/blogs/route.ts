import Parser from "rss-parser";

// 1. Move configuration constants outside the handler
const BLOG_CONFIG = {
  medium: {
    url: "https://medium.com/feed/@mdsiaofficial",
    options: { customFields: { item: [["content:encoded", "content"]] } }
  },
  blogspot: {
    url: "https://mdsiaofficial.blogspot.com/feeds/posts/default?alt=rss",
    options: {}
  }
};

// 2. Use an environment variable or a config flag
const SOURCE: 'medium' | 'blogspot' = "blogspot"; 

export async function GET() {
  try {
    const config = BLOG_CONFIG[SOURCE];
    const parser = new Parser(config.options);
    
    const feed = await parser.parseURL(config.url);
    
    console.log("feed",feed.items);

    // 3. Add a simple Cache-Control header to improve performance
    return Response.json(feed.items, {
      headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate' }
    });
    
  } catch (error) {
    console.error(`[RSS_FETCH_ERROR]:`, error);
    return Response.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}