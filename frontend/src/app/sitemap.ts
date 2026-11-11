import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pahamdigital.online";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang-kami/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/harga-paket/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/layanan/website-development/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan/web-application/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan/ai-customer-service/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan/seo-geo/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes];
}
