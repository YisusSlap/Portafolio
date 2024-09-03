import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {serialize} from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';


const root = process.cwd();

export const getFiles = () => {
    return fs.readdirSync(path.join(root, "post"));
};

export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(
        path.join(root, "post", `${slug}.mdx`),
        "utf-8"
    );

    const {data, content} = await matter(mdxSource);
    const source = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],  // Agrega remark-gfm aquí
        },
    });

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    };
};

export const getAllFilesMetadata = () => {
    const files = getFiles();

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(
            path.join(root, "post", postSlug),
            "utf-8"
        );
        const { data } = matter(mdxSource);

        return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
    }, []);
};