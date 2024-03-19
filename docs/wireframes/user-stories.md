# User Stories for `topic-ui` Microservice

### **Mentors** need a way to **access to current mentorHub topics, and associated skills and resources**

#### User Stories for `/`:

- Opens `/`, a mentor will be redirected to `/topics`

#### User Stories for `/admin`:

- Opens `/admin`, a mentor will be able to view the current UI version, API version, Database Collections, API Config Items, and Enumerators.

#### User Stories for `/topics`:

- Opens `/topics`, a mentor will be able to view a list of current topics that are grouped by `categories`

- As a mentor, I will be able click on a button to edit an individual topic

- As a mentor, I will be able click on a button that will take me to the `/topic` page to create a new topic

#### User Stories for `/topic`:

- As a mentor, I will be able to enter a name for a new topic into an input field. It will be validated on backend for uniqueness. If valid, it will be redirected to an edit form for new topic at `/topic/{oid}`


#### User Stories for `/topic/{oid}`:

- Opens `/topic/{oid}`, a mentor will be able to Edit a single topic and its related fields.

- When a mentor changes input field (onBlur), an API patch call is made to update the property that changed.
