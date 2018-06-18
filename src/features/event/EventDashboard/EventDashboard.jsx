import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

class EventDashboard extends Component {
  render() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList />
            </Grid.Column>
            <Grid.Column width={6}>
                <Button positive content='Create Event'/>
                <EventForm />
            </Grid.Column>
        </Grid>
    )
  }
}

export default EventDashboard;

// Line 7 brings in Semantic UI to separate the columns to an equal 16