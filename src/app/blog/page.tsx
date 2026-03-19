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
    <div className="min-h-screen bg-slate-950 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Blog</h1>
          <p className="text-sm sm:text-base text-slate-400">Latest posts from my Blogger</p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-12 sm:py-16 md:py-20">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center py-8 sm:py-10 text-sm sm:text-base">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid gap-3 sm:gap-4 md:gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedBlog(blog)}
                className="block p-3 sm:p-4 md:p-6 bg-slate-900/50 border border-slate-800 rounded-lg sm:rounded-xl hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1 sm:mb-2 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mb-2 sm:mb-3">
                      {blog.contentSnippet || blog.content?.slice(0, 200)}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4 text-slate-500 text-xs sm:text-sm">
                      <span className="flex items-center gap-1 sm:gap-2">
                        <FaCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                        {formatDate(blog.pubDate)}
                      </span>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1 sm:mt-2 flex-shrink-0" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-black/80 backdrop-blur-sm overflow-x-hidden"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-slate-800 bg-slate-900">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-white pr-6 sm:pr-8 line-clamp-2">{selectedBlog.title}</h2>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-1.5 sm:p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <FaTimes className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </button>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <FaCalendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {formatDate(selectedBlog.pubDate)}
                  </span>
                </div>
                <div
                  className="prose prose-invert prose-cyan max-w-none text-xs sm:text-sm md:text-base text-slate-300"
                  dangerouslySetInnerHTML={{ __html: getHalfContent(selectedBlog.content || selectedBlog.contentSnippet || "") }}
                />
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800">
                  <a
                    href={selectedBlog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-cyan-500 text-slate-900 font-medium text-sm sm:text-base rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    Read Full Blog
                    <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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