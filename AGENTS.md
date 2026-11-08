<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site shell (header, footer, toaster, page-enter transition) lives in `src/routes/__root.tsx`; pages render only their content. Why: one consistent nav across all routes.
- Shared page building blocks live in `src/components/nexora/sections.tsx`, and per-route head tags use `pageHead()` from `src/lib/seo.ts`. Why: consistent layout and SEO.
- Keep the homepage campaign slider in its own component and confine homepage introduction changes to that section. Why: preserve the existing sections and keep slider behavior reusable and isolated.
