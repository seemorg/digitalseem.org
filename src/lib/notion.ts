import { env } from "@/env";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { type MdBlock } from "notion-to-md/build/types";
import { cache } from "react";
import slugify from "slugify";

const notion = new Client({
  auth: env.NOTION_API_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true,
  },
});

export const getOpenCareers = cache(async () => {
  const mdblocks = await n2m.pageToMarkdown("bbb5cddf5c7845008de0003fc11e41c8");
  const nonChildBlocks = mdblocks.filter(
    (block) => block.type !== "child_page",
  );

  const jobs = mdblocks
    .filter(
      (block) => block.type === "child_page" && !block.parent.startsWith("_"),
    )
    .map((job) => {
      const title = job.parent;

      const type = findBlockContentByPrefix(job.children, "type:");
      const location = findBlockContentByPrefix(job.children, "location:");
      const salary = findBlockContentByPrefix(job.children, "salary:");
      const slug =
        findBlockContentByPrefix(
          job.children,
          "slug:",
        )?.parent?.toLowerCase() ?? slugify(title, { lower: true });

      const application = findBlockContentByPrefix(
        job.children,
        "application:",
      );

      const idsToRemove = [type, location, salary, application]
        .filter((a) => !!a)
        .map((block) => block?.blockId);

      const newChildren = job.children.filter(
        (block) => !idsToRemove.includes(block.blockId),
      );

      return {
        slug,
        title,
        type: type?.parent,
        location: location?.parent,
        salary: salary?.parent,
        application: application?.parent,
        content: n2m.toMarkdownString(newChildren)?.parent,
      };
    });

  const description = findBlockContentByPrefix(
    nonChildBlocks,
    "description:",
  )?.parent;
  const mission = findBlockContentByPrefix(nonChildBlocks, "mission:")?.parent;

  return {
    description,
    mission,
    jobs,
  };
});

const findBlockContentByPrefix = (blocks: MdBlock[], prefix: string) => {
  const block = blocks.find(
    (block) =>
      block.type === "paragraph" &&
      block.parent.toLowerCase().startsWith(prefix),
  );

  if (!block) {
    return null;
  }

  // remove the prefix from the parent
  const cleanBlock = {
    ...block,
    parent: block.parent.slice(prefix.length).trim(),
  };

  return cleanBlock;
};
