Experimenting with KitaJs for the JSX experience when working with HTMX and trying out Bun.

Learnings:
- HTMX AJAX request endpoints should represent the server sided logic not the hypermedia it returns
- Components and Handlers have a many-to-many relationship.

Components: Responsible for returning UI components

Handlers: Responsible for combining components according to server sided logic