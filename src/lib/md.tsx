import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";

export const compileMarkdown = cache(async (md: string) => {
  const { content } = await compileMDX({
    source: md,
    options: {
      parseFrontmatter: false,
    },
    components: {
      a: (props) => (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-100 underline underline-offset-4 hover:text-white"
        />
      ),
    },
  });

  return content;
});
