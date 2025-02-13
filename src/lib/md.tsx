import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";

// Remove wrapping p tags from text nodes
const removeWrappingPTags =
  () =>
  (tree: {
    children: {
      type: string;
      children: {
        type: string;
      }[];
    }[];
  }) => {
    if (tree.children?.length === 1 && tree.children[0]!.type === "paragraph") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      tree.children = tree.children[0]!.children as any;
    }

    return tree;
  };

export const compileMarkdown = cache(async (md: string, wrapInP = true) => {
  const { content } = await compileMDX({
    source: md,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: wrapInP ? [] : [[removeWrappingPTags]],
      },
    },
    components: {
      a: (props) => (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-600 underline underline-offset-4 transition-colors hover:text-lime-800"
        />
      ),
    },
  });

  return content;
});
