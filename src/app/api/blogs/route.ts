import Parser from "rss-parser";

const parser = new Parser();

export async function GET() {
  try {
    const feed = await parser.parseURL("https://mdsiaofficial.blogspot.com/feeds/posts/default?alt=rss");
    return Response.json(feed.items);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}