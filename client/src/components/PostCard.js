import React from 'react' 
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function PostCard({ 
    post: { body, createdAt, id, username, likeCount, commentCount, likes } 
}) {

    function likePost(){
        console.log('Like post!!')
    }

    function commentOnPost(){
        console.log('comment on post')
    }
    return (
        <Card fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
      <Button color='teal' basic>
        <Icon name='heart' />
        Like
      </Button>
      <Label basic color='teal' pointing='left'>
        {likeCount}
      </Label>
    </Button>
    <Button as='div' labelPosition='right' onClick={commentOnPost}>
      <Button color='teal' basic>
        <Icon name='heart' />
        Like
      </Button>
      <Label basic color='teal' pointing='left'>
        {likeCount}
      </Label>
    </Button>
          </Card.Content>
        </Card> 
    )
}

export default PostCard