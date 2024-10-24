import Event from "../models/eventModel.js";

// Create events
export const createEvents = async (req, res) => {
  try {
    const { title, discription, date } = req.body;

    if (!(title, discription, date)) {
      res.status(202).json({
        success: false,
        message: "All field is mandatory",
      });
    }

    // await Event.sync({ force: false });

    const userEvents = await Event.create({ title, discription, date });
    if (!userEvents) {
      res.status(202).json({
        success: false,
        message: "Events is not create, try again",
      });
    }

    res.status(200).json({
      success: true,
      message: "Events is create successfully",
      userEvents,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in create events",
      error,
    });
  }
};

// get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        // console.log('All Events:', JSON.stringify(events, null, 2));

        res.status(200).json({events}); // Return all events as JSON

      } catch (error) {
        // console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Unable to fetch events' });
      }
};

// Update an event by ID
export const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const { title, discription, date } = req.body;

  try {
    // Find the event by ID
    const event = await Event.findByPk(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Update the event with new data
    await event.update({
      title: title || event.title,
      discription: discription || event.discription,
      date: date || event.date,
    });

    return res
      .status(200)
      .json({ message: "Event updated successfully", event });

  } catch (error) {
    console.error("Error updating event:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the event" });
  }
};

// Deleted an event by ID
export const deleteEvent = async (req, res) => {
    const eventId = req.params.id;

    try {
      const result = await Event.destroy({
        where: { id: eventId },
      });
  
      if (result === 0) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.status(200).json({ message: 'Event deleted successfully' });

    } catch (error) {
      res.status(500).json({ message: 'Error deleting event', error });
    }
  };