export const POSTS_QUERY = `*[_type == "post" && defined(slug)] {
 ...,
 "author": author->,
 "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
 "categories": categories[]->{title}
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
 ...,
 "author": author->,
 "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
 "categories": categories[]->{title}
}`;
