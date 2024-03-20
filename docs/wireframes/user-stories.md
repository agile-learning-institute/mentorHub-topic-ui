# User Stories for `topic-ui`

### Navigate

1. [Create](#create)
2. [Read](#read)
3. [Update](#update)
4. [Delete](#delete)


## Create

### <u>create-topic</u>: Mentors need a way to create a new topic
- Opens `topics/`
- Clicks on 'Add Topic' button
- Redirects to `topic/` view
- After name of topic is entered and validated as unique, redirects to `topic/OID` view
- Sends PATCH request to backend after update of each input field (onBlur)

### <u>create-skill</u>: Mentors need a way to add skills to a topic
- Opens `topic/OID`
- Clicks on + for skills
- Form opens inline
- Fills in new Skill
- Clicks 'Add Skill' button
- Skill name is added to dropdown


### <u>update</u>: Mentors need a way to add a resource to a topic
- Opens `topic/OID`
- Clicks on + for skills
- Form opens inline
- Clicks 'Add Resource'
- Resource name is added to dropdown
- Redirects to `resource/OID`
- Sends PATCH request to backend after update of each input field (onBlur)





## Read

### <u>read-topics</u>: Mentors need a way to find a specific Topic by Category
- Opens `/`
- Redirects to `topics/` with by category layout
- Clicks on Topic and opens `/topic/OID` view

### <u>read-topics</u>: Mentors need a way to find a specific Topic by Path
- Opens `topics/`
- Clicks on toggle button for 'Path'
- Clicks on Topic and opens `topic/OID` view

## Update

### <u>update-topic</u>: Mentors need a way to update a specific Topic
- Opens `topics/`
- Clicks on 'Edit' button for specific topic
- Redirects to `topic/OID` view
- Updates field(s)
- Sends PATCH request to backend after update of each input field (onBlur)



## Delete

### <u>delete-topic</u>: Mentors need a way to delete a topic
- Opens `topic/OID`
- Clicks 'Delete Topic Button'
- Topic is removed from database

### <u>delete-skill</u>: Mentors need a way to remove a skill from a topic
- Opens `topic/OID`
- Clicks on dropdown menu for skills
- Click a delete icon on a item in dropdown
- Skill is removed from database and dropdown


### <u>delete-resource</u>: Mentors need a way to remove a resource from a topic
- Opens `topics/`
- Clicks on 'Edit' button for specific topic
- Clicks on dropdown menu for resources
- Click a delete icon on a item in dropdown
- Resource is removed from database and dropdown
