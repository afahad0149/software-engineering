# Weekly assessment 4

Sections are marked as H2 (##), questions as H3 (###).
For each question please provide a brief answer below it.
You can use Markdown syntax (e.g. to include code snippets).

## Back-end frameworks

### What is the difference between Express and Koa?

Express includes routing and templates in the application framework. Koa requires modules for these features, therefore making it is more modular and customizable.

## Databases

### List the type of associations that data can have in a relational database, then provide an example for each one, and explain the corresponding database schema.

One-to-one (1:1) relationship means that each record in Table A relates to one, and only one, record in Table B, and each record in Table B relates to one, and only one, record in Table A. 

One-to-many (1:N) relationship means a record in Table A can relate to zero, one, or many records in Table B. Many records in Table B can relate to one record in Table A. The potential relationship is what's important; for a single record in Table A, there might be no related records in Table B, or there might be only one related record, but there could be many.

Many-to-one

Many-to-many


### What is a foreign key?

A key that correspont to the index ky of another table.

## HTML and CSS

### Explain the different values that the "position" property can have.

Static, relative, absolute, fixed, sticky.

## PWAs

### What are the core uses of service workers in PWAs?

They enable fast loading (regardless of the network), offline access, push notifications, and other capabilities.
