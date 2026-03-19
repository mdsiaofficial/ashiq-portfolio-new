"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setBlogs(data);
        }
      })
      .catch(() => setError("Failed to load blogs"))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getHalfContent = (content: string) => {
    const halfLength = Math.floor(content.length / 2);
    return content.slice(0, halfLength);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-400">Latest posts from my Blogger</p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center py-10">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedBlog(blog)}
                className="block p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                      {blog.contentSnippet || blog.content?.slice(0, 200)}
                    </p>
                    <div className="flex items-center gap-4 text-slate-500 text-sm">
                      <span className="flex items-center gap-2">
                        <FaCalendar size={12} />
                        {formatDate(blog.pubDate)}
                      </span>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="text-slate-500 group-hover:text-cyan-400 transition-colors mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900">
                <h2 className="text-xl font-bold text-white pr-8">{selectedBlog.title}</h2>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <FaCalendar size={12} />
                    {formatDate(selectedBlog.pubDate)}
                  </span>
                </div>
                <div
                  className="prose prose-invert prose-cyan max-w-none text-slate-300"
                  dangerouslySetInnerHTML={{ __html: getHalfContent(selectedBlog.content || selectedBlog.contentSnippet || "") }}
                />
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href={selectedBlog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 font-medium rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    Read Full Blog
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}